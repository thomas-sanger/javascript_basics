/*

    Gamelet: A simple game engine for beginners
    Author: Thomas Sanger
    Version: 1.0

    Instructions:
    Include gamelet.js in an HTML document containing an element with the id "ball".
    The script will detect when the left or right arrow keys are pressed and move the ball accordingly.

*/

const ball = document.getElementsById("ball"); //get the ball element
document.addEventListener("keydown", handleKeyPress); //listen for key presses
let position = 0; //set initial position of the ball

/*
    handleKeyPress: Function to handle key presses
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }

  if (e.code === "ArrowRight") {
    position = position + 10;
  }

  if (position < 0) {
    position = 0;
  }

  refresh(); //reposition the ball
}

/*
    refresh: Function to reposition the ball
*/
function refresh() {
  ball.style.left = position + "px";
}
