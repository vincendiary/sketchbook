/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 02:
Now make it appear to accelerate constantly. Recall
that speed is a change in position over time, and
acceleration is a change in speed over time. (Don't
worry about what happens when the ball falls past the
bottom of the window for now.)

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
  
}