void drawGame() { //simple simple function
  
  background(#1E2225); //dark colours for maximum edge
  
  tictactoe.display(); //display the board
  
  if (!tictactoe.gameover) { //if game isn't over yet
    
    tictactoe.interaction(); //allow mouse interaction
    tictactoe.checkWin(); //check for wins
    
    if (singleplayer) { //if singleplayer is enabled
      tictactoe.AI(); //unleash the beast
    }
    
  } else { //otherwise, (ie: game is over)

    fill(#000000, 220); //black
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

void keyPressed() { //to restart game or return to menu

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