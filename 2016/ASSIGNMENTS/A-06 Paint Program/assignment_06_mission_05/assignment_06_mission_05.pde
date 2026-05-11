 //variables
 color brush = #000000;
 int thickness = 3;
 String strokeSize = str(thickness);
 
 void setup() {
   //standard stuff
   size(600,400);
   background(#E8E8E8); //white-grey
   textSize(12);
   textAlign(CENTER);
 }
 
 void draw() {
   //cursor fun
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40 || mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80 || mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120 || mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160 || mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200 || mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 320) {
     cursor(HAND);
   } else {
     cursor(ARROW);
   }
   
   //side-bar
   stroke(#404040);
   strokeWeight(0);
   fill(#404040); //dark-grey
   rect(0,0,50,400);
   
   //colour buttons
   //black
   fill(#000000);
   rect(10,10,30,30);
   //white
   fill(#FFFFFF);
   rect(10,50,30,30);
   //red
   fill(#FF005E);
   rect(10,90,30,30);
   //blue
   fill(#00A8FF);
   rect(10,130,30,30);
   //green
   fill(#00FF81);
   rect(10,170,30,30);
   //eraser
   fill(#E8E8E8);
   rect(2,300,46,20);
   fill(#810045);
   text("ERASER", 0, 302, 50, 330);
   
   //current colour
   strokeWeight(0);
   fill(brush);
   ellipse(25,250,30,30);
   fill(#FFFFFF);
   text("COLOUR", 0, 215, 50, 235);
   
   //current brush size
   text("SIZE: " + strokeSize, 0, 270, 50, 300);
   
   //color & size of brush
   stroke(brush);
   strokeWeight(thickness);
   //brush code
   if (mousePressed == true && mouseX > 50 && pmouseX > 50) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
 }
 
 void mouseClicked() {
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
     brush = #000000; //BLACK
   } if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
     brush = #FFFFFF; //WHITE
   } if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
     brush = #FF005E; //RED
   } if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
     brush = #00A8FF; //BLUE
   } if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
     brush = #00FF81; //GREEN
   } if (mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 320) {
     brush = #E8E8E8; //white-grey
   }
 }
 
 void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  if (thickness >= 1) {
  thickness -= e;
  strokeSize = str(thickness);
  } if (thickness == 0) {
    thickness = 1;
    strokeSize = str(thickness);
  }
}