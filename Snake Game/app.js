let score  = 0
let boardSize =  20
let growth = 1
let speed  = 2
let snake  = [ [10,10], [10,11],[10,12],[10,13],[10,14] ] 
let  dx = 0 , dy = -1
let  userKey
let snl = snake.length -1
let head = `${snake[0][0]}0${snake[0][1]}`
let gameON



//creating the game board
function setBoard() {
    $("#cover").fadeOut("slow",); 
    for(let x = 1; x <= boardSize; x++){
        for(let y = 1; y <= boardSize; y++){
            let newcell = `<div class="cell" id="${y}0${x}">`       
            $("#board").append(newcell)
         }
    }
}

function draw(){
    for(let i = 0; i <= snl; i++){
        let segment = `${snake[i][0]}0${snake[i][1]}`        
        if ($(`#${segment}`).val()  == undefined){ gameOver() }
       // if (i > 0 && `${segment}` == `${head}`){gameOver()}
        $(`#${segment}`).css('background-color', 'red')
        $(`#${segment}`).text("$#$")
        $(`#${segment}`).css('borderRadius' , '30%');
        }
     $(`#${snake[snl][0]}0${snake[snl][1]}`).css('borderRadius', '')
     $(`#${snake[snl][0]}0${snake[snl][1]}`).css('background-color', '') 
     $(`#${snake[snl][0]}0${snake[snl][1]}`).text('')     
    
    }

function food(){
    fX = Math.floor(Math.random() * boardSize) + 1;
    fY = Math.floor(Math.random() * boardSize) + 1;
    foodLocation = `${fX}0${fY}` 
     $(`#${foodLocation}`).addClass("food")

    }

function move() {  
        head = `${snake[0][0]}0${snake[0][1]}`
        let nX = snake[0][0] , nY = snake[0][1] 
        nX +=  dx
        nY +=  dy
        let newSegment = [nX , nY]
        snake.unshift(newSegment)   
        $(`#${head}`).hasClass("food")? sollow() : snake.pop(snake[snl -1]) 
        draw()       
}




function sollow (){
    food()
    score += 100
    console.log(score + "score!!")
    $(`#score`).text(`${score}`) 
    snl = snake.length -1
    console.log("yummy yummy in my tummy")
    $(`#${head}`).removeClass("food")
        
}


document.onkeydown = function(e){
    userKey = (e.key)
    console.log (userKey)
    if (userKey == "s" || userKey == "S"){
        start()
    }
    if (userKey == "ArrowUp" && dx !== 0){
        dx =  0;
        dy = -1;
    } else if(userKey == "ArrowDown" && dx !== 0) {
        dx =  0;
        dy =  1;
    }   else if(userKey == "ArrowRight" && dy !== 0) {
        dx =  +1;
        dy =  0;
    }   else if (userKey == "ArrowLeft" && dy !== 0) {
        dx =  -1;
        dy =  0;
    }  else {
        return
    }     
}


function start (){
    $(`#winningMessage`).removeClass('show')
    setBoard()
    draw()
    food()
    gameON = window.setInterval(move, 1000)
    
}

function gameOver() {
    clearInterval(gameON)
    $(`#winningMessage`).addClass('')
    
 }
$('#restartButton').click(start())







//   d == "up"? dy = -1 : d == "dn"? dy = 1 : dy = 0;
    //   d == "lft"? dx = -1: d == "rgt"? dx = 1 : dx = 0;       
    //   dx !== 0? dy = 0:  dx = 0
    //   dy !== 0? dx = 0:  dy = 0


        // if (userKey = "ArrowUp" && dx !== 0){
        //     dx = 0;
        //     dy =  -1;
        // } else if(userKey = "ArrowDown" && dx !== 0) {
        //     dx = 0
        //     dy =  +1
        // }   else if(userKey = "ArrowRight" && dy !== 0) {
        //     dx =  0
        //     dy =  1
        // }   else if (userKey = "ArrowLeft" && dy !== 0) {
        //     dx =  0
        //     dy =  -1
        // }  else {
        //     return
        // }  


    // switch (userKey) {
    //     case "ArrowUp":
    //         dx = 0;
    //         dy = -1;
    //         console.log("paris")
    //         break;
     
    //     case "ArrowDown":
    //         dx = 0;
    //         dy = +1;
    //         console.log("paris")
    //       break;
    
    //        case "ArrowRight":
    //         dx = -1;
    //         dy =  0;
  
    //         break;
    //     case "ArrowLeft":
    //         dx = +1;
    //         dy = 0;
  
    //         break;
    // }