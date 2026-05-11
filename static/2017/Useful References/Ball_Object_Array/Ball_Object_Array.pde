/*

 Assignment 05: you've been spooked by mr doot, send this to 5 other skoots or else mr doot will come and goot u
 
 */

ArrayList<Ball> balls = new ArrayList();
color c = #313131;
int state = 0;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  smooth(8);
  cursor(CROSS);
}

void draw() {
  
  //Background Colour Change
  switch(state) {
    case 0: c = color(#313131); break;
    case 1: c = color(#EA5A55); break;
    case 2: c = color(#EA9155); break;
    case 3: c = color(#EABB55); break;
    case 4: c = color(#CCEA55); break;
    case 5: c = color(#55EA60); break;
    case 6: c = color(#55EAC6); break;
    case 7: c = color(#55B0EA); break;
    case 8: c = color(#557EEA); break;
    case 9: c = color(#5E55EA); break;
    case 10: c = color(#8E55EA); break;
    case 11: c = color(#EA55AF); break;
    case 12: c = color(#EDEDED); break;
    default: c = color(#313131); break;
  }
  
  //Draw background
  background(c);
  
  //Draw Text
  textSize(36);
  fill(#FFFFFF,100);
  text("By Vincent Nguyen", width/8, height - 46);
  
  for (Ball b : balls) {
    b.display();
    b.move();
    b.collision();
  }
  
  if (mousePressed) {
    balls.add(new Ball(mouseX, mouseY));
  }
}

void keyPressed() {
  if (key == ' ') {
    if (state >= 13) {
      state = 0;
    }
    state++;
  }
}


class Ball {

  PVector p, v, a;
  float d;
  color c;
  int r;

  Ball(float tempX, float tempY) {
    p = new PVector(tempX, tempY);
    v = new PVector(random(-3,3), 0);
    a = new PVector(0, 0.1);
    d = random(20,40);
    c = color(random(155,256),random(155,256),random(155,256));
    r = int(random(4));
  }

  void display() {
    
    noStroke();
    fill(c,180);
    
    if (r <= 1 && r >= 0) {
      ellipse(p.x,p.y,d,d);
    } else if (r <= 2 && r >= 1) {
      ellipse(p.x,p.y,d/1.5,d*1.5);
    } else {
      ellipse(p.x,p.y,d*1.5,d/1.5);
    }
    
  }

  void move() {
    v = v.add(a);
    p = p.add(v);
  }

  void collision() {
    if ((p.x - d/2) <= 0 || (p.x + d/2) >= width) {
      v.x *= -1;
    } else if ((p.y + d/2) >= height || (p.y - d/2) <= 0) {
      v.y *= -1;
      p.y = (height - d/2);
    }
  }
}