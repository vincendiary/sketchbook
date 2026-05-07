const KW = new Set(['let', 'const', 'var', 'function', 'for', 'if', 'else', 'return', 'new', 'class', 'this', 'of', 'in']);
const FN = new Set(['createCanvas', 'background', 'noise', 'floor', 'setup', 'draw', 'fromAngle', 'setMag']);

const escMap: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => escMap[c]);

export function highlightP5(code: string): string {
	const re = /(\/\/[^\n]*)|(['"`])(?:\\.|(?!\2).)*\2|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_$][\w$]*\b)|(\s+)|([^\w\s])/g;
	const out: string[] = [];
	let m: RegExpExecArray | null;
	while ((m = re.exec(code))) {
		const tok = m[0];
		if (m[1]) out.push(`<span class="tk-co">${esc(tok)}</span>`);
		else if (m[2]) out.push(`<span class="tk-st">${esc(tok)}</span>`);
		else if (m[3]) out.push(`<span class="tk-nu">${esc(tok)}</span>`);
		else if (m[4]) {
			if (KW.has(tok)) out.push(`<span class="tk-kw">${tok}</span>`);
			else if (FN.has(tok)) out.push(`<span class="tk-fn">${tok}</span>`);
			else if (/^[A-Z][A-Z_]+$/.test(tok)) out.push(`<span class="tk-cn">${tok}</span>`);
			else out.push(esc(tok));
		} else {
			out.push(esc(tok));
		}
	}
	return out.join('');
}
