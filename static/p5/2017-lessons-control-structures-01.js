window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-lessons-control-structures-01"] = function (p) {
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
		// Control_Structures_01.pde
		/*
		
		 Control Structures
		 02/22/2017
		 
		 */
		
		var clicks;
		var x1, y1, x2, y2, m1, m2;
		
		function setup() {
		  createCanvas(400, 400);
		  smooth();
		  frameRate(120);
		  clicks = 0;
		  background("#A2C6D3");
		}
		
		function draw() {
		  m1 = ((x1 + x2)/2);
		  m2 = ((y1 + y2)/2);
		}
		
		function mouseClicked() {
		  clicks += 1;
		
		  //Points & Line
		  /*
		  strokeWeight(5);
		   textSize(14);
		   textAlign(CENTER);
		   fill("#FFFFFF");
		   if (clicks == 1) {
		   x1 = mouseX;
		   y1 = mouseY;
		   point(x1, y1);
		   text(str(x1) + ", " + str(y1), x1, y1 -20);
		   } else if (clicks == 2) {
		   x2 = mouseX;
		   y2 = mouseY;
		   point(x2, y2);
		   text(str(x2) + ", " + str(y2), x2, y2 -20);
		   } else if (clicks == 3) {
		   line(x1, y1, x2, y2);
		   text(str(m1) + ", " + str(m2), m1, m2 -20);
		   } else if (clicks == 4) {
		   background("#A2C6D3");
		   clicks = 0;
		   }
		   */
		
		  //Rectangle
		  /*
		  stroke("#FFFFFF");
		   strokeWeight(5);
		   fill("#08FF89");
		   rectMode(CENTER);
		   if (clicks == 1) {
		   x1 = mouseX;
		   y1 = mouseY;
		   point(x1, y1);
		   } else if (clicks == 2) {
		   x2 = mouseX;
		   y2 = mouseY;
		   point(x2, y2);
		   } else if (clicks == 3) {
		   rect(m1,m2,(x2-x1),(y2-y1));
		   } else if (clicks == 4) {
		   background("#A2C6D3");
		   clicks = 0;
		   }
		   */
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
