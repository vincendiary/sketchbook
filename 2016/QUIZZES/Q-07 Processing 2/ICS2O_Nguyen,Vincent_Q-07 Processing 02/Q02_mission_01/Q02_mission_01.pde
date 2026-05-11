void setup() {
  size(400, 400);
  noStroke();
  fill(255, 0, 0);
  rect(50, 50, 200, 200);
  fill(0, 255, 0);
  ellipse(width/2, height/2, 100, 100);
  stroke(#000000); // Negates the noStroke() command previously, this allows the line() to have a black stroke
  strokeWeight(4);
  line(0, 0, 400, 400);
}