/*

Useful Reference - Using colour for hit detection
03/01/2017

*/

color cm, c1;

void setup() {
  size(600, 400);

  c1 = #FF3434;
}

void draw() {
  cm = get(mouseX, mouseY);
  
  background(#FFFFFF);
  
  noStroke();
  fill(#FF3434);
  triangle(300,150,400,300,200,300);
  
  fill(#B71E1E);
  textAlign(CENTER);
  textSize(36);
  
  if (cm == c1) {
    text("Found me!", width/2, height/2 - 100);
  } else {
    text("Where am I?", width/2, height/2 - 100);
  }
}