// TRON GAME
int GameMode = 0; //Main variable that's used to seperate draw into different sections. It's how I make 'stages' of the game. These include the start screen, game, and end screen
boolean clicked = false; //workaround so that my mousePressed will only detect one click
boolean stars = false; //variable so that the random star creation of my background only activates once. It's another workaround.
boolean score = false; //score is initially invisible at the beginning... because there is no score. On replay, score is enabled!
int score1 = 0; //player juan's score
int score2 = 0; //player two's score
int winner; //variable to show who iz ze winner, hon hon hon! ;D

int xpos1 = 0;
int ypos1 = 245;
String direction1 = "right";

int xpos2 = 595;
int ypos2 = 245;
String direction2 = "left";

void setup() {
  size(600, 500);
  background(0);
  frameRate(30);
}

void draw() {

  // START SCREEN
  if (GameMode == 0) {
    background(0);
    textSize(28);
    textAlign(CENTER, BOTTOM);
    text("Click or press Enter to start", width/2, height/2);
    if (clicked || keyPressed == true && key == ENTER) {
      GameMode = 1;
      background(0);
      clicked = false;
    }
  }

  // ACTUAL GAME
  if (GameMode == 1) {
    if (stars == false) {
      for (int j = 0; j < 300; j++) {
        Cubes();
      }
      stars = true;
    }

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
    rect(xpos1, ypos1, 5, 5);

    // SECOND RECTANGLE
    fill(#009BFF); // blue
    rect(xpos2, ypos2, 5, 5);

    // Movement function
    Move();

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

  // GAME OVER SCREEN
  if (GameMode == 2) {
    //Darkens the screen
    noStroke();
    fill(#000000, 10);
    rect(0, 0, 600, 500);

    //Text
    if (winner == 1) {
      fill(#FF0040);
    } else if (winner == 2) {
      fill(#009BFF);
    }
    textSize(48);
    textAlign(CENTER);
    text("Player " + str(winner) + " has won!", width/2, height/2);

    fill(#FFFFFF);
    textSize(28);
    text("Click or press Enter to restart", width/2, height/2 + 50);

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
      GameMode = 1;
    }
  }
}

void mousePressed() {
  clicked = true;
}

void keyPressed() {

  //player one
  if (key == 'w' && direction1 != "down" || key == 'W' && direction1 != "down") {
    direction1 = "up";
  }
  if (key == 's' && direction1 != "up" || key == 'S' && direction1 != "up") {
    direction1 = "down";
  }
  if (key == 'a' && direction1 != "right" || key == 'A' && direction1 != "right") {
    direction1 = "left";
  }
  if (key == 'd' && direction1 != "left" || key == 'D' && direction1 != "left") {
    direction1 = "right";
  }

  //player two
  if (key == CODED) {
    if (keyCode == UP && direction2 != "down") {
      direction2 = "up";
    }
    if (keyCode == DOWN && direction2 != "up") {
      direction2 = "down";
    }
    if (keyCode == LEFT && direction2 != "right") {
      direction2 = "left";
    }
    if (keyCode == RIGHT && direction2 != "left") {
      direction2 = "right";
    }
  }
}

void Move() {
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

void Cubes() {
  float r;
  r = random(180);
  noStroke();
  fill(random(255), random(255), random(255));
  rotate(r);
  rect(random(10, 600), random(10, 500), random(1, 3), random(1, 3));
  rotate(-r);
}