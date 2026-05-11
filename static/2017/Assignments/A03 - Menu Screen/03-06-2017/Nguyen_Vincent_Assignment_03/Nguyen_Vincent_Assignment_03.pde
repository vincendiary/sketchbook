import ddf.minim.*;

Minim minim;
AudioPlayer music, dun, fightSound, hit;

PFont font;
PImage titleImage, toriel, papyrus, sans, undyne, alphys, lines, stats, slash;
color white, orange, yellow;
String menu, attack;
int prevTime, currTime;

void setup() {
  size(800, 600);
  load();
}

void draw() {
  background(#000000);
  audio();
  engine();
}

void load() {
  //Font
  font = loadFont("DeterminationSans-36.vlw");

  //Images
  titleImage = loadImage("title.png");
  toriel = loadImage("toriel.png");
  papyrus = loadImage("papyrus.png");
  sans = loadImage("sans.png");
  undyne = loadImage("undyne.png");
  alphys = loadImage("alphys.png");
  lines = loadImage("lines.png");
  stats = loadImage("stats.png");
  slash = loadImage("attack.png");

  //Colours
  white = #FFFFFF;
  orange = #FF9900;
  yellow = #FFD500;

  //Audio
  minim = new Minim(this);
  music = minim.loadFile("menu.mp3");
  dun = minim.loadFile("dun.mp3");
  fightSound = minim.loadFile("spear.mp3");
  hit = minim.loadFile("attack.mp3");

  menu = "Intro";
  attack = "* Undyne bounces impatiently.";
  prevTime = second();
}

void engine() {
  if (menu == "Intro") {

    title(width/2, height/2, width/3*2, height/5);
  } else if (menu == "Main") {

    hub();
  } else if (menu == "Fight") {

    fight();
  } else if (menu == "Info") {

    info();
  } else if (menu == "Reset") {

    reset();
  }
}

void hub() {
  friends();
  copyright();

  buttonRect("Fight", width/5, height/5*4, width/4, height/8, white, orange, yellow);
  buttonRect("Info", width/2, height/5*4, width/4, height/8, white, orange, yellow);
  buttonRect("Reset", width/5*4, height/5*4, width/4, height/8, white, orange, yellow);

  infoBox("Frisk    LV 1    0:00\nRuins - Leaf Pile    ", width/2, height/6, width/8*7, height/5);
}

void fight() {
  buttonEllipse("FIGHT", width/2, height/8*7.2, width/6, height/6, orange, yellow, yellow);
  buttonRect("Main", width/5*4, height/8*7.2, width/4, height/8, orange, yellow, yellow);

  image(lines, width/2, height/4, width, height/2*0.95);
  image(stats, width/2, height/8*6.25, width/3, height/32);

  gif();

  infoBox(attack, width/2, height/5*3, width/8*7, height/4*1.15);

  currTime = second();
  if ((currTime - prevTime) <= 1) {
    attack = "* You hit Undyne!";
    image(slash, width/2*1.1, height/4, 400, 400);
  } else {
    attack = "* Undyne bounces impatiently.";
  }
}

void info() {
  infoBox("Hello!\nThis is my submission for assignment\n03: Menu Screens! The game I chose to\nrecreate is Undertale. Compared to the\noriginal menu screen, I've added clean\nborders to the buttons and a wider\ncolour palette for the buttons. IMO,\nI like this one better. It feels cozier\n than the original and somewhat nostalgic.\n\nThanks for reading! -Vincent", width/2, height/2.4, width/12*11, height/1.4);
  buttonRect("Main", width/2, height/16*14.5, width/4, height/8, white, orange, yellow);
}

void reset() {
  dun.pause();
  dun.rewind();
  menu = "Intro";
  prevTime = second();
}




void buttonEllipse(String t, float x, float y, float w, float h, color idle, color rollover, color clicked) {

  color current;

  if (rolloverEllipse(x, y, w, h) == true) {

    current = rollover;

    if (clickedEllipse(x, y, w, h) == true) {

      current = clicked;
      hit.pause();
      hit.rewind();
      hit.play();
      prevTime = second();
    }
  } else {

    current = idle;
  }

  stroke(current);
  strokeWeight(5);
  fill(#000000);
  ellipse(x, y, w, h);

  noStroke();
  fill(current);
  textFont(font);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(t, x, y);
}

boolean rolloverEllipse(float x, float y, float w, float h) {
  boolean hit;
  float d = (w+h)/2;
  if (dist(mouseX, mouseY, x, y) <= d/2) {
    hit = true;
  } else {
    hit = false;
  }
  return hit;
}

boolean clickedEllipse(float x, float y, float w, float h) {
  boolean hit;
  float d = (w+h)/2;
  if (dist(mouseX, mouseY, x, y) <= d/2 && mousePressed == true) {
    hit = true;
    mousePressed = false;
  } else {
    hit = false;
  }
  return hit;
}

void friends() {
  image(undyne, (width/16*2.75), (height/2-15), 50, 125);
  image(alphys, (width/16*3.75), (height/2+5), 50, 80);
  image(toriel, width/2, height/2, 360, 180);
  image(papyrus, (width/16*12.25), (height/2-15), 75, 125);
  image(sans, (width/16*13.5), height/2, 60, 90);
}

void copyright() {
  noStroke();
  fill(#9B9B9B);
  textFont(font);
  textSize(28);
  textAlign(CENTER, CENTER);
  text("Demo by Vincent Nguyen 2017", width/2, height/10*9.25);
}

PImage[] images;
int frame;

void gif() {
  images = new PImage[33];

  for (int i = 0; i < 33; i++) {
    String filename = "Undyne_" + nf(i, 4) + ".png";
    images[i] = loadImage(filename);
  }
  frame = (frame+1) % 33;
  image(images[frame], width/2*0.95, height/4);
}

void infoBox(String t, float x, float y, float w, float h) {
  //Rectangle
  stroke(#FFFFFF);
  strokeWeight(5);
  fill(#000000);
  rectMode(CENTER);
  rect(x, y, w, h);

  //Text
  noStroke();
  fill(#FFFFFF);
  textFont(font);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(t, x, y);
}

void buttonRect(String t, float x, float y, float w, float h, color idle, color rollover, color clicked) {

  color current;

  if (rolloverRect(x, y, w, h) == true) {

    current = rollover;

    if (clickedRect(x, y, w, h) == true) {
      current = clicked;
      menu = t;
    }
  } else {

    current = idle;
  }

  //Rectangle
  stroke(current);
  strokeWeight(5);
  fill(#000000);
  rectMode(CENTER);
  rect(x, y, w, h);

  //Text
  noStroke();
  fill(current);
  textFont(font);
  textSize(32);
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

boolean clickedRect(float x, float y, float w, float h) {
  boolean hit;
  if (mouseX >= (x-w/2) &&
    mouseX <= (x+w/2) &&
    mouseY >= (y-h/2) &&
    mouseY <= (y+h/2) &&
    mousePressed == true) {
    hit = true;
    mousePressed = false;
  } else {
    hit = false;
  }
  return hit;
}

void title(float x, float y, float w, float h) {
  imageMode(CENTER);
  image(titleImage, x, y, w, h);

  currTime = second();

  if ((currTime - prevTime) >= 3) {

    noStroke();
    fill(#9B9B9B);
    textFont(font);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("Click anywhere to start", width/2, height/10*9);

    if (mousePressed) {
      menu = "Main";
      mousePressed = false;
    }
  }
}

void audio() {
  //Setting the gain
  music.setGain(-12);
  dun.setGain(4);
  fightSound.setGain(-12);
  hit.setGain(-8);

  if (menu == "Intro") {

    music.pause();
    dun.play();
  } else if (menu == "Main" || menu == "Info") {

    dun.pause();
    fightSound.pause();

    if (music.isPlaying() != true) {
      music.pause();
      music.rewind();
    }

    music.play();
  } else if (menu == "Fight") {

    music.pause();

    if (fightSound.isPlaying() != true) {
      fightSound.pause();
      fightSound.rewind();
    }

    fightSound.play();
  }
}
