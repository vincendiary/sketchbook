void setup() {
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
 
}