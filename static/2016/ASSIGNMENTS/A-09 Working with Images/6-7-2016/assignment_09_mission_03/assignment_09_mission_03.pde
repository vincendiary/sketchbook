PImage img;
int x;
int y;
float t = 150;
int spd = 1;

void setup() {
  size(600,800);
  img = loadImage("cafeterrace.jpg");
}

void draw() {
  background(0);
  
  // roof of cafe
  noStroke();
  fill(#DBB20B);
  beginShape();
  vertex(155,197);
  vertex(331,272);
  vertex(310,400);
  vertex(222,368);
  vertex(135,202);
  vertex(120,197);
  vertex(99,150);
  vertex(140,164);
  endShape(CLOSE);
  
  if (mousePressed == true) {
    tint(255,t);
    image(img,0,0,600,800);
    x = mouseX;
    y = mouseY;
  }
  t += spd;
  if (t == 255 || t == 100) {
    spd *= -1;
  }
  println(x,y);
}