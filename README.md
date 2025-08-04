** GUESSING GAME LOGIC **
1.  Create a let function to calculate random number from x  to y, .textcontent the number to the website
2.  Create Score and HighScore variables. Score = y (max points) and HighScore = 0 (To record highscore from each play)
3.  Set the prompt box to take number input only
    - Prohibit string
    - Prohibit Empty input
    - Limit number from x to y (optional)
4.  .addEventListener for the SUBMIT button and a function within
   -  If input < random number: console.log "number is bigger", change color (CSS), if socre > 0 then score-- 
   -  If input > random number: console.log "number is smaller". change color (CSS), if score > 0 then score--
   -  If input === random number: console.log "correct", change color, score++
5. .addEventListener to the TRY AGAIN button, create a function within and reuse the calculate random number function
  -  .textcontent the number out on the screen
  -  reset .textcontent "what is your guess" (html)
  -  change color (CSS)
6.  Create a highScore if else
  -  if score > highScore, then highScore = score, .textContent the score
