//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

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
    t.display();
  }

  for (Bullet b : bullets) {
    b.display();
    b.move();
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

    if ( m.getX() >= width ) {
      m.die();
    }

    if ( !m.status() ) {
      monsters.remove(j);
    }
  }

  for (int l = 0; l < towers.size(); l++) {
    for (int j = monsters.size()-1; j >= 0; j--) {

      Tower t = towers.get(l);
      Monster m = monsters.get(j);

      if (monsters.size() > 0) {
        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {
          if (frameCount % t.getFirerate() == 0) {
            bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage() ));
          }
        }
      }
    }
  }

  for (int l = 0; l < towers.size(); l++) {
    for (int j = monsters.size()-1; j >= 0; j--) {
      for (int i = 0; i < bullets.size(); i++) {

        Tower t = towers.get(l);
        Bullet b = bullets.get(i);
        Monster m = monsters.get(j);
        
        b.target(m.getX(), m.getY(), t.getX(), t.getY(), t.getRange());
        
        if ( !m.status() ) {
          b.targetFound = false;
        }

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