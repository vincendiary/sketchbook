/* [ ---------------------------------------- [ INFO ] ----------------------------------------- ]

Assignment 06: Tic Tac Toe
Vincent Nguyen
05/01/2017

[ ---------------------------------------- [ BLURB ] ---------------------------------------- ]

Hello!

For this assignment, I wanted to include another theme to use as a "skin" over my program.
This time, I decided to go with Overwatch. There's not much more to say about this assignment.
The win/loss check process will be explained further in the attached Google Doc. Hope you enjoy.

As always, thanks for reading!

Vincent

[ ---------------------------------- [ TABLE OF CONTENTS ] ---------------------------------- ]

01. SETTING UP GLOBAL VARIABLES
02. VOID SETUP() AND ASSIGNING VALUES
03. VOID DRAW() AND A MENU SWITCH

[ --------------------------------------- [ CREDITS ] --------------------------------------- ]

[ Images ]

01. overwatch  [ http://www.overwatch.com.ar/foro/uploads/monthly_2016_05/100.png.2c687e97e3326129bb27bce2e96d0b4c.png ]
02. blackwatch [ http://pl.overwatch.wikia.com/wiki/Plik:Blackwatch.png ]
03. title      [ https://supernovicedotnet.files.wordpress.com/2016/04/overwatch_logo.png ]
04. kingsrow   [ http://vignette4.wikia.nocookie.net/overwatch/images/5/54/Kings_Row_009.jpg ]

[ Sound ]

01. introMusic [ https://www.youtube.com/watch?v=xdwNAD7YPGI ]
02. menuMusic  [ https://www.youtube.com/watch?v=Q1oXMy9VZQA ]
03. gameMusic  [ https://www.youtube.com/watch?v=MRhkZsRs0t4 ]
04. hit        [ http://ow.thnuclub.com/?tag=83 ]

*/

// ============================== [ 01. SETTING UP GLOBAL VARIABLES ] ============================== //


//Images, integers, booleans
PImage overwatch, blackwatch, kingsrow, title;
int cols, rows, state, textState;
boolean singleplayer, debug;

//Audio
import ddf.minim.*;
Minim minim;
AudioPlayer introMusic, menuMusic, gameMusic, hit;

//Objects
Button ai, two, exit;
Cell[][] board;
Game tictactoe;

// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //

void setup() {
  size(768, 768); //typical setup stuff
  smooth(8); //anti-aliasing
  
  //set every mode to corner...
  rectMode(CORNER);
  ellipseMode(CORNER);
  imageMode(CORNER);
  
  //i lied.
  textAlign(CENTER, CENTER);
  
  //start off with singleplayer tic-tac-toe enabled
  singleplayer = true;
  //debug just shows me which situations the AI has chosen to play
  debug = false;
  
  //load images
  overwatch = loadImage("overwatch.png");
  blackwatch = loadImage("blackwatch.png");
  kingsrow = loadImage("kingsrow.jpg");
  title = loadImage("title.png");
  
  //a whole lot of audio things
  minim = new Minim(this);
  
  hit = minim.loadFile("hit.mp3");
  hit.setGain(-2);
  introMusic = minim.loadFile("collection.mp3");
  introMusic.setGain(-12);
  menuMusic = minim.loadFile("menu.mp3");
  menuMusic.setGain(-12);
  gameMusic = minim.loadFile("roundstart.mp3");
  gameMusic.setGain(-8);
  
  //load audio, then set the gain so that hopefully it will not blow out anyone's eardrums.
  //hopefully.
  
  //menu state & text state (for intro)
  state = 0;
  textState = 0;
  
  //sets the board size
  cols = rows = 3;
  board = new Cell[cols][rows];
  
  //the main menu buttons
  ai = new Button("Singleplayer", 0, height/16*7);
  two = new Button("2 Players", 0, height/16*9);
  exit = new Button("Exit", 0, height/16*11);
  
  //creates a new tic-tac-toe game and resets it
  tictactoe = new Game();
  tictactoe.reset();
}

// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //

void draw() {
  
  audio(); //audio function
  
  /* [NOTES]
  
  for state:
  0 = intro
  1 = main menu
  2 = main game
  
  */
  
  switch (state) { //a simple menu switch
    case 0: drawIntro(); break;
    case 1: drawMenu(); break;
    case 2: drawGame(); break;
    default: drawIntro(); break;
  }
}