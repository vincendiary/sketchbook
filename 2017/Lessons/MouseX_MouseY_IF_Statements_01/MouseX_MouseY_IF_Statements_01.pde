/*

02/09/2017
mouseX, mouseY, if statements

*/

void setup() {
  size(400, 400);
  smooth();
  noStroke();
  frameRate(120);
  rectMode(CENTER);
  background(#EDEDED);
}

void draw() {
  if (mouseX <= width/2 && mouseY <= height/2) {
    background(#FFFFFF);
  } else if (mouseX >= width/2 && mouseY <= height/2) {
    background(#242424);
  } else if (mouseX <= width/2 && mouseY >= height/2) {
    background(#009BE5);
  } else {
    background(#FF3131);
  }
}