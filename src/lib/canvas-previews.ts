type PreviewFn = (w: number, h: number, accent: string) => string;

const seedRand = (s: number) => () => {
	s = (s * 9301 + 49297) % 233280;
	return s / 233280;
};

function flowField(w: number, h: number, accent: string): string {
	const r = seedRand(42);
	const lines: string[] = [];
	for (let i = 0; i < 80; i++) {
		let x = r() * w;
		let y = r() * h;
		let path = `M${x.toFixed(1)} ${y.toFixed(1)}`;
		for (let s = 0; s < 60; s++) {
			const a = Math.sin(x * 0.012 + y * 0.018) * Math.PI * 2 + Math.cos(y * 0.009) * Math.PI;
			x += Math.cos(a) * 2.2;
			y += Math.sin(a) * 2.2;
			if (x < 0 || x > w || y < 0 || y > h) break;
			path += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
		}
		lines.push(path);
	}
	return svg(w, h, lines.map((p) => `<path d="${p}" stroke="${accent}" stroke-width="0.5" fill="none" opacity="0.55"/>`).join(''));
}

function recursiveTrees(w: number, h: number, accent: string): string {
	const branches: string[] = [];
	function branch(x: number, y: number, len: number, angle: number, depth: number) {
		if (depth === 0 || len < 2) return;
		const x2 = x + Math.cos(angle) * len;
		const y2 = y + Math.sin(angle) * len;
		branches.push(
			`<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${accent}" stroke-width="${(depth * 0.4).toFixed(2)}" stroke-linecap="round"/>`
		);
		branch(x2, y2, len * 0.72, angle - 0.42, depth - 1);
		branch(x2, y2, len * 0.72, angle + 0.42, depth - 1);
	}
	branch(w / 2, h - 8, h * 0.28, -Math.PI / 2, 9);
	return svg(w, h, branches.join(''));
}

function particleAttractor(w: number, h: number, accent: string): string {
	const cx = w / 2;
	const cy = h / 2;
	const dots: string[] = [];
	for (let i = 0; i < 220; i++) {
		const t = i * 0.13;
		const r = 8 + t * 1.4;
		const x = cx + Math.cos(t) * r * 0.9;
		const y = cy + Math.sin(t) * r * 0.7;
		dots.push(
			`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.8 + (i / 220) * 1.5).toFixed(2)}" fill="${accent}" opacity="${(0.2 + (i / 220) * 0.6).toFixed(2)}"/>`
		);
	}
	return svg(w, h, dots.join(''));
}

function voronoiMosaic(w: number, h: number, accent: string): string {
	const r = seedRand(7);
	const pts: [number, number][] = [];
	for (let i = 0; i < 24; i++) pts.push([r() * w, r() * h]);
	const cells: string[] = [];
	const step = 6;
	for (let y = 0; y < h; y += step) {
		for (let x = 0; x < w; x += step) {
			let best = 0;
			let bd = 1e9;
			for (let i = 0; i < pts.length; i++) {
				const dx = x - pts[i][0];
				const dy = y - pts[i][1];
				const d = dx * dx + dy * dy;
				if (d < bd) {
					bd = d;
					best = i;
				}
			}
			const op = 0.18 + (best / pts.length) * 0.55;
			cells.push(`<rect x="${x}" y="${y}" width="${step}" height="${step}" fill="${accent}" opacity="${op.toFixed(2)}"/>`);
		}
	}
	const dots = pts.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.5" fill="var(--canvas-bg)"/>`).join('');
	return svg(w, h, cells.join('') + dots);
}

function waveClock(w: number, h: number, accent: string): string {
	const cx = w / 2;
	const cy = h / 2;
	const rings: string[] = [];
	for (let r = 10; r < Math.min(w, h) / 2 - 8; r += 4) {
		const points: string[] = [];
		for (let a = 0; a < Math.PI * 2; a += 0.08) {
			const wob = Math.sin(a * 6 + r * 0.2) * (r * 0.06);
			const rr = r + wob;
			points.push(`${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`);
		}
		rings.push(`<polygon points="${points.join(' ')}" fill="none" stroke="${accent}" stroke-width="0.5" opacity="0.45"/>`);
	}
	return svg(w, h, rings.join(''));
}

function tenPrint(w: number, h: number, accent: string): string {
	const r = seedRand(3);
	const cell = 14;
	const cells: string[] = [];
	for (let y = 0; y < h; y += cell) {
		for (let x = 0; x < w; x += cell) {
			const flip = r() > 0.5;
			const path = flip ? `M${x} ${y} L${x + cell} ${y + cell}` : `M${x + cell} ${y} L${x} ${y + cell}`;
			cells.push(`<path d="${path}" stroke="${accent}" stroke-width="1.4" stroke-linecap="round"/>`);
		}
	}
	return svg(w, h, cells.join(''));
}

