/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 03:
Next: Make it bounce.
[HINT: You'll need an if statement]

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
  fill(#FF0000);
  ellipse(300,yPos,30,30);
  fill(#FFFFFF,80);
  
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
  if (yPos >= height - 15) {
    ySpeed *= -1;
    yPos = height - 15;
  } else if (yPos <= 15) {
    ySpeed *= -1;
    yPos = 15;
  }
}