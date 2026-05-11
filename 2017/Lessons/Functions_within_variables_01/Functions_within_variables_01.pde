/*

Creating functions within variables
02/21/2017

*/

float centerX, centerY, d;
float distance(float centerX, float centerY) {
  float a = centerX - mouseX;
  float b = centerY - mouseY;
  float c = sqrt(sq(a) + sq(b));
  return c;
}

void setup() {
  size(400, 400);
  centerX = centerY = d = 200;
}

void draw() {
  background(#000000);
  if (distance(centerX, centerY) < d/2) {
    fill(#FFFFFF);
    ellipse(centerX, centerY, d, d);
  }
}