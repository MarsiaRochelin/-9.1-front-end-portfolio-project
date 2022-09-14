const blackPsychologhy = document.querySelector("#black");
const whitePsychologhy = document.querySelector("#white");
const redPsychologhy = document.querySelector("#red");
const bluePsychologhy = document.querySelector("#blue");
const yellowPsychologhy = document.querySelector("#yellow");
const greenPsychologhy = document.querySelector("#green");

const img = document.querySelector("img");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userInput = e.target["user-input"].value;

  colorInfo(userInput);

  e.target.reset();
});

const URL = "https://pursuit-9-1-full-stack-project.herokuapp.com/api/colors";

function colorInfo(userInput) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      //colors
      const black = data[0]["color"];
      const white = data[1]["color"];
      const red = data[2]["color"];
      const blue = data[3]["color"];
      const yellow = data[4]["color"];
      const green = data[5]["color"];
      const aTags = document.querySelectorAll('a')
      
      aTags.forEach(tag => {
        tag.textContent = ''
      })
     
      if (userInput.toLowerCase() === black) {
        //make image size smaller when color is selcted
        img.setAttribute("style", "width:600px; height:auto;");
        blackPsychologhy.textContent = "BLACK";
      } else if (userInput.toLowerCase() === white) {
        img.setAttribute("style", "width:600px; height:auto;");
        whitePsychologhy.textContent = "";
        whitePsychologhy.textContent = "WHITE";
      } else if (userInput.toLowerCase() === red) {
        img.setAttribute("style", "width:600px; height:auto;");
        redPsychologhy.textContent = "RED";
      } else if (userInput.toLowerCase() === blue) {
        img.setAttribute("style", "width:600px; height:auto;");
        bluePsychologhy.textContent = "BLUE";
      } else if (userInput.toLowerCase() === yellow) {
        img.setAttribute("style", "width:600px; height:auto;");
        yellowPsychologhy.textContent = "YELLOW";
      } else if (userInput.toLowerCase() === green) {
        img.setAttribute("style", "width:600px; height:auto;");
        greenPsychologhy.textContent = "GREEN";
      } else {
        window.confirm(
          "A selection from the list of available colors must be selected."
        );
      }
    })
    .catch((err) => console.log(err));
}
