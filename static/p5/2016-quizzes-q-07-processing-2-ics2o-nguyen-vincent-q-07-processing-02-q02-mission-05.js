window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-05"] = function (p) {
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
		// Q02_mission_05.pde
		var x = 100;
		var y = 100;
		
		function setup() {
		  createCanvas(400, 400);
		  background(255, 240, 240); 
		  rect(x, y, 40, 40);
		}
		
		function draw() {
		  fill(255, 0, 0);
		  rect(x, y, 40, 40);
		
		  // fill(255, 240, 240, 50); Prevous code that redrew a transparent rectangle to create a trail effect
		  fill(255, 240, 240, 25); // To make the trail longer, we increase the transparency so it needs to redraw more times to clean up the trail
		  rect(0, 0, 400, 400);
		  
		  // 5. The program creates a comet trail by adding a transparent layer
		  // that frequently redraws itself to convey the illusion of the previous
		  // squares slowly disappearing into the background.
		}
		
		function keyPressed() {
		  if (keyCode == RIGHT) {
		    x = x + 10;
		  }
		
		  if (keyCode == DOWN) {
		    y = y + 10;
		  }
		
		  if (keyCode == LEFT) {
		    x = x - 10;
		  }
		
		  if (keyCode == UP) {
		    y = y - 10;
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
