window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-just-for-fun-life-is-strange"] = function (p) {
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
		// Life_Is_Strange.pde
		/*
		██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗
		 ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
		 
		 ██╗   ██╗██╗███╗   ██╗ ██████╗███████╗███╗   ██╗████████╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
		 ██║   ██║██║████╗  ██║██╔════╝██╔════╝████╗  ██║╚══██╔══╝    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
		 ██║   ██║██║██╔██╗ ██║██║     █████╗  ██╔██╗ ██║   ██║       ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
		 ╚██╗ ██╔╝██║██║╚██╗██║██║     ██╔══╝  ██║╚██╗██║   ██║       ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
		 ╚████╔╝ ██║██║ ╚████║╚██████╗███████╗██║ ╚████║   ██║       ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
		 ╚═══╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝
		 
		 ██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗
		 ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
		 */
		
		var title, buttons;
		var opacity;
		var y;
		
		var start, options, exit;
		
		function setup() {
		  createCanvas(800, 600);
		  smooth(8);
		  rectMode(CENTER);
		  textAlign(CENTER, CENTER);
		
		  title = loadFont(sketchbookAsset("2017/Just for Fun/Life_Is_Strange/data/AgencyFB-Reg-96.vlw"));
		  buttons = loadFont(sketchbookAsset("2017/Just for Fun/Life_Is_Strange/data/AgencyFB-Bold-40.vlw"));
		  
		  y = height/2;
		  opacity = 0;
		
		  start = new Button("NEW GAME", width/2, height/2);
		  options = new Button("SETTINGS", width/2, height/2 + 80);
		  exit = new Button("EXIT", width/2, height/2 + 160);
		}
		
		function draw() {
		  fill(random(256), 100, random(256), 10);
		  rect(width/2, height/2, width, height);
		
		  if (opacity <= 20) {
		    opacity += 0.05;
		  } else if (opacity >= 15 && y >= height/4) {
		    y -= 1;
		  } else {
		    start.display();
		    options.display();
		    exit.display();
		  }
		
		  fill("#FFFFFF", opacity);
		  textFont(title);
		  textSize(96);
		  text("- E R A S E D -", width/2, y);
		}
		
		var Button = class Button {
		
		  x;
		  y;
		  w;
		  h;
		  o;
		  v;
		  t;
		
		  constructor(text, tempX, tempY) {
		    this.t = text;
		    this.x = tempX;
		    this.y = tempY;
		    this.w = width;
		    this.h = 60;
		    this.o = 10;
		  }
		
		  display() {
		    noStroke();
		    if (rollover(this.x,this.y,this.w,this.h)) {
		      this.o = 10;
		      update();
		      fill("#E8E8E8", this.o);
		    } else {
		      fill(0,0,0,0);
		    }
		    rect(this.x, this.y, this.w, this.h);
		
		    fill("#FFFFFF", 15);
		    textFont(buttons);
		    textSize(40);
		    text(this.t, this.x, this.y);
		  }
		
		  update() {
		    this.o -= 0.5;
		  }
		  
		  rollover(x, y, w, h) {
		    if (mouseX >= (this.x-this.w/2) &&
		        mouseX <= (this.x+this.w/2) &&
		        mouseY >= (this.y-this.h/2) &&
		        mouseY <= (this.y+this.h/2)) {
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
