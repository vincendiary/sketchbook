//Summative Prototype
//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game game;

float mx,my;

int state;

void setup() {
  fullScreen();
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  state = 0;
  monsters.add(new Monster(0, height/3,int(random(3) ) ) );
}

void draw() {
  background(30);
  
  for (Tower t : towers) {
    t.display();
  }
  
  for (Bullet b : bullets) {
    b.display();
    b.target();
    b.move();
  }
  
  for (Monster m : monsters) {
    m.update();
    m.display();
    m.move();
    
    mx = m.getX();
    my = m.getY();
  }
  
  bullets.add(new Bullet(width/2,height/2, 1));
  
  for (int i = 0; i < bullets.size(); i++) {
    for (int j = 0; j < monsters.size(); j++) {
      
      Bullet b = bullets.get(i);
      Monster m = monsters.get(j);
      
      if ( b.getX() >= m.getX() - (m.getW()/2) && b.getX() <= m.getX() + (m.getW()/2) && b.getY() >= m.getY() - (m.getH()/2) && b.getY() <= m.getY() + (m.getH()/2) ) {
        
        if ( b.status() ) {
          m.hit( b.damage() );
          b.die();
        }
          
      }
      
      if ( !b.status() ) {
        bullets.remove(i);
      }
      
      if (!m.status() ) {
        monsters.remove(j);
      }
      
    }
      
  }
  
  
}

void mousePressed() {
  state = 1;
  towers.add(new Tower(mouseX, mouseY, int(random(4))));
}