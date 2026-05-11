window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2018-nguyen-vincent-assignment-02"] = function (p) {
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
		// Nguyen_Vincent_Assignment_02.pde
		/*
		
		 ICS4U Assignment 02: Bird Angry at a Bee
		 02/21/2018
		 Vincent Nguyen
		 
		 */
		
		var bees = new ArrayList();
		var win;
		var won;
		var hits;
		var score;
		var b;
		
		function setup() {
		  createCanvas(1200, 800);
		  noStroke();
		  rectMode(CENTER);
		  textAlign(CENTER, CENTER);
		  textSize(48);
		  b = new Ball(200, 600);
		  bees.add(new Bee(1000,300));
		  bees.add(new Bee(1000,500));
		  win = loadImage(sketchbookAsset("2018/Nguyen_Vincent_Assignment_02/data/nic.png"));
		}
		
		function draw() {
		  background("#000000");
		  
		  for (const s of bees) {
		    s.update();
		    s.display();
		    s.collide(b.getX(), b.getY());
		  }
		  
		  b.update();
		  b.display();
		  b.collision();
		
		  for (var i = 0; i < bees.size(); i++) {
		    var s = bees.get(i);
		    if (!s.status()) {
		      bees.remove(i);
		    }
		    if (bees.size() == 0) {
		      if (hits == 2) {
		        won = true;
		      }
		      bees.add(new Bee(1000,300));
		      bees.add(new Bee(1000,500));
		    }
		  }
		  fill("#FFFFFF");
		  textSize(48);
		  text("Bird Angry at a Bee", 600, 50);
		  text("Score: " + str(score), 125, 50);
		  
		  if (won) {
		    image(win,0,0,width,height);
		    textSize(96);
		    text("wow...", width/4, height/3);
		    if (keyIsPressed) {
		      won = false;
		    }
		  }
		}
		
		function mouseReleased() {
		  b.released();
		}
		
		function mousePressed() {
		  b.pressed();
		}
		
		function mouseDragged() {
		  b.dragged();
		}
		
		var Ball = class Ball {
		
		  p;
		  v;
		  a;
		  d;
		  frozen;
		  drag;
		  oneshot;
		
		  constructor(x, y) {
		    this.p = new PVector(x, y);
		    this.v = new PVector(0, 0);
		    this.a = new PVector(0, 0.2);
		    this.d = 50;
		    this.frozen = true;
		    this.drag = false;
		    this.oneshot = false;
		  }
		
		  update() {
		    if (!this.frozen) {
		      this.p.add(this.v);
		      this.v.add(this.a);
		    }
		  }
		
		  display() {
		    if (this.drag) {
		      stroke("#AAAAAA");
		      strokeWeight(10);
		      line(this.p.x, this.p.y, mouseX, mouseY);
		    }
		
		    noStroke();
		    fill("#FF0000");
		    ellipse(this.p.x, this.p.y, this.d, this.d);
		  }
		
		  collision() {
		    if (this.p.y >= height - this.d/2 || this.p.y <= this.d/2) {
		      this.v.y *= -1;
		    }
		    if (this.p.x >= width - this.d/2 || this.p.x <= this.d/2) {
		      reset();
		    }
		  }
		
		  reset() {
		    this.p.x = 200;
		    this.p.y = 600;
		    this.v.set(0, 0);
		    hits = 0;
		    this.frozen = true;
		    this.oneshot = false;
		  }
		
		  pressed() {
		    if (!this.oneshot) {
		      this.frozen = true;
		    }
		  }
		
		  dragged() {
		    if (!this.oneshot) {
		      this.drag = true;
		    }
		  }
		
		  released() {
		    if (!this.oneshot) {
		      this.v.set( (this.p.x-mouseX)/20, (this.p.y-mouseY)/20 );
		      this.frozen = false;
		      this.drag = false;
		      this.oneshot = true;
		    }
		  }
		
		  getX() {
		    return this.p.x;
		  }
		
		  getY() {
		    return this.p.y;
		  }
		}
		
		var Bee = class Bee {
		
		  p;
		  v;
		  a;
		  d;
		  alive;
		
		  constructor(x, y) {
		    this.p = new PVector(x, y);
		    this.v = new PVector(0, 0);
		    this.a = new PVector(0, 0);
		    this.d = 100;
		    this.alive = true;
		  }
		
		  update() {
		    this.a.set(random(-1,1),random(-1,1));
		    this.v.add(this.a);
		    this.p.add(this.v);
		    
		    if (this.p.x >= width - this.d/2) {this.v.x *= -1; this.p.x = width - this.d/2;}
		    else if (this.p.x <= width*3/4 + this.d/2) {this.v.x *= -1; this.p.x = width*3/4 + this.d/2;}
		    if (this.p.y >= height - this.d/2) {this.v.y *= -1; this.p.y = height - this.d/2;}
		    else if (this.p.y <= this.d/2) {this.v.y *= -1; this.p.y = this.d/2;}
		    
		    if (this.v.x >= 3) {this.v.x = 3;}
		    else if (this.v.x <= -3) {this.v.x = -3;}
		    if (this.v.y >= 3) {this.v.y = 5;}
		    else if (this.v.y <= -3) {this.v.y = -3;}
		    
		  }
		
		  display() {
		    noStroke();
		    fill("#FFFF00");
		    ellipse(this.p.x, this.p.y, this.d, this.d);
		    stroke("#000000");
		    strokeWeight(15);
		    line(this.p.x-this.d/2, this.p.y-this.d/4, this.p.x+this.d/2, this.p.y-this.d/4);
		    line(this.p.x-this.d/2, this.p.y, this.p.x+this.d/2, this.p.y);
		    line(this.p.x-this.d/2, this.p.y+this.d/4, this.p.x+this.d/2, this.p.y+this.d/4);
		  }
		
		  collide(x, y) {
		    if (dist(x,y,this.p.x,this.p.y) <= this.d*3/4) {
		      if (this.alive) {
		        score++;
		        hits++;
		        this.alive = false;
		      }
		    }
		  }
		
		  status() {
		    return this.alive;
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
