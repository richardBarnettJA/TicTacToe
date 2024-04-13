# TicTacToe

This project is a simple tic-tac-toe which allows two users
 to play with each other, one being X and the other being O.

It allows players to see who won, or if it was a draw and
 also play again

This uses basic html, css and javascript to for the entire
 webpage.

In the html file the gameboard is created using a series of 9
 divs which are then formatted, arranged and styled using
  flexbox and other mechanisms.

Javascript is used for the functionality and knows whose turn
 it is by incrementing a counter and then using mod 2 to see
  if it returns 0, for X, or 1, for O.

It also loops through all the divs that make up the gameboard
 using a for loop in order to add event listeners to each one
  to choose which one gets the X or O.

There is also an array for both X and O which is appended
 with the number of the square on the board when that square
  is clicked. This is important to check is the user has one
   or not.

To see who wins there is an array of arrays which has the
 position of all the posible combinations in which someone
  can win. From there, we can see if the X or O array
   includes any of those combinations, and if they do, they win.

To reset the board, all that is done is removing all of the
 text that was added to the divs and resetting the counter to 0