const CANAVAS_BORDER_COLOUR = "black";
const CANVAS_BACKGROUND_COLOUR = "white";
const SNAKE_COLOUR = 'lightgreen'
const SNAKE_BORDER_COLOUR = 'darkgreen';

var gameCanvas = document.getElementById("gameCanvas");
var gameScreen = gameCanvas.getContext("2d");

let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150}
];

gameScreen.fillStyle = CANVAS_BACKGROUND_COLOUR;
gameScreen.strokestyle = CANVAS_BORDER_COLOUR;

gameScreen.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
gameScreen.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);


drawSnake();

function drawSnake() {
  snake.forEach(drawSnakePart)
}


function drawSnakePart(snakePart) {
  gameScreen.fillStyle = SNAKE_COLOUR;
  gameScreen.strokestyle = SNAKE_BORDER_COLOUR;

  gameScreen.fillRect(snakePart.x, snakePart.y, 10, 10);
  gameScreen.strokeRect(snakePart.x,snakePart.y, 10, 10);
}
