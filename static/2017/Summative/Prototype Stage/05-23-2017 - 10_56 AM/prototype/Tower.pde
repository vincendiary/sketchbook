class Tower {
  
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
  
}