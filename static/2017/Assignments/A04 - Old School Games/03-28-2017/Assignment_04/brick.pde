class brick {
  
  color c;
  float x,y,w,h;
  boolean alive;
  
  brick(float tempX, float tempY) {
    x = tempX;
    y = tempY;
    w = 50;
    h = 30;
    c = lightpink;
    alive = true;
  }
  
  void display() {
    rectMode(CENTER);
    noStroke();
    strokeWeight(3);
    fill(c);
    rect(x,y,w,h,10);
  }
  
  boolean getStatus() {
    return alive;
  }
  
  void die() {
    alive = false;
    c = darkblue;
  }
  
}