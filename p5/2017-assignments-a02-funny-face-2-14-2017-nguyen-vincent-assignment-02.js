window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a02-funny-face-2-14-2017-nguyen-vincent-assignment-02"] = function (p) {
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
		// Nguyen_Vincent_Assignment_02.pde
		/*
		
		 Assignment 02: Funny Face
		 2/14/2017
		 Vincent Nguyen
		 
		 */
		
		var xPosHead, yPosHead, dxHead, dyHead;
		
		var xPosMouth, yPosMouth, dxMouth, dyMouth;
		
		var xPosNose, yPosNose, dxNose, dyNose;
		
		var xPosEyeL, yPosEyeL, dxEyeL, dyEyeL, xPosEyeR, yPosEyeR, dxEyeR, dyEyeR;
		
		function setup() {
		  createCanvas(400, 400);
		  smooth();
		  frameRate(120);
		
		  //Head
		  xPosHead = width/2;
		  yPosHead = height/2;
		  dxHead = 350;
		  dyHead = 275;
		
		  //Mouth
		  xPosMouth = width/2;
		  yPosMouth = height/2 + 25/2;
		  dxMouth = 200;
		  dyMouth = 200;
		
		  //Nose
		  xPosNose = width/2;
		  yPosNose = height/16*5 + height/32;
		  dxNose = 100;
		  dyNose = 125;
		
		  //Eyes
		  xPosEyeL = width/8*3 + width/64;
		  yPosEyeL = height/8 + height/32;
		  dxEyeL = 100;
		  dyEyeL = 100;
		
		  xPosEyeR = width/8*5 - width/64;
		  yPosEyeR = height/8 + height/32;
		  dxEyeR = 100;
		  dyEyeR = 100;
		}
		
		function draw() {
		  background("#343434");
		  drawHead();
		  drawMouth();
		  drawEyes();
		  drawNose();
		}
		
		function drawHead() {
		  stroke("#000000");
		  strokeWeight(5);
		  fill("#FF3E3E");
		  ellipse(xPosHead, yPosHead, dxHead, dyHead);
		}
		
		function drawMouth() {
		  noStroke();
		  fill("#000000");
		  arc(xPosMouth, yPosMouth, dxMouth, dyMouth, radians(0), radians(180));
		}
		
		function drawNose() {
		  stroke("#000000");
		  strokeWeight(5);
		  fill("#F5D14D");
		  ellipse(xPosNose, yPosNose, dxNose, dyNose);
		}
		
		function drawEyes() {
		  stroke("#000000");
		  strokeWeight(5);
		  fill("#FFFFFF");
		  ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);
		  ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);
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
