window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-summative-prototype-stage-05-25-2017-11-03-am-prototype"] = function (p) {
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
		// Bullet.pde
		var Bullet = class Bullet {
		
		  p;
		  v;
		  loca;
		  target;
		  pulse;
		  diam;
		  speed;
		  rota;
		  damage;
		  health;
		  glow;
		  alive;
		  targetFound;
		
		  constructor(tempX, tempY, tempD) {
		    this.p = new PVector(tempX, tempY);
		    this.v = new PVector();
		    this.target = new PVector();
		    this.speed = 10;
		    this.diam = 5;
		    this.damage = tempD;
		    this.health = 120;
		    this.pulse = random(3);
		    this.alive = true;
		    this.targetFound = false;
		  }
		
		  display() {
		    update();
		    noStroke();
		    fill(this.glow);
		    rect(this.p.x, this.p.y, this.diam, this.diam);
		  }
		
		  update() {
		    this.health -= 1;
		    this.pulse += 0.5;
		    this.glow = color((80*sin(this.pulse) + 175), 30, 30 );
		
		    if (this.health <= 0) {
		      die();
		    }
		  }
		
		  target(mx, my, tx, ty, range) {
		    
		    this.target = new PVector(mx, my);
		    
		    if (dist(this.p.x,this.p.y,tx,tx) <= range) {
		      this.loca = new PVector(this.target.x - this.p.x, this.target.y - this.p.y);
		      this.rota = atan2(this.loca.y, this.loca.x) * 180 / PI;
		    }
		    
		  }
		
		  move() {
		
		    this.v.x = this.speed*(90 - abs(this.rota))/90;
		
		    if (this.rota < 0) {
		      this.v.y = -this.speed + abs(this.v.x);//Going upwards.
		    } else {
		      this.v.y = this.speed - abs(this.v.x);//Going downwards.
		    }
		
		    this.p.x += this.v.x;
		    this.p.y += this.v.y;
		  }
		
		  status() {
		    return this.alive;
		  }
		
		  getX() {
		    return this.p.x;
		  }
		
		  getY() {
		    return this.p.y;
		  }
		
		  damage() {
		    return this.damage;
		  }
		
		  die() {
		    this.alive = false;
		  }
		}
		
		// Game.pde
		var Game = class Game {
		  
		  score;
		  map;
		  round;
		  active;
		  
		  constructor(tempM) {
		    this.map = tempM;
		    this.score = 0;
		    this.round = 0;
		  }
		  
		  // if map = 0, grass
		  // if map = 1, snow
		  // if map = 2, ethereal
		  
		  setMap() {
		  }
		  
		}
		
		// Monster.pde
		var Monster = class Monster {
		
		  p;
		  w;
		  h;
		  speed;
		  currhp;
		  fullhp;
		  type;
		  skin;
		  hp;
		  alive;
		
		  constructor(tempX, tempY, tempT) {
		    this.p = new PVector(tempX, tempY);
		    this.type = tempT;
		    this.alive = true;
		
		    // Type 0 = basic
		    // Type 1 = swarm
		    // Type 2 = tank
		
		    if (this.type == 0) {
		      this.w = this.h = 30;
		      this.skin = color("#FF0000");
		      this.speed = 2;
		      this.fullhp = 150;
		      
		    } else if (this.type == 1) {
		      this.w = this.h = 20;
		      this.skin = color("#00FF00");
		      this.speed = 4;
		      this.fullhp = 75;
		      
		    } else if (this.type == 2) {
		      this.w = this.h = 45;
		      this.skin = color("#0000FF");
		      this.speed = 1;
		      this.fullhp = 250;
		    }
		
		    this.currhp = this.fullhp;
		  }
		
		  display() {
		
		    fill(this.skin);
		    rect(this.p.x, this.p.y, this.w, this.h);
		    
		    if (this.currhp < this.fullhp) {
		      fill(this.hp);
		      rect(this.p.x, (this.p.y - (this.h + 15) ), this.currhp, 5);
		    }
		  }
		
		  move() {
		    this.p.x += this.speed;
		    this.p.y += 0;
		  }
		
		  hit(damage) {
		    this.currhp -= damage;
		  }
		
		  update() {
		
		    if (this.currhp < this.fullhp) {
		      this.hp = color("#00FF60");
		      
		      if (this.currhp < this.fullhp/2) {
		        this.hp = color("#FFD900");
		        
		        if (this.currhp < this.fullhp/3) {
		          this.hp = color("#FF002F");
		        }
		        
		      }
		      
		    }
		
		    if (this.currhp <= 0) {
		      die();
		    }
		  }
		  
		  die() {
		    this.alive = false;
		  }
		  
		  status() {
		    return this.alive;
		  }
		
		  getX() {
		    return this.p.x;
		  }
		
		  getY() {
		    return this.p.y;
		  }
		
		  getW() {
		    return this.w;
		  }
		
		  getH() {
		    return this.h;
		  }
		}
		
		// prototype.pde
		//Summative Prototype
		//Aether Defence by Vincent Nguyen
		
		var towers = new ArrayList();
		var bullets = new ArrayList();
		var monsters = new ArrayList();
		
		var game;
		
		var state;
		
		function setup() {
		  fullScreen();
		  rectMode(CENTER);
		  textAlign(CENTER, CENTER);
		  state = 0;
		}
		
		function draw() {
		  background(30);
		
		  for (const t of towers) {
		    t.display();
		  }
		
		  for (const b of bullets) {
		    b.display();
		    b.move();
		  }
		
		  for (const m of monsters) {
		    m.update();
		    m.display();
		    m.move();
		  }
		
		  for (var i = 0; i < bullets.size(); i++) {
		
		    var b = bullets.get(i);
		
		    if ( !b.status() ) {
		      bullets.remove(i);
		    }
		  }
		
		  for (var j = monsters.size()-1; j >= 0; j--) {
		
		    var m = monsters.get(j);
		
		    if ( m.getX() >= width ) {
		      m.die();
		    }
		
		    if ( !m.status() ) {
		      monsters.remove(j);
		    }
		  }
		
		  for (var l = 0; l < towers.size(); l++) {
		    for (var j = monsters.size()-1; j >= 0; j--) {
		
		      var t = towers.get(l);
		      var m = monsters.get(j);
		
		      if (monsters.size() > 0) {
		        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {
		          if (frameCount % t.getFirerate() == 0) {
		            bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage() ));
		          }
		        }
		      }
		    }
		  }
		
		  for (var l = 0; l < towers.size(); l++) {
		    for (var j = monsters.size()-1; j >= 0; j--) {
		      for (var i = 0; i < bullets.size(); i++) {
		
		        var t = towers.get(l);
		        var b = bullets.get(i);
		        var m = monsters.get(j);
		        
		        b.target(m.getX(), m.getY(), t.getX(), t.getY(), t.getRange());
		        
		        if ( !m.status() ) {
		          b.targetFound = false;
		        }
		
		        if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {
		
		          if ( b.status() && m.status() ) {
		            m.hit( b.damage() );
		            b.die();
		          }
		        }
		      }
		    }
		  }
		}
		
		function mousePressed() {
		  switch(state) {
		  case 0: 
		    towers.add(new Tower(mouseX, mouseY, int(random(4)))); 
		    break;
		  case 1: 
		    monsters.add(new Monster(mouseX, mouseY, int(random(3)))); 
		    break;
		  }
		}
		
		function keyPressed() {
		  if (key == 't') {
		    state = 0;
		  } else if (key == 'm') {
		    state = 1;
		  }
		}
		
		// Tower.pde
		var Tower = class Tower {
		  
		  p;
		  v;
		  diam;
		  firerate;
		  range;
		  damage;
		  type;
		  upgraded;
		  
		  constructor(tempX, tempY, tempT) {
		    this.p = new PVector(tempX, tempY);
		    this.type = tempT;
		    this.diam = width/32;
		  }
		  
		  // Type 0 = basic
		  // Type 1 = long-range
		  // Type 2 = AoE
		  // Type 3 = sniper
		  
		  update() {
		    if (this.type == 0) {
		      this.firerate = 8;
		      this.range = 300;
		      this.damage = 2.5;
		    } else if (this.type == 1) {
		      this.firerate = 8;
		      this.range = 600;
		      this.damage = 1.5;
		    } else if (this.type == 2) {
		      this.firerate = 1;
		      this.range = 100;
		      this.damage = 1;
		    } else if (this.type == 3) {
		      this.firerate = 100;
		      this.range = 10000;
		      this.damage = 15;
		    }
		  }
		  
		  display() {
		    
		    update();
		    
		    noStroke();
		    fill(255);
		    rect(this.p.x,this.p.y,this.diam,this.diam);
		    
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
		  
		  getType() {
		    return this.type;
		  }
		  
		  getFirerate() {
		    return this.firerate;
		  }
		  
		  getRange() {
		    return this.range;
		  }
		  
		  getDamage() {
		    return this.damage;
		  }
		  
		  getX() {
		    return this.p.x;
		  }
		  
		  getY() {
		    return this.p.y;
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
