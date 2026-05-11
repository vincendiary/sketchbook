/*

 Assignment 02: Funny Face
 2/14/2017
 Vincent Nguyen
 
 */

// ---------- Setting up variables ---------- //

//int variable to set the opacity for the intro blackscreen
int opacity;

//boolean variables for the changing facial features
boolean MouthOpen, EyesOpen, NoseClick;

//float variables for the head
float xPosHead, yPosHead, dxHead, dyHead;

//float variables for the mouth
float xPosMouth, yPosMouth, dxMouth, dyMouth;

//float variables for the nose
float xPosNose, yPosNose, dxNose, dyNose;

//float variables for the eyes
float xPosEyeL, yPosEyeL, dxEyeL, dyEyeL, xPosEyeR, yPosEyeR, dxEyeR, dyEyeR;

//float variables for the eyes
float xPosPupilL, xPosPupilR, yPosPupilL, yPosPupilR, rPupil, dPupil, easing;
PVector centerL, centerR;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);

  // ---------- Assigning values to the variables ---------- //
  /*
  For reference, width & height = 400
   400/2 = 200
   400/4 = 100
   400/8 = 50
   400/16 = 25
   400/32 = 12.5
   400/64 = 6.25
   */

  //Integers
  opacity = 255;

  //Booleans
  MouthOpen = true;
  EyesOpen = true;
  NoseClick = false;

  //Head
  xPosHead = width/2;
  yPosHead = height/2;
  dxHead = 350;
  dyHead = 275;

  //Mouth
  xPosMouth = width/2;
  yPosMouth = height/2 + 25/2;
  dxMouth = dyMouth = 200;

  //Nose
  xPosNose = width/2;
  yPosNose = height/16*5 + height/32;
  dxNose = 100;
  dyNose = 125;

  //Eyes
  xPosEyeL = width/8*3 + width/64;
  yPosEyeL = height/8 + height/32;
  dxEyeL = dyEyeL = 100;

  xPosEyeR = width/8*5 - width/64;
  yPosEyeR = height/8 + height/32;
  dxEyeR = dyEyeR = 100;

  //Pupils
  rPupil = 50;
  dPupil = 25;
  easing = 0.05;
  centerL = new PVector(xPosEyeL, yPosEyeL);
  centerR = new PVector(xPosEyeR, yPosEyeR);
}

void draw() {
  background(#343434);
  hitDetection();
  drawHead();
  drawMouth();
  drawEyeR();
  drawEyeL();
  drawNose();
  intro();
}

void intro() {
  rectMode(CENTER);
  int speed = 1;
  opacity -= speed;
  fill(#000000, opacity);
  rect(width/2, height/2, width, height);
  if (opacity <= 0) {
    speed = 0;
  }
}

void hitDetection() {
  float mx, my;
  mx = mouseX - xPosEyeL;
  my = mouseY - yPosEyeL;
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

void drawEyeL() {
  if (EyesOpen == false) {

    stroke(#000000);
    strokeWeight(5);
    fill(#FF3E3E);
    ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);
    line((xPosEyeL-dxEyeL/2), yPosEyeL, (xPosEyeL+dxEyeL/2), yPosEyeL);
  } else {

    stroke(#000000);
    strokeWeight(5);
    fill(#FFFFFF);
    ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);

    noStroke();
    fill(#000000);

    PVector mouseL = new PVector(mouseX, mouseY);
    if (dist(mouseL.x, mouseL.y, centerL.x, centerL.y) > rPupil/2) {
      mouseL.sub(centerL);
      mouseL.normalize();
      mouseL.mult(rPupil/2);
      mouseL.add(centerL);
    }

    xPosPupilL += (mouseL.x - xPosPupilL) * easing;
    yPosPupilL += (mouseL.y - yPosPupilL) * easing;

    ellipse(xPosPupilL, yPosPupilL, dPupil, dPupil);
  }
}

void drawEyeR() {

  if (EyesOpen == false) {
    stroke(#000000);
    strokeWeight(5);
    fill(#FF3E3E);
    ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);
    line((xPosEyeR-dxEyeR/2), yPosEyeR, (xPosEyeR+dxEyeR/2), yPosEyeR);
  } else {

    stroke(#000000);
    strokeWeight(5);
    fill(#FFFFFF);
    ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);

    noStroke();
    fill(#000000);

    PVector mouseR = new PVector(mouseX, mouseY);
    if (dist(mouseR.x, mouseR.y, centerR.x, centerR.y) > rPupil/2) {
      mouseR.sub(centerR);
      mouseR.normalize();
      mouseR.mult(rPupil/2);
      mouseR.add(centerR);
    }

    xPosPupilR += (mouseR.x - xPosPupilR) * easing;
    yPosPupilR += (mouseR.y - yPosPupilR) * easing;

    ellipse(xPosPupilR, yPosPupilR, dPupil, dPupil);
  }
}