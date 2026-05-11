/*

 Loading fonts into Processing
 03/01/2017
 
 */

PFont Spoonter;

void settings() {
  size(900, 600);
  smooth(8);
}

void setup() {
  Spoonter = loadFont("ComicSansMS-72.vlw");
  textFont(Spoonter);
  textSize(72);
  textAlign(CENTER, CENTER);
}

void draw() {
  background(#EAEAEA);

  rectMode(CENTER);
  noStroke();

  fill(#F44336);
  rect(0, 75, width*2, 150);

  fill(#E53935);
  rect(0, 225, width*2, 150);
  
  fill(#D32F2F);
  rect(0, 375, width*2, 150);
  
  fill(#C62828);
  rect(0, 525, width*2, 150);
  
  fill(#FFD180);
  text("Spoonter is the man!", width/2, height/2);
}