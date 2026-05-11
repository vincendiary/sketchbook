window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-useful-references-ball-object-array"] = function (p) {
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
		// Ball_Object_Array.pde
		/*
		
		 Assignment 05: you've been spooked by mr doot, send this to 5 other skoots or else mr doot will come and goot u
		 
		 */
		
		var balls = new ArrayList();
		var c = "#313131";
		var state = 0;
		
		function setup() {
		  fullScreen();
		  rectMode(CENTER);
		  textAlign(CENTER,CENTER);
		  smooth(8);
		  cursor(CROSS);
		}
		
		function draw() {
		  
		  //Background Colour Change
		  switch(state) {
		    case 0: c = color("#313131"); break;
		    case 1: c = color("#EA5A55"); break;
		    case 2: c = color("#EA9155"); break;
		    case 3: c = color("#EABB55"); break;
		    case 4: c = color("#CCEA55"); break;
		    case 5: c = color("#55EA60"); break;
		    case 6: c = color("#55EAC6"); break;
		    case 7: c = color("#55B0EA"); break;
		    case 8: c = color("#557EEA"); break;
		    case 9: c = color("#5E55EA"); break;
		    case 10: c = color("#8E55EA"); break;
		    case 11: c = color("#EA55AF"); break;
		    case 12: c = color("#EDEDED"); break;
		    default: c = color("#313131"); break;
		  }
		  
		  //Draw background
		  background(c);
		  
		  //Draw Text
		  textSize(36);
		  fill("#FFFFFF",100);
		  text("By Vincent Nguyen", width/8, height - 46);
		  
		  for (const b of balls) {
		    b.display();
		    b.move();
		    b.collision();
		  }
		  
		  if (mouseIsPressed) {
		    balls.add(new Ball(mouseX, mouseY));
		  }
		}
		
		function keyPressed() {
		  if (key == ' ') {
		    if (state >= 13) {
		      state = 0;
		    }
		    state++;
		  }
		}
		
		
		var Ball = class Ball {
		
		  p;
		  v;
		  a;
		  d;
		  c;
		  r;
		
		  constructor(tempX, tempY) {
		    this.p = new PVector(tempX, tempY);
		    this.v = new PVector(random(-3,3), 0);
		    this.a = new PVector(0, 0.1);
		    this.d = random(20,40);
		    this.c = color(random(155,256),random(155,256),random(155,256));
		    this.r = int(random(4));
		  }
		
		  display() {
		    
		    noStroke();
		    fill(this.c,180);
		    
		    if (this.r <= 1 && this.r >= 0) {
		      ellipse(this.p.x,this.p.y,this.d,this.d);
		    } else if (this.r <= 2 && this.r >= 1) {
		      ellipse(this.p.x,this.p.y,this.d/1.5,this.d*1.5);
		    } else {
		      ellipse(this.p.x,this.p.y,this.d*1.5,this.d/1.5);
		    }
		    
		  }
		
		  move() {
		    this.v = this.v.add(this.a);
		    this.p = this.p.add(this.v);
		  }
		
		  collision() {
		    if ((this.p.x - this.d/2) <= 0 || (this.p.x + this.d/2) >= width) {
		      this.v.x *= -1;
		    } else if ((this.p.y + this.d/2) >= height || (this.p.y - this.d/2) <= 0) {
		      this.v.y *= -1;
		      this.p.y = (height - this.d/2);
		    }
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
