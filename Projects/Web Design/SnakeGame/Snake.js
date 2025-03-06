/** CONSTANTS **/
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 }
]


// Get the canvas element
var gameCanvas = document.getElementById("gameCanvas");

// Return a two dimensional drawing context
var gamScreen = gameCanvas.getContext("2d");

//  Select the colour to fill the canvas
gamScreen.fillStyle = CANVAS_BACKGROUND_COLOUR;
//  Select the colour for the border of the canvas
gamScreen.strokestyle = CANVAS_BORDER_COLOUR;

// Draw a "filled" rectangle to cover the entire canvas
gamScreen.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
// Draw a "border" around the entire canvas
gamScreen.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

drawSnake();

/**
 * Draws the snake on the canvas
 */
function drawSnake() {
  // loop through the snake parts drawing each part on the canvas
  snake.forEach(drawSnakePart)
}

/**
 * Draws a part of the snake on the canvas
 * @param { object } snakePart - The coordinates where the part should be drawn
 */
function drawSnakePart(snakePart) {
  // Set the colour of the snake part
  gamScreen.fillStyle = SNAKE_COLOUR;

  // Set the border colour of the snake part
  gamScreen.strokestyle = SNAKE_BORDER_COLOUR;

  // Draw a "filled" rectangle to represent the snake part at the coordinates
  // the part is located
  gamScreen.fillRect(snakePart.x, snakePart.y, 10, 10);

  // Draw a border around the snake part
  gamScreen.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
