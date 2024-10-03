const CANAVAS_BORDER_COLOUR = "black";
const CANVAS_BACKGROUND_COLOUR = "white";

const gameCanvas = document.getElementById("gameCanvas");

const gameScreen = gameCanvas.getContext("2d");

gameScreen.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

function clearCanvas() {

    gameScreen.fillStyle = CANVAS_BACKGROUND_COLOUR;
    gameScreen.strokestyle = CANVAS_BORDER_COLOUR;

    gameScreen.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameScreen.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
  }