window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-lessons-introducing-pvectors"] = function (p) {
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
		// Introducing_PVectors.pde
		/*
		
		Lesson: PVectors
		03/20/2017
		
		*/
		
		var p, v, a, m;
		var score;
		var kuler;
		
		function setup() {
		  createCanvas(400, 400);
		  rectMode(CENTER);
		  textAlign(CENTER,CENTER);
		  p = new PVector(width/2, height/5);
		  v = new PVector(random(1, 3), random(1, 2));
		  a = new PVector(0, 0.1);
		  m = new PVector(width/2, 370);
		  kuler = "#FF3496";
		}
		
		function draw() {
		  background("#3B3B3B");
		  noStroke();
		  fill(kuler);
		  textSize(24);
		  text("score: " + str(score),width/2,height/8);
		  ellipse(p.x, p.y, 20, 20);
		  rect(m.x, m.y, 50, 20);
		  
		  m.x = mouseX;
		  p = p.add(v);
		  v = v.add(a);
		
		  if (p.y >= (370-20) && p.y <= (390-20) && p.x >= (m.x-25) && p.x <= (m.x+25)) {
		    v.y *= -0.95;
		    score += 1;
		    kuler = color(int(random(100,255)),int(random(100,255)),int(random(100,255)));
		  } else if (p.y >= height) {
		    p.y = height/5;
		    p.x = width/2;
		    v.y = 0;
		    v.x = random(-1,1)*random(2,4);
		    score = 0;
		  }
		  if (p.x >= (width-10) || p.x <= (0+10)) {
		    v.x *= -1;
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
