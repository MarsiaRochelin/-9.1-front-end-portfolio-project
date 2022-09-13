const form = document.querySelector("form")

form.addEventListener("submit", (e) => {

    e.preventDefault();
    
    //make userInput case sensative, so that data is returned for each color 
    let userInput = e.target["user-input"].value

    colorInfo(userInput)

    e.target.reset();
})

const URL = "https://pursuit-9-1-full-stack-project.herokuapp.com/api/colors"

function colorInfo(userInput){
    fetch(URL)
    .then(res => res.json()) 
    .then(data => {

    //colors
    const black = data[0]['color']
    const white = data[1]['color']
    const red = data[2]['color']
    const blue = data[3]['color']
    const yellow = data[4]['color']
    const green = data[5]['color']
        
    //else statement can account for error message handling for color selections not avaialable
    
    if(userInput === black){
        const blackPsychologhy = document.querySelector('#black')
        blackPsychologhy.textContent = 'BLACK'
    } else if(userInput === white){
        const whitePsychologhy = document.querySelector('#white')
        whitePsychologhy.textContent = 'WHITE'
    } else if(userInput === red){
        const redPsychologhy = document.querySelector('#red')
        redPsychologhy.textContent = 'RED'
    } else if(userInput === blue){
        const bluePsychologhy = document.querySelector('#blue')
        bluePsychologhy.textContent = 'BLUE'
    } else if(userInput === yellow){
        const greenPsychologhy = document.querySelector('#yellow') 
        greenPsychologhy.textContent = 'YELLOW'
    } else if(userInput === green){
        const yellowPsychologhy = document.querySelector('#green') 
        yellowPsychologhy.textContent ='GREEN'
    } else {
        
    }
    })
    .catch(err => console.log(err))
}
