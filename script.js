// Selecting Elements
const score1 = document.querySelector(".p1_Score");
const score2 = document.querySelector(".p2_Score");
score1.textContent = 0;
score2.textContent = 0;

//-------------Get The Players Current Scores---------------
let p1CurrentScore = document.querySelectorAll(".current-score")[0];
let p2CurrentScore = document.querySelectorAll(".current-score")[1];

//Hides the dice by adding the class 'hidden'
const dice = document.querySelector(".dice");
dice.classList.add("hidden");

//Generate number between 1 - 6
const generateRandomNumber = () => Math.floor(Math.random() * 6 + 1);
//-------------Roll Dice Button-----------------

//Roll Dice Button Events -- An Event Happens when clicked
let totalPoints = 0;
const buttonRollPress = function () {
  //Change The Dice Image base on the random number generated
  const diceNumber = document.querySelector(".dice");
  diceNumber.src = "images/dice-" + generateRandomNumber + ".png";
  //Show the Dice Image when Roll Button is clicked
  dice.classList.remove("hidden");

  //If the random number is not equal to 1, add current points to total points
  if (generateRandomNumber !== 1) {
    console.log("randomNum: " + generateRandomNumber);
    totalPoints += generateRandomNumber;
    console.log("Current Score: " + totalPoints);
    p1CurrentScore.textContent = totalPoints;
    return totalPoints;
  } else {
    p1CurrentScore.textContent = 0;
    return (totalPoints = 0);
  }
};

const roll = document.querySelector(".btn--roll");
roll.addEventListener("click", buttonRollPress);
//-------------Roll Dice Button End-----------------

//-------------Hold Button-----------------
//Adding Score to the player
let addCurrentScore;
function addScoreToPlayer1(score) {
  //Current Displayed Player Score
  let p1CurrentScore = Number(document.getElementById("score--1").textContent);
  console.log("p1CurrentScore: " + p1CurrentScore);

  //Adding the current displayer score to the current score
  addCurrentScore = score + p1CurrentScore;
  document.getElementById("score--1").textContent = addCurrentScore;
  console.log(addCurrentScore);
}

const buttonHoldPress = function () {
  let addCurrentPlayerScore = Number(
    document.querySelectorAll(".current-score")[0].textContent
  );
  addScoreToPlayer1(addCurrentPlayerScore);
  document.querySelectorAll(".current-score")[0].textContent = 0;
};

const hold = document.querySelector(".btn--hold");
hold.addEventListener("click", buttonHoldPress);
//-------------Hold Button End-----------------
