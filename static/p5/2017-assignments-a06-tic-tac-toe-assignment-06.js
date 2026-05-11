window.__SKETCHBOOK_P5__ = window.__SKETCHBOOK_P5__ || {};
window.__SKETCHBOOK_P5__["2017-assignments-a06-tic-tac-toe-assignment-06"] = function (p) {
	class ArrayList extends Array {
		add(index, value) {
			if (arguments.length === 1) this.push(index);
			else this.splice(index, 0, value);
			return true;
		}
		get(index) { return this[index]; }
		set(index, value) { this[index] = value; return value; }
		size() { return this.length; }
		remove(value) {
			if (typeof value === "number") return this.splice(value, 1)[0];
			const index = this.indexOf(value);
			if (index >= 0) return this.splice(index, 1)[0];
			return undefined;
		}
	}
	class AudioPlayer {
		play() {}
		rewind() {}
		loop() {}
		pause() {}
		close() {}
		setGain() {}
		position() { return 0; }
		length() { return 1; }
		isPlaying() { return false; }
	}
	class Minim {
		loadFile() { return new AudioPlayer(); }
		stop() {}
	}
	function PVector(x = 0, y = 0, z = 0) { return p.createVector(x, y, z); }
	PVector.fromAngle = function (angle, length) {
		const VectorClass = p.constructor?.Vector || window.p5?.Vector;
		const vector = VectorClass.fromAngle(angle);
		if (length !== undefined) vector.setMag(length);
		return vector;
	};
	function sketchbookAsset(file) {
		if (/^(?:https?:)?\//.test(file)) return file;
		const base = window.__SKETCHBOOK_ASSET_BASE__ || "";
		return base + "/" + file.replace(/^\/+/, "");
	}
	with (p) {
		// Assignment_06.pde
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
		var overwatch, blackwatch, kingsrow, title;
		var cols, rows, state, textState;
		var singleplayer, debug;
		
		//Audio
		// import ddf.minim.*; // Processing import omitted
		var minim;
		var introMusic, menuMusic, gameMusic, hit;
		
		//Objects
		var ai, two, exit;
		var board;
		var tictactoe;
		
		// ============================== [ 02. VOID SETUP() AND ASSIGNING VALUES ] ============================== //
		
		function setup() {
		  createCanvas(768, 768); //typical setup stuff
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
		  overwatch = loadImage(sketchbookAsset("2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/overwatch.png"));
		  blackwatch = loadImage(sketchbookAsset("2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/blackwatch.png"));
		  kingsrow = loadImage(sketchbookAsset("2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/kingsrow.jpg"));
		  title = loadImage(sketchbookAsset("2017/Assignments/A06 - Tic Tac Toe/Assignment_06/data/title.png"));
		  
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
		  board = Array.from({ length: cols }, () => new Array(rows));
		  
		  //the main menu buttons
		  ai = new Button("Singleplayer", 0, height/16*7);
		  two = new Button("2 Players", 0, height/16*9);
		  exit = new Button("Exit", 0, height/16*11);
		  
		  //creates a new tic-tac-toe game and resets it
		  tictactoe = new Game();
		  tictactoe.reset();
		}
		
		// ============================== [ 03. VOID DRAW() AND A MENU SWITCH ] ============================== //
		
		function draw() {
		  
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
		
		// Audio.pde
		function audio() {
		
		  /* [NOTES]
		   
		   for state:
		   0 = intro
		   1 = main menu
		   2 = main game
		   
		   */
		
		  if (state == 0) { //intro screen...
		
		    if ( !introMusic.isPlaying() ) { //check if intro music is not playing...
		      introMusic.cue(0); //if not, reset it
		    }
		
		    introMusic.play(); //and play it.
		    
		  } else if (state == 1) { //main menu...
		
		    introMusic.pause(); //pause other audio first, just in case you're a sassy soo
		    gameMusic.pause(); //who skips dialogue in story driven games, grumble grumble.
		
		    if ( !menuMusic.isPlaying() ) { //check if menu music is not playing
		      menuMusic.cue(0); //if not, reset it
		    }
		
		    menuMusic.play();//and play it.
		    
		  } else if (state == 2) { //game time...
		
		    menuMusic.pause(); //pause the menu music
		
		    if ( !gameMusic.isPlaying() ) { //same as before, check...
		      gameMusic.cue(0); //and reset!
		    }
		
		    gameMusic.play(); //play the game music!
		  }
		}
		
		// Button.pde
		var Button = class Button {
		
		  //variables
		  p;
		  w;
		  h;
		  o; //o = opacity
		  t;
		
		  constructor(text, tempX, tempY) {
		    this.p = new PVector(tempX, tempY);
		    this.w = width; //the entire width of the window! Yeah, we're cool now!
		    this.h = 60; //not the entire height...
		    this.o = 0; //opacity starts at 0
		    this.t = text; //it's simple stuff, really.
		  }
		
		  display() {
		    noStroke(); //i do not like strokes
		    this.o -= 2; //"fading away" effect... i like it :D
		    
		    if (mouseOver(this.p.x,this.p.y,this.w,this.h)) { //if mouse is over button...
		      this.o = 100; //set the opacity to 100
		      if (click()) { //if mouse clicks...
		        this.o = 150; //set opacity to 150
		      } 
		    }
		    
		    fill("#E8E8E8", this.o); //fill grey, according to opacity
		    rect(this.p.x, this.p.y, this.w, this.h); //draw rectangle
		
		    fill("#FFFFFF");
		    textSize(32); //draw text on button
		    text(this.t, this.p.x+this.w/2, this.p.y+this.h/2);
		  }
		  
		  mouseOver(x, y, w, h) {
		    if (mouseX >= (x) && mouseX <= (x+this.w) && mouseY >= (y) && mouseY <= (y+this.h)) {
		          return true;
		        } else {
		          return false;
		        }
		  }
		  
		  click() {
		    if (mouseOver(this.p.x, this.p.y, this.w, this.h) == true) {
		      if (mouseIsPressed) {
		        
		        if ( !hit.isPlaying() ) { //this is new? Ah yes, the audio for button clicks.
		          hit.cue(0); //if it's not playing, reset it,
		        }
		        hit.play(); //and play it.
		          
		        return true;
		      } else {
		        return false;
		      }
		    } else {
		      return false;
		    }
		  }
		}
		
		// Cell.pde
		var Cell = class Cell {
		
		  //Not fun to document... but it's better than documenting Game.
		
		  //Super simple variables. State is explained further below
		  p;
		  w;
		  h;
		  state;
		
		  constructor(tempX, tempY, tempW, tempH) {
		    this.p = new PVector(tempX, tempY);
		    this.w = tempW;
		    this.h = tempH;
		    this.state = 0;
		  }
		  
		  /* [NOTE]
		  
		  for state:
		  0 = blank space
		  1 = cross (X) [in this case, Overwatch]
		  2 = circle (O) [in this case, Blackwatch]
		  
		  */
		  
		  click(mx, my) {
		    
		    if (mx >= this.p.x && mx <= (this.p.x+this.w) && my >= this.p.y && my <= (this.p.y+this.h)) { //mx and my is basically mouseX and mouseY... or A POSSIBLE WAY FOR AI TO CLICK??
		
		      if (this.state == 0) { //if state of cell is 0...
		      
		        //draw a cool highlight thing
		        noStroke();
		        fill("#FFFFFF", 50);
		        rect(this.p.x, this.p.y, this.w, this.h);
		        
		        if (tictactoe.player == 2) { //but how can there be 3 players??? Maybe... a robot?
		          this.state = 2; //set cell to circle
		          tictactoe.player = 0; //return control to player... human player, of course.
		          tictactoe.full += 1; //full will be explained in the game class... in short, a check method for ties
		        }
		        
		        if (mouseIsPressed) { //if mouse is clicked...
		
		          if (tictactoe.player == 0) { //if player = 0 (ie: the first gent/lady)
		          
		            this.state = 1; //set cell to cross
		            
		            if (singleplayer) { //if singleplayer is enabled...
		              tictactoe.player = 2; //who is this mysterious 3rd contender?
		            } else if (!singleplayer) { //if no singleplayer...
		              tictactoe.player = 1; //set turn to player = 1 (ie: the second gent/lady)
		            }
		            
		            tictactoe.full += 1; //add to the tie check method
		            
		          } else if (tictactoe.player == 1) { //if player = 1 (ie: the second gent/lady)
		            
		            //wow there's much less in here...
		            this.state = 2; //set cell to circle
		            tictactoe.player = 0; //return control to first gent/lady
		            tictactoe.full += 1; //add to the tie check method
		            
		          }
		          
		          if ( !hit.isPlaying() ) { //return of the hit sound, for cells now.
		            hit.cue(0); //same as before, check if playing. If not, reset.
		          }
		          hit.play(); //play sound
		          mouseIsPressed = false; //disable mouse to prevent speedruns
		        }
		      }
		    }
		  }
		
		  display() {
		  
		    strokeWeight(5); //i like strokes now
		    noFill();
		
		    if (this.state == 1) { //if cross...
		    
		      //if you would like to go without images, enable this??
		      //stroke(255, 100, 100);
		      //line(p.x, p.y, (p.x+w), (p.y+h));
		      //line((p.x+w), p.y, p.x, (p.y+h));
		      
		      //but no one wants that...
		      image(overwatch,this.p.x+10,this.p.y+10,this.w-20,this.h-20);
		      
		    } else if (this.state == 2) { //if circle...
		    
		      //same as before
		      //stroke(100, 100, 255);
		      //ellipse(p.x+5, p.y+5, w-10, h-10);
		      
		      //images are better
		      image(blackwatch,this.p.x+10,this.p.y+10,this.w-20,this.h-20);
		      
		    }
		    
		    //draw a grid
		    stroke("#FFFFFF",50);
		    rect(this.p.x, this.p.y, this.w, this.h);
		  }
		  
		  //lonely return function
		  getState() {
		    return this.state;
		  }
		}
		
		// drawGame.pde
		function drawGame() {
		  
		  background("#1E2225"); //dark colours for maximum edge
		  
		  tictactoe.display(); //display the board
		  
		  if (!tictactoe.gameover) { //if game isn't over yet
		    
		    tictactoe.interaction(); //allow mouse interaction
		    tictactoe.checkWin(); //check for wins
		    
		    if (singleplayer) { //if singleplayer is enabled
		      tictactoe.AI(); //unleash the beast
		    }
		    
		  } else { //otherwise, (ie: game is over)
		
		    fill("#000000", 220); //black
		    rect(0, 0, width, height); //rectangle
		
		    fill(255);
		    textSize(72); //display "win" text based on winner
		    
		    if (tictactoe.winner == 1) {
		      text("Overwatch wins!", width/2, height/2);
		    } else if (tictactoe.winner == 2) {
		      text("Blackwatch wins!", width/2, height/2);
		    } else if (tictactoe.winner == 0 && tictactoe.full == 9) {
		      text("Tie!", width/2, height/2);
		    }
		    
		    textSize(36); //display return text
		    text("press SPACEBAR to restart\npress ESC to return to main menu", width/2, height/8*7); 
		  }
		}
		
		function keyPressed() {
		
		  if (state == 2) { //if on game screen
		  
		    if (tictactoe.gameover) { //and game is over
		      
		      if (key == ' ') { //and key is spacebar
		        
		        tictactoe = new Game(); //restart the game!
		        tictactoe.reset();
		        
		      } else if (key == ESC) { //if key is escape
		        
		        key = 0; //disable the key so processing doesn't exit
		        tictactoe = new Game(); //reset game for next time
		        tictactoe.reset();
		        background(0); // clean up background
		        state = 1; //return to main menu
		        
		      }
		    }
		  }
		}
		
		// drawIntro.pde
		function drawIntro() {
		  //because i like it so much.
		  
		  var intro = ""; //string for the text you read
		  
		  fill("#000000", 20); //black background, opacity creates "fading" effect
		  rect(0,0, width, height);
		
		  fill("#FFFFFF", 10); //tooltip in case anyone needs it
		  text("Click to Continue", width/2, height/16*15);
		
		  fill("#FFFFFF", 100); //set text starts here
		
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
		
		  if (mouseIsPressed) { //clicking the mouse advances the text
		    textState++;
		    mouseIsPressed = false;
		  }
		  
		}
		
		// drawMenu.pde
		function drawMenu() {
		  
		  background(0);
		  tint("#FFFFFF",80);
		  image(kingsrow, 0, 0, width, height); //draw a tinted image of king's row
		  
		  //display la 3 buttons
		  ai.display();
		  two.display();
		  exit.display();
		  
		  //display la sub-title
		  fill(255);
		  textSize(72);
		  text("Tic-Tac-Toe", width/2, height/32*9);
		  
		  //display la actual title
		  tint("#FFFFFF");
		  image(title,width/16,height/8);
		  
		  //click detecto
		  if (ai.click()) { //one player
		    
		    singleplayer = true; //enable singleplayer
		    state++; //move onto game
		    mouseIsPressed = false;
		    
		  } else if (two.click()) { //two player
		    
		    singleplayer = false; //disable singleplayer
		    state++; //move onto game
		    mouseIsPressed = false;
		    
		  } else if (exit.click()) {
		    exit(); //goodbye
		  }
		}
		
		// Game.pde
		var Game = class Game {
		
		  //welcome to the reckoning.
		  
		  //simple variables
		  player;
		  winner;
		  full;
		  gameover;
		
		  constructor() {
		    this.player = 0; //starts off with player one
		    this.winner = 0; //no winner. not yet.
		    this.full = 0; //used to check whether a tie has occurred. Further explanation found below in checkWin()
		    this.gameover = false; //game is not over yet.
		  }
		
		  reset() {
		    for (var i = 0; i < cols; i++) { //resets the board using a for loop. 
		      for (var j = 0; j < rows; j++) { //creates new cells to play with.
		        board[i][j] = new Cell(width/3*i, height/3*j, width/3, height/3);
		      }
		    }
		  }
		
		  display() {
		    for (var i = 0; i < cols; i++) { //displays every cell on the board
		      for (var j = 0; j < rows; j++) { //using a for loop, again.
		        board[i][j].display();
		      }
		    }
		  }
		  
		  interaction() {
		    for (var i = 0; i < cols; i++) { //what's this, another one??
		      for (var j = 0; j < rows; j++) { //it's just mouse interaction with the cells.
		        board[i][j].click(mouseX, mouseY);
		      }
		    }
		  }
		  
		  checkWin() {
		  
		  for (var i = 0; i < cols; i++) { //for loop used all throughout.
		
		           //==========[ Check vertical & horizontal for both cross and circle ]==========//
		           
		           //-----[ CROSS BEGINS HERE ]-----//
		           
		           if (board[i][0].getState() == 1 &&
		               board[i][1].getState() == 1 &&
		               board[i][2].getState() == 1) { //detects whether any vertical column contains all crosses...
		               
		               //Cross win vertical
		               this.winner = 1; //set winner to cross
		               this.gameover = true; //end game
		        
		    } else if (board[0][i].getState() == 1 &&
		               board[1][i].getState() == 1 &&
		               board[2][i].getState() == 1) { //detects whether any horizontal row contains all crosses...
		
		               //Cross win horizontal
		               this.winner = 1;
		               this.gameover = true;
		               
		           //-----[ CIRCLE BEGINS HERE ]-----//
		               
		    } else if (board[i][0].getState() == 2 &&
		               board[i][1].getState() == 2 &&
		               board[i][2].getState() == 2) { //detects whether any vertical column contains all circles...
		
		               //Circle win vertical
		               this.winner = 2;
		               this.gameover = true;
		               
		    } else if (board[0][i].getState() == 2 &&
		               board[1][i].getState() == 2 &&
		               board[2][i].getState() == 2) { //detects whether any horizontal row contains all circles...
		
		               //Circle win horizontal
		               this.winner = 2;
		               this.gameover = true;
		    }
		
		           //==========[ Check diagonals for both cross and circle ]==========//
		           
		           //-----[ CROSS BEGINS HERE ]-----//
		           
		           if (board[0][0].getState() == 1 &&
		               board[1][1].getState() == 1 &&
		               board[2][2].getState() == 1) { //if diagonal from top left to bottom right are all crosses...
		  
		               //Cross win diagonal [\] <-- what it looks like
		               this.winner = 1;
		               this.gameover =  true;
		        
		    } else if (board[0][2].getState() == 1 &&
		               board[1][1].getState() == 1 &&
		               board[2][0].getState() == 1) { //if diagonal from top right to bottom left are all crosses...
		
		               //Cross win diagonal [/]
		               this.winner = 1;
		               this.gameover = true;
		               
		           //-----[ CIRCLE BEGINS HERE ]-----//
		               
		    } else if (board[0][0].getState() == 2 &&
		               board[1][1].getState() == 2 &&
		               board[2][2].getState() == 2) { //if diagonal from top left to bottom right are all circles...
		
		               //Circle win diagonal [\]
		               this.winner = 2;
		               this.gameover = true;
		               
		    } else if (board[0][2].getState() == 2 &&
		               board[1][1].getState() == 2 &&
		               board[2][0].getState() == 2) { //if diagonal from top right to bottom left are all circles...
		
		               //Circle win diagonal [/]
		               this.winner = 2;
		               this.gameover = true;
		    }
		  }
		  
		    if (this.full == 9) { //if full = 9, ie: all cells have been filled...
		      this.gameover = true; //end the game in a tie.
		    }
		  
		  }
		  
		  /*
		  
		  the big reveal! yes! i did go off and code an AI.
		  it is of course, the legendary third player that i have spoke of.
		  mind you, she is quite smart, but not perfect in any sense of the word.
		  so please do not blame me if she misses an easy win. thank you.
		  
		  please look forward to it.
		  
		  */
		  AI() {
		    if (this.player == 2) { //if it is the AI's turn...
		    
		      for (var i = 0; i < cols; i++) { //initialize for loop central
		        for (var j = 0; j < rows; j++) { //this one is only used @ the end
		                       
		          //===============[ VERTICAL, HORIZONTAL CHECKS BEGIN HERE ]===============//
		                       
		                       //vertical, row 1 check
		                       
		                   if (board[i][0].getState() != 2 && //is not circle
		                       board[i][1].getState() == 1 &&
		                       board[i][2].getState() == 1) { //checks if the bottom 2 rows are crosses and the top row is not a circle.
		              
		                       board[i][0].click(width/3*i + width/6, height/3*0 + width/6); //clicks accordingly in that position. This repeats further below.
		                       
		                       if (debug) {console.log("hit top row");}
		                       
		                       /* i made all these grids to remind myself where I was
		                       
		                       [o][o][o] <-- hit this line
		                       [x][x][x]
		                       [x][x][x]
		                       
		                       */
		                       
		                       //vertical, row 2 check
		              
		            } else if (board[i][0].getState() == 1 &&
		                       board[i][1].getState() != 2 &&
		                       board[i][2].getState() == 1) { //checks if the top and bottom rows are crosses and the middle row is not a circle.
		              
		                       board[i][1].click(width/3*i + width/6,height/3*1 + width/6);
		                       
		                       if (debug) {console.log("hit middle row");}
		                       
		                       /*
		                       
		                       [x][x][x]
		                       [o][o][o] <-- hit this line
		                       [x][x][x]
		                       
		                       */
		                       
		                       //vertical, row 3 check
		              
		            } else if (board[i][0].getState() == 1 &&
		                       board[i][1].getState() == 1 &&
		                       board[i][2].getState() != 2) { //checks if the top 2 rows are crosses and bottom is not a circle.
		                       
		                       board[i][2].click(width/3*i + width/6,height/3*2 + width/6);
		                       
		                       if (debug) {console.log("hit bot row");}
		                       
		                       /*
		                       
		                       [x][x][x]
		                       [x][x][x]
		                       [o][o][o] <-- hit this line
		                       
		                       */
		                       
		                       //horizontal, column 1 check
		                       
		            } else if (board[0][i].getState() != 2 &&
		                       board[1][i].getState() == 1 &&
		                       board[2][i].getState() == 1) { //checks if the right 2 columns are crosses and left is not a circle.
		              
		                       board[0][i].click(width/3*0 + width/6,height/3*i + width/6);
		                       
		                       if (debug) {console.log("hit left col");}
		                       
		                       /*
		                       
		                       [o][x][x]
		                       [o][x][x]
		                       [o][x][x]
		                        ^-- hit this line
		                       
		                       */
		                       
		                       //horizontal, column 2 check
		              
		            } else if (board[0][i].getState() == 1 &&
		                       board[1][i].getState() != 2 &&
		                       board[2][i].getState() == 1) { //checks if the left and right columns are crosses and middle is not a circle.
		              
		                       board[1][i].click(width/3*1 + width/6,height/3*i + width/6);
		                       
		                       if (debug) {console.log("hit mid col");}
		                       
		                       /*
		                       
		                       [x][o][x]
		                       [x][o][x]
		                       [x][o][x]
		                           ^-- hit this line
		                       
		                       */
		                       
		                       //horizontal, column 3 check
		              
		            } else if (board[0][i].getState() == 1 &&
		                       board[1][i].getState() == 1 &&
		                       board[2][i].getState() != 2) { //checks if the left 2 columns are crosses and right is not a circle.
		              
		                       board[2][i].click(width/3*2 + width/6,height/3*i + width/6);
		                       
		                       if (debug) {console.log("hit right col");}
		                       
		                       /*
		                       
		                       [x][x][o]
		                       [x][x][o]
		                       [x][x][o]
		                              ^-- hit this line
		                       
		                       */
		                       
		            //===============[ DIAGONAL CHECKS BEGIN HERE ]===============//
		              
		            } else if (board[0][0].getState() != 2 &&
		                       board[1][1].getState() == 1 &&
		                       board[2][2].getState() == 1) { //I can't really explain these well in text... just look at my diagrams below.
		              
		                       board[0][0].click(width/3*0 + width/6,height/3*0 + width/6);
		                       
		                       if (debug) {console.log("hit diag 1");}
		                       
		                       /*
		                       
		                       [o][-][-]
		                       [-][x][-]
		                       [-][-][x]
		                        ^-- hit this spot (designated by circle)
		                       
		                       */
		              
		            } else if (board[0][0].getState() == 1 &&
		                       board[1][1].getState() != 2 &&
		                       board[2][2].getState() == 1) {
		              
		                       board[1][1].click(width/3*1 + width/6,height/3*1 + width/6);
		                       
		                       if (debug) {console.log("hit diag 2");}
		                       
		                       /*
		                       
		                       [x][-][-]
		                       [-][o][-]
		                       [-][-][x]
		                           ^-- hit this spot
		                       
		                       */
		              
		            } else if (board[0][0].getState() == 1 &&
		                       board[1][1].getState() == 1 &&
		                       board[2][2].getState() != 2) {
		              
		                       board[2][2].click(width/3*2 + width/6,height/3*2 + width/6);
		                       
		                       if (debug) {console.log("hit diag 3");}
		                       
		                       /*
		                       
		                       [x][-][-]
		                       [-][x][-]
		                       [-][-][o]
		                              ^-- hit this spot
		                       
		                       */
		              
		            } else if (board[0][2].getState() != 2 &&
		                       board[1][1].getState() == 1 &&
		                       board[2][0].getState() == 1) {
		              
		                       board[0][2].click(width/3*0 + width/6,height/3*2 + width/6);
		                       
		                       if (debug) {console.log("hit diag 4");}
		                       
		                       /*
		                       
		                       [-][-][x]
		                       [-][x][-]
		                       [o][-][-]
		                        ^-- hit this spot
		                       
		                       */
		              
		            } else if (board[0][2].getState() == 1 &&
		                       board[1][1].getState() != 2 &&
		                       board[2][0].getState() == 1) {
		              
		                       board[1][1].click(width/3*1 + width/6,height/3*1 + width/6);
		                       
		                       if (debug) {console.log("hit diag 5");}
		                       
		                       /*
		                       
		                       [-][-][x]
		                       [-][o][-]
		                       [x][-][-]
		                           ^-- hit this spot
		                       
		                       */
		              
		            } else if (board[0][2].getState() == 1 &&
		                       board[1][1].getState() == 1 &&
		                       board[2][0].getState() != 2) {
		              
		                       board[2][0].click(width/3*2 + width/6,height/3*0 + width/6);
		                       
		                       if (debug) {console.log("hit diag 6");}
		                       
		                       /*
		                       
		                       [-][-][o]
		                       [-][x][-]
		                       [x][-][-]
		                              ^-- hit this spot
		                       
		                       */
		              
		            } else { //if the AI cannot find any suitable moves, just do a random one!
		                       board[i][j].click(width/3*random(3) + 50,height/3*random(3) + 50);
		                       //console.log("hit random");
		          }
		        }
		      }
		    }
		  }
		}

		if (typeof preload === "function") p.preload = preload;
		if (typeof setup === "function") p.setup = setup;
		if (typeof draw === "function") p.draw = draw;
		if (typeof mousePressed === "function") p.mousePressed = mousePressed;
		if (typeof mouseReleased === "function") p.mouseReleased = mouseReleased;
		if (typeof mouseDragged === "function") p.mouseDragged = mouseDragged;
		if (typeof mouseClicked === "function") p.mouseClicked = mouseClicked;
		if (typeof keyPressed === "function") p.keyPressed = keyPressed;
		if (typeof keyReleased === "function") p.keyReleased = keyReleased;
		if (typeof keyTyped === "function") p.keyTyped = keyTyped;
	}
};
