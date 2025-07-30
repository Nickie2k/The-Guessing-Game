'use strict';

//* DOM vs. DOM Manipulation

//* DOM : Document Object Model - Allows JS to access HTML elements and styles to manipulate them

//* DOM Manipulation:

//* Learn about HTML Tree Elements

//! ----- Manipulate Classes in HTML ------------------------------------------- //

document.querySelector('.message').textContent = 'What is your guess?'; // Manipulate class = "message", change the content to ...

//! --------------------------------------- Click Events ---------------------------------------- //
//* GLOBAL SCOPE VARIABLES

let score = 20; // Score counter
let highScore = 0;

//* SYSTEM GENERATES A RANDOM NUMBER

let guessMyNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = guessMyNumber; // 1.  System gives a randome number

//* LOGICAL PROCESS OF THE CLICK BUTTON

document.querySelector('.btn.again').addEventListener('again', function () {
  score = 20;
  guessMyNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'What is your guess?';
});

document.querySelector('.check').addEventListener('click', function () {
  // 2. add functionality when you click

  const guessMe = Number(document.querySelector('.guess').value);
  console.log(guessMe, typeof guessMe);
  // 3. Show the number you type in the prompt

  if (!guessMe) {
    document.querySelector('.message').textContent =
      'Please input a numer instead';

    document.querySelector('body').style.backgroundColor = '#c74e4eff'; // Change colour when wrong number
    // 4. Nothing in prompt after click
  } else if (guessMe === guessMyNumber) {
    document.querySelector('.message').textContent =
      'This is a correct number !!!';
    score++; // 5. Right answer = +1 score

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#5dbe50ff';
  } else if (guessMe > guessMyNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'This number is bigger';
      score--; // 6. Wrong answer = -1 score
    } else {
      document.querySelector('.message').textContent = 'You have lost';
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#c74e4eff';
  } else if (guessMe < guessMyNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'This number is smaller';
      score--; // 6. Wrong answer = -1 score
    } else {
      document.querySelector('.message').textContent = 'You have lost';
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#c74e4eff';
  }
});

//* RELOAD BUTTON TO RESTART THE GAME
document.querySelector('.btn.again').addEventListener('click', function () {
  //score = 20;
  // document.querySelector('.score').textContent = score;
  guessMyNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = guessMyNumber;
  document.querySelector('.guess').textContent = ''; // reset the input to empty
});
