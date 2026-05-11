window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a05-animated-objects-assignment-05"] = function (p) {
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
		// Assignment_05.pde
		/*
		
		[ -------------------- [ INFO ] -------------------- ]
		
		Assignment 05: Animated Objects
		Vincent Nguyen
		04/18/2017
		
		[ -------------------- [ BLURB ] -------------------- ]
		
		Hello!
		
		For this assignment, I really wanted to recreate rain BUT not just run-of-the-mill boring rectangular rain.
		I wanted to make a rain object that would splash and split apart and create somewhat realistic looking
		impacts. I also added in a mouse controlled umbrella (custom shape) which allows me to showcase the rain
		particles splashing and falling off the side of the umbrella (it might be a bit hard to see). Afterwards,
		I added a short story about a dog for fun. Anyway, that's pretty much all my program really does. Oh, and
		there are some extra buttons apart from the time-freeze button just to fill in the space. Hope you enjoy.
		
		As always, thanks for reading!
		
		Vincent
		
		[ -------------------- [ TABLE OF CONTENTS ] -------------------- ]
		
		01. SETTING UP GLOBAL VARIABLES
		02. VOID SETUP() AND ASSIGNING VALUES
		03. VOID DRAW() AND A MENU SWITCH
		
		[ -------------------- [ CREDITS ] -------------------- ]
		
		
		[ Images ]
		
		01. back01 [ https://i.imgur.com/C4r2jXu.jpg ]
		02. back02 [ scromy.com/wp-content/uploads/2017/01/anime-city-scenery-wallpapers-hd-resolution.jpg ]
		03. back03 [ https://s-media-cache-ak0.pinimg.com/originals/65/58/61/655861c7cf92b29d2c43cda51faa38bd.jpg ]
		04. back04 [ http://www.toocraft.com/postpic/2010/05/beautiful-night-sky-anime_87454.jpg ]
		05. back05 [ http://scromy.com/wp-content/uploads/2017/01/night-anime-scenery-wallpaper-full-hd.jpg ]
		06. dog    [ http://4.bp.blogspot.com/-pU8NGCLtAic/U7BsXeiIXaI/AAAAAAAAABw/uNxkJ9JuFRg/s1600/perrito.png ]
		  
		[ Sound ]
		  
		01. rain    [ https://www.freesound.org/people/lebcraftlp/sounds/243628/ ]
		02. thunder [ https://www.freesound.org/people/InspectorJ/sounds/360328/ ]
		
		[ Fonts ]
		
		01. New Cicle by TPK [ www.dafont.com/new-cicle.font ]
		
		*/
		
		// ============================== [ 01. SETTING UP GLOBAL VARIABLES ] ============================== //
		
		//Sets up variables
		var font;
		var back01, back02, back03, back04, back05, dog;
		var rain = new ArrayList();
		var state, textState, backState;
		var opacity;
		var frozen, colours;
		
		//Sets up audio
		// import ddf.minim.*; // Processing import omitted
		var minim;
		var thunder, rains;
		
		//Sets up objects
		var freeze, rainbow, backdrop;
		var puppersnup;
		var red;
		
		// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //
		
		function setup() {
		  createCanvas(800,600);
		  
		  rectMode(CENTER);
		  imageMode(CENTER);
		  textAlign(CENTER,CENTER);
		  
		  smooth(8);
		  noStroke();
		  
		  //Font
		  font = loadFont(sketchbookAsset("2017/Assignments/A05 - Animated Objects/Assignment_05/data/NewCicle-Semi-36.vlw"));
		  
		  //Images
		  back01 = loadImage(sketchbookAsset("2017/Assignments/A05 - Animated Objects/Assignment_05/data/background01.png"));
		  back02 = loadImage(sketchbookAsset("2017/Assignments/A05 - Animated Objects/Assignment_05/data/background02.png"));
		  back03 = loadImage(sketchbookAsset("2017/Assignments/A05 - Animated Objects/Assignment_05/data/background03.png"));
		  back04 = loadImage(sketchbookAsset("2017/Assignments/A05 - Animated Objects/Assignment_05/data/background04.png"));
		  back05 = loadImage(sketchbookAsset("2017/Assignments/A05 - Animated Objects/Assignment_05/data/background05.png"));
		  dog = loadImage(sketchbookAsset("2017/Assignments/A05 - Animated Objects/Assignment_05/data/doggo.png"));
		  
		  //Text
		  textFont(font);
		  textSize(36);
		  
		  //Objects
		  freeze = new Button("Freeze Time", width/16*4, height*0.94, width/4, height/10);
		  rainbow = new Button("Candy Rain", width/16*8, height*0.94, width/4, height/10);
		  backdrop = new Button("Background", width/16*12, height*0.94, width/4, height/10);
		  puppersnup = new Dog();
		  red = new Umbrella();
		  
		  //Audio
		  minim = new Minim(this);
		  
		  rains = minim.loadFile("rain.mp3");
		  rains.setGain(-10);
		  rains.loop();
		  
		  thunder = minim.loadFile("thunder.mp3");
		  thunder.setGain(-10);
		  
		  //Integers
		  state = 0;
		  textState = 0;
		  
		  //Float
		  opacity = 255;
		}
		
		// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //
		
		function draw() {
		  
		  audio(); //audio function
		  
		  switch(state) { //switch for screens
		    case 0:
		      drawIntro();
		      break;
		    case 1:
		      drawGame();
		      break;
		    default:
		      drawIntro();
		      break;
		  }
		  
		}
		
		// Audio.pde
		function audio() {
		  
		  if (!rains.isPlaying()) { //if rain is not playing
		    rains.cue(0); //restart it
		  }
		  
		  if (!frozen) { //if time is not frozen...
		    rains.play(); //play the rain sound
		  } else {
		    rains.pause(); //else, if frozen...
		    thunder.pause(); //pause everything
		  }
		  
		}
		
		// Button.pde
		var Button = class Button {
		
		  //Sets up variables
		  p;
		  w;
		  h;
		  t;
		
		  constructor(text, tempX, tempY, tempW, tempH) {
		    this.p = new PVector(tempX, tempY);
		    this.w = tempW;
		    this.h = tempH;
		    this.t = text;
		  }
		
		  //Display function
		  display() {
		
		    noStroke();
		
		    if (mouseOver(this.p.x, this.p.y, this.w, this.h)) { //If mouse is over button...
		      fill("#FFFFFF", 10);
		      if (click()) { //If mouse is over button AND clicked...
		        fill("#FFFFFF", 30);
		      }
		    } else { //If mouse is not over button...
		      fill("#FFFFFF", 0);
		    }
		
		    rect(this.p.x, this.p.y, this.w, this.h, 10); //Draw button
		    fill("#FFFFFF");
		    text(this.t, this.p.x, this.p.y); //Draw text
		  }
		
		  //Mouseover function
		  mouseOver(x, y, w, h) {
		    if (mouseX >= (x-this.w/2) && mouseX <= (x+this.w/2) && mouseY >= (y-this.h/2) && mouseY <= (y+this.h/2)) { //if mouse is over button...
		      return true;
		    } else {
		      return false;
		    }
		  }
		
		  //Clicked function
		  click() {
		    if (mouseOver(this.p.x, this.p.y, this.w, this.h) && mouseIsPressed) { //if mouse is over button & mouse is pressed...
		      return true;
		    } else {
		      return false;
		    }
		  }
		}
		
		// Dog.pde
		var Dog = class Dog {
		
		  //Variables
		  p;
		  v;
		  angle;
		  speed;
		  accel;
		  
		  constructor() {
		    this.p = new PVector(random(35, width-35), height/64*55);
		    this.v = new PVector(1, 0);
		    this.angle = -15; //Dog's starting angle
		    this.speed = 0;
		    this.accel = 0.1;
		  }
		  
		  //funky rotation display function
		  display() {
		    tint(255); //display the dog at full brightness
		    pushMatrix(); //push Neo
		    translate(this.p.x, this.p.y); //google translate that image, quick
		    
		    if (!frozen) { //if time is not frozen...
		      rotate(radians(this.angle)); //rotate that sucker!
		    }
		    
		    image(dog, 0, 0, 70, 70); //display the dog
		    popMatrix(); //pop Neo
		  }
		  
		  //move function
		  move() {
		    if (!frozen) {//if time is not frozen, move that sucker!
		      this.p = this.p.add(this.v);
		      this.angle += this.speed; //next level rotation code
		      this.speed += this.accel;
		    }
		  }
		  
		  //update function
		  update() {
		    if (this.p.x >= (width-35)) { //if the dog hits the wall, reverse speed
		      this.v = this.v.set(-1, 0);
		    } else if (this.p.x <= 35) { //same as before
		      this.v = this.v.set(1, 0);
		    }
		
		    if (this.speed >= 2) { //if the dog is rotating too fast, reverse acceleration
		      this.accel = -0.1;
		    } else if (this.speed <= -2) { //same as before
		      this.accel = 0.1;
		    }
		  }
		}
		
		// drawGame.pde
		function drawGame() {
		  
		  tint(100); //tints the background images to make them darker
		  
		  switch(backState) { //switch for image state
		    case 0: image(back01, width/2, height/2); break;
		    case 1: image(back02, width/2, height/2); break;
		    case 2: image(back03, width/2, height/2); break;
		    case 3: image(back04, width/2, height/2); break;
		    case 4: image(back05, width/2, height/2); break;
		    default: image(back01, width/2, height/2); break;
		  }
		  
		  //Puppy functions
		  puppersnup.display();
		  puppersnup.move();
		  puppersnup.update();
		  
		  //Umbrella functions
		  red.display();
		  red.update();
		
		  //Freeze button
		  if (freeze.click()) { //if button is clicked...
		    if (frozen) { //if time is already frozen...
		      frozen = false; //unfreeze
		    } else if (!frozen) { //if time is not frozen...
		      frozen = true; //freeze
		    }
		    mouseIsPressed = false;
		  }
		  
		  //Rainbow button
		  if (rainbow.click()) { //if button is clicked...
		    if (colours) { //if rainbow is already random...
		      colours = false; //disable rainbow
		    } else if (!colours) { //if rainbow is not active...
		      colours = true; //enable it
		    }
		    mouseIsPressed = false;
		  }
		  
		  //Background image button
		  if (backdrop.click()) { //If button is clicked...
		    if (backState >= 5) { //if the background image state has reached the end...
		      backState = 0; //set it back to the beginning
		    }
		    backState++; //move the background image state forward
		    mouseIsPressed = false;
		  }
		  
		  //ArrayList "for" loop for the rain array
		  for (const r of rain) {
		    r.display(); //display rain
		
		    if (!frozen) { //if time is not frozen...
		      r.move(); //rain moves
		    }
		    
		    r.collision(); //collision check with ground
		  }
		  
		  //Regular "for" loop for the rain array
		  for (var i=0; i < rain.size(); i++) {
		    var r = rain.get(i);
		
		    if (r.finished()) { //if rain's life span is < 0
		      rain.remove(i); //remove it from the ArrayList
		    }
		  }
		  
		  //Regular "for" loop to spawn new rain objects
		  for (var i=0; i < 5; i++) {
		    if (!frozen) { //if time is not frozen...
		      rain.add(new Rain()); //add rain!
		    }
		  }
		
		  if (mouseX >= (red.getX() - 45) && mouseX <= (red.getX() + 45) && mouseY >= (red.getY() - 60) && mouseY <= (red.getY() + 30)) { //If mouse is over umbrella...
		    cursor(HAND); //show hand cursor
		    if (mouseIsPressed && !frozen) { //if mouse is clicked and time is not frozen
		      red.grabbed = true; //the umbrella is being "held"
		    } else { //otherwise, let go of the umbrella
		      red.grabbed = false;
		    }
		  } else { //if the mouse is not over the umbrella
		    cursor(0); //return to regular cursor
		    red.grabbed = false;
		  }
		  
		  //fill and draw for the black rectangle at the bottom of the screen
		  fill("#000000",180);
		  rect(width/2, height, width, height/4);
		  
		  //display the 3 main buttons
		  freeze.display();
		  rainbow.display();
		  backdrop.display();
		  
		  //random thunder code
		  if (random(0, 500) > 498 && !frozen) {
		    
		    fill(255); //big, white flash on screen
		    rect(width/2, height/2, width, height);
		    
		    if (!thunder.isPlaying()) { //if thunder sound is not playing
		      thunder.cue(0); //reset it
		    }
		    thunder.play(); //and play the sound
		  }
		  
		  //small, short black fade-in @ beginning of drawGame
		  fill("#000000", opacity);
		  rect(width/2, height/2, width, height);
		  opacity -= 1;
		}
		
		// drawIntro.pde
		function drawIntro() {
		
		  var intro = ""; //the text that is displayed
		
		  fill("#000000", 20); //Black background. Opacity gives it a "fading" effect
		  rect(width/2, height/2, width, height);
		
		  fill("#FFFFFF", 10); //Short little tooltip @ the bottom in case anyone needs it
		  text("Click to Continue", width/2, height/32*31);
		
		  fill("#FFFFFF", 100); //For the main text!
		
		  if (textState == 0) { //textState string thing begins here.
		    intro = "Hello!";
		  } else if (textState == 1) {
		    intro = "Welcome to Vincent Nguyen's\nAssignment 05: Animated Objects";
		  } else if (textState == 2) {
		    intro = "Here, you will play the role of a citizen\ntrapped in a tragic thunderstorm\nwith your faithful companion";
		  } else if (textState == 3) {
		    intro = "To hold the umbrella, hover your mouse over\nand use the left mouse button to grab it";
		  } else if (textState == 4) {
		    intro = "Your goal...\nis to protect your friend!";
		  } else if (textState == 5) {
		    intro = "Best of luck!\n-Vincent";
		  } else if (textState == 6) {
		    state = 1;
		  } //textState string thing ends here.
		
		  text(intro, width/2, height/2); //display text
		
		  if (mouseIsPressed) { //Each time you click, progress the textState...
		    textState++;
		    mouseIsPressed = false;
		  }
		}
		
		// Rain.pde
		var Rain = class Rain {
		
		  //Variables
		  p;
		  v;
		  a;
		  prev; //prev is a variable to store the PVector when time freezes
		  w;
		  h;
		  life; //life is used to determine the longevity of a single rain object
		  c;
		  splashed; //used later on for splashing rain
		
		  constructor() {
		    this.p = new PVector(random(0, width), -30);
		    this.prev = new PVector(0, 0);
		    this.v = new PVector(0, 0);
		    this.a = new PVector(0, 0.1);
		    this.w = random(2, 4);
		    this.h = random(20, 40);
		    this.life = 255;
		    
		    if (!colours) { //Decides the colour of the rain based on whether rainbow mode is on or not
		      this.c = color(random(95, 121), random(127, 148), random(155, 175)); //regular blues
		    } else {
		      this.c = color(random(100,200), random(100,200), random(100,200)); //random colours
		    }
		  }
		  
		  //Display function
		  display() {
		    fill(this.c,this.life); //colour
		    if (!this.splashed) { //if the rain has not yet splashed...
		      rect(this.p.x, this.p.y, this.w, this.h, 2); //rectangle
		    } else { //if the rain has splashed...
		      ellipse(this.p.x, this.p.y, this.w, this.w); //circle
		    }
		  }
		  
		  //Move function
		  move() {
		    this.p = this.p.add(this.v); //makes the rain fall according to gravity
		    this.v = this.v.add(this.a);
		  }
		  
		  //Boolean function to kill the rain after a certain amount of time
		  finished() {
		    if (!frozen) {
		      this.life -= 1.0;
		    }
		
		    if (this.life < 0) { 
		      return true;
		    } else { 
		      return false;
		    }
		  }
		  
		  //Collision function with the ground
		  collision() {
		
		    if ( this.p.y >= height/8*7 && !this.splashed) { //if the rain has hit the ground and is a rectangle
		
		      this.splashed = true; //make it splash
		      this.p.y = this.p.y - random(10, 100); //move it back up
		      
		    } else if ( this.p.y >= height/8*7 && this.splashed) { //if the rain has hit the ground but has already splashed
		
		      this.p.y = this.p.y - random(10, 100); //move it back up
		      
		    } else if ((this.p.x - this.w/2) >= (red.getX() - 45) && //UMBRELLA & RAIN COLLISION DETECTION START!!
		               (this.p.x + this.w/2) <= (red.getX() + 45) &&
		               (this.p.y + this.h/2) >= (red.getY() - 40) &&
		               (this.p.y + this.h/2) <= (red.getY() + 40)) { 
		
		                this.splashed = true; //it splashed on the umbrella
		                
		                this.p.x = red.getX() + random(-60, 60); //moves it to a random x and y position
		                this.p.y = red.getY() - random(40, 100);
		                
		    }
		  }
		}
		
		// Umbrella.pde
		var Umbrella = class Umbrella {
		
		  //Variables
		  p;
		  prev; //prev stores previous position
		  grabbed; //boolean to check if mouse is "holding" the umbrella
		
		  constructor() {
		    this.p = new PVector(width/2,height/2);
		    this.prev = new PVector(mouseX,mouseY);
		    this.grabbed = false;
		  }
		
		  display() {
		    pushMatrix(); //push Neo
		    
		    translate(this.p.x,this.p.y-5);
		    scale(4);
		    
		    fill("#404040"); //Umbrella Handle
		    beginShape();
		      vertex(-1,-2);
		      vertex(1,-2);
		      vertex(1,4);
		      vertex(2,5);
		      vertex(3,4);
		      vertex(4,5);
		      vertex(4,6);
		      vertex(3,7);
		      vertex(1,7);
		      vertex(0,6);
		      vertex(-1,5);
		    endShape();
		    
		    fill("#FF213F"); //Umbrella Top
		    beginShape();
		      vertex(0,-1);
		      vertex(-2.5,-3);
		      vertex(-5,-1);
		      vertex(-7.5,-3);
		      vertex(-10,-1);
		      vertex(-10,-7);
		      vertex(-9,-9);
		      vertex(-6,-12);
		      vertex(-2,-13.5);
		      vertex(2,-13.5);
		      vertex(6,-12);
		      vertex(9,-9);
		      vertex(10,-7);
		      vertex(10,-1);
		      vertex(7.5,-3);
		      vertex(5,-1);
		      vertex(2.5,-3);
		      vertex(0,-1);
		    endShape();
		    
		    popMatrix(); //pop Neo
		  }
		  
		  //Update function
		  update() {
		    if (this.grabbed) { //if the umbrella is being "held"...
		      this.p = this.p.set(mouseX, mouseY);
		    } else if (!this.grabbed) { //if the umbrella is not being "held"...
		      this.prev = this.prev.set(this.p.x, this.p.y); //store the PVector
		      this.p = this.p.set(this.prev.x,this.prev.y);
		    }
		  }
		  
		  //Return functions for fun
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
