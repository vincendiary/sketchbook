class button {

  float x, y, w, h;
  color i, r, c;
  boolean mouseOn, clicked;
  String t;

  button(String text, float tempX, float tempY, float tempW, float tempH, color tempI, color tempR, color tempC) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    i = tempI;
    r = tempR;
    c = tempC;
    t = text;
    mouseOn = false;
    clicked = false;
  }

  void display() {
    update();
    rectMode(CENTER);
    stroke(pink);
    strokeWeight(5);

    if (mouseOn) {
      fill(r);
      if (clicked) {
        fill(c);
      }
    } else {
      fill(i);
    }

    rect(x, y, w, h, 20);
    fill(darkblue);
    textFont(body);
    textSize(36);
    textAlign(CENTER,CENTER);
    text(t, x, y);
  }

  void update() {
    if (mouseOver(x, y, w, h) == true) {
      mouseOn = true;
      if (click()) {
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

  boolean click() {
    if (mouseOver(x, y, w, h) == true) {
      if (mousePressed) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}