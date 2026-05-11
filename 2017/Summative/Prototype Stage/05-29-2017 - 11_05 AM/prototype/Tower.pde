class Tower {
  
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
  
}