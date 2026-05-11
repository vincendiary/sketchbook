window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2016-summative-ics2o-nguyen-vincent-summative-02"] = function (p) {
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
		// ICS2O_Nguyen_Vincent_Summative_02.pde
		// TRON GAME
		var GameMode = 0; //Main variable that's used to seperate draw into different sections. It's how I make 'stages' of the game. These include the start screen, game, and end screen
		var clicked = false; //workaround so that my mouseIsPressed will only detect one click
		var stars = false; //variable so that the random star creation of my background only activates once. It's another workaround.
		var score = false; //score is initially invisible at the beginning... because there is no score. On replay, score is enabled!
		var score1 = 0; //player juan's score
		var score2 = 0; //player two's score
		var winner; //variable to show who iz ze winner, hon hon hon! ;D
		var title = "#FF0040"; //color variable so the title changes colour... because i want it to.
		
		var xpos1 = 0; //var. for left player's x position
		var ypos1 = 245; //var. for left player's y position
		var direction1 = "right"; //var. for left player's direction
		
		var xpos2 = 595; //var. for right player's x position
		var ypos2 = 245; //var. for right player's y position
		var direction2 = "left"; //var. for right player's direction
		
		function setup() {
		  createCanvas(600, 500); //size of window :o omg
		  background(0); //black background... this actually isn't needed. I should get rid of it.
		  frameRate(30); //game too fast? half the framerate! :D good solution
		}
		
		function draw() {
		
		  // if Gamemode = 0, Welcome to START SCREEN!
		  if (GameMode == 0) {
		    background(0); //black background... this is needed
		    
		    title += 3; //make the cool colour change
		    textAlign(CENTER, CENTER); //aligns the text to the center because thats how i like it
		    
		    fill(title); //colour of the title changes! 
		    textSize(48); //big text size
		    text("ELYSIAN ECHOES", 300, 50); //title :) 
		    
		    fill("#FFFFFF"); //white
		    textSize(28); //biggish
		    text("Instructions", 300, 130); //yay
		    textSize(18); //smaller
		    text("The objective is to eliminate your opponent", 300, 170); //thats not nice
		    text("You can accomplish this by making them hit your light-trail", 300, 200); //what is a light trail?
		    text("     Just make sure,         don't hit theirs...    ", 300, 230); //big space?
		    fill("#FF0040"); //red
		    text("YOU", 300, 230); //oh... that's cool.
		    
		    fill("#FFFFFF"); //white again
		    textSize(28); //biggish again
		    text("Controls", 300, 270); //just so you know
		    fill("#FF0040"); //red again
		    textSize(18); //smaller again
		    text("Player One uses WASD to control the direction of their machine", 300, 310); //player juan!
		    fill("#009BFF"); //blue again
		    text("Player Two uses the arrow keys to do the same", 300, 340); //player two
		    fill("#FFFFFF"); //white again again
		    text("Now, FIGHT! May the best pilot win...", 300, 370); //woohoo lets go
		    
		    fill("#FFFFFF");
		    textSize(28);
		    text("Click or press Enter to start", 300, 450); //final instructions
		
		    if (clicked || keyIsPressed == true && key == ENTER) { // if command to detect click or 'ENTER' keypress
		      GameMode = 1; //change gamemode, go on to next stage
		      background(0); //black background again, basically refresh
		      clicked = false; //to prevent multiple clicks
		    }
		  }
		
		  // ACTUAL GAME
		  if (GameMode == 1) { //the REAL game starts now
		  
		  
		    //this jazz makes the cool background!
		    if (stars == false) { //boolean to prevent it from repeating
		      for (var j = 0; j < 300; j++) { //we need 300 stars
		        Cubes(); //custom function yay! makin' stars
		      }
		      stars = true; //prevent it from happening again until later
		    }
		    
		    
		    //This jazz enables and shows the scoreboard
		    if (score == true) { //If score variable is true, SHOW the score! :D
		      textSize(28); //good size... in my opinion anyway
		
		      //player one's score :)
		      fill("#FF0040"); //red
		      textAlign(LEFT); //aligned to the left side
		      text(str(score1), 20, 40); //shows the player's score, converted to string first
		
		      //player two's score :c
		      fill("#009BFF"); //blue
		      textAlign(RIGHT); //aligned to the right side
		      text(str(score2), 580, 40); //shows the player's score, converted to string first
		    }
		
		
		    // FIRST RECTANGLE
		    fill("#FF0040"); // red
		    rect(xpos1, ypos1, 5, 5); //basically starting positions
		    // SECOND RECTANGLE
		    fill("#009BFF"); // blue
		    rect(xpos2, ypos2, 5, 5); //same as before
		    // Movement function
		    Move(); // this makes them move! wanna learn how it works? scroll down.
		
		
		    // GAME OVER FUNCTION
		    if (get(xpos1, ypos1) == color("#FF0040") || get(xpos1, ypos1) == color("#009BFF") || xpos1 < 0 || xpos1 >= 600 || ypos1 < 0 || ypos1 >= 500) { //If player one hits itself or player two's trail, or if player one hits the wall
		      GameMode = 2; //end game
		      winner = 2; //sets player two as winner
		      score2 += 1; //adds to player two's score
		    } else if (get(xpos2, ypos2) == color("#FF0040") || get(xpos2, ypos2) == color("#009BFF") || xpos2 < 0 || xpos2 >= 600 || ypos2 < 0 || ypos2 >= 500) { //If player two hits itself or player one's trail, or if player two hits the wall
		      GameMode = 2; //end game
		      winner = 1; //sets player one as winner
		      score1 += 1; //adds to player one's score
		    }
		  }
		
		  // if GameMode = 2, Welcome to GAME OVER SCREEN!
		  if (GameMode == 2) {
		    //Darkens the screen... because im edgy like that
		    noStroke();
		    fill("#000000", 10);
		    rect(0, 0, 600, 500); //covers the entire screen, spooky!
		
		    //Text COLOURO
		    if (winner == 1) { //picks colour based on winner, hon hon hon ^('-')^
		      fill("#FF0040");
		    } else if (winner == 2) {
		      fill("#009BFF");
		    }
		    
		    //Text STARTO
		    textSize(48);
		    textAlign(CENTER);
		    text("Player " + str(winner) + " has won!", width/2, height/2); //ancounces the winner! hooray
		
		    fill("#FFFFFF");
		    textSize(28);
		    text("Click or press Enter to restart", width/2, height/2 + 50); //play again? :)
		
		    //CODE TO RESTART THE GAME! YES?
		    if (clicked || keyIsPressed == true && key == ENTER) {
		      background(0);
		      score = true;
		      clicked = false;
		      stars = false;
		      xpos1 = 0;
		      ypos1 = 245;
		      xpos2 = 595;
		      ypos2 = 245;
		      direction1 = "right";
		      direction2 = "left";
		      GameMode = 1; // i dont want to explain this part. in short, reset every value.
		    }
		  }
		}
		
		
		
		
		function mousePressed() {
		  clicked = true; //juan click only
		}
		
		
		
		function keyPressed() {
		
		  //player one
		  if (key == 'w' && direction1 != "down" || key == 'W' && direction1 != "down") { //if key is pressed, this is direction... repeat 8 times.
		    direction1 = "up";
		  }
		  if (key == 's' && direction1 != "up" || key == 'S' && direction1 != "up") { //repeat
		    direction1 = "down";
		  }
		  if (key == 'a' && direction1 != "right" || key == 'A' && direction1 != "right") { //repeat
		    direction1 = "left";
		  }
		  if (key == 'd' && direction1 != "left" || key == 'D' && direction1 != "left") { //repeat
		    direction1 = "right";
		  }
		  
		
		  //player two
		  if (key == CODED) {
		    if (keyCode == UP && direction2 != "down") { //repeat
		      direction2 = "up";
		    } 
		    if (keyCode == DOWN && direction2 != "up") { //repeat
		      direction2 = "down";
		    }
		    if (keyCode == LEFT && direction2 != "right") { //repeat
		      direction2 = "left";
		    }
		    if (keyCode == RIGHT && direction2 != "left") { //repeat
		      direction2 = "right";
		    }
		  }
		}
		
		function Move() {
		  // player one
		  if (direction1 == "right") {
		    xpos1 += 5;
		  } 
		  if (direction1 == "left") {
		    xpos1 += -5;
		  } 
		  if (direction1 == "up") {
		    ypos1 += -5;
		  } 
		  if (direction1 == "down") {
		    ypos1 += 5;
		  }
		  // player two
		  if (direction2 == "right") {
		    xpos2 += 5;
		  } 
		  if (direction2 == "left") {
		    xpos2 += -5;
		  } 
		  if (direction2 == "up") {
		    ypos2 += -5;
		  } 
		  if (direction2 == "down") {
		    ypos2 += 5;
		  }
		}
		
		function Cubes() {
		  var r;
		  r = random(180);
		  noStroke();
		  fill(random(255), random(255), random(255));
		  rotate(r);
		  rect(random(10, 600), random(10, 500), random(1, 3), random(1, 3));
		  rotate(-r);
		}
		
		// and that's it. thank you for reading my story :)
		// - Vincent Nguyen

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
