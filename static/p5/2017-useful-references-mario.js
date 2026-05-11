window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-useful-references-mario"] = function (p) {
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
		// mario.pde
		/*
		
		Useful Reference: Mario
		Vincent Nguyen
		
		Displays the use of case to control movement to allow multiple direction movement.
		Better alternative to 'if' statements.
		
		*/
		
		var p, v, a;
		var w, h, friction;
		var jump, isLeft, isRight, isUp, isDown;
		
		function setup() {
		  createCanvas(600, 400);
		  rectMode(CENTER);
		  textAlign(CENTER);
		  p = new PVector(width/2, height/2);
		  v = new PVector(0, 0);
		  a = new PVector(0, 0);
		  w = 30;
		  h = 30;
		  friction = 0.90;
		}
		
		function draw() {
		  background("#7DCEC8");
		  ground();
		  mario();
		}
		
		function ground() {
		  noStroke();
		  fill("#2FB456");
		  rect(width/2, height/4*3.5, width, height/4);
		}
		
		function mario() {
		  fill("#FF3131");
		  strokeWeight(5);
		  stroke("#C12727");
		  rect(p.x, p.y, w, h);
		
		  v = v.add(a);
		  p = p.add(v);
		  
		  if (isLeft) {
		    v.x -= 0.4;
		  } 
		  if (isRight) {
		    v.x += 0.4;
		  }
		  if (isUp && jump != true) {
		    v.y += -5;
		    jump = true;
		  }
		  if (isDown && jump == true) {
		    v.y += 1;
		    jump = true;
		  }
		  
		  v.x *= friction;
		  
		  //ground & gravity
		  if (p.y >= height/4*3) {
		    a.y = 0;
		    p.y = height/4*3;
		    jump = false;
		  } else {
		    a.y = 0.2;
		  }
		  
		  //walls
		  if (p.x <= (w/2)) {
		    p.x = w/2;
		  } else if (p.x >= (width - (w/2))) {
		    p.x = (width - (w/2));
		  }
		}
		
		function keyPressed() {
		  setMove(key, true);
		}
		
		function keyReleased() {
		  setMove(key, false);
		}
		
		function setMove(k, b) {
		  switch(k) {
		  case 'w':
		    return isUp = b;
		  case 's':
		    return isDown = b;
		  case 'a':
		    return isLeft = b;
		  case 'd':
		    return isRight = b;
		  default:
		    return b;
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
