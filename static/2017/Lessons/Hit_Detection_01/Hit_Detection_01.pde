/*

 02/10/2017
 Hitboxes
 
 */

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);
  noStroke();
  textSize(36);
  textAlign(CENTER);
}

void draw() {
  background(#393C40);

  stroke(#2B2D31);
  strokeWeight(10);

  //line(0, 0, width, height);
  //line(width, 0, 0, height);

  //fill(#FF003C);
  //triangle(0, 0, width, 0, width/2, height/2);
  //fill(#008EFF);
  //triangle(width, 0, width, height, width/2, height/2);
  //fill(#00FF92);
  //triangle(width, height, 0, height, width/2, height/2);
  //fill(#F6FF00);
  //triangle(0, 0, 0, height, width/2, height/2);

  
  
  if (mouseX >= width/2 && mouseX <= width && mouseY >= height/2 && mouseY <= height) {
    background(#FF003C);
    if (mousePressed) {
      text("HAHA!", width*3/4, height*3/4);
    }
  } else if (mouseX <= width/2 && mouseX >= 0 && mouseY >= height/2 && mouseY <= height) {
    background(#008EFF);
    if (mousePressed) {
      text("HAHA!", width/4, height*3/4);
    }
  } else if (mouseX >= width/2 && mouseX <= width && mouseY <= height/2 && mouseY >= 0) {
    background(#00FF92);
    if (mousePressed) {
      text("HAHA!", width*3/4, height/4);
    }
  } else {
    background(#F6FF00);
    if (mousePressed) {
      text("HAHA!", width/4, height/4);
    }
  }
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
}