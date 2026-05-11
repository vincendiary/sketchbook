/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 04:
Can you make the ball look like it is bouncing with a
realistic "elasticity"? In other words, we know that
the bouncing ball must lose energy with every bounce,
so can you make it look like its bounce is "decaying"
in time?

*/

float yPos;
float ySpeed;
float yAccel;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  yPos = 0;
  ySpeed = 2;
  yAccel = 0.1;
}

void draw() {
  background(0);
  
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
  if (yPos >= height - 15) {
    ySpeed *= -0.90;
    yPos = height - 15;
  } else if (yPos <= 15) {
    ySpeed *= -0.90;
    yPos = 15;
  }
  
  fill(#FF0000);
  ellipse(300,yPos,30,30);
}