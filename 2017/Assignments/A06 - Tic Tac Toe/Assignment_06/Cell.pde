class Cell { //The meat of the game.

  //Not fun to document... but it's better than documenting Game.

  //Super simple variables. State is explained further below
  PVector p;
  float w, h;
  int state;

  Cell(float tempX, float tempY, float tempW, float tempH) {
    p = new PVector(tempX, tempY);
    w = tempW;
    h = tempH;
    state = 0;
  }
  
  /* [NOTE]
  
  for state:
  0 = blank space
  1 = cross (X) [in this case, Overwatch]
  2 = circle (O) [in this case, Blackwatch]
  
  */
  
  void click(float mx, float my) { //oh yes oh yes, the click function
    
    if (mx >= p.x && mx <= (p.x+w) && my >= p.y && my <= (p.y+h)) { //mx and my is basically mouseX and mouseY... or A POSSIBLE WAY FOR AI TO CLICK??

      if (state == 0) { //if state of cell is 0...
      
        //draw a cool highlight thing
        noStroke();
        fill(#FFFFFF, 50);
        rect(p.x, p.y, w, h);
        
        if (tictactoe.player == 2) { //but how can there be 3 players??? Maybe... a robot?
          state = 2; //set cell to circle
          tictactoe.player = 0; //return control to player... human player, of course.
          tictactoe.full += 1; //full will be explained in the game class... in short, a check method for ties
        }
        
        if (mousePressed) { //if mouse is clicked...

          if (tictactoe.player == 0) { //if player = 0 (ie: the first gent/lady)
          
            state = 1; //set cell to cross
            
            if (singleplayer) { //if singleplayer is enabled...
              tictactoe.player = 2; //who is this mysterious 3rd contender?
            } else if (!singleplayer) { //if no singleplayer...
              tictactoe.player = 1; //set turn to player = 1 (ie: the second gent/lady)
            }
            
            tictactoe.full += 1; //add to the tie check method
            
          } else if (tictactoe.player == 1) { //if player = 1 (ie: the second gent/lady)
            
            //wow there's much less in here...
            state = 2; //set cell to circle
            tictactoe.player = 0; //return control to first gent/lady
            tictactoe.full += 1; //add to the tie check method
            
          }
          
          if ( !hit.isPlaying() ) { //return of the hit sound, for cells now.
            hit.cue(0); //same as before, check if playing. If not, reset.
          }
          hit.play(); //play sound
          mousePressed = false; //disable mouse to prevent speedruns
        }
      }
    }
  }

  void display() { //display function
  
    strokeWeight(5); //i like strokes now
    noFill();

    if (state == 1) { //if cross...
    
      //if you would like to go without images, enable this??
      //stroke(255, 100, 100);
      //line(p.x, p.y, (p.x+w), (p.y+h));
      //line((p.x+w), p.y, p.x, (p.y+h));
      
      //but no one wants that...
      image(overwatch,p.x+10,p.y+10,w-20,h-20);
      
    } else if (state == 2) { //if circle...
    
      //same as before
      //stroke(100, 100, 255);
      //ellipse(p.x+5, p.y+5, w-10, h-10);
      
      //images are better
      image(blackwatch,p.x+10,p.y+10,w-20,h-20);
      
    }
    
    //draw a grid
    stroke(#FFFFFF,50);
    rect(p.x, p.y, w, h);
  }
  
  //lonely return function
  int getState() {
    return state;
  }
}