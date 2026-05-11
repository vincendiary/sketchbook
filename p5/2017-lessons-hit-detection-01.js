window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-lessons-hit-detection-01"] = function (p) {
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
		// Hit_Detection_01.pde
		/*
		
		 02/10/2017
		 Hitboxes
		 
		 */
		
		function setup() {
		  createCanvas(400, 400);
		  smooth();
		  frameRate(120);
		  noStroke();
		  textSize(36);
		  textAlign(CENTER);
		}
		
		function draw() {
		  background("#393C40");
		
		  stroke("#2B2D31");
		  strokeWeight(10);
		
		  //line(0, 0, width, height);
		  //line(width, 0, 0, height);
		
		  //fill("#FF003C");
		  //triangle(0, 0, width, 0, width/2, height/2);
		  //fill("#008EFF");
		  //triangle(width, 0, width, height, width/2, height/2);
		  //fill("#00FF92");
		  //triangle(width, height, 0, height, width/2, height/2);
		  //fill("#F6FF00");
		  //triangle(0, 0, 0, height, width/2, height/2);
		
		  
		  
		  if (mouseX >= width/2 && mouseX <= width && mouseY >= height/2 && mouseY <= height) {
		    background("#FF003C");
		    if (mouseIsPressed) {
		      text("HAHA!", width*3/4, height*3/4);
		    }
		  } else if (mouseX <= width/2 && mouseX >= 0 && mouseY >= height/2 && mouseY <= height) {
		    background("#008EFF");
		    if (mouseIsPressed) {
		      text("HAHA!", width/4, height*3/4);
		    }
		  } else if (mouseX >= width/2 && mouseX <= width && mouseY <= height/2 && mouseY >= 0) {
		    background("#00FF92");
		    if (mouseIsPressed) {
		      text("HAHA!", width*3/4, height/4);
		    }
		  } else {
		    background("#F6FF00");
		    if (mouseIsPressed) {
		      text("HAHA!", width/4, height/4);
		    }
		  }
		  line(width/2, 0, width/2, height);
		  line(0, height/2, width, height/2);
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
