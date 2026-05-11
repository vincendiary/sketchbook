window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2018-nguyen-vincent-assignment-01-a1q5"] = function (p) {
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
		// A1Q5.pde
		/*
		
		Assignment 01 - The Bouncing Ball
		By Vincent Nguyen
		
		STEP 05:
		Now, as the ball is bouncing and gradually losing energy,
		add wind. In other words, make it look like there is a
		slight wind blowing from the left side of the screen to
		the right side. When the ball hits the right wall, it will
		bounce back, and it will lose energy. Eventually, it should
		settle down in the bottom right corner. HINT: You already
		have a ySpeed and a yPosition, but to do this one you will
		also want to have an xSpeed and an xPosition.
		
		*/
		
		var xPos, yPos;
		var xSpeed, ySpeed;
		var xAccel, yAccel;
		
		function setup() {
		  createCanvas(600,600);
		  noStroke();
		  ellipseMode(CENTER);
		  xPos = 300;
		  yPos = 0;
		  xSpeed = 2;
		  ySpeed = 2;
		  xAccel = 0.01;
		  yAccel = 0.1;
		}
		
		function draw() {
		  background(0);
		  fill("#FF0000");
		  ellipse(xPos,yPos,30,30);
		  fill("#FFFFFF",80);
		  
		  xPos += xSpeed;
		  xSpeed += xAccel;
		  yPos += ySpeed; //Adds speed to position
		  ySpeed += yAccel; //Adds gravity to speed
		  
		  if (yPos >= height - 15) {
		    ySpeed *= -0.90;
		    yPos = height - 15;
		  } else if (yPos <= 15) {
		    ySpeed *= -0.90;
		    yPos = 15;
		  }
		  
		  if (xPos >= width - 15) {
		    xSpeed *= -0.90;
		    xPos = width - 15;
		  } else if (xPos <= 15) {
		    xSpeed *= -0.90;
		    xPos = 15;
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
