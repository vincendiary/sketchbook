/*

 ICS4U Assignment 02: Bird Angry at a Bee
 02/21/2018
 Vincent Nguyen
 
 */

ArrayList<Bee> bees = new ArrayList();
PImage win;
boolean won;
int hits;
int score;
Ball b;

void setup() {
  size(1200, 800);
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(48);
  b = new Ball(200, 600);
  bees.add(new Bee(1000,300));
  bees.add(new Bee(1000,500));
  win = loadImage("nic.png");
}

void draw() {
  background(#000000);
  
  for (Bee s : bees) {
    s.update();
    s.display();
    s.collide(b.getX(), b.getY());
  }
  
  b.update();
  b.display();
  b.collision();

  for (int i = 0; i < bees.size(); i++) {
    Bee s = bees.get(i);
    if (!s.status()) {
      bees.remove(i);
    }
    if (bees.size() == 0) {
      if (hits == 2) {
        won = true;
      }
      bees.add(new Bee(1000,300));
      bees.add(new Bee(1000,500));
    }
  }
  fill(#FFFFFF);
  textSize(48);
  text("Bird Angry at a Bee", 600, 50);
  text("Score: " + str(score), 125, 50);
  
  if (won) {
    image(win,0,0,width,height);
    textSize(96);
    text("wow...", width/4, height/3);
    if (keyPressed) {
      won = false;
    }
  }
}

void mouseReleased() {
  b.released();
}

void mousePressed() {
  b.pressed();
}

void mouseDragged() {
  b.dragged();
}

class Ball {

  PVector p, v, a;
  float d;
  boolean frozen, drag, oneshot;

  Ball(float x, float y) {
    p = new PVector(x, y);
    v = new PVector(0, 0);
    a = new PVector(0, 0.2);
    d = 50;
    frozen = true;
    drag = false;
    oneshot = false;
  }

  void update() {
    if (!frozen) {
      p.add(v);
      v.add(a);
    }
  }

  void display() {
    if (drag) {
      stroke(#AAAAAA);
      strokeWeight(10);
      line(p.x, p.y, mouseX, mouseY);
    }

    noStroke();
    fill(#FF0000);
    ellipse(p.x, p.y, d, d);
  }

  void collision() {
    if (p.y >= height - d/2 || p.y <= d/2) {
      v.y *= -1;
    }
    if (p.x >= width - d/2 || p.x <= d/2) {
      reset();
    }
  }

  void reset() {
    p.x = 200;
    p.y = 600;
    v.set(0, 0);
    hits = 0;
    frozen = true;
    oneshot = false;
  }

  void pressed() {
    if (!oneshot) {
      frozen = true;
    }
  }

  void dragged() {
    if (!oneshot) {
      drag = true;
    }
  }

  void released() {
    if (!oneshot) {
      v.set( (p.x-mouseX)/20, (p.y-mouseY)/20 );
      frozen = false;
      drag = false;
      oneshot = true;
    }
  }

  float getX() {
    return p.x;
  }

  float getY() {
    return p.y;
  }
}

class Bee {

  PVector p, v, a;
  float d;
  boolean alive;

  Bee(float x, float y) {
    p = new PVector(x, y);
    v = new PVector(0, 0);
    a = new PVector(0, 0);
    d = 100;
    alive = true;
  }

  void update() {
    a.set(random(-1,1),random(-1,1));
    v.add(a);
    p.add(v);
    
    if (p.x >= width - d/2) {v.x *= -1; p.x = width - d/2;}
    else if (p.x <= width*3/4 + d/2) {v.x *= -1; p.x = width*3/4 + d/2;}
    if (p.y >= height - d/2) {v.y *= -1; p.y = height - d/2;}
    else if (p.y <= d/2) {v.y *= -1; p.y = d/2;}
    
    if (v.x >= 3) {v.x = 3;}
    else if (v.x <= -3) {v.x = -3;}
    if (v.y >= 3) {v.y = 5;}
    else if (v.y <= -3) {v.y = -3;}
    
  }

  void display() {
    noStroke();
    fill(#FFFF00);
    ellipse(p.x, p.y, d, d);
    stroke(#000000);
    strokeWeight(15);
    line(p.x-d/2, p.y-d/4, p.x+d/2, p.y-d/4);
    line(p.x-d/2, p.y, p.x+d/2, p.y);
    line(p.x-d/2, p.y+d/4, p.x+d/2, p.y+d/4);
  }

  void collide(float x, float y) {
    if (dist(x,y,p.x,p.y) <= d*3/4) {
      if (alive) {
        score++;
        hits++;
        alive = false;
      }
    }
  }

  boolean status() {
    return alive;
  }
}