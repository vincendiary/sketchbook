// ============================== [ 06. BRICKS AND LIVES ] ============================== //

//I really like this one.
//Was it because it was short and easy?
//Yes.

class brick { //Create a new class

  //Set up variables
  color c; //Colour of brick
  float x, y, w, h; //Floats for the rect() because I don't really need a PVector
  boolean alive; //IS THE BRICK ALIVE?

  brick(float tempX, float tempY) { //Create the brick according to the positions given
    x = tempX;
    y = tempY;
    w = 50;
    h = 30;
    c = lightpink; //Default manly colour
    alive = true; //They should be alive... they should be.
  }

  void display() { //Draws the bricks
  
    //Quick setup stuff, get out of the way
    rectMode(CENTER);
    noStroke();
    strokeWeight(3);
    
    //Activate rainbow mode onto the blocks if rainbow mode is on and the brick is alive
    if (rainbowOn) {
      if (alive) {
        c = color( int(random(150, 250)), int(random(150, 250)), int(random(150, 250)) );
      }
    } //I'm sorry if it hurts the eyes.
    
    //Draw the brick
    fill(c);
    rect(x, y, w, h, 10);
  }

  boolean getStatus() { //CHECK IF THE BRICK IS ALIVE
    return alive;
  }

  void die() { //Function to kill the brick
    alive = false; //They're not alive anymore
    c = darkblue; //Dead bricks are dark blue bricks
  }
}