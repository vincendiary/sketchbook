PVector p, v, f;
float w, h;
int foodState, scoreValue;
boolean gameover;

void setup() {
  size(400, 400);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  //frameRate(10);
  p = new PVector(width/2, height/2);
  v = new PVector(0, 0);
  f = new PVector(width/3, height/3);
  w = h = 15;
  foodState = 0;
  gameover = false;
}

void draw() {
  if (!gameover) {
    if (frameCount%5==0) {
      backdrop(#2FB456);
      score();
      food();
      snake();
    }
  } else {
    background(#FF1A35);
    fill(0);
    textSize(36);
    text("You lose!\nFinal score: " + scoreValue, width/2, height/2);
  }
}

void backdrop(color c) {
  fill(c);
  strokeWeight(20);
  stroke(#FF1A35);
  rect(width/2, height/2, width, height);
}

void score() {
  noStroke();
  fill(255);
  textSize(16);
  text("score: " + scoreValue, width/2, height/6);
}

void snake() {
  p = p.add(v);
  noStroke();
  fill(#7FED26);
  rect(p.x, p.y, w, h);
  
  if (p.x <= 5 || p.x >= 395 || p.y <= 5 || p.y >= 395) {
    gameover = true;
  }
}

void food() {
  if (p.x == f.x && p.y == f.y) {
    scoreValue += 1;
    foodState = 0;
  }

  if (foodState == 0) {
    f.x = ((int(random(1, 26))*15) + 5);
    f.y = ((int(random(1, 26))*15) + 5);
    foodState = 1;
  }

  fill(#FF005E);
  noStroke();
  ellipse(f.x, f.y, w, h);
}

void keyPressed() {
  if (key == 'w' && v.y != h) {
    v.x = 0;
    v.y = -h;
  } else if (key == 's' && v.y != -h) {
    v.x = 0;
    v.y = h;
  } else if (key == 'a' && v.x != w) {
    v.x = -w;
    v.y = 0;
  } else if (key == 'd' && v.x != -w) {
    v.x = w;
    v.y = 0;
  }
}
