/*

Visualizing functions with return values
02/21/2017

*/

void setup() {
  size(600,400);
  smooth();
  frameRate(120);
  background(#FFFFFF);
}

void draw() {
  float f = function(mouseX);
  strokeWeight(5);
  point(mouseX,f);
}

float function(float x) {
  return (1/(x-width/2))*500+200;
}