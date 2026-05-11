void audio() { //a simple audio function... no, really.

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