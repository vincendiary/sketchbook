class paddle {
  
  float x,y,w,h;
  color c;
  
  paddle() {
    x = xcenter;
    y = height/8*7;
    w = width/6;
    h = height/32;
    c = lightpink;
  }
  
  void display() {
    x = constrain(mouseX, w/2, width - w/2);
    rectMode(CENTER);
    noStroke();
    fill(c);
    rect(x,y,w,h,5);
  }
  
  
  
  float getX() {
    return x;
  }
  
  float getY() {
    return y;
  }
  
  float getW() {
    return w;
  }
  
  float getH() {
    return h;
  }
  
}