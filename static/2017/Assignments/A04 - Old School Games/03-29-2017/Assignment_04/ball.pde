// ============================== [ 05. BALL OBJECT ] ============================== //

//The first object in name but not the first created. That was the button. Because it was easy.
//I hope I didn't mess anything up!

class ball { //Create a new class

  //Set up variables
  float d, max, rest; //in order of appearance: diameter, max speed, and rest position
  PVector p, v, ps; //in order of appearance: position, velocity, and previous speed

  ball(float tempX, float tempY) { //Parameters for fun
    p = new PVector(tempX, tempY); //Position of the ball will be at the given values
    v = new PVector(0, 0); //Starting velocity is 0
    ps = new PVector(0, 0); //There's no previous speed yet. There's no speed at all actually.
    d = 20; //Diameter 20
    max = 16; //Max speed allowed is 16
  }

  void display() { //Function to fill and draw the ball
    noStroke();
    fill(lightblue); //A nice cool colour
    ellipse(p.x, p.y, d, d); //Draw ball accordingly
  }

  void move() { //Function to move the ball
    if ((p.y-d/2) <= 0) { //If the ball has hit the ceiling...
      v.y *= -1; //Reverse the y velocity
    }
    if ((p.x-d/2) <= 0 || (p.x+d/2) >= width) { //Similarly, If the ball has hit the left or right wall...
      v.x *= -1; //Reverse the x velocity
    }
    
    //Make the position change based on the velocity
    p = p.add(v);
  }
  
  void moveStart() { //Function to give the ball it's first kick
    v.x = 0;
    v.y = -8;
  }

  void pause() { //Function to pause the game and store the ball's speed
  
    if (v.x == 0 && v.y == 0 && breakout.paused) { //If the ball is not moving (ie: paused)
      v.x = ps.x; //Make the ball move again according to its previous velocity
      v.y = ps.y;
      breakout.paused = false; //Game is no longer paused
    } else { //If the ball IS moving when this function is called...
      ps.x = v.x; //Store the velocity values
      ps.y = v.y;
      v.x = 0; //Set the velocity to 0 (stop it from moving)
      v.y = 0;
      breakout.paused = true; //Game is now paused
    }
    
  }

  void rest() { //This function is called at the beginning of each round
  
    //Stop the ball from moving
    v.x = 0;
    v.y = 0;
    
    //Constrain the ball akin to the paddle
    rest = constrain(mouseX, (player.getW()/2), width - (player.getW()/2));;
    
    //Place ball atop paddle
    p.y = width/8*5;
    p.x = rest;
  }
  
  void reboundPaddle() { //Funky function to rebound the ball off of the paddle
  
    //Set up a float that determines the distance between the ball and the center of the paddle
    float bounce = dist(p.x,player.getY(), player.getX(), player.getY());
    
    //Code to determine the rebounding v.x based on if the ball is to the left or to the right side of the paddle
    if (p.x <= player.getX()) {
      v.x = (bounce*0.2) *-1;
    } else {
      v.x = bounce*0.2;
    }
    
    //Set the new v.y based on the max speed and absolute value of v.x
    v.y = (max - abs(v.x))*-1;
  }
  
  void reboundBrick() { //lazy lazy function for rebounding off of bricks
    v.y *= -1;
  }
  
  boolean startPosition() { //Boolean to check whether the ball is in its starting position
    if (p.y == width/8*5 && v.x == 0 && v.y == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean missed() { //Boolean to check whether the ball has fallen off screen
    if (p.y >= height) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean hitPaddle() { //Boolean to check whether the ball has hit the paddle
    if (p.x >= player.getX() - (player.getW()/2) &&
        p.x <= player.getX() + (player.getW()/2) &&
        p.y >= player.getY() - (player.getH()/2) &&
        p.y <= player.getY() + (player.getH()/2)) {
      return true;
    } else {
      return false;
    }
  }
  
  float getX() { //Quick simple float functions that return the ball's x and y position.
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
}