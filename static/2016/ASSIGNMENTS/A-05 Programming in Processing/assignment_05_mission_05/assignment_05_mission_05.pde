int xNose = 140;
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
 
}