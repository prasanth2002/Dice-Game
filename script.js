const score = document.querySelector("#score--0");
const scoretwo = document.querySelector("#score--1");
const diceimg = document.querySelector(".dice");
const newgame = document.querySelector(".btn--new");
const rolldice = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
const currentplayer = document.querySelector("#current--0");
const currentplayertwo = document.querySelector("#current--1");
const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  playing = true;
  activePlayer = 0;
  currentScore = 0;

  score.textContent = 0;
  scoretwo.textContent = 0;
  currentplayer.textContent = 0;
  currentplayertwo.textContent = 0;
  diceimg.classList.add('hidden');
  
  player0el.classList.remove("player--winner");

  player1el.classList.remove("player--winner");
  player0el.classList.add("player--active");
  player1el.classList.remove("player--active");
};
init();
const current = (score.textContent = "0");
score.textContent = 0;
scoretwo.textContent = 0;

const switchplayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0el.classList.toggle(`player--active`);
  player1el.classList.toggle(`player--active`);
};
diceimg.classList.add("hidden");

rolldice.addEventListener("click", function () {
  if (playing === true) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display the rolled dice
    diceimg.classList.remove("hidden");

    diceimg.src = `Images/dice-${dice}.png`;

    //add score

    //change player if it is 1

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchplayer();
    }
  }
  //dice roll
});

btnhold.addEventListener("click", function () {
  if (playing) {
    // add the current score to the total score
    playing == false;
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }

    switchplayer();
  }
});

newgame.addEventListener("click", init);
