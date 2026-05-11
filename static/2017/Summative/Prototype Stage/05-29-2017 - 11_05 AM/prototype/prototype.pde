//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();
ArrayList<Cell> cells = new ArrayList();

Game game;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
}

void draw() {
  background(30);

  for (Tower t : towers) {
    t.update();
    t.display();
  }

  for (Bullet b : bullets) {
    b.update();
    b.display();
    b.move();

    b.target();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
  }

  for (int i = 0; i < bullets.size(); i++) {

    Bullet b = bullets.get(i);

    if ( !b.status() ) {
      bullets.remove(i);
    }
  }

  for (int j = monsters.size()-1; j >= 0; j--) {

    Monster m = monsters.get(j);

    if ( m.getX() >= width || m.getX() <= 0 || m.getY() >= height || m.getY() <= 0 ) {
      m.die();
    }

    if ( !m.status() ) {
      monsters.remove(j);
      bullets.clear();
    }
  }

  for (int l = 0; l < towers.size(); l++) {
    for (int j = monsters.size()-1; j >= 0; j--) {

      Tower t = towers.get(l);
      Monster m = monsters.get(j);

      if (monsters.size() > 0) {
        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {
          
          if (!t.targetFound()) {
            t.target = j;
            t.targetFound = true;
          }
          
          if (t.targetFound()) {
            
            if (frameCount % t.getFirerate() == 0) {
              bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage(), t.target ));
            }
            
          }
          
        }

        if (!m.status()) {
          t.targetFound = false;
        }
      }

      for (int i = 0; i < bullets.size(); i++) {

        Bullet b = bullets.get(i);

        if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

          if ( b.status() && m.status() ) {
            m.hit( b.damage() );
            b.die();
          }
        }
      }
    }
  }
}

void mousePressed() {
  switch(state) {
  case 0: 
    towers.add(new Tower(mouseX, mouseY, int(random(4)))); 
    break;
  case 1: 
    monsters.add(new Monster(mouseX, mouseY, int(random(3)))); 
    break;
  }
}

void keyPressed() {
  if (key == 't') {
    state = 0;
  } else if (key == 'm') {
    state = 1;
  }
}