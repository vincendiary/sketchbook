/*

 Assignment 02: Funny Face
 2/14/2017
 Vincent Nguyen
 
 */

float xPosHead, yPosHead, dxHead, dyHead;

float xPosMouth, yPosMouth, dxMouth, dyMouth;

float xPosNose, yPosNose, dxNose, dyNose;

float xPosEyeL, yPosEyeL, dxEyeL, dyEyeL, xPosEyeR, yPosEyeR, dxEyeR, dyEyeR;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);

  //Head
  xPosHead = width/2;
  yPosHead = height/2;
  dxHead = 350;
  dyHead = 275;

  //Mouth
  xPosMouth = width/2;
  yPosMouth = height/2 + 25/2;
  dxMouth = 200;
  dyMouth = 200;

  //Nose
  xPosNose = width/2;
  yPosNose = height/16*5 + height/32;
  dxNose = 100;
  dyNose = 125;

  //Eyes
  xPosEyeL = width/8*3 + width/64;
  yPosEyeL = height/8 + height/32;
  dxEyeL = 100;
  dyEyeL = 100;

  xPosEyeR = width/8*5 - width/64;
  yPosEyeR = height/8 + height/32;
  dxEyeR = 100;
  dyEyeR = 100;
}

void draw() {
  background(#343434);
  drawHead();
  drawMouth();
  drawEyes();
  drawNose();
}

void drawHead() {
  stroke(#000000);
  strokeWeight(5);
  fill(#FF3E3E);
  ellipse(xPosHead, yPosHead, dxHead, dyHead);
}

void drawMouth() {
  noStroke();
  fill(#000000);
  arc(xPosMouth, yPosMouth, dxMouth, dyMouth, radians(0), radians(180));
}

void drawNose() {
  stroke(#000000);
  strokeWeight(5);
  fill(#F5D14D);
  ellipse(xPosNose, yPosNose, dxNose, dyNose);
}

void drawEyes() {
  stroke(#000000);
  strokeWeight(5);
  fill(#FFFFFF);
  ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);
  ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);
}