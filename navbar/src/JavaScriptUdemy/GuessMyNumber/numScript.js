'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'InCorrect Number';

// console.log(document.querySelector('.label-score').textContent);

// document.querySelector('.number').textContent = 723;
// document.querySelector('.score').textContent = 7;

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('secretNumber', secretNumber)
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //  no input

    if (!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!'
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'rgb(227, 162, 129)';

        }
        else {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';

        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    console.log('again');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';

})