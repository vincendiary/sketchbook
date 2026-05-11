/*
██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗
 ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
 
 ██╗   ██╗██╗███╗   ██╗ ██████╗███████╗███╗   ██╗████████╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
 ██║   ██║██║████╗  ██║██╔════╝██╔════╝████╗  ██║╚══██╔══╝    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
 ██║   ██║██║██╔██╗ ██║██║     █████╗  ██╔██╗ ██║   ██║       ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
 ╚██╗ ██╔╝██║██║╚██╗██║██║     ██╔══╝  ██║╚██╗██║   ██║       ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
 ╚████╔╝ ██║██║ ╚████║╚██████╗███████╗██║ ╚████║   ██║       ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
 ╚═══╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝
 
 ██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗██╗
 ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
 */

PFont title, buttons;
float opacity;
float y;

Button start, options, exit;

void setup() {
  size(800, 600);
  smooth(8);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  title = loadFont("AgencyFB-Reg-96.vlw");
  buttons = loadFont("AgencyFB-Bold-40.vlw");
  
  y = height/2;
  opacity = 0;

  start = new Button("NEW GAME", width/2, height/2);
  options = new Button("SETTINGS", width/2, height/2 + 80);
  exit = new Button("EXIT", width/2, height/2 + 160);
}

void draw() {
  fill(random(256), 100, random(256), 10);
  rect(width/2, height/2, width, height);

  if (opacity <= 20) {
    opacity += 0.05;
  } else if (opacity >= 15 && y >= height/4) {
    y -= 1;
  } else {
    start.display();
    options.display();
    exit.display();
  }

  fill(#FFFFFF, opacity);
  textFont(title);
  textSize(96);
  text("- E R A S E D -", width/2, y);
}

class Button {

  float x, y, w, h, o, v;
  String t;

  Button(String text, float tempX, float tempY) {
    t = text;
    x = tempX;
    y = tempY;
    w = width;
    h = 60;
    o = 10;
  }

  void display() {
    noStroke();
    if (rollover(x,y,w,h)) {
      o = 10;
      update();
      fill(#E8E8E8, o);
    } else {
      fill(0,0,0,0);
    }
    rect(x, y, w, h);

    fill(#FFFFFF, 15);
    textFont(buttons);
    textSize(40);
    text(t, x, y);
  }

  void update() {
    o -= 0.5;
  }
  
  boolean rollover(float x, float y, float w, float h) {
    if (mouseX >= (x-w/2) &&
        mouseX <= (x+w/2) &&
        mouseY >= (y-h/2) &&
        mouseY <= (y+h/2)) {
          return true;
        } else {
          return false;
        }
  }
}