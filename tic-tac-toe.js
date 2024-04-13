//adds event listener to see when the document is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {

    //declares a variables
    //gets all the 9 divs in the gameboard
    var gameboard = document.getElementById("board").children;
    //declares the arrays for the X and O moves
    let gameTrackX = [];
    let gameTrackO = [];
    //declares the game turn counter
    let turn = 0;
    //gets the the area to where the game status would be displayed
    var display = document.getElementById("status");
    let stat = false;
    //get the button to reset the game
    var reset = document.querySelector(".btn");

    //loops through each div in the gameboard
    for (let i=0; i<gameboard.length; i++){
        //get each div in the gameboard and set class attribute
        const element = gameboard[i];
        element.setAttribute("class", "square");

        //set's up event listeners in order to style hovering over each part of the gameboard
        element.addEventListener("mouseover", function(){
            element.classList.add("hover");
        })

        element.addEventListener("mouseout", function(){
            element.classList.remove("hover");
        })


        //Adds event listener to see when place in order was selected
        element.addEventListener("click", function(){
            //checks to see if that place on the board had already been used. 
            if(!element.textContent && stat == false){
                //checks to see whose turn it is
                if (turn % 2 == 0){
                    //adds X to board
                    element.textContent = "X";
                    element.classList.add("square", "X");
                    //appends X array
                    gameTrackX.push(i);
                    //checks to see if they are a winner or not
                    stat = winner(display, gameTrackX, "X", turn);
                }else{
                    //adds O to board
                    element.textContent = "0";
                    element.classList.add("square", "O");
                    //appends O array
                    gameTrackO.push(i);
                    //checks to see if they are a winner or not
                    stat = winner(display, gameTrackO, "O", turn);
                }
                //increment the turn counter
                turn++;
            }
        });

        //checks to see if the reset button was clicked
        reset.addEventListener("click", function(){
            stat = false;
            element.textContent = "";
            //reset the turn counter to 0
            turn = 0;
            //reset the X and O game tracker arrays
            gameTrackX = [];
            gameTrackO = [];
            //Displays the original start of game text
            display.textContent = "Move your mouse over a square and click to play an X or an O. Let's start with X";
            //removes class that was added
            display.classList.remove("status", "you-won");
            //removes all of the Xs and Os
            element.classList.remove("X");
            element.classList.remove("O");
            display.classList.add("status");  
        });  
    }

});

//THis function is used to check if there was a winner, draw and determine whose turn it is
function winner(dpy, gameTrack, ltr, turn){
    //array stores and the possible winning combinations
    let winMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    //loops through all the winning moves
    for (let i = 0; i < winMoves.length; i++){
        let move1 = winMoves[i][0];
        let move2 = winMoves[i][1];
        let move3 = winMoves[i][2];

        //checks each combination to see if it was included in the X or O array. If it is then they win.
        if (gameTrack.includes(move1) && gameTrack.includes(move2) && gameTrack.includes(move3)){
            dpy.textContent = "Congratulations! " + ltr + " is the Winner!";
            dpy.classList.add("status", "you-won");
            return true;
        }
    }

    //Checks to see if there was a draw. A draw occurs when one player playes 5 times without them winning
    if(gameTrack.length == 5){
        dpy.textContent = "Seems like there was a draw. Start a new game so we can find the real winner!";
        dpy.classList.add("status", "draw");
        return true;
    }

    //Tells the user who's play it is based on the turn counter
    if (turn % 2 == 1){
        dpy.textContent = "X's Play"
    }else if (turn % 2 == 0){
        dpy.textContent = "O's Play"
    }

    return false;

}