let score  = 0
let boardSize =  20
let speed = 3
let snake  = [ [10,10], [10,11],[10,12],[10,13],[10,14] ] 
let  dx = 0 , dy = -1
let  userKey
let snl = snake.length -1
let head = `${snake[0][0]}0${snake[0][1]}`
let gameON
let drawBoard = 0
let goal =  500
let level

 





//creating the game board
function setBoard() {
    $("#cover").fadeOut("slow",); 
    for(let x = 1; x <= boardSize; x++){
        for(let y = 1; y <= boardSize; y++){
            let newcell = `<div class="cell" id="${y}0${x}">`       
            $("#board").append(newcell)
         }
    } drawBoard = 1
}

function draw(){
    console.log(speed)
    for(let i = 0; i <= snl; i++){
        let segment = `${snake[i][0]}0${snake[i][1]}`        
        if ($(`#${segment}`).val()  == undefined){ gameOver() }
        if(i > 0 && snake[0][0] == snake[i][0] && snake[0][1] == snake[i][1]){gameOver()}
        $(`#${segment}`).css('background-color', 'red')
        $(`#${segment}`).text("$#$")
        $(`#${segment}`).css('borderRadius' , '30%');
        }
        head = `${snake[0][0]}0${snake[0][1]}`
        $(`#${head}`).css('backgroundColor', 'blue')
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
    $(`#score`).text(`${score}`) 
    if(score == goal){winning()}
    snl = snake.length -1
    $(`#${head}`).removeClass("food")
   
        
}


document.onkeydown = function(e){
    userKey = (e.key)
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
    if (drawBoard == 0){ setBoard()};
    
    $(`#goal`).text(`${goal}`)
    $(`#speedvalue`).text(`${speed}`)
    draw()
    food()
    gameON = window.setInterval(move, 1000/speed)
    
}

function gameOver() {
    clearInterval(gameON)
    $('#winningMessage > div').text('Game Over')
    $(`#winningMessage`).addClass('show')
     
 }

function resetVariables () {
    score  = 0
    boardSize =  20
    speed = 3
    growth = 1
    snake  = [ [10,10], [10,11],[10,12],[10,13],[10,14] ] 
    dx = 0 , dy = -1
    userKey
    snl = snake.length -1
    head = `${snake[0][0]}0${snake[0][1]}`
    $(`#score`).text(`Zero`) 
}

$('#nextLevel').click( ()=> {
    speed += 2
    goal += goal
    $("#nextLevel").css('display', 'none')
    $(`#winningMessage`).removeClass('show')
    start()
    
})

$('#restartButton').click( ()=> {
    for(let i = 0; i <= snl; i++){
        let segment = `${snake[i][0]}0${snake[i][1]}`        
        $(`#${segment}`).css('background-color', '')
        $(`#${segment}`).text("")
        $(`#${segment}`).css('borderRadius' , '');
        }
    $(`#${foodLocation}`).removeClass("food")
    $(`#winningMessage`).removeClass('show');
    resetVariables()
    start();
    })
$('#cancelButton').click(() => {
    $(`#winningMessage`).removeClass('show')
})


function  winning() {
clearInterval(gameON)
$('#winningMessage > div').text('WiNNeR')
$("#nextLevel").css('display', 'flex')
$(`#winningMessage`).addClass('show')
}

///code assets 

//
//

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