void setup() {
  size(400,400);
  background(255);
  frameRate(10);
}

void draw() {
  fill(#FFFFFF,20);
  rect(0,0,400,400);
  rain();
}

void rain() {
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(random(30,370),random(30,370),random(10,30),random(10,30));
  // adjusted the x and y so that the largest circle(30) will never leave the screen
}