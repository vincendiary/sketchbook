window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-quizzes-q-06-processing-1-ics20-nguyen-vincent-q-06-mission-08-quiz-06-mission-08"] = function (p) {
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
		// Quiz_06_Mission_08.pde
		var xpos1 = 0;
		var ypos1 = 110;
		var yspeed = 3;
		var c1 = "#ABDDE5";
		
		var xpos2 = 200;
		var ypos2 = 50;
		var velocity = 0;
		var gravity = 0.35;
		var breeze = 0.5;
		var bounce = -1;
		
		function setup() {
		  createCanvas(400,300);
		  background("#ABDDE5");
		}
		
		function draw() {
		  background(c1);
		  
		  if (keyIsPressed) {
		    if (key == 'r') {
		      c1 = "#F02C50";
		    } else if (key == 'g') {
		      c1 = "#2CF08F";
		    } else if (key == 'y') {
		      c1 = "#F7E86E";
		    }
		  }
		  
		  fill("#90E59D");
		  ellipse(200,150,100,100);
		  
		  fill("#3D96F2");
		  ellipse(xpos1,150,20,20);
		  xpos1 += 1;
		  
		  fill("#F23D3D");
		  rect(160,ypos1,80,80);
		  ypos1 += yspeed;
		  
		  if (ypos1 >= 220 || ypos1 <= 0) {
		    yspeed = yspeed*-1;
		  }
		  
		  fill("#90E59D");
		  ellipse(mouseX,mouseY,20,20);
		  
		
		  fill("#E269F2");
		  ellipse(xpos2,ypos2,20,20);
		  
		  velocity += gravity;
		  ypos2 += velocity;
		  xpos2 += breeze;
		  
		  if(ypos2 > 280)
		  {
		    velocity *= bounce;
		  }
		  
		  if (xpos2 >= 400) {
		    breeze *= -1;
		  }
		  
		  if (xpos2 < 19) {
		    gravity = 0;
		    velocity = 0;
		    breeze = 0;
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
