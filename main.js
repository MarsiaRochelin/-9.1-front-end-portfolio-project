const URL = "https://pursuit-9-1-full-stack-project.herokuapp.com/api/colors"

fetch(URL)
.then(res => res.json()) 
.then(data => console.log(data))
.catch(err => console.log(err))

//colors
// const black = data[0]['color']
// const white = data[1]['color']
// const red = data[2]['color']
// const blue = data[3]['color']
// const yellow = data[4]['color']
// const green = data[5]['color']

