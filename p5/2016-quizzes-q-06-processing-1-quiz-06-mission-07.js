window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-quizzes-q-06-processing-1-quiz-06-mission-07"] = function (p) {
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
		// Quiz_06_Mission_07.pde
		var xpos = 0;
		var ypos = 110;
		var yspeed = 3;
		var c1 = "#ABDDE5";
		
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
		  ellipse(xpos,150,20,20);
		  xpos += 1;
		  
		  fill("#F23D3D");
		  rect(160,ypos,80,80);
		  ypos += yspeed;
		  
		  if (ypos >= 220 || ypos <= 0) {
		    yspeed = yspeed*-1;
		  }
		  
		  fill("#90E59D");
		  ellipse(mouseX,mouseY,20,20);
		  
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
