// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

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

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// declaring variable of text inside modal box to contain question data
let modalTxt = document.getElementById("currentQuestText").innerText;
modalTxt = "....LOADING....";

// timer function for modal box delay

//Variables for gameboard cards round 1 Nature (column 1)
const q1r1c1 = document.getElementsByClassName("q1 r1 c1");
const q1r2c1 = document.getElementsByClassName("q1 r2 c1");
const q1r3c1 = document.getElementsByClassName("q1 r3 c1");
const q1r4c1 = document.getElementsByClassName("q1 r4 c1");
const q1r5c1 = document.getElementsByClassName("q1 r5 c1");

//Variables for gameboard cards round 2 Nature (column 1)
const q2r1c1 = document.getElementsByClassName("q2 r1 c1");
const q2r2c1 = document.getElementsByClassName("q2 r2 c1");
const q2r3c1 = document.getElementsByClassName("q2 r3 c1");
const q2r4c1 = document.getElementsByClassName("q2 r4 c1");
const q2r5c1 = document.getElementsByClassName("q2 r5 c1");

//Variables for gameboard cards round 1 Animals (column 2)
const q1r1c2 = document.getElementsByClassName("q1 r1 c2");
const q1r2c2 = document.getElementsByClassName("q1 r2 c2");
const q1r3c2 = document.getElementsByClassName("q1 r3 c2");
const q1r4c2 = document.getElementsByClassName("q1 r4 c2");
const q1r5c2 = document.getElementsByClassName("q1 r5 c2");

//Variables for gameboard cards round 2 Animals (column 2)
const q2r1c2 = document.getElementsByClassName("q2 r1 c2");
const q2r2c2 = document.getElementsByClassName("q2 r2 c2");
const q2r3c2 = document.getElementsByClassName("q2 r3 c2");
const q2r4c2 = document.getElementsByClassName("q2 r4 c2");
const q2r5c2 = document.getElementsByClassName("q2 r5 c2");

//Variables for gameboard cards round 1 Computers (column 3)
const q1r1c3 = document.getElementsByClassName("q1 r1 c3");
const q1r2c3 = document.getElementsByClassName("q1 r2 c3");
const q1r3c3 = document.getElementsByClassName("q1 r3 c3");
const q1r4c3 = document.getElementsByClassName("q1 r4 c3");
const q1r5c3 = document.getElementsByClassName("q1 r5 c3");

//Variables for gameboard cards round 2 Computers (column 3)
const q2r1c3 = document.getElementsByClassName("q2 r1 c3");
const q2r2c3 = document.getElementsByClassName("q2 r2 c3");
const q2r3c3 = document.getElementsByClassName("q2 r3 c3");
const q2r4c3 = document.getElementsByClassName("q2 r4 c3");
const q2r5c3 = document.getElementsByClassName("q2 r5 c3");

//Variables for gameboard cards round 1 Mythology (column 4)
const q1r1c4 = document.getElementsByClassName("q1 r1 c4");
const q1r2c4 = document.getElementsByClassName("q1 r2 c4");
const q1r3c4 = document.getElementsByClassName("q1 r3 c4");
const q1r4c4 = document.getElementsByClassName("q1 r4 c4");
const q1r5c4 = document.getElementsByClassName("q1 r5 c4");

//Variables for gameboard cards round 2 Mythology (column 4)
const q2r1c4 = document.getElementsByClassName("q2 r1 c4");
const q2r2c4 = document.getElementsByClassName("q2 r2 c4");
const q2r3c4 = document.getElementsByClassName("q2 r3 c4");
const q2r4c4 = document.getElementsByClassName("q2 r4 c4");
const q2r5c4 = document.getElementsByClassName("q2 r5 c4");

//Variables for gameboard cards round 1 History (column 5)
const q1r1c5 = document.getElementsByClassName("q1 r1 c5");
const q1r2c5 = document.getElementsByClassName("q1 r2 c5");
const q1r3c5 = document.getElementsByClassName("q1 r3 c5");
const q1r4c5 = document.getElementsByClassName("q1 r4 c5");
const q1r5c5 = document.getElementsByClassName("q1 r5 c5");

//Variables for gameboard cards round 2 History (column 5)
const q2r1c5 = document.getElementsByClassName("q2 r1 c5");
const q2r2c5 = document.getElementsByClassName("q2 r2 c5");
const q2r3c5 = document.getElementsByClassName("q2 r3 c5");
const q2r4c5 = document.getElementsByClassName("q2 r4 c5");
const q2r5c5 = document.getElementsByClassName("q2 r5 c5");

