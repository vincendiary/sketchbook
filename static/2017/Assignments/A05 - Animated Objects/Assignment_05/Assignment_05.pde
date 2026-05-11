/*

[ -------------------- [ INFO ] -------------------- ]

Assignment 05: Animated Objects
Vincent Nguyen
04/18/2017

[ -------------------- [ BLURB ] -------------------- ]

Hello!

For this assignment, I really wanted to recreate rain BUT not just run-of-the-mill boring rectangular rain.
I wanted to make a rain object that would splash and split apart and create somewhat realistic looking
impacts. I also added in a mouse controlled umbrella (custom shape) which allows me to showcase the rain
particles splashing and falling off the side of the umbrella (it might be a bit hard to see). Afterwards,
I added a short story about a dog for fun. Anyway, that's pretty much all my program really does. Oh, and
there are some extra buttons apart from the time-freeze button just to fill in the space. Hope you enjoy.

As always, thanks for reading!

Vincent

[ -------------------- [ TABLE OF CONTENTS ] -------------------- ]

01. SETTING UP GLOBAL VARIABLES
02. VOID SETUP() AND ASSIGNING VALUES
03. VOID DRAW() AND A MENU SWITCH

[ -------------------- [ CREDITS ] -------------------- ]


[ Images ]

01. back01 [ https://i.imgur.com/C4r2jXu.jpg ]
02. back02 [ scromy.com/wp-content/uploads/2017/01/anime-city-scenery-wallpapers-hd-resolution.jpg ]
03. back03 [ https://s-media-cache-ak0.pinimg.com/originals/65/58/61/655861c7cf92b29d2c43cda51faa38bd.jpg ]
04. back04 [ http://www.toocraft.com/postpic/2010/05/beautiful-night-sky-anime_87454.jpg ]
05. back05 [ http://scromy.com/wp-content/uploads/2017/01/night-anime-scenery-wallpaper-full-hd.jpg ]
06. dog    [ http://4.bp.blogspot.com/-pU8NGCLtAic/U7BsXeiIXaI/AAAAAAAAABw/uNxkJ9JuFRg/s1600/perrito.png ]
  
[ Sound ]
  
01. rain    [ https://www.freesound.org/people/lebcraftlp/sounds/243628/ ]
02. thunder [ https://www.freesound.org/people/InspectorJ/sounds/360328/ ]

[ Fonts ]

01. New Cicle by TPK [ www.dafont.com/new-cicle.font ]

*/

// ============================== [ 01. SETTING UP GLOBAL VARIABLES ] ============================== //

//Sets up variables
PFont font;
PImage back01, back02, back03, back04, back05, dog;
ArrayList<Rain> rain = new ArrayList();
int state, textState, backState;
float opacity;
boolean frozen, colours;

//Sets up audio
import ddf.minim.*;
Minim minim;
AudioPlayer thunder, rains;

//Sets up objects
Button freeze, rainbow, backdrop;
Dog puppersnup;
Umbrella red;

// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //

void setup() {
  size(800,600);
  
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER,CENTER);
  
  smooth(8);
  noStroke();
  
  //Font
  font = loadFont("NewCicle-Semi-36.vlw");
  
  //Images
  back01 = loadImage("background01.png");
  back02 = loadImage("background02.png");
  back03 = loadImage("background03.png");
  back04 = loadImage("background04.png");
  back05 = loadImage("background05.png");
  dog = loadImage("doggo.png");
  
  //Text
  textFont(font);
  textSize(36);
  
  //Objects
  freeze = new Button("Freeze Time", width/16*4, height*0.94, width/4, height/10);
  rainbow = new Button("Candy Rain", width/16*8, height*0.94, width/4, height/10);
  backdrop = new Button("Background", width/16*12, height*0.94, width/4, height/10);
  puppersnup = new Dog();
  red = new Umbrella();
  
  //Audio
  minim = new Minim(this);
  
  rains = minim.loadFile("rain.mp3");
  rains.setGain(-10);
  rains.loop();
  
  thunder = minim.loadFile("thunder.mp3");
  thunder.setGain(-10);
  
  //Integers
  state = 0;
  textState = 0;
  
  //Float
  opacity = 255;
}

// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //

void draw() {
  
  audio(); //audio function
  
  switch(state) { //switch for screens
    case 0:
      drawIntro();
      break;
    case 1:
      drawGame();
      break;
    default:
      drawIntro();
      break;
  }
  
}