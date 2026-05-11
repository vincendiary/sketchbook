// ============================== [ 09. GAME OBJECT ] ============================== //

//Everything should be an object
//You get an object, YOU get an object, EVERYONE gets an object!

class game { //Create a new class
  
  //Set up the variables
  int points, lives;
  boolean active, paused;

  game() { //Simple, set the initial values
    points = 0;
    lives = 3; //Is 3 lives going to be enough?
    active = false; //Not active yet
    paused = false; //I'm going to be honest, I don't really understand why this one works
  }

  void build() { //BUILD THOSE BLOCKS aka WALL aka USA 2017 (also handy dandily checks for collision!)
    for (int i=0; i<(numBricks*numRows); i++) {
      bricks[i].display(); //draw them
      collision((i%13)*60+40, (i/13)*40+30, i); //check for collision
    }
  }

  void reset() { //Just recreates new bricks
    for (int i=0; i<(numBricks*numRows); i++) {
      bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
    }
  }

  void points() { //Adds points
    points += int(random(18, 24));
  }

  void collision(float bx, float by, int blockNum) { //Checks if the ball has collided with any brick
  
    //Shoutout to Liam
    
    //Sets up variables
    float x, y;
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

void mousePressed() { //Small function using void mousePressed to start and pause the game
  if (ball.startPosition()) { //If the ball is at the starting position
    ball.moveStart(); //Get the ball moving
    breakout.active = true; //Game is ON
  } else {
    ball.pause(); //Otherwise, it probably means the game is already active, PAUSE THE GAME!
  }
}