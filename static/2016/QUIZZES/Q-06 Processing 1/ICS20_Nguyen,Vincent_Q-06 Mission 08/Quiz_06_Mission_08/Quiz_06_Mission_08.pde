int xpos1 = 0;
int ypos1 = 110;
int yspeed = 3;
color c1 = #ABDDE5;

float xpos2 = 200;
float ypos2 = 50;
float velocity = 0;
float gravity = 0.35;
float breeze = 0.5;
float bounce = -1;

void setup() {
  size(400,300);
  background(#ABDDE5);
}

void draw() {
  background(c1);
  
  if (keyPressed) {
    if (key == 'r') {
      c1 = #F02C50;
    } else if (key == 'g') {
      c1 = #2CF08F;
    } else if (key == 'y') {
      c1 = #F7E86E;
    }
  }
  
  fill(#90E59D);
  ellipse(200,150,100,100);
  
  fill(#3D96F2);
  ellipse(xpos1,150,20,20);
  xpos1 += 1;
  
  fill(#F23D3D);
  rect(160,ypos1,80,80);
  ypos1 += yspeed;
  
  if (ypos1 >= 220 || ypos1 <= 0) {
    yspeed = yspeed*-1;
  }
  
  fill(#90E59D);
  ellipse(mouseX,mouseY,20,20);
  

  fill(#E269F2);
  ellipse(xpos2,ypos2,20,20);
  
  velocity += gravity;
  ypos2 += velocity;
  xpos2 += breeze;
  
  if(ypos2 > 280)
  {
    velocity *= bounce;
  }
  
  if (xpos2 >= 400) {
    breeze *= -1;
  }
  
  if (xpos2 < 19) {
    gravity = 0;
    velocity = 0;
    breeze = 0;
  }
}