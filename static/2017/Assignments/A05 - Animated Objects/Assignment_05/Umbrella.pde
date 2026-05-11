class Umbrella { //Umbrella object

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
}