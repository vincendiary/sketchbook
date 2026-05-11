int x = 0;
int y = 0;
int spd = 40;

void setup() {
  size(800,800);
  background(0);
  frameRate(30);
}

void draw() {
  noStroke();
  fill(#000000,20);
  for (int j = 0; j < 20; j++) {
    for (int k = 0; k <20; k++) {
      rect(j*40,k*40,30,30);
    }
  }
  fill(255);
  rect(x,y,30,30);
  x += spd;
  if (x == 800 || x == -40) {
    y += 40;
    spd *= -1;
  } if (y == 800) {
    y = 0;
  }
}