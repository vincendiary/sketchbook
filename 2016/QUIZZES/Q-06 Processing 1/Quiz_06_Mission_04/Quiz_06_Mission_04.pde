int xpos = 0;

void setup() {
  size(400,300);
  background(#ABDDE5);
}

void draw() {
  background(#ABDDE5);
  
  fill(#90E59D);
  ellipse(200,150,100,100);
  
  fill(#3D96F2);
  ellipse(xpos,150,20,20);
  xpos += 1;
  
  fill(#F23D3D);
  rect(160,110,80,80);
}