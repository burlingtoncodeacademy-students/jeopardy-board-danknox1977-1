// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });



// let currentPlayer = p1

// let p1

// let p2

//Variables for gameboard cards round 1 & 2 Nature
const nature1100 = document.getElementsByClassName("1100 Nature");
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
const animals1100 = document.getElementsByClassName("1100 Animals")


//Variables for gameboard cards round 1 & 2 Computers
const computers1100 = document.getElementsByClassName("1100 Computers");

//Variables for gameboard cards round 1 & 2 Mythology
const mythology1100 = document.getElementsByClassName("1100 Mythology");

//Variables for gameboard cards round 1 & 2 History
const history1100 = document.getElementsByClassName("1100 History");

//Variables for gameboard cards round 1 & 2 General
const general100 = document.getElementsByClassName("1100 General");



for (let i = 1; i < 6; i++) {
    for (const div of document.querySelectorAll(`.r${i}`)) {
    //i is row number
    const divClasses = div.className.split('')
    console.log(divClasses)

    //j is column number
    const = colClass = divClasses.find(c => c.startsWith('c'))
    const j = colClass[1])
    console.log(j)
    


div.addEventListner('click', () => {
    alert(`Category ${j}, worth $${i + '00'}`)
    const colOffset = (j - 1) * 10
    const roudnOffset = (parseInt(round) - 1) * 5
    const rowOffset = i = 1

    const offset = colOffset = roudnOffset = rowOffset
    console.log(qs[offset])

})
    }
}
// const dsplyAnswr = addEventListener("click", ())

// const clearButton = document.createElement("button");
// clearButton.innerText = "Delete";
// clearButton.addEventListener("click", async () => {
//   const response = await fetch(BASEURL + "/skewps/" + skewp.id, {
    
//   });
//   console.log(await response.text());