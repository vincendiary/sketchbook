/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 06:
Add a button (or just click and hold the mouse) to make
anti-gravity. In other words, the ball will be attracted
to (and bounce off of) the ceiling. Eventually, the ball
will come to rest on the ceiling, if you let it. (You can
leave the wind in this program.)

*/

float xPos, yPos;
float xSpeed, ySpeed;
float xAccel, yAccel;
String status;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  textSize(36);
  textAlign(CENTER,CENTER);
  xPos = 300;
  yPos = 0;
  xSpeed = 2;
  ySpeed = 2;
  xAccel = 0.05;
  yAccel = 0.1;
  status = "OFF";
}

void draw() {
  background(0);
  fill(#FF0000);
  ellipse(xPos,yPos,30,30);
  fill(#FFFFFF,80);
  text("Anti-Gravity: " + status,300,300);
  
  xPos += xSpeed;
  xSpeed += xAccel;
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
  if (yPos > height - 15) {
    ySpeed *= -0.9;
    yPos = height - 15;
  } else if (yPos < 15) {
    ySpeed *= -0.9;
    yPos = 15;
  }
  
  if (xPos > width - 15) {
    xSpeed *= -0.9;
    xPos = width - 15;
  } else if (xPos < 15) {
    xSpeed *= -0.9;
    xPos = 15;
  }
}

void mousePressed() {
  yAccel *= -1;
  if (status == "ON") {
    status = "OFF";
  } else if (status == "OFF") {
    status = "ON";
  }
}