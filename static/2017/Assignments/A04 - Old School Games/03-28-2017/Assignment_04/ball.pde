class ball {

  float d, max, rest;
  PVector p, v, ps;

  ball(float tempX, float tempY) {
    p = new PVector(tempX, tempY);
    v = new PVector(0, 0);
    ps = new PVector(0, 0);
    d = 20;
    max = 16;
  }

  void display() {
    noStroke();
    fill(lightblue);
    ellipse(p.x, p.y, d, d);
  }

  void move() {
    if ((p.y-d/2) <= 0) {
      v.y *= -1;
    }
    if ((p.x-d/2) <= 0 || (p.x+d/2) >= width) {
      v.x *= -1;
    }
    p = p.add(v);
  }
  
  void moveStart() {
    v.x = 0;
    v.y = -8;
  }

  void pause() {
    if (v.x == 0 && v.y == 0) {
      v.x = ps.x;
      v.y = ps.y;
    } else {
      ps.x = v.x;
      ps.y = v.y;
      v.x = 0;
      v.y = 0;
    }
  }

  void rest() {
    // stop ball from moving
    v.x = 0;
    v.y = 0;
    
    rest = constrain(mouseX, (player.getW()/2), width - (player.getW()/2));;
    
    // place ball atop paddle
    p.y = width/8*5;
    p.x = rest;
  }
  
  void reboundPaddle() {
    float bounce;
    bounce = dist(p.x,player.getY(), player.getX(), player.getY());
    
    if (p.x <= player.getX()) {
      v.x = (bounce*0.2) *-1;
    } else {
      v.x = bounce*0.2;
    }
    
    v.y = (max - abs(v.x))*-1;
  }
  
  void reboundBrick() {
    v.y *= -1;
  }
  
  boolean startPosition() {
    if (p.y == width/8*5 && v.x == 0 && v.y == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean missed() {
    if (p.y >= height) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean hitPaddle() {
    if (p.x >= player.getX() - (player.getW()/2) &&
        p.x <= player.getX() + (player.getW()/2) &&
        p.y >= player.getY() - (player.getH()/2) &&
        p.y <= player.getY() + (player.getH()/2)) {
      return true;
    } else {
      return false;
    }
  }
  
  boolean hitBrick() {
    if (p.y <= 164) {
      return true;
    } else {
      return false;
    }
  }
  
  float getX() {
    return p.x;
  }
  
  float getY() {
    return p.y;
  }
}