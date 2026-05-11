window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-useful-references-final-fantasy-slider"] = function (p) {
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
		// Final_Fantasy_Slider.pde
		/*
		
		Useful Reference - Slider w/ Functionality
		03/09/2017
		
		*/
		var mx;
		
		function setup() {
		  createCanvas(600, 200);
		  
		  //Starting position for the slider
		  mx = width/2;
		}
		
		function draw() {
		  
		  //Filler and fancy code
		  background("#2C2C2C");
		  strokeWeight(5);
		  rectMode(CENTER);
		  fill("#000000");
		  stroke("#272727");
		  rect(width/2, height/2, 500, 30);
		  
		  //Slider functionality using mx and division
		  var c1 = int((mx/(550/255))-25);
		  
		  //Extra fluff
		  fill(c1, 50, 50);
		  rect(width/2, height/2 - 55, 90, 30);
		  fill("#818181");
		  stroke("#404040");
		  
		  //Slider code
		  if (mouseIsPressed == true) {
		    mx = constrain(mouseX, 50, 550);
		  }
		  //Draw the slider
		  rect(mx, 100, 30, 100);
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
