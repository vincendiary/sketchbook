//Aether Defence by Vincent Nguyen

ArrayList<Tower> towers = new ArrayList();
ArrayList<Bullet> bullets = new ArrayList();
ArrayList<Monster> monsters = new ArrayList();

Game td;
Cell[][] board;

int state, cols, rows, debug;

void setup() {
  //fullScreen();
  size(1440,900);
  smooth(8);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  state = 0;
  
  cols = width/24;
  rows = height/15;
  
  board = new Cell[cols][rows];
  
  td = new Game(0);
  td.reset();
}

void draw() {
  switch(state) {
    case 0:
      drawGame();
      break;
  }
}

void mousePressed() {
  switch(debug) {
    case 0: break;
    case 1: monsters.add(new Monster(mouseX,mouseY,int(random(4)))); break;
  }
}

void keyPressed() {
  if (key == 't') {
    debug = 0;
  } else if (key == 'm') {
    debug = 1;
  }
}