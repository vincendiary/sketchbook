window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2018-nguyen-vincent-assignment-01-a1q7"] = function (p) {
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
		// A1Q7.pde
		/*
		
		Assignment 01 - The Bouncing Ball
		By Vincent Nguyen
		
		STEP 07:
		Now, create a program where can fling the ball with your
		mouse by clicking on it, moving it down and to the left,
		then releasing it so that it is thrown up and to the right.
		(It's a bit like Angry Birds.) This is called projectile
		motion. (BONUS KNOWLEDGE! The trajectory of the projectile
		will be a perfect parabola if there is no air resistance).
		
		*/
		
		var p, v, a, t;
		var frozen;
		
		function setup() {
		  createCanvas(600,600);
		  ellipseMode(CENTER);
		  p = new PVector(300,300);
		  v = new PVector(0,0);
		  a = new PVector(0,0.1);
		  t = new PVector(0,0);
		  frozen = true;
		}
		
		function draw() {
		  background(0);
		  noStroke();
		  fill("#FF0000");
		  ellipse(p.x, p.y, 30, 30);
		  
		  if (!frozen) {
		    p.add(v);
		    v.add(a);
		  }
		  
		  //COLLISION
		  if (p.y >= height - 15) {
		    v.y *= -0.90;
		    p.y = height - 15;
		  } else if (p.y <= 15) {
		    v.y *= -0.90;
		    p.y = 15;
		  }
		  if (p.x >= width - 15) {
		    v.x *= -0.90;
		    p.x = width - 15;
		  } else if (p.x <= 15) {
		    v.x *= -0.90;
		    p.x = 15;
		  }
		  
		}
		
		function mouseReleased() {
		  v.set((p.x-t.x)/20, (p.y-t.y)/20);
		  frozen = false;
		}
		
		function mousePressed() {
		  frozen = true;
		}
		
		function mouseDragged() {
		  stroke("#FF0000");
		  strokeWeight(5);
		  line(p.x,p.y,mouseX,mouseY);
		  t.set(mouseX,mouseY);
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
