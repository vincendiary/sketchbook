float xpos1 = 100;
float ypos1 = 0;
float bSpeedX = 3;
float bSpeedY = 2;

float xpos2 = 150;
float ypos2 = 430;

void setup() {
  size(400,500);
  background(#35304D);
}

void draw() {
  background(#35304D);
  
  fill(#FFFFFF);
  noStroke();
  ellipse(xpos1,ypos1,20,20);
  
  rect(xpos2,ypos2,100,20);
  
  xpos1 += bSpeedX;
  ypos1 += bSpeedY;
  
  if (xpos1 > width || xpos1 < 0) {
    bSpeedX *= -1;
  } if (ypos1 < 0 || ypos1 < 450 && ypos1 > 430 && xpos1 > xpos2 && xpos1 < xpos2 + 100) {
    bSpeedY *= -1;
  } if (ypos1 > height) {
    textSize(64);
    text("GAME OVER", 0, height/2);
  }
}

void keyPressed() {
  if (keyCode == RIGHT) {
    xpos2 += 10;
  } if (keyCode == LEFT) {
    xpos2 -= 10;
  }
}