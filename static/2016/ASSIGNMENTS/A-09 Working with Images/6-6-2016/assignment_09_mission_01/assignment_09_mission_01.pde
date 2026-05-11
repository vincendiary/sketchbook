PImage img1;
PImage img2;
void setup() {
  size(500, 400);
  img1 = loadImage("howcansheslap.jpeg");
  img2 = loadImage("penguin.png");
}

void draw() {
  image(img1, 0, 0);
  image(img2, 300, 100, img2.width/3, img2.height/3);
}