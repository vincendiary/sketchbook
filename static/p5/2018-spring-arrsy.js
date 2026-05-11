window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2018-spring-arrsy"] = function (p) {
	class ArrayList extends Array {
		add(index, value) {
			if (arguments.length === 1) this.push(index);
			else this.splice(index, 0, value);
			return true;
		}
		get(index) { return this[index]; }
		set(index, value) { this[index] = value; return value; }
		size() { return this.length; }
		remove(value) {
			if (typeof value === "number") return this.splice(value, 1)[0];
			const index = this.indexOf(value);
			if (index >= 0) return this.splice(index, 1)[0];
			return undefined;
		}
	}
	class AudioPlayer {
		play() {}
		rewind() {}
		loop() {}
		pause() {}
		close() {}
		setGain() {}
		position() { return 0; }
		length() { return 1; }
		isPlaying() { return false; }
	}
	class Minim {
		loadFile() { return new AudioPlayer(); }
		stop() {}
	}
	function PVector(x = 0, y = 0, z = 0) { return p.createVector(x, y, z); }
	PVector.fromAngle = function (angle, length) {
		const VectorClass = p.constructor?.Vector || window.p5?.Vector;
		const vector = VectorClass.fromAngle(angle);
		if (length !== undefined) vector.setMag(length);
		return vector;
	};
	function sketchbookAsset(file) {
		if (/^(?:https?:)?\//.test(file)) return file;
		const base = window.__SKETCHBOOK_ASSET_BASE__ || "";
		return base + "/" + file.replace(/^\/+/, "");
	}
	with (p) {
		// Spring_Arrsy.pde
		var springs = new Array(5);
		
		function setup() {
		  createCanvas(600, 600);
		  noStroke();
		  rectMode(CENTER);
		  for (var i = 0; i < 5; i++) {
		    springs[i] = new Spring(i*100+100, 300, i*100 + 100, random(100,500));
		  }
		}
		
		function draw() {
		  background("#0D1F2D");
		  for (const s of springs) {
		    s.update();
		    s.display();
		  }
		}
		
		function mouseClicked() {
		  for (var i = 0; i < 5; i++) {
		    springs[i] = new Spring(i*100+100, 300, i*100 + 100, random(100,500));
		  }
		}
		
		var Spring = class Spring {
		  
		  p;
		  v;
		  a;
		  og;
		  rest;
		  
		  mass = 10;
		  k = 0.1;
		  force = 0;
		  loss = 0.95;
		  
		  constructor(ogx, ogy, x, y) {
		    this.p = new PVector(x, y);
		    this.v = new PVector(0, 0);
		    this.a = new PVector(0, 0);
		    this.og = new PVector(ogx, ogy);
		    this.rest = new PVector(ogx, ogy);
		  }
		  
		  update() {
		    this.force = -this.k*(this.p.y - this.rest.y);    // F = -kx
		    this.a.y = this.force/this.mass;             // F = ma
		    this.v.y = (this.v.y+this.a.y);
		    //v.y = loss*(v.y+a.y);         // lose % of its energy
		    this.p.y += this.v.y;
		  }
		  
		  display() {
		    fill("#533A7B");
		    rect(this.p.x, 0, 20, this.p.y*2);
		    fill("#7E52A0");
		    rect(this.p.x, this.p.y, 75, 75);
		  }
		}

		if (typeof preload === "function") p.preload = preload;
		if (typeof setup === "function") p.setup = setup;
		if (typeof draw === "function") p.draw = draw;
		if (typeof mousePressed === "function") p.mousePressed = mousePressed;
		if (typeof mouseReleased === "function") p.mouseReleased = mouseReleased;
		if (typeof mouseDragged === "function") p.mouseDragged = mouseDragged;
		if (typeof mouseClicked === "function") p.mouseClicked = mouseClicked;
		if (typeof keyPressed === "function") p.keyPressed = keyPressed;
		if (typeof keyReleased === "function") p.keyReleased = keyReleased;
		if (typeof keyTyped === "function") p.keyTyped = keyTyped;
	}
};
