// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

//to share player score information to other Html Pages
window.onload = function() {
    var getInput = prompt("Hey type something here: ");
    localStorage.setItem("storageName",getInput);
 }

let currentPlayer = "player1";

// Current Player display above gameboard
let currentPlayerH2 = document.getElementById("currentPlayerH2").innerText;
// same but in the modal
let currentPlayerModal =
  document.getElementById("currentPlayerModal").innerText;

document.getElementById("currentPlayerH2").innerText = "Player 1's Turn";

document.getElementById("currentPlayerModal").innerText = "Player 1's Turn";
//switch player function
function switchPlayer() {
  if (currentPlayer === "player1") {
    currentPlayer = "player2";
    document.getElementById("currentPlayerH2").textContent = "Player 2's Turn";
    document.getElementById("currentPlayerModal").textContent =
      "Player 2's Turn";
  } else {
    currentPlayer = "player1";
    document.getElementById("currentPlayerH2").textContent = "Player 1's Turn";
    document.getElementById("currentPlayerModal").textContent =
      "Player 1's Turn";
  }
}

//playerGuess function aka when they hit the guess button
function playerGuess() {}

//player interface modal variable declaration
const pass = document.getElementById("pass");
const guess = document.getElementById("guess");

//pass function

//Guess function
// guess.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// Get the modal
const modal = document.getElementById("playerInterface");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// final question and input variable declaration
const p1wagerAmt = document.getElementById("p1wagerAmt");
const player1WagerButton = document.getElementById("player1WagerButton");
const p2wageAmt = document.getElementById("p2wageAmt");
const player2WagerButton = document.getElementById("player2WagerButton");
const finalQuestText = document.getElementById("finalQuestText");
const finalQuestCategory = document.getElementById("finalQuestCategory");

//Player wager button prompt and alert confirmation
player1WagerButton.onclick = function p1WagerPrompt() {
  let p1wager = prompt("Input the Amount you care to Wager");
  alert(`You've risked ₽${p1wager}`);
};

player2WagerButton.onclick = function p2WagerPrompt() {
  let p2wager = prompt("Input the Amount you care to Wager");
  alert(`You've risked ₽${p2wager}`);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


//variable to declare player1score
let player1score = document.getElementById("player1score").innerText;
player1score = 0;

//variable to declare player2score
let player2score = document.getElementById("player2score").innerText;
player2score = 0;


guess.addEventListener("click", () => {
    // currentAnswer = placeholderQuestions[offset].answer.toLowerCase();
    // console.log(currentAnswer);
    // console.log("After guess click currentAnswer: " + currentAnswer);
    let playerInput = document.getElementById("player-input").value;

    console.log(`${currentPlayer} put in ${playerInput}`);
    console.log("currentAnswer " + currentAnswer);

    if (playerInput == currentAnswer) {
      // console.log("Correct");
      currentAnswer = "";

      if (currentPlayer == "player1") {
        player1score = player1score + i * round * 100;
        document.getElementById("player1score").textContent =
          "₽" + player1score;

        modal.style.display = "none";
        document.getElementById("player-input").value = "";
      } else {
        player2score = player2score + i * round * 100;
        document.getElementById("player2score").textContent =
          "₽" + player2score;

        modal.style.display = "none";
        document.getElementById("player-input").value = "";
      }
    } else if (playerInput == "") {
      switchPlayer();
      // console.log(currentPlayer);
    } else {
      console.log("Incorrect");
      // console.log(currentPlayer);
      // console.log(strikes);
      strikes = strikes + 1;
      // console.log(strikes);

      if (currentPlayer == "player1") {
        player1score = player1score - i * round * 100;
        document.getElementById("player1score").textContent =
          "₽" + player1score;
        if (strikes == 1) {
          switchPlayer();
          console.log(currentPlayer);
        } else if (strikes == 2) {
          switchPlayer();
          // console.log(currentPlayer);
          modal.style.display = "none";
        }

        // document.getElementById("player-input").value = "";

        pass.addEventListener("click", () => {
          modal.style.display = "none";
        });
      } else {
        player2score = player2score - i * round * 100;
        document.getElementById("player2score").textContent =
          "₽" + player2score;
        if (strikes == 1) {
          switchPlayer();
          console.log(currentPlayer);
        } else if (strikes == 2) {
          switchPlayer();
          console.log(currentPlayer);
          modal.style.display = "none";
        }
        // document.getElementById("player-input").value = "";
        console.log(currentPlayer);
        // pass.addEventListener("click", () => {
        //   modal.style.display = "none";
        // });
      }
    }
  });

