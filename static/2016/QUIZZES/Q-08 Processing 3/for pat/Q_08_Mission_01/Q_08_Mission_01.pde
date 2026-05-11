void setup() {
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
}