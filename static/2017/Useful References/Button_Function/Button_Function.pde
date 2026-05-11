void setup() {
  size(600,400);
}

void draw() {
  button(width*3/4, height/2, 200, 200, 255, 100, #FF0000);
  button(width/4, height/2, 200, 200, 255, 100, 200);
}

void button(float x, float y, float w, float h, color c1, color c2, color c3) {
  rectMode(CENTER);
  
  if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {
    fill(c2);
    if (mousePressed) {
      fill(c3);
    }
  } else {
    fill(c1);
  }
  
  rect(x, y, w, h);
}