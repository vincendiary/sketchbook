/*

Useful Reference - Slider w/ Functionality
03/09/2017

*/
float mx;

void setup() {
  size(600, 200);
  
  //Starting position for the slider
  mx = width/2;
}

void draw() {
  
  //Filler and fancy code
  background(#2C2C2C);
  strokeWeight(5);
  rectMode(CENTER);
  fill(#000000);
  stroke(#272727);
  rect(width/2, height/2, 500, 30);
  
  //Slider functionality using mx and division
  color c1 = int((mx/(550/255))-25);
  
  //Extra fluff
  fill(c1, 50, 50);
  rect(width/2, height/2 - 55, 90, 30);
  fill(#818181);
  stroke(#404040);
  
  //Slider code
  if (mousePressed == true) {
    mx = constrain(mouseX, 50, 550);
  }
  //Draw the slider
  rect(mx, 100, 30, 100);
}