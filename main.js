const form = document.querySelector("form")

form.addEventListener("submit", (e) => {

    e.preventDefault();
    
    // let userInput = e.target["input"].value

    // colorInfo(userInput)

    // e.target.reset();
})

const URL = "https://pursuit-9-1-full-stack-project.herokuapp.com/api/colors"

function colorInfo(colorSelection){
    fetch(URL)
    .then(res => res.json()) 
    .then(data => console.log(data))
    .catch(err => console.log(err))
    
    //colors
    const black = data[0]['color']
    const white = data[1]['color']
    const red = data[2]['color']
    const blue = data[3]['color']
    const yellow = data[4]['color']
    const green = data[5]['color']   

    //create an if/else if statements to account for redirecting user to different page for each color in the selcetion 
        //else statement can account for error message handling for color selections not avaialable
}
