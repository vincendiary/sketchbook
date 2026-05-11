float xPos, yPos, diam; 
color circleColor;

void setup () {
  size(600, 400);
  xPos = width/2;
  yPos = height/2;
  diam = width/2 ;
  circleColor = color(255);
}

void draw () {
  background(0);
  drawCircle();
}

void drawCircle () {
  if (nearestDist(xPos,yPos) < diam/2) { 
    circleColor = color(255, 0, 0);
  } else circleColor = color(255);
  
  fill(circleColor);
  ellipse(xPos, yPos, diam, diam);
}

float nearestDist (float xPos, float yPos) {
  float a = yPos - mouseY;
  float b = xPos - mouseX;
  float c = sqrt(sq(a) + sq(b));
  return c;
}