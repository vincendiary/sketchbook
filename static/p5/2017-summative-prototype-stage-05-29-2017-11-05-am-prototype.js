window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-summative-prototype-stage-05-29-2017-11-05-am-prototype"] = function (p) {
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
		
		  pos;
		  vel;
		  loca;
		  tar;
		  pulse;
		  diam;
		  speed;
		  rota;
		  damage;
		  health;
		  target;
		  glow;
		  alive;
		
		  constructor(tempX, tempY, tempDam, tarM) {
		    this.pos = new PVector(tempX, tempY);
		    this.vel = new PVector();
		    this.tar = new PVector();
		    this.speed = 10;
		    this.diam = 5;
		    this.damage = tempDam;
		    this.health = 120;
		    this.target = tarM;
		    this.pulse = random(90);
		    this.alive = true;
		  }
		
		  display() {
		    noStroke();
		    fill(this.glow);
		    rect(this.pos.x, this.pos.y, this.diam, this.diam);
		  }
		
		  update() {
		    this.health -= 1;
		    this.pulse += 0.5;
		    this.glow = color((80*sin(this.pulse) + 175), 30, 30 );
		
		    if (this.health <= 0) {
		      die();
		    }
		  }
		
		  target() {
		    
		    var mx = monsters.get(this.target).getX();
		    var my = monsters.get(this.target).getY();
		    
		    this.tar = new PVector(mx,my);
		    this.loca = new PVector(this.tar.x - this.pos.x, this.tar.y - this.pos.y);
		    this.rota = atan2(this.loca.y, this.loca.x) * 180 / PI;
		    
		  }
		
		  move() {
		
		    this.vel.x = this.speed*(90 - abs(this.rota))/90;
		
		    if (this.rota < 0) {
		      this.vel.y = -this.speed + abs(this.vel.x);//Going upwards.
		    } else {
		      this.vel.y = this.speed - abs(this.vel.x);//Going downwards.
		    }
		
		    this.pos.x += this.vel.x;
		    this.pos.y += this.vel.y;
		  }
		
		  status() {
		    return this.alive;
		  }
		
		  getX() {
		    return this.pos.x;
		  }
		
		  getY() {
		    return this.pos.y;
		  }
		
		  damage() {
		    return this.damage;
		  }
		
		  die() {
		    this.alive = false;
		  }
		}
		
		// Cell.pde
		var Cell = class Cell {
		  
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
		//Aether Defence by Vincent Nguyen
		
		var towers = new ArrayList();
		var bullets = new ArrayList();
		var monsters = new ArrayList();
		var cells = new ArrayList();
		
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
		    t.update();
		    t.display();
		  }
		
		  for (const b of bullets) {
		    b.update();
		    b.display();
		    b.move();
		
		    b.target();
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
		
		    if ( m.getX() >= width || m.getX() <= 0 || m.getY() >= height || m.getY() <= 0 ) {
		      m.die();
		    }
		
		    if ( !m.status() ) {
		      monsters.remove(j);
		      bullets.clear();
		    }
		  }
		
		  for (var l = 0; l < towers.size(); l++) {
		    for (var j = monsters.size()-1; j >= 0; j--) {
		
		      var t = towers.get(l);
		      var m = monsters.get(j);
		
		      if (monsters.size() > 0) {
		        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {
		          
		          if (!t.targetFound()) {
		            t.target = j;
		            t.targetFound = true;
		          }
		          
		          if (t.targetFound()) {
		            
		            if (frameCount % t.getFirerate() == 0) {
		              bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage(), t.target ));
		            }
		            
		          }
		          
		        }
		
		        if (!m.status()) {
		          t.targetFound = false;
		        }
		      }
		
		      for (var i = 0; i < bullets.size(); i++) {
		
		        var b = bullets.get(i);
		
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
		  
		  pos;
		  diam;
		  firerate;
		  range;
		  damage;
		  type;
		  target;
		  upgraded;
		  targetFound;
		  
		  constructor(tempX, tempY, tempT) {
		    this.pos = new PVector(tempX, tempY);
		    this.type = tempT;
		    this.diam = width/32;
		    this.target = 0;
		    this.targetFound = false;
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
		    
		    noStroke();
		    fill(255);
		    rect(this.pos.x,this.pos.y,this.diam,this.diam);
		    
		    fill(0);
		    if (this.type == 0) {
		      text("Basic", this.pos.x, this.pos.y);
		    } else if (this.type == 1) {
		      text("Long", this.pos.x, this.pos.y);
		    } else if (this.type == 2) {
		      text("Laser", this.pos.x, this.pos.y);
		    } else if (this.type == 3) {
		      text("Sniper", this.pos.x, this.pos.y);
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
		  
		  targetFound() {
		    return this.targetFound;
		  }
		  
		  getX() {
		    return this.pos.x;
		  }
		  
		  getY() {
		    return this.pos.y;
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
