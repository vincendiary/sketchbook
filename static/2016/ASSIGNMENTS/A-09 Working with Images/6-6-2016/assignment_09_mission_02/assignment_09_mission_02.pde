PImage img1;
PImage img2;
void setup() {
  size(500, 400);
  img1 = loadImage("howcansheslap.jpeg");
  img2 = loadImage("penguin.png");
}

void draw() {
  background(0);
  tint(255);
  image(img1, 0, 0);
  tint(255, 127);
  image(img2, mouseX, mouseY, img2.width/3, img2.height/3);
}