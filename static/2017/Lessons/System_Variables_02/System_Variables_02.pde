/*
System Variables 02
02/07/2017
*/

float myFloat = 5.0;
int myInt = 5;

void setup() {
  size(400,400);
  background(#393939);
}

void draw() {
  textSize(24);
  
  fill(#FF0044);
  text("Using Floats",100,75);
  text("+3 = " + str(myFloat+3),100,100);
  text("-3 = " + str(myFloat-3),100,125);
  text("*3 = " + str(myFloat*3),100,150);
  text("/3 = " + str(myFloat/3),100,175);
  
  fill(#00B9FF);
  text("Using Integers",100,250);
  text("+3 = " + str(myInt+3),100,275);
  text("-3 = " + str(myInt-3),100,300);
  text("*3 = " + str(myInt*3),100,325);
  text("/3 = " + str(myInt/3),100,350);
}