window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2018-summative"] = function (p) {
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
		// summ2prototype.pde
		var monsters = new ArrayList();
		
		function setup() {
		  createCanvas(1000, 750);
		  rectMode(CENTER);
		  noCursor();
		  
		  monsters.add(new Monster());
		}
		
		function draw() {
		  background(255);
		  for (const m of monsters) {
		    m.display();
		    m.move();
		    m.update();
		  }
		  reticle();
		}
		
		function reticle() {
		  noFill();
		  stroke("#FF0000");
		  strokeWeight(3);
		  translate(mouseX, mouseY);
		  line(-25,0,25,0);
		  line(0,-25,0,25);
		  ellipse(0, 0, 35, 35);
		}
		
		var Monster = class Monster {
		
		  pos;
		  vel;
		  acc;
		
		  constructor() {
		    this.pos = new PVector(width/2, height/2);
		    this.vel = new PVector(1, 0);
		    this.acc = new PVector(0, 0);
		  }
		
		  display() {
		    fill("#AAAAFF");
		    noStroke();
		    rect(this.pos.x, this.pos.y, 100, 100);
		  }
		
		  move() {
		    this.pos.add(this.vel);
		    this.vel.add(this.acc);
		  }
		  
		  update() {
		    if (this.pos.x + 50 > width) {
		      this.vel.x *= -1;
		    } else if (this.pos.x - 50 < 0) {
		      this.vel.x *= -1;
		    }
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
