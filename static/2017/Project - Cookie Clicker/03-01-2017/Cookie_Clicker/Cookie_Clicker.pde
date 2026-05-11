/*

Personal Project 01

 -=-=- Cookie Clicker -=-=-
 
03/01/2017

*/

PImage cookie;
int cookies;
float cx, cy, cw, ch;

void setup() {
  fullScreen();
  smooth(8);
  frameRate(30);
  background(#86E4FF);

  cx = width/2-250;
  cy = height/2-250;
  cw = ch = 500;

  cookieDraw(width/2, height/2, 400);
  cookie = get(int(cx), int(cy), int(cw), int(ch));
}

void draw() {
  background(#86E4FF);
  image(cookie, cx, cy, cw, ch);
  displayCookies(width/2, height/4*3);
  cookieButton(width/2, height/2, 400);
}

boolean startup = true;
float[] chocoX = new float[15];
float[] chocoY = new float[15];

void cookieDraw(float x, float y, float d) {

  stroke(#FFFFFF);
  strokeWeight(d/20);
  fill(#B9A785);
  ellipse(x, y, d, d);

  for (int i = 0; i < 15; i++) {
    chocoX[i] = random(x-(d/3), x+(d/3));
    chocoY[i] = random(y-(d/3), y+(d/3));

    noStroke();
    fill(#5F533B);
    ellipse(chocoX[i], chocoY[i], d/10, d/10);
  }
}

void cookieButton(float x, float y, float d) {

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
      
      clickText("+1", width/2, height/4);
      
      cookies += 1;
      
      mousePressed = false;
    }
  }
}

void clickText(String t, float x, float y) {
  fill(#5F533B);
  textAlign(CENTER, CENTER);
  textSize(48);
  text(t, x, y);
}

void displayCookies(float x, float y) {
  fill(#5F533B);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("cookies: " + cookies, x, y);
}