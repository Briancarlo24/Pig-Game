// Selecting Elements
const score1 = document.querySelector(".p1_Score");
const score2 = document.querySelector(".p2_Score");
const newGame = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const diceWinner1 = document.querySelector(".dice--winner--left");
const diceWinner2 = document.querySelector(".dice--winner--right");
const currentLabel1 = document.querySelectorAll(".current-label")[0];
const currentLabel2 = document.querySelectorAll(".current-label")[1];
const ActiveBgColor1 = document.querySelector(".left-column");
const ActiveBgColor2 = document.querySelector(".right-column");

//-------------Get The Players Current Scores---------------
let p1CurrentScore = document.getElementById("current--1");
let p2CurrentScore = document.getElementById("current--2");
let currentScore = 0;
let totalScore;
let totalPoints = 0;
let activePlayer = 1;

// score1.textContent = 0;
// score2.textContent = 0;
newGame.disabled = true;
hold.disabled = true;

//Hides the dice by adding the class 'hidden'
dice.classList.add("hidden");
diceWinner1.classList.add("hidden");
diceWinner2.classList.add("hidden");
ActiveBgColor1.classList.add("player--active");

const init = function () {
  score1.textContent = 0;
  score2.textContent = 0;
  currentLabel1.textContent = "Current";
  currentLabel2.textContent = "Current";
  p1CurrentScore.textContent = "0";
  p2CurrentScore.textContent = "0";
  roll.disabled = false;
  hold.disabled = false;
  if (activePlayer === 1) {
    ActiveBgColor1.classList.remove("player--winner");
    diceWinner1.classList.add("hidden");
  } else {
    ActiveBgColor2.classList.remove("player--winner");
    diceWinner2.classList.add("hidden");
  }

  activePlayer = 1;
  ActiveBgColor1.classList.add("player--active");
  ActiveBgColor2.classList.remove("player--active");
};

function generateRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function addCurrentScoreToPlayer(randNum) {
  //If the random number is not equal to 1, add current points to total points
  if (randNum !== 1) {
    //Add current Score to total points
    currentScore += randNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //reset Score to zero
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    //Switching Active Player
    if (activePlayer === 1) {
      activePlayer = 2;
      ActiveBgColor1.classList.remove("player--active");
      ActiveBgColor2.classList.add("player--active");
    } else if (activePlayer === 2) {
      activePlayer = 1;
      ActiveBgColor2.classList.remove("player--active");
      ActiveBgColor1.classList.add("player--active");
    }
  }
}

//-------------Roll Dice Button-----------------
//Roll Dice Button Events -- An Event Happens when clicked

roll.addEventListener("click", function () {
  console.log(`The current Active Player is Player--${activePlayer}`);
  //Generate number between 1 - 6
  let randomNumber = generateRandomNumber();
  //Change The Dice Image base on the random number generated
  dice.src = "images/dice-" + randomNumber + ".png";
  dice.classList.remove("hidden");
  newGame.disabled = false;
  hold.disabled = false;

  addCurrentScoreToPlayer(randomNumber);
});

//-------------Roll Dice Button End------------------

//Adding Score to the player
function playerTotalScore(score, currentTotalScore) {
  //Adding the current displayer score to the current score
  totalScore = score + currentTotalScore;
  document.getElementById(`score--${activePlayer}`).textContent = totalScore;
  if (totalScore < 100) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //Switching Active Player
    if (activePlayer === 1) {
      activePlayer = 2;
      ActiveBgColor1.classList.remove("player--active");
      ActiveBgColor2.classList.add("player--active");
    } else if (activePlayer === 2) {
      activePlayer = 1;
      ActiveBgColor2.classList.remove("player--active");
      ActiveBgColor1.classList.add("player--active");
    }
  } else {
    dice.classList.toggle("hidden");

    roll.disabled = true;
    hold.disabled = true;
    if (activePlayer === 1) {
      ActiveBgColor1.classList.add("player--winner");
      ActiveBgColor2.classList.remove("player--active");
      diceWinner1.classList.toggle("hidden");

      p1CurrentScore.textContent = "🥂";
      currentLabel1.textContent = "👏👏👏👏👏";
    } else if (activePlayer === 2) {
      ActiveBgColor2.classList.add("player--winner");
      ActiveBgColor1.classList.remove("player--active");
      diceWinner2.classList.toggle("hidden");
      p2CurrentScore.textContent = "🥂";
      currentLabel2.textContent = "👏👏👏👏👏";
    }
  }
}

//-------------Hold Button---------------------------
hold.addEventListener("click", function () {
  let addCurrentPlayerScore = Number(
    document.getElementById(`current--${activePlayer}`).textContent
  );
  //Current Displayed Player Score
  let currentTotalScore = Number(
    document.getElementById(`score--${activePlayer}`).textContent
  );
  console.log(currentTotalScore);
  playerTotalScore(addCurrentPlayerScore, currentTotalScore);

  console.log(`The current Active Player is Player--${activePlayer}`);

  //reset the current Score to 0
  currentScore = 0;
});

//-------------Hold Button End-----------------

//-------------New Game Button-----------------
newGame.addEventListener("click", function () {
  init();
});

//-------------New Game Button End-----------------
