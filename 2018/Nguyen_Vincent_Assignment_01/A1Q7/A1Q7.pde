/*

Assignment 01 - The Bouncing Ball
By Vincent Nguyen

STEP 07:
Now, create a program where can fling the ball with your
mouse by clicking on it, moving it down and to the left,
then releasing it so that it is thrown up and to the right.
(It's a bit like Angry Birds.) This is called projectile
motion. (BONUS KNOWLEDGE! The trajectory of the projectile
will be a perfect parabola if there is no air resistance).

*/

PVector p, v, a, t;
boolean frozen;

void setup() {
  size(600,600);
  ellipseMode(CENTER);
  p = new PVector(300,300);
  v = new PVector(0,0);
  a = new PVector(0,0.1);
  t = new PVector(0,0);
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
  
}

void mouseReleased() {
  v.set((p.x-t.x)/20, (p.y-t.y)/20);
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