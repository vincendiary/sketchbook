void audio() { //audio function
  
  if (!rains.isPlaying()) { //if rain is not playing
    rains.cue(0); //restart it
  }
  
  if (!frozen) { //if time is not frozen...
    rains.play(); //play the rain sound
  } else {
    rains.pause(); //else, if frozen...
    thunder.pause(); //pause everything
  }
  
}