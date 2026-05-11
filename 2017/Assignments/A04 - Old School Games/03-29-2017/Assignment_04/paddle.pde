// ============================== [ 13. PADDLE OBJECT ] ============================== //

//This one is pretty simple.
//Most of the functionality (ie: hit detection) is shoved onto other objects.

class paddle { //Create a class

  //Set up variables
  PVector p;
  float w, h;
  color c;

  paddle() { //Initialize the variables!
    p = new PVector(xcenter, height/8*7);
    w = width/6;
    h = height/32;
    c = lightpink; //It's a soothing colour
  }

  void display() { //Draws the paddle
    p.x = constrain(mouseX, w/2, width - w/2); //Paddles must be constrained
    rectMode(CENTER);
    noStroke();
    fill(c);
    rect(p.x, p.y, w, h, 5);
  }
  
  //Floats to return values. I don't really need the last two but whatever. It's nice to stay consistent!
  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}

//I really enjoy documentation
//But don't tell anybody
// ('-')>P
//Or I'll use my axe