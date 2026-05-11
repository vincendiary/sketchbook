int[] numbers = new int[20];
int[] speed = new int[20];

void setup() {
  size(800,200);
  background(0);
  for (int j=0; j<20; j++)  {
    numbers[j] = j*5;
    speed[j] = 5;
  }  
}

void draw() {
  noStroke();
  for (int j = 0; j < 20; j++) {
    numbers[j] += speed[j];
    fill(numbers[j],numbers[j],numbers[j]);
    rect(j*40,85,30,30);
    if (numbers[j] == 255 || numbers[j] == 0) {
      speed[j] *= -1;
    }
  }
}