//Variables for gameboard cards round 1 General (column 6)
const q1r1c6 = document.getElementsByClassName("q1 r1 c6");
const q1r2c6 = document.getElementsByClassName("q1 r2 c6");
const q1r3c6 = document.getElementsByClassName("q1 r3 c6");
const q1r4c6 = document.getElementsByClassName("q1 r4 c6");
const q1r5c6 = document.getElementsByClassName("q1 r5 c6");

//Variables for gameboard cards round 2 General (column 6)
const q2r1c6 = document.getElementsByClassName("q2 r1 c6");
const q2r2c6 = document.getElementsByClassName("q2 r2 c6");
const q2r3c6 = document.getElementsByClassName("q2 r3 c6");
const q2r4c6 = document.getElementsByClassName("q2 r4 c6");
const q2r5c6 = document.getElementsByClassName("q2 r5 c6");

//variable to grab round number from .html pages
const round = document.getElementById("round-num").innerText;

//variable to declare player1score
let player1score = document.getElementById("player1score").innerText;
player1score = 0;

//variable to declare player2score
let player2score = document.getElementById("player2score").innerText;
player2score = 0;

//variable for keeping track of how many tries a question has had
let strikes = 0;

// -------------------------------Choosing Corresponding Question from placeHolder.js--------------------------------------------------------- //
//For loop to search gamboard for class beginning with r + number = row number to then multiply for point value
for (let i = 1; i < 6; i++) {
  for (const div of document.querySelectorAll(`.r${i}`)) {
    //variable that creates a list of the class name seperated into indivicual characters
    const divClasses = div.className.split(" ");

    //variable that finds the column number from the class name, the number following the 'c'
    const colClass = divClasses.find((c) => c.startsWith("c"));
    //j is column number
    const j = colClass[1];

    //variable to use column number to get question from category in
    //placeHolder file 0-9 10-19 20-29 30-39 40-49 50-59
    const colOffset = (j - 1) * 10;

    //variable to apply round number to placeHolder file to shift early
    //round to beginning of category set of 10 first half or 2nd
    const roundOffset = (parseInt(round) - 1) * 5;

    //variable to allow row number to grab question from the category
    //in place holder file from 1-5
    const rowOffset = i - 1;

    //Accounts for all offsets
    const offset = colOffset + roundOffset + rowOffset;

    // console.log(placeholderQuestions[offset].question);
    // console.log(placeholderQuestions[offset].answer);

    //event listener to interpret a mouse click on the gameboard card

    div.addEventListener("click", function handleClick(event) {
      event.target.classList.add("disabled");
    });

    //event listener to open modal box for player interface
    div.addEventListener("click", () => {
      modal.style.display = "block";
      const currentQuestion = placeholderQuestions[offset].question;
      const currentAnswer = placeholderQuestions[offset].answer.toLowerCase();
      console.log("currentAnswer " + currentAnswer);
      modalTxt = `Category ${j}, worth ₽${
        i * round + "00"
      }\n${currentQuestion}`;
      document.getElementById("currentQuestText").innerText = modalTxt;
      console.log(currentPlayer);
      strikes = 0;
      // let promptAnswer = playerInput

      // console.log(promptAnswer.toLowerCase());
      // console.log(currentAnswer.toLowerCase())

      guess.addEventListener("click", () => {
        let playerInput = document.getElementById("player-input").value;
        console.log(currentPlayer);
        //playerInput function
        // console.log(document.getElementById("player-input").value);

        console.log(`${currentPlayer} put in ${playerInput}`);
        console.log("currentAnswer " + currentAnswer);

        if (playerInput == currentAnswer) {
          console.log("Correct");

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
          // } else if (playerInput == "") {
          //   switchPlayer();
          //   console.log(currentPlayer);
        } else {
          console.log("Incorrect");
          console.log(strikes);
          strikes = strikes + 1;
          console.log(strikes);

          if (currentPlayer == "player1") {
            player1score = player1score - i * round * 100;
            document.getElementById("player1score").textContent =
              "₽" + player1score;
            if (strikes == 1) {
              console.log(currentPlayer);
              switchPlayer();
              console.log(currentPlayer);
            } else if (strikes == 2) {
              switchPlayer();
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
              console.log(currentPlayer);
              switchPlayer();
              console.log(currentPlayer);
            }
            if (strikes == 2) {
              switchPlayer();
              modal.style.display = "none";
            }
            // document.getElementById("player-input").value = "";
            console.log(currentPlayer);
            pass.addEventListener("click", () => {
              modal.style.display = "none";
            });
          }
        }
      });
      pass.addEventListener("click", () => {
        console.log(currentPlayer);
        switchPlayer();
        console.log(currentPlayer);
      });
      console.log(currentAnswer);
    });
  }
}

const catA = document.getElementsByClassName("catA");

catA.textContent = placeholderQuestions[0].category;
