// ============================== [ 04. AUDIO USING STATES ] ============================== //

void audio() { //Audio function

  if (musicOn) { //If music is on, play the music!
    
    if (state == 0 || state == 1) { //If it's the main menu or options menu...
    
      //Pause other music players just in case.
      musicGame.pause();
      musicEnd.pause();
      
      //If the music is not playing for some reason, rewind it.
      if (musicMenu.isPlaying() != true) {
        musicMenu.pause();
        musicMenu.rewind();
      }
      
      //And play the music
      musicMenu.play();
      
    } else if (state == 2) { //If it's the game, play the cool musics
      
      //Pause other music players just in case.
      musicMenu.pause();
      musicEnd.pause();
      
      //If the music is not playing for some reason, rewind it.
      if (musicGame.isPlaying() != true) {
        musicGame.pause();
        musicGame.rewind();
      }
      
      //And play the music
      musicGame.play();
      
    } else if (state == 3) { //If it's gameover, play the sad musics
      
      //Pause other music players just in case.
      musicMenu.pause();
      musicGame.pause();
      
      //If the music is not playing for some reason, rewind it.
      if (musicEnd.isPlaying() != true) {
        musicEnd.pause();
        musicEnd.rewind();
      }
      
      //And play the music
      musicEnd.play();
      
    }
    
  } else { //If music is not supposed to be on... (oopsies :c)
    
    //Pause everything
    musicMenu.pause();
    musicGame.pause();
    musicEnd.pause();
  }
}