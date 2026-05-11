color c1 = 255;
int num = -1;

void setup() {
  size(600,400);
  background(#000000);
  frameRate(30);
}

void draw() {
  for (int j = 0; j < 20; j++) {
    fill(c1);
    if (c1 == 0) {
      num = 1;
    } if (c1 == 255) {
      num = -1;
    }
    c1 += num;
    
    rect(j*30,190,20,20);
  }
}