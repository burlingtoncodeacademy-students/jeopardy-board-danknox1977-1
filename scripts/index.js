// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });


const button = document.getElementById(qBox)

const dsplyAnswr = addEventListener("click", ())

const clearButton = document.createElement("button");
clearButton.innerText = "Delete";
clearButton.addEventListener("click", async () => {
  const response = await fetch(BASEURL + "/skewps/" + skewp.id, {
    
  });
  console.log(await response.text());