window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-lessons-rollover-function-01"] = function (p) {
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
		// Rollover_Function_01.pde
		/*
		
		 Creating a Rollover function
		 02/24/2017
		 
		 */
		
		var x, y, w, h;
		
		function setup() {
		  createCanvas(400, 400);
		  smooth();
		  x = y = height/2;
		  w = h = height/4;
		}
		
		function draw() {
		  background("#FF9BAD");
		  rectMode(CENTER);
		  stroke("#FFFFFF");
		  strokeWeight(5);
		  
		  //Rectangle #1
		  if (rollover(x-75, y, w, h) == true) {
		    fill("#E071FF");
		    if (clicked(x-75, y, w, h) == true) {
		      fill("#7C71FF");
		    }
		  } else {
		    fill("#FF4668");
		  }
		  rect(x-75, y, w, h);
		  
		  //Rectangle #2
		  if (rollover(x+75, y, w, h) == true) {
		    fill("#E071FF");
		    if (clicked(x+75, y, w, h) == true) {
		      fill("#7C71FF");
		    }
		  } else {
		    fill("#FF4668");
		  }
		  rect(x+75, y, w, h);
		}
		
		function rollover(x, y, w, h) {
		  var hit;
		  if (mouseX >= (x-w/2) &&
		    mouseX <= (x+w/2) &&
		    mouseY >= (y-h/2) &&
		    mouseY <= (y+h/2)) {
		    hit = true;
		  } else {
		    hit = false;
		  }
		  return hit;
		}
		
		function clicked(x, y, w, h) {
		  var click;
		  if (mouseX >= (x-w/2) &&
		    mouseX <= (x+w/2) &&
		    mouseY >= (y-h/2) &&
		    mouseY <= (y+h/2) &&
		    mouseIsPressed == true) {
		    click = true;
		  } else {
		    click = false;
		  }
		  return click;
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
