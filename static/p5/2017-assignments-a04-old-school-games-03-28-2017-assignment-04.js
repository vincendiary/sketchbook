window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a04-old-school-games-03-28-2017-assignment-04"] = function (p) {
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
		
		//work on this
		//http://coryschires.com/breakout-clone-in-processing-js/
		
		var title, body;
		var chalkboard;
		var state, numBricks, numRows;
		var xcenter, ycenter;
		var darkblue, pink, darkpink, lightpink, lightblue, pinkred, lightyellow;
		
		var start, options, exit, main;
		var bricks;
		var player;
		var ball;
		var breakout;
		
		
		function setup() {
		  createCanvas(800, 600);
		
		  rectMode(CENTER);
		  textAlign(CENTER, CENTER);
		  noStroke();
		
		  darkblue = "#262B34";
		  darkpink = "#C14875";
		  pink = "#FF6FA4";
		  pinkred = "#E8578C";
		  lightpink = "#FF8BB6";
		  lightblue = "#B9C0FF";
		  lightyellow = "#FFE8AD";
		
		  xcenter = width/2;
		  ycenter = height/2;
		
		  chalkboard = loadImage(sketchbookAsset("2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/chalkboard.jpg"));
		  title = loadFont(sketchbookAsset("2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/Eraser_Regular-84.vlw"));
		  body = loadFont(sketchbookAsset("2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/Eraser_Regular-32.vlw"));
		
		  numBricks = 13;
		  numRows = 4;
		
		  bricks = new Array(numBricks*numRows);
		
		  for (var i=0; i<(numBricks*numRows); i++) {
		    bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
		  }
		
		  start = new button("Start", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
		  options = new button("Options", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
		  exit = new button("Exit", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
		  main = new button("Main Menu", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
		
		  player = new paddle();
		  ball = new ball(xcenter, ycenter);
		
		  breakout = new game();
		}
		
		function draw() {
		  switch(state) {
		  case 0: 
		    mainMenu(); 
		    break;
		  case 1: 
		    optionsMenu(); 
		    break;
		  case 2: 
		    drawGame(); 
		    break;
		  case 3:
		    gameOver();
		    break;
		  default: 
		    mainMenu(); 
		    break;
		  }
		}
		
		function mousePressed() {
		  if (ball.startPosition()) {
		    ball.moveStart();
		    breakout.active = true;
		  } else {
		    ball.pause();
		    if (breakout.paused) {
		      breakout.paused = false;
		    } else {
		      breakout.paused = true;
		    }
		  }
		}
		
		// ball.pde
		var ball = class ball {
		
		  d;
		  max;
		  rest;
		  p;
		  v;
		  ps;
		
		  constructor(tempX, tempY) {
		    this.p = new PVector(tempX, tempY);
		    this.v = new PVector(0, 0);
		    this.ps = new PVector(0, 0);
		    this.d = 20;
		    this.max = 16;
		  }
		
		  display() {
		    noStroke();
		    fill(lightblue);
		    ellipse(this.p.x, this.p.y, this.d, this.d);
		  }
		
		  move() {
		    if ((this.p.y-this.d/2) <= 0) {
		      this.v.y *= -1;
		    }
		    if ((this.p.x-this.d/2) <= 0 || (this.p.x+this.d/2) >= width) {
		      this.v.x *= -1;
		    }
		    this.p = this.p.add(this.v);
		  }
		  
		  moveStart() {
		    this.v.x = 0;
		    this.v.y = -8;
		  }
		
		  pause() {
		    if (this.v.x == 0 && this.v.y == 0) {
		      this.v.x = this.ps.x;
		      this.v.y = this.ps.y;
		    } else {
		      this.ps.x = this.v.x;
		      this.ps.y = this.v.y;
		      this.v.x = 0;
		      this.v.y = 0;
		    }
		  }
		
		  rest() {
		    // stop ball from moving
		    this.v.x = 0;
		    this.v.y = 0;
		    
		    this.rest = constrain(mouseX, (player.getW()/2), width - (player.getW()/2));;
		    
		    // place ball atop paddle
		    this.p.y = width/8*5;
		    this.p.x = this.rest;
		  }
		  
		  reboundPaddle() {
		    var bounce;
		    bounce = dist(this.p.x,player.getY(), player.getX(), player.getY());
		    
		    if (this.p.x <= player.getX()) {
		      this.v.x = (bounce*0.2) *-1;
		    } else {
		      this.v.x = bounce*0.2;
		    }
		    
		    this.v.y = (this.max - abs(this.v.x))*-1;
		  }
		  
		  reboundBrick() {
		    this.v.y *= -1;
		  }
		  
		  startPosition() {
		    if (this.p.y == width/8*5 && this.v.x == 0 && this.v.y == 0) {
		      return true;
		    } else {
		      return false;
		    }
		  }
		  
		  missed() {
		    if (this.p.y >= height) {
		      return true;
		    } else {
		      return false;
		    }
		  }
		  
		  hitPaddle() {
		    if (this.p.x >= player.getX() - (player.getW()/2) &&
		        this.p.x <= player.getX() + (player.getW()/2) &&
		        this.p.y >= player.getY() - (player.getH()/2) &&
		        this.p.y <= player.getY() + (player.getH()/2)) {
		      return true;
		    } else {
		      return false;
		    }
		  }
		  
		  hitBrick() {
		    if (this.p.y <= 164) {
		      return true;
		    } else {
		      return false;
		    }
		  }
		  
		  getX() {
		    return this.p.x;
		  }
		  
		  getY() {
		    return this.p.y;
		  }
		}
		
		// brick.pde
		var brick = class brick {
		  
		  c;
		  x;
		  y;
		  w;
		  h;
		  alive;
		  
		  constructor(tempX, tempY) {
		    this.x = tempX;
		    this.y = tempY;
		    this.w = 50;
		    this.h = 30;
		    this.c = lightpink;
		    this.alive = true;
		  }
		  
		  display() {
		    rectMode(CENTER);
		    noStroke();
		    strokeWeight(3);
		    fill(this.c);
		    rect(this.x,this.y,this.w,this.h,10);
		  }
		  
		  getStatus() {
		    return this.alive;
		  }
		  
		  die() {
		    this.alive = false;
		    this.c = darkblue;
		  }
		  
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
		  t;
		
		  constructor(text, tempX, tempY, tempW, tempH, tempI, tempR, tempC) {
		    this.x = tempX;
		    this.y = tempY;
		    this.w = tempW;
		    this.h = tempH;
		    this.i = tempI;
		    this.r = tempR;
		    this.c = tempC;
		    this.t = text;
		    this.mouseOn = false;
		    this.clicked = false;
		  }
		
		  display() {
		    update();
		    rectMode(CENTER);
		    stroke(pink);
		    strokeWeight(5);
		
		    if (this.mouseOn) {
		      fill(this.r);
		      if (this.clicked) {
		        fill(this.c);
		      }
		    } else {
		      fill(this.i);
		    }
		
		    rect(this.x, this.y, this.w, this.h, 20);
		    fill(darkblue);
		    textFont(body);
		    textSize(36);
		    textAlign(CENTER,CENTER);
		    text(this.t, this.x, this.y);
		  }
		
		  update() {
		    if (mouseOver(this.x, this.y, this.w, this.h) == true) {
		      this.mouseOn = true;
		      if (click()) {
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
		
		  click() {
		    if (mouseOver(this.x, this.y, this.w, this.h) == true) {
		      if (mouseIsPressed) {
		        return true;
		      } else {
		        return false;
		      }
		    } else {
		      return false;
		    }
		  }
		}
		
		// drawGame.pde
		function drawGame() {
		
		  //draw background
		  tint(60, 60, 80);
		  image(chalkboard, 0, 0, width, height);
		
		  //draw bricks
		  breakout.build();
		
		  //draw paddle and ball
		  player.display();
		  ball.display();
		  
		  fill(lightblue);
		  
		  textFont(body);
		  textSize(20);
		  textAlign(LEFT, CENTER);
		  text("lives: " + str(breakout.lives), 20, height/64*63);
		
		  textFont(body);
		  textSize(20);
		  textAlign(RIGHT, CENTER);
		  text("points: " + str(breakout.points), width-20, height/64*63);
		
		  if (breakout.active) {
		    ball.move();
		
		    if (breakout.paused) {
		      textFont(body);
		      textSize(32);
		      textAlign(CENTER, CENTER);
		      text("Paused", xcenter, ycenter);
		    } else {
		      textFont(body);
		      textSize(20);
		      textAlign(CENTER, CENTER);
		      text("Click anywhere to pause", xcenter, height/64*63);
		    }
		  } else {
		    ball.rest();
		    breakout.reset();
		
		    textFont(body);
		    textSize(32);
		    textAlign(CENTER, CENTER);
		    fill(pink);
		    text("Click anywhere to start", xcenter, ycenter);
		  }
		
		  if (ball.missed()) {
		    breakout.active = false;
		    breakout.lives -= 1;
		  }
		
		  if (ball.hitPaddle()) {
		    ball.reboundPaddle();
		  }
		
		  if (ball.hitBrick()) {
		    var hit = breakout.collision();
		
		    if (bricks[hit].getStatus()) {
		      bricks[hit].die();
		      ball.reboundBrick();
		      breakout.points();
		    }
		  }
		  if (breakout.lives <= 0) {
		    state = 3;
		  }
		}
		
		// game.pde
		var game = class game {
		  points;
		  lives;
		  active;
		  paused;
		
		  constructor() {
		    this.points = 0;
		    this.lives = 3;
		    this.active = false;
		    this.paused = false;
		  }
		
		  build() {
		    for (var i=0; i<(numBricks*numRows); i++) {
		      bricks[i].display();
		    }
		  }
		
		  reset() {
		    for (var i=0; i<(numBricks*numRows); i++) {
		      bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
		    }
		  }
		  
		  points() {
		    this.points += int(random(18,23));
		  }
		  
		  collision() {
		    var x, y;
		    var hit;
		    x = ball.getX();
		    y = ball.getY();
		    
		    hit = 46;
		    
		    if (y >= 15 && y <= 45) { //Row 1
		    
		      if (x >= 15 && x <= 65 ) { hit = 0;} //Column 1
		        else if (x >= 75 && x <= 125) { hit = 1; }
		        else if (x >= 135 && x <= 185) { hit = 2; }
		        else if (x >= 195 && x <= 245) { hit = 3; }
		        else if (x >= 255 && x <= 305) { hit = 4; }
		        else if (x >= 315 && x <= 365) { hit = 5; }
		        else if (x >= 375 && x <= 425) { hit = 6; }
		        else if (x >= 435 && x <= 485) { hit = 7; }
		        else if (x >= 495 && x <= 545) { hit = 8; }
		        else if (x >= 555 && x <= 605) { hit = 9; }
		        else if (x >= 615 && x <= 665) { hit = 10; }
		        else if (x >= 675 && x <= 725) { hit = 11; }
		        else if (x >= 735 && x <= 785) { hit = 12; }
		        
		    } else if (y >= 55 && y <= 85) { //Row 2
		      
		      if (x >= 15 && x <= 65 ) { hit = 13;} //Column 1
		        else if (x >= 75 && x <= 125) { hit = 14; }
		        else if (x >= 135 && x <= 185) { hit = 15; }
		        else if (x >= 195 && x <= 245) { hit = 16; }
		        else if (x >= 255 && x <= 305) { hit = 17; }
		        else if (x >= 315 && x <= 365) { hit = 18; }
		        else if (x >= 375 && x <= 425) { hit = 19; }
		        else if (x >= 435 && x <= 485) { hit = 20; }
		        else if (x >= 495 && x <= 545) { hit = 21; }
		        else if (x >= 555 && x <= 605) { hit = 22; }
		        else if (x >= 615 && x <= 665) { hit = 23; }
		        else if (x >= 675 && x <= 725) { hit = 24; }
		        else if (x >= 735 && x <= 785) { hit = 25; }
		        
		    } else if (y >= 95 && y <= 125) {
		      
		      if (x >= 15 && x <= 65 ) { hit = 26;} //Column 1
		        else if (x >= 75 && x <= 125) { hit = 27; }
		        else if (x >= 135 && x <= 185) { hit = 28; }
		        else if (x >= 195 && x <= 245) { hit = 29; }
		        else if (x >= 255 && x <= 305) { hit = 30; }
		        else if (x >= 315 && x <= 365) { hit = 31; }
		        else if (x >= 375 && x <= 425) { hit = 32; }
		        else if (x >= 435 && x <= 485) { hit = 33; }
		        else if (x >= 495 && x <= 545) { hit = 34; }
		        else if (x >= 555 && x <= 605) { hit = 35; }
		        else if (x >= 615 && x <= 665) { hit = 36; }
		        else if (x >= 675 && x <= 725) { hit = 37; }
		        else if (x >= 735 && x <= 785) { hit = 38; }
		      
		    } else if (y >= 135 && y <= 165) {
		      
		      if (x >= 15 && x <= 65 ) { hit = 39;} //Column 1
		        else if (x >= 75 && x <= 125) { hit = 40; }
		        else if (x >= 135 && x <= 185) { hit = 41; }
		        else if (x >= 195 && x <= 245) { hit = 42; }
		        else if (x >= 255 && x <= 305) { hit = 43; }
		        else if (x >= 315 && x <= 365) { hit = 44; }
		        else if (x >= 375 && x <= 425) { hit = 45; }
		        else if (x >= 435 && x <= 485) { hit = 46; }
		        else if (x >= 495 && x <= 545) { hit = 47; }
		        else if (x >= 555 && x <= 605) { hit = 48; }
		        else if (x >= 615 && x <= 665) { hit = 49; }
		        else if (x >= 675 && x <= 725) { hit = 50; }
		        else if (x >= 735 && x <= 785) { hit = 51; }
		      
		    }
		    
		    return hit;
		  }
		}
		
		// gameOver.pde
		function gameOver() {
		  //draw background
		  tint(125, 125, 150);
		  image(chalkboard, 0, 0, width, height);
		  
		  textFont(title);
		  textSize(72);
		  textAlign(CENTER, CENTER);
		  fill(lightpink);
		  text("game over!", xcenter, ycenter-150);
		  fill(lightblue);
		  text("final score: " + str(breakout.points), xcenter, ycenter-50);
		  
		  main.display();
		  
		  if (main.click()) {
		    state = 0;
		    mouseIsPressed = false;
		  }
		}
		
		// mainMenu.pde
		function mainMenu() {
		  tint(125, 125, 150);
		  image(chalkboard, 0, 0, width, height);
		  
		  start.display();
		  options.display();
		  exit.display();
		  
		  //Title
		  textFont(title);
		  textSize(84);
		  fill(darkpink);
		  text("Breakout", width/2*1.01, height/5*1.02);
		  fill(pink);
		  text("Breakout", width/2, height/5);
		  
		  if (start.click()) {
		    state = 2;
		    breakout = new game();
		    mouseIsPressed = false;
		  } else if (options.click()) {
		    state = 1;
		    mouseIsPressed = false;
		  } else if (exit.click()) {
		    exit();
		  }
		}
		
		// optionsMenu.pde
		function optionsMenu() {
		  //background
		  tint(125, 125, 150);
		  image(chalkboard, 0, 0, width, height);
		  
		  main.display();
		  
		  if (main.click()) {
		    state = 0;
		    mouseIsPressed = false;
		  }
		}
		
		// paddle.pde
		var paddle = class paddle {
		  
		  x;
		  y;
		  w;
		  h;
		  c;
		  
		  constructor() {
		    this.x = xcenter;
		    this.y = height/8*7;
		    this.w = width/6;
		    this.h = height/32;
		    this.c = lightpink;
		  }
		  
		  display() {
		    this.x = constrain(mouseX, this.w/2, width - this.w/2);
		    rectMode(CENTER);
		    noStroke();
		    fill(this.c);
		    rect(this.x,this.y,this.w,this.h,5);
		  }
		  
		  
		  
		  getX() {
		    return this.x;
		  }
		  
		  getY() {
		    return this.y;
		  }
		  
		  getW() {
		    return this.w;
		  }
		  
		  getH() {
		    return this.h;
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
