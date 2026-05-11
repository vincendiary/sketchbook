class Tower {
  
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
  
}