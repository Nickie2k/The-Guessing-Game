'use strict';

//* DOM vs. DOM Manipulation

//* DOM : Document Object Model - Allows JS to access HTML elements and styles to manipulate them

//* DOM Manipulation:

//* Learn about HTML Tree Elements

//! ----- Manipulate Classes in HTML ----- //

document.querySelector('.message').textContent = 'What is your guess?'; // Manipulate class = "message", change the content to ...

//! ----- Click Events ------ //

const randomeFunc1 = function () {
  console.log('69');
};

document.querySelector('.check').addEventListener('click', function () {
  // Click 'Checks' BUTTON, it will shows 100
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  document.querySelector(
    '.message'
  ).textContent = `Thank you, you have selected ${guess}`; // after click, this value changed aslo

  if (!guess)
    document.querySelector('.message').textContent =
      'Please input a numer instead';
});
