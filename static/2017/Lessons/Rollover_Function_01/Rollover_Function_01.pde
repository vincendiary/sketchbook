/*

 Creating a Rollover function
 02/24/2017
 
 */

float x, y, w, h;

void setup() {
  size(400, 400);
  smooth();
  x = y = height/2;
  w = h = height/4;
}

void draw() {
  background(#FF9BAD);
  rectMode(CENTER);
  stroke(#FFFFFF);
  strokeWeight(5);
  
  //Rectangle #1
  if (rollover(x-75, y, w, h) == true) {
    fill(#E071FF);
    if (clicked(x-75, y, w, h) == true) {
      fill(#7C71FF);
    }
  } else {
    fill(#FF4668);
  }
  rect(x-75, y, w, h);
  
  //Rectangle #2
  if (rollover(x+75, y, w, h) == true) {
    fill(#E071FF);
    if (clicked(x+75, y, w, h) == true) {
      fill(#7C71FF);
    }
  } else {
    fill(#FF4668);
  }
  rect(x+75, y, w, h);
}

boolean rollover(float x, float y, float w, float h) {
  boolean hit;
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2)) {
    hit = true;
  } else {
    hit = false;
  }
  return hit;
}

boolean clicked(float x, float y, float w, float h) {
  boolean click;
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2) &&
    mousePressed == true) {
    click = true;
  } else {
    click = false;
  }
  return click;
}