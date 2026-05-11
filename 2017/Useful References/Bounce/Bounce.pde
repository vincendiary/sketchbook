//Bounce

float x, y, vs, hs, ag;

void setup() {
  size(640,480);
  rectMode(CENTER);
  x = width/2;
  y = height/4;
  vs = 0;
  hs = 2;
  ag = 0.1;
}

void draw() {
  background(#E0E0E0);
  
  stroke(255);
  fill(0);
  rect(x,y,10,10);
  
  y += vs;
  x += hs;
  
  vs += ag;
  
  if ((y+10) >= height) {
    vs *= -0.95;
    hs *= 0.95;
  }
  
  if ((x+10) >= width || (x-10) <= 0) {
    hs *= -0.95;
  }
}