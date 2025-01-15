var randomNumber1 = Math.floor(Math.random() * 6 + 1); // 1-6

var randomImage1 = "./images/" + "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

document.querySelector(".player-1 img").setAttribute("src", randomImage1); // player 1

// player 2

var randomNumber2 = Math.floor(Math.random() * 6 + 1); // 1-6

var randomImage2 = "./images/" + "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

document.querySelector(".player-2 img").setAttribute("src", randomImage2); // player 2

/* winner */
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = " Player 1 Wins 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
