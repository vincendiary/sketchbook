String words;
float n;

void setup() {
  size(400, 400);
  n = 0;
}

void draw() {
  background(#000000);
  sentence();
  textSize(36);
  textAlign(CENTER);
  text(words, width/2, height/2);
}

void sentence() {
  n += 0.075;
  if (n <= 1) {
    words = "hey";
  } else if (n <= 2) {
    words = "what's";
  } else if (n <= 3) {
    words = "up";
  } else if (n <= 4) {
    words = "guys,";
  } else if (n <= 5) {
    words = "it's";
  } else if (n <= 6) {
    words = "scarce";
  } else if (n <= 7) {
    words = "here.";
  } else if (n <= 8) {
    n = 0;
  } 
}