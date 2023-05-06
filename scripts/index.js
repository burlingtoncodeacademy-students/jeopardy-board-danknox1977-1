// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// let currentPlayer = p1

// let p1

// let p2

//Variables for gameboard cards round 1 & 2 Nature
const rnd1r1c1 = document.getElementsByClassName( "r1" "c1");
const nature1200 = document.getElementsByClassName("1200 Nature");
const nature1300 = document.getElementsByClassName("1300 Nature");
const nature1400 = document.getElementsByClassName("1400 Nature");
const nature1500 = document.getElementsByClassName("1500 Nature");
const nature2200 = document.getElementsByClassName("2200 Nature");
const nature2400 = document.getElementsByClassName("2400 Nature");
const nature2600 = document.getElementsByClassName("2600 Nature");
const nature2800 = document.getElementsByClassName("2800 Nature");
const nature3000 = document.getElementsByClassName("3000 Nature");

//Variables for gameboard cards round 1 & 2 Animals
const animals1100 = document.getElementsByClassName("1100 Animals");

//Variables for gameboard cards round 1 & 2 Computers
const computers1100 = document.getElementsByClassName("1100 Computers");

//Variables for gameboard cards round 1 & 2 Mythology
const mythology1100 = document.getElementsByClassName("1100 Mythology");

//Variables for gameboard cards round 1 & 2 History
const history1100 = document.getElementsByClassName("1100 History");

//Variables for gameboard cards round 1 & 2 General
const general100 = document.getElementsByClassName("1100 General");

//variable to grab round number from .html pages
const round = document.getElementById("round-num").innerText;

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
    console.log(j);
    //event listener to interpret a mouse click on the gameboard car
    //and produce an alert that states the category and point
    //value of the question card
    div.addEventListener("click", () => {
      alert(`Category ${j}, worth ₽${i * round + "00"}`);
      //variable to use column number to get question from catefory in
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
      console.log(placeholderQuestions[offset]);
      console.log(placeholderQuestions[offset].question);
      console.log(placeholderQuestions[offset].answer);
      const currentQuestion = placeholderQuestions[offset].question

    });
  }
}

const catA = document.getElementsByClassName("catA");

catA.textContent = placeholderQuestions[0].category;
