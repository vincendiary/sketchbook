//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();

float mx,my;

Monster ben;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  
  ben = new Monster(0,height/3,int(random(3)));
}

void draw() {
  background(30);
  
  mx = ben.getX();
  my = ben.getY();
  
  ben.display();
  ben.move();
  
  for (Bullet b : bullets) {
    b.display();
    b.move();
  }
  
  bullets.add(new Bullet(width/2,height/2));
  
  for (Tower t : towers) {
    t.display();
  }
}

void mousePressed() {
  towers.add(new Tower(mouseX, mouseY, int(random(4))));
}

class Tower {
  
  PVector p, v;
  float d;
  float firerate, range, damage;
  int type;
  
  Tower(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
    firerate = range = damage = 0;
    d = width/32;
  }
  
  // Type 0 = basic
  // Type 1 = long-range
  // Type 2 = AoE
  // Type 3 = sniper
  
  void type() {
    if (type == 0) {
      firerate = 0.01;
      range = 10;
      damage = 5;
    }
  }
  
  void display() {
    
    type();
    
    noStroke();
    fill(255);
    rect(p.x,p.y,d,d);
    
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
  
}

class Monster {
  
  PVector p;
  float w, h, speed, health;
  int type;
  color skin;
  
  Monster(float tempX, float tempY, int tempT) {
    p = new PVector(tempX, tempY);
    type = tempT;
  }
  
  // Type 0 = basic
  // Type 1 = swarm
  // Type 2 = tank
  
  void type() {
    
    if (type == 0) {
      w = h = 20;
      skin = color(#FF0000);
      speed = 3;
    } else if (type == 1) {
      w = h = 10;
      skin = color(#00FF00);
      speed = 5;
    } else if (type == 2) {
      w = h = 30;
      skin = color(#0000FF);
      speed = 1;
    }
  }
  
  void display() {
    
    type();
    
    fill(skin);
    rect(p.x,p.y,w,h);
    
  }
  
  void move() {
    p.x += speed;
    p.y += 0;
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
  
}

class Bullet {
  
  PVector p, loca;
  float pulse, diam, speed, rota;
  color glow;
  
  Bullet(float tempX, float tempY) {
    p = new PVector(tempX,tempY);
    loca = new PVector(mx,my);
    
    rota = atan2( (loca.y - p.y), (loca.x - p.x) );
    
    speed = 40;
    diam = 5;
    pulse = random(4);
  }
  
  void display() {
    update();
    noStroke();
    fill(glow);
    rect(p.x,p.y,diam,diam);
  }
  
  void update() {
    pulse += 1;
    glow = color( (80*sin(pulse) + 175), 30, 30 );
  }
  
  void move() {
    p.x += speed*cos(rota);
    p.y += speed*sin(rota);
  }
  
}