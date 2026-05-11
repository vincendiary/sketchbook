void setup() {
  size(800,500);
  background(#000000);
  textSize(72);
  text(addThemUp(9,9,9), 350, 100);
  text(addThemUp(1,2,3), 350, 200);
}

int addThemUp(int number1, int number2, int number3) {
  int sum = number1 + number2 + number3;
  return sum;
}