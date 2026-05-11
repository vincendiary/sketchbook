/*

 Control Structures
 02/22/2017
 
 */

int clicks;
float x1, y1, x2, y2, m1, m2;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);
  clicks = 0;
  background(#A2C6D3);
}

void draw() {
  m1 = ((x1 + x2)/2);
  m2 = ((y1 + y2)/2);
}

void mouseClicked() {
  clicks += 1;

  //Points & Line
  /*
  strokeWeight(5);
   textSize(14);
   textAlign(CENTER);
   fill(#FFFFFF);
   if (clicks == 1) {
   x1 = mouseX;
   y1 = mouseY;
   point(x1, y1);
   text(str(x1) + ", " + str(y1), x1, y1 -20);
   } else if (clicks == 2) {
   x2 = mouseX;
   y2 = mouseY;
   point(x2, y2);
   text(str(x2) + ", " + str(y2), x2, y2 -20);
   } else if (clicks == 3) {
   line(x1, y1, x2, y2);
   text(str(m1) + ", " + str(m2), m1, m2 -20);
   } else if (clicks == 4) {
   background(#A2C6D3);
   clicks = 0;
   }
   */

  //Rectangle
  /*
  stroke(#FFFFFF);
   strokeWeight(5);
   fill(#08FF89);
   rectMode(CENTER);
   if (clicks == 1) {
   x1 = mouseX;
   y1 = mouseY;
   point(x1, y1);
   } else if (clicks == 2) {
   x2 = mouseX;
   y2 = mouseY;
   point(x2, y2);
   } else if (clicks == 3) {
   rect(m1,m2,(x2-x1),(y2-y1));
   } else if (clicks == 4) {
   background(#A2C6D3);
   clicks = 0;
   }
   */
}