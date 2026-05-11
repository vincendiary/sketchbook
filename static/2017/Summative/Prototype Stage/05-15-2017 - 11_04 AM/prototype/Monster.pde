class Monster {

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
}