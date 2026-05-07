export type Tag = 'assignments' | 'lessons' | 'projects';

export type Sketch = {
	slug: string;
	title: string;
	year: number;
	date: string;
	tags: Tag[];
};

export type FeaturedSketch = Sketch & {
	purpose: string;
	journal: string[];
	code: string;
};

export const SKETCHES: Sketch[] = [
	{ slug: 'recursive-trees', title: 'Recursive Trees', year: 2018, date: 'Apr 12, 2018', tags: ['lessons', 'projects'] },
	{ slug: 'flow-field', title: 'Flow Field', year: 2018, date: 'Mar 03, 2018', tags: ['projects'] },
	{ slug: 'particle-attractor', title: 'Particle Attractor', year: 2018, date: 'Feb 18, 2018', tags: ['projects'] },
	{ slug: 'voronoi-mosaic', title: 'Voronoi Mosaic', year: 2018, date: 'Feb 02, 2018', tags: ['lessons'] },
	{ slug: 'wave-clock', title: 'Wave Clock', year: 2018, date: 'Jan 21, 2018', tags: ['assignments'] },
	{ slug: 'self-portrait-glitch', title: 'Self Portrait, Glitched', year: 2018, date: 'Jan 09, 2018', tags: ['projects'] },

	{ slug: 'l-system-grass', title: 'L-System Grass', year: 2017, date: 'Nov 30, 2017', tags: ['lessons', 'projects'] },
	{ slug: 'orbit-sim', title: 'Orbit Simulation', year: 2017, date: 'Oct 22, 2017', tags: ['assignments'] },
	{ slug: 'noise-landscape', title: 'Noise Landscape', year: 2017, date: 'Sep 14, 2017', tags: ['lessons'] },
	{ slug: 'typography-bouncer', title: 'Typography Bouncer', year: 2017, date: 'Aug 03, 2017', tags: ['projects'] },
	{ slug: 'mouse-trail', title: 'Mouse Trail', year: 2017, date: 'Jun 19, 2017', tags: ['assignments'] },
	{ slug: 'pong-remake', title: 'Pong Remake', year: 2017, date: 'May 02, 2017', tags: ['projects', 'assignments'] },
	{ slug: 'ten-print', title: '10 PRINT Variation', year: 2017, date: 'Mar 28, 2017', tags: ['lessons'] },
	{ slug: 'color-wheel', title: 'Color Wheel Study', year: 2017, date: 'Feb 14, 2017', tags: ['lessons', 'assignments'] },

	{ slug: 'rotating-square', title: 'Rotating Square', year: 2016, date: 'Dec 11, 2016', tags: ['lessons'] },
	{ slug: 'sine-rings', title: 'Sine Rings', year: 2016, date: 'Nov 03, 2016', tags: ['lessons'] },
	{ slug: 'random-walker', title: 'Random Walker', year: 2016, date: 'Sep 22, 2016', tags: ['lessons', 'assignments'] },
	{ slug: 'mouse-paint', title: 'Mouse Paint', year: 2016, date: 'Aug 14, 2016', tags: ['assignments'] },
	{ slug: 'bouncing-ball', title: 'Bouncing Ball', year: 2016, date: 'Jun 30, 2016', tags: ['assignments'] },
	{ slug: 'grid-of-circles', title: 'Grid of Circles', year: 2016, date: 'May 18, 2016', tags: ['lessons'] },
	{ slug: 'hello-shapes', title: 'Hello, Shapes', year: 2016, date: 'Mar 05, 2016', tags: ['lessons'] },

	{ slug: 'first-sketch', title: 'First Sketch', year: 2015, date: 'Nov 28, 2015', tags: ['lessons'] },
	{ slug: 'ellipse-grid', title: 'Ellipse Grid', year: 2015, date: 'Oct 09, 2015', tags: ['lessons', 'assignments'] },
	{ slug: 'rgb-square', title: 'RGB Square', year: 2015, date: 'Sep 14, 2015', tags: ['lessons'] },
];

export const TAGS: Tag[] = ['assignments', 'lessons', 'projects'];

export const TAG_DESCRIPTIONS: Record<Tag, string> = {
	assignments: 'Sketches I made because the syllabus said so. Sometimes the constraint was the best part.',
	lessons: 'Following along with tutorials, books, and Coding Train videos. The fundamentals.',
	projects: 'Things I started on my own — usually because I saw something cool and wanted to know how it worked.',
};

export const FEATURED_SKETCH: FeaturedSketch = {
	slug: 'flow-field',
	title: 'Flow Field',
	year: 2018,
	date: 'Mar 03, 2018',
	tags: ['projects'],
	purpose:
		'Independent project — exploring vector fields based on Perlin noise after watching a Coding Train video. Wanted to see if I could get a swarm of particles to feel like wind moving through grass.',
	journal: [
		"I'd been stuck on the same kinds of sketches for months — bouncing balls, grids of circles, the same shapes I'd been drawing since freshman year. Then I saw Daniel Shiffman do a flow field tutorial and something clicked. The trick is that you don't tell each particle where to go. You just lay down a grid of invisible arrows, and let the particles read the arrow nearest them. That's it. That's the whole thing.",
		"The first attempt was a disaster. I had the noise function returning values from -1 to 1 and I was using them directly as angles in radians, so the field was incredibly tight and chaotic. Particles just shivered in place. The fix was to multiply by TWO_PI * 4 so each cell could vary across the full range, and suddenly the field had these long flowing currents.",
		"I left it running for ten minutes and the canvas slowly filled with what looked like brushstrokes. My art teacher walked by and asked if I'd painted it. I felt like I'd discovered something — that you could write 30 lines of code and end up with something that felt drawn rather than computed. I don't know if I'll ever fully shake that feeling.",
	],
	code: `let particles = [];
let flowfield;
let scl = 20;
let cols, rows;
let zoff = 0;

function setup() {
  createCanvas(800, 600);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);

  for (let i = 0; i < 800; i++) {
    particles[i] = new Particle();
  }
  background(245, 240, 232);
}

function draw() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.3);
      flowfield[index] = v;
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  zoff += 0.0008;

  for (let p of particles) {
    p.follow(flowfield);
    p.update();
    p.show();
    p.edges();
  }
}`,
};

export function getSketch(slug: string): Sketch | undefined {
	return SKETCHES.find((s) => s.slug === slug);
}

export function neighbors(slug: string): { prev?: Sketch; next?: Sketch } {
	const i = SKETCHES.findIndex((s) => s.slug === slug);
	if (i === -1) return {};
	return { prev: SKETCHES[i - 1], next: SKETCHES[i + 1] };
}
