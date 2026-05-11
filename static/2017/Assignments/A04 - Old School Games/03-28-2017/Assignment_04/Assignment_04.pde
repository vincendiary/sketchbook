
//work on this
//http://coryschires.com/breakout-clone-in-processing-js/

PFont title, body;
PImage chalkboard;
int state, numBricks, numRows;
float xcenter, ycenter;
color darkblue, pink, darkpink, lightpink, lightblue, pinkred, lightyellow;

button start, options, exit, main;
brick[] bricks;
paddle player;
ball ball;
game breakout;


void setup() {
  size(800, 600);

  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  noStroke();

  darkblue = #262B34;
  darkpink = #C14875;
  pink = #FF6FA4;
  pinkred = #E8578C;
  lightpink = #FF8BB6;
  lightblue = #B9C0FF;
  lightyellow = #FFE8AD;

  xcenter = width/2;
  ycenter = height/2;

  chalkboard = loadImage("chalkboard.jpg");
  title = loadFont("Eraser_Regular-84.vlw");
  body = loadFont("Eraser_Regular-32.vlw");

  numBricks = 13;
  numRows = 4;

  bricks = new brick[numBricks*numRows];

  for (int i=0; i<(numBricks*numRows); i++) {
    bricks[i] = new brick((i%13)*60+40, (i/13)*40+30);
  }

  start = new button("Start", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
  options = new button("Options", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
  exit = new button("Exit", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
  main = new button("Main Menu", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);

  player = new paddle();
  ball = new ball(xcenter, ycenter);

  breakout = new game();
}

void draw() {
  switch(state) {
  case 0: 
    mainMenu(); 
    break;
  case 1: 
    optionsMenu(); 
    break;
  case 2: 
    drawGame(); 
    break;
  case 3:
    gameOver();
    break;
  default: 
    mainMenu(); 
    break;
  }
}

void mousePressed() {
  if (ball.startPosition()) {
    ball.moveStart();
    breakout.active = true;
  } else {
    ball.pause();
    if (breakout.paused) {
      breakout.paused = false;
    } else {
      breakout.paused = true;
    }
  }
}