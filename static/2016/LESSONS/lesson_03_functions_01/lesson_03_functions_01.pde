color brush = #FFFFFF;

void setup() {
  size(800,500);
  background(#000000);
  noStroke();
  for (int j = 9; j < 100; j++) {
    drawCircle();
  }
}


/*void draw() {
  noStroke();
  fill(#000000,30);
  rect(0,0,800,500);
  
  fill(brush);
  ellipse(mouseX,mouseY,50,50);
  if (mousePressed) {
    brush = #000000;
  } else {
    brush = #FFFFFF;
  }
}*/



void drawCircle() {
  float diameter = random(50,200);
  int dia = round(diameter);
  float xCenter = random(800);
  float yCenter = random(500);
  
  fill(random(255),random(255),random(255));
  ellipse(xCenter,yCenter,dia,dia);
}