import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const staticDir = path.join(root, 'static');
const outputDir = path.join(staticDir, 'p5');
const TYPES =
	'(?:void|(?:int|float|double|boolean|String|char|color|PImage|PFont|PShape|PVector|AudioPlayer|Minim|Movie|Capture)(?:\\[\\])*|ArrayList<[^>]+>|[A-Za-z_$][A-Za-z0-9_]*(?:<[^>]+>)?(?:\\[\\])*)';
const HOOKS = ['preload', 'setup', 'draw', 'mousePressed', 'mouseReleased', 'mouseDragged', 'mouseClicked', 'keyPressed', 'keyReleased', 'keyTyped'];

const files = walk(staticDir).filter((file) => !relativePath(file).startsWith('p5/'));
const groups = groupBySketch(files.filter((file) => file.toLowerCase().endsWith('.pde')));

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

let count = 0;
for (const [folder, sourceFiles] of groups) {
	const slug = slugify(relativePath(folder));
	const assets = files.filter((file) => file.startsWith(`${folder}${path.sep}`) && !file.toLowerCase().endsWith('.pde'));
	const source = sourceFiles
		.sort(compare)
		.map((file) => `// ${path.basename(file)}\n${fs.readFileSync(file, 'utf8')}`)
		.join('\n\n');
	const code = wrapSketch(slug, dropUnmatchedClosingBraces(transformProcessing(source, assets)));
	fs.writeFileSync(path.join(outputDir, `${slug}.js`), code);
	count += 1;
}

console.log(`Generated ${count} p5 asset files in ${relativePath(outputDir)}`);

function walk(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const out = [];

	for (const entry of entries) {
		if (entry.name.startsWith('.')) continue;
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walk(fullPath));
		else out.push(fullPath);
	}

	return out;
}

function groupBySketch(sourceFiles) {
	const groups = new Map();
	for (const sourceFile of sourceFiles) {
		const folder = path.dirname(sourceFile);
		groups.set(folder, [...(groups.get(folder) ?? []), sourceFile]);
	}
	return groups;
}

function compare(a, b) {
	return a.localeCompare(b);
}

function relativePath(file) {
	return path.relative(staticDir, file).replaceAll(path.sep, '/');
}

