void setup() {
  size(600,400);
}

void draw() {
  background(255);
  fill(255,0,0);
  rect(50,100,100,50);

  if (get(mouseX,mouseY) == color(255,0,0)) {
    print("hello");
  }
  
  fill(0,255,0);
  ellipse(mouseX,mouseY,10,10);
}