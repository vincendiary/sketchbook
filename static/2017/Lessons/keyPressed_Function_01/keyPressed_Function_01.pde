/*

Creating a keyPressed() Function
02/23/2017

*/

char letter;
String sentence;

void setup() {
  size(400, 400);
  smooth();
  frameRate(120);
  background(#FFB2A2);
  sentence = "";
}

void draw() {
  background(#FFB2A2);
  fill(#FFFFFF);
  
  textSize(18);
  textAlign(CENTER);
  text(sentence,width/2,height/2);
}

void keyPressed() {
  letter = key;
  sentence = sentence + str(letter);
  if (key == ENTER) {
    sentence = "";
  } else if (key == BACKSPACE && sentence.length() != 1) {
    sentence = sentence.substring(0, sentence.length()-2);
  } else if (key == BACKSPACE && sentence.length() != 0) {
    sentence = sentence.substring(0, sentence.length()-1);
  }
}