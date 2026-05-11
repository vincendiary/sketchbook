int x = 0;
int spd = 20;

void setup() {
  size(400,400);
  background(0);
  frameRate(20);
  
}

void draw() {
  for (int j = 0; j < 20; j++) {
    noStroke();
    fill(#FF0000);
    ellipse(j*20,190,15,15);
  }
  fill(0);
  ellipse(x,190,15,15);
  x += spd;
  if (x > width || x < 0) {
    spd *= -1;
  }
}