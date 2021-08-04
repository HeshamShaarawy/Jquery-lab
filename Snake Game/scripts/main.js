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

// drawing the snake function
function draw(){
    
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
// creating and drawing the food on the board
function food(){
    fX = Math.floor(Math.random() * boardSize) + 1;
    fY = Math.floor(Math.random() * boardSize) + 1;
    foodLocation = `${fX}0${fY}` 
     $(`#${foodLocation}`).addClass("food")

    }
// moving the snake on the board
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



//eating the food
function sollow (){
    food()
    score += 100
    $(`#score`).text(`${score}`) 
    if(score == goal){winning()}
    snl = snake.length -1
    $(`#${head}`).removeClass("food")
   
        
}

//capturing the user keying
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

//starting the game
function start (){
    if (drawBoard == 0){ setBoard()};
    
    $(`#goal`).text(`${goal}`)
    $(`#speedvalue`).text(`${speed}`)
    draw()
    food()
    gameON = window.setInterval(move, 1000/speed)
    
}

// when the user achieve the goal score:
function  winning() {
    clearInterval(gameON)
    $('#winningMessage > div').text('WiNNeR')
    $("#nextLevel").css('display', 'flex')
    $(`#winningMessage`).addClass('show')
    }


// offering to go to next level when the player achieve the goal score
$('#nextLevel').click( ()=> {
    speed += 2
    goal += goal
    $("#nextLevel").css('display', 'none')
    $(`#winningMessage`).removeClass('show')
    start()
    
})

// lose : stopping the game and displaying a game over message
function gameOver() {
    clearInterval(gameON)
    $('#winningMessage > div').text('Game Over')
    $(`#winningMessage`).addClass('show')
     
 }
// re-setting the game
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


// offering the player to re-play the game 
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



