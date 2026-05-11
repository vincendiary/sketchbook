/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 01:
Make a red ball (30 x 30) move from the top of the
screen to the bottom, slowly and smoothly, with a
constant speed (call it ySpeed)

*/

float yPos;
float ySpeed;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  yPos = 0;
  ySpeed = 2;
}

void draw() {
  background(0);
  fill(#FF0000);
  ellipse(300,yPos,30,30);
  fill(#FFFFFF,80);
  
  yPos += ySpeed; //Adds speed to position
  
}