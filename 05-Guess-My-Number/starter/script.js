'use strict';

// document.querySelector('.message').textContent = `🎉 Correction Number!`;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 17;
// document.querySelector('.highscore').textContent = 19;
// document.querySelector('.guess').value = 8;


let secretNumbber = Math.floor(Math.random() * 20) + 1;
 
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  const message = document.querySelector('.message');
  if (!guess) {
    message.textContent = `⛔️ No Number!`;
  } else if (guess === secretNumbber) {
    message.textContent = `🎉 Correct Number!`;
    document.querySelector('.number').textContent = secretNumbber;
    document.querySelector('body').style.backgroundColor = '#60b347'; 
    document.querySelector('.number').style.width = '30rem'; 
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumbber) {
    if (score > 1) {
      message.textContent = `📈 Too high`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = `You lost the game`;
    }
  } else if (guess < secretNumbber) {
    if (score > 1) {
      message.textContent = `📉 Too low`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = `You lost the game`;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumbber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.guess').value = ''; 
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});