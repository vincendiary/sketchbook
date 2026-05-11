int Face1 = 300;
int Face2 = 200;
int FaceSpd1 = 2;
int FaceSpd2 = 2;

void setup() { //Happens Once
  size (600,400); // size of the window (width, height)
  background(50);
}

void draw() { //Repeats

  background(50);

  fill(#34F7A4);
  stroke(127,255,255);
  strokeWeight(5);
  ellipse(Face1,Face2,50,50);
  ellipse(400,100,120,60);
  
  fill(255,127,127);
  stroke(255,127,255);
  rect(300,200,150,100);
  
  fill(#0CDBF5,100);
  stroke(#0AB6CB);
  rect(mouseX-100,mouseY-75,200,150);
 
  Face1 += FaceSpd1;
  Face2 += FaceSpd2;
  
  if (Face1 > 575||Face1 < 25) {
    FaceSpd1 = -1*FaceSpd1;
  } else if (Face2 > 375||Face2 < 25) {
    FaceSpd2 = -1*FaceSpd2;
  }

}