class Bullet {

  PVector pos, vel, loca, tar;
  float pulse, diam, speed, rota, damage, health;
  int target;
  color glow;
  boolean alive;

  Bullet(float tempX, float tempY, float tempDam, int tarM) {
    pos = new PVector(tempX, tempY);
    vel = new PVector();
    tar = new PVector();
    speed = 10;
    diam = 5;
    damage = tempDam;
    health = 120;
    target = tarM;
    pulse = random(90);
    alive = true;
  }

  void display() {
    noStroke();
    fill(glow);
    rect(pos.x, pos.y, diam, diam);
  }

  void update() {
    health -= 1;
    pulse += 0.5;
    glow = color((80*sin(pulse) + 175), 30, 30 );

    if (health <= 0) {
      die();
    }
  }

  void target() {
    
    float mx = monsters.get(target).getX();
    float my = monsters.get(target).getY();
    
    tar = new PVector(mx,my);
    loca = new PVector(tar.x - pos.x, tar.y - pos.y);
    rota = atan2(loca.y, loca.x) * 180 / PI;
    
  }

  void move() {

    vel.x = speed*(90 - abs(rota))/90;

    if (rota < 0) {
      vel.y = -speed + abs(vel.x);//Going upwards.
    } else {
      vel.y = speed - abs(vel.x);//Going downwards.
    }

    pos.x += vel.x;
    pos.y += vel.y;
  }

  boolean status() {
    return alive;
  }

  float getX() {
    return pos.x;
  }

  float getY() {
    return pos.y;
  }

  float damage() {
    return damage;
  }

  void die() {
    alive = false;
  }
}