window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-lessons-lesson-02-movement"] = function (p) {
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
		// lesson_02_Movement.pde
		var Face1 = 300;
		var Face2 = 200;
		var FaceSpd1 = 2;
		var FaceSpd2 = 2;
		
		function setup() {
		  createCanvas(600,400); // size of the window (width, height)
		  background(50);
		}
		
		function draw() {
		
		  background(50);
		
		  fill("#34F7A4");
		  stroke(127,255,255);
		  strokeWeight(5);
		  ellipse(Face1,Face2,50,50);
		  ellipse(400,100,120,60);
		  
		  fill(255,127,127);
		  stroke(255,127,255);
		  rect(300,200,150,100);
		  
		  fill("#0CDBF5",100);
		  stroke("#0AB6CB");
		  rect(mouseX-100,mouseY-75,200,150);
		 
		  Face1 += FaceSpd1;
		  Face2 += FaceSpd2;
		  
		  if (Face1 > 575||Face1 < 25) {
		    FaceSpd1 = -1*FaceSpd1;
		  } else if (Face2 > 375||Face2 < 25) {
		    FaceSpd2 = -1*FaceSpd2;
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
