// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

let currentPlayer = "player1";


// Current Player display above gameboard
let currentPlayerH2 = document.getElementById("currentPlayerH2").innerText
console.log(currentPlayerH2)

document.getElementById("currentPlayerH2").textContent = "Player 1's Turn";
console.log(currentPlayerH2)

//switch player function
function switchPlayer() {
  if (currentPlayer === "player1") {
    currentPlayer = "player2";
    document.getElementById("currentPlayerH2").textContent = "Player 2's Turn";
  } else {
    currentPlayer = "player1";
    document.getElementById("currentPlayerH2").textContent = "Player 1's Turn";
  }
}




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

    const currentQuestion = placeholderQuestions[offset].question;
    const currentAnswer = placeholderQuestions[offset].answer.toLowerCase();

    //event listener to interpret a mouse click on the gameboard car
    //and produce an alert that states the category and point
    //value of the question card
    div.addEventListener("click", () => {
      alert(`Category ${j}, worth ₽${i * round + "00"}\n\n\n\n`);
      var promptAnswer = window.prompt(`${currentQuestion}`);
      if (promptAnswer.toLowerCase() == currentAnswer.toLowerCase()) {
        console.log("Correct");
        console.log(promptAnswer);
        console.log(currentPlayer);
        if (currentPlayer == "player1") {
          player1score = player1score + i * round * 100;
          document.getElementById("player1score").textContent = "₽" +player1score;
        } else {
          player2score = player2score + i * round * 100;
          document.getElementById("player2score").textContent = "₽" +player2score;
        }
      } else if (promptAnswer == "") {
        switchPlayer()
          console.log(currentPlayer)
        
      } else {
        console.log("Incorrect");
        console.log(promptAnswer);
        switchPlayer();
        console.log(currentPlayer);
        if (currentPlayer == "player1") {
          player1score = player1score - i * round * 100;
          document.getElementById("player1score").textContent = "₽" + player1score;
        } else {
          player2score = player2score - i * round * 100;
          document.getElementById("player2score").textContent = "₽" + player2score;
        }
      }

      console.log(currentAnswer);
    });
  }
}

const catA = document.getElementsByClassName("catA");

catA.textContent = placeholderQuestions[0].category;
