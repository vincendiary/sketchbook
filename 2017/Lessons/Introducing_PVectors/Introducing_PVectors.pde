/*

Lesson: PVectors
03/20/2017

*/

PVector p, v, a, m;
int score;
color kuler;

void setup() {
  size(400, 400);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  p = new PVector(width/2, height/5);
  v = new PVector(random(1, 3), random(1, 2));
  a = new PVector(0, 0.1);
  m = new PVector(width/2, 370);
  kuler = #FF3496;
}

void draw() {
  background(#3B3B3B);
  noStroke();
  fill(kuler);
  textSize(24);
  text("score: " + str(score),width/2,height/8);
  ellipse(p.x, p.y, 20, 20);
  rect(m.x, m.y, 50, 20);
  
  m.x = mouseX;
  p = p.add(v);
  v = v.add(a);

  if (p.y >= (370-20) && p.y <= (390-20) && p.x >= (m.x-25) && p.x <= (m.x+25)) {
    v.y *= -0.95;
    score += 1;
    kuler = color(int(random(100,255)),int(random(100,255)),int(random(100,255)));
  } else if (p.y >= height) {
    p.y = height/5;
    p.x = width/2;
    v.y = 0;
    v.x = random(-1,1)*random(2,4);
    score = 0;
  }
  if (p.x >= (width-10) || p.x <= (0+10)) {
    v.x *= -1;
  }
}