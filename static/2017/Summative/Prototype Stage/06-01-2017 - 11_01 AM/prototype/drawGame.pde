void drawGame() {

  background(30);

  td.display();

  if (!td.gameover) {
    td.interaction();
  }

  for (Tower t : towers) {
    t.update();
    t.display();
  }

  for (Bullet b : bullets) {
    b.update();
    b.display();
    b.move();
  }

  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
  }

  for (int l = towers.size()-1; l >= 0; l--) {
    for (int j = monsters.size()-1; j >= 0; j--) {

      Tower t = towers.get(l);
      Monster m = monsters.get(j);

      if ( m.getX() >= width || m.getX() <= 0 || m.getY() >= height || m.getY() <= 0 ) {
        m.die();
      }

      if ( !m.status() ) {
        t.targetFound = false;
        monsters.remove(j);
        bullets.clear();
      }

      if (monsters.size() > 0) {
        if (dist(t.getX(), t.getY(), m.getX(), m.getY()) <= t.getRange()) {

          if (t.targetFound()) {

            if (frameCount % t.getFirerate() == 0) {
              bullets.add(new Bullet(t.getX(), t.getY(), t.getDamage(), t.target));
            }
          } else {
            t.target = j;
            t.targetFound = true;
          }
        }
      }

      for (int i = bullets.size()-1; i >= 0; i--) {

        Bullet b = bullets.get(i);

        b.target();

        if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {

          if ( b.status() && m.status() ) {
            m.hit( b.damage() );
            b.die();
          }
        }

        if ( !b.status() ) {
          bullets.remove(i);
        }
      }
    }
  }
}