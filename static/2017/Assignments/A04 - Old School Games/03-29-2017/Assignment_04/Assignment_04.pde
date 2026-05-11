/*

[ -------------------- [ INFO ] -------------------- ]

Assignment 04: Old School Games
Vincent Nguyen
03/29/2017

[ -------------------- [ BLURB ] -------------------- ]

Hello!

For this assignment, I decided to recreate breakout using a chalkboard theme (ie: drawing on the chalkboard).
I took your advice and looked into learning about objects and I can safely say that it was quite challenging
but I feel like it has paid off. I see the benefits of organizing code into objects with their own values
and functions. Some code here might be inefficient but that's just the result of my brain malfunctioning
while it tried to comprehend object code plus maybe a lack of time. Either way, I've done my best to
organize everything and document it all while half-awake at 2 AM just for your viewing pleasure. Enjoy~!

As always, thanks for reading!

P.S. Most of it is tabbed.

[ -------------------- [ TABLE OF CONTENTS ] -------------------- ]

01. SETTING UP GLOBAL VARIABLES
02. VOID SETUP() AND ASSIGNING VALUES
03. VOID DRAW() AND A MENU SWITCH
04. AUDIO USING STATES
05. BALL OBJECT
06. BRICKS AND LIVES
07. BUTTON OBJECT
08. GAME MENU SCREEN
09. GAME OBJECT
10. GAME OVER SCREEN
11. MAIN MENU SCREEN
12. OPTIONS SCREEN
13. PADDLE OBJECT

[ -------------------- [ CREDITS ] -------------------- ]

[ Images ]

01. Chalkboard [http://www.thebridgelive.org/wp-content/uploads/2014/12/Chalkboard.jpg]

[ Music ]

01. Undertale OST - 010 - Ghost Fight [https://www.youtube.com/watch?v=Zz1bfhtKsHM]
02. Undertale OST - 011 - Determination [https://www.youtube.com/watch?v=W1i4mTyidOc]
03. Undertale OST - 034 - Memory [https://www.youtube.com/watch?v=eijdNQMYikY]

[ Fonts ]

01. Eraser by David Rakowski [http://www.dafont.com/eraser.font]

*/

// ============================== [ 01. SETTING UP GLOBAL VARIABLES ] ============================== //

//Import the minim library for audio
import ddf.minim.*;

//Set up variables
PFont title, body; //Fonts
PImage chalkboard; //Background
int state, numBricks, numRows; //Screen state, number of bricks per row and column
float xcenter, ycenter; //Because I'm lazy
color darkblue, pink, darkpink, lightpink, lightblue, pinkred; //So I don't have to refer back to colour codes
boolean musicOn, rainbowOn; //For optionsMenu

//Set up objects
button start, options, exit, main, music, rainbow; //Buttons
brick[] bricks; //Array of brick objects
paddle player; //Paddle object
ball ball; //Ball object
game breakout; //Game object

//Set up audio players
Minim minim;
AudioPlayer musicMenu, musicGame, musicEnd;

// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //

void setup() {
  size(800, 600); //Set window size
  
  //Quick simple basics out of the way
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  smooth(8);
  noStroke();
  
  //Assign colours
  darkblue = #262B34;
  darkpink = #C14875;
  pink = #FF6FA4;
  pinkred = #E8578C;
  lightpink = #FF8BB6;
  lightblue = #B9C0FF;
  
  //Floats
  xcenter = width/2;
  ycenter = height/2;
  
  //Booleans
  musicOn = true;
  rainbowOn = false;
  
  //Images and Fonts
  chalkboard = loadImage("chalkboard.jpg");
  title = loadFont("Eraser_Regular-84.vlw");
  body = loadFont("Eraser_Regular-32.vlw");
  
  //Audio starts here
  minim = new Minim(this);
  
  //Load music
  musicMenu = minim.loadFile("mainmenu.mp3");
  musicGame = minim.loadFile("breakout.mp3");
  musicEnd = minim.loadFile("gameover.mp3");
  
  //Set the gain so I can retain my hearing ability
  musicMenu.setGain(-14);
  musicGame.setGain(-14);
  musicEnd.setGain(-14);
  //Audio ends here
  
  //Setting up the array of bricks
  numBricks = 13; //How many bricks per row?
  numRows = 4; //How many rows?
  
  //Create the amount of bricks accordingly
  bricks = new brick[numBricks*numRows];
  
  //Setting up the button objects
  start = new button("Start", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
  options = new button("Options", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
  exit = new button("Exit", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
  main = new button("Main Menu", xcenter, height/16*13, width/3, height/7, pinkred, darkpink, lightpink);
  music = new button("Music: ON", xcenter, height/16*7, width/3, height/7, pinkred, darkpink, lightpink);
  rainbow = new button("Rainbow: OFF", xcenter, height/16*10, width/3, height/7, pinkred, darkpink, lightpink);
  //Parameters = (text, x position, y position, width, height, idle colour, rollover colour, clicked colour)
  
  //Set up the paddle and ball objects
  player = new paddle();
  ball = new ball(xcenter, ycenter);
  
  //Create a new game object called breakout and reset it
  breakout = new game();
  breakout.reset();
}



// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //

void draw() {
  
  audio(); //Plays the audio
  
  //A switch using the integer state to determine which screen we are looking at
  switch(state) {
  case 0: 
    mainMenu(); 
    break;
  case 1: 
    optionsMenu(); 
    break;
  case 2: 
    drawGame(); 
    break;
  case 3:
    gameOver();
    break;
  default: 
    mainMenu(); 
    break;
  }
}