function noiseLandscape(w: number, h: number, accent: string): string {
	const layers: string[] = [];
	for (let l = 0; l < 5; l++) {
		let pts = `M0 ${h}`;
		for (let x = 0; x <= w; x += 4) {
			const y = h * 0.4 + Math.sin(x * 0.02 + l) * 12 + Math.sin(x * 0.05 + l * 2.3) * 8 + l * 16;
			pts += ` L${x} ${y.toFixed(1)}`;
		}
		pts += ` L${w} ${h} Z`;
		layers.push(`<path d="${pts}" fill="${accent}" opacity="${(0.25 + l * 0.1).toFixed(2)}"/>`);
	}
	return svg(w, h, layers.join(''));
}

function gridOfCircles(w: number, h: number, accent: string): string {
	const out: string[] = [];
	const step = 18;
	for (let y = step / 2; y < h; y += step) {
		for (let x = step / 2; x < w; x += step) {
			const dx = x - w / 2;
			const dy = y - h / 2;
			const d = Math.sqrt(dx * dx + dy * dy);
			const r = 2 + Math.sin(d * 0.06) * 4 + 4;
			out.push(`<circle cx="${x}" cy="${y}" r="${Math.max(1, r).toFixed(1)}" fill="${accent}" opacity="0.7"/>`);
		}
	}
	return svg(w, h, out.join(''));
}

function bouncingBall(w: number, h: number, accent: string): string {
	const ball = `<circle cx="${w * 0.35}" cy="${h * 0.55}" r="${Math.min(w, h) * 0.12}" fill="${accent}"/>`;
	const ghosts: string[] = [];
	for (let i = 1; i < 6; i++) {
		ghosts.push(
			`<circle cx="${w * (0.35 - i * 0.04)}" cy="${h * (0.55 + Math.sin(i) * 0.08)}" r="${(Math.min(w, h) * 0.12 - i * 1.2).toFixed(1)}" fill="${accent}" opacity="${(0.15 - i * 0.02).toFixed(2)}"/>`
		);
	}
	return svg(w, h, ghosts.join('') + ball);
}

function rgbSquare(w: number, h: number): string {
	const inner =
		`<rect x="${w * 0.15}" y="${h * 0.15}" width="${w * 0.4}" height="${h * 0.4}" fill="#e74c3c" opacity="0.85"/>` +
		`<rect x="${w * 0.35}" y="${h * 0.3}" width="${w * 0.4}" height="${h * 0.4}" fill="#27ae60" opacity="0.75"/>` +
		`<rect x="${w * 0.25}" y="${h * 0.45}" width="${w * 0.4}" height="${h * 0.4}" fill="#2980b9" opacity="0.7"/>`;
	return svg(w, h, inner);
}

function svg(w: number, h: number, body: string): string {
	return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block"><rect width="${w}" height="${h}" fill="var(--canvas-bg)"/>${body}</svg>`;
}

const PREVIEWS: Record<string, PreviewFn> = {
	'flow-field': flowField,
	'recursive-trees': recursiveTrees,
	'particle-attractor': particleAttractor,
	'voronoi-mosaic': voronoiMosaic,
	'wave-clock': waveClock,
	'self-portrait-glitch': voronoiMosaic,
	'l-system-grass': recursiveTrees,
	'orbit-sim': particleAttractor,
	'noise-landscape': noiseLandscape,
	'typography-bouncer': bouncingBall,
	'mouse-trail': flowField,
	'pong-remake': (w, h) => rgbSquare(w, h),
	'ten-print': tenPrint,
	'color-wheel': gridOfCircles,
	'rotating-square': (w, h) => rgbSquare(w, h),
	'sine-rings': waveClock,
	'random-walker': flowField,
	'mouse-paint': flowField,
	'bouncing-ball': bouncingBall,
	'grid-of-circles': gridOfCircles,
	'hello-shapes': (w, h) => rgbSquare(w, h),
	'first-sketch': bouncingBall,
	'ellipse-grid': gridOfCircles,
	'rgb-square': (w, h) => rgbSquare(w, h),
};

export function renderPreview(slug: string, w: number, h: number, accent: string): string {
	const fn = PREVIEWS[slug] ?? ((w2, h2) => rgbSquare(w2, h2));
	return fn(w, h, accent);
}
