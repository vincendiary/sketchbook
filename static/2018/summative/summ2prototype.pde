ArrayList<Monster> monsters = new ArrayList<Monster>();

void setup() {
  size(1000, 750);
  rectMode(CENTER);
  noCursor();
  
  monsters.add(new Monster());
}

void draw() {
  background(255);
  for (Monster m: monsters) {
    m.display();
    m.move();
    m.update();
  }
  reticle();
}

void reticle() {
  noFill();
  stroke(#FF0000);
  strokeWeight(3);
  translate(mouseX, mouseY);
  line(-25,0,25,0);
  line(0,-25,0,25);
  ellipse(0, 0, 35, 35);
}

class Monster {

  PVector pos, vel, acc;

  Monster() {
    pos = new PVector(width/2, height/2);
    vel = new PVector(1, 0);
    acc = new PVector(0, 0);
  }

  void display() {
    fill(#AAAAFF);
    noStroke();
    rect(pos.x, pos.y, 100, 100);
  }

  void move() {
    pos.add(vel);
    vel.add(acc);
  }
  
  void update() {
    if (pos.x + 50 > width) {
      vel.x *= -1;
    } else if (pos.x - 50 < 0) {
      vel.x *= -1;
    }
  }
}
