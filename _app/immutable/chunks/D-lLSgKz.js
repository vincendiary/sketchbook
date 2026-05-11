import{E as e,G as t,H as n,I as r,K as i,L as a,M as o,R as s,S as c,T as l,W as u,Y as d,_ as f,a as p,b as m,c as h,d as g,i as _,s as v,u as y,v as b,w as x,x as S,y as C}from"./GTwQwR_D.js";import{c as w,s as T}from"./BrLT6nFE.js";import"./D1hYfEew.js";import{t as E}from"./COjE7hdJ.js";import{t as D}from"./JauBXyGZ.js";var O=[{path:`/2016/ASSIGNMENTS/A-05 Programming in Processing/ICS2O_Nguyen,Vincent_A-05 Processing/assignment_05_mission_08/assignment_05_mission_08.pde`,name:`assignment_05_mission_08.pde`,size:840,code:`
void setup() {
 size (300,400);
 background (#AAEBF7);
}

void draw() {
  
 background (#AAEBF7);
 strokeWeight(3);
  
 // Head
 fill(#FF820D);
 stroke(#C46710);
 ellipse(150,200,100,100); 
 
 // Eyes
 
 // Left Eye (Green)
 fill(#30FA89,127);
 stroke(#27D66E);
 ellipse(135,185,40,40);
  // Right Eye (Blue)
 fill(#28EAFA,127);
 stroke(#20BAC6);
 ellipse(165,185,40,40);
 
 // Pupils
 float mx1 = constrain(mouseX,125,145);
 float my1 = constrain(mouseY,175,195);
 float mx2 = constrain(mouseX,155,175);
 float my2 = constrain(mouseY,175,195);
 // Left Pupil
 fill(#363434);
 stroke(#1A1919);
 ellipse(mx1,my1,10,10);
 // Right Pupil
 fill(#363434);
 stroke(#1A1919);
 ellipse(mx2,my2,10,10);
 
 // Nose
 fill(#FF0307,127);
 stroke(#D30206);
 rect(145,195,10,20);
 
 // Mouth
 fill(#363434);
 stroke(#1A1919);
 ellipse(150,230,40,15);
 
}`},{path:`/2016/ASSIGNMENTS/A-05 Programming in Processing/assignment_05_mission_03/assignment_05_mission_03.pde`,name:`assignment_05_mission_03.pde`,size:479,code:`void setup() {
 size (300,400);
 background (#AAEBF7);
}

void draw() {
  
 strokeWeight(3);
  
 // Head
 fill(#FF820D);
 stroke(#C46710);
 ellipse(150,200,100,100); 
 
 // Eyes
 // Left Eye (Green)
 fill(#30FA89);
 stroke(#27D66E);
 ellipse(130,185,25,25);
 // Right Eye (Blue)
 fill(#28EAFA);
 stroke(#20BAC6);
 ellipse(170,185,25,25);
 
 // Nose
 fill(#FF0307);
 stroke(#D30206);
 rect(145,200,10,10);
 
 // Mouth
 fill(#363434);
 stroke(#1A1919);
 ellipse(150,230,40,15);
 
}`},{path:`/2016/ASSIGNMENTS/A-05 Programming in Processing/assignment_05_mission_04/assignment_05_mission_04.pde`,name:`assignment_05_mission_04.pde`,size:491,code:`void setup() {
 size (300,400);
 background (#AAEBF7);
}

void draw() {
  
 strokeWeight(3);
  
 // Head
 fill(#FF820D);
 stroke(#C46710);
 ellipse(150,200,100,100); 
 
 // Eyes
 // Left Eye (Green)
 fill(#30FA89,127);
 stroke(#27D66E);
 ellipse(135,185,40,40);
 // Right Eye (Blue)
 fill(#28EAFA,127);
 stroke(#20BAC6);
 ellipse(165,185,40,40);
 
 // Nose
 fill(#FF0307,127);
 stroke(#D30206);
 rect(140,190,20,20);
 
 // Mouth
 fill(#363434);
 stroke(#1A1919);
 ellipse(150,230,40,15);
 
}`},{path:`/2016/ASSIGNMENTS/A-05 Programming in Processing/assignment_05_mission_05/assignment_05_mission_05.pde`,name:`assignment_05_mission_05.pde`,size:586,code:`int xNose = 140;
int NoseSpd = -1;

void setup() {
 size (300,400);
 background (#AAEBF7);
}

void draw() {
  
 background (#AAEBF7);
 strokeWeight(3);
  
 // Head
 fill(#FF820D);
 stroke(#C46710);
 ellipse(150,200,100,100); 
 
 // Eyes
 // Left Eye (Green)
 fill(#30FA89,127);
 stroke(#27D66E);
 ellipse(135,185,40,40);
 // Right Eye (Blue)
 fill(#28EAFA,127);
 stroke(#20BAC6);
 ellipse(165,185,40,40);
 
 // Nose
 fill(#FF0307,127);
 stroke(#D30206);
 rect(xNose,190,20,20);
 
 // Mouth
 fill(#363434);
 stroke(#1A1919);
 ellipse(150,230,40,15);
 
 // Movement
 xNose += NoseSpd;
 
}`},{path:`/2016/ASSIGNMENTS/A-05 Programming in Processing/assignment_05_mission_06/assignment_05_mission_06.pde`,name:`assignment_05_mission_06.pde`,size:660,code:`int xNose = 140;
int NoseSpd = -1;

void setup() {
 size (300,400);
 background (#AAEBF7);
}

void draw() {
  
 background (#AAEBF7);
 strokeWeight(3);
  
 // Head
 fill(#FF820D);
 stroke(#C46710);
 ellipse(150,200,100,100); 
 
 // Eyes
 // Left Eye (Green)
 fill(#30FA89,127);
 stroke(#27D66E);
 ellipse(135,185,40,40);
 // Right Eye (Blue)
 fill(#28EAFA,127);
 stroke(#20BAC6);
 ellipse(165,185,40,40);
 
 // Nose
 fill(#FF0307,127);
 stroke(#D30206);
 rect(xNose,190,20,20);
 
 // Mouth
 fill(#363434);
 stroke(#1A1919);
 ellipse(150,230,40,15);
 
 // Movement
 xNose += NoseSpd;
 
 // Bounce
 if (xNose < 0 || xNose > 280) {
   NoseSpd = -1*NoseSpd;
 }
 
}`},{path:`/2016/ASSIGNMENTS/A-05 Programming in Processing/assignment_05_mission_07/assignment_05_mission_07.pde`,name:`assignment_05_mission_07.pde`,size:855,code:`int xPup1 = 135;
int xPup2 = 165;
int EyeSpd = -1;

void setup() {
 size (300,400);
 background (#AAEBF7);
}

void draw() {
  
 background (#AAEBF7);
 strokeWeight(3);
  
 // Head
 fill(#FF820D);
 stroke(#C46710);
 ellipse(150,200,100,100); 
 
 // Eyes
 
 // Left Eye (Green)
 fill(#30FA89,127);
 stroke(#27D66E);
 ellipse(135,185,40,40);
  // Right Eye (Blue)
 fill(#28EAFA,127);
 stroke(#20BAC6);
 ellipse(165,185,40,40);
 
 // Pupil (Left)
 fill(#363434);
 stroke(#1A1919);
 ellipse(xPup1,185,10,10);
 
 // Pupil (Right)
 fill(#363434);
 stroke(#1A1919);
 ellipse(xPup2,185,10,10);
 
 // Nose
 fill(#FF0307,127);
 stroke(#D30206);
 rect(145,195,10,20);
 
 // Mouth
 fill(#363434);
 stroke(#1A1919);
 ellipse(150,230,40,15);
 
 // Movement
 xPup1 += EyeSpd;
 xPup2 += EyeSpd;
 
 // Bounce
 if (xPup1 < 120 || xPup1 > 150) {
   EyeSpd = -1*EyeSpd;
 }
 
}`},{path:`/2016/ASSIGNMENTS/A-05 Programming in Processing/assignment_05_mission_08/assignment_05_mission_08.pde`,name:`assignment_05_mission_08.pde`,size:840,code:`
void setup() {
 size (300,400);
 background (#AAEBF7);
}

void draw() {
  
 background (#AAEBF7);
 strokeWeight(3);
  
 // Head
 fill(#FF820D);
 stroke(#C46710);
 ellipse(150,200,100,100); 
 
 // Eyes
 
 // Left Eye (Green)
 fill(#30FA89,127);
 stroke(#27D66E);
 ellipse(135,185,40,40);
  // Right Eye (Blue)
 fill(#28EAFA,127);
 stroke(#20BAC6);
 ellipse(165,185,40,40);
 
 // Pupils
 float mx1 = constrain(mouseX,125,145);
 float my1 = constrain(mouseY,175,195);
 float mx2 = constrain(mouseX,155,175);
 float my2 = constrain(mouseY,175,195);
 // Left Pupil
 fill(#363434);
 stroke(#1A1919);
 ellipse(mx1,my1,10,10);
 // Right Pupil
 fill(#363434);
 stroke(#1A1919);
 ellipse(mx2,my2,10,10);
 
 // Nose
 fill(#FF0307,127);
 stroke(#D30206);
 rect(145,195,10,20);
 
 // Mouth
 fill(#363434);
 stroke(#1A1919);
 ellipse(150,230,40,15);
 
}`},{path:`/2016/ASSIGNMENTS/A-06 Paint Program/ICS2O_Nguyen,Vincent_A-06 Paint Program/assignment_06_mission_08/assignment_06_mission_08.pde`,name:`assignment_06_mission_08.pde`,size:4953,code:` //variables
 color brush = #000000;
 int thickness = 3;
 String strokeSize = str(thickness);
 boolean rainbow = false;
 boolean starmode = false;
 
 void setup() {
   //standard stuff
   size(600,400);
   background(#E8E8E8); //white-grey
   textSize(12);
   textAlign(CENTER);
 }
 
 void draw() {
   //cursor fun
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40 || mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80 || mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120 || mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160 || mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200 || mouseX > 0 && mouseX < 50 && mouseY > 280 && mouseY < 300 || mouseX > 0 && mouseX < 50 && mouseY > 310 && mouseY < 330 || mouseX > 0 && mouseX < 50 && mouseY > 340 && mouseY < 360 || mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400) {
     cursor(HAND);
   } else {
     cursor(ARROW);
   }
   
   //side-bar
   stroke(#404040);
   noStroke();
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
   rect(2,280,46,20);
   fill(#810045);
   text("ERASER", 0, 282, 50, 310);
   //rainbow
   fill(#FF00A6);
   rect(2,310,46,20);
   fill(#FFFFFF);
   text("rainbow", 0, 312, 50, 340);
   //reset-button
   fill(#7E00FF);
   rect(2,340,46,20);
   fill(#FFFFFF);
   text("RESET", 0, 342, 50, 370);
   //starmode
   fill(#FFF300);
   rect(2,370,46,20);
   fill(#000000);
   text("starmode", 0, 372, 50, 400);
   
   //current colour
   noStroke();
   fill(brush);
   ellipse(25,240,30,30);
   fill(#FFFFFF);
   text("COLOUR", 0, 205, 50, 235);
   
   //current brush size
   text("SIZE: " + strokeSize, 0, 260, 50, 300);
   
   //color & size of brush
   stroke(brush);
   strokeWeight(thickness);
   fill(brush);
   
   //rainbow injection!
   if (rainbow == true) {
     float r1 = random(255);
     float r2 = random(255);
     float r3 = random(255);
     int c1 = round(r1);
     int c2 = round(r2);
     int c3 = round(r3);
     brush = color(c1,c2,c3);
   }
   
   //brush code
   if (mousePressed == true && mouseX > 50 && pmouseX > 50 && starmode == false) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
   if (mousePressed == true && mouseX > 50 && pmouseX > 50 && starmode == true) {
    star(mouseX, mouseY, 15, 30, 5);
   }
 }
 
 void mouseClicked() {
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
     brush = #000000; //BLACK
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
     brush = #FFFFFF; //WHITE
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
     brush = #FF005E; //RED
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
     brush = #00A8FF; //BLUE
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
     brush = #00FF81; //GREEN
     rainbow = false;
   } if (mouseX > 0 && mouseX < 50 && mouseY > 280 && mouseY < 300) {
     brush = #E8E8E8; //white-grey
     rainbow = false;
   } if (mouseX > 0 && mouseX < 50 && mouseY > 310 && mouseY < 330) {
     rainbow = true; //turns rainbow mode on
   } if (mouseX > 0 && mouseX < 50 && mouseY > 340 && mouseY < 360) {
     background(#E8E8E8); //resets the background
   } if (mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400 && starmode == false) {
     starmode = true;
   } else if (mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400 && starmode == true) {
     starmode = false;
   }
 }

//change brush size
 void mouseWheel(MouseEvent event) {
   // creates a quick variable to get the mousewheel value from
  float e = event.getCount();
  // if size is greater than or equal to 1, the mousewheel can be used to increase or decrease size of brush
  if (thickness >= 1) {
  thickness -= e;
  strokeSize = str(thickness);
  } if (thickness == 0) { // code to prevent the brush from reaching negative stroke size (crashes the program)
    thickness = 1;
    strokeSize = str(thickness);
  }
}

//code that creates a star shape function
//creates a star with variables that indicate it's position, the radius of the inner and outher points, and the number of points
void star(float x, float y, float radius1, float radius2, int npoints) {
  
  //more variables
  float angle = TWO_PI / npoints;
  float halfAngle = angle/2.0;
  
  //creates the shape
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius2;
    float sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}`},{path:`/2016/ASSIGNMENTS/A-06 Paint Program/assignment_06_mission_02/assignment_06_mission_02.pde`,name:`assignment_06_mission_02.pde`,size:1326,code:` //variables
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
 }`},{path:`/2016/ASSIGNMENTS/A-06 Paint Program/assignment_06_mission_03/assignment_06_mission_03.pde`,name:`assignment_06_mission_03.pde`,size:1865,code:` //variables
 color brush = #000000;
 int thickness = 3;
 String strokeSize = str(thickness);
 
 void setup() {
   //standard stuff
   size(600,400);
   background(#E8E8E8); //white-grey
   
   
 }
 
 void draw() {
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
   
   //current info
   textSize(12);
   textAlign(CENTER);
   //current colour
   strokeWeight(0);
   fill(brush);
   ellipse(25,260,30,30);
   fill(#FFFFFF);
   text("current colour:", 0, 205, 50, 235);
   
   //current brush size
   text("size:", 0, 280, 50, 300);
   text(strokeSize, 0, 300, 50, 330);
   
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
}`},{path:`/2016/ASSIGNMENTS/A-06 Paint Program/assignment_06_mission_04/assignment_06_mission_04.pde`,name:`assignment_06_mission_04.pde`,size:2253,code:` //variables
 color brush = #000000;
 int thickness = 3;
 String strokeSize = str(thickness);
 
 void setup() {
   //standard stuff
   size(600,400);
   background(#E8E8E8); //white-grey
   
   
 }
 
 void draw() {
   //cursor fun
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40 || mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80 || mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120 || mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160 || mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
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
   
   //current info
   textSize(12);
   textAlign(CENTER);
   //current colour
   strokeWeight(0);
   fill(brush);
   ellipse(25,260,30,30);
   fill(#FFFFFF);
   text("current colour:", 0, 205, 50, 235);
   
   //current brush size
   text("size:", 0, 280, 50, 300);
   text(strokeSize, 0, 300, 50, 330);
   
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
}`},{path:`/2016/ASSIGNMENTS/A-06 Paint Program/assignment_06_mission_05/assignment_06_mission_05.pde`,name:`assignment_06_mission_05.pde`,size:2466,code:` //variables
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
}`},{path:`/2016/ASSIGNMENTS/A-06 Paint Program/assignment_06_mission_06/assignment_06_mission_06.pde`,name:`assignment_06_mission_06.pde`,size:3102,code:` //variables
 color brush = #000000;
 int thickness = 3;
 String strokeSize = str(thickness);
 boolean rainbow = false;
 
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
   //rainbow
   fill(#FF00A6);
   rect(2,330,46,20);
   fill(#FFFFFF);
   text("rainbow", 0, 332, 50, 360);
   
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
   
   //rainbow injection!
   if (rainbow == true) {
     float r1 = random(255);
     float r2 = random(255);
     float r3 = random(255);
     int c1 = round(r1);
     int c2 = round(r2);
     int c3 = round(r3);
     brush = color(c1,c2,c3);
   }
   
   //brush code
   if (mousePressed == true && mouseX > 50 && pmouseX > 50) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
 }
 
 void mouseClicked() {
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
     brush = #000000; //BLACK
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
     brush = #FFFFFF; //WHITE
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
     brush = #FF005E; //RED
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
     brush = #00A8FF; //BLUE
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
     brush = #00FF81; //GREEN
     rainbow = false;
   } if (mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 320) {
     brush = #E8E8E8; //white-grey
     rainbow = false;
   } if (mouseX > 0 && mouseX < 50 && mouseY > 330 && mouseY < 350) {
     rainbow = true; //turns rainbow mode on
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
}`},{path:`/2016/ASSIGNMENTS/A-06 Paint Program/assignment_06_mission_07/assignment_06_mission_07.pde`,name:`assignment_06_mission_07.pde`,size:3390,code:` //variables
 color brush = #000000;
 int thickness = 3;
 String strokeSize = str(thickness);
 boolean rainbow = false;
 
 void setup() {
   //standard stuff
   size(600,400);
   background(#E8E8E8); //white-grey
   textSize(12);
   textAlign(CENTER);
 }
 
 void draw() {
   //cursor fun
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40 || mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80 || mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120 || mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160 || mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200 || mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 320 || mouseX > 0 && mouseX < 50 && mouseY > 360 && mouseY < 380) {
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
   //rainbow
   fill(#FF00A6);
   rect(2,330,46,20);
   fill(#FFFFFF);
   text("rainbow", 0, 332, 50, 360);
   //reset-button
   fill(#7E00FF);
   rect(2,360,46,20);
   fill(#FFFFFF);
   text("RESET",0,362,50,390);
   
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
   
   //rainbow injection!
   if (rainbow == true) {
     float r1 = random(255);
     float r2 = random(255);
     float r3 = random(255);
     int c1 = round(r1);
     int c2 = round(r2);
     int c3 = round(r3);
     brush = color(c1,c2,c3);
   }
   
   //brush code
   if (mousePressed == true && mouseX > 50 && pmouseX > 50) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
 }
 
 void mouseClicked() {
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
     brush = #000000; //BLACK
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
     brush = #FFFFFF; //WHITE
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
     brush = #FF005E; //RED
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
     brush = #00A8FF; //BLUE
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
     brush = #00FF81; //GREEN
     rainbow = false;
   } if (mouseX > 0 && mouseX < 50 && mouseY > 300 && mouseY < 320) {
     brush = #E8E8E8; //white-grey
     rainbow = false;
   } if (mouseX > 0 && mouseX < 50 && mouseY > 330 && mouseY < 350) {
     rainbow = true; //turns rainbow mode on
   } if (mouseX > 0 && mouseX < 50 && mouseY > 360 && mouseY < 380) {
     background(#E8E8E8); //resets the background
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
}`},{path:`/2016/ASSIGNMENTS/A-06 Paint Program/assignment_06_mission_08/assignment_06_mission_08.pde`,name:`assignment_06_mission_08.pde`,size:4784,code:` //variables
 color brush = #000000;
 int thickness = 3;
 String strokeSize = str(thickness);
 boolean rainbow = false;
 boolean starmode = false;
 
 void setup() {
   //standard stuff
   size(600,400);
   background(#E8E8E8); //white-grey
   textSize(12);
   textAlign(CENTER);
 }
 
 void draw() {
   //cursor fun
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40 || mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80 || mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120 || mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160 || mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200 || mouseX > 0 && mouseX < 50 && mouseY > 280 && mouseY < 300 || mouseX > 0 && mouseX < 50 && mouseY > 310 && mouseY < 330 || mouseX > 0 && mouseX < 50 && mouseY > 340 && mouseY < 360 || mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400) {
     cursor(HAND);
   } else {
     cursor(ARROW);
   }
   
   //side-bar
   stroke(#404040);
   noStroke();
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
   rect(2,280,46,20);
   fill(#810045);
   text("ERASER", 0, 282, 50, 310);
   //rainbow
   fill(#FF00A6);
   rect(2,310,46,20);
   fill(#FFFFFF);
   text("rainbow", 0, 312, 50, 340);
   //reset-button
   fill(#7E00FF);
   rect(2,340,46,20);
   fill(#FFFFFF);
   text("RESET", 0, 342, 50, 370);
   //starmode
   fill(#FFF300);
   rect(2,370,46,20);
   fill(#000000);
   text("starmode", 0, 372, 50, 400);
   
   //current colour
   noStroke();
   fill(brush);
   ellipse(25,240,30,30);
   fill(#FFFFFF);
   text("COLOUR", 0, 205, 50, 235);
   
   //current brush size
   text("SIZE: " + strokeSize, 0, 260, 50, 300);
   
   //color & size of brush
   stroke(brush);
   strokeWeight(thickness);
   fill(brush);
   
   //rainbow injection!
   if (rainbow == true) {
     float r1 = random(255);
     float r2 = random(255);
     float r3 = random(255);
     int c1 = round(r1);
     int c2 = round(r2);
     int c3 = round(r3);
     brush = color(c1,c2,c3);
   }
   
   //brush code
   if (mousePressed == true && mouseX > 50 && pmouseX > 50 && starmode == false) {
    line(mouseX, mouseY, pmouseX, pmouseY);
   }
   if (mousePressed == true && mouseX > 50 && pmouseX > 50 && starmode == true) {
    star(mouseX, mouseY, 15, 30, 5);
   }
 }
 
 void mouseClicked() {
   if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
     brush = #000000; //BLACK
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
     brush = #FFFFFF; //WHITE
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 120) {
     brush = #FF005E; //RED
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 130 && mouseY < 160) {
     brush = #00A8FF; //BLUE
     rainbow = false;
   } if (mouseX > 10 && mouseX < 40 && mouseY > 170 && mouseY < 200) {
     brush = #00FF81; //GREEN
     rainbow = false;
   } if (mouseX > 0 && mouseX < 50 && mouseY > 280 && mouseY < 300) {
     brush = #E8E8E8; //white-grey
     rainbow = false;
   } if (mouseX > 0 && mouseX < 50 && mouseY > 310 && mouseY < 330) {
     rainbow = true; //turns rainbow mode on
   } if (mouseX > 0 && mouseX < 50 && mouseY > 340 && mouseY < 360) {
     background(#E8E8E8); //resets the background
   } if (mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400 && starmode == false) {
     starmode = true;
   } else if (mouseX > 0 && mouseX < 50 && mouseY > 370 && mouseY < 400 && starmode == true) {
     starmode = false;
   }
 }

//change brush size
 void mouseWheel(MouseEvent event) {
   // creates a quick variable to get the mousewheel value from
  float e = event.getCount();
  // if size is greater than or equal to 1, the mousewheel can be used to increase or decrease size of brush
  if (thickness >= 1) {
  thickness -= e;
  strokeSize = str(thickness);
  } if (thickness == 0) { // code to prevent the brush from reaching negative stroke size (crashes the program)
    thickness = 1;
    strokeSize = str(thickness);
  }
}

//star shape code (i don't understand any of it)
void star(float x, float y, float radius1, float radius2, int npoints) {
  float angle = TWO_PI / npoints;
  float halfAngle = angle/2.0;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius2;
    float sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}`},{path:`/2016/ASSIGNMENTS/A-08 Loops and Arrays and Graphics/ICS2O_Nguyen,Vincent_A-08 Loops, Arrays and Graphics/assignment_08_mission_03/assignment_08_mission_03.pde`,name:`assignment_08_mission_03.pde`,size:424,code:`int[] numbers = new int[20];
int[] speed = new int[20];

void setup() {
  size(800,200);
  background(0);
  for (int j=0; j<20; j++)  {
    numbers[j] = j*5;
    speed[j] = 5;
  }  
}

void draw() {
  noStroke();
  for (int j = 0; j < 20; j++) {
    numbers[j] += speed[j];
    fill(numbers[j],numbers[j],numbers[j]);
    rect(j*40,85,30,30);
    if (numbers[j] == 255 || numbers[j] == 0) {
      speed[j] *= -1;
    }
  }
}`},{path:`/2016/ASSIGNMENTS/A-08 Loops and Arrays and Graphics/ICS2O_Nguyen,Vincent_A-08 Loops, Arrays and Graphics/assignment_08_mission_04/assignment_08_mission_04.pde`,name:`assignment_08_mission_04.pde`,size:398,code:`int x = 0;
int y = 0;
int spd = 40;

void setup() {
  size(800,800);
  background(0);
  frameRate(30);
}

void draw() {
  noStroke();
  fill(#000000,20);
  for (int j = 0; j < 20; j++) {
    for (int k = 0; k <20; k++) {
      rect(j*40,k*40,30,30);
    }
  }
  fill(255);
  rect(x,y,30,30);
  x += spd;
  if (x == 800 || x == -40) {
    y += 40;
    spd *= -1;
  } if (y == 800) {
    y = 0;
  }
}`},{path:`/2016/ASSIGNMENTS/A-08 Loops and Arrays and Graphics/assignment_08_mission_02/assignment_08_mission_02.pde`,name:`assignment_08_mission_02.pde`,size:297,code:`color c1 = 255;
int num = -1;

void setup() {
  size(600,400);
  background(#000000);
  frameRate(30);
}

void draw() {
  for (int j = 0; j < 20; j++) {
    fill(c1);
    if (c1 == 0) {
      num = 1;
    } if (c1 == 255) {
      num = -1;
    }
    c1 += num;
    
    rect(j*30,190,20,20);
  }
}`},{path:`/2016/ASSIGNMENTS/A-08 Loops and Arrays and Graphics/assignment_08_mission_03/assignment_8_mission_03.pde`,name:`assignment_8_mission_03.pde`,size:424,code:`int[] numbers = new int[20];
int[] speed = new int[20];

void setup() {
  size(800,200);
  background(0);
  for (int j=0; j<20; j++)  {
    numbers[j] = j*5;
    speed[j] = 5;
  }  
}

void draw() {
  noStroke();
  for (int j = 0; j < 20; j++) {
    numbers[j] += speed[j];
    fill(numbers[j],numbers[j],numbers[j]);
    rect(j*40,85,30,30);
    if (numbers[j] == 255 || numbers[j] == 0) {
      speed[j] *= -1;
    }
  }
}`},{path:`/2016/ASSIGNMENTS/A-08 Loops and Arrays and Graphics/assignment_08_mission_04_a/assignment_08_mission_04.pde`,name:`assignment_08_mission_04.pde`,size:549,code:`int[] numbers = new int[20];
int[] speed = new int[20];

void setup() {
  size(800,800);
  background(0);
  for (int j=0; j<20; j++)  {
    numbers[j] = j*5;
    speed[j] = 5;
  }  
}

void draw() {
  noStroke();
  for (int j = 0; j < 20; j++) {
    numbers[j] += speed[j];
    fill(numbers[j]);
    for (int k = 0; k < 20; k++) {
      rect(j*40,k*80+40,30,30);
    }
    fill(255-numbers[j]);
    for (int k = 0; k <20; k++) {
      rect(j*40,k*80,30,30);
    }
    if (numbers[j] == 255 || numbers[j] == 0) {
        speed[j] *= -1;
      }
  }
}`},{path:`/2016/ASSIGNMENTS/A-08 Loops and Arrays and Graphics/assignment_08_mission_04_b/assignment_08_mission_04.pde`,name:`assignment_08_mission_04.pde`,size:398,code:`int x = 0;
int y = 0;
int spd = 40;

void setup() {
  size(800,800);
  background(0);
  frameRate(30);
}

void draw() {
  noStroke();
  fill(#000000,20);
  for (int j = 0; j < 20; j++) {
    for (int k = 0; k <20; k++) {
      rect(j*40,k*40,30,30);
    }
  }
  fill(255);
  rect(x,y,30,30);
  x += spd;
  if (x == 800 || x == -40) {
    y += 40;
    spd *= -1;
  } if (y == 800) {
    y = 0;
  }
}`},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-6-2016/assignment_09_mission_01/assignment_09_mission_01.pde`,name:`assignment_09_mission_01.pde`,size:229,code:`PImage img1;
PImage img2;
void setup() {
  size(500, 400);
  img1 = loadImage("howcansheslap.jpeg");
  img2 = loadImage("penguin.png");
}

void draw() {
  image(img1, 0, 0);
  image(img2, 300, 100, img2.width/3, img2.height/3);
}`},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-6-2016/assignment_09_mission_02/assignment_09_mission_02.pde`,name:`assignment_09_mission_02.pde`,size:283,code:`PImage img1;
PImage img2;
void setup() {
  size(500, 400);
  img1 = loadImage("howcansheslap.jpeg");
  img2 = loadImage("penguin.png");
}

void draw() {
  background(0);
  tint(255);
  image(img1, 0, 0);
  tint(255, 127);
  image(img2, mouseX, mouseY, img2.width/3, img2.height/3);
}`},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-6-2016/assignment_09_mission_03/assignment_09_mission_03.pde`,name:`assignment_09_mission_03.pde`,size:0,code:``},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-7-2016/assignment_09_mission_03/assignment_09_mission_03.pde`,name:`assignment_09_mission_03.pde`,size:589,code:`PImage img;
int x;
int y;
float t = 150;
int spd = 1;

void setup() {
  size(600,800);
  img = loadImage("cafeterrace.jpg");
}

void draw() {
  background(0);
  
  // roof of cafe
  noStroke();
  fill(#DBB20B);
  beginShape();
  vertex(155,197);
  vertex(331,272);
  vertex(310,400);
  vertex(222,368);
  vertex(135,202);
  vertex(120,197);
  vertex(99,150);
  vertex(140,164);
  endShape(CLOSE);
  
  if (mousePressed == true) {
    tint(255,t);
    image(img,0,0,600,800);
    x = mouseX;
    y = mouseY;
  }
  t += spd;
  if (t == 255 || t == 100) {
    spd *= -1;
  }
  println(x,y);
}`},{path:`/2016/LESSONS/lesson_01_Shapes_and_Fills/lesson_01_Shapes_Fills/lesson_01_Shapes_Fills.pde`,name:`lesson_01_Shapes_Fills.pde`,size:236,code:`size (600,400); // size of the window (width, height)
background(50);

fill(#34F7A4);
stroke(127,255,255);
strokeWeight(8);
ellipse(200,200,50,50);
ellipse(400,100,120,60);

fill(255,127,127);
stroke(255,127,255);
rect(300,200,150,100);`},{path:`/2016/LESSONS/lesson_02_Movement/lesson_02_Movement.pde`,name:`lesson_02_Movement.pde`,size:673,code:`int Face1 = 300;
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

}`},{path:`/2016/LESSONS/lesson_03_functions_01/lesson_03_functions_01.pde`,name:`lesson_03_functions_01.pde`,size:591,code:`color brush = #FFFFFF;

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
}`},{path:`/2016/LESSONS/lesson_04_functions_02/lesson_04_functions_02.pde`,name:`lesson_04_functions_02.pde`,size:257,code:`void setup() {
  size(800,500);
  background(#000000);
  textSize(72);
  text(addThemUp(9,9,9), 350, 100);
  text(addThemUp(1,2,3), 350, 200);
}

int addThemUp(int number1, int number2, int number3) {
  int sum = number1 + number2 + number3;
  return sum;
}`},{path:`/2016/LESSONS/lesson_05_functions_03/lesson_05_functions_03.pde`,name:`lesson_05_functions_03.pde`,size:447,code:`void setup() {
  size(800,500);
  background(#000000);
  strokeWeight(5);
  stroke(#FFFFFF);
  line(200,300,500,100);
  line(200,300,500,300);
  line(500,100,500,300);
  textSize(48);
  text(hypotenuse(200,300,500,100),100,150);
  text(500-200, 300, 400);
  text(300-100, 550, 200);
}

float hypotenuse(int x1, int y1, int x2, int y2) {
  float num1 = sq(x2 - x1);
  float num2 = sq(y2 - y1);
  float number = sqrt(num1 + num2);
  return number;
}`},{path:`/2016/LESSONS/lesson_06_color_hit_detection/lesson_06_color_hit_detection.pde`,name:`lesson_06_color_hit_detection.pde`,size:232,code:`void setup() {
  size(600,400);
}

void draw() {
  background(255);
  fill(255,0,0);
  rect(50,100,100,50);

  if (get(mouseX,mouseY) == color(255,0,0)) {
    print("hello");
  }
  
  fill(0,255,0);
  ellipse(mouseX,mouseY,10,10);
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/ICS20_Nguyen,Vincent_Q-06 Mission 08/Quiz_06_Mission_08/Quiz_06_Mission_08.pde`,name:`Quiz_06_Mission_08.pde`,size:1040,code:`int xpos1 = 0;
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
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/Quiz_06_Mission_01/Quiz_06_Mission_01.pde`,name:`Quiz_06_Mission_01.pde`,size:59,code:`void setup() {
  size(400,300);
  background(#ABDDE5);
  
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/Quiz_06_Mission_02/Quiz_06_Mission_02.pde`,name:`Quiz_06_Mission_02.pde`,size:118,code:`void setup() {
  size(400,300);
  background(#ABDDE5);
}

void draw() {
  fill(#90E59D);
  ellipse(200,150,100,100);
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/Quiz_06_Mission_03/Quiz_06_Mission_03.pde`,name:`Quiz_06_Mission_03.pde`,size:161,code:`void setup() {
  size(400,300);
  background(#ABDDE5);
}

void draw() {
  fill(#90E59D);
  ellipse(200,150,100,100);
  
  fill(#F23D3D);
  rect(160,110,80,80);
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/Quiz_06_Mission_04/Quiz_06_Mission_04.pde`,name:`Quiz_06_Mission_04.pde`,size:262,code:`int xpos = 0;

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
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/Quiz_06_Mission_05/Quiz_06_Mission_05.pde`,name:`Quiz_06_Mission_05.pde`,size:381,code:`int xpos = 0;
int ypos = 110;
int yspeed = 3;

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
  rect(160,ypos,80,80);
  ypos += yspeed;
  
  if (ypos >= 220 || ypos <= 0) {
    yspeed = yspeed*-1;
  }
  
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/Quiz_06_Mission_06/Quiz_06_Mission_06.pde`,name:`Quiz_06_Mission_06.pde`,size:433,code:`int xpos = 0;
int ypos = 110;
int yspeed = 3;

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
  rect(160,ypos,80,80);
  ypos += yspeed;
  
  if (ypos >= 220 || ypos <= 0) {
    yspeed = yspeed*-1;
  }
  
  fill(#90E59D);
  ellipse(mouseX,mouseY,20,20);
  
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/Quiz_06_Mission_07/Quiz_06_Mission_07.pde`,name:`Quiz_06_Mission_07.pde`,size:621,code:`int xpos = 0;
int ypos = 110;
int yspeed = 3;
color c1 = #ABDDE5;

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
  ellipse(xpos,150,20,20);
  xpos += 1;
  
  fill(#F23D3D);
  rect(160,ypos,80,80);
  ypos += yspeed;
  
  if (ypos >= 220 || ypos <= 0) {
    yspeed = yspeed*-1;
  }
  
  fill(#90E59D);
  ellipse(mouseX,mouseY,20,20);
  
}`},{path:`/2016/QUIZZES/Q-06 Processing 1/Quiz_06_Mission_08/Quiz_06_Mission_08.pde`,name:`Quiz_06_Mission_08.pde`,size:1040,code:`int xpos1 = 0;
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
}`},{path:`/2016/QUIZZES/Q-07 Processing 2/ICS2O_Nguyen,Vincent_Q-07 Processing 02/Q02_mission_01/Q02_mission_01.pde`,name:`Q02_mission_01.pde`,size:306,code:`void setup() {
  size(400, 400);
  noStroke();
  fill(255, 0, 0);
  rect(50, 50, 200, 200);
  fill(0, 255, 0);
  ellipse(width/2, height/2, 100, 100);
  stroke(#000000); // Negates the noStroke() command previously, this allows the line() to have a black stroke
  strokeWeight(4);
  line(0, 0, 400, 400);
}`},{path:`/2016/QUIZZES/Q-07 Processing 2/ICS2O_Nguyen,Vincent_Q-07 Processing 02/Q02_mission_02/Q02_mission_02.pde`,name:`Q02_mission_02.pde`,size:555,code:`int xLocation = 0;
int xSpeed = 5; // The integer was set at 0. The location of the rectangle will not change if the speed is set to 0.

void setup() {
  size(600, 500);
  rectMode(CENTER);
  noStroke();
}

void draw() {
  background(227);
  
  xLocation += xSpeed;
  
  // Bouncing off the walls
  if ((xLocation > width) || (xLocation < 0)) {
    xSpeed = -1*xSpeed;
  }

  fill(255, 255, 255);
  ellipse(width/2, height/2, 100, 75);
  
  fill(255, 0, 0);
  rect(xLocation, 250, 50, 100);

  fill(245, 255, 113);
  ellipse(width/2, height/2, 30, 30);
} `},{path:`/2016/QUIZZES/Q-07 Processing 2/ICS2O_Nguyen,Vincent_Q-07 Processing 02/Q02_mission_03/Q02_mission_03.pde`,name:`Q02_mission_03.pde`,size:614,code:`void setup() {
  size(400, 400);
  // background(255); Background was previously white. 
  background(#000000); // White on white is not easy to differentiate. We'll change it to black.
  noStroke();
  frameRate(15);
} 

void draw() {
  //for (int k = 0; k < 8; k++) { // rows. Original code set to 8
    //for (int j = 0; j < 10; j++) { // columns. Original code set to 10
  for (int k = 0; k < 10; k++) { // However, we want 10 rows and 8 columns, not the other way around
    for (int j = 0; j < 8; j++) { // So let's change that :)
      fill(255,255,255);
      ellipse(j*35+20, k*35+20, 30, 30);
    }
  }
}
`},{path:`/2016/QUIZZES/Q-07 Processing 2/ICS2O_Nguyen,Vincent_Q-07 Processing 02/Q02_mission_04/Q02_mission_04.pde`,name:`Q02_mission_04.pde`,size:645,code:`int x = 100;
int y = 100;

void setup() {
  size(400, 400);
  background(255, 240, 240); 
  rect(x, y, 40, 40);
}

void draw() {
  fill(255, 0, 0);
  rect(x, y, 40, 40);

  // fill(255, 240, 240, 50); Prevous code that redrew a transparent rectangle to create a trail effect
  fill(255, 240, 240, 25); // To make the trail longer, we increase the transparency so it needs to redraw more times to clean up the trail
  rect(0, 0, 400, 400);
}

void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + 10;
  }

  if (keyCode == DOWN) {
    y = y + 10;
  }

  if (keyCode == LEFT) {
    x = x - 10;
  }

  if (keyCode == UP) {
    y = y - 10;
  }
}`},{path:`/2016/QUIZZES/Q-07 Processing 2/ICS2O_Nguyen,Vincent_Q-07 Processing 02/Q02_mission_05/Q02_mission_05.pde`,name:`Q02_mission_05.pde`,size:849,code:`int x = 100;
int y = 100;

void setup() {
  size(400, 400);
  background(255, 240, 240); 
  rect(x, y, 40, 40);
}

void draw() {
  fill(255, 0, 0);
  rect(x, y, 40, 40);

  // fill(255, 240, 240, 50); Prevous code that redrew a transparent rectangle to create a trail effect
  fill(255, 240, 240, 25); // To make the trail longer, we increase the transparency so it needs to redraw more times to clean up the trail
  rect(0, 0, 400, 400);
  
  // 5. The program creates a comet trail by adding a transparent layer
  // that frequently redraws itself to convey the illusion of the previous
  // squares slowly disappearing into the background.
}

void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + 10;
  }

  if (keyCode == DOWN) {
    y = y + 10;
  }

  if (keyCode == LEFT) {
    x = x - 10;
  }

  if (keyCode == UP) {
    y = y - 10;
  }
}`},{path:`/2016/QUIZZES/Q-07 Processing 2/ICS2O_Nguyen,Vincent_Q-07 Processing 02/Q02_mission_06/Q02_mission_06.pde`,name:`Q02_mission_06.pde`,size:714,code:`float xpos1 = 100;
float ypos1 = 0;
float bSpeedX = 3;
float bSpeedY = 2;

float xpos2 = 150;
float ypos2 = 430;

void setup() {
  size(400,500);
  background(#35304D);
}

void draw() {
  background(#35304D);
  
  fill(#FFFFFF);
  noStroke();
  ellipse(xpos1,ypos1,20,20);
  
  rect(xpos2,ypos2,100,20);
  
  xpos1 += bSpeedX;
  ypos1 += bSpeedY;
  
  if (xpos1 > width || xpos1 < 0) {
    bSpeedX *= -1;
  } if (ypos1 < 0 || ypos1 < 450 && ypos1 > 430 && xpos1 > xpos2 && xpos1 < xpos2 + 100) {
    bSpeedY *= -1;
  } if (ypos1 > height) {
    textSize(64);
    text("GAME OVER", 0, height/2);
  }
}

void keyPressed() {
  if (keyCode == RIGHT) {
    xpos2 += 10;
  } if (keyCode == LEFT) {
    xpos2 -= 10;
  }
}`},{path:`/2016/QUIZZES/Q-07 Processing 2/Q02_mission_01/Q02_mission_01.pde`,name:`Q02_mission_01.pde`,size:306,code:`void setup() {
  size(400, 400);
  noStroke();
  fill(255, 0, 0);
  rect(50, 50, 200, 200);
  fill(0, 255, 0);
  ellipse(width/2, height/2, 100, 100);
  stroke(#000000); // Negates the noStroke() command previously, this allows the line() to have a black stroke
  strokeWeight(4);
  line(0, 0, 400, 400);
}`},{path:`/2016/QUIZZES/Q-07 Processing 2/Q02_mission_02/Q02_mission_02.pde`,name:`Q02_mission_02.pde`,size:555,code:`int xLocation = 0;
int xSpeed = 5; // The integer was set at 0. The location of the rectangle will not change if the speed is set to 0.

void setup() {
  size(600, 500);
  rectMode(CENTER);
  noStroke();
}

void draw() {
  background(227);
  
  xLocation += xSpeed;
  
  // Bouncing off the walls
  if ((xLocation > width) || (xLocation < 0)) {
    xSpeed = -1*xSpeed;
  }

  fill(255, 255, 255);
  ellipse(width/2, height/2, 100, 75);
  
  fill(255, 0, 0);
  rect(xLocation, 250, 50, 100);

  fill(245, 255, 113);
  ellipse(width/2, height/2, 30, 30);
} `},{path:`/2016/QUIZZES/Q-07 Processing 2/Q02_mission_03/Q02_mission_03.pde`,name:`Q02_mission_03.pde`,size:614,code:`void setup() {
  size(400, 400);
  // background(255); Background was previously white. 
  background(#000000); // White on white is not easy to differentiate. We'll change it to black.
  noStroke();
  frameRate(15);
} 

void draw() {
  //for (int k = 0; k < 8; k++) { // rows. Original code set to 8
    //for (int j = 0; j < 10; j++) { // columns. Original code set to 10
  for (int k = 0; k < 10; k++) { // However, we want 10 rows and 8 columns, not the other way around
    for (int j = 0; j < 8; j++) { // So let's change that :)
      fill(255,255,255);
      ellipse(j*35+20, k*35+20, 30, 30);
    }
  }
}
`},{path:`/2016/QUIZZES/Q-07 Processing 2/Q02_mission_04/Q02_mission_04.pde`,name:`Q02_mission_04.pde`,size:645,code:`int x = 100;
int y = 100;

void setup() {
  size(400, 400);
  background(255, 240, 240); 
  rect(x, y, 40, 40);
}

void draw() {
  fill(255, 0, 0);
  rect(x, y, 40, 40);

  // fill(255, 240, 240, 50); Prevous code that redrew a transparent rectangle to create a trail effect
  fill(255, 240, 240, 25); // To make the trail longer, we increase the transparency so it needs to redraw more times to clean up the trail
  rect(0, 0, 400, 400);
}

void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + 10;
  }

  if (keyCode == DOWN) {
    y = y + 10;
  }

  if (keyCode == LEFT) {
    x = x - 10;
  }

  if (keyCode == UP) {
    y = y - 10;
  }
}`},{path:`/2016/QUIZZES/Q-07 Processing 2/Q02_mission_05/Q02_mission_05.pde`,name:`Q02_mission_05.pde`,size:849,code:`int x = 100;
int y = 100;

void setup() {
  size(400, 400);
  background(255, 240, 240); 
  rect(x, y, 40, 40);
}

void draw() {
  fill(255, 0, 0);
  rect(x, y, 40, 40);

  // fill(255, 240, 240, 50); Prevous code that redrew a transparent rectangle to create a trail effect
  fill(255, 240, 240, 25); // To make the trail longer, we increase the transparency so it needs to redraw more times to clean up the trail
  rect(0, 0, 400, 400);
  
  // 5. The program creates a comet trail by adding a transparent layer
  // that frequently redraws itself to convey the illusion of the previous
  // squares slowly disappearing into the background.
}

void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + 10;
  }

  if (keyCode == DOWN) {
    y = y + 10;
  }

  if (keyCode == LEFT) {
    x = x - 10;
  }

  if (keyCode == UP) {
    y = y - 10;
  }
}`},{path:`/2016/QUIZZES/Q-07 Processing 2/Q02_mission_06/Q02_mission_06.pde`,name:`Q02_mission_06.pde`,size:714,code:`float xpos1 = 100;
float ypos1 = 0;
float bSpeedX = 3;
float bSpeedY = 2;

float xpos2 = 150;
float ypos2 = 430;

void setup() {
  size(400,500);
  background(#35304D);
}

void draw() {
  background(#35304D);
  
  fill(#FFFFFF);
  noStroke();
  ellipse(xpos1,ypos1,20,20);
  
  rect(xpos2,ypos2,100,20);
  
  xpos1 += bSpeedX;
  ypos1 += bSpeedY;
  
  if (xpos1 > width || xpos1 < 0) {
    bSpeedX *= -1;
  } if (ypos1 < 0 || ypos1 < 450 && ypos1 > 430 && xpos1 > xpos2 && xpos1 < xpos2 + 100) {
    bSpeedY *= -1;
  } if (ypos1 > height) {
    textSize(64);
    text("GAME OVER", 0, height/2);
  }
}

void keyPressed() {
  if (keyCode == RIGHT) {
    xpos2 += 10;
  } if (keyCode == LEFT) {
    xpos2 -= 10;
  }
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/ICS2O_Nguyen,Vincent_Quiz8 Processing/Q_08_Mission_01/Q_08_Mission_01.pde`,name:`Q_08_Mission_01.pde`,size:565,code:`void setup() {
  size(400,400);
  background(0);
  for (int j = 0; j < 20; j++) { //repeats until 20 lines have been created
    VertLine(j*20);
    HoriLine(j*20); // <-- pretty crappy name
  }
  
}

void VertLine(int x) { //function to create a vertical line using one x coord
  stroke(random(255),random(255),random(255)); //i am random :)
  strokeWeight(3);
  line(x,0,x,400);
}

void HoriLine(int y) { //function to create a vertical line using one y coord
  stroke(random(255),random(255),random(255)); //random colors?
  strokeWeight(3);
  line(0,y,400,y);
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/ICS2O_Nguyen,Vincent_Quiz8 Processing/Q_08_Mission_02/Q_08_Mission_02.pde`,name:`Q_08_Mission_02.pde`,size:486,code:`void setup() {
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
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/ICS2O_Nguyen,Vincent_Quiz8 Processing/Q_08_Mission_03/Q_08_Mission_03.pde`,name:`Q_08_Mission_03.pde`,size:308,code:`int x = 0;
int spd = 20;

void setup() {
  size(400,400);
  background(0);
  frameRate(20);
  
}

void draw() {
  for (int j = 0; j < 20; j++) {
    noStroke();
    fill(#FF0000);
    ellipse(j*20,190,15,15);
  }
  fill(0);
  ellipse(x,190,15,15);
  x += spd;
  if (x > width || x < 0) {
    spd *= -1;
  }
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/ICS2O_Nguyen,Vincent_Quiz8 Processing/Q_08_Mission_04/Q_08_Mission_04.pde`,name:`Q_08_Mission_04.pde`,size:358,code:`void setup() {
  size(400,400);
  background(255);
  Car();
}

void Car() {
  noStroke();
  fill(#0092FF);
  //car
  beginShape();
  vertex(110,150);
  vertex(100,200);
  vertex(300,200);
  vertex(280,150);
  vertex(250,150);
  vertex(230,100);
  vertex(180,100);
  endShape(CLOSE);
  //wheels
  fill(0);
  ellipse(150,200,50,50);
  ellipse(250,200,50,50);
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/ICS2O_Nguyen,Vincent_Quiz8 Processing/Q_08_Mission_05/Q_08_Mission_05.pde`,name:`Q_08_Mission_05.pde`,size:277,code:`void setup() {
  size(400,400);
  background(255);
  frameRate(10);
}

void draw() {
  fill(#FFFFFF,20);
  rect(0,0,400,400);
  rain();
}

void rain() {
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(random(400),random(400),random(10,30),random(10,30));
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/ICS2O_Nguyen,Vincent_Quiz8 Processing/Q_08_Mission_06/Q_08_Mission_06.pde`,name:`Q_08_Mission_06.pde`,size:368,code:`void setup() {
  size(400,400);
  background(255);
  frameRate(10);
}

void draw() {
  fill(#FFFFFF,20);
  rect(0,0,400,400);
  rain();
}

void rain() {
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(random(30,370),random(30,370),random(10,30),random(10,30));
  // adjusted the x and y so that the largest circle(30) will never leave the screen
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/Q_08_Mission_01/Q_08_Mission_01.pde`,name:`Q_08_Mission_01.pde`,size:565,code:`void setup() {
  size(400,400);
  background(0);
  for (int j = 0; j < 20; j++) { //repeats until 20 lines have been created
    VertLine(j*20);
    HoriLine(j*20); // <-- pretty crappy name
  }
  
}

void VertLine(int x) { //function to create a vertical line using one x coord
  stroke(random(255),random(255),random(255)); //i am random :)
  strokeWeight(3);
  line(x,0,x,400);
}

void HoriLine(int y) { //function to create a vertical line using one y coord
  stroke(random(255),random(255),random(255)); //random colors?
  strokeWeight(3);
  line(0,y,400,y);
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/Q_08_Mission_02/Q_08_Mission_02.pde`,name:`Q_08_Mission_02.pde`,size:486,code:`void setup() {
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
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/Q_08_Mission_03/Q_08_Mission_03.pde`,name:`Q_08_Mission_03.pde`,size:308,code:`int x = 0;
int spd = 20;

void setup() {
  size(400,400);
  background(0);
  frameRate(20);
  
}

void draw() {
  for (int j = 0; j < 20; j++) {
    noStroke();
    fill(#FF0000);
    ellipse(j*20,190,15,15);
  }
  fill(0);
  ellipse(x,190,15,15);
  x += spd;
  if (x > width || x < 0) {
    spd *= -1;
  }
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/Q_08_Mission_04/Q_08_Mission_04.pde`,name:`Q_08_Mission_04.pde`,size:358,code:`void setup() {
  size(400,400);
  background(255);
  Car();
}

void Car() {
  noStroke();
  fill(#0092FF);
  //car
  beginShape();
  vertex(110,150);
  vertex(100,200);
  vertex(300,200);
  vertex(280,150);
  vertex(250,150);
  vertex(230,100);
  vertex(180,100);
  endShape(CLOSE);
  //wheels
  fill(0);
  ellipse(150,200,50,50);
  ellipse(250,200,50,50);
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/Q_08_Mission_05/Q_08_Mission_05.pde`,name:`Q_08_Mission_05.pde`,size:277,code:`void setup() {
  size(400,400);
  background(255);
  frameRate(10);
}

void draw() {
  fill(#FFFFFF,20);
  rect(0,0,400,400);
  rain();
}

void rain() {
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(random(400),random(400),random(10,30),random(10,30));
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/Q_08_Mission_06/Q_08_Mission_06.pde`,name:`Q_08_Mission_06.pde`,size:368,code:`void setup() {
  size(400,400);
  background(255);
  frameRate(10);
}

void draw() {
  fill(#FFFFFF,20);
  rect(0,0,400,400);
  rain();
}

void rain() {
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(random(30,370),random(30,370),random(10,30),random(10,30));
  // adjusted the x and y so that the largest circle(30) will never leave the screen
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/for pat/Q_08_Mission_01/Q_08_Mission_01.pde`,name:`Q_08_Mission_01.pde`,size:565,code:`void setup() {
  size(400,400);
  background(0);
  for (int j = 0; j < 20; j++) { //repeats until 20 lines have been created
    VertLine(j*20);
    HoriLine(j*20); // <-- pretty crappy name
  }
  
}

void VertLine(int x) { //function to create a vertical line using one x coord
  stroke(random(255),random(255),random(255)); //i am random :)
  strokeWeight(3);
  line(x,0,x,400);
}

void HoriLine(int y) { //function to create a vertical line using one y coord
  stroke(random(255),random(255),random(255)); //random colors?
  strokeWeight(3);
  line(0,y,400,y);
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/for pat/Q_08_Mission_02/Q_08_Mission_02.pde`,name:`Q_08_Mission_02.pde`,size:486,code:`void setup() {
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
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/for pat/Q_08_Mission_03/Q_08_Mission_03.pde`,name:`Q_08_Mission_03.pde`,size:308,code:`int x = 0;
int spd = 20;

void setup() {
  size(400,400);
  background(0);
  frameRate(20);
  
}

void draw() {
  for (int j = 0; j < 20; j++) {
    noStroke();
    fill(#FF0000);
    ellipse(j*20,190,15,15);
  }
  fill(0);
  ellipse(x,190,15,15);
  x += spd;
  if (x > width || x < 0) {
    spd *= -1;
  }
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/for pat/Q_08_Mission_04/Q_08_Mission_04.pde`,name:`Q_08_Mission_04.pde`,size:358,code:`void setup() {
  size(400,400);
  background(255);
  Car();
}

void Car() {
  noStroke();
  fill(#0092FF);
  //car
  beginShape();
  vertex(110,150);
  vertex(100,200);
  vertex(300,200);
  vertex(280,150);
  vertex(250,150);
  vertex(230,100);
  vertex(180,100);
  endShape(CLOSE);
  //wheels
  fill(0);
  ellipse(150,200,50,50);
  ellipse(250,200,50,50);
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/for pat/Q_08_Mission_05/Q_08_Mission_05.pde`,name:`Q_08_Mission_05.pde`,size:277,code:`void setup() {
  size(400,400);
  background(255);
  frameRate(10);
}

void draw() {
  fill(#FFFFFF,20);
  rect(0,0,400,400);
  rain();
}

void rain() {
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(random(400),random(400),random(10,30),random(10,30));
}`},{path:`/2016/QUIZZES/Q-08 Processing 3/for pat/Q_08_Mission_06/Q_08_Mission_06.pde`,name:`Q_08_Mission_06.pde`,size:368,code:`void setup() {
  size(400,400);
  background(255);
  frameRate(10);
}

void draw() {
  fill(#FFFFFF,20);
  rect(0,0,400,400);
  rain();
}

void rain() {
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(random(30,370),random(30,370),random(10,30),random(10,30));
  // adjusted the x and y so that the largest circle(30) will never leave the screen
}`},{path:`/2016/SUMMATIVE/ICS2O_Nguyen_Vincent_Summative_02/ICS2O_Nguyen_Vincent_Summative_02.pde`,name:`ICS2O_Nguyen_Vincent_Summative_02.pde`,size:8421,code:`// TRON GAME
int GameMode = 0; //Main variable that's used to seperate draw into different sections. It's how I make 'stages' of the game. These include the start screen, game, and end screen
boolean clicked = false; //workaround so that my mousePressed will only detect one click
boolean stars = false; //variable so that the random star creation of my background only activates once. It's another workaround.
boolean score = false; //score is initially invisible at the beginning... because there is no score. On replay, score is enabled!
int score1 = 0; //player juan's score
int score2 = 0; //player two's score
int winner; //variable to show who iz ze winner, hon hon hon! ;D
color title = #FF0040; //color variable so the title changes colour... because i want it to.

int xpos1 = 0; //var. for left player's x position
int ypos1 = 245; //var. for left player's y position
String direction1 = "right"; //var. for left player's direction

int xpos2 = 595; //var. for right player's x position
int ypos2 = 245; //var. for right player's y position
String direction2 = "left"; //var. for right player's direction

void setup() { //setup jazz
  size(600, 500); //size of window :o omg
  background(0); //black background... this actually isn't needed. I should get rid of it.
  frameRate(30); //game too fast? half the framerate! :D good solution
}

void draw() { //where all the magic happens. Repeating smooth jazz goes here

  // if Gamemode = 0, Welcome to START SCREEN!
  if (GameMode == 0) {
    background(0); //black background... this is needed
    
    title += 3; //make the cool colour change
    textAlign(CENTER, CENTER); //aligns the text to the center because thats how i like it
    
    fill(title); //colour of the title changes! 
    textSize(48); //big text size
    text("ELYSIAN ECHOES", 300, 50); //title :) 
    
    fill(#FFFFFF); //white
    textSize(28); //biggish
    text("Instructions", 300, 130); //yay
    textSize(18); //smaller
    text("The objective is to eliminate your opponent", 300, 170); //thats not nice
    text("You can accomplish this by making them hit your light-trail", 300, 200); //what is a light trail?
    text("     Just make sure,         don't hit theirs...    ", 300, 230); //big space?
    fill(#FF0040); //red
    text("YOU", 300, 230); //oh... that's cool.
    
    fill(#FFFFFF); //white again
    textSize(28); //biggish again
    text("Controls", 300, 270); //just so you know
    fill(#FF0040); //red again
    textSize(18); //smaller again
    text("Player One uses WASD to control the direction of their machine", 300, 310); //player juan!
    fill(#009BFF); //blue again
    text("Player Two uses the arrow keys to do the same", 300, 340); //player two
    fill(#FFFFFF); //white again again
    text("Now, FIGHT! May the best pilot win...", 300, 370); //woohoo lets go
    
    fill(#FFFFFF);
    textSize(28);
    text("Click or press Enter to start", 300, 450); //final instructions

    if (clicked || keyPressed == true && key == ENTER) { // if command to detect click or 'ENTER' keypress
      GameMode = 1; //change gamemode, go on to next stage
      background(0); //black background again, basically refresh
      clicked = false; //to prevent multiple clicks
    }
  }

  // ACTUAL GAME
  if (GameMode == 1) { //the REAL game starts now
  
  
    //this jazz makes the cool background!
    if (stars == false) { //boolean to prevent it from repeating
      for (int j = 0; j < 300; j++) { //we need 300 stars
        Cubes(); //custom function yay! makin' stars
      }
      stars = true; //prevent it from happening again until later
    }
    
    
    //This jazz enables and shows the scoreboard
    if (score == true) { //If score variable is true, SHOW the score! :D
      textSize(28); //good size... in my opinion anyway

      //player one's score :)
      fill(#FF0040); //red
      textAlign(LEFT); //aligned to the left side
      text(str(score1), 20, 40); //shows the player's score, converted to string first

      //player two's score :c
      fill(#009BFF); //blue
      textAlign(RIGHT); //aligned to the right side
      text(str(score2), 580, 40); //shows the player's score, converted to string first
    }


    // FIRST RECTANGLE
    fill(#FF0040); // red
    rect(xpos1, ypos1, 5, 5); //basically starting positions
    // SECOND RECTANGLE
    fill(#009BFF); // blue
    rect(xpos2, ypos2, 5, 5); //same as before
    // Movement function
    Move(); // this makes them move! wanna learn how it works? scroll down.


    // GAME OVER FUNCTION
    if (get(xpos1, ypos1) == color(#FF0040) || get(xpos1, ypos1) == color(#009BFF) || xpos1 < 0 || xpos1 >= 600 || ypos1 < 0 || ypos1 >= 500) { //If player one hits itself or player two's trail, or if player one hits the wall
      GameMode = 2; //end game
      winner = 2; //sets player two as winner
      score2 += 1; //adds to player two's score
    } else if (get(xpos2, ypos2) == color(#FF0040) || get(xpos2, ypos2) == color(#009BFF) || xpos2 < 0 || xpos2 >= 600 || ypos2 < 0 || ypos2 >= 500) { //If player two hits itself or player one's trail, or if player two hits the wall
      GameMode = 2; //end game
      winner = 1; //sets player one as winner
      score1 += 1; //adds to player one's score
    }
  }

  // if GameMode = 2, Welcome to GAME OVER SCREEN!
  if (GameMode == 2) {
    //Darkens the screen... because im edgy like that
    noStroke();
    fill(#000000, 10);
    rect(0, 0, 600, 500); //covers the entire screen, spooky!

    //Text COLOURO
    if (winner == 1) { //picks colour based on winner, hon hon hon ^('-')^
      fill(#FF0040);
    } else if (winner == 2) {
      fill(#009BFF);
    }
    
    //Text STARTO
    textSize(48);
    textAlign(CENTER);
    text("Player " + str(winner) + " has won!", width/2, height/2); //ancounces the winner! hooray

    fill(#FFFFFF);
    textSize(28);
    text("Click or press Enter to restart", width/2, height/2 + 50); //play again? :)

    //CODE TO RESTART THE GAME! YES?
    if (clicked || keyPressed == true && key == ENTER) {
      background(0);
      score = true;
      clicked = false;
      stars = false;
      xpos1 = 0;
      ypos1 = 245;
      xpos2 = 595;
      ypos2 = 245;
      direction1 = "right";
      direction2 = "left";
      GameMode = 1; // i dont want to explain this part. in short, reset every value.
    }
  }
}




void mousePressed() { //heheh cheeky workaround code here
  clicked = true; //juan click only
}



void keyPressed() { //this determines all of the directions + prevents players from doing a 180 degree reversal

  //player one
  if (key == 'w' && direction1 != "down" || key == 'W' && direction1 != "down") { //if key is pressed, this is direction... repeat 8 times.
    direction1 = "up";
  }
  if (key == 's' && direction1 != "up" || key == 'S' && direction1 != "up") { //repeat
    direction1 = "down";
  }
  if (key == 'a' && direction1 != "right" || key == 'A' && direction1 != "right") { //repeat
    direction1 = "left";
  }
  if (key == 'd' && direction1 != "left" || key == 'D' && direction1 != "left") { //repeat
    direction1 = "right";
  }
  

  //player two
  if (key == CODED) {
    if (keyCode == UP && direction2 != "down") { //repeat
      direction2 = "up";
    } 
    if (keyCode == DOWN && direction2 != "up") { //repeat
      direction2 = "down";
    }
    if (keyCode == LEFT && direction2 != "right") { //repeat
      direction2 = "left";
    }
    if (keyCode == RIGHT && direction2 != "left") { //repeat
      direction2 = "right";
    }
  }
}

void Move() { //moves players based on direction... this really isn't that complicated
  // player one
  if (direction1 == "right") {
    xpos1 += 5;
  } 
  if (direction1 == "left") {
    xpos1 += -5;
  } 
  if (direction1 == "up") {
    ypos1 += -5;
  } 
  if (direction1 == "down") {
    ypos1 += 5;
  }
  // player two
  if (direction2 == "right") {
    xpos2 += 5;
  } 
  if (direction2 == "left") {
    xpos2 += -5;
  } 
  if (direction2 == "up") {
    ypos2 += -5;
  } 
  if (direction2 == "down") {
    ypos2 += 5;
  }
}

void Cubes() { //random function that creates small tiny, insignificant cubes... like me
  float r;
  r = random(180);
  noStroke();
  fill(random(255), random(255), random(255));
  rotate(r);
  rect(random(10, 600), random(10, 500), random(1, 3), random(1, 3));
  rotate(-r);
}

// and that's it. thank you for reading my story :)
// - Vincent Nguyen`},{path:`/2016/SUMMATIVE/Summative_2/Summative_2.pde`,name:`Summative_2.pde`,size:5161,code:`// TRON GAME
int GameMode = 0; //Main variable that's used to seperate draw into different sections. It's how I make 'stages' of the game. These include the start screen, game, and end screen
boolean clicked = false; //workaround so that my mousePressed will only detect one click
boolean stars = false; //variable so that the random star creation of my background only activates once. It's another workaround.
boolean score = false; //score is initially invisible at the beginning... because there is no score. On replay, score is enabled!
int score1 = 0; //player juan's score
int score2 = 0; //player two's score
int winner; //variable to show who iz ze winner, hon hon hon! ;D

int xpos1 = 0;
int ypos1 = 245;
String direction1 = "right";

int xpos2 = 595;
int ypos2 = 245;
String direction2 = "left";

void setup() {
  size(600, 500);
  background(0);
  frameRate(30);
}

void draw() {

  // START SCREEN
  if (GameMode == 0) {
    background(0);
    textSize(28);
    textAlign(CENTER, BOTTOM);
    text("Click or press Enter to start", width/2, height/2);
    if (clicked || keyPressed == true && key == ENTER) {
      GameMode = 1;
      background(0);
      clicked = false;
    }
  }

  // ACTUAL GAME
  if (GameMode == 1) {
    if (stars == false) {
      for (int j = 0; j < 300; j++) {
        Cubes();
      }
      stars = true;
    }

    if (score == true) { //If score variable is true, SHOW the score! :D
      textSize(28); //good size... in my opinion anyway

      //player one's score :)
      fill(#FF0040); //red
      textAlign(LEFT); //aligned to the left side
      text(str(score1), 20, 40); //shows the player's score, converted to string first
      
      //player two's score :c
      fill(#009BFF); //blue
      textAlign(RIGHT); //aligned to the right side
      text(str(score2), 580, 40); //shows the player's score, converted to string first
    }

    // FIRST RECTANGLE
    fill(#FF0040); // red
    rect(xpos1, ypos1, 5, 5);

    // SECOND RECTANGLE
    fill(#009BFF); // blue
    rect(xpos2, ypos2, 5, 5);

    // Movement function
    Move();

    // GAME OVER FUNCTION
    if (get(xpos1, ypos1) == color(#FF0040) || get(xpos1, ypos1) == color(#009BFF) || xpos1 < 0 || xpos1 >= 600 || ypos1 < 0 || ypos1 >= 500) { //If player one hits itself or player two's trail, or if player one hits the wall
      GameMode = 2; //end game
      winner = 2; //sets player two as winner
      score2 += 1; //adds to player two's score
    } else if (get(xpos2, ypos2) == color(#FF0040) || get(xpos2, ypos2) == color(#009BFF) || xpos2 < 0 || xpos2 >= 600 || ypos2 < 0 || ypos2 >= 500) { //If player two hits itself or player one's trail, or if player two hits the wall
      GameMode = 2; //end game
      winner = 1; //sets player one as winner
      score1 += 1; //adds to player one's score
    }
  }

  // GAME OVER SCREEN
  if (GameMode == 2) {
    //Darkens the screen
    noStroke();
    fill(#000000, 10);
    rect(0, 0, 600, 500);

    //Text
    if (winner == 1) {
      fill(#FF0040);
    } else if (winner == 2) {
      fill(#009BFF);
    }
    textSize(48);
    textAlign(CENTER);
    text("Player " + str(winner) + " has won!", width/2, height/2);

    fill(#FFFFFF);
    textSize(28);
    text("Click or press Enter to restart", width/2, height/2 + 50);

    if (clicked || keyPressed == true && key == ENTER) {
      background(0);
      score = true;
      clicked = false;
      stars = false;
      xpos1 = 0;
      ypos1 = 245;
      xpos2 = 595;
      ypos2 = 245;
      direction1 = "right";
      direction2 = "left";
      GameMode = 1;
    }
  }
}

void mousePressed() {
  clicked = true;
}

void keyPressed() {

  //player one
  if (key == 'w' && direction1 != "down" || key == 'W' && direction1 != "down") {
    direction1 = "up";
  }
  if (key == 's' && direction1 != "up" || key == 'S' && direction1 != "up") {
    direction1 = "down";
  }
  if (key == 'a' && direction1 != "right" || key == 'A' && direction1 != "right") {
    direction1 = "left";
  }
  if (key == 'd' && direction1 != "left" || key == 'D' && direction1 != "left") {
    direction1 = "right";
  }

  //player two
  if (key == CODED) {
    if (keyCode == UP && direction2 != "down") {
      direction2 = "up";
    }
    if (keyCode == DOWN && direction2 != "up") {
      direction2 = "down";
    }
    if (keyCode == LEFT && direction2 != "right") {
      direction2 = "left";
    }
    if (keyCode == RIGHT && direction2 != "left") {
      direction2 = "right";
    }
  }
}

void Move() {
  // player one
  if (direction1 == "right") {
    xpos1 += 5;
  } 
  if (direction1 == "left") {
    xpos1 += -5;
  } 
  if (direction1 == "up") {
    ypos1 += -5;
  } 
  if (direction1 == "down") {
    ypos1 += 5;
  }
  // player two
  if (direction2 == "right") {
    xpos2 += 5;
  } 
  if (direction2 == "left") {
    xpos2 += -5;
  } 
  if (direction2 == "up") {
    ypos2 += -5;
  } 
  if (direction2 == "down") {
    ypos2 += 5;
  }
}

void Cubes() {
  float r;
  r = random(180);
  noStroke();
  fill(random(255), random(255), random(255));
  rotate(r);
  rect(random(10, 600), random(10, 500), random(1, 3), random(1, 3));
  rotate(-r);
}`},{path:`/2017/Assignments/A02 - Funny Face/2-14-2017/Nguyen_Vincent_Assignment_02/Nguyen_Vincent_Assignment_02.pde`,name:`Nguyen_Vincent_Assignment_02.pde`,size:1483,code:`/*

 Assignment 02: Funny Face
 2/14/2017
 Vincent Nguyen
 
 */

float xPosHead, yPosHead, dxHead, dyHead;

float xPosMouth, yPosMouth, dxMouth, dyMouth;

float xPosNose, yPosNose, dxNose, dyNose;

float xPosEyeL, yPosEyeL, dxEyeL, dyEyeL, xPosEyeR, yPosEyeR, dxEyeR, dyEyeR;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);

  //Head
  xPosHead = width/2;
  yPosHead = height/2;
  dxHead = 350;
  dyHead = 275;

  //Mouth
  xPosMouth = width/2;
  yPosMouth = height/2 + 25/2;
  dxMouth = 200;
  dyMouth = 200;

  //Nose
  xPosNose = width/2;
  yPosNose = height/16*5 + height/32;
  dxNose = 100;
  dyNose = 125;

  //Eyes
  xPosEyeL = width/8*3 + width/64;
  yPosEyeL = height/8 + height/32;
  dxEyeL = 100;
  dyEyeL = 100;

  xPosEyeR = width/8*5 - width/64;
  yPosEyeR = height/8 + height/32;
  dxEyeR = 100;
  dyEyeR = 100;
}

void draw() {
  background(#343434);
  drawHead();
  drawMouth();
  drawEyes();
  drawNose();
}

void drawHead() {
  stroke(#000000);
  strokeWeight(5);
  fill(#FF3E3E);
  ellipse(xPosHead, yPosHead, dxHead, dyHead);
}

void drawMouth() {
  noStroke();
  fill(#000000);
  arc(xPosMouth, yPosMouth, dxMouth, dyMouth, radians(0), radians(180));
}

void drawNose() {
  stroke(#000000);
  strokeWeight(5);
  fill(#F5D14D);
  ellipse(xPosNose, yPosNose, dxNose, dyNose);
}

void drawEyes() {
  stroke(#000000);
  strokeWeight(5);
  fill(#FFFFFF);
  ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);
  ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);
}`},{path:`/2017/Assignments/A02 - Funny Face/2-15-2017/Nguyen_Vincent_Assignment_02/Nguyen_Vincent_Assignment_02.pde`,name:`Nguyen_Vincent_Assignment_02.pde`,size:4126,code:`/*

 Assignment 02: Funny Face
 2/14/2017
 Vincent Nguyen
 
 */

// ---------- Setting up variables ---------- //

//int variable to set the opacity for the intro blackscreen
int opacity;

//boolean variables for the changing facial features
boolean MouthOpen, EyesOpen, NoseClick;

//float variables for the head
float xPosHead, yPosHead, dxHead, dyHead;

//float variables for the mouth
float xPosMouth, yPosMouth, dxMouth, dyMouth;

//float variables for the nose
float xPosNose, yPosNose, dxNose, dyNose;

//float variables for the eyes
float xPosEyeL, yPosEyeL, dxEyeL, dyEyeL, xPosEyeR, yPosEyeR, dxEyeR, dyEyeR;

//float variables for the eyes
float xPosPupilL, xPosPupilR, yPosPupilL, yPosPupilR, rPupil, dPupil, easing;
PVector centerL, centerR;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);

  // ---------- Assigning values to the variables ---------- //
  /*
  For reference, width & height = 400
   400/2 = 200
   400/4 = 100
   400/8 = 50
   400/16 = 25
   400/32 = 12.5
   400/64 = 6.25
   */

  //Integers
  opacity = 255;

  //Booleans
  MouthOpen = true;
  EyesOpen = true;
  NoseClick = false;

  //Head
  xPosHead = width/2;
  yPosHead = height/2;
  dxHead = 350;
  dyHead = 275;

  //Mouth
  xPosMouth = width/2;
  yPosMouth = height/2 + 25/2;
  dxMouth = dyMouth = 200;

  //Nose
  xPosNose = width/2;
  yPosNose = height/16*5 + height/32;
  dxNose = 100;
  dyNose = 125;

  //Eyes
  xPosEyeL = width/8*3 + width/64;
  yPosEyeL = height/8 + height/32;
  dxEyeL = dyEyeL = 100;

  xPosEyeR = width/8*5 - width/64;
  yPosEyeR = height/8 + height/32;
  dxEyeR = dyEyeR = 100;

  //Pupils
  rPupil = 50;
  dPupil = 25;
  easing = 0.05;
  centerL = new PVector(xPosEyeL, yPosEyeL);
  centerR = new PVector(xPosEyeR, yPosEyeR);
}

void draw() {
  background(#343434);
  hitDetection();
  drawHead();
  drawMouth();
  drawEyeR();
  drawEyeL();
  drawNose();
  intro();
}

void intro() {
  rectMode(CENTER);
  int speed = 1;
  opacity -= speed;
  fill(#000000, opacity);
  rect(width/2, height/2, width, height);
  if (opacity <= 0) {
    speed = 0;
  }
}

void hitDetection() {
  float mx, my;
  mx = mouseX - xPosEyeL;
  my = mouseY - yPosEyeL;
}

void drawHead() {
  stroke(#000000);
  strokeWeight(5);
  fill(#FF3E3E);
  ellipse(xPosHead, yPosHead, dxHead, dyHead);
}

void drawMouth() {
  noStroke();
  fill(#000000);
  arc(xPosMouth, yPosMouth, dxMouth, dyMouth, radians(0), radians(180));
}

void drawNose() {
  stroke(#000000);
  strokeWeight(5);
  fill(#F5D14D);
  ellipse(xPosNose, yPosNose, dxNose, dyNose);
}

void drawEyeL() {
  if (EyesOpen == false) {

    stroke(#000000);
    strokeWeight(5);
    fill(#FF3E3E);
    ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);
    line((xPosEyeL-dxEyeL/2), yPosEyeL, (xPosEyeL+dxEyeL/2), yPosEyeL);
  } else {

    stroke(#000000);
    strokeWeight(5);
    fill(#FFFFFF);
    ellipse(xPosEyeL, yPosEyeL, dxEyeL, dyEyeL);

    noStroke();
    fill(#000000);

    PVector mouseL = new PVector(mouseX, mouseY);
    if (dist(mouseL.x, mouseL.y, centerL.x, centerL.y) > rPupil/2) {
      mouseL.sub(centerL);
      mouseL.normalize();
      mouseL.mult(rPupil/2);
      mouseL.add(centerL);
    }

    xPosPupilL += (mouseL.x - xPosPupilL) * easing;
    yPosPupilL += (mouseL.y - yPosPupilL) * easing;

    ellipse(xPosPupilL, yPosPupilL, dPupil, dPupil);
  }
}

void drawEyeR() {

  if (EyesOpen == false) {
    stroke(#000000);
    strokeWeight(5);
    fill(#FF3E3E);
    ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);
    line((xPosEyeR-dxEyeR/2), yPosEyeR, (xPosEyeR+dxEyeR/2), yPosEyeR);
  } else {

    stroke(#000000);
    strokeWeight(5);
    fill(#FFFFFF);
    ellipse(xPosEyeR, yPosEyeR, dxEyeR, dyEyeR);

    noStroke();
    fill(#000000);

    PVector mouseR = new PVector(mouseX, mouseY);
    if (dist(mouseR.x, mouseR.y, centerR.x, centerR.y) > rPupil/2) {
      mouseR.sub(centerR);
      mouseR.normalize();
      mouseR.mult(rPupil/2);
      mouseR.add(centerR);
    }

    xPosPupilR += (mouseR.x - xPosPupilR) * easing;
    yPosPupilR += (mouseR.y - yPosPupilR) * easing;

    ellipse(xPosPupilR, yPosPupilR, dPupil, dPupil);
  }
}`},{path:`/2017/Assignments/A02 - Funny Face/2-16-2017/Nguyen_Vincent_Assignment_02/Nguyen_Vincent_Assignment_02.pde`,name:`Nguyen_Vincent_Assignment_02.pde`,size:5686,code:`/*

 Assignment 02: Funny Face
 2/14/2017
 Vincent Nguyen
 
 */

// ---------- Setting up variables ---------- //

//int variable to set the opacity for the intro blackscreen
int opacity;

//boolean variables for the changing facial features
boolean mouthOpen, eyesOpen, noseClick, mouseDown;

//float variables for the head
float xPosHead, yPosHead, dxHead, dyHead;

//float variables for the mouth
float xPosMouth, yPosMouth, dxMouth, dyMouth;

//float variables for the nose
float xPosNose, yPosNose, dxNose, dyNose;

//float variables for the eyes
float xPosEyeL, yPosEyeL, dEye, xPosEyeR, yPosEyeR;

//float variables for the eyes
float xPosPupilL, xPosPupilR, yPosPupilL, yPosPupilR, rPupil, dPupil, easing;
PVector centerL, centerR;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);

  // ---------- Assigning values to the variables ---------- //
  /*
  For reference, width & height = 400
   400/2 = 200
   400/4 = 100
   400/8 = 50
   400/16 = 25
   400/32 = 12.5
   400/64 = 6.25
   */

  //Integers
  opacity = 255;

  //Booleans
  mouthOpen = true;
  eyesOpen = true;
  noseClick = false;
  mouseDown = false;

  //Head
  xPosHead = width/2;
  yPosHead = height/2;
  dxHead = 350;
  dyHead = 275;

  //Mouth
  xPosMouth = width/2;
  yPosMouth = height/2 + 25/2;
  dxMouth = dyMouth = 200;

  //Nose
  xPosNose = width/2;
  yPosNose = height/16*5 + height/32;
  dxNose = 100;
  dyNose = 125;

  //Eyes
  xPosEyeL = width/8*3 + width/64;
  yPosEyeL = height/8 + height/32;

  xPosEyeR = width/8*5 - width/64;
  yPosEyeR = height/8 + height/32;

  dEye = 100;

  //Pupils
  rPupil = 50;
  dPupil = 25;
  easing = 0.05;
  centerL = new PVector(xPosEyeL, yPosEyeL);
  centerR = new PVector(xPosEyeR, yPosEyeR);
}

void draw() {
  background(#343434);
  hitDetection();
  drawHead();
  drawMouth();
  drawEyeR();
  drawEyeL();
  drawNose();
  info();
  intro();
}

void intro() {
  rectMode(CENTER);
  int speed = 1;
  opacity -= speed;
  
  fill(#000000, opacity);
  rect(width/2, height/2, width, height);
  
  textSize(128);
  textAlign(CENTER);
  fill(#FFFFFF, opacity);
  text("VN", width/2, height*3/5);
  
  if (opacity <= 0) {
    speed = 0;
  }
}

void info() {
  textSize(24);
  textAlign(CENTER);
  fill(#505050);
  text("Created by Vincent Nguyen", width/2, height*15/16);
}

void hitDetection() {
  float mxL, myL, mxR, myR;
  mxL = mouseX - xPosEyeL;
  myL = mouseY - yPosEyeL;
  mxR = mouseX - xPosEyeR;
  myR = mouseY - yPosEyeR;
  float cL = sqrt(mxL*mxL + myL*myL);
  float cR = sqrt(mxR*mxR + myL*myL);

  if (cL < dEye/2 || cR < dEye/2) {
    eyesOpen = false;
  } else {
    eyesOpen = true;
  }

  float mxNose, myNose;
  mxNose = mouseX - xPosNose;
  myNose = mouseY - yPosNose;
  float cN = sqrt(mxNose*mxNose + myNose*myNose);

  if (cN < dxNose/2 && mousePressed == true || cN < dyNose/2 && mousePressed == true) {
    noseClick = true;
  } else {
    noseClick = false;
  }
}

void mouseClicked() {
  if (mouseDown == true && mouthOpen == true && mouseX <= xPosMouth+dxMouth/2 && mouseX >= xPosMouth-dxMouth/2 && mouseY <= yPosMouth+dyMouth/2 && mouseY >= yPosMouth) {
    mouthOpen = false;
    mouseDown = false;
  } else if (mouseDown == true && mouthOpen == false && mouseX <= xPosMouth+dxMouth/2 && mouseX >= xPosMouth-dxMouth/2 && mouseY <= yPosMouth+dyMouth/2 && mouseY >= yPosMouth) {
    mouthOpen = true;
    mouseDown = false;
  }
}

void mousePressed() {
  mouseDown = true;
}

void drawHead() {
  stroke(#000000);
  strokeWeight(5);
  fill(#FF3E3E);
  ellipse(xPosHead, yPosHead, dxHead, dyHead);
}

void drawMouth() {
  if (mouthOpen == true) {
    noStroke();
    fill(#000000);
    arc(xPosMouth, yPosMouth, dxMouth, dyMouth, radians(0), radians(180));
  } else {
    stroke(#000000);
    strokeWeight(5);
    noFill();
    bezier(xPosMouth-dxMouth/2, yPosMouth, xPosMouth-dxMouth/4, yPosMouth+dyMouth/4, xPosMouth+dxMouth/4, yPosMouth+dyMouth/4, xPosMouth+dxMouth/2, yPosMouth);
  }
}

void drawNose() {
  stroke(#000000);
  strokeWeight(5);
  if (noseClick == true) {
    fill(#FF6CB6);
  } else {
    fill(#F5D14D);
  }
  ellipse(xPosNose, yPosNose, dxNose, dyNose);
}

void drawEyeL() {
  if (eyesOpen == false) {

    stroke(#000000);
    strokeWeight(5);
    fill(#FF3E3E);
    ellipse(xPosEyeL, yPosEyeL, dEye, dEye);
    line((xPosEyeL-dEye/2), yPosEyeL, (xPosEyeL+dEye/2), yPosEyeL);
  } else {

    stroke(#000000);
    strokeWeight(5);
    fill(#FFFFFF);
    ellipse(xPosEyeL, yPosEyeL, dEye, dEye);

    noStroke();
    fill(#000000);

    PVector mouseL = new PVector(mouseX, mouseY);
    if (dist(mouseL.x, mouseL.y, centerL.x, centerL.y) > rPupil/2) {
      mouseL.sub(centerL);
      mouseL.normalize();
      mouseL.mult(rPupil/2);
      mouseL.add(centerL);
    }

    xPosPupilL += (mouseL.x - xPosPupilL) * easing;
    yPosPupilL += (mouseL.y - yPosPupilL) * easing;

    ellipse(xPosPupilL, yPosPupilL, dPupil, dPupil);
  }
}

void drawEyeR() {

  if (eyesOpen == false) {

    stroke(#000000);
    strokeWeight(5);
    fill(#FF3E3E);
    ellipse(xPosEyeR, yPosEyeR, dEye, dEye);
    line((xPosEyeR-dEye/2), yPosEyeR, (xPosEyeR+dEye/2), yPosEyeR);
  } else {

    stroke(#000000);
    strokeWeight(5);
    fill(#FFFFFF);
    ellipse(xPosEyeR, yPosEyeR, dEye, dEye);

    noStroke();
    fill(#000000);

    PVector mouseR = new PVector(mouseX, mouseY);
    if (dist(mouseR.x, mouseR.y, centerR.x, centerR.y) > rPupil/2) {
      mouseR.sub(centerR);
      mouseR.normalize();
      mouseR.mult(rPupil/2);
      mouseR.add(centerR);
    }

    xPosPupilR += (mouseR.x - xPosPupilR) * easing;
    yPosPupilR += (mouseR.y - yPosPupilR) * easing;

    ellipse(xPosPupilR, yPosPupilR, dPupil, dPupil);
  }
}`},{path:`/2017/Assignments/A02 - Funny Face/2-19-2017/Nguyen_Vincent_Assignment_02/Nguyen_Vincent_Assignment_02.pde`,name:`Nguyen_Vincent_Assignment_02.pde`,size:14355,code:`/*

 Assignment 02: Funny Face
 2/19/2017
 Vincent Nguyen
 
 [Info]
 For this assignment, I decided to recreate a character we all know and love.
 The character of Elmo from the ever popular Sesame Street.
 
 [Resources]
 toot.mp3    = https://www.freesound.org/people/smmassuda/sounds/136642/
 sproing.mp3 = https://www.freesound.org/people/pan14/sounds/334034/
 whistle.mp3 = https://www.freesound.org/people/InspectorJ/sounds/345687/
 
 [Index]
 01. Setting up the variables & the program
 02. Assigning values to the variables
 03. Running each function in void draw
 04. Creating the functions for void draw
 
 */

// -------------------- 01. Setting up variables & the program -------------------- //

//MINIM functionality
import ddf.minim.*; //Imports the libraries needed for Minim to function
Minim minim; //Creates a new minim
AudioPlayer playerEyes; //Creates an audio player for the eyes...
AudioPlayer playerNose; //nose...
AudioPlayer playerMouth;//and mouth.

//int variable to set the opacity for the intro fade-in (because I'm cool like that)
int opacity;

//boolean variables for state changes for facial features + mouseDown to prevent mousePressed from triggering over and over
boolean mouthOpen, eyesOpen, noseClick, mouseDown;

//float variables for the head (x position, y position, d = diameter, etc etc.)
float xPosHead, yPosHead, dxHead, dyHead;

//float variables for the mouth
float xPosMouth, yPosMouth, dxMouth, dyMouth;

//float variables for the nose
float xPosNose, yPosNose, dxNose, dyNose;

//float variables for the eyes (only one diameter var. for the eyes... because they are the same)
float xPosEyeL, yPosEyeL, dEye, xPosEyeR, yPosEyeR;

//float variables for the pupils
//Regular ol' xpos and ypos + diameter of pupil along with easing.
//The rPupil will be used for vector code later on. The easing makes the pupils move smoothly with the mouse.
float xPosPupilL, xPosPupilR, yPosPupilL, yPosPupilR, rPupil, dPupil, easing;
PVector centerL, centerR; //new vector variables so that I can constrain the eyes to a circular area using math in place of a square

void setup() { //Setup runs once.
  size(400, 400); //Sets the window size to 400 x 400
  smooth(); //Enables anti-aliasing to pleasure my eyes
  frameRate(120); //We must go higher! Sets the framerate of the program at 120 fps.

  // -------------------- 02. Assigning values to the variables -------------------- //

  /*
  For reference, width & height = 400
   400/2 = 200
   400/4 = 100
   400/8 = 50
   400/16 = 25
   400/32 = 12.5
   400/64 = 6.25
   */

  //MINIM functionality cont'd
  minim = new Minim(this); //allows minim to load files from the folder/directory
  playerEyes = minim.loadFile("toot.mp3"); //The eyes will toot.mp3
  playerNose = minim.loadFile("sproing.mp3"); //The nose will sproing.mp3
  playerMouth = minim.loadFile("whistle.mp3"); //The mouth will whistle.mp3

  //Integers
  opacity = 255; //for the sick fade-in

  //Booleans
  mouthOpen = true; //when the program starts, mouth is open...
  eyesOpen = true; //eyes are open...
  noseClick = false; //nose is not clicked...
  mouseDown = false; //and the mouse is not being pressed down.

  //Head
  xPosHead = width/2; //Surely i don't have to explain this... the value is 200.
  yPosHead = height/2; //200
  dxHead = 350; // It's 350. Just so you know.
  dyHead = 275;

  //Mouth
  xPosMouth = width/2;
  yPosMouth = height*17/32; //212.5
  dxMouth = dyMouth = 200;

  //Nose
  xPosNose = width/2;
  yPosNose = height*11/32; //137.5
  dxNose = 100;
  dyNose = 125;

  //Eyes
  xPosEyeL = width*25/64; //156.25
  yPosEyeL = height*5/32; //62.5

  xPosEyeR = width*39/64; //243.75
  yPosEyeR = height*5/32; //62.5

  dEye = 100;

  //Pupils
  rPupil = 50; //Used in the vector equation to create a circular area
  dPupil = 25; 
  easing = 0.05; //Easing value used to slow down mouse tracking for the pupils
  centerL = new PVector(xPosEyeL, yPosEyeL); //Assigns values according to the left and right eyes for the PVectors
  centerR = new PVector(xPosEyeR, yPosEyeR);
}

// -------------------- 03. Running each function in void draw -------------------- //

void draw() {
  background(#343434); //A nice shade of grey.
  hitDetection(); //Hit detection code (clicks, rollover, etc.)
  drawHead(); //Creates Elmo's head
  drawMouth(); //Creates Elmo's mouth
  drawEyeR(); //Creates Elmo's right eye
  drawEyeL(); //Creates Elmo's left eye
  drawNose(); //Creates Elmo's Nose
  info(); //Lil text blurb with my name on it
  intro(); //INTRO FADE IN
}



// -------------------- 04. Creating the functions for void draw -------------------- //



// ---------- Intro() ---------- //

void intro() { //Creates a new function called intro()
  /*
  
   [Purpose]
   The purpose of this function is to add a black fade-in at the beginning of the program when it is first ran.
   This is just here to make me happier.
   
   */
  
  //Setup
  rectMode(CENTER); //Sets the rectangle's x and y values as the center of the rectangle
  int speed = 1; //Speed of the opacity change
  opacity -= speed; //Subtracts speed from opacity
  
  //Rectangle
  fill(#000000, opacity); //Fill using opacity as a variable for transparency.
  rect(width/2, height/2, width, height); //Creates the huge black rectangle
  
  //Text
  textSize(128); //Sets the text size at 128
  textAlign(CENTER); //Sets the text alignment to center
  fill(#FFFFFF, opacity); //Sets the fill colour to white, also uses the opacity variable
  text("VN", width/2, height*3/5); //Splash text woohoo
}



// ---------- Info() ---------- //

void info() { //Creates a new function called info()
  /*
  
   [Purpose]
   The purpose of this function is to add some text at the bottom of the program with my name on it.
   
   */
  
  //Setup
  textSize(24); //Sets the text size at 24
  textAlign(CENTER); //Sets the text alignment to center
  
  //Text
  fill(#505050); //Sets the fill colour to gray
  text("Created by Vincent Nguyen", width/2, height*15/16); //Created by me
}



// ---------- hitDetection() ---------- //

void hitDetection() { //Creates a new function called hitDetection()
  /*
  
   [Purpose]
   The purpose of this function is to add all of the "hit" detection functionality such as clicks, rollovers, etc.
   After these "hits" are detected, they will change a facial feature.
   
   */
  
  // ----- Eyes ----- //
  
  //Variables and setup for eye rollover detection
  float mxL, myL, mxR, myR;
  mxL = mouseX - xPosEyeL;
  myL = mouseY - yPosEyeL;
  mxR = mouseX - xPosEyeR;
  myR = mouseY - yPosEyeR;
  float cL = sqrt(mxL*mxL + myL*myL);
  float cR = sqrt(mxR*mxR + myR*myR);
  
  //If statement to determine if the mouse hovers over the eyes
  if (cL < dEye/2 || cR < dEye/2) { //If the mouse is over the eyes...
    playerEyes.rewind(); //Rewinds the noise...
    playerEyes.play(); //Plays the noise...
    eyesOpen = false; //and closes the eyes.
  } else { //If not...
    eyesOpen = true; //Open the eyes
  }
  
  
  // ----- Nose ------ //
  
  //Variables and setup for the nose click detection
  float mxNose, myNose;
  mxNose = mouseX - xPosNose;
  myNose = mouseY - yPosNose;
  float cN = sqrt(mxNose*mxNose + myNose*myNose);
  
  //If statement to determine if the mouse is over the nose AND the mouse is pressed.
  if (cN < dxNose/2 && mousePressed == true || cN < dyNose/2 && mousePressed == true) { //If true...
    noseClick = true; //The nose is clicked...
    playerNose.rewind(); //The noise is rewinded...
    playerNose.play(); //and played.
  } else { //If not...
    noseClick = false; //The nose is not being clicked
  }
}

// ----- Mouth ------ //

void mouseClicked() { //mouse click function 
  if (mouseDown == true && mouthOpen == true && mouseX <= xPosMouth+dxMouth/2 && mouseX >= xPosMouth-dxMouth/2 && mouseY <= yPosMouth+dyMouth/2 && mouseY >= yPosMouth) { //long if statement to determine if the mouse is over the mouth
    mouthOpen = false; //If the mouse is clicked over the mouth and the mouth is open, the mouth is now closed...
    mouseDown = false; //The mouse is no longer down (to prevent it from occuring more than once) 
    playerMouth.rewind(); //Rewinds the mouth noise
    playerMouth.play(); //Plays the noise
  } else if (mouseDown == true && mouthOpen == false && mouseX <= xPosMouth+dxMouth/2 && mouseX >= xPosMouth-dxMouth/2 && mouseY <= yPosMouth+dyMouth/2 && mouseY >= yPosMouth) {
    mouthOpen = true; //If the mouse is clicked over the mouth and the mouth is closed, the mouth is now open.
    mouseDown = false; //The mouse is no longer down (same as before)
    playerMouth.rewind(); //Rewinds the mouth noise
    playerMouth.play(); //Plays the noise
  }
}

void mousePressed() { //Short code to ensure that the mouth if statement only runs once
  mouseDown = true;
}



// ---------- drawHead() ---------- //

void drawHead() { //Creates a new function called drawHead()
  /*
  
   [Purpose]
   The purpose of this function is to draw Elmo's head.
   
   */
  stroke(#000000); //Sets the stroke colour to black
  strokeWeight(5); //Sets the stroke weight to 5
  fill(#FF3E3E); //Sets the fill colour to red
  ellipse(xPosHead, yPosHead, dxHead, dyHead); //Creates the head using the aforementioned variables
}



// ---------- drawMouth() ---------- //

void drawMouth() { //Creates a new function called drawMouth()
  /*
  
   [Purpose]
   The purpose of this function is to draw Elmo's mouth along with the functionality to choose between an open and closed mouth.
   
   */
   
   //Mouth If-statement
  if (mouthOpen == true) { //If the mouth is supposed to be open...
    noStroke(); //Removes the outline... because the entire mouth is black anyways
    fill(#000000); //Fill colour black
    arc(xPosMouth, yPosMouth, dxMouth, dyMouth, radians(0), radians(180)); //Create a half circle for the mouth
  } else { //If the mouth is not supposed to be open...
    stroke(#000000); //Black stroke colour
    strokeWeight(5); //Thick stroke
    noFill(); //No fill please
    bezier(xPosMouth-dxMouth/2, yPosMouth, xPosMouth-dxMouth/4, yPosMouth+dyMouth/4, xPosMouth+dxMouth/4, yPosMouth+dyMouth/4, xPosMouth+dxMouth/2, yPosMouth); //Using processing documentation to figure out how to make a nice bezier curve for Elmo's smile :)
  }
}



// ---------- drawNose() ---------- //

void drawNose() { //Creates a new function called drawNose()
  /*
  
   [Purpose]
   The purpose of this function is to draw Elmo's nose based on whether it is being clicked or not.
   
   */
  
  //Setup
  stroke(#000000); //Nose outline colour is black
  strokeWeight(5); //Nose outline stroke size is set to 5
  
  //Colour If-statement
  if (noseClick == true) { //If the nose is currently being clicked...
    fill(#FF6CB6); //Fill colour is set to a nice, warm pink
  } else { //If the nose is not being clicked...
    fill(#F5D14D); //Fill colour is set to a nice, warm yellow
  }
  
  //Draw the nose
  ellipse(xPosNose, yPosNose, dxNose, dyNose);
}



// ---------- drawEyeL() ---------- //

void drawEyeL() { //Creates a new function called drawEyeL()
  /*
  
   [Purpose]
   The purpose of this function is to draw the left eye along with the left pupil.
   
   */
  
  //Eye If-statement
  if (eyesOpen == false) { //If the eyes are not supposed to open... (ie: closed)
    
    stroke(#000000); //Set the stroke colour to black
    strokeWeight(5); //Set the stroke size to 5
    fill(#FF3E3E); //Set the fill colour to Elmo red
    ellipse(xPosEyeL, yPosEyeL, dEye, dEye); //Draw a red circle
    line((xPosEyeL-dEye/2), yPosEyeL, (xPosEyeL+dEye/2), yPosEyeL); //And a black line to make it look like Elmo's eyelids are closed
    
  } else { //If the eyes are not supposed to be closed... (ie: open)

    stroke(#000000); //Set the stroke colour to black
    strokeWeight(5); //Set the stroke size to 5
    fill(#FFFFFF); //Set the fill colour to white
    ellipse(xPosEyeL, yPosEyeL, dEye, dEye); //Draw a white circle
    
    //Vector math to create a circular area within the eye to constrain the pupils
    PVector mouseL = new PVector(mouseX, mouseY);
    if (dist(mouseL.x, mouseL.y, centerL.x, centerL.y) > rPupil/2) {
      mouseL.sub(centerL);
      mouseL.normalize();
      mouseL.mult(rPupil/2);
      mouseL.add(centerL);
    }
    
    xPosPupilL += (mouseL.x - xPosPupilL) * easing; //Creates the easing effect for the xposition of the pupil
    yPosPupilL += (mouseL.y - yPosPupilL) * easing; //Creates the easing effect for the yposition
    
    //Draws the left pupil using the variables
    noStroke();
    fill(#000000);
    ellipse(xPosPupilL, yPosPupilL, dPupil, dPupil);
  }
}



// ---------- drawEyeR() ---------- //

void drawEyeR() { //Creates a new function called drawEyeR()
  /*
  
   [Purpose]
   The purpose of this function is to draw the right eye along with the right pupil.
   Please note, this section is a replica of the left eye section.
   No, really.
   
   */
  
  //Eye If-statement
  if (eyesOpen == false) { //If the eyes are not supposed to open... (ie: closed)

    stroke(#000000); //Set the stroke colour to black
    strokeWeight(5); //Set the stroke size to 5
    fill(#FF3E3E); //Set the fill colour to Elmo red
    ellipse(xPosEyeR, yPosEyeR, dEye, dEye); //Draw a red circle
    line((xPosEyeR-dEye/2), yPosEyeR, (xPosEyeR+dEye/2), yPosEyeR); //And a black line to make it look like Elmo's eyelids are closed
    
  } else { //If the eyes are not supposed to be closed... (ie: open)

    stroke(#000000); //Set the stroke colour to black
    strokeWeight(5); //Set the stroke size to 5
    fill(#FFFFFF); //Set the fill colour to white
    ellipse(xPosEyeR, yPosEyeR, dEye, dEye); //Draw a white circle
    
    //Vector math to create a circular area within the eye to constrain the pupils
    PVector mouseR = new PVector(mouseX, mouseY);
    if (dist(mouseR.x, mouseR.y, centerR.x, centerR.y) > rPupil/2) {
      mouseR.sub(centerR);
      mouseR.normalize();
      mouseR.mult(rPupil/2);
      mouseR.add(centerR);
    }
    
    xPosPupilR += (mouseR.x - xPosPupilR) * easing; //Creates the easing effect for the xposition
    yPosPupilR += (mouseR.y - yPosPupilR) * easing; //Creates the easing effect for the yposition
    
    //Draws the left pupil using the variables
    noStroke();
    fill(#000000);
    ellipse(xPosPupilR, yPosPupilR, dPupil, dPupil);
  }
}`},{path:`/2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/Nguyen_Vincent_Assignment_03.pde`,name:`Nguyen_Vincent_Assignment_03.pde`,size:1563,code:`//Note: in the middle of finishing rollover (integrating it into button()). Up next is the clicked functionality


import ddf.minim.*;

Minim minim;
AudioPlayer music, dun;

PFont font;
PImage titleImage;
String menu;

void setup() {
  size(800, 600);
  font = loadFont("DeterminationSans-36.vlw");
  titleImage = loadImage("title.png");
  minim = new Minim(this);
  music = minim.loadFile("menu.mp3");
  menu = "intro";
}

void draw() {
  audio();
  background(#000000);
  title(width/2, height/2, width/3*2, height/5);
  buttonRect("Start", width/2, height/4, width/3, height/6);
}

void buttonRect(String t, float x, float y, float w, float h) {
  
  color idle, rollover, clicked;
  idle = #FFFFFF;
  rollover = #FF9900;
  clicked = #FFD500;
  
  if (rolloverRect(x,y,w,h) == true) {
    stroke(rollover);
  } else {
    stroke(idle);
  }
  
  strokeWeight(5);
  fill(#000000);
  rectMode(CENTER);
  rect(x, y, w, h);

  noStroke();
  fill(#FFFFFF);
  textFont(font);
  textSize(36);
  textAlign(CENTER, CENTER);
  text(t, x, y);
}

boolean rolloverRect(float x, float y, float w, float h) {
  boolean hit;
  if (mouseX >= (x-w/2) &&
      mouseX <= (x+w/2) &&
      mouseY >= (y-h/2) &&
      mouseY <= (y+h/2)) {
        hit = true;
      } else {
        hit = false;
      }
      return hit;
}

void title(float x, float y, float w, float h) {
  imageMode(CENTER);
  image(titleImage, x, y, w, h);
}

void audio() {
  music.setGain(-12);

  if (menu == "intro") {
  }
  if (music.position() == music.length()) {
    music.rewind();
  }
  music.play();
}
`},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/Nguyen_Vincent_Assignment_03.pde`,name:`Nguyen_Vincent_Assignment_03.pde`,size:7165,code:`import ddf.minim.*;

Minim minim;
AudioPlayer music, dun, fightSound, hit;

PFont font;
PImage titleImage, toriel, papyrus, sans, undyne, alphys, lines, stats, slash;
color white, orange, yellow;
String menu, attack;
int prevTime, currTime;

void setup() {
  size(800, 600);
  load();
}

void draw() {
  background(#000000);
  audio();
  engine();
}

void load() {
  //Font
  font = loadFont("DeterminationSans-36.vlw");

  //Images
  titleImage = loadImage("title.png");
  toriel = loadImage("toriel.png");
  papyrus = loadImage("papyrus.png");
  sans = loadImage("sans.png");
  undyne = loadImage("undyne.png");
  alphys = loadImage("alphys.png");
  lines = loadImage("lines.png");
  stats = loadImage("stats.png");
  slash = loadImage("attack.png");

  //Colours
  white = #FFFFFF;
  orange = #FF9900;
  yellow = #FFD500;

  //Audio
  minim = new Minim(this);
  music = minim.loadFile("menu.mp3");
  dun = minim.loadFile("dun.mp3");
  fightSound = minim.loadFile("spear.mp3");
  hit = minim.loadFile("attack.mp3");

  menu = "Intro";
  attack = "* Undyne bounces impatiently.";
  prevTime = second();
}

void engine() {
  if (menu == "Intro") {

    title(width/2, height/2, width/3*2, height/5);
  } else if (menu == "Main") {

    hub();
  } else if (menu == "Fight") {

    fight();
  } else if (menu == "Info") {

    info();
  } else if (menu == "Reset") {

    reset();
  }
}

void hub() {
  friends();
  copyright();

  buttonRect("Fight", width/5, height/5*4, width/4, height/8, white, orange, yellow);
  buttonRect("Info", width/2, height/5*4, width/4, height/8, white, orange, yellow);
  buttonRect("Reset", width/5*4, height/5*4, width/4, height/8, white, orange, yellow);

  infoBox("Frisk    LV 1    0:00\\nRuins - Leaf Pile    ", width/2, height/6, width/8*7, height/5);
}

void fight() {
  buttonEllipse("FIGHT", width/2, height/8*7.2, width/6, height/6, orange, yellow, yellow);
  buttonRect("Main", width/5*4, height/8*7.2, width/4, height/8, orange, yellow, yellow);

  image(lines, width/2, height/4, width, height/2*0.95);
  image(stats, width/2, height/8*6.25, width/3, height/32);

  gif();

  infoBox(attack, width/2, height/5*3, width/8*7, height/4*1.15);

  currTime = second();
  if ((currTime - prevTime) <= 1) {
    attack = "* You hit Undyne!";
    image(slash, width/2*1.1, height/4, 400, 400);
  } else {
    attack = "* Undyne bounces impatiently.";
  }
}

void info() {
  infoBox("Hello!\\nThis is my submission for assignment\\n03: Menu Screens! The game I chose to\\nrecreate is Undertale. Compared to the\\noriginal menu screen, I've added clean\\nborders to the buttons and a wider\\ncolour palette for the buttons. IMO,\\nI like this one better. It feels cozier\\n than the original and somewhat nostalgic.\\n\\nThanks for reading! -Vincent", width/2, height/2.4, width/12*11, height/1.4);
  buttonRect("Main", width/2, height/16*14.5, width/4, height/8, white, orange, yellow);
}

void reset() {
  dun.pause();
  dun.rewind();
  menu = "Intro";
  prevTime = second();
}




void buttonEllipse(String t, float x, float y, float w, float h, color idle, color rollover, color clicked) {

  color current;

  if (rolloverEllipse(x, y, w, h) == true) {

    current = rollover;

    if (clickedEllipse(x, y, w, h) == true) {

      current = clicked;
      hit.pause();
      hit.rewind();
      hit.play();
      prevTime = second();
    }
  } else {

    current = idle;
  }

  stroke(current);
  strokeWeight(5);
  fill(#000000);
  ellipse(x, y, w, h);

  noStroke();
  fill(current);
  textFont(font);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(t, x, y);
}

boolean rolloverEllipse(float x, float y, float w, float h) {
  boolean hit;
  float d = (w+h)/2;
  if (dist(mouseX, mouseY, x, y) <= d/2) {
    hit = true;
  } else {
    hit = false;
  }
  return hit;
}

boolean clickedEllipse(float x, float y, float w, float h) {
  boolean hit;
  float d = (w+h)/2;
  if (dist(mouseX, mouseY, x, y) <= d/2 && mousePressed == true) {
    hit = true;
    mousePressed = false;
  } else {
    hit = false;
  }
  return hit;
}

void friends() {
  image(undyne, (width/16*2.75), (height/2-15), 50, 125);
  image(alphys, (width/16*3.75), (height/2+5), 50, 80);
  image(toriel, width/2, height/2, 360, 180);
  image(papyrus, (width/16*12.25), (height/2-15), 75, 125);
  image(sans, (width/16*13.5), height/2, 60, 90);
}

void copyright() {
  noStroke();
  fill(#9B9B9B);
  textFont(font);
  textSize(28);
  textAlign(CENTER, CENTER);
  text("Demo by Vincent Nguyen 2017", width/2, height/10*9.25);
}

PImage[] images;
int frame;

void gif() {
  images = new PImage[33];

  for (int i = 0; i < 33; i++) {
    String filename = "Undyne_" + nf(i, 4) + ".png";
    images[i] = loadImage(filename);
  }
  frame = (frame+1) % 33;
  image(images[frame], width/2*0.95, height/4);
}

void infoBox(String t, float x, float y, float w, float h) {
  //Rectangle
  stroke(#FFFFFF);
  strokeWeight(5);
  fill(#000000);
  rectMode(CENTER);
  rect(x, y, w, h);

  //Text
  noStroke();
  fill(#FFFFFF);
  textFont(font);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(t, x, y);
}

void buttonRect(String t, float x, float y, float w, float h, color idle, color rollover, color clicked) {

  color current;

  if (rolloverRect(x, y, w, h) == true) {

    current = rollover;

    if (clickedRect(x, y, w, h) == true) {
      current = clicked;
      menu = t;
    }
  } else {

    current = idle;
  }

  //Rectangle
  stroke(current);
  strokeWeight(5);
  fill(#000000);
  rectMode(CENTER);
  rect(x, y, w, h);

  //Text
  noStroke();
  fill(current);
  textFont(font);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(t, x, y);
}

boolean rolloverRect(float x, float y, float w, float h) {
  boolean hit;
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2)) {
    hit = true;
  } else {
    hit = false;
  }
  return hit;
}

boolean clickedRect(float x, float y, float w, float h) {
  boolean hit;
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2) &&
    mousePressed == true) {
    hit = true;
    mousePressed = false;
  } else {
    hit = false;
  }
  return hit;
}

void title(float x, float y, float w, float h) {
  imageMode(CENTER);
  image(titleImage, x, y, w, h);

  currTime = second();

  if ((currTime - prevTime) >= 3) {

    noStroke();
    fill(#9B9B9B);
    textFont(font);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("Click anywhere to start", width/2, height/10*9);

    if (mousePressed) {
      menu = "Main";
      mousePressed = false;
    }
  }
}

void audio() {
  //Setting the gain
  music.setGain(-12);
  dun.setGain(4);
  fightSound.setGain(-12);
  hit.setGain(-8);

  if (menu == "Intro") {

    music.pause();
    dun.play();
  } else if (menu == "Main" || menu == "Info") {

    dun.pause();
    fightSound.pause();

    if (music.isPlaying() != true) {
      music.pause();
      music.rewind();
    }

    music.play();
  } else if (menu == "Fight") {

    music.pause();

    if (fightSound.isPlaying() != true) {
      fightSound.pause();
      fightSound.rewind();
    }

    fightSound.play();
  }
}
`},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/Nguyen_Vincent_Assignment_03.pde`,name:`Nguyen_Vincent_Assignment_03.pde`,size:18062,code:`/*// --------------------[ Info ]-------------------- //

Assignment 03: Menu Screens
03/08/2017
Vincent Nguyen

// --------------------[ Blurb ]-------------------- //

Original Menu: http://vignette4.wikia.nocookie.net/undertale/images/c/cd/Menu0.png/revision/latest?cb=20160103054545

This is my submission for assignment 03: Menu Screens. The game I chose to recreate is Undertale. Compared to the original
menu screen, I've added clean borders to the buttons and a wider colour palette for the buttons. In my opinion, I like this
one better. It feels cozier than the original and somewhat nostalgic, like a homage to old RPGs like Final Fantasy.

// --------------------[ Table of Contents ]-------------------- //

01. Setting up variables
02. Void setup() and giving the variables values
03. Void draw() and the two main functions
04. Functions that draw the elements for each menu
05. Other functions

// --------------------[ Credits ]-------------------- //

All images, animations, music, and sound effects are from the game Undertale by Toby Fox

*/



// ==============================[ 01. Setting up variables ]============================== //



//Imports the Minim audio library
import ddf.minim.*;

//Sets up the minim audioplayers
Minim minim;
AudioPlayer music, dun, fightSound, hit, battle, ping;

//Sets up most of the variables
PFont font; //Undertale font
PImage titleImage, toriel, papyrus, sans, undyne, alphys, lines, stats, slash; //Images including title, characters, backgrounds, etc.
PImage[] images; //Image array for the fight animation
String menu, dialogue; //Strings used for what the current menu displayed should be and attack dialogue during the fight.
int prevTime, currTime, frame; //prevTime and currTime are both used as timers. They are integers so they aren't super accurate but whatever ¯\\_('u')_/¯. frame is used for the animation.
color white, orange, yellow, grey; //Universal colours I use a lot and decided not to retype over and over again.



// ==============================[ 02. Void setup() and giving the variables values ]============================== //



void setup() {
  size(800, 600); //Sets the window size at 800x600. The original game was set at 640x480.
  load(); //Runs the load function, which is right below.
}

void load() { //Loads EVERYTHING

  //Fonts
  font = loadFont("DeterminationSans-36.vlw"); //Undertale font

  //Images
  titleImage = loadImage("title.png"); //Undertale title in the intro
  lines = loadImage("lines.png"); //Fight scene background
  stats = loadImage("stats.png"); //Health bar & level for fight scene
  slash = loadImage("attack.png"); //Slash image for attacking in the fight scene
  
  toriel = loadImage("toriel.png"); //All characters below
  papyrus = loadImage("papyrus.png");
  sans = loadImage("sans.png");
  undyne = loadImage("undyne.png");
  alphys = loadImage("alphys.png");


  //Loads the images for the animation array
  images = new PImage[33]; //This animation has 33 frames and thus needs 33 images in the array

  for (int i = 0; i < 33; i++) { //for loop for each frame
    String filename = "Undyne_" + nf(i, 4) + ".png"; //Sets the string to images with the name "Undyne_xxxx.png" where xxxx is the array number.
    images[i] = loadImage(filename); //Loads each image
  }

  //Colours
  white = #FFFFFF; //So I don't have...
  orange = #FF9900; //To copy and paste...
  yellow = #FFF303; //Over and over again.
  grey = #9B9B9B; //You understand, right?

  //Audio
  minim = new Minim(this); //Minim setup
  
  music = minim.loadFile("menu.mp3"); //Main menu music
  dun = minim.loadFile("dun.mp3"); //Intro "Dun" noise
  fightSound = minim.loadFile("spear.mp3"); //Fight music
  hit = minim.loadFile("attack.mp3"); //When Undyne is hit in the fight scene
  battle = minim.loadFile("battle.mp3"); //When you engage in a fight (fight button)
  ping = minim.loadFile("ping.mp3"); //Button select sound

  //Setting the gain for the audio
  music.setGain(-14);
  dun.setGain(0);
  fightSound.setGain(-14);
  hit.setGain(4);
  battle.setGain(0);
  ping.setGain(-4); //All of this is to ensure our ears aren't destroyed when you run the program

  //Strings
  menu = "Intro"; //First menu displayed when the program is ran will be "Intro".
  dialogue = "* Undyne bounces impatiently."; //Dialogue for the fight scene.

  //Integers
  prevTime = second(); //To begin timing for the intro sequence

  //for Mr. Brichta
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
}



// ==============================[ 03. Void draw() and the two main functions ]============================== //



// --------------------[ Just void draw() ]-------------------- //

void draw() { //Main two functions here! :)
  audio(); //All of the background audio is played here (ie: music)
  engine(); //The function who will defeat them all
}

// --------------------[ Plays the music for the intro, main menu, and fight sequence ]-------------------- //

void audio() { //Music time!

  if (menu == "Intro") { //If the menu is currently the intro sequence...

    music.pause(); //Pause the main theme in case it's playing (from the reset button)
    dun.play(); //Play the "DUN" noise for dramatic effect
    
  } else if (menu == "Main" || menu == "Info") { //Otherwise, if it's the main menu or info menu...

    dun.pause(); //Pause the "DUN" in case the player is a quickshot and sped through the intro
    fightSound.pause(); //Pause the fight music in case they've just returned from an intense battle

    if (music.isPlaying() != true) { //Check if the music is playing or not (to prevent infinite loops)
      music.pause(); //If it's not playing, pause...
      music.rewind(); //rewind...
    }

    music.play(); //and finally, play the main menu music!
    
  } else if (menu == "Fight") { //Otherwise, if it's the fight menu...

    music.pause(); //Pause the main menu music

    if (fightSound.isPlaying() != true) { //Same check as before. We don't want infinite rewinds.
      fightSound.pause(); //Pause if it's not playing and...
      fightSound.rewind(); //Rewind!
    }

    fightSound.play(); //Play the intense fight music!
  }
}

// --------------------[ Determines which menu will be displayed based on the variable ]-------------------- //

void engine() { //The main puppy of the program.

  background(#000000); //This is a thing. It's the colour 'jet black' by the way.

  if (menu == "Intro") { //If the menu displayed is the intro...

    title(); //Display that beautiful title!
    
  } else if (menu == "Main") { //If the menu displayed is the main menu...

    hub(); //Display the save file, your friends, and the three buttons. I call it the hub.
    
  } else if (menu == "Fight") { //If the menu displayed is the fight menu...

    fight(); //Display the fight elements
    
  } else if (menu == "Info") { //If the menu displayed is the info box...

    info(); //Display my little blurb with a back button
    
  } else if (menu == "Reset") { //If they decide to reset...

    reset(); //Give them what they want.
  }
}



// ==============================[ 04. Functions that draw the elements for each menu ]============================== //




// --------------------[ Title (for Intro) ]-------------------- //

void title() { //It just draws the title image. Oh and the text at the bottom too.

  //"UNDERTALE" image
  imageMode(CENTER);
  image(titleImage,width/2, height/2, width/3*2, height/5);
  
  //Code for the text/timer
  currTime = second(); //Uses the computer's clock to match seconds

  if ((currTime - prevTime) >= 3) { //If the current time is three seconds or longer (compared to when you started the program/reset), display the text

    noStroke(); //Filler things, no time to explain.
    fill(grey); 
    textFont(font);
    textSize(28);
    text("Click anywhere to start", width/2, height/10*9); //A beautiful grey text box telling you that you may proceed.

    if (mousePressed) { //If the mouse is pressed while the text is on the screen
      menu = "Main"; //Move to the main menu!
      mousePressed = false; //and prevent glitchly loop things
    }
  }
}

// --------------------[ Hub (for Main menu) ]-------------------- //

void hub() { //The main menu's hub! Here we draw your save file, your friends, and your options.

  //Your friends! Most of them...
  image(undyne, (width/16*2.75), (height/2-15), 50, 125);
  image(alphys, (width/16*3.75), (height/2+5), 50, 80);
  image(toriel, width/2, height/2, 360, 180);
  image(papyrus, (width/16*12.25), (height/2-15), 75, 125);
  image(sans, (width/16*13.5), height/2, 60, 90);
  
  //I needed to put my name somewhere :)
  noStroke();
  fill(grey);
  textFont(font);
  textSize(28);
  text("Demo by Vincent Nguyen 2017", width/2, height/10*9.25); 
  
  //A-ha! the infamous three buttons!
  buttonRect("Fight", width/5, height/5*4, width/4, height/8, white, orange, yellow); //Fight button
  buttonRect("Info", width/2, height/5*4, width/4, height/8, white, orange, yellow); //Info button
  buttonRect("Reset", width/5*4, height/5*4, width/4, height/8, white, orange, yellow); //Reset button
  //To learn more about this fantastic trio, head down further to find my button code.

  //Save file info. It's static for now.
  infoBox("Frisk    LV 1    0:00\\nRuins - Leaf Pile    ", width/2, height/6, width/8*7, height/5);
}

// --------------------[ Fight ]-------------------- //

void fight() { //The fight menu is finally here
  
  buttonEllipse("FIGHT", width/2, height/8*7.2, width/6, height/6, orange, yellow, yellow); //is that a button ELLIPSE? Whoa! New function is new! Code is further below.
  buttonRect("Main", width/5*4, height/8*7.2, width/4, height/8, orange, yellow, yellow); //Regular ol' button rect
  
  //Some images. The background grid and the Lvl/HP stats
  image(lines, width/2, height/4*0.9, width*0.98, height/2*0.88);
  image(stats, width/2, height/8*6.25, width/3, height/32);

  gif(); //The best thing here. The function that plays the animation of Undyne.

  infoBox(dialogue, width/2, height/5*3, width/8*7, height/4*1.15); //The dynamic dialogue box
  
  currTime = second(); //More timer stuff. Records the current time in seconds based on the computer's clock
  
  if ((currTime - prevTime) <= 1) { //If the time between the button press and the current time is less than or equal to 1 second...
  
    dialogue = "* You hit Undyne!"; //Change the dynamic dialogue box
    image(slash, width/2*1.1, height/4, 400, 400); //and Display the slash image
    
  } else {
    
    dialogue = "* Undyne bounces impatiently."; //Otherwise, just revert back to the regular flavour text
  }
}

// --------------------[ Info ]-------------------- //

void info() { //Displays the info screen!
  
  //Really long and tedious info box which is just a copy paste from the header.
  infoBox("Hello!\\nThis is my submission for assignment\\n03: Menu Screens! The game I chose to\\nrecreate is Undertale. Compared to the\\noriginal menu screen, I've added clean\\nborders to the buttons and a wider\\ncolour palette for the buttons. IMO,\\nI like this one better. It feels cozier\\nthan the original and somewhat nostalgic.\\n\\nThanks for reading! -Vincent", width/2, height/2.4, width/12*11, height/1.4);
  
  buttonRect("Main", width/2, height/16*14.5, width/4, height/8, white, orange, yellow); //Back button
}

// --------------------[ Reset ]-------------------- //

void reset() { //You want to reset? Alrighty then.

  dun.pause(); //Rewind that DUN noise for the audience
  dun.rewind(); //woohoo
  
  prevTime = second(); //Start the timer again
  menu = "Intro"; //Bring that menu back to the intro please
}



// ==============================[ 05. Other functions ]============================== //



// --------------------[ Animation ]-------------------- //

void gif() { //Plays through the entire animation for Undyne
  frame = (frame+1) % 33; //Goes through each frame until it reaches 33 and loops
  image(images[frame], width/2*0.95, height/4); //Displays the gif!
}

// --------------------[ Text Box ]-------------------- //

void infoBox(String t, float x, float y, float w, float h) { //Simple function to make a simple text box.

  //Rectangle
  stroke(white);
  strokeWeight(5);
  fill(#000000);
  rectMode(CENTER);
  rect(x, y, w, h); //Creates a rectangle with a clean border at the designated values.

  //Text
  noStroke();
  fill(white);
  textFont(font);
  textSize(32);
  text(t, x, y); //Creates text with the designated string and x-y values.
}

// --------------------[ Rectangular button ]-------------------- //

void buttonRect(String t, float x, float y, float w, float h, color idle, color rollover, color clicked) { //The infamouse button code. Welcome to the new world!

  color current; //Variable for the current colour of the button

  if (rolloverRect(x, y, w, h) == true) { //If the mouse rolls over the designated values...

    current = rollover; //The colour becomes the given rollover colour

    if (clickedRect(x, y, w, h) == true) { //If the mouse also clicks...
    
      //Lazy code
      if (t != "Fight") { //If the button is not "Fight"...
      
        ping.pause();
        ping.rewind();
        ping.play(); //Pause, rewind, and play the ping noise.
        
      } else { //Otherwise, play the battle engage noise (for "Fight")
      
        battle.pause();
        battle.rewind();
        battle.play(); //Pause, rewind, and play the battle noise.
        
      }

      current = clicked; //The colour becomes the given clicked colour
      menu = t; //The menu changes to the value of the string
    }
    
  } else { //If the mouse is not over the button...

    current = idle; //The colour becomes the given idle colour
  }

  //Finally, draw the button with the final values.

  //Rectangle
  stroke(current);
  strokeWeight(5);
  fill(#000000);
  rectMode(CENTER);
  rect(x, y, w, h); //Creates a rectangle with a clean border at the designated values.

  //Text
  noStroke();
  fill(current);
  textFont(font);
  textSize(32);
  text(t, x, y); //Creates text with the designated string and x-y values.
}

boolean rolloverRect(float x, float y, float w, float h) { //Boolean to check whether the mouse is rolling over the coords

  boolean hit; //Create a temporary boolean variable
  
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2)) { //If the mouse is indeed over the square area...
    
    hit = true; //Set the hit value to true
    
  } else {
    
    hit = false; //Otherwise, hit value is false
    
  }
  
  return hit; //Finally, return the hit value.
}

boolean clickedRect(float x, float y, float w, float h) { //Boolean to check whether the mouse is clicked over the coords
  
  boolean hit; //Create a temporary boolean variable
  
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2) &&
    mousePressed == true) { //If the mouse is over the given area AND the mouse is pressed...
      
    hit = true; //Set the hit value to true
    
    mousePressed = false; //Stops the infinite loop
    
  } else {
    
    hit = false; //Otherwise, hit value is false
    
  }
  
  return hit; //Finally, return the hit value.
}

// --------------------[ Elliptic button ]-------------------- //

void buttonEllipse(String t, float x, float y, float w, float h, color idle, color rollover, color clicked) { //Pretty much the same code as the rectangular button... but with round things!

  color current; //Variable for the current colour of the button

  if (rolloverEllipse(x, y, w, h) == true) { //If the mouse rolls over the designated values...

    current = rollover; //The colour becomes the given rollover colour

    if (clickedEllipse(x, y, w, h) == true) { //If the mouse also clicks...
      
      if (t == "FIGHT") { //If the button says "FIGHT"...
        
        hit.pause(); //play the attack/slash noise
        hit.rewind();
        hit.play(); //This is just very lazy code
        
        prevTime = second(); //Sets the timer for the attack dialogue and slash image
        
      }
      
      current = clicked; //The colour becomes the given clicked colour
      
    }
    
  } else { //If the mouse is not over the button...

    current = idle; //The colour becomes the given idle colour
  }
  
  //Finally, draw the button with the final values
  
  //Ellipse
  stroke(current);
  strokeWeight(5);
  fill(#000000);
  ellipse(x, y, w, h); //Creates an Ellipse with a clean border at the designated values.
  
  //Text
  noStroke();
  fill(current);
  textFont(font);
  textSize(32);
  text(t, x, y); //Creates text with the designated string and x-y values.
}

boolean rolloverEllipse(float x, float y, float w, float h) { //Boolean to check whether the mouse is rolling over the coords (in a circular area)

  boolean hit;//Create a temporary boolean variable
  float d = (w+h)/2; //Temperory float with the average of the width and height (diameter)
  
  if (dist(mouseX, mouseY, x, y) <= d/2) { //If the distance between the mouse and the center of the circle is shorter than the radius...
    
    hit = true; //Set the hit value to true
    
  } else {
    
    hit = false; //Otherwise, hit value is false
    
  }
  
  return hit; //Finally, return the hit value.
  
}

boolean clickedEllipse(float x, float y, float w, float h) { //Boolean to check whether the mouse is clicked over the coords (in a circular area)
  
  boolean hit;//Create a temporary boolean variable
  float d = (w+h)/2; //Temperory float with the average of the width and height (diameter)
  
  if (dist(mouseX, mouseY, x, y) <= d/2 && mousePressed == true) { //If the distance between the mouse and the center of the circle is shorter than the radius AND the mouse is clicked...
    
    hit = true; //Set the hit value to true
    
    mousePressed = false; //Prevent the infinite loops
    
  } else {
    
    hit = false; //Otherwise, hit value is false
    
  }
  
  return hit; //Finally, return the hit value.
  
}
`},{path:`/2017/Assignments/A04 - Old School Games/03-27-2017/Assignment_04/Assignment_04.pde`,name:`Assignment_04.pde`,size:510,code:`int state;
button start;

void setup() {
  size(600,400);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  noStroke();
  start = new button(width/2,height/2,width/4,height/4,#FF5A8E,#B24467,#E88CA9);
}

void draw() {
  switch(state) {
    case 0: mainMenu(); break;
    case 1: optionsMenu(); break;
    case 2: game(); break;
    default: mainMenu(); break;
  }
}

void mainMenu() {
  background(#313743);
  start.display();
  
}

void optionsMenu() {
  background(100);
}

void game() {
  background(200);
}`},{path:`/2017/Assignments/A04 - Old School Games/03-27-2017/Assignment_04/button.pde`,name:`button.pde`,size:998,code:`class button {

  float x, y, w, h;
  color i, r, c;
  boolean mouseOn, clicked;

  button(float tempX, float tempY, float tempW, float tempH, color tempI, color tempR, color tempC) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    i = tempI;
    r = tempR;
    c = tempC;
    mouseOn = false;
    clicked = false;
  }
  
  void display() {
    update();
    rectMode(CENTER);
    noStroke();
    
    if (mouseOn) {
      fill(r);
      if (clicked) {
        fill(c);
      }
    } else {
      fill(i);
    }
    
    rect(x,y,w,h);
  }
  
  void update() {
    if (mouseOver(x, y, w, h) == true) {
      mouseOn = true;
      if (mousePressed) {
        clicked = true;
      } else {
        clicked = false;
      }
    } else {
      mouseOn = false;
    }
  }

  boolean mouseOver(float x, float y, float w, float h) {
    if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {
      return true;
    } else {
      return false;
    }
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/Assignment_04.pde`,name:`Assignment_04.pde`,size:1939,code:`
//work on this
//http://coryschires.com/breakout-clone-in-processing-js/

PFont title, body;
PImage chalkboard;
int state, numBricks, numRows;
float xcenter, ycenter;
color darkblue, pink, darkpink, lightpink, lightblue, pinkred, lightyellow;

button start, options, exit, main;
brick[] bricks;
paddle player;
ball ball;
game breakout;


void setup() {
  size(800, 600);

  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  noStroke();

  darkblue = #262B34;
  darkpink = #C14875;
  pink = #FF6FA4;
  pinkred = #E8578C;
  lightpink = #FF8BB6;
  lightblue = #B9C0FF;
  lightyellow = #FFE8AD;

  xcenter = width/2;
  ycenter = height/2;

  chalkboard = loadImage("chalkboard.jpg");
  title = loadFont("Eraser_Regular-84.vlw");
  body = loadFont("Eraser_Regular-32.vlw");

  numBricks = 13;
  numRows = 4;

  bricks = new brick[numBricks*numRows];

  for (int i=0; i<(numBricks*numRows); i++) {
    bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
  }

  start = new button("Start", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
  options = new button("Options", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
  exit = new button("Exit", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
  main = new button("Main Menu", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);

  player = new paddle();
  ball = new ball(xcenter, ycenter);

  breakout = new game();
}

void draw() {
  switch(state) {
  case 0: 
    mainMenu(); 
    break;
  case 1: 
    optionsMenu(); 
    break;
  case 2: 
    drawGame(); 
    break;
  case 3:
    gameOver();
    break;
  default: 
    mainMenu(); 
    break;
  }
}

void mousePressed() {
  if (ball.startPosition()) {
    ball.moveStart();
    breakout.active = true;
  } else {
    ball.pause();
    if (breakout.paused) {
      breakout.paused = false;
    } else {
      breakout.paused = true;
    }
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/ball.pde`,name:`ball.pde`,size:1975,code:`class ball {

  float d, max, rest;
  PVector p, v, ps;

  ball(float tempX, float tempY) {
    p = new PVector(tempX, tempY);
    v = new PVector(0, 0);
    ps = new PVector(0, 0);
    d = 20;
    max = 16;
  }

  void display() {
    noStroke();
    fill(lightblue);
    ellipse(p.x, p.y, d, d);
  }

  void move() {
    if ((p.y-d/2) <= 0) {
      v.y *= -1;
    }
    if ((p.x-d/2) <= 0 || (p.x+d/2) >= width) {
      v.x *= -1;
    }
    p = p.add(v);
  }
  
  void moveStart() {
    v.x = 0;
    v.y = -8;
  }

  void pause() {
    if (v.x == 0 && v.y == 0) {
      v.x = ps.x;
      v.y = ps.y;
    } else {
      ps.x = v.x;
      ps.y = v.y;
      v.x = 0;
      v.y = 0;
    }
  }

  void rest() {
    // stop ball from moving
    v.x = 0;
    v.y = 0;
    
    rest = constrain(mouseX, (player.getW()/2), width - (player.getW()/2));;
    
    // place ball atop paddle
    p.y = width/8*5;
    p.x = rest;
  }
  
  void reboundPaddle() {
    float bounce;
    bounce = dist(p.x,player.getY(), player.getX(), player.getY());
    
    if (p.x <= player.getX()) {
      v.x = (bounce*0.2) *-1;
    } else {
      v.x = bounce*0.2;
    }
    
    v.y = (max - abs(v.x))*-1;
  }
  
  void reboundBrick() {
    v.y *= -1;
  }
  
  boolean startPosition() {
    if (p.y == width/8*5 && v.x == 0 && v.y == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean missed() {
    if (p.y >= height) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean hitPaddle() {
    if (p.x >= player.getX() - (player.getW()/2) &&
        p.x <= player.getX() + (player.getW()/2) &&
        p.y >= player.getY() - (player.getH()/2) &&
        p.y <= player.getY() + (player.getH()/2)) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean hitBrick() {
    if (p.y <= 164) {
      return true;
    } else {
      return false;
    }
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/brick.pde`,name:`brick.pde`,size:428,code:`class brick {
  
  color c;
  float x,y,w,h;
  boolean alive;
  
  brick(float tempX, float tempY) {
    x = tempX;
    y = tempY;
    w = 50;
    h = 30;
    c = lightpink;
    alive = true;
  }
  
  void display() {
    rectMode(CENTER);
    noStroke();
    strokeWeight(3);
    fill(c);
    rect(x,y,w,h,10);
  }
  
  boolean getStatus() {
    return alive;
  }
  
  void die() {
    alive = false;
    c = darkblue;
  }
  
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/button.pde`,name:`button.pde`,size:1354,code:`class button {

  float x, y, w, h;
  color i, r, c;
  boolean mouseOn, clicked;
  String t;

  button(String text, float tempX, float tempY, float tempW, float tempH, color tempI, color tempR, color tempC) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    i = tempI;
    r = tempR;
    c = tempC;
    t = text;
    mouseOn = false;
    clicked = false;
  }

  void display() {
    update();
    rectMode(CENTER);
    stroke(pink);
    strokeWeight(5);

    if (mouseOn) {
      fill(r);
      if (clicked) {
        fill(c);
      }
    } else {
      fill(i);
    }

    rect(x, y, w, h, 20);
    fill(darkblue);
    textFont(body);
    textSize(36);
    textAlign(CENTER,CENTER);
    text(t, x, y);
  }

  void update() {
    if (mouseOver(x, y, w, h) == true) {
      mouseOn = true;
      if (click()) {
        clicked = true;
      } else {
        clicked = false;
      }
    } else {
      mouseOn = false;
    }
  }

  boolean mouseOver(float x, float y, float w, float h) {
    if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {
      return true;
    } else {
      return false;
    }
  }

  boolean click() {
    if (mouseOver(x, y, w, h) == true) {
      if (mousePressed) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/drawGame.pde`,name:`drawGame.pde`,size:1387,code:`void drawGame() {

  //draw background
  tint(60, 60, 80);
  image(chalkboard, 0, 0, width, height);

  //draw bricks
  breakout.build();

  //draw paddle and ball
  player.display();
  ball.display();
  
  fill(lightblue);
  
  textFont(body);
  textSize(20);
  textAlign(LEFT, CENTER);
  text("lives: " + str(breakout.lives), 20, height/64*63);

  textFont(body);
  textSize(20);
  textAlign(RIGHT, CENTER);
  text("points: " + str(breakout.points), width-20, height/64*63);

  if (breakout.active) {
    ball.move();

    if (breakout.paused) {
      textFont(body);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Paused", xcenter, ycenter);
    } else {
      textFont(body);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("Click anywhere to pause", xcenter, height/64*63);
    }
  } else {
    ball.rest();
    breakout.reset();

    textFont(body);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(pink);
    text("Click anywhere to start", xcenter, ycenter);
  }

  if (ball.missed()) {
    breakout.active = false;
    breakout.lives -= 1;
  }

  if (ball.hitPaddle()) {
    ball.reboundPaddle();
  }

  if (ball.hitBrick()) {
    int hit = breakout.collision();

    if (bricks[hit].getStatus()) {
      bricks[hit].die();
      ball.reboundBrick();
      breakout.points();
    }
  }
  if (breakout.lives <= 0) {
    state = 3;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/game.pde`,name:`game.pde`,size:3559,code:`class game {
  int points, lives;
  boolean active, paused;

  game() {
    points = 0;
    lives = 3;
    active = false;
    paused = false;
  }

  void build() {
    for (int i=0; i<(numBricks*numRows); i++) {
      bricks[i].display();
    }
  }

  void reset() {
    for (int i=0; i<(numBricks*numRows); i++) {
      bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
    }
  }
  
  void points() {
    points += int(random(18,23));
  }
  
  int collision() {
    float x,y;
    int hit;
    x = ball.getX();
    y = ball.getY();
    
    hit = 46;
    
    if (y >= 15 && y <= 45) { //Row 1
    
      if (x >= 15 && x <= 65 ) { hit = 0;} //Column 1
        else if (x >= 75 && x <= 125) { hit = 1; }
        else if (x >= 135 && x <= 185) { hit = 2; }
        else if (x >= 195 && x <= 245) { hit = 3; }
        else if (x >= 255 && x <= 305) { hit = 4; }
        else if (x >= 315 && x <= 365) { hit = 5; }
        else if (x >= 375 && x <= 425) { hit = 6; }
        else if (x >= 435 && x <= 485) { hit = 7; }
        else if (x >= 495 && x <= 545) { hit = 8; }
        else if (x >= 555 && x <= 605) { hit = 9; }
        else if (x >= 615 && x <= 665) { hit = 10; }
        else if (x >= 675 && x <= 725) { hit = 11; }
        else if (x >= 735 && x <= 785) { hit = 12; }
        
    } else if (y >= 55 && y <= 85) { //Row 2
      
      if (x >= 15 && x <= 65 ) { hit = 13;} //Column 1
        else if (x >= 75 && x <= 125) { hit = 14; }
        else if (x >= 135 && x <= 185) { hit = 15; }
        else if (x >= 195 && x <= 245) { hit = 16; }
        else if (x >= 255 && x <= 305) { hit = 17; }
        else if (x >= 315 && x <= 365) { hit = 18; }
        else if (x >= 375 && x <= 425) { hit = 19; }
        else if (x >= 435 && x <= 485) { hit = 20; }
        else if (x >= 495 && x <= 545) { hit = 21; }
        else if (x >= 555 && x <= 605) { hit = 22; }
        else if (x >= 615 && x <= 665) { hit = 23; }
        else if (x >= 675 && x <= 725) { hit = 24; }
        else if (x >= 735 && x <= 785) { hit = 25; }
        
    } else if (y >= 95 && y <= 125) {
      
      if (x >= 15 && x <= 65 ) { hit = 26;} //Column 1
        else if (x >= 75 && x <= 125) { hit = 27; }
        else if (x >= 135 && x <= 185) { hit = 28; }
        else if (x >= 195 && x <= 245) { hit = 29; }
        else if (x >= 255 && x <= 305) { hit = 30; }
        else if (x >= 315 && x <= 365) { hit = 31; }
        else if (x >= 375 && x <= 425) { hit = 32; }
        else if (x >= 435 && x <= 485) { hit = 33; }
        else if (x >= 495 && x <= 545) { hit = 34; }
        else if (x >= 555 && x <= 605) { hit = 35; }
        else if (x >= 615 && x <= 665) { hit = 36; }
        else if (x >= 675 && x <= 725) { hit = 37; }
        else if (x >= 735 && x <= 785) { hit = 38; }
      
    } else if (y >= 135 && y <= 165) {
      
      if (x >= 15 && x <= 65 ) { hit = 39;} //Column 1
        else if (x >= 75 && x <= 125) { hit = 40; }
        else if (x >= 135 && x <= 185) { hit = 41; }
        else if (x >= 195 && x <= 245) { hit = 42; }
        else if (x >= 255 && x <= 305) { hit = 43; }
        else if (x >= 315 && x <= 365) { hit = 44; }
        else if (x >= 375 && x <= 425) { hit = 45; }
        else if (x >= 435 && x <= 485) { hit = 46; }
        else if (x >= 495 && x <= 545) { hit = 47; }
        else if (x >= 555 && x <= 605) { hit = 48; }
        else if (x >= 615 && x <= 665) { hit = 49; }
        else if (x >= 675 && x <= 725) { hit = 50; }
        else if (x >= 735 && x <= 785) { hit = 51; }
      
    }
    
    return hit;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/gameOver.pde`,name:`gameOver.pde`,size:413,code:`void gameOver() {
  //draw background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  textFont(title);
  textSize(72);
  textAlign(CENTER, CENTER);
  fill(lightpink);
  text("game over!", xcenter, ycenter-150);
  fill(lightblue);
  text("final score: " + str(breakout.points), xcenter, ycenter-50);
  
  main.display();
  
  if (main.click()) {
    state = 0;
    mousePressed = false;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/mainMenu.pde`,name:`mainMenu.pde`,size:525,code:`void mainMenu() {
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  start.display();
  options.display();
  exit.display();
  
  //Title
  textFont(title);
  textSize(84);
  fill(darkpink);
  text("Breakout", width/2*1.01, height/5*1.02);
  fill(pink);
  text("Breakout", width/2, height/5);
  
  if (start.click()) {
    state = 2;
    breakout = new game();
    mousePressed = false;
  } else if (options.click()) {
    state = 1;
    mousePressed = false;
  } else if (exit.click()) {
    exit();
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/optionsMenu.pde`,name:`optionsMenu.pde`,size:193,code:`void optionsMenu() {
  //background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  main.display();
  
  if (main.click()) {
    state = 0;
    mousePressed = false;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/paddle.pde`,name:`paddle.pde`,size:463,code:`class paddle {
  
  float x,y,w,h;
  color c;
  
  paddle() {
    x = xcenter;
    y = height/8*7;
    w = width/6;
    h = height/32;
    c = lightpink;
  }
  
  void display() {
    x = constrain(mouseX, w/2, width - w/2);
    rectMode(CENTER);
    noStroke();
    fill(c);
    rect(x,y,w,h,5);
  }
  
  
  
  float getX() {
    return x;
  }
  
  float getY() {
    return y;
  }
  
  float getW() {
    return w;
  }
  
  float getH() {
    return h;
  }
  
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/Assignment_04.pde`,name:`Assignment_04.pde`,size:5276,code:`/*

[ -------------------- [ INFO ] -------------------- ]

Assignment 04: Old School Games
Vincent Nguyen
03/29/2017

[ -------------------- [ BLURB ] -------------------- ]

Hello!

For this assignment, I decided to recreate breakout using a chalkboard theme (ie: drawing on the chalkboard).
I took your advice and looked into learning about objects and I can safely say that it was quite challenging
but I feel like it has paid off. I see the benefits of organizing code into objects with their own values
and functions. Some code here might be inefficient but that's just the result of my brain malfunctioning
while it tried to comprehend object code plus maybe a lack of time. Either way, I've done my best to
organize everything and document it all while half-awake at 2 AM just for your viewing pleasure. Enjoy~!

As always, thanks for reading!

P.S. Most of it is tabbed.

[ -------------------- [ TABLE OF CONTENTS ] -------------------- ]

01. SETTING UP GLOBAL VARIABLES
02. VOID SETUP() AND ASSIGNING VALUES
03. VOID DRAW() AND A MENU SWITCH
04. AUDIO USING STATES
05. BALL OBJECT
06. BRICKS AND LIVES
07. BUTTON OBJECT
08. GAME MENU SCREEN
09. GAME OBJECT
10. GAME OVER SCREEN
11. MAIN MENU SCREEN
12. OPTIONS SCREEN
13. PADDLE OBJECT

[ -------------------- [ CREDITS ] -------------------- ]

[ Images ]

01. Chalkboard [http://www.thebridgelive.org/wp-content/uploads/2014/12/Chalkboard.jpg]

[ Music ]

01. Undertale OST - 010 - Ghost Fight [https://www.youtube.com/watch?v=Zz1bfhtKsHM]
02. Undertale OST - 011 - Determination [https://www.youtube.com/watch?v=W1i4mTyidOc]
03. Undertale OST - 034 - Memory [https://www.youtube.com/watch?v=eijdNQMYikY]

[ Fonts ]

01. Eraser by David Rakowski [http://www.dafont.com/eraser.font]

*/

// ============================== [ 01. SETTING UP GLOBAL VARIABLES ] ============================== //

//Import the minim library for audio
import ddf.minim.*;

//Set up variables
PFont title, body; //Fonts
PImage chalkboard; //Background
int state, numBricks, numRows; //Screen state, number of bricks per row and column
float xcenter, ycenter; //Because I'm lazy
color darkblue, pink, darkpink, lightpink, lightblue, pinkred; //So I don't have to refer back to colour codes
boolean musicOn, rainbowOn; //For optionsMenu

//Set up objects
button start, options, exit, main, music, rainbow; //Buttons
brick[] bricks; //Array of brick objects
paddle player; //Paddle object
ball ball; //Ball object
game breakout; //Game object

//Set up audio players
Minim minim;
AudioPlayer musicMenu, musicGame, musicEnd;

// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //

void setup() {
  size(800, 600); //Set window size
  
  //Quick simple basics out of the way
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  smooth(8);
  noStroke();
  
  //Assign colours
  darkblue = #262B34;
  darkpink = #C14875;
  pink = #FF6FA4;
  pinkred = #E8578C;
  lightpink = #FF8BB6;
  lightblue = #B9C0FF;
  
  //Floats
  xcenter = width/2;
  ycenter = height/2;
  
  //Booleans
  musicOn = true;
  rainbowOn = false;
  
  //Images and Fonts
  chalkboard = loadImage("chalkboard.jpg");
  title = loadFont("Eraser_Regular-84.vlw");
  body = loadFont("Eraser_Regular-32.vlw");
  
  //Audio starts here
  minim = new Minim(this);
  
  //Load music
  musicMenu = minim.loadFile("mainmenu.mp3");
  musicGame = minim.loadFile("breakout.mp3");
  musicEnd = minim.loadFile("gameover.mp3");
  
  //Set the gain so I can retain my hearing ability
  musicMenu.setGain(-14);
  musicGame.setGain(-14);
  musicEnd.setGain(-14);
  //Audio ends here
  
  //Setting up the array of bricks
  numBricks = 13; //How many bricks per row?
  numRows = 4; //How many rows?
  
  //Create the amount of bricks accordingly
  bricks = new brick[numBricks*numRows];
  
  //Setting up the button objects
  start = new button("Start", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
  options = new button("Options", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
  exit = new button("Exit", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
  main = new button("Main Menu", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
  music = new button("Music: ON", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
  rainbow = new button("Rainbow: OFF", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
  //Parameters = (text, x position, y position, width, height, idle colour, rollover colour, clicked colour)
  
  //Set up the paddle and ball objects
  player = new paddle();
  ball = new ball(xcenter, ycenter);
  
  //Create a new game object called breakout and reset it
  breakout = new game();
  breakout.reset();
}



// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //

void draw() {
  
  audio(); //Plays the audio
  
  //A switch using the integer state to determine which screen we are looking at
  switch(state) {
  case 0: 
    mainMenu(); 
    break;
  case 1: 
    optionsMenu(); 
    break;
  case 2: 
    drawGame(); 
    break;
  case 3:
    gameOver();
    break;
  default: 
    mainMenu(); 
    break;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/audio.pde`,name:`audio.pde`,size:1611,code:`// ============================== [ 04. AUDIO USING STATES ] ============================== //

void audio() { //Audio function

  if (musicOn) { //If music is on, play the music!
    
    if (state == 0 || state == 1) { //If it's the main menu or options menu...
    
      //Pause other music players just in case.
      musicGame.pause();
      musicEnd.pause();
      
      //If the music is not playing for some reason, rewind it.
      if (musicMenu.isPlaying() != true) {
        musicMenu.pause();
        musicMenu.rewind();
      }
      
      //And play the music
      musicMenu.play();
      
    } else if (state == 2) { //If it's the game, play the cool musics
      
      //Pause other music players just in case.
      musicMenu.pause();
      musicEnd.pause();
      
      //If the music is not playing for some reason, rewind it.
      if (musicGame.isPlaying() != true) {
        musicGame.pause();
        musicGame.rewind();
      }
      
      //And play the music
      musicGame.play();
      
    } else if (state == 3) { //If it's gameover, play the sad musics
      
      //Pause other music players just in case.
      musicMenu.pause();
      musicGame.pause();
      
      //If the music is not playing for some reason, rewind it.
      if (musicEnd.isPlaying() != true) {
        musicEnd.pause();
        musicEnd.rewind();
      }
      
      //And play the music
      musicEnd.play();
      
    }
    
  } else { //If music is not supposed to be on... (oopsies :c)
    
    //Pause everything
    musicMenu.pause();
    musicGame.pause();
    musicEnd.pause();
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/ball.pde`,name:`ball.pde`,size:3978,code:`// ============================== [ 05. BALL OBJECT ] ============================== //

//The first object in name but not the first created. That was the button. Because it was easy.
//I hope I didn't mess anything up!

class ball { //Create a new class

  //Set up variables
  float d, max, rest; //in order of appearance: diameter, max speed, and rest position
  PVector p, v, ps; //in order of appearance: position, velocity, and previous speed

  ball(float tempX, float tempY) { //Parameters for fun
    p = new PVector(tempX, tempY); //Position of the ball will be at the given values
    v = new PVector(0, 0); //Starting velocity is 0
    ps = new PVector(0, 0); //There's no previous speed yet. There's no speed at all actually.
    d = 20; //Diameter 20
    max = 16; //Max speed allowed is 16
  }

  void display() { //Function to fill and draw the ball
    noStroke();
    fill(lightblue); //A nice cool colour
    ellipse(p.x, p.y, d, d); //Draw ball accordingly
  }

  void move() { //Function to move the ball
    if ((p.y-d/2) <= 0) { //If the ball has hit the ceiling...
      v.y *= -1; //Reverse the y velocity
    }
    if ((p.x-d/2) <= 0 || (p.x+d/2) >= width) { //Similarly, If the ball has hit the left or right wall...
      v.x *= -1; //Reverse the x velocity
    }
    
    //Make the position change based on the velocity
    p = p.add(v);
  }
  
  void moveStart() { //Function to give the ball it's first kick
    v.x = 0;
    v.y = -8;
  }

  void pause() { //Function to pause the game and store the ball's speed
  
    if (v.x == 0 && v.y == 0 && breakout.paused) { //If the ball is not moving (ie: paused)
      v.x = ps.x; //Make the ball move again according to its previous velocity
      v.y = ps.y;
      breakout.paused = false; //Game is no longer paused
    } else { //If the ball IS moving when this function is called...
      ps.x = v.x; //Store the velocity values
      ps.y = v.y;
      v.x = 0; //Set the velocity to 0 (stop it from moving)
      v.y = 0;
      breakout.paused = true; //Game is now paused
    }
    
  }

  void rest() { //This function is called at the beginning of each round
  
    //Stop the ball from moving
    v.x = 0;
    v.y = 0;
    
    //Constrain the ball akin to the paddle
    rest = constrain(mouseX, (player.getW()/2), width - (player.getW()/2));;
    
    //Place ball atop paddle
    p.y = width/8*5;
    p.x = rest;
  }
  
  void reboundPaddle() { //Funky function to rebound the ball off of the paddle
  
    //Set up a float that determines the distance between the ball and the center of the paddle
    float bounce = dist(p.x,player.getY(), player.getX(), player.getY());
    
    //Code to determine the rebounding v.x based on if the ball is to the left or to the right side of the paddle
    if (p.x <= player.getX()) {
      v.x = (bounce*0.2) *-1;
    } else {
      v.x = bounce*0.2;
    }
    
    //Set the new v.y based on the max speed and absolute value of v.x
    v.y = (max - abs(v.x))*-1;
  }
  
  void reboundBrick() { //lazy lazy function for rebounding off of bricks
    v.y *= -1;
  }
  
  boolean startPosition() { //Boolean to check whether the ball is in its starting position
    if (p.y == width/8*5 && v.x == 0 && v.y == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean missed() { //Boolean to check whether the ball has fallen off screen
    if (p.y >= height) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean hitPaddle() { //Boolean to check whether the ball has hit the paddle
    if (p.x >= player.getX() - (player.getW()/2) &&
        p.x <= player.getX() + (player.getW()/2) &&
        p.y >= player.getY() - (player.getH()/2) &&
        p.y <= player.getY() + (player.getH()/2)) {
      return true;
    } else {
      return false;
    }
  }
  
  float getX() { //Quick simple float functions that return the ball's x and y position.
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/brick.pde`,name:`brick.pde`,size:1337,code:`// ============================== [ 06. BRICKS AND LIVES ] ============================== //

//I really like this one.
//Was it because it was short and easy?
//Yes.

class brick { //Create a new class

  //Set up variables
  color c; //Colour of brick
  float x, y, w, h; //Floats for the rect() because I don't really need a PVector
  boolean alive; //IS THE BRICK ALIVE?

  brick(float tempX, float tempY) { //Create the brick according to the positions given
    x = tempX;
    y = tempY;
    w = 50;
    h = 30;
    c = lightpink; //Default manly colour
    alive = true; //They should be alive... they should be.
  }

  void display() { //Draws the bricks
  
    //Quick setup stuff, get out of the way
    rectMode(CENTER);
    noStroke();
    strokeWeight(3);
    
    //Activate rainbow mode onto the blocks if rainbow mode is on and the brick is alive
    if (rainbowOn) {
      if (alive) {
        c = color( int(random(150, 250)), int(random(150, 250)), int(random(150, 250)) );
      }
    } //I'm sorry if it hurts the eyes.
    
    //Draw the brick
    fill(c);
    rect(x, y, w, h, 10);
  }

  boolean getStatus() { //CHECK IF THE BRICK IS ALIVE
    return alive;
  }

  void die() { //Function to kill the brick
    alive = false; //They're not alive anymore
    c = darkblue; //Dead bricks are dark blue bricks
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/button.pde`,name:`button.pde`,size:2383,code:`// ============================== [ 07. BUTTON OBJECT ] ============================== //

//Oh old friend, it has been too long! How have you been?

class button {//Create a new class

  //Set up variables
  float x, y, w, h; //Standard issue rect() values
  color i, r, c; //Idle, rollover, clicked
  boolean mouseOn, clicked; //To check whether the mouse is hovering over or clicking the button
  String t; //Text

  button(String text, float tempX, float tempY, float tempW, float tempH, color tempI, color tempR, color tempC) {
    //To be honest, I don't need the colour parameters but it feels more flexible to me so I'm going to keep it.
    
    //Sets the values
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    i = tempI;
    r = tempR;
    c = tempC;
    t = text;
    
    mouseOn = false; //Mouse is not over it
    clicked = false; //It is not being clicked
  }

  void display() { //Function to draw the button
    update(); //Call the update function to check whether the mouse is over or if it has been clicked
    
    //Quick setup stuff
    rectMode(CENTER);
    stroke(pink);
    strokeWeight(5);
    
    //If the mouse is over
    if (mouseOn) {
      fill(r); //rollover colour
      if (clicked) { //If it's clicked
        fill(c); //clicked colour
      }
    } else {
      fill(i); //otherwise, idle colour
    }
    
    //Draw the rect
    rect(x, y, w, h, 20);
    
    //Draw the text over it
    fill(darkblue);
    textFont(body);
    textSize(36);
    textAlign(CENTER,CENTER);
    text(t, x, y);
  }

  void update() { //Function to check whether the mouse is over/button is being clicked
    if (mouseOver(x, y, w, h) == true) {
      mouseOn = true;
      if (click()) {
        clicked = true;
      } else {
        clicked = false;
      }
    } else {
      mouseOn = false;
    }
  }

  boolean mouseOver(float x, float y, float w, float h) { //Boolean to detect whether the mouse is over the button
    if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {
      return true;
    } else {
      return false;
    }
  }

  boolean click() { //Boolean to detect whether the mouse is being clicked over the button
    if (mouseOver(x, y, w, h) == true) {
      if (mousePressed) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/drawGame.pde`,name:`drawGame.pde`,size:2081,code:`// ============================== [ 08. GAME MENU SCREEN ] ============================== //

void drawGame() { //Function to draw the game. No, really.

  //Background
  tint(60, 60, 80);
  image(chalkboard, 0, 0, width, height);

  //Draw bricks
  breakout.build();

  //Draw paddle and ball
  player.display();
  ball.display();
  
  //Draw the pretty text at the bottom
  fill(lightblue);
  
  textFont(body);
  textSize(20);
  textAlign(LEFT, CENTER);
  text("lives: " + str(breakout.lives), 20, height/64*63); //Uses the value inside of the game class because I love objects

  textFont(body);
  textSize(20);
  textAlign(RIGHT, CENTER);
  text("points: " + str(breakout.points), width-20, height/64*63); //Uses the value inside of the game class because I love objects v.2

  if (breakout.active) { //If the game is active...
    ball.move(); //Get the ball moving!

    if (breakout.paused) { //If the game is paused, give them a reminder that hey, you paused the game, buddy.
      textFont(body);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Paused", xcenter, ycenter);
    } else { //If the game is not paused, give them a reminder that hey, you can pause the game, buddy.
      textFont(body);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("Click anywhere to pause", xcenter, height/64*63);
    }
  } else { //If the game is not active (ie: ball went off-screen)
    ball.rest(); //Ball go back to the rest position atop the paddle
    breakout.reset(); //Reset the game

    textFont(body); //Display cute text reminding them that hey, click to start the game, buddy
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(pink);
    text("Click anywhere to start", xcenter, ycenter); 
  }

  if (ball.missed()) { //If the ball misses (off screen)
    breakout.active = false; //GAME ENDS
    breakout.lives -= 1; //You lose a life! :C
  }

  if (ball.hitPaddle()) { //If the ball hits the paddle
    ball.reboundPaddle(); //BOUNCE
  }
  
  if (breakout.lives <= 0) { //If you have no more lives
    state = 3; //GAME OVER
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/game.pde`,name:`game.pde`,size:2040,code:`// ============================== [ 09. GAME OBJECT ] ============================== //

//Everything should be an object
//You get an object, YOU get an object, EVERYONE gets an object!

class game { //Create a new class
  
  //Set up the variables
  int points, lives;
  boolean active, paused;

  game() { //Simple, set the initial values
    points = 0;
    lives = 3; //Is 3 lives going to be enough?
    active = false; //Not active yet
    paused = false; //I'm going to be honest, I don't really understand why this one works
  }

  void build() { //BUILD THOSE BLOCKS aka WALL aka USA 2017 (also handy dandily checks for collision!)
    for (int i=0; i<(numBricks*numRows); i++) {
      bricks[i].display(); //draw them
      collision((i%13)*60+40, (i/13)*40+30, i); //check for collision
    }
  }

  void reset() { //Just recreates new bricks
    for (int i=0; i<(numBricks*numRows); i++) {
      bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
    }
  }

  void points() { //Adds points
    points += int(random(18, 24));
  }

  void collision(float bx, float by, int blockNum) { //Checks if the ball has collided with any brick
  
    //Shoutout to Liam
    
    //Sets up variables
    float x, y;
    x = ball.getX();
    y = ball.getY();
    
    //uses the ball's x and y return functions

    if ( (x >= bx - 25) && (x <= bx + 25) && (y >= by - 15) && (y <= by + 15) ) { //If the ball is within a brick's hitbox
      if (bricks[blockNum].getStatus()) { //Check if the brick is currently alive
        bricks[blockNum].die(); //If it is, it dies.
        ball.reboundBrick(); //Ball bounces
        breakout.points(); //Give some points
      }
    }
  }
  
}

void mousePressed() { //Small function using void mousePressed to start and pause the game
  if (ball.startPosition()) { //If the ball is at the starting position
    ball.moveStart(); //Get the ball moving
    breakout.active = true; //Game is ON
  } else {
    ball.pause(); //Otherwise, it probably means the game is already active, PAUSE THE GAME!
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/gameOver.pde`,name:`gameOver.pde`,size:750,code:`// ============================== [ 10. GAME OVER SCREEN ] ============================== //

//I'm sure I don't have to explain this...
//But I will.
//Because I'm a sweetheart.

void gameOver() { //Function to draw the game over menu

  //draw background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  //Cool text detailing your score
  textFont(title);
  textSize(72);
  textAlign(CENTER, CENTER);
  fill(lightpink);
  text("game over!", xcenter, ycenter-150);
  fill(lightblue);
  text("final score: " + str(breakout.points), xcenter, ycenter-50);
  
  //Display the button to return home
  main.display();
  
  //If its clicked, go back to the main menu
  if (main.click()) {
    state = 0;
    mousePressed = false;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/mainMenu.pde`,name:`mainMenu.pde`,size:1032,code:`// ============================== [ 11. MAIN MENU SCREEN ] ============================== //

//Three buttons, WHOA
//Yes, it's true. I really am a self-proclaimed object connoisseur!

void mainMenu() { //Function to draw the main menu
  
  //Background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  //Display all three buttons
  start.display();
  options.display();
  exit.display();
  
  //Title. No, seriously it's just the title
  textFont(title);
  textSize(84);
  fill(darkpink);
  text("Breakout", width/2*1.01, height/5*1.02);
  fill(pink);
  text("Breakout", width/2, height/5);
  
  //Button clicking
  if (start.click()) { //If the start button is clicked, state = game and make a new game object (reset)
    state = 2;
    breakout = new game();
    mousePressed = false;
  } else if (options.click()) { //If the options button is clicked, options screen now
    state = 1;
    mousePressed = false;
  } else if (exit.click()) { //If the exit button is clicked... then ok, bye.
    exit();
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/optionsMenu.pde`,name:`optionsMenu.pde`,size:1497,code:`// ============================== [ 12. OPTIONS SCREEN ] ============================== //

//Same old, same old

void optionsMenu() { //Draws the options menu

  //background
  tint(125, 125, 150);
  image(chalkboard, 0, 0, width, height);
  
  //Display all three buttons
  main.display();
  music.display();
  rainbow.display();
  
  //Title. Ok, not exactly. It says options.
  textFont(title);
  textSize(84);
  textAlign(CENTER,CENTER);
  fill(darkpink);
  text("Options", width/2*1.01, height/5*1.02);
  fill(pink);
  text("Options", width/2, height/5);
  
  //Button functionality
  if (main.click()) { //If the main menu button is clicked, return to the main menu
    state = 0;
    mousePressed = false;
    
  } else if (music.click()) { //If the music button is clicked...
  
    //Check whether music is currently on or off
    if (musicOn) { //If it's on, turn it off please
      music.t = "Music: OFF";
      musicOn = false;
    } else if (!musicOn) { //If it's off, turn those tunes up!
      music.t = "Music: ON";
      musicOn = true;
    }
    mousePressed = false;
    
  } else if (rainbow.click()) { //If the rainbow button is clicked
  
    //Check whether rainbow mode is currently on or off
    if (rainbowOn) { //If it's on, sleepy pink dream time
      rainbow.t = "Rainbow: OFF";
      rainbowOn = false;
    } else if (!rainbowOn) { //If it's off, time to go to the club
      rainbow.t = "Rainbow: ON";
      rainbowOn = true;
    }
    mousePressed = false;
  }
}`},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/paddle.pde`,name:`paddle.pde`,size:1005,code:`// ============================== [ 13. PADDLE OBJECT ] ============================== //

//This one is pretty simple.
//Most of the functionality (ie: hit detection) is shoved onto other objects.

class paddle { //Create a class

  //Set up variables
  PVector p;
  float w, h;
  color c;

  paddle() { //Initialize the variables!
    p = new PVector(xcenter, height/8*7);
    w = width/6;
    h = height/32;
    c = lightpink; //It's a soothing colour
  }

  void display() { //Draws the paddle
    p.x = constrain(mouseX, w/2, width - w/2); //Paddles must be constrained
    rectMode(CENTER);
    noStroke();
    fill(c);
    rect(p.x, p.y, w, h, 5);
  }
  
  //Floats to return values. I don't really need the last two but whatever. It's nice to stay consistent!
  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}

//I really enjoy documentation
//But don't tell anybody
// ('-')>P
//Or I'll use my axe`},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/Assignment_05.pde`,name:`Assignment_05.pde`,size:3884,code:`/*

[ -------------------- [ INFO ] -------------------- ]

Assignment 05: Animated Objects
Vincent Nguyen
04/18/2017

[ -------------------- [ BLURB ] -------------------- ]

Hello!

For this assignment, I really wanted to recreate rain BUT not just run-of-the-mill boring rectangular rain.
I wanted to make a rain object that would splash and split apart and create somewhat realistic looking
impacts. I also added in a mouse controlled umbrella (custom shape) which allows me to showcase the rain
particles splashing and falling off the side of the umbrella (it might be a bit hard to see). Afterwards,
I added a short story about a dog for fun. Anyway, that's pretty much all my program really does. Oh, and
there are some extra buttons apart from the time-freeze button just to fill in the space. Hope you enjoy.

As always, thanks for reading!

Vincent

[ -------------------- [ TABLE OF CONTENTS ] -------------------- ]

01. SETTING UP GLOBAL VARIABLES
02. VOID SETUP() AND ASSIGNING VALUES
03. VOID DRAW() AND A MENU SWITCH

[ -------------------- [ CREDITS ] -------------------- ]


[ Images ]

01. back01 [ https://i.imgur.com/C4r2jXu.jpg ]
02. back02 [ scromy.com/wp-content/uploads/2017/01/anime-city-scenery-wallpapers-hd-resolution.jpg ]
03. back03 [ https://s-media-cache-ak0.pinimg.com/originals/65/58/61/655861c7cf92b29d2c43cda51faa38bd.jpg ]
04. back04 [ http://www.toocraft.com/postpic/2010/05/beautiful-night-sky-anime_87454.jpg ]
05. back05 [ http://scromy.com/wp-content/uploads/2017/01/night-anime-scenery-wallpaper-full-hd.jpg ]
06. dog    [ http://4.bp.blogspot.com/-pU8NGCLtAic/U7BsXeiIXaI/AAAAAAAAABw/uNxkJ9JuFRg/s1600/perrito.png ]
  
[ Sound ]
  
01. rain    [ https://www.freesound.org/people/lebcraftlp/sounds/243628/ ]
02. thunder [ https://www.freesound.org/people/InspectorJ/sounds/360328/ ]

[ Fonts ]

01. New Cicle by TPK [ www.dafont.com/new-cicle.font ]

*/

// ============================== [ 01. SETTING UP GLOBAL VARIABLES ] ============================== //

//Sets up variables
PFont font;
PImage back01, back02, back03, back04, back05, dog;
ArrayList<Rain> rain = new ArrayList();
int state, textState, backState;
float opacity;
boolean frozen, colours;

//Sets up audio
import ddf.minim.*;
Minim minim;
AudioPlayer thunder, rains;

//Sets up objects
Button freeze, rainbow, backdrop;
Dog puppersnup;
Umbrella red;

// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //

void setup() {
  size(800,600);
  
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER,CENTER);
  
  smooth(8);
  noStroke();
  
  //Font
  font = loadFont("NewCicle-Semi-36.vlw");
  
  //Images
  back01 = loadImage("background01.png");
  back02 = loadImage("background02.png");
  back03 = loadImage("background03.png");
  back04 = loadImage("background04.png");
  back05 = loadImage("background05.png");
  dog = loadImage("doggo.png");
  
  //Text
  textFont(font);
  textSize(36);
  
  //Objects
  freeze = new Button("Freeze Time", width/16*4, height*0.94, width/4, height/10);
  rainbow = new Button("Candy Rain", width/16*8, height*0.94, width/4, height/10);
  backdrop = new Button("Background", width/16*12, height*0.94, width/4, height/10);
  puppersnup = new Dog();
  red = new Umbrella();
  
  //Audio
  minim = new Minim(this);
  
  rains = minim.loadFile("rain.mp3");
  rains.setGain(-10);
  rains.loop();
  
  thunder = minim.loadFile("thunder.mp3");
  thunder.setGain(-10);
  
  //Integers
  state = 0;
  textState = 0;
  
  //Float
  opacity = 255;
}

// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //

void draw() {
  
  audio(); //audio function
  
  switch(state) { //switch for screens
    case 0:
      drawIntro();
      break;
    case 1:
      drawGame();
      break;
    default:
      drawIntro();
      break;
  }
  
}`},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/Audio.pde`,name:`Audio.pde`,size:309,code:`void audio() { //audio function
  
  if (!rains.isPlaying()) { //if rain is not playing
    rains.cue(0); //restart it
  }
  
  if (!frozen) { //if time is not frozen...
    rains.play(); //play the rain sound
  } else {
    rains.pause(); //else, if frozen...
    thunder.pause(); //pause everything
  }
  
}`},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/Button.pde`,name:`Button.pde`,size:1149,code:`class Button { //Button class

  //Sets up variables
  PVector p;
  float w, h;
  String t;

  Button(String text, float tempX, float tempY, float tempW, float tempH) {
    p = new PVector(tempX, tempY);
    w = tempW;
    h = tempH;
    t = text;
  }

  //Display function
  void display() {

    noStroke();

    if (mouseOver(p.x, p.y, w, h)) { //If mouse is over button...
      fill(#FFFFFF, 10);
      if (click()) { //If mouse is over button AND clicked...
        fill(#FFFFFF, 30);
      }
    } else { //If mouse is not over button...
      fill(#FFFFFF, 0);
    }

    rect(p.x, p.y, w, h, 10); //Draw button
    fill(#FFFFFF);
    text(t, p.x, p.y); //Draw text
  }

  //Mouseover function
  boolean mouseOver(float x, float y, float w, float h) {
    if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) { //if mouse is over button...
      return true;
    } else {
      return false;
    }
  }

  //Clicked function
  boolean click() {
    if (mouseOver(p.x, p.y, w, h) && mousePressed) { //if mouse is over button & mouse is pressed...
      return true;
    } else {
      return false;
    }
  }
}`},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/Dog.pde`,name:`Dog.pde`,size:1239,code:`class Dog { //Dog object

  //Variables
  PVector p, v;
  float angle, speed, accel;
  
  Dog() {
    p = new PVector(random(35, width-35), height/64*55);
    v = new PVector(1, 0);
    angle = -15; //Dog's starting angle
    speed = 0;
    accel = 0.1;
  }
  
  //funky rotation display function
  void display() { 
    tint(255); //display the dog at full brightness
    pushMatrix(); //push Neo
    translate(p.x, p.y); //google translate that image, quick
    
    if (!frozen) { //if time is not frozen...
      rotate(radians(angle)); //rotate that sucker!
    }
    
    image(dog, 0, 0, 70, 70); //display the dog
    popMatrix(); //pop Neo
  }
  
  //move function
  void move() { 
    if (!frozen) {//if time is not frozen, move that sucker!
      p = p.add(v);
      angle += speed; //next level rotation code
      speed += accel;
    }
  }
  
  //update function
  void update() {
    if (p.x >= (width-35)) { //if the dog hits the wall, reverse speed
      v = v.set(-1, 0);
    } else if (p.x <= 35) { //same as before
      v = v.set(1, 0);
    }

    if (speed >= 2) { //if the dog is rotating too fast, reverse acceleration
      accel = -0.1;
    } else if (speed <= -2) { //same as before
      accel = 0.1;
    }
  }
}`},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/Rain.pde`,name:`Rain.pde`,size:2319,code:`class Rain { //Rain object

  //Variables
  PVector p, v, a, prev; //prev is a variable to store the PVector when time freezes
  float w, h, life; //life is used to determine the longevity of a single rain object
  color c;
  boolean splashed; //used later on for splashing rain

  Rain() {
    p = new PVector(random(0, width), -30);
    prev = new PVector(0, 0);
    v = new PVector(0, 0);
    a = new PVector(0, 0.1);
    w = random(2, 4);
    h = random(20, 40);
    life = 255;
    
    if (!colours) { //Decides the colour of the rain based on whether rainbow mode is on or not
      c = color(random(95, 121), random(127, 148), random(155, 175)); //regular blues
    } else {
      c = color(random(100,200), random(100,200), random(100,200)); //random colours
    }
  }
  
  //Display function
  void display() {
    fill(c,life); //colour
    if (!splashed) { //if the rain has not yet splashed...
      rect(p.x, p.y, w, h, 2); //rectangle
    } else { //if the rain has splashed...
      ellipse(p.x, p.y, w, w); //circle
    }
  }
  
  //Move function
  void move() {
    p = p.add(v); //makes the rain fall according to gravity
    v = v.add(a);
  }
  
  //Boolean function to kill the rain after a certain amount of time
  boolean finished() {
    if (!frozen) {
      life -= 1.0;
    }

    if (life < 0) { 
      return true;
    } else { 
      return false;
    }
  }
  
  //Collision function with the ground
  void collision() {

    if ( p.y >= height/8*7 && !splashed) { //if the rain has hit the ground and is a rectangle

      splashed = true; //make it splash
      p.y = p.y - random(10, 100); //move it back up
      
    } else if ( p.y >= height/8*7 && splashed) { //if the rain has hit the ground but has already splashed

      p.y = p.y - random(10, 100); //move it back up
      
    } else if ((p.x - w/2) >= (red.getX() - 45) && //UMBRELLA & RAIN COLLISION DETECTION START!!
               (p.x + w/2) <= (red.getX() + 45) &&
               (p.y + h/2) >= (red.getY() - 40) &&
               (p.y + h/2) <= (red.getY() + 40)) { 

                splashed = true; //it splashed on the umbrella
                
                p.x = red.getX() + random(-60, 60); //moves it to a random x and y position
                p.y = red.getY() - random(40, 100);
                
    }
  }
}`},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/Umbrella.pde`,name:`Umbrella.pde`,size:1576,code:`class Umbrella { //Umbrella object

  //Variables
  PVector p, prev; //prev stores previous position
  boolean grabbed; //boolean to check if mouse is "holding" the umbrella

  Umbrella() {
    p = new PVector(width/2,height/2);
    prev = new PVector(mouseX,mouseY);
    grabbed = false;
  }

  void display() {
    pushMatrix(); //push Neo
    
    translate(p.x,p.y-5);
    scale(4);
    
    fill(#404040); //Umbrella Handle
    beginShape();
      vertex(-1,-2);
      vertex(1,-2);
      vertex(1,4);
      vertex(2,5);
      vertex(3,4);
      vertex(4,5);
      vertex(4,6);
      vertex(3,7);
      vertex(1,7);
      vertex(0,6);
      vertex(-1,5);
    endShape();
    
    fill(#FF213F); //Umbrella Top
    beginShape();
      vertex(0,-1);
      vertex(-2.5,-3);
      vertex(-5,-1);
      vertex(-7.5,-3);
      vertex(-10,-1);
      vertex(-10,-7);
      vertex(-9,-9);
      vertex(-6,-12);
      vertex(-2,-13.5);
      vertex(2,-13.5);
      vertex(6,-12);
      vertex(9,-9);
      vertex(10,-7);
      vertex(10,-1);
      vertex(7.5,-3);
      vertex(5,-1);
      vertex(2.5,-3);
      vertex(0,-1);
    endShape();
    
    popMatrix(); //pop Neo
  }
  
  //Update function
  void update() {
    if (grabbed) { //if the umbrella is being "held"...
      p = p.set(mouseX, mouseY);
    } else if (!grabbed) { //if the umbrella is not being "held"...
      prev = prev.set(p.x, p.y); //store the PVector
      p = p.set(prev.x,prev.y);
    }
  }
  
  //Return functions for fun
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
}`},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/drawGame.pde`,name:`drawGame.pde`,size:3383,code:`void drawGame() { //drawGame function
  
  tint(100); //tints the background images to make them darker
  
  switch(backState) { //switch for image state
    case 0: image(back01, width/2, height/2); break;
    case 1: image(back02, width/2, height/2); break;
    case 2: image(back03, width/2, height/2); break;
    case 3: image(back04, width/2, height/2); break;
    case 4: image(back05, width/2, height/2); break;
    default: image(back01, width/2, height/2); break;
  }
  
  //Puppy functions
  puppersnup.display();
  puppersnup.move();
  puppersnup.update();
  
  //Umbrella functions
  red.display();
  red.update();

  //Freeze button
  if (freeze.click()) { //if button is clicked...
    if (frozen) { //if time is already frozen...
      frozen = false; //unfreeze
    } else if (!frozen) { //if time is not frozen...
      frozen = true; //freeze
    }
    mousePressed = false;
  }
  
  //Rainbow button
  if (rainbow.click()) { //if button is clicked...
    if (colours) { //if rainbow is already random...
      colours = false; //disable rainbow
    } else if (!colours) { //if rainbow is not active...
      colours = true; //enable it
    }
    mousePressed = false;
  }
  
  //Background image button
  if (backdrop.click()) { //If button is clicked...
    if (backState >= 5) { //if the background image state has reached the end...
      backState = 0; //set it back to the beginning
    }
    backState++; //move the background image state forward
    mousePressed = false;
  }
  
  //ArrayList "for" loop for the rain array
  for (Rain r : rain) {
    r.display(); //display rain

    if (!frozen) { //if time is not frozen...
      r.move(); //rain moves
    }
    
    r.collision(); //collision check with ground
  }
  
  //Regular "for" loop for the rain array
  for (int i=0; i < rain.size(); i++) {
    Rain r = rain.get(i);

    if (r.finished()) { //if rain's life span is < 0
      rain.remove(i); //remove it from the ArrayList
    }
  }
  
  //Regular "for" loop to spawn new rain objects
  for (int i=0; i < 5; i++) {
    if (!frozen) { //if time is not frozen...
      rain.add(new Rain()); //add rain!
    }
  }

  if (mouseX >= (red.getX() - 45) && mouseX <= (red.getX() + 45) && mouseY >= (red.getY() - 60) && mouseY <= (red.getY() + 30)) { //If mouse is over umbrella...
    cursor(HAND); //show hand cursor
    if (mousePressed && !frozen) { //if mouse is clicked and time is not frozen
      red.grabbed = true; //the umbrella is being "held"
    } else { //otherwise, let go of the umbrella
      red.grabbed = false;
    }
  } else { //if the mouse is not over the umbrella
    cursor(0); //return to regular cursor
    red.grabbed = false;
  }
  
  //fill and draw for the black rectangle at the bottom of the screen
  fill(#000000,180);
  rect(width/2, height, width, height/4);
  
  //display the 3 main buttons
  freeze.display();
  rainbow.display();
  backdrop.display();
  
  //random thunder code
  if (random(0, 500) > 498 && !frozen) {
    
    fill(255); //big, white flash on screen
    rect(width/2, height/2, width, height);
    
    if (!thunder.isPlaying()) { //if thunder sound is not playing
      thunder.cue(0); //reset it
    }
    thunder.play(); //and play the sound
  }
  
  //small, short black fade-in @ beginning of drawGame
  fill(#000000, opacity);
  rect(width/2, height/2, width, height);
  opacity -= 1;
}`},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/drawIntro.pde`,name:`drawIntro.pde`,size:1298,code:`void drawIntro() { //Short little intro function for funsies

  String intro = ""; //the text that is displayed

  fill(#000000, 20); //Black background. Opacity gives it a "fading" effect
  rect(width/2, height/2, width, height);

  fill(#FFFFFF, 10); //Short little tooltip @ the bottom in case anyone needs it
  text("Click to Continue", width/2, height/32*31);

  fill(#FFFFFF, 100); //For the main text!

  if (textState == 0) { //textState string thing begins here.
    intro = "Hello!";
  } else if (textState == 1) {
    intro = "Welcome to Vincent Nguyen's\\nAssignment 05: Animated Objects";
  } else if (textState == 2) {
    intro = "Here, you will play the role of a citizen\\ntrapped in a tragic thunderstorm\\nwith your faithful companion";
  } else if (textState == 3) {
    intro = "To hold the umbrella, hover your mouse over\\nand use the left mouse button to grab it";
  } else if (textState == 4) {
    intro = "Your goal...\\nis to protect your friend!";
  } else if (textState == 5) {
    intro = "Best of luck!\\n-Vincent";
  } else if (textState == 6) {
    state = 1;
  } //textState string thing ends here.

  text(intro, width/2, height/2); //display text

  if (mousePressed) { //Each time you click, progress the textState...
    textState++;
    mousePressed = false;
  }
}`},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/Assignment_06.pde`,name:`Assignment_06.pde`,size:3903,code:`/* [ ---------------------------------------- [ INFO ] ----------------------------------------- ]

Assignment 06: Tic Tac Toe
Vincent Nguyen
05/01/2017

[ ---------------------------------------- [ BLURB ] ---------------------------------------- ]

Hello!

For this assignment, I wanted to include another theme to use as a "skin" over my program.
This time, I decided to go with Overwatch. There's not much more to say about this assignment.
The win/loss check process will be explained further in the attached Google Doc. Hope you enjoy.

As always, thanks for reading!

Vincent

[ ---------------------------------- [ TABLE OF CONTENTS ] ---------------------------------- ]

01. SETTING UP GLOBAL VARIABLES
02. VOID SETUP() AND ASSIGNING VALUES
03. VOID DRAW() AND A MENU SWITCH

[ --------------------------------------- [ CREDITS ] --------------------------------------- ]

[ Images ]

01. overwatch  [ http://www.overwatch.com.ar/foro/uploads/monthly_2016_05/100.png.2c687e97e3326129bb27bce2e96d0b4c.png ]
02. blackwatch [ http://pl.overwatch.wikia.com/wiki/Plik:Blackwatch.png ]
03. title      [ https://supernovicedotnet.files.wordpress.com/2016/04/overwatch_logo.png ]
04. kingsrow   [ http://vignette4.wikia.nocookie.net/overwatch/images/5/54/Kings_Row_009.jpg ]

[ Sound ]

01. introMusic [ https://www.youtube.com/watch?v=xdwNAD7YPGI ]
02. menuMusic  [ https://www.youtube.com/watch?v=Q1oXMy9VZQA ]
03. gameMusic  [ https://www.youtube.com/watch?v=MRhkZsRs0t4 ]
04. hit        [ http://ow.thnuclub.com/?tag=83 ]

*/

// ============================== [ 01. SETTING UP GLOBAL VARIABLES ] ============================== //


//Images, integers, booleans
PImage overwatch, blackwatch, kingsrow, title;
int cols, rows, state, textState;
boolean singleplayer, debug;

//Audio
import ddf.minim.*;
Minim minim;
AudioPlayer introMusic, menuMusic, gameMusic, hit;

//Objects
Button ai, two, exit;
Cell[][] board;
Game tictactoe;

// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //

void setup() {
  size(768, 768); //typical setup stuff
  smooth(8); //anti-aliasing
  
  //set every mode to corner...
  rectMode(CORNER);
  ellipseMode(CORNER);
  imageMode(CORNER);
  
  //i lied.
  textAlign(CENTER, CENTER);
  
  //start off with singleplayer tic-tac-toe enabled
  singleplayer = true;
  //debug just shows me which situations the AI has chosen to play
  debug = false;
  
  //load images
  overwatch = loadImage("overwatch.png");
  blackwatch = loadImage("blackwatch.png");
  kingsrow = loadImage("kingsrow.jpg");
  title = loadImage("title.png");
  
  //a whole lot of audio things
  minim = new Minim(this);
  
  hit = minim.loadFile("hit.mp3");
  hit.setGain(-2);
  introMusic = minim.loadFile("collection.mp3");
  introMusic.setGain(-12);
  menuMusic = minim.loadFile("menu.mp3");
  menuMusic.setGain(-12);
  gameMusic = minim.loadFile("roundstart.mp3");
  gameMusic.setGain(-8);
  
  //load audio, then set the gain so that hopefully it will not blow out anyone's eardrums.
  //hopefully.
  
  //menu state & text state (for intro)
  state = 0;
  textState = 0;
  
  //sets the board size
  cols = rows = 3;
  board = new Cell[cols][rows];
  
  //the main menu buttons
  ai = new Button("Singleplayer", 0, height/16*7);
  two = new Button("2 Players", 0, height/16*9);
  exit = new Button("Exit", 0, height/16*11);
  
  //creates a new tic-tac-toe game and resets it
  tictactoe = new Game();
  tictactoe.reset();
}

// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //

void draw() {
  
  audio(); //audio function
  
  /* [NOTES]
  
  for state:
  0 = intro
  1 = main menu
  2 = main game
  
  */
  
  switch (state) { //a simple menu switch
    case 0: drawIntro(); break;
    case 1: drawMenu(); break;
    case 2: drawGame(); break;
    default: drawIntro(); break;
  }
}`},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/Audio.pde`,name:`Audio.pde`,size:979,code:`void audio() { //a simple audio function... no, really.

  /* [NOTES]
   
   for state:
   0 = intro
   1 = main menu
   2 = main game
   
   */

  if (state == 0) { //intro screen...

    if ( !introMusic.isPlaying() ) { //check if intro music is not playing...
      introMusic.cue(0); //if not, reset it
    }

    introMusic.play(); //and play it.
    
  } else if (state == 1) { //main menu...

    introMusic.pause(); //pause other audio first, just in case you're a sassy soo
    gameMusic.pause(); //who skips dialogue in story driven games, grumble grumble.

    if ( !menuMusic.isPlaying() ) { //check if menu music is not playing
      menuMusic.cue(0); //if not, reset it
    }

    menuMusic.play();//and play it.
    
  } else if (state == 2) { //game time...

    menuMusic.pause(); //pause the menu music

    if ( !gameMusic.isPlaying() ) { //same as before, check...
      gameMusic.cue(0); //and reset!
    }

    gameMusic.play(); //play the game music!
  }
}`},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/Button.pde`,name:`Button.pde`,size:1658,code:`class Button { //we've gone over this a million times now...

  //variables
  PVector p;
  float w, h, o; //o = opacity
  String t;

  Button(String text, float tempX, float tempY) {
    p = new PVector(tempX, tempY);
    w = width; //the entire width of the window! Yeah, we're cool now!
    h = 60; //not the entire height...
    o = 0; //opacity starts at 0
    t = text; //it's simple stuff, really.
  }

  void display() {
    noStroke(); //i do not like strokes
    o -= 2; //"fading away" effect... i like it :D
    
    if (mouseOver(p.x,p.y,w,h)) { //if mouse is over button...
      o = 100; //set the opacity to 100
      if (click()) { //if mouse clicks...
        o = 150; //set opacity to 150
      } 
    }
    
    fill(#E8E8E8, o); //fill grey, according to opacity
    rect(p.x, p.y, w, h); //draw rectangle

    fill(#FFFFFF);
    textSize(32); //draw text on button
    text(t, p.x+w/2, p.y+h/2);
  }
  
  boolean mouseOver(float x, float y, float w, float h) { //the same rollover function as before, now tuned for corner mode!
    if (mouseX >= (x) && mouseX <= (x+w) && mouseY >= (y) && mouseY <= (y+h)) {
          return true;
        } else {
          return false;
        }
  }
  
  boolean click() { //oh yes, tuned for corner mode as well!
    if (mouseOver(p.x, p.y, w, h) == true) {
      if (mousePressed) {
        
        if ( !hit.isPlaying() ) { //this is new? Ah yes, the audio for button clicks.
          hit.cue(0); //if it's not playing, reset it,
        }
        hit.play(); //and play it.
          
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}`},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/Cell.pde`,name:`Cell.pde`,size:3315,code:`class Cell { //The meat of the game.

  //Not fun to document... but it's better than documenting Game.

  //Super simple variables. State is explained further below
  PVector p;
  float w, h;
  int state;

  Cell(float tempX, float tempY, float tempW, float tempH) {
    p = new PVector(tempX, tempY);
    w = tempW;
    h = tempH;
    state = 0;
  }
  
  /* [NOTE]
  
  for state:
  0 = blank space
  1 = cross (X) [in this case, Overwatch]
  2 = circle (O) [in this case, Blackwatch]
  
  */
  
  void click(float mx, float my) { //oh yes oh yes, the click function
    
    if (mx >= p.x && mx <= (p.x+w) && my >= p.y && my <= (p.y+h)) { //mx and my is basically mouseX and mouseY... or A POSSIBLE WAY FOR AI TO CLICK??

      if (state == 0) { //if state of cell is 0...
      
        //draw a cool highlight thing
        noStroke();
        fill(#FFFFFF, 50);
        rect(p.x, p.y, w, h);
        
        if (tictactoe.player == 2) { //but how can there be 3 players??? Maybe... a robot?
          state = 2; //set cell to circle
          tictactoe.player = 0; //return control to player... human player, of course.
          tictactoe.full += 1; //full will be explained in the game class... in short, a check method for ties
        }
        
        if (mousePressed) { //if mouse is clicked...

          if (tictactoe.player == 0) { //if player = 0 (ie: the first gent/lady)
          
            state = 1; //set cell to cross
            
            if (singleplayer) { //if singleplayer is enabled...
              tictactoe.player = 2; //who is this mysterious 3rd contender?
            } else if (!singleplayer) { //if no singleplayer...
              tictactoe.player = 1; //set turn to player = 1 (ie: the second gent/lady)
            }
            
            tictactoe.full += 1; //add to the tie check method
            
          } else if (tictactoe.player == 1) { //if player = 1 (ie: the second gent/lady)
            
            //wow there's much less in here...
            state = 2; //set cell to circle
            tictactoe.player = 0; //return control to first gent/lady
            tictactoe.full += 1; //add to the tie check method
            
          }
          
          if ( !hit.isPlaying() ) { //return of the hit sound, for cells now.
            hit.cue(0); //same as before, check if playing. If not, reset.
          }
          hit.play(); //play sound
          mousePressed = false; //disable mouse to prevent speedruns
        }
      }
    }
  }

  void display() { //display function
  
    strokeWeight(5); //i like strokes now
    noFill();

    if (state == 1) { //if cross...
    
      //if you would like to go without images, enable this??
      //stroke(255, 100, 100);
      //line(p.x, p.y, (p.x+w), (p.y+h));
      //line((p.x+w), p.y, p.x, (p.y+h));
      
      //but no one wants that...
      image(overwatch,p.x+10,p.y+10,w-20,h-20);
      
    } else if (state == 2) { //if circle...
    
      //same as before
      //stroke(100, 100, 255);
      //ellipse(p.x+5, p.y+5, w-10, h-10);
      
      //images are better
      image(blackwatch,p.x+10,p.y+10,w-20,h-20);
      
    }
    
    //draw a grid
    stroke(#FFFFFF,50);
    rect(p.x, p.y, w, h);
  }
  
  //lonely return function
  int getState() {
    return state;
  }
}`},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/Game.pde`,name:`Game.pde`,size:14152,code:`class Game { //I had to document this before so i wouldn't get myself confused and lost.

  //welcome to the reckoning.
  
  //simple variables
  int player, winner, full;
  boolean gameover;

  Game() {
    player = 0; //starts off with player one
    winner = 0; //no winner. not yet.
    full = 0; //used to check whether a tie has occurred. Further explanation found below in checkWin()
    gameover = false; //game is not over yet.
  }

  void reset() {
    for (int i = 0; i < cols; i++) { //resets the board using a for loop. 
      for (int j = 0; j < rows; j++) { //creates new cells to play with.
        board[i][j] = new Cell(width/3*i, height/3*j, width/3, height/3);
      }
    }
  }

  void display() {
    for (int i = 0; i < cols; i++) { //displays every cell on the board
      for (int j = 0; j < rows; j++) { //using a for loop, again.
        board[i][j].display();
      }
    }
  }
  
  void interaction() {
    for (int i = 0; i < cols; i++) { //what's this, another one??
      for (int j = 0; j < rows; j++) { //it's just mouse interaction with the cells.
        board[i][j].click(mouseX, mouseY);
      }
    }
  }
  
  void checkWin() { //The beast among beasts... until we get to player 3, anyway.
  
  for (int i = 0; i < cols; i++) { //for loop used all throughout.

           //==========[ Check vertical & horizontal for both cross and circle ]==========//
           
           //-----[ CROSS BEGINS HERE ]-----//
           
           if (board[i][0].getState() == 1 &&
               board[i][1].getState() == 1 &&
               board[i][2].getState() == 1) { //detects whether any vertical column contains all crosses...
               
               //Cross win vertical
               winner = 1; //set winner to cross
               gameover = true; //end game
        
    } else if (board[0][i].getState() == 1 &&
               board[1][i].getState() == 1 &&
               board[2][i].getState() == 1) { //detects whether any horizontal row contains all crosses...

               //Cross win horizontal
               winner = 1;
               gameover = true;
               
           //-----[ CIRCLE BEGINS HERE ]-----//
               
    } else if (board[i][0].getState() == 2 &&
               board[i][1].getState() == 2 &&
               board[i][2].getState() == 2) { //detects whether any vertical column contains all circles...

               //Circle win vertical
               winner = 2;
               gameover = true;
               
    } else if (board[0][i].getState() == 2 &&
               board[1][i].getState() == 2 &&
               board[2][i].getState() == 2) { //detects whether any horizontal row contains all circles...

               //Circle win horizontal
               winner = 2;
               gameover = true;
    }

           //==========[ Check diagonals for both cross and circle ]==========//
           
           //-----[ CROSS BEGINS HERE ]-----//
           
           if (board[0][0].getState() == 1 &&
               board[1][1].getState() == 1 &&
               board[2][2].getState() == 1) { //if diagonal from top left to bottom right are all crosses...
  
               //Cross win diagonal [\\] <-- what it looks like
               winner = 1;
               gameover =  true;
        
    } else if (board[0][2].getState() == 1 &&
               board[1][1].getState() == 1 &&
               board[2][0].getState() == 1) { //if diagonal from top right to bottom left are all crosses...

               //Cross win diagonal [/]
               winner = 1;
               gameover = true;
               
           //-----[ CIRCLE BEGINS HERE ]-----//
               
    } else if (board[0][0].getState() == 2 &&
               board[1][1].getState() == 2 &&
               board[2][2].getState() == 2) { //if diagonal from top left to bottom right are all circles...

               //Circle win diagonal [\\]
               winner = 2;
               gameover = true;
               
    } else if (board[0][2].getState() == 2 &&
               board[1][1].getState() == 2 &&
               board[2][0].getState() == 2) { //if diagonal from top right to bottom left are all circles...

               //Circle win diagonal [/]
               winner = 2;
               gameover = true;
    }
  }
  
    if (full == 9) { //if full = 9, ie: all cells have been filled...
      gameover = true; //end the game in a tie.
    }
  
  }
  
  /*
  
  the big reveal! yes! i did go off and code an AI.
  it is of course, the legendary third player that i have spoke of.
  mind you, she is quite smart, but not perfect in any sense of the word.
  so please do not blame me if she misses an easy win. thank you.
  
  please look forward to it.
  
  */
  void AI() { //I documented this as i went... because if i did not, i would be very, very lost.
    if (player == 2) { //if it is the AI's turn...
    
      for (int i = 0; i < cols; i++) { //initialize for loop central
        for (int j = 0; j < rows; j++) { //this one is only used @ the end
                       
          //===============[ VERTICAL, HORIZONTAL CHECKS BEGIN HERE ]===============//
                       
                       //vertical, row 1 check
                       
                   if (board[i][0].getState() != 2 && //is not circle
                       board[i][1].getState() == 1 &&
                       board[i][2].getState() == 1) { //checks if the bottom 2 rows are crosses and the top row is not a circle.
              
                       board[i][0].click(width/3*i + width/6, height/3*0 + width/6); //clicks accordingly in that position. This repeats further below.
                       
                       if (debug) {println("hit top row");}
                       
                       /* i made all these grids to remind myself where I was
                       
                       [o][o][o] <-- hit this line
                       [x][x][x]
                       [x][x][x]
                       
                       */
                       
                       //vertical, row 2 check
              
            } else if (board[i][0].getState() == 1 &&
                       board[i][1].getState() != 2 &&
                       board[i][2].getState() == 1) { //checks if the top and bottom rows are crosses and the middle row is not a circle.
              
                       board[i][1].click(width/3*i + width/6,height/3*1 + width/6);
                       
                       if (debug) {println("hit middle row");}
                       
                       /*
                       
                       [x][x][x]
                       [o][o][o] <-- hit this line
                       [x][x][x]
                       
                       */
                       
                       //vertical, row 3 check
              
            } else if (board[i][0].getState() == 1 &&
                       board[i][1].getState() == 1 &&
                       board[i][2].getState() != 2) { //checks if the top 2 rows are crosses and bottom is not a circle.
                       
                       board[i][2].click(width/3*i + width/6,height/3*2 + width/6);
                       
                       if (debug) {println("hit bot row");}
                       
                       /*
                       
                       [x][x][x]
                       [x][x][x]
                       [o][o][o] <-- hit this line
                       
                       */
                       
                       //horizontal, column 1 check
                       
            } else if (board[0][i].getState() != 2 &&
                       board[1][i].getState() == 1 &&
                       board[2][i].getState() == 1) { //checks if the right 2 columns are crosses and left is not a circle.
              
                       board[0][i].click(width/3*0 + width/6,height/3*i + width/6);
                       
                       if (debug) {println("hit left col");}
                       
                       /*
                       
                       [o][x][x]
                       [o][x][x]
                       [o][x][x]
                        ^-- hit this line
                       
                       */
                       
                       //horizontal, column 2 check
              
            } else if (board[0][i].getState() == 1 &&
                       board[1][i].getState() != 2 &&
                       board[2][i].getState() == 1) { //checks if the left and right columns are crosses and middle is not a circle.
              
                       board[1][i].click(width/3*1 + width/6,height/3*i + width/6);
                       
                       if (debug) {println("hit mid col");}
                       
                       /*
                       
                       [x][o][x]
                       [x][o][x]
                       [x][o][x]
                           ^-- hit this line
                       
                       */
                       
                       //horizontal, column 3 check
              
            } else if (board[0][i].getState() == 1 &&
                       board[1][i].getState() == 1 &&
                       board[2][i].getState() != 2) { //checks if the left 2 columns are crosses and right is not a circle.
              
                       board[2][i].click(width/3*2 + width/6,height/3*i + width/6);
                       
                       if (debug) {println("hit right col");}
                       
                       /*
                       
                       [x][x][o]
                       [x][x][o]
                       [x][x][o]
                              ^-- hit this line
                       
                       */
                       
            //===============[ DIAGONAL CHECKS BEGIN HERE ]===============//
              
            } else if (board[0][0].getState() != 2 &&
                       board[1][1].getState() == 1 &&
                       board[2][2].getState() == 1) { //I can't really explain these well in text... just look at my diagrams below.
              
                       board[0][0].click(width/3*0 + width/6,height/3*0 + width/6);
                       
                       if (debug) {println("hit diag 1");}
                       
                       /*
                       
                       [o][-][-]
                       [-][x][-]
                       [-][-][x]
                        ^-- hit this spot (designated by circle)
                       
                       */
              
            } else if (board[0][0].getState() == 1 &&
                       board[1][1].getState() != 2 &&
                       board[2][2].getState() == 1) {
              
                       board[1][1].click(width/3*1 + width/6,height/3*1 + width/6);
                       
                       if (debug) {println("hit diag 2");}
                       
                       /*
                       
                       [x][-][-]
                       [-][o][-]
                       [-][-][x]
                           ^-- hit this spot
                       
                       */
              
            } else if (board[0][0].getState() == 1 &&
                       board[1][1].getState() == 1 &&
                       board[2][2].getState() != 2) {
              
                       board[2][2].click(width/3*2 + width/6,height/3*2 + width/6);
                       
                       if (debug) {println("hit diag 3");}
                       
                       /*
                       
                       [x][-][-]
                       [-][x][-]
                       [-][-][o]
                              ^-- hit this spot
                       
                       */
              
            } else if (board[0][2].getState() != 2 &&
                       board[1][1].getState() == 1 &&
                       board[2][0].getState() == 1) {
              
                       board[0][2].click(width/3*0 + width/6,height/3*2 + width/6);
                       
                       if (debug) {println("hit diag 4");}
                       
                       /*
                       
                       [-][-][x]
                       [-][x][-]
                       [o][-][-]
                        ^-- hit this spot
                       
                       */
              
            } else if (board[0][2].getState() == 1 &&
                       board[1][1].getState() != 2 &&
                       board[2][0].getState() == 1) {
              
                       board[1][1].click(width/3*1 + width/6,height/3*1 + width/6);
                       
                       if (debug) {println("hit diag 5");}
                       
                       /*
                       
                       [-][-][x]
                       [-][o][-]
                       [x][-][-]
                           ^-- hit this spot
                       
                       */
              
            } else if (board[0][2].getState() == 1 &&
                       board[1][1].getState() == 1 &&
                       board[2][0].getState() != 2) {
              
                       board[2][0].click(width/3*2 + width/6,height/3*0 + width/6);
                       
                       if (debug) {println("hit diag 6");}
                       
                       /*
                       
                       [-][-][o]
                       [-][x][-]
                       [x][-][-]
                              ^-- hit this spot
                       
                       */
              
            } else { //if the AI cannot find any suitable moves, just do a random one!
                       board[i][j].click(width/3*random(3) + 50,height/3*random(3) + 50);
                       //println("hit random");
          }
        }
      }
    }
  }
}`},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/drawGame.pde`,name:`drawGame.pde`,size:1663,code:`void drawGame() { //simple simple function
  
  background(#1E2225); //dark colours for maximum edge
  
  tictactoe.display(); //display the board
  
  if (!tictactoe.gameover) { //if game isn't over yet
    
    tictactoe.interaction(); //allow mouse interaction
    tictactoe.checkWin(); //check for wins
    
    if (singleplayer) { //if singleplayer is enabled
      tictactoe.AI(); //unleash the beast
    }
    
  } else { //otherwise, (ie: game is over)

    fill(#000000, 220); //black
    rect(0, 0, width, height); //rectangle

    fill(255);
    textSize(72); //display "win" text based on winner
    
    if (tictactoe.winner == 1) {
      text("Overwatch wins!", width/2, height/2);
    } else if (tictactoe.winner == 2) {
      text("Blackwatch wins!", width/2, height/2);
    } else if (tictactoe.winner == 0 && tictactoe.full == 9) {
      text("Tie!", width/2, height/2);
    }
    
    textSize(36); //display return text
    text("press SPACEBAR to restart\\npress ESC to return to main menu", width/2, height/8*7); 
  }
}

void keyPressed() { //to restart game or return to menu

  if (state == 2) { //if on game screen
  
    if (tictactoe.gameover) { //and game is over
      
      if (key == ' ') { //and key is spacebar
        
        tictactoe = new Game(); //restart the game!
        tictactoe.reset();
        
      } else if (key == ESC) { //if key is escape
        
        key = 0; //disable the key so processing doesn't exit
        tictactoe = new Game(); //reset game for next time
        tictactoe.reset();
        background(0); // clean up background
        state = 1; //return to main menu
        
      }
    }
  }
}`},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/drawIntro.pde`,name:`drawIntro.pde`,size:1264,code:`void drawIntro() { //I literally stole this from my previous assignment
  //because i like it so much.
  
  String intro = ""; //string for the text you read
  
  fill(#000000, 20); //black background, opacity creates "fading" effect
  rect(0,0, width, height);

  fill(#FFFFFF, 10); //tooltip in case anyone needs it
  text("Click to Continue", width/2, height/16*15);

  fill(#FFFFFF, 100); //set text starts here

  if (textState == 0) {
    intro = "Hello!";
  } else if (textState == 1) {
    intro = "Welcome to Vincent Nguyen's\\nAssignment 06: Tic Tac Toe";
  } else if (textState == 2) {
    intro = "This time I decided to go with an\\nOverwatch theme as it is one of my\\nfavourite games to play";
  } else if (textState == 3) {
    intro = "Your job as an Overwatch agent\\n is to defeat the Blackwatch\\nin a round of Tic Tac Toe!";
  } else if (textState == 4) {
    intro = "Do your best to beat the competition\\nand secure freedom!";
  } else if (textState == 5) {
    intro = "Best of luck!\\n-Vincent";
  } else if (textState == 6) {
    state = 1;
  } //set text ends here
  
  textSize(36);
  text(intro, width/2, height/2); //draw text

  if (mousePressed) { //clicking the mouse advances the text
    textState++;
    mousePressed = false;
  }
  
}`},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/drawMenu.pde`,name:`drawMenu.pde`,size:793,code:`void drawMenu() { //barebones menu
  
  background(0);
  tint(#FFFFFF,80);
  image(kingsrow, 0, 0, width, height); //draw a tinted image of king's row
  
  //display la 3 buttons
  ai.display();
  two.display();
  exit.display();
  
  //display la sub-title
  fill(255);
  textSize(72);
  text("Tic-Tac-Toe", width/2, height/32*9);
  
  //display la actual title
  tint(#FFFFFF);
  image(title,width/16,height/8);
  
  //click detecto
  if (ai.click()) { //one player
    
    singleplayer = true; //enable singleplayer
    state++; //move onto game
    mousePressed = false;
    
  } else if (two.click()) { //two player
    
    singleplayer = false; //disable singleplayer
    state++; //move onto game
    mousePressed = false;
    
  } else if (exit.click()) {
    exit(); //goodbye
  }
}`},{path:`/2017/Just for Fun/Ben_Hines/Ben_Hines.pde`,name:`Ben_Hines.pde`,size:1621,code:`
//for benjamin-kouhai-chan

PImage backdrop, title;
PFont font;

//important stuff is commented
float opacity = 50; //the god variable.
float speed = 5; //how fast the opacity changes (set this to whatever you want)

void setup() {
  
  //nothing here matters
  size(1280, 720);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(LEFT, CENTER);
  backdrop = loadImage("background.jpg"); 
  title = loadImage("title.png");
  font = loadFont("Dotum-36.vlw");
}

void draw() {
  
  //runs the opacity function constantly
  updateOpacity(); //this changes the opacity between 50-100 to simulate that cool shit
  
  image(backdrop, width/2, height/2, width, height);
  image(title, width/6*5, height/8*7);
  
  button("Play Single Player", width/2, 600, 300, 50); //vincent's patented button function
}

void updateOpacity() {
  
  //opacity = opacity + speed
  opacity += speed;
  
  if (opacity >= 100 || opacity <= 50) { //if opacity is greater than 100 or less than 50...
    speed *= -1; //speed reverses. This keeps the opacity within an area. Adjust as you desire.
  }
}

void button(String t, float x, float y, float w, float h) { //you dont have to copy this

  noStroke(); //fuck borders
  if (mouseX >= x-w/2 && mouseX <= x+w/2 && mouseY >= y-h/2 && mouseY <= y+h/2) {
    fill(#BFBFBF, int(opacity)); //if rollover = true, fill(grey,opacity). We use int() because fill only accepts integers
  } else {
    fill(#BFBFBF, 0); //if rollover = false, fill(grey,invisible)
  }
  rect(x, y, w, h); //draw the rectangle

  fill(#FFFFFF, 200);
  textFont(font);
  textSize(36);
  text(t, (x-w/2), y); //draw the text
}
`},{path:`/2017/Just for Fun/Krishna/Krishna.pde`,name:`Krishna.pde`,size:288,code:`int myHips = 8;
float areMoving = 4.5;
char onTheirOwn = 'm';
String Oniichan = "Krishna";

void setup() {
  size(400, 400);
  background(#394642);
}

void draw() {
  noStroke();
  fill(#00FFC1);
  textSize(36);
  text("KRISHNA NIICHAN",width/8,height/2);
  print("krishna oniichan. ");
}`},{path:`/2017/Just for Fun/Life_Is_Strange/Life_Is_Strange.pde`,name:`Life_Is_Strange.pde`,size:4794,code:`/*
██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗
 ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
 
 ██╗   ██╗██╗███╗   ██╗ ██████╗███████╗███╗   ██╗████████╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
 ██║   ██║██║████╗  ██║██╔════╝██╔════╝████╗  ██║╚══██╔══╝    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
 ██║   ██║██║██╔██╗ ██║██║     █████╗  ██╔██╗ ██║   ██║       ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
 ╚██╗ ██╔╝██║██║╚██╗██║██║     ██╔══╝  ██║╚██╗██║   ██║       ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
 ╚████╔╝ ██║██║ ╚████║╚██████╗███████╗██║ ╚████║   ██║       ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
 ╚═══╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝
 
 ██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗
 ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
 */

PFont title, buttons;
float opacity;
float y;

Button start, options, exit;

void setup() {
  size(800, 600);
  smooth(8);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  title = loadFont("AgencyFB-Reg-96.vlw");
  buttons = loadFont("AgencyFB-Bold-40.vlw");
  
  y = height/2;
  opacity = 0;

  start = new Button("NEW GAME", width/2, height/2);
  options = new Button("SETTINGS", width/2, height/2 + 80);
  exit = new Button("EXIT", width/2, height/2 + 160);
}

void draw() {
  fill(random(256), 100, random(256), 10);
  rect(width/2, height/2, width, height);

  if (opacity <= 20) {
    opacity += 0.05;
  } else if (opacity >= 15 && y >= height/4) {
    y -= 1;
  } else {
    start.display();
    options.display();
    exit.display();
  }

  fill(#FFFFFF, opacity);
  textFont(title);
  textSize(96);
  text("- E R A S E D -", width/2, y);
}

class Button {

  float x, y, w, h, o, v;
  String t;

  Button(String text, float tempX, float tempY) {
    t = text;
    x = tempX;
    y = tempY;
    w = width;
    h = 60;
    o = 10;
  }

  void display() {
    noStroke();
    if (rollover(x,y,w,h)) {
      o = 10;
      update();
      fill(#E8E8E8, o);
    } else {
      fill(0,0,0,0);
    }
    rect(x, y, w, h);

    fill(#FFFFFF, 15);
    textFont(buttons);
    textSize(40);
    text(t, x, y);
  }

  void update() {
    o -= 0.5;
  }
  
  boolean rollover(float x, float y, float w, float h) {
    if (mouseX >= (x-w/2) &&
        mouseX <= (x+w/2) &&
        mouseY >= (y-h/2) &&
        mouseY <= (y+h/2)) {
          return true;
        } else {
          return false;
        }
  }
}`},{path:`/2017/Just for Fun/Text_Flash/Text_Flash.pde`,name:`Text_Flash.pde`,size:563,code:`String words;
float n;

void setup() {
  size(400, 400);
  n = 0;
}

void draw() {
  background(#000000);
  sentence();
  textSize(36);
  textAlign(CENTER);
  text(words, width/2, height/2);
}

void sentence() {
  n += 0.075;
  if (n <= 1) {
    words = "hey";
  } else if (n <= 2) {
    words = "what's";
  } else if (n <= 3) {
    words = "up";
  } else if (n <= 4) {
    words = "guys,";
  } else if (n <= 5) {
    words = "it's";
  } else if (n <= 6) {
    words = "scarce";
  } else if (n <= 7) {
    words = "here.";
  } else if (n <= 8) {
    n = 0;
  } 
}`},{path:`/2017/Lessons/Control_Structures_01/Control_Structures_01.pde`,name:`Control_Structures_01.pde`,size:1202,code:`/*

 Control Structures
 02/22/2017
 
 */

int clicks;
float x1, y1, x2, y2, m1, m2;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);
  clicks = 0;
  background(#A2C6D3);
}

void draw() {
  m1 = ((x1 + x2)/2);
  m2 = ((y1 + y2)/2);
}

void mouseClicked() {
  clicks += 1;

  //Points & Line
  /*
  strokeWeight(5);
   textSize(14);
   textAlign(CENTER);
   fill(#FFFFFF);
   if (clicks == 1) {
   x1 = mouseX;
   y1 = mouseY;
   point(x1, y1);
   text(str(x1) + ", " + str(y1), x1, y1 -20);
   } else if (clicks == 2) {
   x2 = mouseX;
   y2 = mouseY;
   point(x2, y2);
   text(str(x2) + ", " + str(y2), x2, y2 -20);
   } else if (clicks == 3) {
   line(x1, y1, x2, y2);
   text(str(m1) + ", " + str(m2), m1, m2 -20);
   } else if (clicks == 4) {
   background(#A2C6D3);
   clicks = 0;
   }
   */

  //Rectangle
  /*
  stroke(#FFFFFF);
   strokeWeight(5);
   fill(#08FF89);
   rectMode(CENTER);
   if (clicks == 1) {
   x1 = mouseX;
   y1 = mouseY;
   point(x1, y1);
   } else if (clicks == 2) {
   x2 = mouseX;
   y2 = mouseY;
   point(x2, y2);
   } else if (clicks == 3) {
   rect(m1,m2,(x2-x1),(y2-y1));
   } else if (clicks == 4) {
   background(#A2C6D3);
   clicks = 0;
   }
   */
}`},{path:`/2017/Lessons/Drawing_Shapes_01/Drawing_Shapes_01.pde`,name:`Drawing_Shapes_01.pde`,size:1372,code:`//Setup
void setup() {
  size(400,400);
  background(#EAEAEA);
}

void draw() {
  
  //--------------------------------------------Drawings 01-------------------------------------------------//
  
  ////White Circle
  //noStroke();
  //fill(#FFFFFF);
  //ellipse(200,200,300,300);

  ////Grey Lines
  //stroke(#DBDBDB);
  //strokeWeight(10);
  //line(0,0,400,400);
  //line(400,0,0,400);

  ////Pink Circle
  //noStroke();
  //fill(#FF6464);
  //ellipse(200,200,200,200);
  
  //--------------------------------------------Drawings 02-------------------------------------------------//
  
  ////Green Stroke Rectangle
  //stroke(#00FF57);
  //strokeWeight(5);
  //fill(#FFFFFF);
  //rect(50,100,300,200);
  
  ////Red Circle
  //noStroke();
  //fill(#FF4047);
  //ellipse(200,200,200,200);
  
  //--------------------------------------------Drawings 03-------------------------------------------------//
  
  ////Green Lines
  //stroke(#00FF57);
  //strokeWeight(5);
  //line(0,0,200,200);
  //line(400,0,200,200);
  
  ////Red Rectangle
  //noStroke();
  //fill(#FF4047);
  //rect(0,200,400,200);
  
  //--------------------------------------------Drawings 04-------------------------------------------------//
  
  ////Red Cross Line
  //stroke(#FF4047);
  //strokeWeight(5);
  //line(0,0,400,400);
  
  ////Green Cross Line
  //stroke(#00FF57);
  //line(400,0,0,400);
}`},{path:`/2017/Lessons/Drawing_Shapes_02/Drawing_Shapes_02.pde`,name:`Drawing_Shapes_02.pde`,size:2598,code:`//Feb 2, 2017
//More basic drawing

void setup() {
  size(400, 400);
  background(#484848);
}

void draw() {
  noStroke();

  //------------------------------------------------Tutorial------------------------------------------------//

  ////Black Square
  //fill(#000000);
  //quad(50, 50, 50, 350, 350, 350, 350, 50);

  ////Grey Arc
  //fill(#1C1C1C);
  //arc(50,350,600,600,radians(270),radians(360));

  ////Black Arc
  //fill(#000000);
  //arc(50,350,400,400,radians(270),radians(360));

  ////White Triangle
  //fill(#FFFFFF,180);
  //triangle(200,50,50,350,350,350);

  //------------------------------------------------Drawing 01------------------------------------------------//

  ////Green Square
  //fill(#00FF8E);
  //quad(100,100,300,100,300,300,100,300);

  ////Red Triangle
  //fill(#FF2600);
  //triangle(200,200,400,400,0,400);

  //------------------------------------------------Drawing 02------------------------------------------------//

  ////Red Rectangle
  //fill(#FF2600);
  //quad(150,0,250,0,250,400,150,400);

  ////Green Rectangle
  //fill(#00FF8E,128);
  //quad(0,150,0,250,400,250,400,150);

  //------------------------------------------------Drawing 03------------------------------------------------//

  ////Green Triangle
  //fill(#00FF8E);
  //triangle(200,200,400,400,0,400);

  ////White Arc
  //fill(#FFFFFF);
  //arc(200,0,400,400,radians(0),radians(180));

  ////Red Arc
  //fill(#FF2600);
  //arc(200,0,200,200,radians(0),radians(180));

  //------------------------------------------------Drawing 04------------------------------------------------//

  ////White Diamond
  //fill(#FFFFFF);
  //quad(200,0,400,200,200,400,0,200);

  ////Green Rectangle
  //fill(#00FF8E);
  //quad(100,100,300,100,300,300,100,300);

  ////White Circle
  //fill(#FF2600);
  //ellipse(200,200,200,200);

  ////Black Eye
  //fill(#000000);
  //arc(200,200,50,200,radians(90),radians(270));
  //arc(200,200,50,200,radians(270),radians(450));

  //------------------------------------------------Drawing 05------------------------------------------------//
  
  //White Wings
  fill(#FFFFFF);
  arc(225,300,400,600,radians(165),radians(255));
  arc(175,300,400,600,radians(285),radians(375));
  
  //Purple Wings
  fill(#4300FF);
  arc(225,300,350,550,radians(180),radians(255));
  arc(175,300,350,550,radians(285),radians(360));
  
  //Black Diamond
  fill(#000000);
  quad(200, 50, 350, 300, 200, 350, 50, 300);

  //Yellow Triangle
  fill(#FFEA00);
  triangle(200, 100, 300, 300, 100, 300);

  //Black Triangle
  fill(#000000);
  triangle(150, 200, 250, 200, 200, 300);
}`},{path:`/2017/Lessons/Functions_with_return_values/Functions_with_return_values.pde`,name:`Functions_with_return_values.pde`,size:558,code:`float xPos, yPos, diam; 
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
}`},{path:`/2017/Lessons/Functions_within_variables_01/Functions_within_variables_01.pde`,name:`Functions_within_variables_01.pde`,size:445,code:`/*

Creating functions within variables
02/21/2017

*/

float centerX, centerY, d;
float distance(float centerX, float centerY) {
  float a = centerX - mouseX;
  float b = centerY - mouseY;
  float c = sqrt(sq(a) + sq(b));
  return c;
}

void setup() {
  size(400, 400);
  centerX = centerY = d = 200;
}

void draw() {
  background(#000000);
  if (distance(centerX, centerY) < d/2) {
    fill(#FFFFFF);
    ellipse(centerX, centerY, d, d);
  }
}`},{path:`/2017/Lessons/Functions_within_variables_02/Functions_within_variables_02.pde`,name:`Functions_within_variables_02.pde`,size:300,code:`/*

Visualizing functions with return values
02/21/2017

*/

void setup() {
  size(600,400);
  smooth();
  frameRate(120);
  background(#FFFFFF);
}

void draw() {
  float f = calculateY(mouseX);
  strokeWeight(5);
  point(mouseX,f);
}

float calculateY(float x) {
  return (1/(x-width/2))*500+200;
}
`},{path:`/2017/Lessons/Hit_Detection_01/Hit_Detection_01.pde`,name:`Hit_Detection_01.pde`,size:1338,code:`/*

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
}`},{path:`/2017/Lessons/Homemade_Snake/Homemade_Snake.pde`,name:`Homemade_Snake.pde`,size:1584,code:`PVector p, v, f;
float w, h;
int foodState, scoreValue;
boolean gameover;

void setup() {
  size(400, 400);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  //frameRate(10);
  p = new PVector(width/2, height/2);
  v = new PVector(0, 0);
  f = new PVector(width/3, height/3);
  w = h = 15;
  foodState = 0;
  gameover = false;
}

void draw() {
  if (!gameover) {
    if (frameCount%5==0) {
      backdrop(#2FB456);
      score();
      food();
      snake();
    }
  } else {
    background(#FF1A35);
    fill(0);
    textSize(36);
    text("You lose!\\nFinal score: " + scoreValue, width/2, height/2);
  }
}

void backdrop(color c) {
  fill(c);
  strokeWeight(20);
  stroke(#FF1A35);
  rect(width/2, height/2, width, height);
}

void score() {
  noStroke();
  fill(255);
  textSize(16);
  text("score: " + scoreValue, width/2, height/6);
}

void snake() {
  p = p.add(v);
  noStroke();
  fill(#7FED26);
  rect(p.x, p.y, w, h);
  
  if (p.x <= 5 || p.x >= 395 || p.y <= 5 || p.y >= 395) {
    gameover = true;
  }
}

void food() {
  if (p.x == f.x && p.y == f.y) {
    scoreValue += 1;
    foodState = 0;
  }

  if (foodState == 0) {
    f.x = ((int(random(1, 26))*15) + 5);
    f.y = ((int(random(1, 26))*15) + 5);
    foodState = 1;
  }

  fill(#FF005E);
  noStroke();
  ellipse(f.x, f.y, w, h);
}

void keyPressed() {
  if (key == 'w' && v.y != h) {
    v.x = 0;
    v.y = -h;
  } else if (key == 's' && v.y != -h) {
    v.x = 0;
    v.y = h;
  } else if (key == 'a' && v.x != w) {
    v.x = -w;
    v.y = 0;
  } else if (key == 'd' && v.x != -w) {
    v.x = w;
    v.y = 0;
  }
}
`},{path:`/2017/Lessons/Introducing_PVectors/Introducing_PVectors.pde`,name:`Introducing_PVectors.pde`,size:968,code:`/*

Lesson: PVectors
03/20/2017

*/

PVector p, v, a, m;
int score;
color kuler;

void setup() {
  size(400, 400);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  p = new PVector(width/2, height/5);
  v = new PVector(random(1, 3), random(1, 2));
  a = new PVector(0, 0.1);
  m = new PVector(width/2, 370);
  kuler = #FF3496;
}

void draw() {
  background(#3B3B3B);
  noStroke();
  fill(kuler);
  textSize(24);
  text("score: " + str(score),width/2,height/8);
  ellipse(p.x, p.y, 20, 20);
  rect(m.x, m.y, 50, 20);
  
  m.x = mouseX;
  p = p.add(v);
  v = v.add(a);

  if (p.y >= (370-20) && p.y <= (390-20) && p.x >= (m.x-25) && p.x <= (m.x+25)) {
    v.y *= -0.95;
    score += 1;
    kuler = color(int(random(100,255)),int(random(100,255)),int(random(100,255)));
  } else if (p.y >= height) {
    p.y = height/5;
    p.x = width/2;
    v.y = 0;
    v.x = random(-1,1)*random(2,4);
    score = 0;
  }
  if (p.x >= (width-10) || p.x <= (0+10)) {
    v.x *= -1;
  }
}`},{path:`/2017/Lessons/Loading_Fonts/Loading_Fonts.pde`,name:`Loading_Fonts.pde`,size:592,code:`/*

 Loading fonts into Processing
 03/01/2017
 
 */

PFont Spoonter;

void settings() {
  size(900, 600);
  smooth(8);
}

void setup() {
  Spoonter = loadFont("ComicSansMS-72.vlw");
  textFont(Spoonter);
  textSize(72);
  textAlign(CENTER, CENTER);
}

void draw() {
  background(#EAEAEA);

  rectMode(CENTER);
  noStroke();

  fill(#F44336);
  rect(0, 75, width*2, 150);

  fill(#E53935);
  rect(0, 225, width*2, 150);
  
  fill(#D32F2F);
  rect(0, 375, width*2, 150);
  
  fill(#C62828);
  rect(0, 525, width*2, 150);
  
  fill(#FFD180);
  text("Spoonter is the man!", width/2, height/2);
}`},{path:`/2017/Lessons/MouseX_MouseY_IF_Statements_01/MouseX_MouseY_IF_Statements_01.pde`,name:`MouseX_MouseY_IF_Statements_01.pde`,size:464,code:`/*

02/09/2017
mouseX, mouseY, if statements

*/

void setup() {
  size(400, 400);
  smooth();
  noStroke();
  frameRate(120);
  rectMode(CENTER);
  background(#EDEDED);
}

void draw() {
  if (mouseX <= width/2 && mouseY <= height/2) {
    background(#FFFFFF);
  } else if (mouseX >= width/2 && mouseY <= height/2) {
    background(#242424);
  } else if (mouseX <= width/2 && mouseY >= height/2) {
    background(#009BE5);
  } else {
    background(#FF3131);
  }
}`},{path:`/2017/Lessons/Rollover_Function_01/Rollover_Function_01.pde`,name:`Rollover_Function_01.pde`,size:1177,code:`/*

 Creating a Rollover function
 02/24/2017
 
 */

float x, y, w, h;

void setup() {
  size(400, 400);
  smooth();
  x = y = height/2;
  w = h = height/4;
}

void draw() {
  background(#FF9BAD);
  rectMode(CENTER);
  stroke(#FFFFFF);
  strokeWeight(5);
  
  //Rectangle #1
  if (rollover(x-75, y, w, h) == true) {
    fill(#E071FF);
    if (clicked(x-75, y, w, h) == true) {
      fill(#7C71FF);
    }
  } else {
    fill(#FF4668);
  }
  rect(x-75, y, w, h);
  
  //Rectangle #2
  if (rollover(x+75, y, w, h) == true) {
    fill(#E071FF);
    if (clicked(x+75, y, w, h) == true) {
      fill(#7C71FF);
    }
  } else {
    fill(#FF4668);
  }
  rect(x+75, y, w, h);
}

boolean rollover(float x, float y, float w, float h) {
  boolean hit;
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2)) {
    hit = true;
  } else {
    hit = false;
  }
  return hit;
}

boolean clicked(float x, float y, float w, float h) {
  boolean click;
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2) &&
    mousePressed == true) {
    click = true;
  } else {
    click = false;
  }
  return click;
}`},{path:`/2017/Lessons/System_Variables_01/System_Variables_01.pde`,name:`System_Variables_01.pde`,size:1016,code:`/*
System Variables 01 (width/height)
02/07/2017
*/

void setup() {
  size(400, 400);
  background(#32333B);
}

void draw() {
  noStroke();
  rectMode(CENTER);

  // Red Circle

  //fill(#FF002F);
  //ellipse(width/2, height/2, width, height);

  // Grey Square

  //fill(#32333B);
  //rect(width/2, height/2, width/2, height/2);

  // ====================================================== //

  // Red Square

  //fill(#FF002F);
  //rect(width/4, height/2, width/2, height/2);

  // Blue Square

  //fill(#00FFC1);
  //ellipse((width/4)*3,height/2,width/2,height/2);
  
  // Lines
  
  //stroke(#FFFFFF);
  //strokeWeight(5);
  //line(0,0,width,height);
  //line(width,0,0,height);

  // ====================================================== //

  // Red Flower
  
  //noStroke();
  //fill(#FF002F);
  //ellipse(width/2, height/4, width/3, height/3);
  //ellipse((width/4)*3, height/2, width/3, height/3);
  //ellipse(width/2, (height/4)*3, width/3, height/3);
  //ellipse(width/4, height/2, width/3, height/3);
}`},{path:`/2017/Lessons/System_Variables_02/System_Variables_02.pde`,name:`System_Variables_02.pde`,size:597,code:`/*
System Variables 02
02/07/2017
*/

float myFloat = 5.0;
int myInt = 5;

void setup() {
  size(400,400);
  background(#393939);
}

void draw() {
  textSize(24);
  
  fill(#FF0044);
  text("Using Floats",100,75);
  text("+3 = " + str(myFloat+3),100,100);
  text("-3 = " + str(myFloat-3),100,125);
  text("*3 = " + str(myFloat*3),100,150);
  text("/3 = " + str(myFloat/3),100,175);
  
  fill(#00B9FF);
  text("Using Integers",100,250);
  text("+3 = " + str(myInt+3),100,275);
  text("-3 = " + str(myInt-3),100,300);
  text("*3 = " + str(myInt*3),100,325);
  text("/3 = " + str(myInt/3),100,350);
}`},{path:`/2017/Lessons/keyPressed_Function_01/keyPressed_Function_01.pde`,name:`keyPressed_Function_01.pde`,size:677,code:`/*

Creating a keyPressed() Function
02/23/2017

*/

char letter;
String sentence;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);
  background(#FFB2A2);
  sentence = "";
}

void draw() {
  background(#FFB2A2);
  fill(#FFFFFF);
  
  textSize(18);
  textAlign(CENTER);
  text(sentence,width/2,height/2);
}

void keyPressed() {
  letter = key;
  sentence = sentence + str(letter);
  if (key == ENTER) {
    sentence = "";
  } else if (key == BACKSPACE && sentence.length() != 1) {
    sentence = sentence.substring(0, sentence.length()-2);
  } else if (key == BACKSPACE && sentence.length() != 0) {
    sentence = sentence.substring(0, sentence.length()-1);
  }
}`},{path:`/2017/Project - Cookie Clicker/03-01-2017/Cookie_Clicker/Cookie_Clicker.pde`,name:`Cookie_Clicker.pde`,size:1616,code:`/*

Personal Project 01

 -=-=- Cookie Clicker -=-=-
 
03/01/2017

*/

PImage cookie;
int cookies;
float cx, cy, cw, ch;

void setup() {
  fullScreen();
  smooth(8);
  frameRate(30);
  background(#86E4FF);

  cx = width/2-250;
  cy = height/2-250;
  cw = ch = 500;

  cookieDraw(width/2, height/2, 400);
  cookie = get(int(cx), int(cy), int(cw), int(ch));
}

void draw() {
  background(#86E4FF);
  image(cookie, cx, cy, cw, ch);
  displayCookies(width/2, height/4*3);
  cookieButton(width/2, height/2, 400);
}

boolean startup = true;
float[] chocoX = new float[15];
float[] chocoY = new float[15];

void cookieDraw(float x, float y, float d) {

  stroke(#FFFFFF);
  strokeWeight(d/20);
  fill(#B9A785);
  ellipse(x, y, d, d);

  for (int i = 0; i < 15; i++) {
    chocoX[i] = random(x-(d/3), x+(d/3));
    chocoY[i] = random(y-(d/3), y+(d/3));

    noStroke();
    fill(#5F533B);
    ellipse(chocoX[i], chocoY[i], d/10, d/10);
  }
}

void cookieButton(float x, float y, float d) {

  if (dist(mouseX, mouseY, x, y) <= d/2) {

    fill(#FFFFFF, 50);
    ellipse(x, y, d+20, d+20);

    cw = ch = 500;
    cx = width/2-250;
    cy = height/2-250;

    if (mousePressed) {

      cx -= 15;
      cy -= 15;
      cw = ch = 530;
      
      clickText("+1", width/2, height/4);
      
      cookies += 1;
      
      mousePressed = false;
    }
  }
}

void clickText(String t, float x, float y) {
  fill(#5F533B);
  textAlign(CENTER, CENTER);
  textSize(48);
  text(t, x, y);
}

void displayCookies(float x, float y) {
  fill(#5F533B);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("cookies: " + cookies, x, y);
}`},{path:`/2017/Project - Cookie Clicker/03-02-2017/Cookie_Clicker/Cookie_Clicker.pde`,name:`Cookie_Clicker.pde`,size:3761,code:`/*

 Personal Project 01
 
 -=-=- Cookie Clicker -=-=-
 
 03/01/2017
 
 */

PImage cookie;
float cookies, cx, cy, cw, ch;
color brown, chocolate, backdrop;
float[] cost = new float[7];

void setup() {
  fullScreen();
  smooth(8);
  frameRate(30);

  brown = #EA8F49;
  chocolate = #5F320E;
  backdrop = #86E4FF;

  background(backdrop);

  cx = width/2-250;
  cy = height/2-250;
  cw = ch = 500;

  cookieDraw(width/2, height/2, 400);
  cookie = get(int(cx), int(cy), int(cw), int(ch));
  
  for (int i = 0; i < 7; i++) {
    cost[i] = 20 + (150 * (i * i));
  }
  
  amount[0] = 0.01;
  amount[1] = 0.2;
  amount[2] = 0.6;
  amount[3] = 1.2;
  amount[4] = 2.5;
  amount[5] = 7.5;
  amount[6] = 20.0;
  
}

void draw() {
  background(backdrop);
  title();
  image(cookie, cx, cy, cw, ch);
  displayCookies(width/2, height/5*4);
  cookieButton(width/2, height/2, 400);
  
  upgradeButton("Autoclick (+0.01) costs: ", width/6, height/8, 400, 100, 0);
  upgradeButton("Grandma (+0.2) costs: ", width/6, height/8*2, 400, 100, 1);
  upgradeButton("Home Kitchen (+0.6) costs: ", width/6, height/8*3, 400, 100, 2);
  upgradeButton("Bakery (+1.2) costs: ", width/6, height/8*4, 400, 100, 3);
  upgradeButton("Cookie Shop (+2.5) costs: ", width/6, height/8*5, 400, 100, 4);
  upgradeButton("Cookie Factory (+7.5) costs: ", width/6, height/8*6, 400, 100, 5);
  upgradeButton("Cookie Conglomerate (20.0) costs: ", width/6, height/8*7, 400, 100, 6);
  
  autoClick();
}

float[] chocoX = new float[15];
float[] chocoY = new float[15];

void cookieDraw(float x, float y, float d) {

  stroke(#FFFFFF);
  strokeWeight(d/20);
  fill(brown);
  ellipse(x, y, d, d);

  for (int i = 0; i < 15; i++) {
    chocoX[i] = random(x-(d/3), x+(d/3));
    chocoY[i] = random(y-(d/3), y+(d/3));

    noStroke();
    fill(chocolate);
    ellipse(chocoX[i], chocoY[i], d/10, d/10);
  }
}

void cookieButton(float x, float y, float d) {
  noStroke();
  
  if (dist(mouseX, mouseY, x, y) <= d/2) {

    fill(#FFFFFF, 50);
    ellipse(x, y, d+20, d+20);

    cw = ch = 500;
    cx = width/2-250;
    cy = height/2-250;

    if (mousePressed) {

      cx -= 15;
      cy -= 15;
      cw = ch = 530;

      clickText("+1", width/7*5, height/2);

      cookies += 1;

      mousePressed = false;
    }
  }
}

void clickText(String t, float x, float y) {
  noStroke();
  fill(chocolate);
  textAlign(CENTER, CENTER);
  textSize(48);
  text(t, x, y);
}

void displayCookies(float x, float y) {
  noStroke();
  fill(chocolate);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("cookies: " + int(cookies), x, y);
}

void upgradeButton(String t, float x, float y, float w, float h, int c) {
  
  
  
  int opa = 200;

  if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {

    opa = 175;

    if (mousePressed) {

      if (cookies >= cost[c]) {
        cookies -= cost[c];
        cost[c] *= 1.10;
        auto += amount[c];
      }

      opa = 225;
      mousePressed = false;
    }
  }
  
  noStroke();
  rectMode(CENTER);
  fill(#000000, opa);
  rect(x, y, w, h);

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(#FFFFFF);
  text(t + int(cost[c]), x, y, w, h);
}

float[] amount = new float[7];
float auto = 0;

void autoClick() {
  cookies += auto;
}

void title() {
  textSize(96);
  textAlign(LEFT,CENTER);
  strokeWeight(10);
  
  fill(255);
  stroke(255);
  text("COOKIE CLICKER",width/3+5,height/10+5);
  line(width/3+5,height/5.5+5,width/8*7+5,height/5.5+5);
  
  fill(chocolate);
  stroke(chocolate);
  text("COOKIE CLICKER",width/3+2.5,height/10+2.5);
  line(width/3+2.5,height/5.5+2.5,width/8*7+2.5,height/5.5+2.5);
  
  fill(brown);
  stroke(brown);
  text("COOKIE CLICKER",width/3,height/10);
  line(width/3,height/5.5,width/8*7,height/5.5);
}`},{path:`/2017/Project - Cookie Clicker/Cookie_Clicker/Cookie_Clicker.pde`,name:`Cookie_Clicker.pde`,size:3946,code:`/*

 Personal Project 01
 
 -=-=- Cookie Clicker -=-=-
 
 03/01/2017
 
 */

PImage cookie;
float cookies, cx, cy, cw, ch;
color brown, chocolate, backdrop;
float[] cost = new float[8];

void setup() {
  fullScreen();
  smooth(8);
  frameRate(30);

  brown = #EA8F49;
  chocolate = #5F320E;
  backdrop = #86E4FF;

  background(backdrop);

  cx = width/2-250;
  cy = height/2-250;
  cw = ch = 500;

  cookieDraw(width/2, height/2, 400);
  cookie = get(int(cx), int(cy), int(cw), int(ch));
  cookies = 0;
  
  for (int i = 0; i < 8; i++) {
    cost[i] = 20 * pow(4,i);
  }
  
  amount[0] = 0.01;
  amount[1] = 0.2;
  amount[2] = 0.6;
  amount[3] = 1.2;
  amount[4] = 2.5;
  amount[5] = 6.0;
  amount[6] = 15.0;
  amount[7] = 25.0;
  
}

void draw() {
  background(backdrop);
  title();
  image(cookie, cx, cy, cw, ch);
  displayCookies(width/2, height/5*4);
  cookieButton(width/2, height/2, 400);
  
  upgradeButton("Autoclick (+0.01)\\ncosts: ", width/6, height/8*3, 400, 100, 0);
  upgradeButton("Grandma (+0.2)\\ncosts: ", width/6, height/8*4, 400, 100, 1);
  upgradeButton("Home Kitchen (+0.6)\\ncosts: ", width/6, height/8*5, 400, 100, 2);
  upgradeButton("Bakery (+1.2)\\ncosts: ", width/6, height/8*6, 400, 100, 3);
  upgradeButton("Cookie Specialty Shop (+2.5)\\ncosts: ", width/6*5, height/8*3, 400, 100, 4);
  upgradeButton("Cookie Station (+6.0)\\ncosts: ", width/6*5, height/8*4, 400, 100, 5);
  upgradeButton("Cookie Factory (+15.0)\\ncosts: ", width/6*5, height/8*5, 400, 100, 6);
  upgradeButton("Cookie Conglomerate (+25.0)\\ncosts: ", width/6*5, height/8*6, 400, 100, 7);
  
  autoClick();
}

float[] chocoX = new float[15];
float[] chocoY = new float[15];

void cookieDraw(float x, float y, float d) {

  stroke(#FFFFFF);
  strokeWeight(d/20);
  fill(brown);
  ellipse(x, y, d, d);

  for (int i = 0; i < 15; i++) {
    chocoX[i] = random(x-(d/3), x+(d/3));
    chocoY[i] = random(y-(d/3), y+(d/3));

    noStroke();
    fill(chocolate);
    ellipse(chocoX[i], chocoY[i], d/10, d/10);
  }
}

void cookieButton(float x, float y, float d) {
  noStroke();
  
  if (dist(mouseX, mouseY, x, y) <= d/2) {

    fill(#FFFFFF, 50);
    ellipse(x, y, d+20, d+20);

    cw = ch = 500;
    cx = width/2-250;
    cy = height/2-250;

    if (mousePressed) {

      cx -= 15;
      cy -= 15;
      cw = ch = 530;

      clickText("+1", width/24*15, height/2);

      cookies += 1;

      mousePressed = false;
    }
  }
}

void clickText(String t, float x, float y) {
  noStroke();
  fill(chocolate);
  textAlign(CENTER, CENTER);
  textSize(48);
  text(t, x, y);
}

void displayCookies(float x, float y) {
  noStroke();
  fill(chocolate);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("cookies: " + int(cookies), x, y);
  
  text("auto: " + nf(auto,3,2), x, y+50);
}

void upgradeButton(String t, float x, float y, float w, float h, int c) {
  
  int opa = 200;

  if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {

    opa = 175;

    if (mousePressed) {

      if (cookies >= cost[c]) {
        cookies -= cost[c];
        cost[c] *= 1.10;
        auto += amount[c];
      }

      opa = 225;
      mousePressed = false;
    }
  }
  
  noStroke();
  rectMode(CENTER);
  fill(#000000, opa);
  rect(x, y, w, h);

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(#FFFFFF);
  text(t + int(cost[c]), x, y, w, h);
}

float[] amount = new float[8];
float auto = 0;

void autoClick() {
  cookies += auto;
}

void title() {
  textSize(96);
  textAlign(CENTER,CENTER);
  strokeWeight(10);
  
  fill(255);
  stroke(255);
  text("COOKIE CLICKER",width/2+5,height/10+5);
  line(width/5+5,height/5.5+5,width/5*4+5,height/5.5+5);
  
  fill(chocolate);
  stroke(chocolate);
  text("COOKIE CLICKER",width/2+2.5,height/10+2.5);
  line(width/5+2.5,height/5.5+2.5,width/5*4+2.5,height/5.5+2.5);
  
  fill(brown);
  stroke(brown);
  text("COOKIE CLICKER",width/2,height/10);
  line(width/5,height/5.5,width/5*4,height/5.5);
}`},{path:`/2017/Summative/Prototype Stage/05-09-2017/prototype/prototype.pde`,name:`prototype.pde`,size:2854,code:`//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();

float mx,my;

Monster ben;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  
  ben = new Monster(0,height/3,int(random(3)));
}

void draw() {
  background(30);
  
  mx = ben.getX();
  my = ben.getY();
  
  ben.display();
  ben.move();
  
  for (Bullet b : bullets) {
    b.display();
    b.move();
  }
  
  bullets.add(new Bullet(width/2,height/2));
  
  for (Tower t : towers) {
    t.display();
  }
}

void mousePressed() {
  towers.add(new Tower(mouseX, mouseY, int(random(4))));
}

class Tower {
  
  PVector p, v;
  float d;
  float firerate, range, damage;
  int type;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    firerate = range = damage = 0;
    d = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void type() {
    if (type == 0) {
      firerate = 0.01;
      range = 10;
      damage = 5;
    }
  }
  
  void display() {
    
    type();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,d,d);
    
    fill(0);
    if (type == 0) {
      text("Basic", p.x, p.y);
    } else if (type == 1) {
      text("Long", p.x, p.y);
    } else if (type == 2) {
      text("AoE", p.x, p.y);
    } else if (type == 3) {
      text("Sniper", p.x, p.y);
    }
    
  }
  
}

class Monster {
  
  PVector p;
  float w, h, speed, health;
  int type;
  color skin;
  
  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
  }
  
  // Type 0 = basic
  // Type 1 = swarm
  // Type 2 = tank
  
  void type() {
    
    if (type == 0) {
      w = h = 20;
      skin = color(#FF0000);
      speed = 3;
    } else if (type == 1) {
      w = h = 10;
      skin = color(#00FF00);
      speed = 5;
    } else if (type == 2) {
      w = h = 30;
      skin = color(#0000FF);
      speed = 1;
    }
  }
  
  void display() {
    
    type();
    
    fill(skin);
    rect(p.x,p.y,w,h);
    
  }
  
  void move() {
    p.x += speed;
    p.y += 0;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
}

class Bullet {
  
  PVector p, loca;
  float pulse, diam, speed, rota;
  color glow;
  
  Bullet(float tempX, float tempY) {
    p = new PVector(tempX,tempY);
    loca = new PVector(mx,my);
    
    rota = atan2( (loca.y - p.y), (loca.x - p.x) );
    
    speed = 40;
    diam = 5;
    pulse = random(4);
  }
  
  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x,p.y,diam,diam);
  }
  
  void update() {
    pulse += 1;
    glow = color( (80*sin(pulse) + 175), 30, 30 );
  }
  
  void move() {
    p.x += speed*cos(rota);
    p.y += speed*sin(rota);
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-10-2017 - 9_43 AM/prototype/prototype.pde`,name:`prototype.pde`,size:3138,code:`//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();

float mx,my;

Monster ben;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  
  ben = new Monster(0,height/3,int(random(3)));
}

void draw() {
  background(30);
  
  mx = ben.getX();
  my = ben.getY();
  
  ben.display();
  ben.move();
  
  for (Tower t : towers) {
    t.display();
  }
  
  for (Bullet b : bullets) {
    b.display();
    b.target();
    b.move();
  }
  
  bullets.add(new Bullet(width/2,height/2));
  
  
}

void mousePressed() {
  towers.add(new Tower(mouseX, mouseY, int(random(4))));
}

class Tower {
  
  PVector p, v;
  float d;
  float firerate, range, damage;
  int type;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    firerate = range = damage = 0;
    d = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void type() {
    if (type == 0) {
      firerate = 0.01;
      range = 10;
      damage = 5;
    }
  }
  
  void display() {
    
    type();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,d,d);
    
    fill(0);
    if (type == 0) {
      text("Basic", p.x, p.y);
    } else if (type == 1) {
      text("Long", p.x, p.y);
    } else if (type == 2) {
      text("AoE", p.x, p.y);
    } else if (type == 3) {
      text("Sniper", p.x, p.y);
    }
    
  }
  
}

class Monster {
  
  PVector p;
  float w, h, speed, health;
  int type;
  color skin;
  
  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
  }
  
  // Type 0 = basic
  // Type 1 = swarm
  // Type 2 = tank
  
  void type() {
    
    if (type == 0) {
      w = h = 20;
      skin = color(#FF0000);
      speed = 3;
    } else if (type == 1) {
      w = h = 10;
      skin = color(#00FF00);
      speed = 5;
    } else if (type == 2) {
      w = h = 30;
      skin = color(#0000FF);
      speed = 1;
    }
  }
  
  void display() {
    
    type();
    
    fill(skin);
    rect(p.x,p.y,w,h);
    
  }
  
  void move() {
    p.x += speed;
    p.y += 0;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
}

class Bullet {
  
  PVector p, v, loca, target;
  float pulse, diam, speed, rota;
  color glow;
  boolean live;
  
  Bullet(float tempX, float tempY) {
    p = new PVector(tempX,tempY);
    v = new PVector();
    target = new PVector();
    speed = 10;
    diam = 5;
    pulse = random(4);
  }
  
  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x,p.y,diam,diam);
  }
  
  void update() {
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );
  }
  
  void target() {
    loca = new PVector(mx - p.x, my - p.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
  }
  
  void move() {
    v.x = speed*(90 - abs(rota))/90;
    
    if (rota < 0) {
      v.y = -speed + abs(v.x);//Going upwards.
    } else {
      v.y = speed - abs(v.x);//Going downwards.
    }
    
    p.x += v.x;
    p.y += v.y;
    
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-12-2017 - 9_42 AM/prototype/Bullet.pde`,name:`Bullet.pde`,size:1119,code:`class Bullet {
  
  PVector p, v, loca, target;
  float pulse, diam, speed, rota, damage;
  color glow;
  boolean alive;
  
  Bullet(float tempX, float tempY, float tempD) {
    p = new PVector(tempX,tempY);
    v = new PVector();
    target = new PVector();
    speed = 10;
    diam = 5;
    damage = tempD;
    pulse = random(4);
    alive = true;
  }
  
  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x,p.y,diam,diam);
  }
  
  void update() {
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );
  }
  
  void target() {
    loca = new PVector(mx - p.x, my - p.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
  }
  
  void move() {
    v.x = speed*(90 - abs(rota))/90;
    
    if (rota < 0) {
      v.y = -speed + abs(v.x);//Going upwards.
    } else {
      v.y = speed - abs(v.x);//Going downwards.
    }
    
    p.x += v.x;
    p.y += v.y;
    
  }
  
  boolean status() {
    return alive;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
  float damage() {
    return damage;
  }
  
  void die() {
    alive = false;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-12-2017 - 9_42 AM/prototype/Game.pde`,name:`Game.pde`,size:69,code:`class Game {
  
  int score;
  boolean active;
  
  Game() {
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-12-2017 - 9_42 AM/prototype/Monster.pde`,name:`Monster.pde`,size:1456,code:`class Monster {

  PVector p;
  float w, h, speed, currhp, fullhp;
  int type;
  color skin, hp;
  boolean alive;

  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    alive = true;

    // Type 0 = basic
    // Type 1 = swarm
    // Type 2 = tank

    if (type == 0) {
      w = h = 30;
      skin = color(#FF0000);
      speed = 3;
      fullhp = 250;
      
    } else if (type == 1) {
      w = h = 20;
      skin = color(#00FF00);
      speed = 5;
      fullhp = 100;
      
    } else if (type == 2) {
      w = h = 45;
      skin = color(#0000FF);
      speed = 1;
      fullhp = 500;
    }

    currhp = fullhp;
  }

  void display() {

    fill(skin);
    rect(p.x, p.y, w, h);
    
    if (currhp < fullhp) {
      fill(hp);
      rect(p.x, (p.y - (h + 15) ), currhp, 5);
    }
  }

  void move() {
    p.x += speed;
    p.y += 0;
  }

  void hit(float damage) {
    currhp -= damage;
  }

  void update() {

    if (currhp < fullhp) {
      hp = color(#00FF60);
      
      if (currhp < fullhp/2) {
        hp = color(#FFD900);
        
        if (currhp < fullhp/3) {
          hp = color(#FF002F);
        }
        
      }
      
    }

    if (currhp <= 0) {
      alive = false;
    }
  }
  
  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-12-2017 - 9_42 AM/prototype/Tower.pde`,name:`Tower.pde`,size:807,code:`class Tower {
  
  PVector p, v;
  float d;
  float firerate, range, damage;
  int type;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    firerate = range = damage = 0;
    d = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void type() {
    if (type == 0) {
      firerate = 0.01;
      range = 10;
      damage = 5;
    }
  }
  
  void display() {
    
    type();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,d,d);
    
    fill(0);
    if (type == 0) {
      text("Basic", p.x, p.y);
    } else if (type == 1) {
      text("Long", p.x, p.y);
    } else if (type == 2) {
      text("AoE", p.x, p.y);
    } else if (type == 3) {
      text("Sniper", p.x, p.y);
    }
    
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-12-2017 - 9_42 AM/prototype/prototype.pde`,name:`prototype.pde`,size:1458,code:`//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game game;

float mx,my;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  state = 0;
  monsters.add(new Monster(0, height/3,int(random(3) ) ) );
}

void draw() {
  background(30);
  
  for (Tower t : towers) {
    t.display();
  }
  
  for (Bullet b : bullets) {
    b.display();
    b.target();
    b.move();
  }
  
  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
    
    mx = m.getX();
    my = m.getY();
  }
  
  bullets.add(new Bullet(width/2,height/2, 1));
  
  for (int i = 0; i < bullets.size(); i++) {
    for (int j = 0; j < monsters.size(); j++) {
      
      Bullet b = bullets.get(i);
      Monster m = monsters.get(j);
      
      if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {
        
        if ( b.status() ) {
          m.hit( b.damage() );
          b.die();
        }
          
      }
      
      if ( !b.status() ) {
        bullets.remove(i);
      }
      
      if (!m.status() ) {
        monsters.remove(j);
      }
      
    }
      
  }
  
  
}

void mousePressed() {
  state = 1;
  towers.add(new Tower(mouseX, mouseY, int(random(4))));
}`},{path:`/2017/Summative/Prototype Stage/05-15-2017 - 11_04 AM/prototype/Bullet.pde`,name:`Bullet.pde`,size:1229,code:`class Bullet {
  
  PVector p, v, loca, target;
  float pulse, diam, speed, rota, damage, health;
  color glow;
  boolean alive;
  
  Bullet(float tempX, float tempY, float tempD, float tempH) {
    p = new PVector(tempX,tempY);
    v = new PVector();
    target = new PVector();
    speed = 10;
    diam = 5;
    damage = tempD;
    health = tempH;
    pulse = random(4);
    alive = true;
  }
  
  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x,p.y,diam,diam);
  }
  
  void update() {
    health -= 1;
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );
    
    if (health <= 0) {
      die();
    }
    
  }
  
  void target() {
    loca = new PVector(mx - p.x, my - p.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
  }
  
  void move() {
    v.x = speed*(90 - abs(rota))/90;
    
    if (rota < 0) {
      v.y = -speed + abs(v.x);//Going upwards.
    } else {
      v.y = speed - abs(v.x);//Going downwards.
    }
    
    p.x += v.x;
    p.y += v.y;
    
  }
  
  boolean status() {
    return alive;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
  float damage() {
    return damage;
  }
  
  void die() {
    alive = false;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-15-2017 - 11_04 AM/prototype/Game.pde`,name:`Game.pde`,size:69,code:`class Game {
  
  int score;
  boolean active;
  
  Game() {
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-15-2017 - 11_04 AM/prototype/Monster.pde`,name:`Monster.pde`,size:1456,code:`class Monster {

  PVector p;
  float w, h, speed, currhp, fullhp;
  int type;
  color skin, hp;
  boolean alive;

  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    alive = true;

    // Type 0 = basic
    // Type 1 = swarm
    // Type 2 = tank

    if (type == 0) {
      w = h = 30;
      skin = color(#FF0000);
      speed = 3;
      fullhp = 250;
      
    } else if (type == 1) {
      w = h = 20;
      skin = color(#00FF00);
      speed = 5;
      fullhp = 100;
      
    } else if (type == 2) {
      w = h = 45;
      skin = color(#0000FF);
      speed = 1;
      fullhp = 500;
    }

    currhp = fullhp;
  }

  void display() {

    fill(skin);
    rect(p.x, p.y, w, h);
    
    if (currhp < fullhp) {
      fill(hp);
      rect(p.x, (p.y - (h + 15) ), currhp, 5);
    }
  }

  void move() {
    p.x += speed;
    p.y += 0;
  }

  void hit(float damage) {
    currhp -= damage;
  }

  void update() {

    if (currhp < fullhp) {
      hp = color(#00FF60);
      
      if (currhp < fullhp/2) {
        hp = color(#FFD900);
        
        if (currhp < fullhp/3) {
          hp = color(#FF002F);
        }
        
      }
      
    }

    if (currhp <= 0) {
      alive = false;
    }
  }
  
  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-15-2017 - 11_04 AM/prototype/Tower.pde`,name:`Tower.pde`,size:887,code:`class Tower {
  
  PVector p, v;
  float d;
  float firerate, range, damage;
  int type;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    firerate = range = damage = 0;
    d = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void type() {
    if (type == 0) {
      firerate = 0.01;
      range = 10;
      damage = 5;
    }
  }
  
  void display() {
    
    type();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,d,d);
    
    fill(0);
    if (type == 0) {
      text("Basic", p.x, p.y);
    } else if (type == 1) {
      text("Long", p.x, p.y);
    } else if (type == 2) {
      text("AoE", p.x, p.y);
    } else if (type == 3) {
      text("Sniper", p.x, p.y);
    }
    
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-15-2017 - 11_04 AM/prototype/prototype.pde`,name:`prototype.pde`,size:1760,code:`//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game game;

float mx, my;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
}

void draw() {
  background(30);

  for (Tower t : towers) {
    t.display();

    if (monsters.size() > 0) {
      bullets.add(new Bullet(t.getX(), t.getY(), 2, 60));
    }
  }

  for (Bullet b : bullets) {
    b.display();
    b.target();
    b.move();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();

    mx = m.getX();
    my = m.getY();
  }

  for (int i = 0; i < bullets.size(); i++) {

    Bullet b = bullets.get(i);

    if ( !b.status() ) {
      bullets.remove(i);
    }
  }
  
  for (int j = 0; j < monsters.size(); j++) {

    Monster m = monsters.get(j);

    if ( !m.status() ) {
      monsters.remove(j);
    }
  }
  
  for (int i = 0; i < bullets.size(); i++) {
    for (int j = 0; j < monsters.size(); j++) {

      Bullet b = bullets.get(i);
      Monster m = monsters.get(j);

      if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

        if ( b.status() && m.status() ) {
          m.hit( b.damage() );
          b.die();
        }
      }
    }
  }
  
}

void mousePressed() {
  if (state == 0) {
    towers.add(new Tower(mouseX, mouseY, int(random(4))));
  } else if (state == 1) {
    monsters.add(new Monster(mouseX, mouseY, int(random(3) ) ) );
  }
  
}

void keyPressed() {
  if (key == 't') {
    state = 0;
  } else if (key == 'm') {
    state = 1;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-16-2017 - 9_40 AM/prototype/Bullet.pde`,name:`Bullet.pde`,size:1247,code:`class Bullet {
  
  PVector p, v, loca, target;
  float pulse, diam, speed, rota, damage, health;
  color glow;
  boolean alive;
  
  Bullet(float tempX, float tempY, float tempD, float tempH) {
    p = new PVector(tempX,tempY);
    v = new PVector();
    target = new PVector();
    speed = 10;
    diam = 5;
    damage = tempD;
    health = tempH;
    pulse = random(3);
    alive = true;
  }
  
  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x,p.y,diam,diam);
  }
  
  void update() {
    health -= 1;
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );
    
    if (health <= 0) {
      die();
    }
    
  }
  
  void target(float mx, float my) {
    loca = new PVector(mx - p.x, my - p.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
  }
  
  void move() {
    v.x = speed*(90 - abs(rota))/90;
    
    if (rota < 0) {
      v.y = -speed + abs(v.x);//Going upwards.
    } else {
      v.y = speed - abs(v.x);//Going downwards.
    }
    
    p.x += v.x;
    p.y += v.y;
    
  }
  
  boolean status() {
    return alive;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
  float damage() {
    return damage;
  }
  
  void die() {
    alive = false;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-16-2017 - 9_40 AM/prototype/Game.pde`,name:`Game.pde`,size:206,code:`class Game {
  
  int score, map, round;
  boolean active;
  
  Game(int tempM) {
    map = tempM;
  }
  
  // if map = 0, grass
  // if map = 1, snow
  // if map = 2, ethereal
  
  void setMap() {
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-16-2017 - 9_40 AM/prototype/Monster.pde`,name:`Monster.pde`,size:1489,code:`class Monster {

  PVector p;
  float w, h, speed, currhp, fullhp;
  int type;
  color skin, hp;
  boolean alive;

  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    alive = true;

    // Type 0 = basic
    // Type 1 = swarm
    // Type 2 = tank

    if (type == 0) {
      w = h = 30;
      skin = color(#FF0000);
      speed = 3;
      fullhp = 250;
      
    } else if (type == 1) {
      w = h = 20;
      skin = color(#00FF00);
      speed = 5;
      fullhp = 100;
      
    } else if (type == 2) {
      w = h = 45;
      skin = color(#0000FF);
      speed = 1;
      fullhp = 500;
    }

    currhp = fullhp;
  }

  void display() {

    fill(skin);
    rect(p.x, p.y, w, h);
    
    if (currhp < fullhp) {
      fill(hp);
      rect(p.x, (p.y - (h + 15) ), currhp, 5);
    }
  }

  void move() {
    p.x += speed;
    p.y += 0;
  }

  void hit(float damage) {
    currhp -= damage;
  }

  void update() {

    if (currhp < fullhp) {
      hp = color(#00FF60);
      
      if (currhp < fullhp/2) {
        hp = color(#FFD900);
        
        if (currhp < fullhp/3) {
          hp = color(#FF002F);
        }
        
      }
      
    }

    if (currhp <= 0) {
      die();
    }
  }
  
  void die() {
    alive = false;
  }
  
  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-16-2017 - 9_40 AM/prototype/Tower.pde`,name:`Tower.pde`,size:938,code:`class Tower {
  
  PVector p, v;
  float diam;
  float firerate, range, damage;
  int type;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    firerate = range = damage = 0;
    diam = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void type() {
    if (type == 0) {
      firerate = 1;
      range = 10;
      damage = 5;
    }
  }
  
  void display() {
    
    type();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,diam,diam);
    
    fill(0);
    if (type == 0) {
      text("Basic", p.x, p.y);
    } else if (type == 1) {
      text("Long", p.x, p.y);
    } else if (type == 2) {
      text("AoE", p.x, p.y);
    } else if (type == 3) {
      text("Sniper", p.x, p.y);
    }
    
  }
  
  int getType() {
    return type;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-16-2017 - 9_40 AM/prototype/prototype.pde`,name:`prototype.pde`,size:1825,code:`//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game game;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
}

void draw() {
  background(30);

  for (Tower t : towers) {
    t.display();

    if (monsters.size() > 0) {
      bullets.add(new Bullet(t.getX(), t.getY(), 1, 60));
    }
    
  }

  for (Bullet b : bullets) {
    b.display();
    b.move();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
  }

  for (int i = 0; i < bullets.size(); i++) {

    Bullet b = bullets.get(i);

    if ( !b.status() ) {
      bullets.remove(i);
    }
    
  }
  
  for (int j = 0; j < monsters.size(); j++) {

    Monster m = monsters.get(j);
    
    if ( m.getX() >= width ) {
      m.die();
    }
    
    if ( !m.status() ) {
      monsters.remove(j);
    }
    
  }
  
  for (int i = 0; i < bullets.size(); i++) {
    for (int j = 0; j < monsters.size(); j++) {

      Bullet b = bullets.get(i);
      Monster m = monsters.get(j);
      
      b.target(m.getX(), m.getY());

      if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

        if ( b.status() && m.status() ) {
          m.hit( b.damage() );
          b.die();
        }
        
      }
      
    }
  }
  
}

void mousePressed() {
  if (state == 0) {
    towers.add(new Tower(mouseX, mouseY, int(random(4))));
  } else if (state == 1) {
    monsters.add(new Monster(mouseX, mouseY, int(random(3) ) ) );
  }
  
}

void keyPressed() {
  if (key == 't') {
    state = 0;
  } else if (key == 'm') {
    state = 1;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-23-2017 - 10_56 AM/prototype/Bullet.pde`,name:`Bullet.pde`,size:1247,code:`class Bullet {
  
  PVector p, v, loca, target;
  float pulse, diam, speed, rota, damage, health;
  color glow;
  boolean alive;
  
  Bullet(float tempX, float tempY, float tempD, float tempH) {
    p = new PVector(tempX,tempY);
    v = new PVector();
    target = new PVector();
    speed = 10;
    diam = 5;
    damage = tempD;
    health = tempH;
    pulse = random(3);
    alive = true;
  }
  
  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x,p.y,diam,diam);
  }
  
  void update() {
    health -= 1;
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );
    
    if (health <= 0) {
      die();
    }
    
  }
  
  void target(float mx, float my) {
    loca = new PVector(mx - p.x, my - p.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
  }
  
  void move() {
    v.x = speed*(90 - abs(rota))/90;
    
    if (rota < 0) {
      v.y = -speed + abs(v.x);//Going upwards.
    } else {
      v.y = speed - abs(v.x);//Going downwards.
    }
    
    p.x += v.x;
    p.y += v.y;
    
  }
  
  boolean status() {
    return alive;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
  float damage() {
    return damage;
  }
  
  void die() {
    alive = false;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-23-2017 - 10_56 AM/prototype/Game.pde`,name:`Game.pde`,size:206,code:`class Game {
  
  int score, map, round;
  boolean active;
  
  Game(int tempM) {
    map = tempM;
  }
  
  // if map = 0, grass
  // if map = 1, snow
  // if map = 2, ethereal
  
  void setMap() {
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-23-2017 - 10_56 AM/prototype/Monster.pde`,name:`Monster.pde`,size:1489,code:`class Monster {

  PVector p;
  float w, h, speed, currhp, fullhp;
  int type;
  color skin, hp;
  boolean alive;

  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    alive = true;

    // Type 0 = basic
    // Type 1 = swarm
    // Type 2 = tank

    if (type == 0) {
      w = h = 30;
      skin = color(#FF0000);
      speed = 3;
      fullhp = 250;
      
    } else if (type == 1) {
      w = h = 20;
      skin = color(#00FF00);
      speed = 5;
      fullhp = 100;
      
    } else if (type == 2) {
      w = h = 45;
      skin = color(#0000FF);
      speed = 1;
      fullhp = 500;
    }

    currhp = fullhp;
  }

  void display() {

    fill(skin);
    rect(p.x, p.y, w, h);
    
    if (currhp < fullhp) {
      fill(hp);
      rect(p.x, (p.y - (h + 15) ), currhp, 5);
    }
  }

  void move() {
    p.x += speed;
    p.y += 0;
  }

  void hit(float damage) {
    currhp -= damage;
  }

  void update() {

    if (currhp < fullhp) {
      hp = color(#00FF60);
      
      if (currhp < fullhp/2) {
        hp = color(#FFD900);
        
        if (currhp < fullhp/3) {
          hp = color(#FF002F);
        }
        
      }
      
    }

    if (currhp <= 0) {
      die();
    }
  }
  
  void die() {
    alive = false;
  }
  
  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-23-2017 - 10_56 AM/prototype/Tower.pde`,name:`Tower.pde`,size:938,code:`class Tower {
  
  PVector p, v;
  float diam;
  float firerate, range, damage;
  int type;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    firerate = range = damage = 0;
    diam = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void type() {
    if (type == 0) {
      firerate = 1;
      range = 10;
      damage = 5;
    }
  }
  
  void display() {
    
    type();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,diam,diam);
    
    fill(0);
    if (type == 0) {
      text("Basic", p.x, p.y);
    } else if (type == 1) {
      text("Long", p.x, p.y);
    } else if (type == 2) {
      text("AoE", p.x, p.y);
    } else if (type == 3) {
      text("Sniper", p.x, p.y);
    }
    
  }
  
  int getType() {
    return type;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-23-2017 - 10_56 AM/prototype/prototype.pde`,name:`prototype.pde`,size:1819,code:`//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game game;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
}

void draw() {
  background(30);

  for (Tower t : towers) {
    t.display();

    if (monsters.size() > 0) {
      bullets.add(new Bullet(t.getX(), t.getY(), 1, 60));
    }
    
  }

  for (Bullet b : bullets) {
    b.display();
    b.move();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
  }

  for (int i = 0; i < bullets.size(); i++) {

    Bullet b = bullets.get(i);

    if ( !b.status() ) {
      bullets.remove(i);
    }
    
  }
  
  for (int j = 0; j < monsters.size(); j++) {

    Monster m = monsters.get(j);
    
    if ( m.getX() >= width ) {
      m.die();
    }
    
    if ( !m.status() ) {
      monsters.remove(j);
    }
    
  }
  
  for (int i = 0; i < bullets.size(); i++) {
    for (int j = monsters.size()-1; j >= 0; j--) {

      Bullet b = bullets.get(i);
      Monster m = monsters.get(j);
      
      b.target(m.getX(), m.getY());

      if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

        if ( b.status() && m.status() ) {
          m.hit( b.damage() );
          b.die();
        }
        
      }
      
    }
  }
  
}

void mousePressed() {
  switch(state) {
  case 0: towers.add(new Tower(mouseX, mouseY, int(random(4)))); break;
  case 1: monsters.add(new Monster(mouseX, mouseY, int(random(3)))); break;
  }
}

void keyPressed() {
  if (key == 't') {
    state = 0;
  } else if (key == 'm') {
    state = 1;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-24-2017 - 9_42 AM/prototype/Bullet.pde`,name:`Bullet.pde`,size:1370,code:`class Bullet {

  PVector p, v, loca, target;
  float pulse, diam, speed, rota, damage, health;
  color glow;
  boolean alive;

  Bullet(float tempX, float tempY, float tempD) {
    p = new PVector(tempX, tempY);
    v = new PVector();
    target = new PVector();
    speed = 10;
    diam = 5;
    damage = tempD;
    health = 120;
    pulse = random(3);
    alive = true;
  }

  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x, p.y, diam, diam);
  }

  void update() {
    health -= 1;
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );

    if (health <= 0) {
      die();
    }
  }

  void target(float mx, float my) {
    loca = new PVector(mx - p.x, my - p.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
  }
  
  void aoe() {
    for (int i = 0; i < 9; i++) {
      loca = new PVector( (p.x + 30 * i) - p.x, (p.y + 30 * i) - p.y);
      rota = atan2(loca.y, loca.x) * 180 / PI;
    }
  }

  void move() {

    v.x = speed*(90 - abs(rota))/90;

    if (rota < 0) {
      v.y = -speed + abs(v.x);//Going upwards.
    } else {
      v.y = speed - abs(v.x);//Going downwards.
    }

    p.x += v.x;
    p.y += v.y;
  }

  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float damage() {
    return damage;
  }

  void die() {
    alive = false;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-24-2017 - 9_42 AM/prototype/Game.pde`,name:`Game.pde`,size:236,code:`class Game {
  
  int score, map, round;
  boolean active;
  
  Game(int tempM) {
    map = tempM;
    score = 0;
    round = 0;
  }
  
  // if map = 0, grass
  // if map = 1, snow
  // if map = 2, ethereal
  
  void setMap() {
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-24-2017 - 9_42 AM/prototype/Monster.pde`,name:`Monster.pde`,size:1488,code:`class Monster {

  PVector p;
  float w, h, speed, currhp, fullhp;
  int type;
  color skin, hp;
  boolean alive;

  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    alive = true;

    // Type 0 = basic
    // Type 1 = swarm
    // Type 2 = tank

    if (type == 0) {
      w = h = 30;
      skin = color(#FF0000);
      speed = 3;
      fullhp = 150;
      
    } else if (type == 1) {
      w = h = 20;
      skin = color(#00FF00);
      speed = 5;
      fullhp = 75;
      
    } else if (type == 2) {
      w = h = 45;
      skin = color(#0000FF);
      speed = 1;
      fullhp = 250;
    }

    currhp = fullhp;
  }

  void display() {

    fill(skin);
    rect(p.x, p.y, w, h);
    
    if (currhp < fullhp) {
      fill(hp);
      rect(p.x, (p.y - (h + 15) ), currhp, 5);
    }
  }

  void move() {
    p.x += speed;
    p.y += 0;
  }

  void hit(float damage) {
    currhp -= damage;
  }

  void update() {

    if (currhp < fullhp) {
      hp = color(#00FF60);
      
      if (currhp < fullhp/2) {
        hp = color(#FFD900);
        
        if (currhp < fullhp/3) {
          hp = color(#FF002F);
        }
        
      }
      
    }

    if (currhp <= 0) {
      die();
    }
  }
  
  void die() {
    alive = false;
  }
  
  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-24-2017 - 9_42 AM/prototype/Tower.pde`,name:`Tower.pde`,size:1334,code:`class Tower {
  
  PVector p, v;
  float diam;
  float firerate, range, damage;
  int type;
  boolean upgraded;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    diam = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void update() {
    if (type == 0) {
      firerate = 8;
      range = 300;
      damage = 5;
    } else if (type == 1) {
      firerate = 8;
      range = 500;
      damage = 3;
    } else if (type == 2) {
      firerate = 2;
      range = 100;
      damage = 3;
    } else if (type == 3) {
      firerate = 100;
      range = 10000;
      damage = 20;
    }
  }
  
  void display() {
    
    update();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,diam,diam);
    
    fill(0);
    if (type == 0) {
      text("Basic", p.x, p.y);
    } else if (type == 1) {
      text("Long", p.x, p.y);
    } else if (type == 2) {
      text("AoE", p.x, p.y);
    } else if (type == 3) {
      text("Sniper", p.x, p.y);
    }
    
  }
  
  int getType() {
    return type;
  }
  
  float getFirerate() {
    return firerate;
  }
  
  float getRange() {
    return range;
  }
  
  float getDamage() {
    return damage;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-24-2017 - 9_42 AM/prototype/prototype.pde`,name:`prototype.pde`,size:2376,code:`//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game game;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
}

void draw() {
  background(30);

  for (Tower t : towers) {
    t.display();
  }

  for (Bullet b : bullets) {
    b.display();
    b.move();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
  }

  for (int i = 0; i < bullets.size(); i++) {

    Bullet b = bullets.get(i);

    if ( !b.status() ) {
      bullets.remove(i);
    }
  }

  for (int j = monsters.size()-1; j >= 0; j--) {

    Monster m = monsters.get(j);

    if ( m.getX() >= width ) {
      m.die();
    }

    if ( !m.status() ) {
      monsters.remove(j);
    }
  }

  for (int l = 0; l < towers.size(); l++) {
    for (int j = monsters.size()-1; j >= 0; j--) {

      Tower t = towers.get(l);
      Monster m = monsters.get(j);

      if (monsters.size() > 0) {
        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {
          if (frameCount % t.getFirerate() == 0 && t.getType() != 2) {
            bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage() ));
          }
        }
      }
    }
  }

  for (int l = 0; l < towers.size(); l++) {
    for (int i = 0; i < bullets.size(); i++) {
      for (int j = monsters.size()-1; j >= 0; j--) {
        
        Tower t = towers.get(l);
        Bullet b = bullets.get(i);
        Monster m = monsters.get(j);
        
        if (t.getType() != 2) {
          b.target(m.getX(), m.getY());
        } else if (t.getType() == 2) {
          b.aoe();
        }

        if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

          if ( b.status() && m.status() ) {
            m.hit( b.damage() );
            b.die();
          }
        }
      }
    }
  }
}

void mousePressed() {
  switch(state) {
  case 0: 
    towers.add(new Tower(mouseX, mouseY, int(random(4)))); 
    break;
  case 1: 
    monsters.add(new Monster(mouseX, mouseY, int(random(3)))); 
    break;
  }
}

void keyPressed() {
  if (key == 't') {
    state = 0;
  } else if (key == 'm') {
    state = 1;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-25-2017 - 11_03 AM/prototype/Bullet.pde`,name:`Bullet.pde`,size:1372,code:`class Bullet {

  PVector p, v, loca, target;
  float pulse, diam, speed, rota, damage, health;
  color glow;
  boolean alive, targetFound;

  Bullet(float tempX, float tempY, float tempD) {
    p = new PVector(tempX, tempY);
    v = new PVector();
    target = new PVector();
    speed = 10;
    diam = 5;
    damage = tempD;
    health = 120;
    pulse = random(3);
    alive = true;
    targetFound = false;
  }

  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x, p.y, diam, diam);
  }

  void update() {
    health -= 1;
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );

    if (health <= 0) {
      die();
    }
  }

  void target(float mx, float my, float tx, float ty, float range) {
    
    target = new PVector(mx, my);
    
    if (dist(p.x,p.y,tx,tx) <= range) {
      loca = new PVector(target.x - p.x, target.y - p.y);
      rota = atan2(loca.y, loca.x) * 180 / PI;
    }
    
  }

  void move() {

    v.x = speed*(90 - abs(rota))/90;

    if (rota < 0) {
      v.y = -speed + abs(v.x);//Going upwards.
    } else {
      v.y = speed - abs(v.x);//Going downwards.
    }

    p.x += v.x;
    p.y += v.y;
  }

  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float damage() {
    return damage;
  }

  void die() {
    alive = false;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-25-2017 - 11_03 AM/prototype/Game.pde`,name:`Game.pde`,size:236,code:`class Game {
  
  int score, map, round;
  boolean active;
  
  Game(int tempM) {
    map = tempM;
    score = 0;
    round = 0;
  }
  
  // if map = 0, grass
  // if map = 1, snow
  // if map = 2, ethereal
  
  void setMap() {
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-25-2017 - 11_03 AM/prototype/Monster.pde`,name:`Monster.pde`,size:1488,code:`class Monster {

  PVector p;
  float w, h, speed, currhp, fullhp;
  int type;
  color skin, hp;
  boolean alive;

  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    alive = true;

    // Type 0 = basic
    // Type 1 = swarm
    // Type 2 = tank

    if (type == 0) {
      w = h = 30;
      skin = color(#FF0000);
      speed = 2;
      fullhp = 150;
      
    } else if (type == 1) {
      w = h = 20;
      skin = color(#00FF00);
      speed = 4;
      fullhp = 75;
      
    } else if (type == 2) {
      w = h = 45;
      skin = color(#0000FF);
      speed = 1;
      fullhp = 250;
    }

    currhp = fullhp;
  }

  void display() {

    fill(skin);
    rect(p.x, p.y, w, h);
    
    if (currhp < fullhp) {
      fill(hp);
      rect(p.x, (p.y - (h + 15) ), currhp, 5);
    }
  }

  void move() {
    p.x += speed;
    p.y += 0;
  }

  void hit(float damage) {
    currhp -= damage;
  }

  void update() {

    if (currhp < fullhp) {
      hp = color(#00FF60);
      
      if (currhp < fullhp/2) {
        hp = color(#FFD900);
        
        if (currhp < fullhp/3) {
          hp = color(#FF002F);
        }
        
      }
      
    }

    if (currhp <= 0) {
      die();
    }
  }
  
  void die() {
    alive = false;
  }
  
  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-25-2017 - 11_03 AM/prototype/Tower.pde`,name:`Tower.pde`,size:1338,code:`class Tower {
  
  PVector p, v;
  float diam;
  float firerate, range, damage;
  int type;
  boolean upgraded;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    diam = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void update() {
    if (type == 0) {
      firerate = 8;
      range = 300;
      damage = 2.5;
    } else if (type == 1) {
      firerate = 8;
      range = 600;
      damage = 1.5;
    } else if (type == 2) {
      firerate = 1;
      range = 100;
      damage = 1;
    } else if (type == 3) {
      firerate = 100;
      range = 10000;
      damage = 15;
    }
  }
  
  void display() {
    
    update();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,diam,diam);
    
    fill(0);
    if (type == 0) {
      text("Basic", p.x, p.y);
    } else if (type == 1) {
      text("Long", p.x, p.y);
    } else if (type == 2) {
      text("AoE", p.x, p.y);
    } else if (type == 3) {
      text("Sniper", p.x, p.y);
    }
    
  }
  
  int getType() {
    return type;
  }
  
  float getFirerate() {
    return firerate;
  }
  
  float getRange() {
    return range;
  }
  
  float getDamage() {
    return damage;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-25-2017 - 11_03 AM/prototype/prototype.pde`,name:`prototype.pde`,size:2361,code:`//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game game;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
}

void draw() {
  background(30);

  for (Tower t : towers) {
    t.display();
  }

  for (Bullet b : bullets) {
    b.display();
    b.move();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
  }

  for (int i = 0; i < bullets.size(); i++) {

    Bullet b = bullets.get(i);

    if ( !b.status() ) {
      bullets.remove(i);
    }
  }

  for (int j = monsters.size()-1; j >= 0; j--) {

    Monster m = monsters.get(j);

    if ( m.getX() >= width ) {
      m.die();
    }

    if ( !m.status() ) {
      monsters.remove(j);
    }
  }

  for (int l = 0; l < towers.size(); l++) {
    for (int j = monsters.size()-1; j >= 0; j--) {

      Tower t = towers.get(l);
      Monster m = monsters.get(j);

      if (monsters.size() > 0) {
        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {
          if (frameCount % t.getFirerate() == 0) {
            bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage() ));
          }
        }
      }
    }
  }

  for (int l = 0; l < towers.size(); l++) {
    for (int j = monsters.size()-1; j >= 0; j--) {
      for (int i = 0; i < bullets.size(); i++) {

        Tower t = towers.get(l);
        Bullet b = bullets.get(i);
        Monster m = monsters.get(j);
        
        b.target(m.getX(), m.getY(), t.getX(), t.getY(), t.getRange());
        
        if ( !m.status() ) {
          b.targetFound = false;
        }

        if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

          if ( b.status() && m.status() ) {
            m.hit( b.damage() );
            b.die();
          }
        }
      }
    }
  }
}

void mousePressed() {
  switch(state) {
  case 0: 
    towers.add(new Tower(mouseX, mouseY, int(random(4)))); 
    break;
  case 1: 
    monsters.add(new Monster(mouseX, mouseY, int(random(3)))); 
    break;
  }
}

void keyPressed() {
  if (key == 't') {
    state = 0;
  } else if (key == 'm') {
    state = 1;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-29-2017 - 11_05 AM/prototype/Bullet.pde`,name:`Bullet.pde`,size:1377,code:`class Bullet {

  PVector pos, vel, loca, tar;
  float pulse, diam, speed, rota, damage, health;
  int target;
  color glow;
  boolean alive;

  Bullet(float tempX, float tempY, float tempDam, int tarM) {
    pos = new PVector(tempX, tempY);
    vel = new PVector();
    tar = new PVector();
    speed = 10;
    diam = 5;
    damage = tempDam;
    health = 120;
    target = tarM;
    pulse = random(90);
    alive = true;
  }

  void display() {
    noStroke();
    fill(glow);
    rect(pos.x, pos.y, diam, diam);
  }

  void update() {
    health -= 1;
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );

    if (health <= 0) {
      die();
    }
  }

  void target() {
    
    float mx = monsters.get(target).getX();
    float my = monsters.get(target).getY();
    
    tar = new PVector(mx,my);
    loca = new PVector(tar.x - pos.x, tar.y - pos.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
    
  }

  void move() {

    vel.x = speed*(90 - abs(rota))/90;

    if (rota < 0) {
      vel.y = -speed + abs(vel.x);//Going upwards.
    } else {
      vel.y = speed - abs(vel.x);//Going downwards.
    }

    pos.x += vel.x;
    pos.y += vel.y;
  }

  boolean status() {
    return alive;
  }

  float getX() {
    return pos.x;
  }

  float getY() {
    return pos.y;
  }

  float damage() {
    return damage;
  }

  void die() {
    alive = false;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-29-2017 - 11_05 AM/prototype/Cell.pde`,name:`Cell.pde`,size:17,code:`class Cell {
  
}`},{path:`/2017/Summative/Prototype Stage/05-29-2017 - 11_05 AM/prototype/Game.pde`,name:`Game.pde`,size:236,code:`class Game {
  
  int score, map, round;
  boolean active;
  
  Game(int tempM) {
    map = tempM;
    score = 0;
    round = 0;
  }
  
  // if map = 0, grass
  // if map = 1, snow
  // if map = 2, ethereal
  
  void setMap() {
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-29-2017 - 11_05 AM/prototype/Monster.pde`,name:`Monster.pde`,size:1488,code:`class Monster {

  PVector p;
  float w, h, speed, currhp, fullhp;
  int type;
  color skin, hp;
  boolean alive;

  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    alive = true;

    // Type 0 = basic
    // Type 1 = swarm
    // Type 2 = tank

    if (type == 0) {
      w = h = 30;
      skin = color(#FF0000);
      speed = 2;
      fullhp = 150;
      
    } else if (type == 1) {
      w = h = 20;
      skin = color(#00FF00);
      speed = 4;
      fullhp = 75;
      
    } else if (type == 2) {
      w = h = 45;
      skin = color(#0000FF);
      speed = 1;
      fullhp = 250;
    }

    currhp = fullhp;
  }

  void display() {

    fill(skin);
    rect(p.x, p.y, w, h);
    
    if (currhp < fullhp) {
      fill(hp);
      rect(p.x, (p.y - (h + 15) ), currhp, 5);
    }
  }

  void move() {
    p.x += speed;
    p.y += 0;
  }

  void hit(float damage) {
    currhp -= damage;
  }

  void update() {

    if (currhp < fullhp) {
      hp = color(#00FF60);
      
      if (currhp < fullhp/2) {
        hp = color(#FFD900);
        
        if (currhp < fullhp/3) {
          hp = color(#FF002F);
        }
        
      }
      
    }

    if (currhp <= 0) {
      die();
    }
  }
  
  void die() {
    alive = false;
  }
  
  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}`},{path:`/2017/Summative/Prototype Stage/05-29-2017 - 11_05 AM/prototype/Tower.pde`,name:`Tower.pde`,size:1457,code:`class Tower {
  
  PVector pos;
  float diam, firerate, range, damage;
  int type, target;
  boolean upgraded, targetFound;
  
  Tower(float tempX, float tempY, int tempT) {
    pos = new PVector(tempX, tempY);
    type = tempT;
    diam = width/32;
    target = 0;
    targetFound = false;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void update() {
    if (type == 0) {
      firerate = 8;
      range = 300;
      damage = 2.5;
    } else if (type == 1) {
      firerate = 8;
      range = 600;
      damage = 1.5;
    } else if (type == 2) {
      firerate = 1;
      range = 100;
      damage = 1;
    } else if (type == 3) {
      firerate = 100;
      range = 10000;
      damage = 15;
    }
  }
  
  void display() {
    
    noStroke();
    fill(255);
    rect(pos.x,pos.y,diam,diam);
    
    fill(0);
    if (type == 0) {
      text("Basic", pos.x, pos.y);
    } else if (type == 1) {
      text("Long", pos.x, pos.y);
    } else if (type == 2) {
      text("Laser", pos.x, pos.y);
    } else if (type == 3) {
      text("Sniper", pos.x, pos.y);
    }
    
  }
  
  int getType() {
    return type;
  }
  
  float getFirerate() {
    return firerate;
  }
  
  float getRange() {
    return range;
  }
  
  float getDamage() {
    return damage;
  }
  
  boolean targetFound() {
    return targetFound;
  }
  
  float getX() {
    return pos.x;
  }
  
  float getY() {
    return pos.y;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/05-29-2017 - 11_05 AM/prototype/prototype.pde`,name:`prototype.pde`,size:2468,code:`//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();
ArrayList<Cell> cells = new ArrayList();

Game game;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
}

void draw() {
  background(30);

  for (Tower t : towers) {
    t.update();
    t.display();
  }

  for (Bullet b : bullets) {
    b.update();
    b.display();
    b.move();

    b.target();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
  }

  for (int i = 0; i < bullets.size(); i++) {

    Bullet b = bullets.get(i);

    if ( !b.status() ) {
      bullets.remove(i);
    }
  }

  for (int j = monsters.size()-1; j >= 0; j--) {

    Monster m = monsters.get(j);

    if ( m.getX() >= width || m.getX() <= 0 || m.getY() >= height || m.getY() <= 0 ) {
      m.die();
    }

    if ( !m.status() ) {
      monsters.remove(j);
      bullets.clear();
    }
  }

  for (int l = 0; l < towers.size(); l++) {
    for (int j = monsters.size()-1; j >= 0; j--) {

      Tower t = towers.get(l);
      Monster m = monsters.get(j);

      if (monsters.size() > 0) {
        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {
          
          if (!t.targetFound()) {
            t.target = j;
            t.targetFound = true;
          }
          
          if (t.targetFound()) {
            
            if (frameCount % t.getFirerate() == 0) {
              bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage(), t.target ));
            }
            
          }
          
        }

        if (!m.status()) {
          t.targetFound = false;
        }
      }

      for (int i = 0; i < bullets.size(); i++) {

        Bullet b = bullets.get(i);

        if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

          if ( b.status() && m.status() ) {
            m.hit( b.damage() );
            b.die();
          }
        }
      }
    }
  }
}

void mousePressed() {
  switch(state) {
  case 0: 
    towers.add(new Tower(mouseX, mouseY, int(random(4)))); 
    break;
  case 1: 
    monsters.add(new Monster(mouseX, mouseY, int(random(3)))); 
    break;
  }
}

void keyPressed() {
  if (key == 't') {
    state = 0;
  } else if (key == 'm') {
    state = 1;
  }
}`},{path:`/2017/Summative/Prototype Stage/06-01-2017 - 11_01 AM/prototype/Bullet.pde`,name:`Bullet.pde`,size:1726,code:`class Bullet {

  PVector pos, vel, loca, tar;
  float pulse, diam, speed, rota, damage, health;
  int target;
  color glow;
  boolean alive;

  Bullet(float tempX, float tempY, float tempDam, int tarM) {
    pos = new PVector(tempX, tempY);
    vel = new PVector();
    tar = new PVector();
    speed = 10;
    diam = 5;
    damage = tempDam;
    health = 120;
    target = tarM;
    pulse = random(90);
    alive = true;
  }

  void display() {
    noStroke();
    fill(glow);
    rect(pos.x, pos.y, diam, diam);
  }

  void update() {
    health -= 1;
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );

    if (health <= 0) {
      die();
    }
  }

  void target() {
    
    int liberty = target;
    
    if (target > monsters.size()) {
      println("liberty b4 math: " + liberty);
      liberty = target - (target - monsters.size());
      println("liberty aft3r math: " + liberty);
    }
    
    println("current target: " + liberty);
    println("# of monsters alive: " + monsters.size());
    println("");
    
    float mx = monsters.get(liberty).getX();
    float my = monsters.get(liberty).getY();
    
    tar = new PVector(mx,my);
    loca = new PVector(tar.x - pos.x, tar.y - pos.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
    
  }

  void move() {

    vel.x = speed*(90 - abs(rota))/90;

    if (rota < 0) {
      vel.y = -speed + abs(vel.x);//Going upwards.
    } else {
      vel.y = speed - abs(vel.x);//Going downwards.
    }

    pos.x += vel.x;
    pos.y += vel.y;
  }

  boolean status() {
    return alive;
  }

  float getX() {
    return pos.x;
  }

  float getY() {
    return pos.y;
  }

  float damage() {
    return damage;
  }

  void die() {
    alive = false;
  }
}`},{path:`/2017/Summative/Prototype Stage/06-01-2017 - 11_01 AM/prototype/Cell.pde`,name:`Cell.pde`,size:911,code:`class Cell {
  
  PVector p;
  float d;
  int state;
  
  Cell(float tempX, float tempY, float tempD) {
    p = new PVector(tempX, tempY);
    d = tempD;
    state = 0;
  }
  
  /*
  
  state
  0 = no towers, available
  1 = tower already here, not available
  2 = other purpose, not available
  
  */
  
  void display() {
    noFill();
    strokeWeight(3);
    stroke(#FFFFFF,20);
    rect(p.x+d/2,p.y+d/2,d,d);
  }
  
  void click(float mx, float my, int t) {
    
    if (mx-d/2 >= p.x-d/2 && mx-d/2 <= p.x+d/2 && my-d/2 >= p.y-d/2 && my-d/2 <= p.y+d/2) {

      if (state == 0) {
        
        noStroke();
        fill(#FFFFFF, 10);
        rect(p.x+d/2,p.y+d/2, d, d);
        
        if (mousePressed && debug == 0) {
          
          towers.add(new Tower(p.x+d/2, p.y+d/2, t));
          state = 1;
          mousePressed = false;
          
        }
        
      }
      
    }
    
  }
  
}`},{path:`/2017/Summative/Prototype Stage/06-01-2017 - 11_01 AM/prototype/Game.pde`,name:`Game.pde`,size:843,code:`class Game {
  
  int score, map, round, selectedTower;
  boolean gameover;
  
  Game(int tempM) {
    map = tempM;
    score = 0;
    round = 0;
    selectedTower = 0;
    gameover = false;
  }
  
  // if map = 0, grass
  // if map = 1, snow
  // if map = 2, ethereal
  
  void setMap() {
    //no map cause ben hahahahahabhahahahaha
  }
  
  void reset() {
    for (int i = 0; i < cols; i++) {
      for (int j = 0; j < rows; j++) {
        board[i][j] = new Cell(cols*i, rows*j,(cols+rows)/2);
      }
    }
  }
  
  void display() {
    for (int i = 0; i < cols; i++) {
      for (int j = 0; j < rows; j++) {
        board[i][j].display();
      }
    }
  }
  
  void interaction() {
    for (int i = 0; i < cols; i++) {
      for (int j = 0; j < rows; j++) {
        board[i][j].click(mouseX, mouseY,selectedTower);
      }
    }
  }
  
}`},{path:`/2017/Summative/Prototype Stage/06-01-2017 - 11_01 AM/prototype/Monster.pde`,name:`Monster.pde`,size:1488,code:`class Monster {

  PVector p;
  float w, h, speed, currhp, fullhp;
  int type;
  color skin, hp;
  boolean alive;

  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    alive = true;

    // Type 0 = basic
    // Type 1 = swarm
    // Type 2 = tank

    if (type == 0) {
      w = h = 30;
      skin = color(#FF0000);
      speed = 2;
      fullhp = 150;
      
    } else if (type == 1) {
      w = h = 20;
      skin = color(#00FF00);
      speed = 4;
      fullhp = 75;
      
    } else if (type == 2) {
      w = h = 45;
      skin = color(#0000FF);
      speed = 1;
      fullhp = 250;
    }

    currhp = fullhp;
  }

  void display() {

    fill(skin);
    rect(p.x, p.y, w, h);
    
    if (currhp < fullhp) {
      fill(hp);
      rect(p.x, (p.y - (h + 15) ), currhp, 5);
    }
  }

  void move() {
    p.x += speed;
    p.y += 0;
  }

  void hit(float damage) {
    currhp -= damage;
  }

  void update() {

    if (currhp < fullhp) {
      hp = color(#00FF60);
      
      if (currhp < fullhp/2) {
        hp = color(#FFD900);
        
        if (currhp < fullhp/3) {
          hp = color(#FF002F);
        }
        
      }
      
    }

    if (currhp <= 0) {
      die();
    }
  }
  
  void die() {
    alive = false;
  }
  
  boolean status() {
    return alive;
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }

  float getW() {
    return w;
  }

  float getH() {
    return h;
  }
}`},{path:`/2017/Summative/Prototype Stage/06-01-2017 - 11_01 AM/prototype/Tower.pde`,name:`Tower.pde`,size:1457,code:`class Tower {
  
  PVector pos;
  float diam, firerate, range, damage;
  int type, target;
  boolean upgraded, targetFound;
  
  Tower(float tempX, float tempY, int tempT) {
    pos = new PVector(tempX, tempY);
    type = tempT;
    diam = width/32;
    target = 0;
    targetFound = false;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void update() {
    if (type == 0) {
      firerate = 8;
      range = 300;
      damage = 2.5;
    } else if (type == 1) {
      firerate = 8;
      range = 600;
      damage = 1.5;
    } else if (type == 2) {
      firerate = 1;
      range = 100;
      damage = 1;
    } else if (type == 3) {
      firerate = 100;
      range = 10000;
      damage = 15;
    }
  }
  
  void display() {
    
    noStroke();
    fill(255);
    rect(pos.x,pos.y,diam,diam);
    
    fill(0);
    if (type == 0) {
      text("Basic", pos.x, pos.y);
    } else if (type == 1) {
      text("Long", pos.x, pos.y);
    } else if (type == 2) {
      text("Laser", pos.x, pos.y);
    } else if (type == 3) {
      text("Sniper", pos.x, pos.y);
    }
    
  }
  
  int getType() {
    return type;
  }
  
  float getFirerate() {
    return firerate;
  }
  
  float getRange() {
    return range;
  }
  
  float getDamage() {
    return damage;
  }
  
  boolean targetFound() {
    return targetFound;
  }
  
  float getX() {
    return pos.x;
  }
  
  float getY() {
    return pos.y;
  }
  
}`},{path:`/2017/Summative/Prototype Stage/06-01-2017 - 11_01 AM/prototype/drawGame.pde`,name:`drawGame.pde`,size:1628,code:`void drawGame() {

  background(30);

  td.display();

  if (!td.gameover) {
    td.interaction();
  }

  for (Tower t : towers) {
    t.update();
    t.display();
  }

  for (Bullet b : bullets) {
    b.update();
    b.display();
    b.move();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
  }

  for (int l = towers.size()-1; l >= 0; l--) {
    for (int j = monsters.size()-1; j >= 0; j--) {

      Tower t = towers.get(l);
      Monster m = monsters.get(j);

      if ( m.getX() >= width || m.getX() <= 0 || m.getY() >= height || m.getY() <= 0 ) {
        m.die();
      }

      if ( !m.status() ) {
        t.targetFound = false;
        monsters.remove(j);
        bullets.clear();
      }

      if (monsters.size() > 0) {
        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {

          if (t.targetFound()) {

            if (frameCount % t.getFirerate() == 0) {
              bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage(), t.target));
            }
          } else {
            t.target = j;
            t.targetFound = true;
          }
        }
      }

      for (int i = bullets.size()-1; i >= 0; i--) {

        Bullet b = bullets.get(i);

        b.target();

        if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

          if ( b.status() && m.status() ) {
            m.hit( b.damage() );
            b.die();
          }
        }

        if ( !b.status() ) {
          bullets.remove(i);
        }
      }
    }
  }
}`},{path:`/2017/Summative/Prototype Stage/06-01-2017 - 11_01 AM/prototype/prototype.pde`,name:`prototype.pde`,size:798,code:`//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game td;
Cell[][] board;

int state, cols, rows, debug;

void setup() {
  //fullScreen();
  size(1440,900);
  smooth(8);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
  
  cols = width/24;
  rows = height/15;
  
  board = new Cell[cols][rows];
  
  td = new Game(0);
  td.reset();
}

void draw() {
  switch(state) {
    case 0:
      drawGame();
      break;
  }
}

void mousePressed() {
  switch(debug) {
    case 0: break;
    case 1: monsters.add(new Monster(mouseX,mouseY,int(random(4)))); break;
  }
}

void keyPressed() {
  if (key == 't') {
    debug = 0;
  } else if (key == 'm') {
    debug = 1;
  }
}`},{path:`/2017/Useful References/Advanced_Snake/Advanced_Snake.pde`,name:`Advanced_Snake.pde`,size:1540,code:`ArrayList<Integer> x = new ArrayList<Integer>(), y = new ArrayList<Integer>();
int w=30, h=30, bs=20, dir=2, ax=12, ay=10;
int[]dx={0, 0, 1, -1}, dy={1, -1, 0, 0};
boolean gameover=false;

void setup() { 
  size(600, 600); 
  x.add(5); 
  y.add(5);
}

void draw() {  
  background(#EAEAEA);
  for (int i=0; i<w; i++) line(i*bs, 0, i*bs, height);
  for (int i=0; i<h; i++)line(0, i*bs, width, i*bs);
  fill(0, 255, 0); 
  for (int i = 0; i < x.size(); i++) rect(x.get(i)*bs, y.get(i)*bs, bs, bs);
  if (!gameover) {  
    fill(255, 0, 0); 
    stroke(255);
    strokeWeight(5);
    rect(ax*bs, ay*bs, bs, bs); 
    if (frameCount%5==0) {
      x.add(0, x.get(0) + dx[dir]); 
      y.add(0, y.get(0) + dy[dir]);
      if (x.get(0) < 0 || y.get(0) < 0 || x.get(0) >= w || y.get(0) >= h) gameover = true;
      for (int i=1; i<x.size(); i++) if (x.get(0)==x.get(i)&&y.get(0)==y.get(i)) gameover=true;
      if (x.get(0)==ax && y.get(0)==ay) { 
        ax = (int)random(0, w); 
        ay = (int)random(0, h);
      } else { 
        x.remove(x.size()-1); 
        y.remove(y.size()-1);
      }
    }
  } else {
    fill(0); 
    textSize(30); 
    textAlign(CENTER); 
    text("GAME OVER. Press space", width/2, height/2);
    if (keyPressed&&key==' ') { 
      x.clear(); 
      y.clear(); 
      x.add(5);  
      y.add(5); 
      gameover = false;
    }
  }
}

void keyPressed() { 
  int nd=key=='s'? 0:(key=='w'?1:(key=='d'?2:(key=='a'?3:-1)));
  if (nd!=-1&&(x.size()<=1||!(x.get(1)==x.get(0)+dx[nd]&&y.get(1)==y.get(0)+dy[nd]))) dir=nd;
}`},{path:`/2017/Useful References/Ball_Object_Array/Ball_Object_Array.pde`,name:`Ball_Object_Array.pde`,size:2172,code:`/*

 Assignment 05: you've been spooked by mr doot, send this to 5 other skoots or else mr doot will come and goot u
 
 */

ArrayList<Ball> balls = new ArrayList();
color c = #313131;
int state = 0;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  smooth(8);
  cursor(CROSS);
}

void draw() {
  
  //Background Colour Change
  switch(state) {
    case 0: c = color(#313131); break;
    case 1: c = color(#EA5A55); break;
    case 2: c = color(#EA9155); break;
    case 3: c = color(#EABB55); break;
    case 4: c = color(#CCEA55); break;
    case 5: c = color(#55EA60); break;
    case 6: c = color(#55EAC6); break;
    case 7: c = color(#55B0EA); break;
    case 8: c = color(#557EEA); break;
    case 9: c = color(#5E55EA); break;
    case 10: c = color(#8E55EA); break;
    case 11: c = color(#EA55AF); break;
    case 12: c = color(#EDEDED); break;
    default: c = color(#313131); break;
  }
  
  //Draw background
  background(c);
  
  //Draw Text
  textSize(36);
  fill(#FFFFFF,100);
  text("By Vincent Nguyen", width/8, height - 46);
  
  for (Ball b : balls) {
    b.display();
    b.move();
    b.collision();
  }
  
  if (mousePressed) {
    balls.add(new Ball(mouseX, mouseY));
  }
}

void keyPressed() {
  if (key == ' ') {
    if (state >= 13) {
      state = 0;
    }
    state++;
  }
}


class Ball {

  PVector p, v, a;
  float d;
  color c;
  int r;

  Ball(float tempX, float tempY) {
    p = new PVector(tempX, tempY);
    v = new PVector(random(-3,3), 0);
    a = new PVector(0, 0.1);
    d = random(20,40);
    c = color(random(155,256),random(155,256),random(155,256));
    r = int(random(4));
  }

  void display() {
    
    noStroke();
    fill(c,180);
    
    if (r <= 1 && r >= 0) {
      ellipse(p.x,p.y,d,d);
    } else if (r <= 2 && r >= 1) {
      ellipse(p.x,p.y,d/1.5,d*1.5);
    } else {
      ellipse(p.x,p.y,d*1.5,d/1.5);
    }
    
  }

  void move() {
    v = v.add(a);
    p = p.add(v);
  }

  void collision() {
    if ((p.x - d/2) <= 0 || (p.x + d/2) >= width) {
      v.x *= -1;
    } else if ((p.y + d/2) >= height || (p.y - d/2) <= 0) {
      v.y *= -1;
      p.y = (height - d/2);
    }
  }
}`},{path:`/2017/Useful References/Better_Text_Input/Better_Text_Input.pde`,name:`Better_Text_Input.pde`,size:493,code:`String myText = "Type something";
 
void setup() {
  size(500, 500);
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(0);
}
 
void draw() {
  background(255);
  text(myText, 0, 0, width, height);
}
 
void keyPressed() {
  if (keyCode == BACKSPACE) {
    if (myText.length() > 0) {
      myText = myText.substring(0, myText.length()-1);
    }
  } else if (keyCode == DELETE) {
    myText = "";
  } else if (keyCode != SHIFT && keyCode != CONTROL && keyCode != ALT) {
    myText += key;
  }
}`},{path:`/2017/Useful References/Bounce/Bounce.pde`,name:`Bounce.pde`,size:409,code:`//Bounce

float x, y, vs, hs, ag;

void setup() {
  size(640,480);
  rectMode(CENTER);
  x = width/2;
  y = height/4;
  vs = 0;
  hs = 2;
  ag = 0.1;
}

void draw() {
  background(#E0E0E0);
  
  stroke(255);
  fill(0);
  rect(x,y,10,10);
  
  y += vs;
  x += hs;
  
  vs += ag;
  
  if ((y+10) >= height) {
    vs *= -0.95;
    hs *= 0.95;
  }
  
  if ((x+10) >= width || (x-10) <= 0) {
    hs *= -0.95;
  }
}`},{path:`/2017/Useful References/Button_Function/Button_Function.pde`,name:`Button_Function.pde`,size:472,code:`void setup() {
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
}`},{path:`/2017/Useful References/Constrain_within_circle/Constrain_within_circle.pde`,name:`Constrain_within_circle.pde`,size:618,code:`float x, y;
float easing = 0.05;
PVector circle = new PVector(250, 250);
int diameter = 300;
 
void setup() {
  size(500, 500);
  x = y = width/2;
  noStroke();
  smooth();
}
 
void draw () {
  background(51);
  fill(255);
  ellipse(circle.x, circle.y, diameter, diameter);
 
  PVector m = new PVector(mouseX, mouseY);
  if (dist(m.x, m.y, circle.x, circle.y) > diameter/2) {
    m.sub(circle);
    m.normalize();
    m.mult(diameter/2);
    m.add(circle);
  }
 
  fill(0, 0, 255);
  ellipse(m.x, m.y, 6, 6);
 
  x = x + (m.x - x) * easing;
  y = y + (m.y - y) * easing;
 
  fill(255, 0, 0);
  ellipse(x, y, 24, 24);
}`},{path:`/2017/Useful References/Easing/Easing.pde`,name:`Easing.pde`,size:381,code:`float x;
float y;
float easing = 0.05;

//Easing

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);
  rectMode(CENTER);
}

void draw() {
  background(#303F9F);
  strokeWeight(10);
  stroke(#3F51B5);
  fill(#C5CAE9);

  float targetX = mouseX;
  x += (targetX - x) * easing;
  float targetY = mouseY;
  y += (targetY - y) * easing;
  ellipse(x, y, width/5, height/5);
}`},{path:`/2017/Useful References/Final_Fantasy_Slider/Final_Fantasy_Slider.pde`,name:`Final_Fantasy_Slider.pde`,size:681,code:`/*

Useful Reference - Slider w/ Functionality
03/09/2017

*/
float mx;

void setup() {
  size(600, 200);
  
  //Starting position for the slider
  mx = width/2;
}

void draw() {
  
  //Filler and fancy code
  background(#2C2C2C);
  strokeWeight(5);
  rectMode(CENTER);
  fill(#000000);
  stroke(#272727);
  rect(width/2, height/2, 500, 30);
  
  //Slider functionality using mx and division
  color c1 = int((mx/(550/255))-25);
  
  //Extra fluff
  fill(c1, 50, 50);
  rect(width/2, height/2 - 55, 90, 30);
  fill(#818181);
  stroke(#404040);
  
  //Slider code
  if (mousePressed == true) {
    mx = constrain(mouseX, 50, 550);
  }
  //Draw the slider
  rect(mx, 100, 30, 100);
}`},{path:`/2017/Useful References/Finding_Angles/Finding_Angles.pde`,name:`Finding_Angles.pde`,size:395,code:`int x, y;
 
void setup() {
  size(500, 500);
  x = width/2;
  y = height/2;
  textSize(20);
  textAlign(CENTER, CENTER);
  noStroke();
  smooth();
}
 
void draw() {
  background(255);
  float angle = atan2(mouseY-y, mouseX-x);
  translate(x, y);
  fill(0);
  ellipse(0, 0, 100, 100);
  fill(255);
  text(int(degrees(angle)), 0, 0);
  rotate(angle);
  fill(0, 0, 255);
  ellipse(50, 0, 30, 30);
}`},{path:`/2017/Useful References/Get_Colour_Buttons/Get_Colour_Buttons.pde`,name:`Get_Colour_Buttons.pde`,size:469,code:`/*

Useful Reference - Using colour for hit detection
03/01/2017

*/

color cm, c1;

void setup() {
  size(600, 400);

  c1 = #FF3434;
}

void draw() {
  cm = get(mouseX, mouseY);
  
  background(#FFFFFF);
  
  noStroke();
  fill(#FF3434);
  triangle(300,150,400,300,200,300);
  
  fill(#B71E1E);
  textAlign(CENTER);
  textSize(36);
  
  if (cm == c1) {
    text("Found me!", width/2, height/2 - 100);
  } else {
    text("Where am I?", width/2, height/2 - 100);
  }
}`},{path:`/2017/Useful References/Screen_Switch/Screen_Switch.pde`,name:`Screen_Switch.pde`,size:660,code:`int currentScreen;
 
void setup() {
  size(500, 500);
  noStroke();
  smooth();
}
 
void draw() {
  switch(currentScreen) {
  case 0: drawScreenZero(); break;
  case 1: drawScreenOne(); break;
  case 2: drawScreenTwo(); break;
  default: background(0); break;
  }
}
 
void mousePressed() {
  currentScreen++;
  if (currentScreen > 2) { currentScreen = 0; }
}
 
void drawScreenZero() {
  background(255, 0, 0);
  fill(255);
  ellipse(100, 100, 400, 400);
}
 
void drawScreenOne() {
  background(0, 255, 0);
  fill(0);
  rect(250, 40, 250, 400);
}
 
void drawScreenTwo() {
  background(0, 0, 255);
  fill(255, 255, 0);
  triangle(150, 100, 150, 400, 450, 250);
}`},{path:`/2017/Useful References/Simplified_Circular_Button/Simplified_Circular_Button.pde`,name:`Simplified_Circular_Button.pde`,size:340,code:`/*

Useful Reference - Using dist() for hit detection
03/01/2017

*/

float cx, cy, mx, my, d;

void setup() {
  size(600, 400);
  cx = width/2;
  cy = height/2;
  d = 200;
}

void draw() {
  mx = mouseX;
  my = mouseY;
  
  if (dist(mx,my,cx,cy) <= d/2) {
    fill(255);
  } else {
    fill(0);
  }
  noStroke();
  ellipse(cx, cy, d, d);
}`},{path:`/2017/Useful References/mario/mario.pde`,name:`mario.pde`,size:1549,code:`/*

Useful Reference: Mario
Vincent Nguyen

Displays the use of case to control movement to allow multiple direction movement.
Better alternative to 'if' statements.

*/

PVector p, v, a;
float w, h, friction;
boolean jump, isLeft, isRight, isUp, isDown;

void setup() {
  size(600, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  p = new PVector(width/2, height/2);
  v = new PVector(0, 0);
  a = new PVector(0, 0);
  w = 30;
  h = 30;
  friction = 0.90;
}

void draw() {
  background(#7DCEC8);
  ground();
  mario();
}

void ground() {
  noStroke();
  fill(#2FB456);
  rect(width/2, height/4*3.5, width, height/4);
}

void mario() {
  fill(#FF3131);
  strokeWeight(5);
  stroke(#C12727);
  rect(p.x, p.y, w, h);

  v = v.add(a);
  p = p.add(v);
  
  if (isLeft) {
    v.x -= 0.4;
  } 
  if (isRight) {
    v.x += 0.4;
  }
  if (isUp && jump != true) {
    v.y += -5;
    jump = true;
  }
  if (isDown && jump == true) {
    v.y += 1;
    jump = true;
  }
  
  v.x *= friction;
  
  //ground & gravity
  if (p.y >= height/4*3) {
    a.y = 0;
    p.y = height/4*3;
    jump = false;
  } else {
    a.y = 0.2;
  }
  
  //walls
  if (p.x <= (w/2)) {
    p.x = w/2;
  } else if (p.x >= (width - (w/2))) {
    p.x = (width - (w/2));
  }
}

void keyPressed() {
  setMove(key, true);
}

void keyReleased() {
  setMove(key, false);
}

boolean setMove(char k, boolean b) {
  switch(k) {
  case 'w':
    return isUp = b;
  case 's':
    return isDown = b;
  case 'a':
    return isLeft = b;
  case 'd':
    return isRight = b;
  default:
    return b;
  }
}`},{path:`/2018/Nguyen_Vincent_Assignment_01/A1Q1/A1Q1.pde`,name:`A1Q1.pde`,size:474,code:`/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 01:
Make a red ball (30 x 30) move from the top of the
screen to the bottom, slowly and smoothly, with a
constant speed (call it ySpeed)

*/

float yPos;
float ySpeed;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  yPos = 0;
  ySpeed = 2;
}

void draw() {
  background(0);
  fill(#FF0000);
  ellipse(300,yPos,30,30);
  fill(#FFFFFF,80);
  
  yPos += ySpeed; //Adds speed to position
  
}`},{path:`/2018/Nguyen_Vincent_Assignment_01/A1Q2/A1Q2.pde`,name:`A1Q2.pde`,size:654,code:`/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 02:
Now make it appear to accelerate constantly. Recall
that speed is a change in position over time, and
acceleration is a change in speed over time. (Don't
worry about what happens when the ball falls past the
bottom of the window for now.)

*/

float yPos;
float ySpeed;
float yAccel;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  yPos = 0;
  ySpeed = 2;
  yAccel = 0.1;
}

void draw() {
  background(0);
  fill(#FF0000);
  ellipse(300,yPos,30,30);
  fill(#FFFFFF,80);
  
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
}`},{path:`/2018/Nguyen_Vincent_Assignment_01/A1Q3/A1Q3.pde`,name:`A1Q3.pde`,size:608,code:`/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 03:
Next: Make it bounce.
[HINT: You'll need an if statement]

*/

float yPos;
float ySpeed;
float yAccel;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  yPos = 0;
  ySpeed = 2;
  yAccel = 0.1;
}

void draw() {
  background(0);
  fill(#FF0000);
  ellipse(300,yPos,30,30);
  fill(#FFFFFF,80);
  
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
  if (yPos >= height - 15) {
    ySpeed *= -1;
    yPos = height - 15;
  } else if (yPos <= 15) {
    ySpeed *= -1;
    yPos = 15;
  }
}`},{path:`/2018/Nguyen_Vincent_Assignment_01/A1Q4/A1Q4.pde`,name:`A1Q4.pde`,size:763,code:`/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 04:
Can you make the ball look like it is bouncing with a
realistic "elasticity"? In other words, we know that
the bouncing ball must lose energy with every bounce,
so can you make it look like its bounce is "decaying"
in time?

*/

float yPos;
float ySpeed;
float yAccel;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  yPos = 0;
  ySpeed = 2;
  yAccel = 0.1;
}

void draw() {
  background(0);
  
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
  if (yPos >= height - 15) {
    ySpeed *= -0.90;
    yPos = height - 15;
  } else if (yPos <= 15) {
    ySpeed *= -0.90;
    yPos = 15;
  }
  
  fill(#FF0000);
  ellipse(300,yPos,30,30);
}`},{path:`/2018/Nguyen_Vincent_Assignment_01/A1Q5/A1Q5.pde`,name:`A1Q5.pde`,size:1255,code:`/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 05:
Now, as the ball is bouncing and gradually losing energy,
add wind. In other words, make it look like there is a
slight wind blowing from the left side of the screen to
the right side. When the ball hits the right wall, it will
bounce back, and it will lose energy. Eventually, it should
settle down in the bottom right corner. HINT: You already
have a ySpeed and a yPosition, but to do this one you will
also want to have an xSpeed and an xPosition.

*/

float xPos, yPos;
float xSpeed, ySpeed;
float xAccel, yAccel;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  xPos = 300;
  yPos = 0;
  xSpeed = 2;
  ySpeed = 2;
  xAccel = 0.01;
  yAccel = 0.1;
}

void draw() {
  background(0);
  fill(#FF0000);
  ellipse(xPos,yPos,30,30);
  fill(#FFFFFF,80);
  
  xPos += xSpeed;
  xSpeed += xAccel;
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
  if (yPos >= height - 15) {
    ySpeed *= -0.90;
    yPos = height - 15;
  } else if (yPos <= 15) {
    ySpeed *= -0.90;
    yPos = 15;
  }
  
  if (xPos >= width - 15) {
    xSpeed *= -0.90;
    xPos = width - 15;
  } else if (xPos <= 15) {
    xSpeed *= -0.90;
    xPos = 15;
  }
}`},{path:`/2018/Nguyen_Vincent_Assignment_01/A1Q6/A1Q6.pde`,name:`A1Q6.pde`,size:1317,code:`/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 06:
Add a button (or just click and hold the mouse) to make
anti-gravity. In other words, the ball will be attracted
to (and bounce off of) the ceiling. Eventually, the ball
will come to rest on the ceiling, if you let it. (You can
leave the wind in this program.)

*/

float xPos, yPos;
float xSpeed, ySpeed;
float xAccel, yAccel;
String status;

void setup() {
  size(600,600);
  noStroke();
  ellipseMode(CENTER);
  textSize(36);
  textAlign(CENTER,CENTER);
  xPos = 300;
  yPos = 0;
  xSpeed = 2;
  ySpeed = 2;
  xAccel = 0.05;
  yAccel = 0.1;
  status = "OFF";
}

void draw() {
  background(0);
  fill(#FF0000);
  ellipse(xPos,yPos,30,30);
  fill(#FFFFFF,80);
  text("Anti-Gravity: " + status,300,300);
  
  xPos += xSpeed;
  xSpeed += xAccel;
  yPos += ySpeed; //Adds speed to position
  ySpeed += yAccel; //Adds gravity to speed
  
  if (yPos > height - 15) {
    ySpeed *= -0.9;
    yPos = height - 15;
  } else if (yPos < 15) {
    ySpeed *= -0.9;
    yPos = 15;
  }
  
  if (xPos > width - 15) {
    xSpeed *= -0.9;
    xPos = width - 15;
  } else if (xPos < 15) {
    xSpeed *= -0.9;
    xPos = 15;
  }
}

void mousePressed() {
  yAccel *= -1;
  if (status == "ON") {
    status = "OFF";
  } else if (status == "OFF") {
    status = "ON";
  }
}`},{path:`/2018/Nguyen_Vincent_Assignment_01/A1Q7/A1Q7.pde`,name:`A1Q7.pde`,size:1299,code:`/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 07:
Now, create a program where can fling the ball with your
mouse by clicking on it, moving it down and to the left,
then releasing it so that it is thrown up and to the right.
(It's a bit like Angry Birds.) This is called projectile
motion. (BONUS KNOWLEDGE! The trajectory of the projectile
will be a perfect parabola if there is no air resistance).

*/

PVector p, v, a, t;
boolean frozen;

void setup() {
  size(600,600);
  ellipseMode(CENTER);
  p = new PVector(300,300);
  v = new PVector(0,0);
  a = new PVector(0,0.1);
  t = new PVector(0,0);
  frozen = true;
}

void draw() {
  background(0);
  noStroke();
  fill(#FF0000);
  ellipse(p.x, p.y, 30, 30);
  
  if (!frozen) {
    p.add(v);
    v.add(a);
  }
  
  //COLLISION
  if (p.y >= height - 15) {
    v.y *= -0.90;
    p.y = height - 15;
  } else if (p.y <= 15) {
    v.y *= -0.90;
    p.y = 15;
  }
  if (p.x >= width - 15) {
    v.x *= -0.90;
    p.x = width - 15;
  } else if (p.x <= 15) {
    v.x *= -0.90;
    p.x = 15;
  }
  
}

void mouseReleased() {
  v.set((p.x-t.x)/20, (p.y-t.y)/20);
  frozen = false;
}

void mousePressed() {
  frozen = true;
}

void mouseDragged() {
  stroke(#FF0000);
  strokeWeight(5);
  line(p.x,p.y,mouseX,mouseY);
  t.set(mouseX,mouseY);
}`},{path:`/2018/Nguyen_Vincent_Assignment_01/A1Q8/A1Q8.pde`,name:`A1Q8.pde`,size:2471,code:`/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 08:
CHALLENGE: Can you turn this into a game where you
fling a ball at a target (another ball -- make it
yellow, and 40x40)? To detect if the projectile has
hit the target you might want to use the dist( )
function. The score is a percentage: (# of successful
hits / # of total attempts) * 100%. After a target is
hit, the score updates and the target appears in a new,
random location.

*/

ArrayList<Target> targets = new ArrayList();
PVector p, v, a, t;
float score, hits, attempts;
boolean frozen;

void setup() {
  size(600,600);
  ellipseMode(CENTER);
  textSize(48);
  textAlign(LEFT,CENTER);
  cursor(CROSS);
  p = new PVector(300,300);
  v = new PVector(0,0);
  a = new PVector(0,0.1);
  t = new PVector(0,0);
  score = 0;
  hits = 0;
  attempts = 0;
  targets.add(new Target());
  frozen = true;
}

void draw() {
  background(0);
  noStroke();
  fill(#FF0000);
  ellipse(p.x, p.y, 30, 30);
  
  if (!frozen) {
    p.add(v);
    v.add(a);
  }
  
  //COLLISION
  if (p.y >= height - 15) {
    v.y *= -0.90;
    p.y = height - 15;
  } else if (p.y <= 15) {
    v.y *= -0.90;
    p.y = 15;
  }
  if (p.x >= width - 15) {
    v.x *= -0.90;
    p.x = width - 15;
  } else if (p.x <= 15) {
    v.x *= -0.90;
    p.x = 15;
  }
  
  for (Target t : targets) {
    t.display();
    t.collision(p.x,p.y);
  }
  
  for (int i = 0; i < targets.size(); i++) {
    Target t = targets.get(i);
    if (!t.status()) {
      targets.remove(i);
      frozen = true;
      p = new PVector(300,300);
      v = new PVector(0,0);
      targets.add(new Target());
    }
  }
  
  score = (hits/attempts)*100;
  fill(#FFFFFF,150);
  text("Score: " + round(score) + "%", 20, 40);
  
}

void mouseReleased() {
  v.set((p.x-t.x)/25, (p.y-t.y)/25);
  attempts++;
  frozen = false;
}

void mousePressed() {
  frozen = true;
}

void mouseDragged() {
  stroke(#FF0000);
  strokeWeight(5);
  line(p.x,p.y,mouseX,mouseY);
  t.set(mouseX,mouseY);
}

class Target {
  
  PVector p;
  boolean alive;
  
  Target() {
    p = new PVector(random(40,560),random(40,560));
    alive = true;
  }
  
  void display() {
    noStroke();
    fill(#FFFF00);
    if (alive) {
      ellipse(p.x,p.y,40,40);
    }
  }
  
  void collision(float x, float y) {
    if (dist(p.x,p.y,x,y) <= 30) {
      if (alive) {
        hits++;
        die();
      }
    }
  }
  
  void die() {
    alive = false;
  }
  
  boolean status() {
    return alive;
  }
  
}`},{path:`/2018/Nguyen_Vincent_Assignment_02/Nguyen_Vincent_Assignment_02.pde`,name:`Nguyen_Vincent_Assignment_02.pde`,size:3624,code:`/*

 ICS4U Assignment 02: Bird Angry at a Bee
 02/21/2018
 Vincent Nguyen
 
 */

ArrayList<Bee> bees = new ArrayList();
PImage win;
boolean won;
int hits;
int score;
Ball b;

void setup() {
  size(1200, 800);
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(48);
  b = new Ball(200, 600);
  bees.add(new Bee(1000,300));
  bees.add(new Bee(1000,500));
  win = loadImage("nic.png");
}

void draw() {
  background(#000000);
  
  for (Bee s : bees) {
    s.update();
    s.display();
    s.collide(b.getX(), b.getY());
  }
  
  b.update();
  b.display();
  b.collision();

  for (int i = 0; i < bees.size(); i++) {
    Bee s = bees.get(i);
    if (!s.status()) {
      bees.remove(i);
    }
    if (bees.size() == 0) {
      if (hits == 2) {
        won = true;
      }
      bees.add(new Bee(1000,300));
      bees.add(new Bee(1000,500));
    }
  }
  fill(#FFFFFF);
  textSize(48);
  text("Bird Angry at a Bee", 600, 50);
  text("Score: " + str(score), 125, 50);
  
  if (won) {
    image(win,0,0,width,height);
    textSize(96);
    text("wow...", width/4, height/3);
    if (keyPressed) {
      won = false;
    }
  }
}

void mouseReleased() {
  b.released();
}

void mousePressed() {
  b.pressed();
}

void mouseDragged() {
  b.dragged();
}

class Ball {

  PVector p, v, a;
  float d;
  boolean frozen, drag, oneshot;

  Ball(float x, float y) {
    p = new PVector(x, y);
    v = new PVector(0, 0);
    a = new PVector(0, 0.2);
    d = 50;
    frozen = true;
    drag = false;
    oneshot = false;
  }

  void update() {
    if (!frozen) {
      p.add(v);
      v.add(a);
    }
  }

  void display() {
    if (drag) {
      stroke(#AAAAAA);
      strokeWeight(10);
      line(p.x, p.y, mouseX, mouseY);
    }

    noStroke();
    fill(#FF0000);
    ellipse(p.x, p.y, d, d);
  }

  void collision() {
    if (p.y >= height - d/2 || p.y <= d/2) {
      v.y *= -1;
    }
    if (p.x >= width - d/2 || p.x <= d/2) {
      reset();
    }
  }

  void reset() {
    p.x = 200;
    p.y = 600;
    v.set(0, 0);
    hits = 0;
    frozen = true;
    oneshot = false;
  }

  void pressed() {
    if (!oneshot) {
      frozen = true;
    }
  }

  void dragged() {
    if (!oneshot) {
      drag = true;
    }
  }

  void released() {
    if (!oneshot) {
      v.set( (p.x-mouseX)/20, (p.y-mouseY)/20 );
      frozen = false;
      drag = false;
      oneshot = true;
    }
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }
}

class Bee {

  PVector p, v, a;
  float d;
  boolean alive;

  Bee(float x, float y) {
    p = new PVector(x, y);
    v = new PVector(0, 0);
    a = new PVector(0, 0);
    d = 100;
    alive = true;
  }

  void update() {
    a.set(random(-1,1),random(-1,1));
    v.add(a);
    p.add(v);
    
    if (p.x >= width - d/2) {v.x *= -1; p.x = width - d/2;}
    else if (p.x <= width*3/4 + d/2) {v.x *= -1; p.x = width*3/4 + d/2;}
    if (p.y >= height - d/2) {v.y *= -1; p.y = height - d/2;}
    else if (p.y <= d/2) {v.y *= -1; p.y = d/2;}
    
    if (v.x >= 3) {v.x = 3;}
    else if (v.x <= -3) {v.x = -3;}
    if (v.y >= 3) {v.y = 5;}
    else if (v.y <= -3) {v.y = -3;}
    
  }

  void display() {
    noStroke();
    fill(#FFFF00);
    ellipse(p.x, p.y, d, d);
    stroke(#000000);
    strokeWeight(15);
    line(p.x-d/2, p.y-d/4, p.x+d/2, p.y-d/4);
    line(p.x-d/2, p.y, p.x+d/2, p.y);
    line(p.x-d/2, p.y+d/4, p.x+d/2, p.y+d/4);
  }

  void collide(float x, float y) {
    if (dist(x,y,p.x,p.y) <= d*3/4) {
      if (alive) {
        score++;
        hits++;
        alive = false;
      }
    }
  }

  boolean status() {
    return alive;
  }
}`},{path:`/2018/Spring_Arrsy/Spring_Arrsy.pde`,name:`Spring_Arrsy.pde`,size:1118,code:`Spring[] springs = new Spring[5];

void setup() {
  size(600, 600);
  noStroke();
  rectMode(CENTER);
  for (int i = 0; i < 5; i++) {
    springs[i] = new Spring(i*100+100, 300, i*100 + 100, random(100,500));
  }
}

void draw() {
  background(#0D1F2D);
  for (Spring s : springs) {
    s.update();
    s.display();
  }
}

void mouseClicked() {
  for (int i = 0; i < 5; i++) {
    springs[i] = new Spring(i*100+100, 300, i*100 + 100, random(100,500));
  }
}

class Spring {
  
  PVector p,v,a,og,rest;
  
  float mass = 10;
  float k = 0.1;
  float force = 0;
  float loss = 0.95;
  
  Spring(float ogx, float ogy, float x, float y) {
    p = new PVector(x, y);
    v = new PVector(0, 0);
    a = new PVector(0, 0);
    og = new PVector(ogx, ogy);
    rest = new PVector(ogx, ogy);
  }
  
  void update() {
    force = -k*(p.y - rest.y);    // F = -kx
    a.y = force/mass;             // F = ma
    v.y = (v.y+a.y);
    //v.y = loss*(v.y+a.y);         // lose % of its energy
    p.y += v.y;
  }
  
  void display() {
    fill(#533A7B);
    rect(p.x, 0, 20, p.y*2);
    fill(#7E52A0);
    rect(p.x, p.y, 75, 75);
  }
}`},{path:`/2018/summative/summ2prototype.pde`,name:`summ2prototype.pde`,size:901,code:`ArrayList<Monster> monsters = new ArrayList<Monster>();

void setup() {
  size(1000, 750);
  rectMode(CENTER);
  noCursor();
  
  monsters.add(new Monster());
}

void draw() {
  background(255);
  for (Monster m: monsters) {
    m.display();
    m.move();
    m.update();
  }
  reticle();
}

void reticle() {
  noFill();
  stroke(#FF0000);
  strokeWeight(3);
  translate(mouseX, mouseY);
  line(-25,0,25,0);
  line(0,-25,0,25);
  ellipse(0, 0, 35, 35);
}

class Monster {

  PVector pos, vel, acc;

  Monster() {
    pos = new PVector(width/2, height/2);
    vel = new PVector(1, 0);
    acc = new PVector(0, 0);
  }

  void display() {
    fill(#AAAAFF);
    noStroke();
    rect(pos.x, pos.y, 100, 100);
  }

  void move() {
    pos.add(vel);
    vel.add(acc);
  }
  
  void update() {
    if (pos.x + 50 > width) {
      vel.x *= -1;
    } else if (pos.x - 50 < 0) {
      vel.x *= -1;
    }
  }
}
`}],k=[],A=[{path:`/2016/ASSIGNMENTS/A-07 Smarter Searches/Smarter Searches.docx`,name:`Smarter Searches.docx`,size:307380},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-6-2016/assignment_09_mission_01/data/howcansheslap.jpeg`,name:`howcansheslap.jpeg`,size:17857},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-6-2016/assignment_09_mission_01/data/penguin.png`,name:`penguin.png`,size:251498},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-6-2016/assignment_09_mission_02/data/howcansheslap.jpeg`,name:`howcansheslap.jpeg`,size:17857},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-6-2016/assignment_09_mission_02/data/penguin.png`,name:`penguin.png`,size:251498},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-6-2016/assignment_09_mission_03/data/cafeterrace.jpg`,name:`cafeterrace.jpg`,size:232174},{path:`/2016/ASSIGNMENTS/A-09 Working with Images/6-7-2016/assignment_09_mission_03/data/cafeterrace.jpg`,name:`cafeterrace.jpg`,size:232174},{path:`/2016/SUMMATIVE/Summative_2/Untitled document.docx`,name:`Untitled document.docx`,size:307729},{path:`/2017/Assignments/A02 - Funny Face/2-19-2017/Nguyen_Vincent_Assignment_02/sproing.mp3`,name:`sproing.mp3`,size:17536},{path:`/2017/Assignments/A02 - Funny Face/2-19-2017/Nguyen_Vincent_Assignment_02/toot.mp3`,name:`toot.mp3`,size:9856},{path:`/2017/Assignments/A02 - Funny Face/2-19-2017/Nguyen_Vincent_Assignment_02/whistle.mp3`,name:`whistle.mp3`,size:20096},{path:`/2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/data/DeterminationSans-36.vlw`,name:`DeterminationSans-36.vlw`,size:88618},{path:`/2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/data/battle.mp3`,name:`battle.mp3`,size:16874},{path:`/2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/data/dun.mp3`,name:`dun.mp3`,size:50311},{path:`/2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/data/menu.mp3`,name:`menu.mp3`,size:514245},{path:`/2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/data/title.png`,name:`title.png`,size:574},{path:`/2017/Assignments/A03 - Menu Screen/03-05-2017/Nguyen_Vincent_Assignment_03/data/undyne.mp3`,name:`undyne.mp3`,size:1850879},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/DeterminationSans-36.vlw`,name:`DeterminationSans-36.vlw`,size:88618},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0000.png`,name:`Undyne_0000.png`,size:2876},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0001.png`,name:`Undyne_0001.png`,size:2958},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0002.png`,name:`Undyne_0002.png`,size:2998},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0003.png`,name:`Undyne_0003.png`,size:2980},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0004.png`,name:`Undyne_0004.png`,size:2936},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0005.png`,name:`Undyne_0005.png`,size:2933},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0006.png`,name:`Undyne_0006.png`,size:2865},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0007.png`,name:`Undyne_0007.png`,size:2996},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0008.png`,name:`Undyne_0008.png`,size:2996},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0009.png`,name:`Undyne_0009.png`,size:2841},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0010.png`,name:`Undyne_0010.png`,size:2991},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0011.png`,name:`Undyne_0011.png`,size:3013},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0012.png`,name:`Undyne_0012.png`,size:2975},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0013.png`,name:`Undyne_0013.png`,size:2942},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0014.png`,name:`Undyne_0014.png`,size:2895},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0015.png`,name:`Undyne_0015.png`,size:2967},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0016.png`,name:`Undyne_0016.png`,size:2845},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0017.png`,name:`Undyne_0017.png`,size:2966},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0018.png`,name:`Undyne_0018.png`,size:2903},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0019.png`,name:`Undyne_0019.png`,size:2933},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0020.png`,name:`Undyne_0020.png`,size:2867},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0021.png`,name:`Undyne_0021.png`,size:2901},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0022.png`,name:`Undyne_0022.png`,size:2861},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0023.png`,name:`Undyne_0023.png`,size:2990},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0024.png`,name:`Undyne_0024.png`,size:2928},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0025.png`,name:`Undyne_0025.png`,size:2941},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0026.png`,name:`Undyne_0026.png`,size:3001},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0027.png`,name:`Undyne_0027.png`,size:2967},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0028.png`,name:`Undyne_0028.png`,size:2980},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0029.png`,name:`Undyne_0029.png`,size:2980},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0030.png`,name:`Undyne_0030.png`,size:2893},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0031.png`,name:`Undyne_0031.png`,size:2893},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0032.png`,name:`Undyne_0032.png`,size:2959},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/alphys.png`,name:`alphys.png`,size:15014},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/attack.mp3`,name:`attack.mp3`,size:10187},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/attack.png`,name:`attack.png`,size:2914},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/battle.mp3`,name:`battle.mp3`,size:16874},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/dun.mp3`,name:`dun.mp3`,size:50311},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/lines.png`,name:`lines.png`,size:18510},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/menu.mp3`,name:`menu.mp3`,size:514245},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/papyrus.png`,name:`papyrus.png`,size:15362},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/sans.png`,name:`sans.png`,size:19607},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/spear.mp3`,name:`spear.mp3`,size:1850879},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/stats.png`,name:`stats.png`,size:1150},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/title.png`,name:`title.png`,size:574},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/toriel.png`,name:`toriel.png`,size:2424},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/undyne.gif`,name:`undyne.gif`,size:70769},{path:`/2017/Assignments/A03 - Menu Screen/03-06-2017/Nguyen_Vincent_Assignment_03/data/undyne.png`,name:`undyne.png`,size:24053},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/DeterminationSans-36.vlw`,name:`DeterminationSans-36.vlw`,size:88618},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0000.png`,name:`Undyne_0000.png`,size:2876},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0001.png`,name:`Undyne_0001.png`,size:2958},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0002.png`,name:`Undyne_0002.png`,size:2998},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0003.png`,name:`Undyne_0003.png`,size:2980},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0004.png`,name:`Undyne_0004.png`,size:2936},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0005.png`,name:`Undyne_0005.png`,size:2933},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0006.png`,name:`Undyne_0006.png`,size:2865},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0007.png`,name:`Undyne_0007.png`,size:2996},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0008.png`,name:`Undyne_0008.png`,size:2996},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0009.png`,name:`Undyne_0009.png`,size:2841},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0010.png`,name:`Undyne_0010.png`,size:2991},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0011.png`,name:`Undyne_0011.png`,size:3013},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0012.png`,name:`Undyne_0012.png`,size:2975},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0013.png`,name:`Undyne_0013.png`,size:2942},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0014.png`,name:`Undyne_0014.png`,size:2895},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0015.png`,name:`Undyne_0015.png`,size:2967},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0016.png`,name:`Undyne_0016.png`,size:2845},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0017.png`,name:`Undyne_0017.png`,size:2966},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0018.png`,name:`Undyne_0018.png`,size:2903},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0019.png`,name:`Undyne_0019.png`,size:2933},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0020.png`,name:`Undyne_0020.png`,size:2867},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0021.png`,name:`Undyne_0021.png`,size:2901},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0022.png`,name:`Undyne_0022.png`,size:2861},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0023.png`,name:`Undyne_0023.png`,size:2990},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0024.png`,name:`Undyne_0024.png`,size:2928},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0025.png`,name:`Undyne_0025.png`,size:2941},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0026.png`,name:`Undyne_0026.png`,size:3001},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0027.png`,name:`Undyne_0027.png`,size:2967},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0028.png`,name:`Undyne_0028.png`,size:2980},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0029.png`,name:`Undyne_0029.png`,size:2980},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0030.png`,name:`Undyne_0030.png`,size:2893},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0031.png`,name:`Undyne_0031.png`,size:2893},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/Undyne_0032.png`,name:`Undyne_0032.png`,size:2959},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/alphys.png`,name:`alphys.png`,size:15014},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/attack.mp3`,name:`attack.mp3`,size:16456},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/attack.png`,name:`attack.png`,size:2914},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/battle.mp3`,name:`battle.mp3`,size:16874},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/dun.mp3`,name:`dun.mp3`,size:50311},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/lines.png`,name:`lines.png`,size:18510},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/menu.mp3`,name:`menu.mp3`,size:514245},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/papyrus.png`,name:`papyrus.png`,size:15362},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/ping.mp3`,name:`ping.mp3`,size:12694},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/sans.png`,name:`sans.png`,size:19607},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/spear.mp3`,name:`spear.mp3`,size:1850879},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/stats.png`,name:`stats.png`,size:1150},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/title.png`,name:`title.png`,size:574},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/toriel.png`,name:`toriel.png`,size:2424},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/undyne.gif`,name:`undyne.gif`,size:70769},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/undyne.mp3`,name:`undyne.mp3`,size:1850879},{path:`/2017/Assignments/A03 - Menu Screen/03-08-2017/Nguyen_Vincent_Assignment_03/data/undyne.png`,name:`undyne.png`,size:24053},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/Eraser_Regular-32.vlw`,name:`Eraser_Regular-32.vlw`,size:49417},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/Eraser_Regular-84.vlw`,name:`Eraser_Regular-84.vlw`,size:313202},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/breakout.mp3`,name:`breakout.mp3`,size:907963},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/chalkboard.jpg`,name:`chalkboard.jpg`,size:4433480},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/gameover.mp3`,name:`gameover.mp3`,size:808907},{path:`/2017/Assignments/A04 - Old School Games/03-28-2017/Assignment_04/data/mainmenu.mp3`,name:`mainmenu.mp3`,size:1203878},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/Eraser_Regular-32.vlw`,name:`Eraser_Regular-32.vlw`,size:49417},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/Eraser_Regular-84.vlw`,name:`Eraser_Regular-84.vlw`,size:313202},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/breakout.mp3`,name:`breakout.mp3`,size:907963},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/chalkboard.jpg`,name:`chalkboard.jpg`,size:4433480},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/gameover.mp3`,name:`gameover.mp3`,size:808907},{path:`/2017/Assignments/A04 - Old School Games/03-29-2017/Assignment_04/data/mainmenu.mp3`,name:`mainmenu.mp3`,size:1203878},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/NewCicle-Semi-36.vlw`,name:`NewCicle-Semi-36.vlw`,size:72511},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/background01.png`,name:`background01.png`,size:809144},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/background02.png`,name:`background02.png`,size:790736},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/background03.png`,name:`background03.png`,size:656622},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/background04.png`,name:`background04.png`,size:587048},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/background05.png`,name:`background05.png`,size:762581},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/doggo.png`,name:`doggo.png`,size:205144},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/rain.mp3`,name:`rain.mp3`,size:2518349},{path:`/2017/Assignments/A05 - Animated Objects/Assignment_05/data/thunder.mp3`,name:`thunder.mp3`,size:224074},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/blackwatch.png`,name:`blackwatch.png`,size:73751},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/collection.mp3`,name:`collection.mp3`,size:963551},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/hit.mp3`,name:`hit.mp3`,size:11098},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/kingsrow.jpg`,name:`kingsrow.jpg`,size:508247},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/menu.mp3`,name:`menu.mp3`,size:1497703},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/overwatch.png`,name:`overwatch.png`,size:30433},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/roundstart.mp3`,name:`roundstart.mp3`,size:724479},{path:`/2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/title.png`,name:`title.png`,size:13390},{path:`/2017/Assignments/A06 - Tic Tac Toe/Tic-Tac-Toe.docx`,name:`Tic-Tac-Toe.docx`,size:307846},{path:`/2017/Just for Fun/Ben_Hines/data/Dotum-36.vlw`,name:`Dotum-36.vlw`,size:120459},{path:`/2017/Just for Fun/Ben_Hines/data/background.jpg`,name:`background.jpg`,size:162745},{path:`/2017/Just for Fun/Ben_Hines/data/title.png`,name:`title.png`,size:5487},{path:`/2017/Just for Fun/Life_Is_Strange/data/AgencyFB-Bold-40.vlw`,name:`AgencyFB-Bold-40.vlw`,size:89222},{path:`/2017/Just for Fun/Life_Is_Strange/data/AgencyFB-Reg-96.vlw`,name:`AgencyFB-Reg-96.vlw`,size:400673},{path:`/2017/Lessons/Loading_Fonts/data/ComicSansMS-18.vlw`,name:`ComicSansMS-18.vlw`,size:41593},{path:`/2017/Lessons/Loading_Fonts/data/ComicSansMS-36.vlw`,name:`ComicSansMS-36.vlw`,size:145340},{path:`/2017/Lessons/Loading_Fonts/data/ComicSansMS-72.vlw`,name:`ComicSansMS-72.vlw`,size:552183},{path:`/2018/Nguyen_Vincent_Assignment_02/data/nic.png`,name:`nic.png`,size:164478},{path:`/p5/2016-assignments-a-05-programming-in-processing-assignment-05-mission-03.js`,name:`2016-assignments-a-05-programming-in-processing-assignment-05-mission-03.js`,size:2720},{path:`/p5/2016-assignments-a-05-programming-in-processing-assignment-05-mission-04.js`,name:`2016-assignments-a-05-programming-in-processing-assignment-05-mission-04.js`,size:2732},{path:`/p5/2016-assignments-a-05-programming-in-processing-assignment-05-mission-05.js`,name:`2016-assignments-a-05-programming-in-processing-assignment-05-mission-05.js`,size:2843},{path:`/p5/2016-assignments-a-05-programming-in-processing-assignment-05-mission-06.js`,name:`2016-assignments-a-05-programming-in-processing-assignment-05-mission-06.js`,size:2927},{path:`/p5/2016-assignments-a-05-programming-in-processing-assignment-05-mission-07.js`,name:`2016-assignments-a-05-programming-in-processing-assignment-05-mission-07.js`,size:3156},{path:`/p5/2016-assignments-a-05-programming-in-processing-assignment-05-mission-08.js`,name:`2016-assignments-a-05-programming-in-processing-assignment-05-mission-08.js`,size:3117},{path:`/p5/2016-assignments-a-05-programming-in-processing-ics2o-nguyen-vincent-a-05-processing-assignment-05-mission-08.js`,name:`2016-assignments-a-05-programming-in-processing-ics2o-nguyen-vincent-a-05-processing-assignment-05-mission-08.js`,size:3154},{path:`/p5/2016-assignments-a-06-paint-program-assignment-06-mission-02.js`,name:`2016-assignments-a-06-paint-program-assignment-06-mission-02.js`,size:3614},{path:`/p5/2016-assignments-a-06-paint-program-assignment-06-mission-03.js`,name:`2016-assignments-a-06-paint-program-assignment-06-mission-03.js`,size:4193},{path:`/p5/2016-assignments-a-06-paint-program-assignment-06-mission-04.js`,name:`2016-assignments-a-06-paint-program-assignment-06-mission-04.js`,size:4595},{path:`/p5/2016-assignments-a-06-paint-program-assignment-06-mission-05.js`,name:`2016-assignments-a-06-paint-program-assignment-06-mission-05.js`,size:4820},{path:`/p5/2016-assignments-a-06-paint-program-assignment-06-mission-06.js`,name:`2016-assignments-a-06-paint-program-assignment-06-mission-06.js`,size:5502},{path:`/p5/2016-assignments-a-06-paint-program-assignment-06-mission-07.js`,name:`2016-assignments-a-06-paint-program-assignment-06-mission-07.js`,size:5810},{path:`/p5/2016-assignments-a-06-paint-program-assignment-06-mission-08.js`,name:`2016-assignments-a-06-paint-program-assignment-06-mission-08.js`,size:7245},{path:`/p5/2016-assignments-a-06-paint-program-ics2o-nguyen-vincent-a-06-paint-program-assignment-06-mission-08.js`,name:`2016-assignments-a-06-paint-program-ics2o-nguyen-vincent-a-06-paint-program-assignment-06-mission-08.js`,size:7464},{path:`/p5/2016-assignments-a-08-loops-and-arrays-and-graphics-assignment-08-mission-02.js`,name:`2016-assignments-a-08-loops-and-arrays-and-graphics-assignment-08-mission-02.js`,size:2495},{path:`/p5/2016-assignments-a-08-loops-and-arrays-and-graphics-assignment-08-mission-03.js`,name:`2016-assignments-a-08-loops-and-arrays-and-graphics-assignment-08-mission-03.js`,size:2639},{path:`/p5/2016-assignments-a-08-loops-and-arrays-and-graphics-assignment-08-mission-04-a.js`,name:`2016-assignments-a-08-loops-and-arrays-and-graphics-assignment-08-mission-04-a.js`,size:2779},{path:`/p5/2016-assignments-a-08-loops-and-arrays-and-graphics-assignment-08-mission-04-b.js`,name:`2016-assignments-a-08-loops-and-arrays-and-graphics-assignment-08-mission-04-b.js`,size:2612},{path:`/p5/2016-assignments-a-08-loops-and-arrays-and-graphics-ics2o-nguyen-vincent-a-08-loops-arrays-and-graphics-assignment-08-mission-03.js`,name:`2016-assignments-a-08-loops-and-arrays-and-graphics-ics2o-nguyen-vincent-a-08-loops-arrays-and-graphics-assignment-08-mission-03.js`,size:2692},{path:`/p5/2016-assignments-a-08-loops-and-arrays-and-graphics-ics2o-nguyen-vincent-a-08-loops-arrays-and-graphics-assignment-08-mission-04.js`,name:`2016-assignments-a-08-loops-and-arrays-and-graphics-ics2o-nguyen-vincent-a-08-loops-arrays-and-graphics-assignment-08-mission-04.js`,size:2662},{path:`/p5/2016-assignments-a-09-working-with-images-6-6-2016-assignment-09-mission-01.js`,name:`2016-assignments-a-09-working-with-images-6-6-2016-assignment-09-mission-01.js`,size:2596},{path:`/p5/2016-assignments-a-09-working-with-images-6-6-2016-assignment-09-mission-02.js`,name:`2016-assignments-a-09-working-with-images-6-6-2016-assignment-09-mission-02.js`,size:2656},{path:`/p5/2016-assignments-a-09-working-with-images-6-6-2016-assignment-09-mission-03.js`,name:`2016-assignments-a-09-working-with-images-6-6-2016-assignment-09-mission-03.js`,size:2139},{path:`/p5/2016-assignments-a-09-working-with-images-6-7-2016-assignment-09-mission-03.js`,name:`2016-assignments-a-09-working-with-images-6-7-2016-assignment-09-mission-03.js`,size:2923},{path:`/p5/2016-lessons-lesson-01-shapes-and-fills-lesson-01-shapes-fills.js`,name:`2016-lessons-lesson-01-shapes-and-fills-lesson-01-shapes-fills.js`,size:2391},{path:`/p5/2016-lessons-lesson-02-movement.js`,name:`2016-lessons-lesson-02-movement.js`,size:2832},{path:`/p5/2016-lessons-lesson-03-functions-01.js`,name:`2016-lessons-lesson-03-functions-01.js`,size:2780},{path:`/p5/2016-lessons-lesson-04-functions-02.js`,name:`2016-lessons-lesson-04-functions-02.js`,size:2383},{path:`/p5/2016-lessons-lesson-05-functions-03.js`,name:`2016-lessons-lesson-05-functions-03.js`,size:2579},{path:`/p5/2016-lessons-lesson-06-color-hit-detection.js`,name:`2016-lessons-lesson-06-color-hit-detection.js`,size:2395},{path:`/p5/2016-quizzes-q-06-processing-1-ics20-nguyen-vincent-q-06-mission-08-quiz-06-mission-08.js`,name:`2016-quizzes-q-06-processing-1-ics20-nguyen-vincent-q-06-mission-08-quiz-06-mission-08.js`,size:3348},{path:`/p5/2016-quizzes-q-06-processing-1-quiz-06-mission-01.js`,name:`2016-quizzes-q-06-processing-1-quiz-06-mission-01.js`,size:2188},{path:`/p5/2016-quizzes-q-06-processing-1-quiz-06-mission-02.js`,name:`2016-quizzes-q-06-processing-1-quiz-06-mission-02.js`,size:2261},{path:`/p5/2016-quizzes-q-06-processing-1-quiz-06-mission-03.js`,name:`2016-quizzes-q-06-processing-1-quiz-06-mission-03.js`,size:2312},{path:`/p5/2016-quizzes-q-06-processing-1-quiz-06-mission-04.js`,name:`2016-quizzes-q-06-processing-1-quiz-06-mission-04.js`,size:2433},{path:`/p5/2016-quizzes-q-06-processing-1-quiz-06-mission-05.js`,name:`2016-quizzes-q-06-processing-1-quiz-06-mission-05.js`,size:2568},{path:`/p5/2016-quizzes-q-06-processing-1-quiz-06-mission-06.js`,name:`2016-quizzes-q-06-processing-1-quiz-06-mission-06.js`,size:2628},{path:`/p5/2016-quizzes-q-06-processing-1-quiz-06-mission-07.js`,name:`2016-quizzes-q-06-processing-1-quiz-06-mission-07.js`,size:2844},{path:`/p5/2016-quizzes-q-06-processing-1-quiz-06-mission-08.js`,name:`2016-quizzes-q-06-processing-1-quiz-06-mission-08.js`,size:3311},{path:`/p5/2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-01.js`,name:`2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-01.js`,size:2479},{path:`/p5/2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-02.js`,name:`2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-02.js`,size:2764},{path:`/p5/2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-03.js`,name:`2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-03.js`,size:2807},{path:`/p5/2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-04.js`,name:`2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-04.js`,size:2872},{path:`/p5/2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-05.js`,name:`2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-05.js`,size:3084},{path:`/p5/2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-06.js`,name:`2016-quizzes-q-07-processing-2-ics2o-nguyen-vincent-q-07-processing-02-q02-mission-06.js`,size:2949},{path:`/p5/2016-quizzes-q-07-processing-2-q02-mission-01.js`,name:`2016-quizzes-q-07-processing-2-q02-mission-01.js`,size:2439},{path:`/p5/2016-quizzes-q-07-processing-2-q02-mission-02.js`,name:`2016-quizzes-q-07-processing-2-q02-mission-02.js`,size:2724},{path:`/p5/2016-quizzes-q-07-processing-2-q02-mission-03.js`,name:`2016-quizzes-q-07-processing-2-q02-mission-03.js`,size:2767},{path:`/p5/2016-quizzes-q-07-processing-2-q02-mission-04.js`,name:`2016-quizzes-q-07-processing-2-q02-mission-04.js`,size:2832},{path:`/p5/2016-quizzes-q-07-processing-2-q02-mission-05.js`,name:`2016-quizzes-q-07-processing-2-q02-mission-05.js`,size:3044},{path:`/p5/2016-quizzes-q-07-processing-2-q02-mission-06.js`,name:`2016-quizzes-q-07-processing-2-q02-mission-06.js`,size:2909},{path:`/p5/2016-quizzes-q-08-processing-3-for-pat-q-08-mission-01.js`,name:`2016-quizzes-q-08-processing-3-for-pat-q-08-mission-01.js`,size:2616},{path:`/p5/2016-quizzes-q-08-processing-3-for-pat-q-08-mission-02.js`,name:`2016-quizzes-q-08-processing-3-for-pat-q-08-mission-02.js`,size:2608},{path:`/p5/2016-quizzes-q-08-processing-3-for-pat-q-08-mission-03.js`,name:`2016-quizzes-q-08-processing-3-for-pat-q-08-mission-03.js`,size:2479},{path:`/p5/2016-quizzes-q-08-processing-3-for-pat-q-08-mission-04.js`,name:`2016-quizzes-q-08-processing-3-for-pat-q-08-mission-04.js`,size:2531},{path:`/p5/2016-quizzes-q-08-processing-3-for-pat-q-08-mission-05.js`,name:`2016-quizzes-q-08-processing-3-for-pat-q-08-mission-05.js`,size:2440},{path:`/p5/2016-quizzes-q-08-processing-3-for-pat-q-08-mission-06.js`,name:`2016-quizzes-q-08-processing-3-for-pat-q-08-mission-06.js`,size:2533},{path:`/p5/2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-01.js`,name:`2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-01.js`,size:2646},{path:`/p5/2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-02.js`,name:`2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-02.js`,size:2638},{path:`/p5/2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-03.js`,name:`2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-03.js`,size:2509},{path:`/p5/2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-04.js`,name:`2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-04.js`,size:2561},{path:`/p5/2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-05.js`,name:`2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-05.js`,size:2470},{path:`/p5/2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-06.js`,name:`2016-quizzes-q-08-processing-3-ics2o-nguyen-vincent-quiz8-processing-q-08-mission-06.js`,size:2563},{path:`/p5/2016-quizzes-q-08-processing-3-q-08-mission-01.js`,name:`2016-quizzes-q-08-processing-3-q-08-mission-01.js`,size:2608},{path:`/p5/2016-quizzes-q-08-processing-3-q-08-mission-02.js`,name:`2016-quizzes-q-08-processing-3-q-08-mission-02.js`,size:2600},{path:`/p5/2016-quizzes-q-08-processing-3-q-08-mission-03.js`,name:`2016-quizzes-q-08-processing-3-q-08-mission-03.js`,size:2471},{path:`/p5/2016-quizzes-q-08-processing-3-q-08-mission-04.js`,name:`2016-quizzes-q-08-processing-3-q-08-mission-04.js`,size:2523},{path:`/p5/2016-quizzes-q-08-processing-3-q-08-mission-05.js`,name:`2016-quizzes-q-08-processing-3-q-08-mission-05.js`,size:2432},{path:`/p5/2016-quizzes-q-08-processing-3-q-08-mission-06.js`,name:`2016-quizzes-q-08-processing-3-q-08-mission-06.js`,size:2525},{path:`/p5/2016-summative-ics2o-nguyen-vincent-summative-02.js`,name:`2016-summative-ics2o-nguyen-vincent-summative-02.js`,size:10733},{path:`/p5/2016-summative-summative-2.js`,name:`2016-summative-summative-2.js`,size:7670},{path:`/p5/2017-assignments-a02-funny-face-2-14-2017-nguyen-vincent-assignment-02.js`,name:`2017-assignments-a02-funny-face-2-14-2017-nguyen-vincent-assignment-02.js`,size:3831},{path:`/p5/2017-assignments-a02-funny-face-2-15-2017-nguyen-vincent-assignment-02.js`,name:`2017-assignments-a02-funny-face-2-15-2017-nguyen-vincent-assignment-02.js`,size:6718},{path:`/p5/2017-assignments-a02-funny-face-2-16-2017-nguyen-vincent-assignment-02.js`,name:`2017-assignments-a02-funny-face-2-16-2017-nguyen-vincent-assignment-02.js`,size:8420},{path:`/p5/2017-assignments-a02-funny-face-2-19-2017-nguyen-vincent-assignment-02.js`,name:`2017-assignments-a02-funny-face-2-19-2017-nguyen-vincent-assignment-02.js`,size:16967},{path:`/p5/2017-assignments-a03-menu-screen-03-05-2017-nguyen-vincent-assignment-03.js`,name:`2017-assignments-a03-menu-screen-03-05-2017-nguyen-vincent-assignment-03.js`,size:4031},{path:`/p5/2017-assignments-a03-menu-screen-03-06-2017-nguyen-vincent-assignment-03.js`,name:`2017-assignments-a03-menu-screen-03-06-2017-nguyen-vincent-assignment-03.js`,size:10797},{path:`/p5/2017-assignments-a03-menu-screen-03-08-2017-nguyen-vincent-assignment-03.js`,name:`2017-assignments-a03-menu-screen-03-08-2017-nguyen-vincent-assignment-03.js`,size:21195},{path:`/p5/2017-assignments-a04-old-school-games-03-27-2017-assignment-04.js`,name:`2017-assignments-a04-old-school-games-03-27-2017-assignment-04.js`,size:3962},{path:`/p5/2017-assignments-a04-old-school-games-03-28-2017-assignment-04.js`,name:`2017-assignments-a04-old-school-games-03-28-2017-assignment-04.js`,size:16520},{path:`/p5/2017-assignments-a04-old-school-games-03-29-2017-assignment-04.js`,name:`2017-assignments-a04-old-school-games-03-29-2017-assignment-04.js`,size:26178},{path:`/p5/2017-assignments-a05-animated-objects-assignment-05.js`,name:`2017-assignments-a05-animated-objects-assignment-05.js`,size:19448},{path:`/p5/2017-assignments-a06-tic-tac-toe-assignment-06.js`,name:`2017-assignments-a06-tic-tac-toe-assignment-06.js`,size:31798},{path:`/p5/2017-just-for-fun-ben-hines.js`,name:`2017-just-for-fun-ben-hines.js`,size:3924},{path:`/p5/2017-just-for-fun-krishna.js`,name:`2017-just-for-fun-krishna.js`,size:2412},{path:`/p5/2017-just-for-fun-life-is-strange.js`,name:`2017-just-for-fun-life-is-strange.js`,size:7317},{path:`/p5/2017-just-for-fun-text-flash.js`,name:`2017-just-for-fun-text-flash.js`,size:2728},{path:`/p5/2017-lessons-control-structures-01.js`,name:`2017-lessons-control-structures-01.js`,size:3471},{path:`/p5/2017-lessons-drawing-shapes-01.js`,name:`2017-lessons-drawing-shapes-01.js`,size:3621},{path:`/p5/2017-lessons-drawing-shapes-02.js`,name:`2017-lessons-drawing-shapes-02.js`,size:4953},{path:`/p5/2017-lessons-functions-with-return-values.js`,name:`2017-lessons-functions-with-return-values.js`,size:2723},{path:`/p5/2017-lessons-functions-within-variables-01.js`,name:`2017-lessons-functions-within-variables-01.js`,size:2611},{path:`/p5/2017-lessons-functions-within-variables-02.js`,name:`2017-lessons-functions-within-variables-02.js`,size:2470},{path:`/p5/2017-lessons-hit-detection-01.js`,name:`2017-lessons-hit-detection-01.js`,size:3585},{path:`/p5/2017-lessons-homemade-snake.js`,name:`2017-lessons-homemade-snake.js`,size:3877},{path:`/p5/2017-lessons-introducing-pvectors.js`,name:`2017-lessons-introducing-pvectors.js`,size:3173},{path:`/p5/2017-lessons-keypressed-function-01.js`,name:`2017-lessons-keypressed-function-01.js`,size:2870},{path:`/p5/2017-lessons-loading-fonts.js`,name:`2017-lessons-loading-fonts.js`,size:2832},{path:`/p5/2017-lessons-mousex-mousey-if-statements-01.js`,name:`2017-lessons-mousex-mousey-if-statements-01.js`,size:2655},{path:`/p5/2017-lessons-rollover-function-01.js`,name:`2017-lessons-rollover-function-01.js`,size:3388},{path:`/p5/2017-lessons-system-variables-01.js`,name:`2017-lessons-system-variables-01.js`,size:3243},{path:`/p5/2017-lessons-system-variables-02.js`,name:`2017-lessons-system-variables-02.js`,size:2766},{path:`/p5/2017-project-cookie-clicker-03-01-2017-cookie-clicker.js`,name:`2017-project-cookie-clicker-03-01-2017-cookie-clicker.js`,size:3887},{path:`/p5/2017-project-cookie-clicker-03-02-2017-cookie-clicker.js`,name:`2017-project-cookie-clicker-03-02-2017-cookie-clicker.js`,size:6207},{path:`/p5/2017-project-cookie-clicker-cookie-clicker.js`,name:`2017-project-cookie-clicker-cookie-clicker.js`,size:6387},{path:`/p5/2017-summative-prototype-stage-05-09-2017-prototype.js`,name:`2017-summative-prototype-stage-05-09-2017-prototype.js`,size:5634},{path:`/p5/2017-summative-prototype-stage-05-10-2017-9-43-am-prototype.js`,name:`2017-summative-prototype-stage-05-10-2017-9-43-am-prototype.js`,size:6003},{path:`/p5/2017-summative-prototype-stage-05-12-2017-9-42-am-prototype.js`,name:`2017-summative-prototype-stage-05-12-2017-9-42-am-prototype.js`,size:8162},{path:`/p5/2017-summative-prototype-stage-05-15-2017-11-04-am-prototype.js`,name:`2017-summative-prototype-stage-05-15-2017-11-04-am-prototype.js`,size:8730},{path:`/p5/2017-summative-prototype-stage-05-16-2017-9-40-am-prototype.js`,name:`2017-summative-prototype-stage-05-16-2017-9-40-am-prototype.js`,size:9065},{path:`/p5/2017-summative-prototype-stage-05-23-2017-10-56-am-prototype.js`,name:`2017-summative-prototype-stage-05-23-2017-10-56-am-prototype.js`,size:9056},{path:`/p5/2017-summative-prototype-stage-05-24-2017-9-42-am-prototype.js`,name:`2017-summative-prototype-stage-05-24-2017-9-42-am-prototype.js`,size:10328},{path:`/p5/2017-summative-prototype-stage-05-25-2017-11-03-am-prototype.js`,name:`2017-summative-prototype-stage-05-25-2017-11-03-am-prototype.js`,size:10301},{path:`/p5/2017-summative-prototype-stage-05-29-2017-11-05-am-prototype.js`,name:`2017-summative-prototype-stage-05-29-2017-11-05-am-prototype.js`,size:10635},{path:`/p5/2017-summative-prototype-stage-06-01-2017-11-01-am-prototype.js`,name:`2017-summative-prototype-stage-06-01-2017-11-01-am-prototype.js`,size:12858},{path:`/p5/2017-useful-references-advanced-snake.js`,name:`2017-useful-references-advanced-snake.js`,size:3711},{path:`/p5/2017-useful-references-ball-object-array.js`,name:`2017-useful-references-ball-object-array.js`,size:4705},{path:`/p5/2017-useful-references-better-text-input.js`,name:`2017-useful-references-better-text-input.js`,size:2655},{path:`/p5/2017-useful-references-bounce.js`,name:`2017-useful-references-bounce.js`,size:2568},{path:`/p5/2017-useful-references-button-function.js`,name:`2017-useful-references-button-function.js`,size:2591},{path:`/p5/2017-useful-references-constrain-within-circle.js`,name:`2017-useful-references-constrain-within-circle.js`,size:2796},{path:`/p5/2017-useful-references-easing.js`,name:`2017-useful-references-easing.js`,size:2516},{path:`/p5/2017-useful-references-final-fantasy-slider.js`,name:`2017-useful-references-final-fantasy-slider.js`,size:2888},{path:`/p5/2017-useful-references-finding-angles.js`,name:`2017-useful-references-finding-angles.js`,size:2546},{path:`/p5/2017-useful-references-get-colour-buttons.js`,name:`2017-useful-references-get-colour-buttons.js`,size:2656},{path:`/p5/2017-useful-references-mario.js`,name:`2017-useful-references-mario.js`,size:3844},{path:`/p5/2017-useful-references-screen-switch.js`,name:`2017-useful-references-screen-switch.js`,size:2857},{path:`/p5/2017-useful-references-simplified-circular-button.js`,name:`2017-useful-references-simplified-circular-button.js`,size:2523},{path:`/p5/2018-nguyen-vincent-assignment-01-a1q1.js`,name:`2018-nguyen-vincent-assignment-01-a1q1.js`,size:2634},{path:`/p5/2018-nguyen-vincent-assignment-01-a1q2.js`,name:`2018-nguyen-vincent-assignment-01-a1q2.js`,size:2822},{path:`/p5/2018-nguyen-vincent-assignment-01-a1q3.js`,name:`2018-nguyen-vincent-assignment-01-a1q3.js`,size:2784},{path:`/p5/2018-nguyen-vincent-assignment-01-a1q4.js`,name:`2018-nguyen-vincent-assignment-01-a1q4.js`,size:2943},{path:`/p5/2018-nguyen-vincent-assignment-01-a1q5.js`,name:`2018-nguyen-vincent-assignment-01-a1q5.js`,size:3469},{path:`/p5/2018-nguyen-vincent-assignment-01-a1q6.js`,name:`2018-nguyen-vincent-assignment-01-a1q6.js`,size:3554},{path:`/p5/2018-nguyen-vincent-assignment-01-a1q7.js`,name:`2018-nguyen-vincent-assignment-01-a1q7.js`,size:3547},{path:`/p5/2018-nguyen-vincent-assignment-01-a1q8.js`,name:`2018-nguyen-vincent-assignment-01-a1q8.js`,size:4859},{path:`/p5/2018-nguyen-vincent-assignment-02.js`,name:`2018-nguyen-vincent-assignment-02.js`,size:6733},{path:`/p5/2018-spring-arrsy.js`,name:`2018-spring-arrsy.js`,size:3396},{path:`/p5/2018-summative.js`,name:`2018-summative.js`,size:3155},{path:`/robots.txt`,name:`robots.txt`,size:63},{path:`/vendor/p5.min.js`,name:`p5.min.js`,size:962568}],j=[`projects`,`assignments`,`lessons`,`quizzes`,`references`],M={assignments:`Coursework and exercises pulled from the archived Processing folders.`,lessons:`Class demos and small practice sketches used to learn Processing basics.`,projects:`Larger experiments, summatives, and just-for-fun sketches from the archive.`,quizzes:`Quiz missions and short assessment sketches from the Processing course folders.`,references:`Reusable examples and tiny reference sketches saved for later projects.`},N=I(),ee=[...new Set(N.map(e=>e.year))].sort((e,t)=>t-e);function P(e){return N.find(t=>t.slug===e)}function F(e){let t=N.findIndex(t=>t.slug===e);return t===-1?{}:{prev:N[t-1],next:N[t+1]}}function I(){let e=new Map;for(let t of O){let n=R(t.path),r={...t,lineCount:t.code.split(/\r\n|\r|\n/).length};e.set(n,[...e.get(n)??[],r])}return[...e.entries()].map(([e,t])=>{let n=t.sort(K),r=z(e),i=A.filter(t=>t.path.startsWith(`${e}/`)).sort(K).map(e=>({...e,kind:W(e.name)})),a=U(e),o=B(e,r),s=k.find(t=>R(t.path)===e),c=n.map(e=>n.length===1?e.code:`// ${e.name}\n${e.code}`).join(`

`),l=L(c),u=q(e.slice(1));return{slug:u,title:V(e,n),year:r,date:o.label,sortDate:o.sortDate,tags:a,sourcePath:n[0].path,sourceFiles:n,assets:i,previewImage:i.find(e=>e.kind===`image`),p5AssetPath:`/p5/${u}.js`,canvasWidth:l.width,canvasHeight:l.height,description:s?.code.trim(),code:c,lineCount:c.split(/\r\n|\r|\n/).length}}).sort((e,t)=>t.sortDate-e.sortDate||e.title.localeCompare(t.title))}function L(e){let t=e.match(/\bsize\s*\(\s*(\d+)\s*,\s*(\d+)/);return t?{width:Number(t[1]),height:Number(t[2])}:{width:640,height:480}}function R(e){return e.split(`/`).slice(0,-1).join(`/`)}function z(e){let t=e.match(/^\/(\d{4})(?:\/|$)/);return t?Number(t[1]):0}function B(e,t){let n=e.match(/(?:^|\/)(\d{1,2})-(\d{1,2})-(\d{4})(?:\b|[^0-9])/);if(!n)return{label:String(t),sortDate:Date.UTC(t,0,1)};let r=Number(n[1]),i=Number(n[2]),a=Number(n[3]),o=new Date(Date.UTC(a,r-1,i));return{label:o.toLocaleDateString(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`,timeZone:`UTC`}),sortDate:o.getTime()}}function V(e,t){let n=e.split(`/`).at(-1)??``,r=t.find(e=>G(e.name).toLowerCase()===n.toLowerCase())??t[0];return H(/^(assignment|summative|project|prototype|sketch|lesson)s?$/i.test(n)?G(r.name):n)}function H(e){return e.replace(/[_-]+/g,` `).replace(/([a-z])(\d)/g,`$1 $2`).replace(/(\d)([a-z])/gi,`$1 $2`).replace(/\s+/g,` `).trim().split(` `).map(e=>/^[A-Z0-9]+$/.test(e)?e:/^[AQ]\d+$/i.test(e)?e.toUpperCase():`${e.slice(0,1).toUpperCase()}${e.slice(1).toLowerCase()}`).join(` `)}function U(e){let t=e.toLowerCase(),n=[];return(t.includes(`project`)||t.includes(`summative`)||t.includes(`just for fun`))&&n.push(`projects`),(t.includes(`assignment`)||t.includes(`/a-`)||t.includes(`/a0`))&&n.push(`assignments`),t.includes(`lesson`)&&n.push(`lessons`),(t.includes(`quiz`)||t.includes(`/q-`)||t.includes(`/q0`))&&n.push(`quizzes`),t.includes(`reference`)&&n.push(`references`),n.length>0?n:[`projects`]}function W(e){let t=G(e,!1).toLowerCase();return[`.gif`,`.jpeg`,`.jpg`,`.png`,`.webp`].includes(t)?`image`:[`.mp3`,`.wav`,`.ogg`].includes(t)?`audio`:[`.doc`,`.docx`,`.pdf`].includes(t)?`document`:[`.ttf`,`.vlw`,`.woff`,`.woff2`].includes(t)?`font`:`other`}function G(e,t=!0){let n=e.lastIndexOf(`.`);return n===-1?t?e:``:t?e.slice(0,n):e.slice(n)}function K(e,t){return e.path.localeCompare(t.path)}function q(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}var J=S(`<a class="cursor-pointer whitespace-nowrap rounded-[3px] border border-(--rule) bg-(--bg-elev) px-[7px] py-[3px] font-mono text-[10px] tracking-[0.02em] text-(--ink-2) transition-all duration-150 hover:border-(--accent) hover:text-(--accent)"> </a>`),Y=S(`<span class="cursor-pointer whitespace-nowrap rounded-[3px] border border-(--rule) bg-(--bg-elev) px-[7px] py-[3px] font-mono text-[10px] tracking-[0.02em] text-(--ink-2) transition-all duration-150 hover:border-(--accent) hover:text-(--accent)"> </span>`);function X(e,t){var n=m(),i=a(n),s=e=>{var n=J(),i=r(n,!0);d(n),o(()=>{h(n,`href`,t.href),b(i,t.name)}),C(e,n)},c=e=>{var n=Y(),i=r(n,!0);d(n),o(()=>b(i,t.name)),C(e,n)};f(i,e=>{t.href?e(s):e(c,-1)}),C(e,n)}var Z=c(`<svg><path fill="currentColor" d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></path><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></path><path fill="currentColor" d="M4.398 4.398a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0m-1.453 13.748a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06m-12.295 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0" opacity=".5"></path></svg>`);function Q(e,t){let n=p(t,[`$$slots`,`$$events`,`$$legacy`]);var r=Z();v(r,()=>({viewBox:`0 0 24 24`,width:`1.2em`,height:`1.2em`,...n})),C(e,r)}var te=c(`<svg><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10a10 10 0 0 1-3.321-.564A9 9 0 0 1 8 18a8.97 8.97 0 0 1 2.138-5.824A6.5 6.5 0 0 0 15.5 15a6.5 6.5 0 0 0 5.567-3.143c.24-.396.933-.32.933.143" clip-rule="evenodd" opacity=".5"></path><path fill="currentColor" d="M2 12c0 4.359 2.789 8.066 6.679 9.435A9 9 0 0 1 8 18c0-2.221.805-4.254 2.138-5.824A6.47 6.47 0 0 1 9 8.5a6.5 6.5 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12"></path></svg>`);function $(e,t){let n=p(t,[`$$slots`,`$$events`,`$$legacy`]);var r=te();v(r,()=>({viewBox:`0 0 24 24`,width:`1.2em`,height:`1.2em`,...n})),C(e,r)}var ne=S(`<button class="group inline-block cursor-pointer appearance-none rounded-full border border-transparent bg-transparent p-0 outline-none [--ts-bg-dark:#1a1f3a] [--ts-bg-light:#f5d77a] [--ts-h:28px] [--ts-icon-moon:#c4c8e0] [--ts-icon-sun:#b8801a] [--ts-pad:3px] [--ts-thumb:calc(var(--ts-h)-var(--ts-pad)*2)] [--ts-thumb-dark:#e7e9f5] [--ts-thumb-light:#fff8e6] [--ts-travel:calc(var(--ts-w)-var(--ts-thumb)-var(--ts-pad)*2)] [--ts-w:56px] focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent,#ff5b1f)_35%,transparent)]" type="button" role="switch" aria-label="Toggle theme"><span class="relative block h-(--ts-h) w-(--ts-w) overflow-hidden rounded-full bg-(--ts-bg-dark) shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(0,0,0,0.4)] transition-[background,box-shadow] duration-[480ms] ease-in-out group-data-[state=light]:bg-(--ts-bg-light) group-data-[state=light]:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(0,0,0,0.08)] motion-reduce:duration-0" aria-hidden="true"><span class="pointer-events-none absolute top-1/2 left-[7px] grid h-3.5 w-3.5 -translate-y-1/2 place-items-center text-sm text-(--ts-icon-sun) opacity-55 transition-[opacity,color] duration-[480ms] ease-in-out group-data-[state=light]:opacity-0 motion-reduce:duration-0"><!></span> <span class="pointer-events-none absolute top-1/2 right-[7px] grid h-3.5 w-3.5 -translate-y-1/2 place-items-center text-sm text-(--ts-icon-moon) opacity-55 transition-[opacity,color] duration-[480ms] ease-in-out group-data-[state=dark]:opacity-0 motion-reduce:duration-0"><!></span> <span class="absolute top-(--ts-pad) left-(--ts-pad) grid h-(--ts-thumb) w-(--ts-thumb) translate-x-(--ts-travel) place-items-center rounded-full bg-(--ts-thumb-dark) shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.18)] transition-[transform,background,box-shadow] duration-[480ms] ease-[cubic-bezier(0.68,-0.2,0.27,1.4)] group-data-[state=light]:translate-x-0 group-data-[state=light]:bg-(--ts-thumb-light) group-data-[state=light]:shadow-[0_1px_2px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08)] motion-reduce:duration-0"><span class="absolute grid h-4 w-4 place-items-center text-base text-(--ts-icon-sun) opacity-100 transition-[opacity,transform] duration-[480ms] ease-in-out group-data-[state=dark]:-rotate-90 group-data-[state=dark]:scale-60 group-data-[state=dark]:opacity-0 group-data-[state=light]:rotate-0 group-data-[state=light]:scale-100 group-data-[state=light]:opacity-100 motion-reduce:duration-0"><!></span> <span class="absolute grid h-4 w-4 place-items-center text-base text-[#4a5078] opacity-100 transition-[opacity,transform] duration-[480ms] ease-in-out group-data-[state=dark]:rotate-0 group-data-[state=dark]:scale-100 group-data-[state=dark]:opacity-100 group-data-[state=light]:rotate-90 group-data-[state=light]:scale-60 group-data-[state=light]:opacity-0 motion-reduce:duration-0"><!></span></span></span></button>`);function re(e,n){i(n,!0);let a=_(n,`value`,15,`dark`);function c(){a(a()===`dark`?`light`:`dark`),n.onchange?.(a())}var u=ne(),f=r(u),p=r(f);Q(r(p),{}),d(p);var m=s(p,2);$(r(m),{}),d(m);var g=s(m,2),v=r(g);Q(r(v),{}),d(v);var y=s(v,2);$(r(y),{}),d(y),d(g),d(f),d(u),o(()=>{h(u,`aria-checked`,a()===`dark`),h(u,`data-state`,a())}),l(`click`,u,c),C(e,u),t()}x([`click`]);var ie=S(`<header class="sticky top-0 z-10 flex items-center justify-between border-b border-(--rule) bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-8 py-4 backdrop-blur-xl"><div class="flex items-center gap-2"><span class="relative inline-block h-[18px] w-[18px] bg-(--ink) text-[0px] after:absolute after:inset-1 after:bg-(--accent)"></span> <a class="text-sm font-semibold tracking-[-0.01em] text-(--ink) no-underline">Sketchbook</a></div> <nav class="flex items-center gap-1"><a>Index</a> <a>Tags</a> <span>About</span> <div class="ml-2 flex items-center border-l border-(--rule) pl-3"><!></div></nav></header>`);function ae(a,c){i(c,!0);let l=n(()=>c.active??p(D.url.pathname)),f=u(E);function p(e){let t=w&&e===w?`/`:w&&e.startsWith(`${w}/`)?e.slice(w.length):e;return t.startsWith(`/tags`)?`tag`:t.startsWith(`/about`)?`about`:`home`}var m=ie(),_=r(m),v=s(r(_),2);d(_);var b=s(_,2),x=r(b),S=s(x,2),O=s(S,2),k=s(O,2);re(r(k),{get value(){return f.state.value},onchange:e=>f.setTheme(e)}),d(k),d(b),d(m),o((t,n,r)=>{h(v,`href`,t),y(x,1,g(e(l)===`home`?`rounded bg-(--rule-soft) px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink) no-underline transition-all duration-150`:`rounded px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink-3) no-underline transition-all duration-150 hover:text-(--ink)`)),h(x,`href`,n),y(S,1,g(e(l)===`tag`?`rounded bg-(--rule-soft) px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink) no-underline transition-all duration-150`:`rounded px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink-3) no-underline transition-all duration-150 hover:text-(--ink)`)),h(S,`href`,r),y(O,1,g(e(l)===`about`?`cursor-default rounded bg-(--rule-soft) px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink) opacity-55`:`cursor-default rounded px-2.5 py-1.5 font-mono text-[11px] tracking-[0.02em] text-(--ink-3) opacity-55`))},[()=>T(`/`),()=>T(`/`),()=>T(`/tags/projects`)]),C(a,m),t()}export{M as a,F as c,j as i,X as n,ee as o,N as r,P as s,ae as t};