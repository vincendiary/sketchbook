window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a04-old-school-games-03-27-2017-assignment-04"] = function (p) {
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
		// Assignment_04.pde
		var state;
		var start;
		
		function setup() {
		  createCanvas(600,400);
		  rectMode(CENTER);
		  textAlign(CENTER,CENTER);
		  noStroke();
		  start = new button(width/2,height/2,width/4,height/4,"#FF5A8E","#B24467","#E88CA9");
		}
		
		function draw() {
		  switch(state) {
		    case 0: mainMenu(); break;
		    case 1: optionsMenu(); break;
		    case 2: game(); break;
		    default: mainMenu(); break;
		  }
		}
		
		function mainMenu() {
		  background("#313743");
		  start.display();
		  
		}
		
		function optionsMenu() {
		  background(100);
		}
		
		function game() {
		  background(200);
		}
		
		// button.pde
		var button = class button {
		
		  x;
		  y;
		  w;
		  h;
		  i;
		  r;
		  c;
		  mouseOn;
		  clicked;
		
		  constructor(tempX, tempY, tempW, tempH, tempI, tempR, tempC) {
		    this.x = tempX;
		    this.y = tempY;
		    this.w = tempW;
		    this.h = tempH;
		    this.i = tempI;
		    this.r = tempR;
		    this.c = tempC;
		    this.mouseOn = false;
		    this.clicked = false;
		  }
		  
		  display() {
		    update();
		    rectMode(CENTER);
		    noStroke();
		    
		    if (this.mouseOn) {
		      fill(this.r);
		      if (this.clicked) {
		        fill(this.c);
		      }
		    } else {
		      fill(this.i);
		    }
		    
		    rect(this.x,this.y,this.w,this.h);
		  }
		  
		  update() {
		    if (mouseOver(this.x, this.y, this.w, this.h) == true) {
		      this.mouseOn = true;
		      if (mouseIsPressed) {
		        this.clicked = true;
		      } else {
		        this.clicked = false;
		      }
		    } else {
		      this.mouseOn = false;
		    }
		  }
		
		  mouseOver(x, y, w, h) {
		    if (mouseX >= (this.x-this.w/2) && mouseX <= (this.x+this.w/2) && mouseY >= (this.y-this.h/2) && mouseY <= (this.y+this.h/2)) {
		      return true;
		    } else {
		      return false;
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
