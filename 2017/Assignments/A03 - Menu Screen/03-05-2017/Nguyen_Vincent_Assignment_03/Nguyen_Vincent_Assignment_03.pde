//Note: in the middle of finishing rollover (integrating it into button()). Up next is the clicked functionality


import ddf.minim.*;

Minim minim;
AudioPlayer music, dun;

PFont font;
PImage titleImage;
String menu;

void setup() {
  size(800, 600);
  font = loadFont("DeterminationSans-36.vlw");
  titleImage = loadImage("title.png");
  minim = new Minim(this);
  music = minim.loadFile("menu.mp3");
  menu = "intro";
}

void draw() {
  audio();
  background(#000000);
  title(width/2, height/2, width/3*2, height/5);
  buttonRect("Start", width/2, height/4, width/3, height/6);
}

void buttonRect(String t, float x, float y, float w, float h) {
  
  color idle, rollover, clicked;
  idle = #FFFFFF;
  rollover = #FF9900;
  clicked = #FFD500;
  
  if (rolloverRect(x,y,w,h) == true) {
    stroke(rollover);
  } else {
    stroke(idle);
  }
  
  strokeWeight(5);
  fill(#000000);
  rectMode(CENTER);
  rect(x, y, w, h);

  noStroke();
  fill(#FFFFFF);
  textFont(font);
  textSize(36);
  textAlign(CENTER, CENTER);
  text(t, x, y);
}

boolean rolloverRect(float x, float y, float w, float h) {
  boolean hit;
  if (mouseX >= (x-w/2) &&
      mouseX <= (x+w/2) &&
      mouseY >= (y-h/2) &&
      mouseY <= (y+h/2)) {
        hit = true;
      } else {
        hit = false;
      }
      return hit;
}

void title(float x, float y, float w, float h) {
  imageMode(CENTER);
  image(titleImage, x, y, w, h);
}

void audio() {
  music.setGain(-12);

  if (menu == "intro") {
  }
  if (music.position() == music.length()) {
    music.rewind();
  }
  music.play();
}
