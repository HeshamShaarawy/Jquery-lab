# html
    game title
    score board 
    user score
    options board
    game board with id board
    reset button
    win / next level buttons

# CSS
    set box sizing to border size
    remove all margin and padding
    set hight and weight to VM

    have the body as flex box
        set background color green
        set the game board in the middle,
        set the options on the left hand side
        set the game rules at right hand side 

    set a class snake: 
        inner text is "=" grey
        background is "black" 


    set a class food:
        background color : brown
    
    style reset/win button
        to disappear when the game is being played, 
        appear when the game is over.
        with gray background 
        
# Javascript
## building the board:
    variable for the score
    variables for the board size
    variable for snake growth
    variable for the snake speed

    run a loop that creates rows, each row with columns based on the variables
    id each div with x,y coordinates 

## draw
     the snake "4 segments" starting the middle of the board

    ## snake movement function:
        - the snake automatically move at speed
        - the user use arrows to change direction the head will move to next
           but only to right and left of the snake. 
           while the snake move vertical right and left arrows change its direction not up/down
           while the snake move horizontal up/down change its direction not left/right
        - snack body follows the head as it moves and does not shift
    
    ## snake eating

        when the head get to a square with food:
          the body grow by growth rate
          the food is eaten
          new food appears
          the score changes
    
    ## snake hitting a wall or eating it self
        if the head of the snake hits a border or body segment the game is over
        a message is displayed that "game over"
        a reset button appears to allow player to restart the game
    
    ##
        
# tickets:
  - remove the grids 
  - have the snake head looks special
  - make the food look better than just yellow square
  - create the game options 
  - write the game rules
  - add sound effects
  - add max score 
  - after game over the screen doesn't show buttons!
  - style the food
  - style the snake 

# closed tickets
 - remove console.logs(snake array, food, out of board)
 

