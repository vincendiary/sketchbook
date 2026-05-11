void setup() {
  size(800,500);
  background(#000000);
  strokeWeight(5);
  stroke(#FFFFFF);
  line(200,300,500,100);
  line(200,300,500,300);
  line(500,100,500,300);
  textSize(48);
  text(hypotenuse(200,300,500,100),100,150);
  text(500-200, 300, 400);
  text(300-100, 550, 200);
}

float hypotenuse(int x1, int y1, int x2, int y2) {
  float num1 = sq(x2 - x1);
  float num2 = sq(y2 - y1);
  float number = sqrt(num1 + num2);
  return number;
}