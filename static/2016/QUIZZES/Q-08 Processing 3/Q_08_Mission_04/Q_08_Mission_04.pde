void setup() {
  size(400,400);
  background(255);
  Car();
}

void Car() {
  noStroke();
  fill(#0092FF);
  //car
  beginShape();
  vertex(110,150);
  vertex(100,200);
  vertex(300,200);
  vertex(280,150);
  vertex(250,150);
  vertex(230,100);
  vertex(180,100);
  endShape(CLOSE);
  //wheels
  fill(0);
  ellipse(150,200,50,50);
  ellipse(250,200,50,50);
}