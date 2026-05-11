/*

 Personal Project 01
 
 -=-=- Cookie Clicker -=-=-
 
 03/01/2017
 
 */

PImage cookie;
float cookies, cx, cy, cw, ch;
color brown, chocolate, backdrop;
float[] cost = new float[7];

void setup() {
  fullScreen();
  smooth(8);
  frameRate(30);

  brown = #EA8F49;
  chocolate = #5F320E;
  backdrop = #86E4FF;

  background(backdrop);

  cx = width/2-250;
  cy = height/2-250;
  cw = ch = 500;

  cookieDraw(width/2, height/2, 400);
  cookie = get(int(cx), int(cy), int(cw), int(ch));
  
  for (int i = 0; i < 7; i++) {
    cost[i] = 20 + (150 * (i * i));
  }
  
  amount[0] = 0.01;
  amount[1] = 0.2;
  amount[2] = 0.6;
  amount[3] = 1.2;
  amount[4] = 2.5;
  amount[5] = 7.5;
  amount[6] = 20.0;
  
}

void draw() {
  background(backdrop);
  title();
  image(cookie, cx, cy, cw, ch);
  displayCookies(width/2, height/5*4);
  cookieButton(width/2, height/2, 400);
  
  upgradeButton("Autoclick (+0.01) costs: ", width/6, height/8, 400, 100, 0);
  upgradeButton("Grandma (+0.2) costs: ", width/6, height/8*2, 400, 100, 1);
  upgradeButton("Home Kitchen (+0.6) costs: ", width/6, height/8*3, 400, 100, 2);
  upgradeButton("Bakery (+1.2) costs: ", width/6, height/8*4, 400, 100, 3);
  upgradeButton("Cookie Shop (+2.5) costs: ", width/6, height/8*5, 400, 100, 4);
  upgradeButton("Cookie Factory (+7.5) costs: ", width/6, height/8*6, 400, 100, 5);
  upgradeButton("Cookie Conglomerate (20.0) costs: ", width/6, height/8*7, 400, 100, 6);
  
  autoClick();
}

float[] chocoX = new float[15];
float[] chocoY = new float[15];

void cookieDraw(float x, float y, float d) {

  stroke(#FFFFFF);
  strokeWeight(d/20);
  fill(brown);
  ellipse(x, y, d, d);

  for (int i = 0; i < 15; i++) {
    chocoX[i] = random(x-(d/3), x+(d/3));
    chocoY[i] = random(y-(d/3), y+(d/3));

    noStroke();
    fill(chocolate);
    ellipse(chocoX[i], chocoY[i], d/10, d/10);
  }
}

void cookieButton(float x, float y, float d) {
  noStroke();
  
  if (dist(mouseX, mouseY, x, y) <= d/2) {

    fill(#FFFFFF, 50);
    ellipse(x, y, d+20, d+20);

    cw = ch = 500;
    cx = width/2-250;
    cy = height/2-250;

    if (mousePressed) {

      cx -= 15;
      cy -= 15;
      cw = ch = 530;

      clickText("+1", width/7*5, height/2);

      cookies += 1;

      mousePressed = false;
    }
  }
}

void clickText(String t, float x, float y) {
  noStroke();
  fill(chocolate);
  textAlign(CENTER, CENTER);
  textSize(48);
  text(t, x, y);
}

void displayCookies(float x, float y) {
  noStroke();
  fill(chocolate);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("cookies: " + int(cookies), x, y);
}

void upgradeButton(String t, float x, float y, float w, float h, int c) {
  
  
  
  int opa = 200;

  if (mouseX >= (x-w/2) && mouseX <= (x+w/2) && mouseY >= (y-h/2) && mouseY <= (y+h/2)) {

    opa = 175;

    if (mousePressed) {

      if (cookies >= cost[c]) {
        cookies -= cost[c];
        cost[c] *= 1.10;
        auto += amount[c];
      }

      opa = 225;
      mousePressed = false;
    }
  }
  
  noStroke();
  rectMode(CENTER);
  fill(#000000, opa);
  rect(x, y, w, h);

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(#FFFFFF);
  text(t + int(cost[c]), x, y, w, h);
}

float[] amount = new float[7];
float auto = 0;

void autoClick() {
  cookies += auto;
}

void title() {
  textSize(96);
  textAlign(LEFT,CENTER);
  strokeWeight(10);
  
  fill(255);
  stroke(255);
  text("COOKIE CLICKER",width/3+5,height/10+5);
  line(width/3+5,height/5.5+5,width/8*7+5,height/5.5+5);
  
  fill(chocolate);
  stroke(chocolate);
  text("COOKIE CLICKER",width/3+2.5,height/10+2.5);
  line(width/3+2.5,height/5.5+2.5,width/8*7+2.5,height/5.5+2.5);
  
  fill(brown);
  stroke(brown);
  text("COOKIE CLICKER",width/3,height/10);
  line(width/3,height/5.5,width/8*7,height/5.5);
}