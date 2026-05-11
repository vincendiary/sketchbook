window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-assignments-a-09-working-with-images-6-7-2016-assignment-09-mission-03"] = function (p) {
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
		// assignment_09_mission_03.pde
		var img;
		var x;
		var y;
		var t = 150;
		var spd = 1;
		
		function setup() {
		  createCanvas(600,800);
		  img = loadImage(sketchbookAsset("2016/ASSIGNMENTS/A-09 Working with Images/6-7-2016/assignment_09_mission_03/data/cafeterrace.jpg"));
		}
		
		function draw() {
		  background(0);
		  
		  // roof of cafe
		  noStroke();
		  fill("#DBB20B");
		  beginShape();
		  vertex(155,197);
		  vertex(331,272);
		  vertex(310,400);
		  vertex(222,368);
		  vertex(135,202);
		  vertex(120,197);
		  vertex(99,150);
		  vertex(140,164);
		  endShape(CLOSE);
		  
		  if (mouseIsPressed == true) {
		    tint(255,t);
		    image(img,0,0,600,800);
		    x = mouseX;
		    y = mouseY;
		  }
		  t += spd;
		  if (t == 255 || t == 100) {
		    spd *= -1;
		  }
		  console.log(x,y);
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
