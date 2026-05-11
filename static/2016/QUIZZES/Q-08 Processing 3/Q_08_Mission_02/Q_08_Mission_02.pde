void setup() {
  size(400,400);
  background(0);  
}

boolean clicked = false; //workaround start

void draw() {
  if (clicked)
    clickToDrawCircles(); //hooray
  clicked = false;
}

void mousePressed() { // couldn't get mouseClicked() to work so workaround
  clicked = true;
}

void clickToDrawCircles() {
  noStroke();
  for (int j = 10; j > -1; j--) {
    fill(random(255),random(255),random(255));
    ellipse(mouseX,mouseY,j*10,j*10); // this used to be 20 lines of code :)
  }
}