function transformProcessing(source, assets) {
	const classStack = [];
	const lines = source
		.replace(/\r\n?/g, '\n')
		.replace(/\b((?:int|float|double|boolean|String|char|color|[A-Za-z_$]\w*)\[\])(?=[A-Za-z_$])/g, '$1 ')
		.replace(/\bArrayList\s*<[^>]+>/g, 'ArrayList')
		.replace(/\bnew\s+ArrayList\s*<[^>]+>\s*\(/g, 'new ArrayList(')
		.replace(/\bnew\s+[A-Za-z_$]\w*\s*\[\s*([^\]]+)\s*\]\s*\[\s*([^\]]+)\s*\]/g, 'Array.from({ length: $1 }, () => new Array($2))')
		.replace(/\bnew\s+(?:int|float|double|color)\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(0)')
		.replace(/\bnew\s+boolean\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill(false)')
		.replace(/\bnew\s+String\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1).fill("")')
		.replace(/\bnew\s+[A-Za-z_$]\w*\s*\[\s*([^\]]+)\s*\]/g, 'new Array($1)')
		.replace(/\bfor\s*\(\s*(?:final\s+)?(?:[A-Za-z_][\w]*(?:<[^>]+>)?(?:\[\])?)\s+([A-Za-z_$]\w*)\s*:\s*([^)]+)\)/g, 'for (const $1 of $2)')
		.replace(/\((?:int|float|double|boolean|String|char|color)\)\s*/g, '')
		.replace(/#([0-9a-fA-F]{6,8})\b/g, '"#$1"')
		.split('\n');

	return lines
		.map((line) => {
			const currentClass = classStack.at(-1);
			const classDepth = currentClass?.depth ?? 0;
			let next = line;
			const classMatch = next.match(/^(\s*)class\s+([A-Za-z_$]\w*)\s*(?:extends\s+[A-Za-z_$]\w*)?\s*\{/);

			if (classMatch) next = `${classMatch[1]}var ${classMatch[2]} = class ${classMatch[2]} {`;
			else if (currentClass && classDepth === 1) next = transformClassLine(next, currentClass);
			else if (currentClass && classDepth > 1) next = qualifyClassFields(transformStatementLine(next), currentClass.fields);
			else next = transformStatementLine(next);

			next = transformCommonExpressions(next, assets);
			updateClassStack(classStack, next, classMatch?.[2]);
			return next;
		})
		.join('\n');
}

function transformClassLine(line, classInfo) {
	if (/^\s*(?:return|throw|break|continue|if|else|switch|case|default|while|do|try|catch|finally)\b/.test(line)) return line;

	const { name: className, fields } = classInfo;
	const constructor = line.match(new RegExp(`^(\\s*)${className}\\s*\\(([^)]*)\\)\\s*\\{`));
	if (constructor) return `${constructor[1]}constructor(${stripParamTypes(constructor[2])}) {`;

	const method = line.match(new RegExp(`^(\\s*)${TYPES}\\s+([A-Za-z_$]\\w*)\\s*\\(([^)]*)\\)\\s*\\{`));
	if (method) return `${method[1]}${method[2]}(${stripParamTypes(method[3])}) {`;

	const declaration = line.match(new RegExp(`^(\\s*)${TYPES}\\s+([A-Za-z_$][\\w$]*(?:\\s*\\[\\])?.*?);\\s*(//.*)?$`));
	if (declaration) {
		for (const field of fieldNames(declaration[2])) fields.add(field);
		return classFields(declaration[1], declaration[2], declaration[3] ?? '');
	}

	return transformStatementLine(line);
}

function transformStatementLine(line) {
	if (/^\s*(?:return|throw|break|continue|if|else|switch|case|default|while|do|try|catch|finally)\b/.test(line)) return line;

	if (/^\s*import\s+.+;\s*(?:\/\/.*)?$/.test(line)) return `// ${line.trim()} // Processing import omitted`;

	const fn = line.match(new RegExp(`^(\\s*)${TYPES}\\s+([A-Za-z_$]\\w*)\\s*\\(([^)]*)\\)\\s*\\{`));
	if (fn) return `${fn[1]}function ${fn[2]}(${stripParamTypes(fn[3])}) {`;

	const declaration = line.match(new RegExp(`^(\\s*)${TYPES}\\s+([A-Za-z_$][\\w$]*(?:\\s*\\[\\])?.*?);\\s*(//.*)?$`));
	if (declaration) return `${declaration[1]}var ${convertDeclarators(declaration[2])};${declaration[3] ? ` ${declaration[3]}` : ''}`;

	return line;
}

function transformCommonExpressions(line, assets) {
	return line
		.replace(/(?<!\.)\bsize\s*\(/g, 'createCanvas(')
		.replace(/\bprintln\s*\(/g, 'console.log(')
		.replace(/\bprint\s*\(/g, 'console.log(')
		.replace(/\bfor\s*\(\s*(?:int|float|double)\s+([A-Za-z_$]\w*)/g, 'for (var $1')
		.replace(/\b(mousePressed|keyPressed)\b(?!\s*\()/g, (match) => (match === 'mousePressed' ? 'mouseIsPressed' : 'keyIsPressed'))
		.replace(/\bmouseButton\s*==\s*LEFT\b/g, 'mouseButton === LEFT')
		.replace(/\bmouseButton\s*==\s*RIGHT\b/g, 'mouseButton === RIGHT')
		.replace(/\bloadImage\s*\(\s*(['"])([^'"]+)\1\s*\)/g, (_, _quote, name) => `loadImage(sketchbookAsset(${JSON.stringify(resolveAssetName(name, assets))}))`)
		.replace(/\bloadFont\s*\(\s*(['"])([^'"]+)\1\s*\)/g, (_, _quote, name) => `loadFont(sketchbookAsset(${JSON.stringify(resolveAssetName(name, assets))}))`);
}

function stripParamTypes(params) {
	return params
		.split(',')
		.map((param) =>
			param
				.trim()
				.replace(/^final\s+/, '')
				.replace(new RegExp(`^${TYPES}\\s+`), '')
				.replace(/\[\]\s*/g, '')
		)
		.filter(Boolean)
		.join(', ');
}

function classFields(indent, value, comment = '') {
	const fields = splitDeclarators(value);
	return fields
		.map((field, index) => `${indent}${convertDeclarator(field)};${index === fields.length - 1 && comment ? ` ${comment}` : ''}`)
		.join('\n');
}

function fieldNames(value) {
	return splitDeclarators(value)
		.map((field) => field.trim().match(/^([A-Za-z_$]\w*)/)?.[1])
		.filter(Boolean);
}

function qualifyClassFields(line, fields) {
	if (fields.size === 0) return line;
	const names = [...fields].map(escapeRegExp).join('|');
	const re = new RegExp(`(^|[^.\\w$])(${names})(?![\\w$])`, 'g');
	const commentIndex = line.indexOf('//');
	const code = commentIndex === -1 ? line : line.slice(0, commentIndex);
	const comment = commentIndex === -1 ? '' : line.slice(commentIndex);
	let out = '';
	let chunk = '';
	let inString = false;
	let quote = '';

	for (let i = 0; i < code.length; i += 1) {
		const char = code[i];
		if (inString) {
			chunk += char;
			if (char === quote && code[i - 1] !== '\\') {
				out += chunk;
				chunk = '';
				inString = false;
			}
			continue;
		}

		if (char === '"' || char === "'" || char === '`') {
			out += chunk.replace(re, '$1this.$2');
			chunk = char;
			inString = true;
			quote = char;
			continue;
		}

		chunk += char;
	}

	out += inString ? chunk : chunk.replace(re, '$1this.$2');
	return out + comment;
}

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function convertDeclarators(value) {
	return splitDeclarators(value)
		.map(convertDeclarator)
		.join(', ');
}

function convertDeclarator(value) {
	return value.trim().replace(/=\s*\{(.*)\}\s*$/, '= [$1]');
}

function splitDeclarators(value) {
	const parts = [];
	let depth = 0;
	let start = 0;

	for (let i = 0; i < value.length; i += 1) {
		const char = value[i];
		if ('([{'.includes(char)) depth += 1;
		if (')]}'.includes(char)) depth -= 1;
		if (char === ',' && depth === 0) {
			parts.push(value.slice(start, i));
			start = i + 1;
		}
	}

	parts.push(value.slice(start));
	return parts;
}

function updateClassStack(stack, line, newClass) {
	if (newClass) stack.push({ name: newClass, depth: 0, fields: new Set() });
	for (const char of stripStringsAndLineComment(line)) {
		if (char === '{' && stack.length > 0) stack[stack.length - 1].depth += 1;
		if (char === '}' && stack.length > 0) {
			stack[stack.length - 1].depth -= 1;
			if (stack[stack.length - 1].depth <= 0) stack.pop();
		}
	}
}

function stripStringsAndLineComment(line) {
	return line.replace(/(['"`])(?:\\.|(?!\1).)*\1/g, '').replace(/\/\/.*$/, '');
}

function dropUnmatchedClosingBraces(code) {
	let depth = 0;
	return code
		.split('\n')
		.map((line) => {
			const stripped = stripStringsAndLineComment(line);
			const opens = [...stripped.matchAll(/\{/g)].length;
			const closes = [...stripped.matchAll(/\}/g)].length;
			if (closes > 0 && depth + opens - closes < 0 && line.trim().startsWith('}')) return `// ${line} // unmatched Processing brace`;
			depth += opens - closes;
			return line;
		})
		.join('\n');
}

function resolveAssetName(name, assets) {
	const normalized = name.replaceAll('\\', '/');
	if (normalized.includes('/')) return normalized;
	const dataAsset = assets.find((asset) => relativePath(asset).toLowerCase().endsWith(`/data/${normalized.toLowerCase()}`));
	if (dataAsset) return relativePath(dataAsset);
	return normalized;
}

function wrapSketch(slug, code) {
	const hookAssignments = HOOKS.map((hook) => `if (typeof ${hook} === "function") p.${hook} = ${hook};`).join('\n\t\t');
	return `window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__[${JSON.stringify(slug)}] = function (p) {
\tclass ArrayList extends Array {
\t\tadd(index, value) {
\t\t\tif (arguments.length === 1) this.push(index);
\t\t\telse this.splice(index, 0, value);
\t\t\treturn true;
\t\t}
\t\tget(index) { return this[index]; }
\t\tset(index, value) { this[index] = value; return value; }
\t\tsize() { return this.length; }
\t\tremove(value) {
\t\t\tif (typeof value === "number") return this.splice(value, 1)[0];
\t\t\tconst index = this.indexOf(value);
\t\t\tif (index >= 0) return this.splice(index, 1)[0];
\t\t\treturn undefined;
\t\t}
\t}
\tclass AudioPlayer {
\t\tplay() {}
\t\trewind() {}
\t\tloop() {}
\t\tpause() {}
\t\tclose() {}
\t\tsetGain() {}
\t\tposition() { return 0; }
\t\tlength() { return 1; }
\t\tisPlaying() { return false; }
\t}
\tclass Minim {
\t\tloadFile() { return new AudioPlayer(); }
\t\tstop() {}
\t}
\tfunction PVector(x = 0, y = 0, z = 0) { return p.createVector(x, y, z); }
\tPVector.fromAngle = function (angle, length) {
\t\tconst VectorClass = p.constructor?.Vector || window.p5?.Vector;
\t\tconst vector = VectorClass.fromAngle(angle);
\t\tif (length !== undefined) vector.setMag(length);
\t\treturn vector;
\t};
\tfunction sketchbookAsset(file) {
\t\tif (/^(?:https?:)?\\//.test(file)) return file;
\t\tconst base = window.__SKETCHBOOK_ASSET_BASE__ || "";
\t\treturn base + "/" + file.replace(/^\\/+/, "");
\t}
\twith (p) {
${indent(code)}

\t\t${hookAssignments}
\t}
};
`;
}

function indent(value) {
	return value
		.split('\n')
		.map((line) => `\t\t${line}`)
		.join('\n');
}

function slugify(value) {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}
