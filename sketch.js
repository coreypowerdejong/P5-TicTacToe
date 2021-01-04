const players = ['x', 'o'];
let currentPlayer;
let g;
const gridWidth = 500;

function setup() {
  createCanvas(800, 500);
  currentPlayer = players[Math.floor(random() * players.length)];
  g = new grid(gridWidth);
}

function draw() {
  background(220);
  g.draw();
  textSize(gridWidth / 12);
  textAlign(LEFT, TOP);
  text("Current player:", gridWidth + 10, gridWidth / 8);
  text(currentPlayer.toUpperCase(), gridWidth + gridWidth / 4, gridWidth / 4)
}

function mouseClicked() {
  g.click();
}