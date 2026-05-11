int[] numbers = new int[20];
int[] speed = new int[20];

void setup() {
  size(800,800);
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
    fill(numbers[j]);
    for (int k = 0; k < 20; k++) {
      rect(j*40,k*80+40,30,30);
    }
    fill(255-numbers[j]);
    for (int k = 0; k <20; k++) {
      rect(j*40,k*80,30,30);
    }
    if (numbers[j] == 255 || numbers[j] == 0) {
        speed[j] *= -1;
      }
  }
}