float x;
float y;
float easing = 0.05;

//Easing

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);
  rectMode(CENTER);
}

void draw() {
  background(#303F9F);
  strokeWeight(10);
  stroke(#3F51B5);
  fill(#C5CAE9);

  float targetX = mouseX;
  x += (targetX - x) * easing;
  float targetY = mouseY;
  y += (targetY - y) * easing;
  ellipse(x, y, width/5, height/5);
}