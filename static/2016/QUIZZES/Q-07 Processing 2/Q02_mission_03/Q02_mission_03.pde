void setup() {
  size(400, 400);
  // background(255); Background was previously white. 
  background(#000000); // White on white is not easy to differentiate. We'll change it to black.
  noStroke();
  frameRate(15);
} 

void draw() {
  //for (int k = 0; k < 8; k++) { // rows. Original code set to 8
    //for (int j = 0; j < 10; j++) { // columns. Original code set to 10
  for (int k = 0; k < 10; k++) // However, we want 10 rows and 8 columns, not the other way around
    for (int j = 0; j < 8; j++) // So let's change that :)
      fill(255,255,255);
      ellipse(j*35+20, k*35+20, 30, 30);
    }
  }
}