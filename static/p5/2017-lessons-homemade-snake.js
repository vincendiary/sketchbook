window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-lessons-homemade-snake"] = function (p) {
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
		// Homemade_Snake.pde
		var p, v, f;
		var w, h;
		var foodState, scoreValue;
		var gameover;
		
		function setup() {
		  createCanvas(400, 400);
		  rectMode(CENTER);
		  textAlign(CENTER, CENTER);
		  //frameRate(10);
		  p = new PVector(width/2, height/2);
		  v = new PVector(0, 0);
		  f = new PVector(width/3, height/3);
		  w = h = 15;
		  foodState = 0;
		  gameover = false;
		}
		
		function draw() {
		  if (!gameover) {
		    if (frameCount%5==0) {
		      backdrop("#2FB456");
		      score();
		      food();
		      snake();
		    }
		  } else {
		    background("#FF1A35");
		    fill(0);
		    textSize(36);
		    text("You lose!\nFinal score: " + scoreValue, width/2, height/2);
		  }
		}
		
		function backdrop(c) {
		  fill(c);
		  strokeWeight(20);
		  stroke("#FF1A35");
		  rect(width/2, height/2, width, height);
		}
		
		function score() {
		  noStroke();
		  fill(255);
		  textSize(16);
		  text("score: " + scoreValue, width/2, height/6);
		}
		
		function snake() {
		  p = p.add(v);
		  noStroke();
		  fill("#7FED26");
		  rect(p.x, p.y, w, h);
		  
		  if (p.x <= 5 || p.x >= 395 || p.y <= 5 || p.y >= 395) {
		    gameover = true;
		  }
		}
		
		function food() {
		  if (p.x == f.x && p.y == f.y) {
		    scoreValue += 1;
		    foodState = 0;
		  }
		
		  if (foodState == 0) {
		    f.x = ((int(random(1, 26))*15) + 5);
		    f.y = ((int(random(1, 26))*15) + 5);
		    foodState = 1;
		  }
		
		  fill("#FF005E");
		  noStroke();
		  ellipse(f.x, f.y, w, h);
		}
		
		function keyPressed() {
		  if (key == 'w' && v.y != h) {
		    v.x = 0;
		    v.y = -h;
		  } else if (key == 's' && v.y != -h) {
		    v.x = 0;
		    v.y = h;
		  } else if (key == 'a' && v.x != w) {
		    v.x = -w;
		    v.y = 0;
		  } else if (key == 'd' && v.x != -w) {
		    v.x = w;
		    v.y = 0;
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
