void drawIntro() { //I literally stole this from my previous assignment
  //because i like it so much.
  
  String intro = ""; //string for the text you read
  
  fill(#000000, 20); //black background, opacity creates "fading" effect
  rect(0,0, width, height);

  fill(#FFFFFF, 10); //tooltip in case anyone needs it
  text("Click to Continue", width/2, height/16*15);

  fill(#FFFFFF, 100); //set text starts here

  if (textState == 0) {
    intro = "Hello!";
  } else if (textState == 1) {
    intro = "Welcome to Vincent Nguyen's\nAssignment 06: Tic Tac Toe";
  } else if (textState == 2) {
    intro = "This time I decided to go with an\nOverwatch theme as it is one of my\nfavourite games to play";
  } else if (textState == 3) {
    intro = "Your job as an Overwatch agent\n is to defeat the Blackwatch\nin a round of Tic Tac Toe!";
  } else if (textState == 4) {
    intro = "Do your best to beat the competition\nand secure freedom!";
  } else if (textState == 5) {
    intro = "Best of luck!\n-Vincent";
  } else if (textState == 6) {
    state = 1;
  } //set text ends here
  
  textSize(36);
  text(intro, width/2, height/2); //draw text

  if (mousePressed) { //clicking the mouse advances the text
    textState++;
    mousePressed = false;
  }
  
}