/*

Useful Reference: Mario
Vincent Nguyen

Displays the use of case to control movement to allow multiple direction movement.
Better alternative to 'if' statements.

*/

PVector p, v, a;
float w, h, friction;
boolean jump, isLeft, isRight, isUp, isDown;

void setup() {
  size(600, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  p = new PVector(width/2, height/2);
  v = new PVector(0, 0);
  a = new PVector(0, 0);
  w = 30;
  h = 30;
  friction = 0.90;
}

void draw() {
  background(#7DCEC8);
  ground();
  mario();
}

void ground() {
  noStroke();
  fill(#2FB456);
  rect(width/2, height/4*3.5, width, height/4);
}

void mario() {
  fill(#FF3131);
  strokeWeight(5);
  stroke(#C12727);
  rect(p.x, p.y, w, h);

  v = v.add(a);
  p = p.add(v);
  
  if (isLeft) {
    v.x -= 0.4;
  } 
  if (isRight) {
    v.x += 0.4;
  }
  if (isUp && jump != true) {
    v.y += -5;
    jump = true;
  }
  if (isDown && jump == true) {
    v.y += 1;
    jump = true;
  }
  
  v.x *= friction;
  
  //ground & gravity
  if (p.y >= height/4*3) {
    a.y = 0;
    p.y = height/4*3;
    jump = false;
  } else {
    a.y = 0.2;
  }
  
  //walls
  if (p.x <= (w/2)) {
    p.x = w/2;
  } else if (p.x >= (width - (w/2))) {
    p.x = (width - (w/2));
  }
}

void keyPressed() {
  setMove(key, true);
}

void keyReleased() {
  setMove(key, false);
}

boolean setMove(char k, boolean b) {
  switch(k) {
  case 'w':
    return isUp = b;
  case 's':
    return isDown = b;
  case 'a':
    return isLeft = b;
  case 'd':
    return isRight = b;
  default:
    return b;
  }
}