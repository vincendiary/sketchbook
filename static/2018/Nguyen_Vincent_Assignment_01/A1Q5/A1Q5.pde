/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 05:
Now, as the ball is bouncing and gradually losing energy,
add wind. In other words, make it look like there is a
slight wind blowing from the left side of the screen to
the right side. When the ball hits the right wall, it will
bounce back, and it will lose energy. Eventually, it should
settle down in the bottom right corner. HINT: You already
have a ySpeed and a yPosition, but to do this one you will
also want to have an xSpeed and an xPosition.

*/

float xPos, yPos;
float xSpeed, ySpeed;
float xAccel, yAccel;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  xPos = 300;
  yPos = 0;
  xSpeed = 2;
  ySpeed = 2;
  xAccel = 0.01;
  yAccel = 0.1;
}

void draw() {
  background(0);
  fill(#FF0000);
  ellipse(xPos,yPos,30,30);
  fill(#FFFFFF,80);
  
  xPos += xSpeed;
  xSpeed += xAccel;
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
  if (yPos >= height - 15) {
    ySpeed *= -0.90;
    yPos = height - 15;
  } else if (yPos <= 15) {
    ySpeed *= -0.90;
    yPos = 15;
  }
  
  if (xPos >= width - 15) {
    xSpeed *= -0.90;
    xPos = width - 15;
  } else if (xPos <= 15) {
    xSpeed *= -0.90;
    xPos = 15;
  }
}