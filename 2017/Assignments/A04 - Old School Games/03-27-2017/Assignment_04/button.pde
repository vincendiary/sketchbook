class button {

  float x, y, w, h;
  color i, r, c;
  boolean mouseOn, clicked;

  button(float tempX, float tempY, float tempW, float tempH, color tempI, color tempR, color tempC) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    i = tempI;
    r = tempR;
    c = tempC;
    mouseOn = false;
    clicked = false;
  }
  
  void display() {
    update();
    rectMode(CENTER);
    noStroke();
    
    if (mouseOn) {
      fill(r);
      if (clicked) {
        fill(c);
      }
    } else {
      fill(i);
    }
    
    rect(x,y,w,h);
  }
  
  void update() {
    if (mouseOver(x, y, w, h) == true) {
      mouseOn = true;
      if (mousePressed) {
        clicked = true;
      } else {
        clicked = false;
      }
    } else {
      mouseOn = false;
    }
  }

  boolean mouseOver(float x, float y, float w, float h) {
    if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {
      return true;
    } else {
      return false;
    }
  }
}