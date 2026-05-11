window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a02-funny-face-2-15-2017-nguyen-vincent-assignment-02"] = function (p) {
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
		
		// ---------- Setting up variables ---------- //
		
		//int variable to set the opacity for the intro blackscreen
		var opacity;
		
		//boolean variables for the changing facial features
		var MouthOpen, EyesOpen, NoseClick;
		
		//float variables for the head
		var xPosHead, yPosHead, dxHead, dyHead;
		
		//float variables for the mouth
		var xPosMouth, yPosMouth, dxMouth, dyMouth;
		
		//float variables for the nose
		var xPosNose, yPosNose, dxNose, dyNose;
		
		//float variables for the eyes
		var xPosEyeL, yPosEyeL, dxEyeL, dyEyeL, xPosEyeR, yPosEyeR, dxEyeR, dyEyeR;
		
		//float variables for the eyes
		var xPosPupilL, xPosPupilR, yPosPupilL, yPosPupilR, rPupil, dPupil, easing;
		var centerL, centerR;
		
		function setup() {
		  createCanvas(400, 400);
		  smooth();
		  frameRate(120);
		
		  // ---------- Assigning values to the variables ---------- //
		  /*
		  For reference, width & height = 400
		   400/2 = 200
		   400/4 = 100
		   400/8 = 50
		   400/16 = 25
		   400/32 = 12.5
		   400/64 = 6.25
		   */
		
		  //Integers
		  opacity = 255;
		
		  //Booleans
		  MouthOpen = true;
		  EyesOpen = true;
		  NoseClick = false;
		
		  //Head
		  xPosHead = width/2;
		  yPosHead = height/2;
		  dxHead = 350;
		  dyHead = 275;
		
		  //Mouth
		  xPosMouth = width/2;
		  yPosMouth = height/2 + 25/2;
		  dxMouth = dyMouth = 200;
		
		  //Nose
		  xPosNose = width/2;
		  yPosNose = height/16*5 + height/32;
		  dxNose = 100;
		  dyNose = 125;
		
		  //Eyes
		  xPosEyeL = width/8*3 + width/64;
		  yPosEyeL = height/8 + height/32;
		  dxEyeL = dyEyeL = 100;
		
		  xPosEyeR = width/8*5 - width/64;
		  yPosEyeR = height/8 + height/32;
		  dxEyeR = dyEyeR = 100;
		
		  //Pupils
		  rPupil = 50;
		  dPupil = 25;
		  easing = 0.05;
		  centerL = new PVector(xPosEyeL, yPosEyeL);
		  centerR = new PVector(xPosEyeR, yPosEyeR);
		}
		
		function draw() {
		  background("#343434");
		  hitDetection();
		  drawHead();
		  drawMouth();
		  drawEyeR();
		  drawEyeL();
		  drawNose();
		  intro();
		}
		
		function intro() {
		  rectMode(CENTER);
		  var speed = 1;
		  opacity -= speed;
		  fill("#000000", opacity);
		  rect(width/2, height/2, width, height);
		  if (opacity <= 0) {
		    speed = 0;
		  }
		}
		
		function hitDetection() {
		  var mx, my;
		  mx = mouseX - xPosEyeL;
		  my = mouseY - yPosEyeL;
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
		
		function drawEyeL() {
		  if (EyesOpen == false) {
		
		    stroke("#000000");
		    strokeWeight(5);
		    fill("#FF3E3E");
		    ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);
		    line((xPosEyeL-dxEyeL/2), yPosEyeL, (xPosEyeL+dxEyeL/2), yPosEyeL);
		  } else {
		
		    stroke("#000000");
		    strokeWeight(5);
		    fill("#FFFFFF");
		    ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);
		
		    noStroke();
		    fill("#000000");
		
		    var mouseL = new PVector(mouseX, mouseY);
		    if (dist(mouseL.x, mouseL.y, centerL.x, centerL.y) > rPupil/2) {
		      mouseL.sub(centerL);
		      mouseL.normalize();
		      mouseL.mult(rPupil/2);
		      mouseL.add(centerL);
		    }
		
		    xPosPupilL += (mouseL.x - xPosPupilL) * easing;
		    yPosPupilL += (mouseL.y - yPosPupilL) * easing;
		
		    ellipse(xPosPupilL, yPosPupilL, dPupil, dPupil);
		  }
		}
		
		function drawEyeR() {
		
		  if (EyesOpen == false) {
		    stroke("#000000");
		    strokeWeight(5);
		    fill("#FF3E3E");
		    ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);
		    line((xPosEyeR-dxEyeR/2), yPosEyeR, (xPosEyeR+dxEyeR/2), yPosEyeR);
		  } else {
		
		    stroke("#000000");
		    strokeWeight(5);
		    fill("#FFFFFF");
		    ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);
		
		    noStroke();
		    fill("#000000");
		
		    var mouseR = new PVector(mouseX, mouseY);
		    if (dist(mouseR.x, mouseR.y, centerR.x, centerR.y) > rPupil/2) {
		      mouseR.sub(centerR);
		      mouseR.normalize();
		      mouseR.mult(rPupil/2);
		      mouseR.add(centerR);
		    }
		
		    xPosPupilR += (mouseR.x - xPosPupilR) * easing;
		    yPosPupilR += (mouseR.y - yPosPupilR) * easing;
		
		    ellipse(xPosPupilR, yPosPupilR, dPupil, dPupil);
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
