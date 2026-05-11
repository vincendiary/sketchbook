class Cell {
  
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
  
}