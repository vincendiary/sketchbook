int state;
button start;

void setup() {
  size(600,400);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  noStroke();
  start = new button(width/2,height/2,width/4,height/4,#FF5A8E,#B24467,#E88CA9);
}

void draw() {
  switch(state) {
    case 0: mainMenu(); break;
    case 1: optionsMenu(); break;
    case 2: game(); break;
    default: mainMenu(); break;
  }
}

void mainMenu() {
  background(#313743);
  start.display();
  
}

void optionsMenu() {
  background(100);
}

void game() {
  background(200);
}