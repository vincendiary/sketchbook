Spring[] springs = new Spring[5];

void setup() {
  size(600, 600);
  noStroke();
  rectMode(CENTER);
  for (int i = 0; i < 5; i++) {
    springs[i] = new Spring(i*100+100, 300, i*100 + 100, random(100,500));
  }
}

void draw() {
  background(#0D1F2D);
  for (Spring s : springs) {
    s.update();
    s.display();
  }
}

void mouseClicked() {
  for (int i = 0; i < 5; i++) {
    springs[i] = new Spring(i*100+100, 300, i*100 + 100, random(100,500));
  }
}

class Spring {
  
  PVector p,v,a,og,rest;
  
  float mass = 10;
  float k = 0.1;
  float force = 0;
  float loss = 0.95;
  
  Spring(float ogx, float ogy, float x, float y) {
    p = new PVector(x, y);
    v = new PVector(0, 0);
    a = new PVector(0, 0);
    og = new PVector(ogx, ogy);
    rest = new PVector(ogx, ogy);
  }
  
  void update() {
    force = -k*(p.y - rest.y);    // F = -kx
    a.y = force/mass;             // F = ma
    v.y = (v.y+a.y);
    //v.y = loss*(v.y+a.y);         // lose % of its energy
    p.y += v.y;
  }
  
  void display() {
    fill(#533A7B);
    rect(p.x, 0, 20, p.y*2);
    fill(#7E52A0);
    rect(p.x, p.y, 75, 75);
  }
}