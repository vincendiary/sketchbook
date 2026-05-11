// TRON GAME
int GameMode = 0; //Main variable that's used to seperate draw into different sections. It's how I make 'stages' of the game. These include the start screen, game, and end screen
boolean clicked = false; //workaround so that my mousePressed will only detect one click
boolean stars = false; //variable so that the random star creation of my background only activates once. It's another workaround.
boolean score = false; //score is initially invisible at the beginning... because there is no score. On replay, score is enabled!
int score1 = 0; //player juan's score
int score2 = 0; //player two's score
int winner; //variable to show who iz ze winner, hon hon hon! ;D
color title = #FF0040; //color variable so the title changes colour... because i want it to.

int xpos1 = 0; //var. for left player's x position
int ypos1 = 245; //var. for left player's y position
String direction1 = "right"; //var. for left player's direction

int xpos2 = 595; //var. for right player's x position
int ypos2 = 245; //var. for right player's y position
String direction2 = "left"; //var. for right player's direction

void setup() { //setup jazz
  size(600, 500); //size of window :o omg
  background(0); //black background... this actually isn't needed. I should get rid of it.
  frameRate(30); //game too fast? half the framerate! :D good solution
}

void draw() { //where all the magic happens. Repeating smooth jazz goes here

  // if Gamemode = 0, Welcome to START SCREEN!
  if (GameMode == 0) {
    background(0); //black background... this is needed
    
    title += 3; //make the cool colour change
    textAlign(CENTER, CENTER); //aligns the text to the center because thats how i like it
    
    fill(title); //colour of the title changes! 
    textSize(48); //big text size
    text("ELYSIAN ECHOES", 300, 50); //title :) 
    
    fill(#FFFFFF); //white
    textSize(28); //biggish
    text("Instructions", 300, 130); //yay
    textSize(18); //smaller
    text("The objective is to eliminate your opponent", 300, 170); //thats not nice
    text("You can accomplish this by making them hit your light-trail", 300, 200); //what is a light trail?
    text("     Just make sure,         don't hit theirs...    ", 300, 230); //big space?
    fill(#FF0040); //red
    text("YOU", 300, 230); //oh... that's cool.
    
    fill(#FFFFFF); //white again
    textSize(28); //biggish again
    text("Controls", 300, 270); //just so you know
    fill(#FF0040); //red again
    textSize(18); //smaller again
    text("Player One uses WASD to control the direction of their machine", 300, 310); //player juan!
    fill(#009BFF); //blue again
    text("Player Two uses the arrow keys to do the same", 300, 340); //player two
    fill(#FFFFFF); //white again again
    text("Now, FIGHT! May the best pilot win...", 300, 370); //woohoo lets go
    
    fill(#FFFFFF);
    textSize(28);
    text("Click or press Enter to start", 300, 450); //final instructions

    if (clicked || keyPressed == true && key == ENTER) { // if command to detect click or 'ENTER' keypress
      GameMode = 1; //change gamemode, go on to next stage
      background(0); //black background again, basically refresh
      clicked = false; //to prevent multiple clicks
    }
  }

  // ACTUAL GAME
  if (GameMode == 1) { //the REAL game starts now
  
  
    //this jazz makes the cool background!
    if (stars == false) { //boolean to prevent it from repeating
      for (int j = 0; j < 300; j++) { //we need 300 stars
        Cubes(); //custom function yay! makin' stars
      }
      stars = true; //prevent it from happening again until later
    }
    
    
    //This jazz enables and shows the scoreboard
    if (score == true) { //If score variable is true, SHOW the score! :D
      textSize(28); //good size... in my opinion anyway

      //player one's score :)
      fill(#FF0040); //red
      textAlign(LEFT); //aligned to the left side
      text(str(score1), 20, 40); //shows the player's score, converted to string first

      //player two's score :c
      fill(#009BFF); //blue
      textAlign(RIGHT); //aligned to the right side
      text(str(score2), 580, 40); //shows the player's score, converted to string first
    }


    // FIRST RECTANGLE
    fill(#FF0040); // red
    rect(xpos1, ypos1, 5, 5); //basically starting positions
    // SECOND RECTANGLE
    fill(#009BFF); // blue
    rect(xpos2, ypos2, 5, 5); //same as before
    // Movement function
    Move(); // this makes them move! wanna learn how it works? scroll down.


    // GAME OVER FUNCTION
    if (get(xpos1, ypos1) == color(#FF0040) || get(xpos1, ypos1) == color(#009BFF) || xpos1 < 0 || xpos1 >= 600 || ypos1 < 0 || ypos1 >= 500) { //If player one hits itself or player two's trail, or if player one hits the wall
      GameMode = 2; //end game
      winner = 2; //sets player two as winner
      score2 += 1; //adds to player two's score
    } else if (get(xpos2, ypos2) == color(#FF0040) || get(xpos2, ypos2) == color(#009BFF) || xpos2 < 0 || xpos2 >= 600 || ypos2 < 0 || ypos2 >= 500) { //If player two hits itself or player one's trail, or if player two hits the wall
      GameMode = 2; //end game
      winner = 1; //sets player one as winner
      score1 += 1; //adds to player one's score
    }
  }

  // if GameMode = 2, Welcome to GAME OVER SCREEN!
  if (GameMode == 2) {
    //Darkens the screen... because im edgy like that
    noStroke();
    fill(#000000, 10);
    rect(0, 0, 600, 500); //covers the entire screen, spooky!

    //Text COLOURO
    if (winner == 1) { //picks colour based on winner, hon hon hon ^('-')^
      fill(#FF0040);
    } else if (winner == 2) {
      fill(#009BFF);
    }
    
    //Text STARTO
    textSize(48);
    textAlign(CENTER);
    text("Player " + str(winner) + " has won!", width/2, height/2); //ancounces the winner! hooray

    fill(#FFFFFF);
    textSize(28);
    text("Click or press Enter to restart", width/2, height/2 + 50); //play again? :)

    //CODE TO RESTART THE GAME! YES?
    if (clicked || keyPressed == true && key == ENTER) {
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




void mousePressed() { //heheh cheeky workaround code here
  clicked = true; //juan click only
}



void keyPressed() { //this determines all of the directions + prevents players from doing a 180 degree reversal

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

void Move() { //moves players based on direction... this really isn't that complicated
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

void Cubes() { //random function that creates small tiny, insignificant cubes... like me
  float r;
  r = random(180);
  noStroke();
  fill(random(255), random(255), random(255));
  rotate(r);
  rect(random(10, 600), random(10, 500), random(1, 3), random(1, 3));
  rotate(-r);
}

// and that's it. thank you for reading my story :)
// - Vincent Nguyen