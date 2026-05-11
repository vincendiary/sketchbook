int xLocation = 0;
int xSpeed = 5; // The integer was set at 0. The location of the rectangle will not change if the speed is set to 0.

void setup() {
  size(600, 500);
  rectMode(CENTER);
  noStroke();
}

void draw() {
  background(227);
  
  xLocation += xSpeed;
  
  // Bouncing off the walls
  if ((xLocation > width) || (xLocation < 0)) {
    xSpeed = -1*xSpeed;
  }

  fill(255, 255, 255);
  ellipse(width/2, height/2, 100, 75);
  
  fill(255, 0, 0);
  rect(xLocation, 250, 50, 100);

  fill(245, 255, 113);
  ellipse(width/2, height/2, 30, 30);
} 