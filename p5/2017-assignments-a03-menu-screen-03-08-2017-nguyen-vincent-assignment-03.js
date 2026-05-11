window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a03-menu-screen-03-08-2017-nguyen-vincent-assignment-03"] = function (p) {
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
		// Nguyen_Vincent_Assignment_03.pde
		/*// --------------------[ Info ]-------------------- //
		
		Assignment 03: Menu Screens
		03/08/2017
		Vincent Nguyen
		
		// --------------------[ Blurb ]-------------------- //
		
		Original Menu: http://vignette4.wikia.nocookie.net/undertale/images/c/cd/Menu0.png/revision/latest?cb=20160103054545
		
		This is my submission for assignment 03: Menu Screens. The game I chose to recreate is Undertale. Compared to the original
		menu screen, I've added clean borders to the buttons and a wider colour palette for the buttons. In my opinion, I like this
		one better. It feels cozier than the original and somewhat nostalgic, like a homage to old RPGs like Final Fantasy.
		
		// --------------------[ Table of Contents ]-------------------- //
		
		01. Setting up variables
		02. Void setup() and giving the variables values
		03. Void draw() and the two main functions
		04. Functions that draw the elements for each menu
		05. Other functions
		
		// --------------------[ Credits ]-------------------- //
		
		All images, animations, music, and sound effects are from the game Undertale by Toby Fox
		
		*/
		
		
		
		// ==============================[ 01. Setting up variables ]============================== //
		
		
		
		//Imports the Minim audio library
		// import ddf.minim.*; // Processing import omitted
		
		//Sets up the minim audioplayers
		var minim;
		var music, dun, fightSound, hit, battle, ping;
		
		//Sets up most of the variables
		var font; //Undertale font
		var titleImage, toriel, papyrus, sans, undyne, alphys, lines, stats, slash; //Images including title, characters, backgrounds, etc.
		var images; //Image array for the fight animation
		var menu, dialogue; //Strings used for what the current menu displayed should be and attack dialogue during the fight.
		var prevTime, currTime, frame; //prevTime and currTime are both used as timers. They are integers so they aren't super accurate but whatever ¯\_('u')_/¯. frame is used for the animation.
		var white, orange, yellow, grey; //Universal colours I use a lot and decided not to retype over and over again.
		
		
		
		// ==============================[ 02. Void setup() and giving the variables values ]============================== //
		
		
		
		function setup() {
		  createCanvas(800, 600); //Sets the window size at 800x600. The original game was set at 640x480.
		  load(); //Runs the load function, which is right below.
		}
		
		function load() {
		
		  //Fonts
		  font = loadFont(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/DeterminationSans-36.vlw")); //Undertale font
		
		  //Images
		  titleImage = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/title.png")); //Undertale title in the intro
		  lines = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/lines.png")); //Fight scene background
		  stats = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/stats.png")); //Health bar & level for fight scene
		  slash = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/attack.png")); //Slash image for attacking in the fight scene
		  
		  toriel = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/toriel.png")); //All characters below
		  papyrus = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/papyrus.png"));
		  sans = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/sans.png"));
		  undyne = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/undyne.png"));
		  alphys = loadImage(sketchbookAsset("2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/alphys.png"));
		
		
		  //Loads the images for the animation array
		  images = new Array(33); //This animation has 33 frames and thus needs 33 images in the array
		
		  for (var i = 0; i < 33; i++) { //for loop for each frame
		    var filename = "Undyne_" + nf(i, 4) + ".png"; //Sets the string to images with the name "Undyne_xxxx.png" where xxxx is the array number.
		    images[i] = loadImage(filename); //Loads each image
		  }
		
		  //Colours
		  white = "#FFFFFF"; //So I don't have...
		  orange = "#FF9900"; //To copy and paste...
		  yellow = "#FFF303"; //Over and over again.
		  grey = "#9B9B9B"; //You understand, right?
		
		  //Audio
		  minim = new Minim(this); //Minim setup
		  
		  music = minim.loadFile("menu.mp3"); //Main menu music
		  dun = minim.loadFile("dun.mp3"); //Intro "Dun" noise
		  fightSound = minim.loadFile("spear.mp3"); //Fight music
		  hit = minim.loadFile("attack.mp3"); //When Undyne is hit in the fight scene
		  battle = minim.loadFile("battle.mp3"); //When you engage in a fight (fight button)
		  ping = minim.loadFile("ping.mp3"); //Button select sound
		
		  //Setting the gain for the audio
		  music.setGain(-14);
		  dun.setGain(0);
		  fightSound.setGain(-14);
		  hit.setGain(4);
		  battle.setGain(0);
		  ping.setGain(-4); //All of this is to ensure our ears aren't destroyed when you run the program
		
		  //Strings
		  menu = "Intro"; //First menu displayed when the program is ran will be "Intro".
		  dialogue = "* Undyne bounces impatiently."; //Dialogue for the fight scene.
		
		  //Integers
		  prevTime = second(); //To begin timing for the intro sequence
		
		  //for Mr. Brichta
		  rectMode(CENTER);
		  textAlign(CENTER, CENTER);
		}
		
		
		
		// ==============================[ 03. Void draw() and the two main functions ]============================== //
		
		
		
		// --------------------[ Just void draw() ]-------------------- //
		
		function draw() {
		  audio(); //All of the background audio is played here (ie: music)
		  engine(); //The function who will defeat them all
		}
		
		// --------------------[ Plays the music for the intro, main menu, and fight sequence ]-------------------- //
		
		function audio() {
		
		  if (menu == "Intro") { //If the menu is currently the intro sequence...
		
		    music.pause(); //Pause the main theme in case it's playing (from the reset button)
		    dun.play(); //Play the "DUN" noise for dramatic effect
		    
		  } else if (menu == "Main" || menu == "Info") { //Otherwise, if it's the main menu or info menu...
		
		    dun.pause(); //Pause the "DUN" in case the player is a quickshot and sped through the intro
		    fightSound.pause(); //Pause the fight music in case they've just returned from an intense battle
		
		    if (music.isPlaying() != true) { //Check if the music is playing or not (to prevent infinite loops)
		      music.pause(); //If it's not playing, pause...
		      music.rewind(); //rewind...
		    }
		
		    music.play(); //and finally, play the main menu music!
		    
		  } else if (menu == "Fight") { //Otherwise, if it's the fight menu...
		
		    music.pause(); //Pause the main menu music
		
		    if (fightSound.isPlaying() != true) { //Same check as before. We don't want infinite rewinds.
		      fightSound.pause(); //Pause if it's not playing and...
		      fightSound.rewind(); //Rewind!
		    }
		
		    fightSound.play(); //Play the intense fight music!
		  }
		}
		
		// --------------------[ Determines which menu will be displayed based on the variable ]-------------------- //
		
		function engine() {
		
		  background("#000000"); //This is a thing. It's the colour 'jet black' by the way.
		
		  if (menu == "Intro") { //If the menu displayed is the intro...
		
		    title(); //Display that beautiful title!
		    
		  } else if (menu == "Main") { //If the menu displayed is the main menu...
		
		    hub(); //Display the save file, your friends, and the three buttons. I call it the hub.
		    
		  } else if (menu == "Fight") { //If the menu displayed is the fight menu...
		
		    fight(); //Display the fight elements
		    
		  } else if (menu == "Info") { //If the menu displayed is the info box...
		
		    info(); //Display my little blurb with a back button
		    
		  } else if (menu == "Reset") { //If they decide to reset...
		
		    reset(); //Give them what they want.
		  }
		}
		
		
		
		// ==============================[ 04. Functions that draw the elements for each menu ]============================== //
		
		
		
		
		// --------------------[ Title (for Intro) ]-------------------- //
		
		function title() {
		
		  //"UNDERTALE" image
		  imageMode(CENTER);
		  image(titleImage,width/2, height/2, width/3*2, height/5);
		  
		  //Code for the text/timer
		  currTime = second(); //Uses the computer's clock to match seconds
		
		  if ((currTime - prevTime) >= 3) { //If the current time is three seconds or longer (compared to when you started the program/reset), display the text
		
		    noStroke(); //Filler things, no time to explain.
		    fill(grey); 
		    textFont(font);
		    textSize(28);
		    text("Click anywhere to start", width/2, height/10*9); //A beautiful grey text box telling you that you may proceed.
		
		    if (mouseIsPressed) { //If the mouse is pressed while the text is on the screen
		      menu = "Main"; //Move to the main menu!
		      mouseIsPressed = false; //and prevent glitchly loop things
		    }
		  }
		}
		
		// --------------------[ Hub (for Main menu) ]-------------------- //
		
		function hub() {
		
		  //Your friends! Most of them...
		  image(undyne, (width/16*2.75), (height/2-15), 50, 125);
		  image(alphys, (width/16*3.75), (height/2+5), 50, 80);
		  image(toriel, width/2, height/2, 360, 180);
		  image(papyrus, (width/16*12.25), (height/2-15), 75, 125);
		  image(sans, (width/16*13.5), height/2, 60, 90);
		  
		  //I needed to put my name somewhere :)
		  noStroke();
		  fill(grey);
		  textFont(font);
		  textSize(28);
		  text("Demo by Vincent Nguyen 2017", width/2, height/10*9.25); 
		  
		  //A-ha! the infamous three buttons!
		  buttonRect("Fight", width/5, height/5*4, width/4, height/8, white, orange, yellow); //Fight button
		  buttonRect("Info", width/2, height/5*4, width/4, height/8, white, orange, yellow); //Info button
		  buttonRect("Reset", width/5*4, height/5*4, width/4, height/8, white, orange, yellow); //Reset button
		  //To learn more about this fantastic trio, head down further to find my button code.
		
		  //Save file info. It's static for now.
		  infoBox("Frisk    LV 1    0:00\nRuins - Leaf Pile    ", width/2, height/6, width/8*7, height/5);
		}
		
		// --------------------[ Fight ]-------------------- //
		
		function fight() {
		  
		  buttonEllipse("FIGHT", width/2, height/8*7.2, width/6, height/6, orange, yellow, yellow); //is that a button ELLIPSE? Whoa! New function is new! Code is further below.
		  buttonRect("Main", width/5*4, height/8*7.2, width/4, height/8, orange, yellow, yellow); //Regular ol' button rect
		  
		  //Some images. The background grid and the Lvl/HP stats
		  image(lines, width/2, height/4*0.9, width*0.98, height/2*0.88);
		  image(stats, width/2, height/8*6.25, width/3, height/32);
		
		  gif(); //The best thing here. The function that plays the animation of Undyne.
		
		  infoBox(dialogue, width/2, height/5*3, width/8*7, height/4*1.15); //The dynamic dialogue box
		  
		  currTime = second(); //More timer stuff. Records the current time in seconds based on the computer's clock
		  
		  if ((currTime - prevTime) <= 1) { //If the time between the button press and the current time is less than or equal to 1 second...
		  
		    dialogue = "* You hit Undyne!"; //Change the dynamic dialogue box
		    image(slash, width/2*1.1, height/4, 400, 400); //and Display the slash image
		    
		  } else {
		    
		    dialogue = "* Undyne bounces impatiently."; //Otherwise, just revert back to the regular flavour text
		  }
		}
		
		// --------------------[ Info ]-------------------- //
		
		function info() {
		  
		  //Really long and tedious info box which is just a copy paste from the header.
		  infoBox("Hello!\nThis is my submission for assignment\n03: Menu Screens! The game I chose to\nrecreate is Undertale. Compared to the\noriginal menu screen, I've added clean\nborders to the buttons and a wider\ncolour palette for the buttons. IMO,\nI like this one better. It feels cozier\nthan the original and somewhat nostalgic.\n\nThanks for reading! -Vincent", width/2, height/2.4, width/12*11, height/1.4);
		  
		  buttonRect("Main", width/2, height/16*14.5, width/4, height/8, white, orange, yellow); //Back button
		}
		
		// --------------------[ Reset ]-------------------- //
		
		function reset() {
		
		  dun.pause(); //Rewind that DUN noise for the audience
		  dun.rewind(); //woohoo
		  
		  prevTime = second(); //Start the timer again
		  menu = "Intro"; //Bring that menu back to the intro please
		}
		
		
		
		// ==============================[ 05. Other functions ]============================== //
		
		
		
		// --------------------[ Animation ]-------------------- //
		
		function gif() {
		  frame = (frame+1) % 33; //Goes through each frame until it reaches 33 and loops
		  image(images[frame], width/2*0.95, height/4); //Displays the gif!
		}
		
		// --------------------[ Text Box ]-------------------- //
		
		function infoBox(t, x, y, w, h) {
		
		  //Rectangle
		  stroke(white);
		  strokeWeight(5);
		  fill("#000000");
		  rectMode(CENTER);
		  rect(x, y, w, h); //Creates a rectangle with a clean border at the designated values.
		
		  //Text
		  noStroke();
		  fill(white);
		  textFont(font);
		  textSize(32);
		  text(t, x, y); //Creates text with the designated string and x-y values.
		}
		
		// --------------------[ Rectangular button ]-------------------- //
		
		function buttonRect(t, x, y, w, h, idle, rollover, clicked) {
		
		  var current; //Variable for the current colour of the button
		
		  if (rolloverRect(x, y, w, h) == true) { //If the mouse rolls over the designated values...
		
		    current = rollover; //The colour becomes the given rollover colour
		
		    if (clickedRect(x, y, w, h) == true) { //If the mouse also clicks...
		    
		      //Lazy code
		      if (t != "Fight") { //If the button is not "Fight"...
		      
		        ping.pause();
		        ping.rewind();
		        ping.play(); //Pause, rewind, and play the ping noise.
		        
		      } else { //Otherwise, play the battle engage noise (for "Fight")
		      
		        battle.pause();
		        battle.rewind();
		        battle.play(); //Pause, rewind, and play the battle noise.
		        
		      }
		
		      current = clicked; //The colour becomes the given clicked colour
		      menu = t; //The menu changes to the value of the string
		    }
		    
		  } else { //If the mouse is not over the button...
		
		    current = idle; //The colour becomes the given idle colour
		  }
		
		  //Finally, draw the button with the final values.
		
		  //Rectangle
		  stroke(current);
		  strokeWeight(5);
		  fill("#000000");
		  rectMode(CENTER);
		  rect(x, y, w, h); //Creates a rectangle with a clean border at the designated values.
		
		  //Text
		  noStroke();
		  fill(current);
		  textFont(font);
		  textSize(32);
		  text(t, x, y); //Creates text with the designated string and x-y values.
		}
		
		function rolloverRect(x, y, w, h) {
		
		  var hit; //Create a temporary boolean variable
		  
		  if (mouseX >= (x-w/2) &&
		    mouseX <= (x+w/2) &&
		    mouseY >= (y-h/2) &&
		    mouseY <= (y+h/2)) { //If the mouse is indeed over the square area...
		    
		    hit = true; //Set the hit value to true
		    
		  } else {
		    
		    hit = false; //Otherwise, hit value is false
		    
		  }
		  
		  return hit; //Finally, return the hit value.
		}
		
		function clickedRect(x, y, w, h) {
		  
		  var hit; //Create a temporary boolean variable
		  
		  if (mouseX >= (x-w/2) &&
		    mouseX <= (x+w/2) &&
		    mouseY >= (y-h/2) &&
		    mouseY <= (y+h/2) &&
		    mouseIsPressed == true) { //If the mouse is over the given area AND the mouse is pressed...
		      
		    hit = true; //Set the hit value to true
		    
		    mouseIsPressed = false; //Stops the infinite loop
		    
		  } else {
		    
		    hit = false; //Otherwise, hit value is false
		    
		  }
		  
		  return hit; //Finally, return the hit value.
		}
		
		// --------------------[ Elliptic button ]-------------------- //
		
		function buttonEllipse(t, x, y, w, h, idle, rollover, clicked) {
		
		  var current; //Variable for the current colour of the button
		
		  if (rolloverEllipse(x, y, w, h) == true) { //If the mouse rolls over the designated values...
		
		    current = rollover; //The colour becomes the given rollover colour
		
		    if (clickedEllipse(x, y, w, h) == true) { //If the mouse also clicks...
		      
		      if (t == "FIGHT") { //If the button says "FIGHT"...
		        
		        hit.pause(); //play the attack/slash noise
		        hit.rewind();
		        hit.play(); //This is just very lazy code
		        
		        prevTime = second(); //Sets the timer for the attack dialogue and slash image
		        
		      }
		      
		      current = clicked; //The colour becomes the given clicked colour
		      
		    }
		    
		  } else { //If the mouse is not over the button...
		
		    current = idle; //The colour becomes the given idle colour
		  }
		  
		  //Finally, draw the button with the final values
		  
		  //Ellipse
		  stroke(current);
		  strokeWeight(5);
		  fill("#000000");
		  ellipse(x, y, w, h); //Creates an Ellipse with a clean border at the designated values.
		  
		  //Text
		  noStroke();
		  fill(current);
		  textFont(font);
		  textSize(32);
		  text(t, x, y); //Creates text with the designated string and x-y values.
		}
		
		function rolloverEllipse(x, y, w, h) {
		
		  var hit; //Create a temporary boolean variable
		  var d = (w+h)/2; //Temperory float with the average of the width and height (diameter)
		  
		  if (dist(mouseX, mouseY, x, y) <= d/2) { //If the distance between the mouse and the center of the circle is shorter than the radius...
		    
		    hit = true; //Set the hit value to true
		    
		  } else {
		    
		    hit = false; //Otherwise, hit value is false
		    
		  }
		  
		  return hit; //Finally, return the hit value.
		  
		}
		
		function clickedEllipse(x, y, w, h) {
		  
		  var hit; //Create a temporary boolean variable
		  var d = (w+h)/2; //Temperory float with the average of the width and height (diameter)
		  
		  if (dist(mouseX, mouseY, x, y) <= d/2 && mouseIsPressed == true) { //If the distance between the mouse and the center of the circle is shorter than the radius AND the mouse is clicked...
		    
		    hit = true; //Set the hit value to true
		    
		    mouseIsPressed = false; //Prevent the infinite loops
		    
		  } else {
		    
		    hit = false; //Otherwise, hit value is false
		    
		  }
		  
		  return hit; //Finally, return the hit value.
		  
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
