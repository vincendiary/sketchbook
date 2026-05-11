// ============================== [ 07. BUTTON OBJECT ] ============================== //

//Oh old friend, it has been too long! How have you been?

class button {//Create a new class

  //Set up variables
  float x, y, w, h; //Standard issue rect() values
  color i, r, c; //Idle, rollover, clicked
  boolean mouseOn, clicked; //To check whether the mouse is hovering over or clicking the button
  String t; //Text

  button(String text, float tempX, float tempY, float tempW, float tempH, color tempI, color tempR, color tempC) {
    //To be honest, I don't need the colour parameters but it feels more flexible to me so I'm going to keep it.
    
    //Sets the values
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    i = tempI;
    r = tempR;
    c = tempC;
    t = text;
    
    mouseOn = false; //Mouse is not over it
    clicked = false; //It is not being clicked
  }

  void display() { //Function to draw the button
    update(); //Call the update function to check whether the mouse is over or if it has been clicked
    
    //Quick setup stuff
    rectMode(CENTER);
    stroke(pink);
    strokeWeight(5);
    
    //If the mouse is over
    if (mouseOn) {
      fill(r); //rollover colour
      if (clicked) { //If it's clicked
        fill(c); //clicked colour
      }
    } else {
      fill(i); //otherwise, idle colour
    }
    
    //Draw the rect
    rect(x, y, w, h, 20);
    
    //Draw the text over it
    fill(darkblue);
    textFont(body);
    textSize(36);
    textAlign(CENTER,CENTER);
    text(t, x, y);
  }

  void update() { //Function to check whether the mouse is over/button is being clicked
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

  boolean mouseOver(float x, float y, float w, float h) { //Boolean to detect whether the mouse is over the button
    if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {
      return true;
    } else {
      return false;
    }
  }

  boolean click() { //Boolean to detect whether the mouse is being clicked over the button
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