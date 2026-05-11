void drawIntro() { //Short little intro function for funsies

  String intro = ""; //the text that is displayed

  fill(#000000, 20); //Black background. Opacity gives it a "fading" effect
  rect(width/2, height/2, width, height);

  fill(#FFFFFF, 10); //Short little tooltip @ the bottom in case anyone needs it
  text("Click to Continue", width/2, height/32*31);

  fill(#FFFFFF, 100); //For the main text!

  if (textState == 0) { //textState string thing begins here.
    intro = "Hello!";
  } else if (textState == 1) {
    intro = "Welcome to Vincent Nguyen's\nAssignment 05: Animated Objects";
  } else if (textState == 2) {
    intro = "Here, you will play the role of a citizen\ntrapped in a tragic thunderstorm\nwith your faithful companion";
  } else if (textState == 3) {
    intro = "To hold the umbrella, hover your mouse over\nand use the left mouse button to grab it";
  } else if (textState == 4) {
    intro = "Your goal...\nis to protect your friend!";
  } else if (textState == 5) {
    intro = "Best of luck!\n-Vincent";
  } else if (textState == 6) {
    state = 1;
  } //textState string thing ends here.

  text(intro, width/2, height/2); //display text

  if (mousePressed) { //Each time you click, progress the textState...
    textState++;
    mousePressed = false;
  }
}