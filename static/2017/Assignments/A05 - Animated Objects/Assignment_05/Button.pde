class Button { //Button class

  //Sets up variables
  PVector p;
  float w, h;
  String t;

  Button(String text, float tempX, float tempY, float tempW, float tempH) {
    p = new PVector(tempX, tempY);
    w = tempW;
    h = tempH;
    t = text;
  }

  //Display function
  void display() {

    noStroke();

    if (mouseOver(p.x, p.y, w, h)) { //If mouse is over button...
      fill(#FFFFFF, 10);
      if (click()) { //If mouse is over button AND clicked...
        fill(#FFFFFF, 30);
      }
    } else { //If mouse is not over button...
      fill(#FFFFFF, 0);
    }

    rect(p.x, p.y, w, h, 10); //Draw button
    fill(#FFFFFF);
    text(t, p.x, p.y); //Draw text
  }

  //Mouseover function
  boolean mouseOver(float x, float y, float w, float h) {
    if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) { //if mouse is over button...
      return true;
    } else {
      return false;
    }
  }

  //Clicked function
  boolean click() {
    if (mouseOver(p.x, p.y, w, h) && mousePressed) { //if mouse is over button & mouse is pressed...
      return true;
    } else {
      return false;
    }
  }
}