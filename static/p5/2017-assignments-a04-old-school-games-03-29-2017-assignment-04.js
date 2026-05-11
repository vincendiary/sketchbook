window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a04-old-school-games-03-29-2017-assignment-04"] = function (p) {
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
		/*
		
		[ -------------------- [ INFO ] -------------------- ]
		
		Assignment 04: Old School Games
		Vincent Nguyen
		03/29/2017
		
		[ -------------------- [ BLURB ] -------------------- ]
		
		Hello!
		
		For this assignment, I decided to recreate breakout using a chalkboard theme (ie: drawing on the chalkboard).
		I took your advice and looked into learning about objects and I can safely say that it was quite challenging
		but I feel like it has paid off. I see the benefits of organizing code into objects with their own values
		and functions. Some code here might be inefficient but that's just the result of my brain malfunctioning
		while it tried to comprehend object code plus maybe a lack of time. Either way, I've done my best to
		organize everything and document it all while half-awake at 2 AM just for your viewing pleasure. Enjoy~!
		
		As always, thanks for reading!
		
		P.S. Most of it is tabbed.
		
		[ -------------------- [ TABLE OF CONTENTS ] -------------------- ]
		
		01. SETTING UP GLOBAL VARIABLES
		02. VOID SETUP() AND ASSIGNING VALUES
		03. VOID DRAW() AND A MENU SWITCH
		04. AUDIO USING STATES
		05. BALL OBJECT
		06. BRICKS AND LIVES
		07. BUTTON OBJECT
		08. GAME MENU SCREEN
		09. GAME OBJECT
		10. GAME OVER SCREEN
		11. MAIN MENU SCREEN
		12. OPTIONS SCREEN
		13. PADDLE OBJECT
		
		[ -------------------- [ CREDITS ] -------------------- ]
		
		[ Images ]
		
		01. Chalkboard [http://www.thebridgelive.org/wp-content/uploads/2014/12/Chalkboard.jpg]
		
		[ Music ]
		
		01. Undertale OST - 010 - Ghost Fight [https://www.youtube.com/watch?v=Zz1bfhtKsHM]
		02. Undertale OST - 011 - Determination [https://www.youtube.com/watch?v=W1i4mTyidOc]
		03. Undertale OST - 034 - Memory [https://www.youtube.com/watch?v=eijdNQMYikY]
		
		[ Fonts ]
		
		01. Eraser by David Rakowski [http://www.dafont.com/eraser.font]
		
		*/
		
		// ============================== [ 01. SETTING UP GLOBAL VARIABLES ] ============================== //
		
		//Import the minim library for audio
		// import ddf.minim.*; // Processing import omitted
		
		//Set up variables
		var title, body; //Fonts
		var chalkboard; //Background
		var state, numBricks, numRows; //Screen state, number of bricks per row and column
		var xcenter, ycenter; //Because I'm lazy
		var darkblue, pink, darkpink, lightpink, lightblue, pinkred; //So I don't have to refer back to colour codes
		var musicOn, rainbowOn; //For optionsMenu
		
		//Set up objects
		var start, options, exit, main, music, rainbow; //Buttons
		var bricks; //Array of brick objects
		var player; //Paddle object
		var ball; //Ball object
		var breakout; //Game object
		
		//Set up audio players
		var minim;
		var musicMenu, musicGame, musicEnd;
		
		// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //
		
		function setup() {
		  createCanvas(800, 600); //Set window size
		  
		  //Quick simple basics out of the way
		  rectMode(CENTER);
		  textAlign(CENTER, CENTER);
		  smooth(8);
		  noStroke();
		  
		  //Assign colours
		  darkblue = "#262B34";
		  darkpink = "#C14875";
		  pink = "#FF6FA4";
		  pinkred = "#E8578C";
		  lightpink = "#FF8BB6";
		  lightblue = "#B9C0FF";
		  
		  //Floats
		  xcenter = width/2;
		  ycenter = height/2;
		  
		  //Booleans
		  musicOn = true;
		  rainbowOn = false;
		  
		  //Images and Fonts
		  chalkboard = loadImage(sketchbookAsset("2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/chalkboard.jpg"));
		  title = loadFont(sketchbookAsset("2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/Eraser_Regular-84.vlw"));
		  body = loadFont(sketchbookAsset("2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/Eraser_Regular-32.vlw"));
		  
		  //Audio starts here
		  minim = new Minim(this);
		  
		  //Load music
		  musicMenu = minim.loadFile("mainmenu.mp3");
		  musicGame = minim.loadFile("breakout.mp3");
		  musicEnd = minim.loadFile("gameover.mp3");
		  
		  //Set the gain so I can retain my hearing ability
		  musicMenu.setGain(-14);
		  musicGame.setGain(-14);
		  musicEnd.setGain(-14);
		  //Audio ends here
		  
		  //Setting up the array of bricks
		  numBricks = 13; //How many bricks per row?
		  numRows = 4; //How many rows?
		  
		  //Create the amount of bricks accordingly
		  bricks = new Array(numBricks*numRows);
		  
		  //Setting up the button objects
		  start = new button("Start", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
		  options = new button("Options", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
		  exit = new button("Exit", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
		  main = new button("Main Menu", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
		  music = new button("Music: ON", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
		  rainbow = new button("Rainbow: OFF", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
		  //Parameters = (text, x position, y position, width, height, idle colour, rollover colour, clicked colour)
		  
		  //Set up the paddle and ball objects
		  player = new paddle();
		  ball = new ball(xcenter, ycenter);
		  
		  //Create a new game object called breakout and reset it
		  breakout = new game();
		  breakout.reset();
		}
		
		
		
		// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //
		
		function draw() {
		  
		  audio(); //Plays the audio
		  
		  //A switch using the integer state to determine which screen we are looking at
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
		
		// audio.pde
		// ============================== [ 04. AUDIO USING STATES ] ============================== //
		
		function audio() {
		
		  if (musicOn) { //If music is on, play the music!
		    
		    if (state == 0 || state == 1) { //If it's the main menu or options menu...
		    
		      //Pause other music players just in case.
		      musicGame.pause();
		      musicEnd.pause();
		      
		      //If the music is not playing for some reason, rewind it.
		      if (musicMenu.isPlaying() != true) {
		        musicMenu.pause();
		        musicMenu.rewind();
		      }
		      
		      //And play the music
		      musicMenu.play();
		      
		    } else if (state == 2) { //If it's the game, play the cool musics
		      
		      //Pause other music players just in case.
		      musicMenu.pause();
		      musicEnd.pause();
		      
		      //If the music is not playing for some reason, rewind it.
		      if (musicGame.isPlaying() != true) {
		        musicGame.pause();
		        musicGame.rewind();
		      }
		      
		      //And play the music
		      musicGame.play();
		      
		    } else if (state == 3) { //If it's gameover, play the sad musics
		      
		      //Pause other music players just in case.
		      musicMenu.pause();
		      musicGame.pause();
		      
		      //If the music is not playing for some reason, rewind it.
		      if (musicEnd.isPlaying() != true) {
		        musicEnd.pause();
		        musicEnd.rewind();
		      }
		      
		      //And play the music
		      musicEnd.play();
		      
		    }
		    
		  } else { //If music is not supposed to be on... (oopsies :c)
		    
		    //Pause everything
		    musicMenu.pause();
		    musicGame.pause();
		    musicEnd.pause();
		  }
		}
		
		// ball.pde
		// ============================== [ 05. BALL OBJECT ] ============================== //
		
		//The first object in name but not the first created. That was the button. Because it was easy.
		//I hope I didn't mess anything up!
		
		var ball = class ball {
		
		  //Set up variables
		  d;
		  max;
		  rest; //in order of appearance: diameter, max speed, and rest position
		  p;
		  v;
		  ps; //in order of appearance: position, velocity, and previous speed
		
		  constructor(tempX, tempY) {
		    this.p = new PVector(tempX, tempY); //Position of the ball will be at the given values
		    this.v = new PVector(0, 0); //Starting velocity is 0
		    this.ps = new PVector(0, 0); //There's no previous speed yet. There's no speed at all actually.
		    this.d = 20; //Diameter 20
		    this.max = 16; //Max speed allowed is 16
		  }
		
		  display() {
		    noStroke();
		    fill(lightblue); //A nice cool colour
		    ellipse(this.p.x, this.p.y, this.d, this.d); //Draw ball accordingly
		  }
		
		  move() {
		    if ((this.p.y-this.d/2) <= 0) { //If the ball has hit the ceiling...
		      this.v.y *= -1; //Reverse the y velocity
		    }
		    if ((this.p.x-this.d/2) <= 0 || (this.p.x+this.d/2) >= width) { //Similarly, If the ball has hit the left or right wall...
		      this.v.x *= -1; //Reverse the x velocity
		    }
		    
		    //Make the position change based on the velocity
		    this.p = this.p.add(this.v);
		  }
		  
		  moveStart() {
		    this.v.x = 0;
		    this.v.y = -8;
		  }
		
		  pause() {
		  
		    if (this.v.x == 0 && this.v.y == 0 && breakout.paused) { //If the ball is not moving (ie: paused)
		      this.v.x = this.ps.x; //Make the ball move again according to its previous velocity
		      this.v.y = this.ps.y;
		      breakout.paused = false; //Game is no longer paused
		    } else { //If the ball IS moving when this function is called...
		      this.ps.x = this.v.x; //Store the velocity values
		      this.ps.y = this.v.y;
		      this.v.x = 0; //Set the velocity to 0 (stop it from moving)
		      this.v.y = 0;
		      breakout.paused = true; //Game is now paused
		    }
		    
		  }
		
		  rest() {
		  
		    //Stop the ball from moving
		    this.v.x = 0;
		    this.v.y = 0;
		    
		    //Constrain the ball akin to the paddle
		    this.rest = constrain(mouseX, (player.getW()/2), width - (player.getW()/2));;
		    
		    //Place ball atop paddle
		    this.p.y = width/8*5;
		    this.p.x = this.rest;
		  }
		  
		  reboundPaddle() {
		  
		    //Set up a float that determines the distance between the ball and the center of the paddle
		    var bounce = dist(this.p.x,player.getY(), player.getX(), player.getY());
		    
		    //Code to determine the rebounding v.x based on if the ball is to the left or to the right side of the paddle
		    if (this.p.x <= player.getX()) {
		      this.v.x = (bounce*0.2) *-1;
		    } else {
		      this.v.x = bounce*0.2;
		    }
		    
		    //Set the new v.y based on the max speed and absolute value of v.x
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
		  
		  getX() {
		    return this.p.x;
		  }
		  
		  getY() {
		    return this.p.y;
		  }
		}
		
		// brick.pde
		// ============================== [ 06. BRICKS AND LIVES ] ============================== //
		
		//I really like this one.
		//Was it because it was short and easy?
		//Yes.
		
		var brick = class brick {
		
		  //Set up variables
		  c; //Colour of brick
		  x;
		  y;
		  w;
		  h; //Floats for the rect() because I don't really need a PVector
		  alive; //IS THE BRICK ALIVE?
		
		  constructor(tempX, tempY) {
		    this.x = tempX;
		    this.y = tempY;
		    this.w = 50;
		    this.h = 30;
		    this.c = lightpink; //Default manly colour
		    this.alive = true; //They should be alive... they should be.
		  }
		
		  display() {
		  
		    //Quick setup stuff, get out of the way
		    rectMode(CENTER);
		    noStroke();
		    strokeWeight(3);
		    
		    //Activate rainbow mode onto the blocks if rainbow mode is on and the brick is alive
		    if (rainbowOn) {
		      if (this.alive) {
		        this.c = color( int(random(150, 250)), int(random(150, 250)), int(random(150, 250)) );
		      }
		    } //I'm sorry if it hurts the eyes.
		    
		    //Draw the brick
		    fill(this.c);
		    rect(this.x, this.y, this.w, this.h, 10);
		  }
		
		  getStatus() {
		    return this.alive;
		  }
		
		  die() {
		    this.alive = false; //They're not alive anymore
		    this.c = darkblue; //Dead bricks are dark blue bricks
		  }
		}
		
		// button.pde
		// ============================== [ 07. BUTTON OBJECT ] ============================== //
		
		//Oh old friend, it has been too long! How have you been?
		
		var button = class button {
		
		  //Set up variables
		  x;
		  y;
		  w;
		  h; //Standard issue rect() values
		  i;
		  r;
		  c; //Idle, rollover, clicked
		  mouseOn;
		  clicked; //To check whether the mouse is hovering over or clicking the button
		  t; //Text
		
		  constructor(text, tempX, tempY, tempW, tempH, tempI, tempR, tempC) {
		    //To be honest, I don't need the colour parameters but it feels more flexible to me so I'm going to keep it.
		    
		    //Sets the values
		    this.x = tempX;
		    this.y = tempY;
		    this.w = tempW;
		    this.h = tempH;
		    this.i = tempI;
		    this.r = tempR;
		    this.c = tempC;
		    this.t = text;
		    
		    this.mouseOn = false; //Mouse is not over it
		    this.clicked = false; //It is not being clicked
		  }
		
		  display() {
		    update(); //Call the update function to check whether the mouse is over or if it has been clicked
		    
		    //Quick setup stuff
		    rectMode(CENTER);
		    stroke(pink);
		    strokeWeight(5);
		    
		    //If the mouse is over
		    if (this.mouseOn) {
		      fill(this.r); //rollover colour
		      if (this.clicked) { //If it's clicked
		        fill(this.c); //clicked colour
		      }
		    } else {
		      fill(this.i); //otherwise, idle colour
		    }
		    
		    //Draw the rect
		    rect(this.x, this.y, this.w, this.h, 20);
		    
		    //Draw the text over it
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
		// ============================== [ 08. GAME MENU SCREEN ] ============================== //
		
		function drawGame() {
		
		  //Background
		  tint(60, 60, 80);
		  image(chalkboard, 0, 0, width, height);
		
		  //Draw bricks
		  breakout.build();
		
		  //Draw paddle and ball
		  player.display();
		  ball.display();
		  
		  //Draw the pretty text at the bottom
		  fill(lightblue);
		  
		  textFont(body);
		  textSize(20);
		  textAlign(LEFT, CENTER);
		  text("lives: " + str(breakout.lives), 20, height/64*63); //Uses the value inside of the game class because I love objects
		
		  textFont(body);
		  textSize(20);
		  textAlign(RIGHT, CENTER);
		  text("points: " + str(breakout.points), width-20, height/64*63); //Uses the value inside of the game class because I love objects v.2
		
		  if (breakout.active) { //If the game is active...
		    ball.move(); //Get the ball moving!
		
		    if (breakout.paused) { //If the game is paused, give them a reminder that hey, you paused the game, buddy.
		      textFont(body);
		      textSize(32);
		      textAlign(CENTER, CENTER);
		      text("Paused", xcenter, ycenter);
		    } else { //If the game is not paused, give them a reminder that hey, you can pause the game, buddy.
		      textFont(body);
		      textSize(20);
		      textAlign(CENTER, CENTER);
		      text("Click anywhere to pause", xcenter, height/64*63);
		    }
		  } else { //If the game is not active (ie: ball went off-screen)
		    ball.rest(); //Ball go back to the rest position atop the paddle
		    breakout.reset(); //Reset the game
		
		    textFont(body); //Display cute text reminding them that hey, click to start the game, buddy
		    textSize(32);
		    textAlign(CENTER, CENTER);
		    fill(pink);
		    text("Click anywhere to start", xcenter, ycenter); 
		  }
		
		  if (ball.missed()) { //If the ball misses (off screen)
		    breakout.active = false; //GAME ENDS
		    breakout.lives -= 1; //You lose a life! :C
		  }
		
		  if (ball.hitPaddle()) { //If the ball hits the paddle
		    ball.reboundPaddle(); //BOUNCE
		  }
		  
		  if (breakout.lives <= 0) { //If you have no more lives
		    state = 3; //GAME OVER
		  }
		}
		
		// game.pde
		// ============================== [ 09. GAME OBJECT ] ============================== //
		
		//Everything should be an object
		//You get an object, YOU get an object, EVERYONE gets an object!
		
		var game = class game {
		  
		  //Set up the variables
		  points;
		  lives;
		  active;
		  paused;
		
		  constructor() {
		    this.points = 0;
		    this.lives = 3; //Is 3 lives going to be enough?
		    this.active = false; //Not active yet
		    this.paused = false; //I'm going to be honest, I don't really understand why this one works
		  }
		
		  build() {
		    for (var i=0; i<(numBricks*numRows); i++) {
		      bricks[i].display(); //draw them
		      collision((i%13)*60+40, (i/13)*40+30, i); //check for collision
		    }
		  }
		
		  reset() {
		    for (var i=0; i<(numBricks*numRows); i++) {
		      bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
		    }
		  }
		
		  points() {
		    this.points += int(random(18, 24));
		  }
		
		  collision(bx, by, blockNum) {
		  
		    //Shoutout to Liam
		    
		    //Sets up variables
		    var x, y;
		    x = ball.getX();
		    y = ball.getY();
		    
		    //uses the ball's x and y return functions
		
		    if ( (x >= bx - 25) && (x <= bx + 25) && (y >= by - 15) && (y <= by + 15) ) { //If the ball is within a brick's hitbox
		      if (bricks[blockNum].getStatus()) { //Check if the brick is currently alive
		        bricks[blockNum].die(); //If it is, it dies.
		        ball.reboundBrick(); //Ball bounces
		        breakout.points(); //Give some points
		      }
		    }
		  }
		  
		}
		
		function mousePressed() {
		  if (ball.startPosition()) { //If the ball is at the starting position
		    ball.moveStart(); //Get the ball moving
		    breakout.active = true; //Game is ON
		  } else {
		    ball.pause(); //Otherwise, it probably means the game is already active, PAUSE THE GAME!
		  }
		}
		
		// gameOver.pde
		// ============================== [ 10. GAME OVER SCREEN ] ============================== //
		
		//I'm sure I don't have to explain this...
		//But I will.
		//Because I'm a sweetheart.
		
		function gameOver() {
		
		  //draw background
		  tint(125, 125, 150);
		  image(chalkboard, 0, 0, width, height);
		  
		  //Cool text detailing your score
		  textFont(title);
		  textSize(72);
		  textAlign(CENTER, CENTER);
		  fill(lightpink);
		  text("game over!", xcenter, ycenter-150);
		  fill(lightblue);
		  text("final score: " + str(breakout.points), xcenter, ycenter-50);
		  
		  //Display the button to return home
		  main.display();
		  
		  //If its clicked, go back to the main menu
		  if (main.click()) {
		    state = 0;
		    mouseIsPressed = false;
		  }
		}
		
		// mainMenu.pde
		// ============================== [ 11. MAIN MENU SCREEN ] ============================== //
		
		//Three buttons, WHOA
		//Yes, it's true. I really am a self-proclaimed object connoisseur!
		
		function mainMenu() {
		  
		  //Background
		  tint(125, 125, 150);
		  image(chalkboard, 0, 0, width, height);
		  
		  //Display all three buttons
		  start.display();
		  options.display();
		  exit.display();
		  
		  //Title. No, seriously it's just the title
		  textFont(title);
		  textSize(84);
		  fill(darkpink);
		  text("Breakout", width/2*1.01, height/5*1.02);
		  fill(pink);
		  text("Breakout", width/2, height/5);
		  
		  //Button clicking
		  if (start.click()) { //If the start button is clicked, state = game and make a new game object (reset)
		    state = 2;
		    breakout = new game();
		    mouseIsPressed = false;
		  } else if (options.click()) { //If the options button is clicked, options screen now
		    state = 1;
		    mouseIsPressed = false;
		  } else if (exit.click()) { //If the exit button is clicked... then ok, bye.
		    exit();
		  }
		}
		
		// optionsMenu.pde
		// ============================== [ 12. OPTIONS SCREEN ] ============================== //
		
		//Same old, same old
		
		function optionsMenu() {
		
		  //background
		  tint(125, 125, 150);
		  image(chalkboard, 0, 0, width, height);
		  
		  //Display all three buttons
		  main.display();
		  music.display();
		  rainbow.display();
		  
		  //Title. Ok, not exactly. It says options.
		  textFont(title);
		  textSize(84);
		  textAlign(CENTER,CENTER);
		  fill(darkpink);
		  text("Options", width/2*1.01, height/5*1.02);
		  fill(pink);
		  text("Options", width/2, height/5);
		  
		  //Button functionality
		  if (main.click()) { //If the main menu button is clicked, return to the main menu
		    state = 0;
		    mouseIsPressed = false;
		    
		  } else if (music.click()) { //If the music button is clicked...
		  
		    //Check whether music is currently on or off
		    if (musicOn) { //If it's on, turn it off please
		      music.t = "Music: OFF";
		      musicOn = false;
		    } else if (!musicOn) { //If it's off, turn those tunes up!
		      music.t = "Music: ON";
		      musicOn = true;
		    }
		    mouseIsPressed = false;
		    
		  } else if (rainbow.click()) { //If the rainbow button is clicked
		  
		    //Check whether rainbow mode is currently on or off
		    if (rainbowOn) { //If it's on, sleepy pink dream time
		      rainbow.t = "Rainbow: OFF";
		      rainbowOn = false;
		    } else if (!rainbowOn) { //If it's off, time to go to the club
		      rainbow.t = "Rainbow: ON";
		      rainbowOn = true;
		    }
		    mouseIsPressed = false;
		  }
		}
		
		// paddle.pde
		// ============================== [ 13. PADDLE OBJECT ] ============================== //
		
		//This one is pretty simple.
		//Most of the functionality (ie: hit detection) is shoved onto other objects.
		
		var paddle = class paddle {
		
		  //Set up variables
		  p;
		  w;
		  h;
		  c;
		
		  constructor() {
		    this.p = new PVector(xcenter, height/8*7);
		    this.w = width/6;
		    this.h = height/32;
		    this.c = lightpink; //It's a soothing colour
		  }
		
		  display() {
		    this.p.x = constrain(mouseX, this.w/2, width - this.w/2); //Paddles must be constrained
		    rectMode(CENTER);
		    noStroke();
		    fill(this.c);
		    rect(this.p.x, this.p.y, this.w, this.h, 5);
		  }
		  
		  //Floats to return values. I don't really need the last two but whatever. It's nice to stay consistent!
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
		
		//I really enjoy documentation
		//But don't tell anybody
		// ('-')>P
		//Or I'll use my axe

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
