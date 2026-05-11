int x = 100;
int y = 100;

void setup() {
  size(400, 400);
  background(255, 240, 240); 
  rect(x, y, 40, 40);
}

void draw() {
  fill(255, 0, 0);
  rect(x, y, 40, 40);

  // fill(255, 240, 240, 50); Prevous code that redrew a transparent rectangle to create a trail effect
  fill(255, 240, 240, 25); // To make the trail longer, we increase the transparency so it needs to redraw more times to clean up the trail
  rect(0, 0, 400, 400);
}

void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + 10;
  }

  if (keyCode == DOWN) {
    y = y + 10;
  }

  if (keyCode == LEFT) {
    x = x - 10;
  }

  if (keyCode == UP) {
    y = y - 10;
  }
}