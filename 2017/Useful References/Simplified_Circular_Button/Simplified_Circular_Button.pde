/*

Useful Reference - Using dist() for hit detection
03/01/2017

*/

float cx, cy, mx, my, d;

void setup() {
  size(600, 400);
  cx = width/2;
  cy = height/2;
  d = 200;
}

void draw() {
  mx = mouseX;
  my = mouseY;
  
  if (dist(mx,my,cx,cy) <= d/2) {
    fill(255);
  } else {
    fill(0);
  }
  noStroke();
  ellipse(cx, cy, d, d);
}