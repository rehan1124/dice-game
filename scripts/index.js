function rollDice() {
  var dice = Math.floor(Math.random() * 6 + 1);
  return dice;
}

var randomNumber1 = rollDice();
var randomNumber2 = rollDice();

// Selecting dice images
var diceImg1 = document.querySelector(".img1");
var diceImg2 = document.querySelector(".img2");
// Heading
var heading = document.querySelector(".container h1");

// Change dice images
diceImg1.setAttribute("src", `images/dice${randomNumber1}.png`);
diceImg2.setAttribute("src", `images/dice${randomNumber2}.png`);

// Decide who won the game
if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 wins 🚩";
} else if (randomNumber1 === randomNumber2) {
  heading.textContent = "Draw 😶";
}
