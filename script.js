// Selecting Elements
const score1 = document.querySelector(".p1_Score");
const score2 = document.querySelector(".p2_Score");
score1.textContent = 0;
score2.textContent = 0;

//Hides the dice by adding the class 'hidden'
const dice = document.querySelector(".dice");
dice.classList.add("hidden");

//-------------Roll Dice Button-----------------

//Roll Dice Button Events -- An Event Happens when clicked
let totalPoints = 0;
function buttonRollPress() {
  //Generate number between 1 - 6
  const generateRandomNumber = Math.floor(Math.random() * 6 + 1);

  //Setting the Dice number based on the random number generated
  const diceNumber = document.querySelector(".dice");
  diceNumber.src = "images/dice-" + generateRandomNumber + ".png";

  //remove the hidden class
  dice.classList.remove("hidden");

  //Current Score
  let currentScore = document.querySelector(".current-score");

  //If the random number is not equal to 1, add current points to total points
  if (generateRandomNumber !== 1) {
    console.log("randomNum: " + generateRandomNumber);
    totalPoints += generateRandomNumber;
    console.log("Total: " + totalPoints);
    currentScore.textContent = totalPoints;
    return totalPoints;
  } else {
    currentScore.textContent = 0;
    return (totalPoints = 0);
  }
}

const roll = document.querySelector(".btn--roll");
roll.addEventListener("click", buttonRollPress);
//-------------Roll Dice Button End-----------------
