
//for benjamin-kouhai-chan

PImage backdrop, title;
PFont font;

//important stuff is commented
float opacity = 50; //the god variable.
float speed = 5; //how fast the opacity changes (set this to whatever you want)

void setup() {
  
  //nothing here matters
  size(1280, 720);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(LEFT, CENTER);
  backdrop = loadImage("background.jpg"); 
  title = loadImage("title.png");
  font = loadFont("Dotum-36.vlw");
}

void draw() {
  
  //runs the opacity function constantly
  opacity(); //this changes the opacity between 50-100 to simulate that cool shit
  
  image(backdrop, width/2, height/2, width, height);
  image(title, width/6*5, height/8*7);
  
  button("Play Single Player", width/2, 600, 300, 50); //vincent's patented button function
}

void opacity() {
  
  //opacity = opacity + speed
  opacity += speed;
  
  if (opacity >= 100 || opacity <= 50) { //if opacity is greater than 100 or less than 50...
    speed *= -1; //speed reverses. This keeps the opacity within an area. Adjust as you desire.
  }
}

void button(String t, float x, float y, float w, float h) { //you dont have to copy this

  noStroke(); //fuck borders
  if (mouseX >= x-w/2 && mouseX <= x+w/2 && mouseY >= y-h/2 && mouseY <= y+h/2) {
    fill(#BFBFBF, int(opacity)); //if rollover = true, fill(grey,opacity). We use int() because fill only accepts integers
  } else {
    fill(#BFBFBF, 0); //if rollover = false, fill(grey,invisible)
  }
  rect(x, y, w, h); //draw the rectangle

  fill(#FFFFFF, 200);
  textFont(font);
  textSize(36);
  text(t, (x-w/2), y); //draw the text
}