 //variables
 color brush = #000000;
 
 void setup() {
   //standard stuff
   size(600,400);
   background(#E8E8E8); //white-grey
   
   //side-bar
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
 }
 
 void draw() {
   //color & size of brush
   stroke(brush);
   strokeWeight(3);
   
   //brush code
   if (mousePressed == true && mouseX > 50 && pmouseX > 50) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
   
   //current colour
   strokeWeight(0);
   fill(brush);
   rect(10,360,30,30);
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
   }
 }