'use strict';

// document.querySelector('.message').textContent = `🎉 Correction Number!`;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 17;
// document.querySelector('.highscore').textContent = 19;
// document.querySelector('.guess').value = 8;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = `No Number!`;
  }
});
