/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 08:
CHALLENGE: Can you turn this into a game where you
fling a ball at a target (another ball -- make it
yellow, and 40x40)? To detect if the projectile has
hit the target you might want to use the dist( )
function. The score is a percentage: (# of successful
hits / # of total attempts) * 100%. After a target is
hit, the score updates and the target appears in a new,
random location.

*/

ArrayList<Target> targets = new ArrayList();
PVector p, v, a, t;
float score, hits, attempts;
boolean frozen;

void setup() {
  size(600,600);
  ellipseMode(CENTER);
  textSize(48);
  textAlign(LEFT,CENTER);
  cursor(CROSS);
  p = new PVector(300,300);
  v = new PVector(0,0);
  a = new PVector(0,0.1);
  t = new PVector(0,0);
  score = 0;
  hits = 0;
  attempts = 0;
  targets.add(new Target());
  frozen = true;
}

void draw() {
  background(0);
  noStroke();
  fill(#FF0000);
  ellipse(p.x, p.y, 30, 30);
  
  if (!frozen) {
    p.add(v);
    v.add(a);
  }
  
  //COLLISION
  if (p.y >= height - 15) {
    v.y *= -0.90;
    p.y = height - 15;
  } else if (p.y <= 15) {
    v.y *= -0.90;
    p.y = 15;
  }
  if (p.x >= width - 15) {
    v.x *= -0.90;
    p.x = width - 15;
  } else if (p.x <= 15) {
    v.x *= -0.90;
    p.x = 15;
  }
  
  for (Target t : targets) {
    t.display();
    t.collision(p.x,p.y);
  }
  
  for (int i = 0; i < targets.size(); i++) {
    Target t = targets.get(i);
    if (!t.status()) {
      targets.remove(i);
      frozen = true;
      p = new PVector(300,300);
      v = new PVector(0,0);
      targets.add(new Target());
    }
  }
  
  score = (hits/attempts)*100;
  fill(#FFFFFF,150);
  text("Score: " + round(score) + "%", 20, 40);
  
}

void mouseReleased() {
  v.set((p.x-t.x)/25, (p.y-t.y)/25);
  attempts++;
  frozen = false;
}

void mousePressed() {
  frozen = true;
}

void mouseDragged() {
  stroke(#FF0000);
  strokeWeight(5);
  line(p.x,p.y,mouseX,mouseY);
  t.set(mouseX,mouseY);
}

class Target {
  
  PVector p;
  boolean alive;
  
  Target() {
    p = new PVector(random(40,560),random(40,560));
    alive = true;
  }
  
  void display() {
    noStroke();
    fill(#FFFF00);
    if (alive) {
      ellipse(p.x,p.y,40,40);
    }
  }
  
  void collision(float x, float y) {
    if (dist(p.x,p.y,x,y) <= 30) {
      if (alive) {
        hits++;
        die();
      }
    }
  }
  
  void die() {
    alive = false;
  }
  
  boolean status() {
    return alive;
  }
  
}