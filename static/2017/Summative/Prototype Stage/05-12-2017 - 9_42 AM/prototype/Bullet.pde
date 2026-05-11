class Bullet {
  
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
  
}