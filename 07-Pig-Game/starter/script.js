'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// starting conditions
const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    diceEl.classList.add('hidden');

    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.remove('player--winner'); 
    player1El.classList.remove('player--winner'); 
    player0El.classList.add('player--active'); 
    player1El.classList.remove('player--active'); 
}

init();

const switchPlayer = function() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentScore = 0;
}
   
// rolling a dice
btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. display a dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        
        // 3. check for rolled 1: if not true, increase the score 
        if (dice !== 1) {
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; //change later

        // if true, current score is 0 and player is switched
        } else {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            switchPlayer();
        }
}
});

btnHold.addEventListener('click', function() {
    if (playing) {
    // add current score to score massive to position the same as active player number
        scores[activePlayer] += currentScore; 
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //finish the same
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); 
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
        } else {
            switchPlayer();
        }
    }

btnNew.addEventListener('click', init);
})

