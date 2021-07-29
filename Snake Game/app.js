let score  = 0
let boardSize =  20
let growth = 1
let speed  = 2
let snake  = [ [10,10], [10,11],[10,12],[10,13] ] 
let direction = "rh"




//creating the game board
function setBoard() {
    $("#cover").fadeOut("slow",);
    
    for(let x = 1; x <= boardSize; x++) {
        for(let y = 1; y <= boardSize; y++){
            let newcell = `<div class="cell" id="${x}0${y}">  ${x}${y}`
            
            $("#board").append(newcell)
         }
        }
    
}

setBoard()

function draw(){
    for(let i = 0; i <= snake.length - 1; i++){
    let segment = `${snake[i][0]}0${snake[i][1]}`
     $(`#${segment}`).css('background-color', 'red')
    }   
    }

draw(snake)

function move() {
let nX = snake[0][0] 
let nY = snake[0][1] 
nX += 0 
nY += -1
let newSegment = [nX , nY]
snake.unshift(newSegment)
snake.pop(snake[snake.length -1])

console.log(snake)
    // for (let i =0; i <= snake.length - 1; i++){
// console.log(snake[i] + "before move")
//     snake[i].map(n => n + 5)
// console.log(snake[i] + "after move")    
draw()
//}
}
move(snake)

food(){
    
}

document.onkeydown = function(e){console.log(e.key)}
