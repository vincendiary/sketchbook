window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a02-funny-face-2-19-2017-nguyen-vincent-assignment-02"] = function (p) {
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
		
		 Assignment 02: Funny Face
		 2/19/2017
		 Vincent Nguyen
		 
		 [Info]
		 For this assignment, I decided to recreate a character we all know and love.
		 The character of Elmo from the ever popular Sesame Street.
		 
		 [Resources]
		 toot.mp3    = https://www.freesound.org/people/smmassuda/sounds/136642/
		 sproing.mp3 = https://www.freesound.org/people/pan14/sounds/334034/
		 whistle.mp3 = https://www.freesound.org/people/InspectorJ/sounds/345687/
		 
		 [Index]
		 01. Setting up the variables & the program
		 02. Assigning values to the variables
		 03. Running each function in void draw
		 04. Creating the functions for void draw
		 
		 */
		
		// -------------------- 01. Setting up variables & the program -------------------- //
		
		//MINIM functionality
		// import ddf.minim.*; //Imports the libraries needed for Minim to function // Processing import omitted
		var minim; //Creates a new minim
		var playerEyes; //Creates an audio player for the eyes...
		var playerNose; //nose...
		var playerMouth; //and mouth.
		
		//int variable to set the opacity for the intro fade-in (because I'm cool like that)
		var opacity;
		
		//boolean variables for state changes for facial features + mouseDown to prevent mouseIsPressed from triggering over and over
		var mouthOpen, eyesOpen, noseClick, mouseDown;
		
		//float variables for the head (x position, y position, d = diameter, etc etc.)
		var xPosHead, yPosHead, dxHead, dyHead;
		
		//float variables for the mouth
		var xPosMouth, yPosMouth, dxMouth, dyMouth;
		
		//float variables for the nose
		var xPosNose, yPosNose, dxNose, dyNose;
		
		//float variables for the eyes (only one diameter var. for the eyes... because they are the same)
		var xPosEyeL, yPosEyeL, dEye, xPosEyeR, yPosEyeR;
		
		//float variables for the pupils
		//Regular ol' xpos and ypos + diameter of pupil along with easing.
		//The rPupil will be used for vector code later on. The easing makes the pupils move smoothly with the mouse.
		var xPosPupilL, xPosPupilR, yPosPupilL, yPosPupilR, rPupil, dPupil, easing;
		var centerL, centerR; //new vector variables so that I can constrain the eyes to a circular area using math in place of a square
		
		function setup() {
		  createCanvas(400, 400); //Sets the window size to 400 x 400
		  smooth(); //Enables anti-aliasing to pleasure my eyes
		  frameRate(120); //We must go higher! Sets the framerate of the program at 120 fps.
		
		  // -------------------- 02. Assigning values to the variables -------------------- //
		
		  /*
		  For reference, width & height = 400
		   400/2 = 200
		   400/4 = 100
		   400/8 = 50
		   400/16 = 25
		   400/32 = 12.5
		   400/64 = 6.25
		   */
		
		  //MINIM functionality cont'd
		  minim = new Minim(this); //allows minim to load files from the folder/directory
		  playerEyes = minim.loadFile("toot.mp3"); //The eyes will toot.mp3
		  playerNose = minim.loadFile("sproing.mp3"); //The nose will sproing.mp3
		  playerMouth = minim.loadFile("whistle.mp3"); //The mouth will whistle.mp3
		
		  //Integers
		  opacity = 255; //for the sick fade-in
		
		  //Booleans
		  mouthOpen = true; //when the program starts, mouth is open...
		  eyesOpen = true; //eyes are open...
		  noseClick = false; //nose is not clicked...
		  mouseDown = false; //and the mouse is not being pressed down.
		
		  //Head
		  xPosHead = width/2; //Surely i don't have to explain this... the value is 200.
		  yPosHead = height/2; //200
		  dxHead = 350; // It's 350. Just so you know.
		  dyHead = 275;
		
		  //Mouth
		  xPosMouth = width/2;
		  yPosMouth = height*17/32; //212.5
		  dxMouth = dyMouth = 200;
		
		  //Nose
		  xPosNose = width/2;
		  yPosNose = height*11/32; //137.5
		  dxNose = 100;
		  dyNose = 125;
		
		  //Eyes
		  xPosEyeL = width*25/64; //156.25
		  yPosEyeL = height*5/32; //62.5
		
		  xPosEyeR = width*39/64; //243.75
		  yPosEyeR = height*5/32; //62.5
		
		  dEye = 100;
		
		  //Pupils
		  rPupil = 50; //Used in the vector equation to create a circular area
		  dPupil = 25; 
		  easing = 0.05; //Easing value used to slow down mouse tracking for the pupils
		  centerL = new PVector(xPosEyeL, yPosEyeL); //Assigns values according to the left and right eyes for the PVectors
		  centerR = new PVector(xPosEyeR, yPosEyeR);
		}
		
		// -------------------- 03. Running each function in void draw -------------------- //
		
		function draw() {
		  background("#343434"); //A nice shade of grey.
		  hitDetection(); //Hit detection code (clicks, rollover, etc.)
		  drawHead(); //Creates Elmo's head
		  drawMouth(); //Creates Elmo's mouth
		  drawEyeR(); //Creates Elmo's right eye
		  drawEyeL(); //Creates Elmo's left eye
		  drawNose(); //Creates Elmo's Nose
		  info(); //Lil text blurb with my name on it
		  intro(); //INTRO FADE IN
		}
		
		
		
		// -------------------- 04. Creating the functions for void draw -------------------- //
		
		
		
		// ---------- Intro() ---------- //
		
		function intro() {
		  /*
		  
		   [Purpose]
		   The purpose of this function is to add a black fade-in at the beginning of the program when it is first ran.
		   This is just here to make me happier.
		   
		   */
		  
		  //Setup
		  rectMode(CENTER); //Sets the rectangle's x and y values as the center of the rectangle
		  var speed = 1; //Speed of the opacity change
		  opacity -= speed; //Subtracts speed from opacity
		  
		  //Rectangle
		  fill("#000000", opacity); //Fill using opacity as a variable for transparency.
		  rect(width/2, height/2, width, height); //Creates the huge black rectangle
		  
		  //Text
		  textSize(128); //Sets the text size at 128
		  textAlign(CENTER); //Sets the text alignment to center
		  fill("#FFFFFF", opacity); //Sets the fill colour to white, also uses the opacity variable
		  text("VN", width/2, height*3/5); //Splash text woohoo
		}
		
		
		
		// ---------- Info() ---------- //
		
		function info() {
		  /*
		  
		   [Purpose]
		   The purpose of this function is to add some text at the bottom of the program with my name on it.
		   
		   */
		  
		  //Setup
		  textSize(24); //Sets the text size at 24
		  textAlign(CENTER); //Sets the text alignment to center
		  
		  //Text
		  fill("#505050"); //Sets the fill colour to gray
		  text("Created by Vincent Nguyen", width/2, height*15/16); //Created by me
		}
		
		
		
		// ---------- hitDetection() ---------- //
		
		function hitDetection() {
		  /*
		  
		   [Purpose]
		   The purpose of this function is to add all of the "hit" detection functionality such as clicks, rollovers, etc.
		   After these "hits" are detected, they will change a facial feature.
		   
		   */
		  
		  // ----- Eyes ----- //
		  
		  //Variables and setup for eye rollover detection
		  var mxL, myL, mxR, myR;
		  mxL = mouseX - xPosEyeL;
		  myL = mouseY - yPosEyeL;
		  mxR = mouseX - xPosEyeR;
		  myR = mouseY - yPosEyeR;
		  var cL = sqrt(mxL*mxL + myL*myL);
		  var cR = sqrt(mxR*mxR + myR*myR);
		  
		  //If statement to determine if the mouse hovers over the eyes
		  if (cL < dEye/2 || cR < dEye/2) { //If the mouse is over the eyes...
		    playerEyes.rewind(); //Rewinds the noise...
		    playerEyes.play(); //Plays the noise...
		    eyesOpen = false; //and closes the eyes.
		  } else { //If not...
		    eyesOpen = true; //Open the eyes
		  }
		  
		  
		  // ----- Nose ------ //
		  
		  //Variables and setup for the nose click detection
		  var mxNose, myNose;
		  mxNose = mouseX - xPosNose;
		  myNose = mouseY - yPosNose;
		  var cN = sqrt(mxNose*mxNose + myNose*myNose);
		  
		  //If statement to determine if the mouse is over the nose AND the mouse is pressed.
		  if (cN < dxNose/2 && mouseIsPressed == true || cN < dyNose/2 && mouseIsPressed == true) { //If true...
		    noseClick = true; //The nose is clicked...
		    playerNose.rewind(); //The noise is rewinded...
		    playerNose.play(); //and played.
		  } else { //If not...
		    noseClick = false; //The nose is not being clicked
		  }
		}
		
		// ----- Mouth ------ //
		
		function mouseClicked() {
		  if (mouseDown == true && mouthOpen == true && mouseX <= xPosMouth+dxMouth/2 && mouseX >= xPosMouth-dxMouth/2 && mouseY <= yPosMouth+dyMouth/2 && mouseY >= yPosMouth) { //long if statement to determine if the mouse is over the mouth
		    mouthOpen = false; //If the mouse is clicked over the mouth and the mouth is open, the mouth is now closed...
		    mouseDown = false; //The mouse is no longer down (to prevent it from occuring more than once) 
		    playerMouth.rewind(); //Rewinds the mouth noise
		    playerMouth.play(); //Plays the noise
		  } else if (mouseDown == true && mouthOpen == false && mouseX <= xPosMouth+dxMouth/2 && mouseX >= xPosMouth-dxMouth/2 && mouseY <= yPosMouth+dyMouth/2 && mouseY >= yPosMouth) {
		    mouthOpen = true; //If the mouse is clicked over the mouth and the mouth is closed, the mouth is now open.
		    mouseDown = false; //The mouse is no longer down (same as before)
		    playerMouth.rewind(); //Rewinds the mouth noise
		    playerMouth.play(); //Plays the noise
		  }
		}
		
		function mousePressed() {
		  mouseDown = true;
		}
		
		
		
		// ---------- drawHead() ---------- //
		
		function drawHead() {
		  /*
		  
		   [Purpose]
		   The purpose of this function is to draw Elmo's head.
		   
		   */
		  stroke("#000000"); //Sets the stroke colour to black
		  strokeWeight(5); //Sets the stroke weight to 5
		  fill("#FF3E3E"); //Sets the fill colour to red
		  ellipse(xPosHead, yPosHead, dxHead, dyHead); //Creates the head using the aforementioned variables
		}
		
		
		
		// ---------- drawMouth() ---------- //
		
		function drawMouth() {
		  /*
		  
		   [Purpose]
		   The purpose of this function is to draw Elmo's mouth along with the functionality to choose between an open and closed mouth.
		   
		   */
		   
		   //Mouth If-statement
		  if (mouthOpen == true) { //If the mouth is supposed to be open...
		    noStroke(); //Removes the outline... because the entire mouth is black anyways
		    fill("#000000"); //Fill colour black
		    arc(xPosMouth, yPosMouth, dxMouth, dyMouth, radians(0), radians(180)); //Create a half circle for the mouth
		  } else { //If the mouth is not supposed to be open...
		    stroke("#000000"); //Black stroke colour
		    strokeWeight(5); //Thick stroke
		    noFill(); //No fill please
		    bezier(xPosMouth-dxMouth/2, yPosMouth, xPosMouth-dxMouth/4, yPosMouth+dyMouth/4, xPosMouth+dxMouth/4, yPosMouth+dyMouth/4, xPosMouth+dxMouth/2, yPosMouth); //Using processing documentation to figure out how to make a nice bezier curve for Elmo's smile :)
		  }
		}
		
		
		
		// ---------- drawNose() ---------- //
		
		function drawNose() {
		  /*
		  
		   [Purpose]
		   The purpose of this function is to draw Elmo's nose based on whether it is being clicked or not.
		   
		   */
		  
		  //Setup
		  stroke("#000000"); //Nose outline colour is black
		  strokeWeight(5); //Nose outline stroke size is set to 5
		  
		  //Colour If-statement
		  if (noseClick == true) { //If the nose is currently being clicked...
		    fill("#FF6CB6"); //Fill colour is set to a nice, warm pink
		  } else { //If the nose is not being clicked...
		    fill("#F5D14D"); //Fill colour is set to a nice, warm yellow
		  }
		  
		  //Draw the nose
		  ellipse(xPosNose, yPosNose, dxNose, dyNose);
		}
		
		
		
		// ---------- drawEyeL() ---------- //
		
		function drawEyeL() {
		  /*
		  
		   [Purpose]
		   The purpose of this function is to draw the left eye along with the left pupil.
		   
		   */
		  
		  //Eye If-statement
		  if (eyesOpen == false) { //If the eyes are not supposed to open... (ie: closed)
		    
		    stroke("#000000"); //Set the stroke colour to black
		    strokeWeight(5); //Set the stroke size to 5
		    fill("#FF3E3E"); //Set the fill colour to Elmo red
		    ellipse(xPosEyeL, yPosEyeL, dEye, dEye); //Draw a red circle
		    line((xPosEyeL-dEye/2), yPosEyeL, (xPosEyeL+dEye/2), yPosEyeL); //And a black line to make it look like Elmo's eyelids are closed
		    
		  } else { //If the eyes are not supposed to be closed... (ie: open)
		
		    stroke("#000000"); //Set the stroke colour to black
		    strokeWeight(5); //Set the stroke size to 5
		    fill("#FFFFFF"); //Set the fill colour to white
		    ellipse(xPosEyeL, yPosEyeL, dEye, dEye); //Draw a white circle
		    
		    //Vector math to create a circular area within the eye to constrain the pupils
		    var mouseL = new PVector(mouseX, mouseY);
		    if (dist(mouseL.x, mouseL.y, centerL.x, centerL.y) > rPupil/2) {
		      mouseL.sub(centerL);
		      mouseL.normalize();
		      mouseL.mult(rPupil/2);
		      mouseL.add(centerL);
		    }
		    
		    xPosPupilL += (mouseL.x - xPosPupilL) * easing; //Creates the easing effect for the xposition of the pupil
		    yPosPupilL += (mouseL.y - yPosPupilL) * easing; //Creates the easing effect for the yposition
		    
		    //Draws the left pupil using the variables
		    noStroke();
		    fill("#000000");
		    ellipse(xPosPupilL, yPosPupilL, dPupil, dPupil);
		  }
		}
		
		
		
		// ---------- drawEyeR() ---------- //
		
		function drawEyeR() {
		  /*
		  
		   [Purpose]
		   The purpose of this function is to draw the right eye along with the right pupil.
		   Please note, this section is a replica of the left eye section.
		   No, really.
		   
		   */
		  
		  //Eye If-statement
		  if (eyesOpen == false) { //If the eyes are not supposed to open... (ie: closed)
		
		    stroke("#000000"); //Set the stroke colour to black
		    strokeWeight(5); //Set the stroke size to 5
		    fill("#FF3E3E"); //Set the fill colour to Elmo red
		    ellipse(xPosEyeR, yPosEyeR, dEye, dEye); //Draw a red circle
		    line((xPosEyeR-dEye/2), yPosEyeR, (xPosEyeR+dEye/2), yPosEyeR); //And a black line to make it look like Elmo's eyelids are closed
		    
		  } else { //If the eyes are not supposed to be closed... (ie: open)
		
		    stroke("#000000"); //Set the stroke colour to black
		    strokeWeight(5); //Set the stroke size to 5
		    fill("#FFFFFF"); //Set the fill colour to white
		    ellipse(xPosEyeR, yPosEyeR, dEye, dEye); //Draw a white circle
		    
		    //Vector math to create a circular area within the eye to constrain the pupils
		    var mouseR = new PVector(mouseX, mouseY);
		    if (dist(mouseR.x, mouseR.y, centerR.x, centerR.y) > rPupil/2) {
		      mouseR.sub(centerR);
		      mouseR.normalize();
		      mouseR.mult(rPupil/2);
		      mouseR.add(centerR);
		    }
		    
		    xPosPupilR += (mouseR.x - xPosPupilR) * easing; //Creates the easing effect for the xposition
		    yPosPupilR += (mouseR.y - yPosPupilR) * easing; //Creates the easing effect for the yposition
		    
		    //Draws the left pupil using the variables
		    noStroke();
		    fill("#000000");
		    ellipse(xPosPupilR, yPosPupilR, dPupil, dPupil);
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
