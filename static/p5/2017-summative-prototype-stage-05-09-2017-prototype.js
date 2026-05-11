window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-summative-prototype-stage-05-09-2017-prototype"] = function (p) {
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
		// prototype.pde
		//Summative Prototype
		//Aether Defence by Vincent Nguyen
		
		var towers = new ArrayList();
		var bullets = new ArrayList();
		
		var mx, my;
		
		var ben;
		
		function setup() {
		  fullScreen();
		  rectMode(CENTER);
		  textAlign(CENTER,CENTER);
		  
		  ben = new Monster(0,height/3,int(random(3)));
		}
		
		function draw() {
		  background(30);
		  
		  mx = ben.getX();
		  my = ben.getY();
		  
		  ben.display();
		  ben.move();
		  
		  for (const b of bullets) {
		    b.display();
		    b.move();
		  }
		  
		  bullets.add(new Bullet(width/2,height/2));
		  
		  for (const t of towers) {
		    t.display();
		  }
		}
		
		function mousePressed() {
		  towers.add(new Tower(mouseX, mouseY, int(random(4))));
		}
		
		var Tower = class Tower {
		  
		  p;
		  v;
		  d;
		  firerate;
		  range;
		  damage;
		  type;
		  
		  constructor(tempX, tempY, tempT) {
		    this.p = new PVector(tempX, tempY);
		    this.type = tempT;
		    this.firerate = this.range = this.damage = 0;
		    this.d = width/32;
		  }
		  
		  // Type 0 = basic
		  // Type 1 = long-range
		  // Type 2 = AoE
		  // Type 3 = sniper
		  
		  type() {
		    if (this.type == 0) {
		      this.firerate = 0.01;
		      this.range = 10;
		      this.damage = 5;
		    }
		  }
		  
		  display() {
		    
		    this.type();
		    
		    noStroke();
		    fill(255);
		    rect(this.p.x,this.p.y,this.d,this.d);
		    
		    fill(0);
		    if (this.type == 0) {
		      text("Basic", this.p.x, this.p.y);
		    } else if (this.type == 1) {
		      text("Long", this.p.x, this.p.y);
		    } else if (this.type == 2) {
		      text("AoE", this.p.x, this.p.y);
		    } else if (this.type == 3) {
		      text("Sniper", this.p.x, this.p.y);
		    }
		    
		  }
		  
		}
		
		var Monster = class Monster {
		  
		  p;
		  w;
		  h;
		  speed;
		  health;
		  type;
		  skin;
		  
		  constructor(tempX, tempY, tempT) {
		    this.p = new PVector(tempX, tempY);
		    this.type = tempT;
		  }
		  
		  // Type 0 = basic
		  // Type 1 = swarm
		  // Type 2 = tank
		  
		  type() {
		    
		    if (this.type == 0) {
		      this.w = this.h = 20;
		      this.skin = color("#FF0000");
		      this.speed = 3;
		    } else if (this.type == 1) {
		      this.w = this.h = 10;
		      this.skin = color("#00FF00");
		      this.speed = 5;
		    } else if (this.type == 2) {
		      this.w = this.h = 30;
		      this.skin = color("#0000FF");
		      this.speed = 1;
		    }
		  }
		  
		  display() {
		    
		    this.type();
		    
		    fill(this.skin);
		    rect(this.p.x,this.p.y,this.w,this.h);
		    
		  }
		  
		  move() {
		    this.p.x += this.speed;
		    this.p.y += 0;
		  }
		  
		  getX() {
		    return this.p.x;
		  }
		  
		  getY() {
		    return this.p.y;
		  }
		  
		}
		
		var Bullet = class Bullet {
		  
		  p;
		  loca;
		  pulse;
		  diam;
		  speed;
		  rota;
		  glow;
		  
		  constructor(tempX, tempY) {
		    this.p = new PVector(tempX,tempY);
		    this.loca = new PVector(mx,my);
		    
		    this.rota = atan2( (this.loca.y - this.p.y), (this.loca.x - this.p.x) );
		    
		    this.speed = 40;
		    this.diam = 5;
		    this.pulse = random(4);
		  }
		  
		  display() {
		    update();
		    noStroke();
		    fill(this.glow);
		    rect(this.p.x,this.p.y,this.diam,this.diam);
		  }
		  
		  update() {
		    this.pulse += 1;
		    this.glow = color( (80*sin(this.pulse) + 175), 30, 30 );
		  }
		  
		  move() {
		    this.p.x += this.speed*cos(this.rota);
		    this.p.y += this.speed*sin(this.rota);
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
