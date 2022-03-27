import Grid from "./Grid.js";
import Cell from "./Cell.js";
import Tile from "./Tile.js";
import {determineTouchDirection,
        handlerInput} from "./InputHandler.js";
import {setRangeBubble} from "./Settings.js";



const main = document.getElementById("main");
export const gameBoard = document.getElementById("game-board");
const radioGridButtons = Array.from(document.querySelectorAll('input[name="gridSize"]'));
const baseNumberInput = Array.from(document.querySelectorAll('input[name="baseNumber"]'));
const rangeInput = document.getElementById('rangeInput');
const bubble = document.getElementById('rangeBubble');
const openSettingsButton = document.getElementById('openSettings');
const closeSettingsButton = document.getElementById('closeSettings');
const tapToStart = document.getElementById('tapToStart');
const settingsBoard = document.getElementById('settings-board');
const starterBoard = document.getElementById('starter-board');
const score = document.getElementById("score");
export const tile = document.getElementById("tile");
const hiddenClass = "hidden";

export let grid = '';

export let gridSize = 4;
export let cellSize = 15;
export let baseNumber = 2;




/* Open settings board */
openSettingsButton.addEventListener("click", function () {
  settingsBoard.classList.toggle(hiddenClass);
  tapToStart.classList.toggle(hiddenClass);
  openSettingsButton.classList.toggle(hiddenClass);
  setRangeBubble();
});

/* Close settings board */
closeSettingsButton.addEventListener("click", function () {
  settingsBoard.classList.toggle(hiddenClass);
  tapToStart.classList.toggle(hiddenClass);
  openSettingsButton.classList.toggle(hiddenClass);
})

/* Start the game when clicking */
tapToStart.addEventListener("click", function () {
  openSettingsButton.classList.toggle(hiddenClass);
  starterBoard.classList.toggle(hiddenClass);
  tapToStart.classList.toggle(hiddenClass);
  main.classList.toggle(hiddenClass);
  score.classList.toggle(hiddenClass);
  grid = new Grid(gameBoard, gridSize);
  grid.randomEmptyCell().tile = new Tile(gameBoard);
  grid.randomEmptyCell().tile = new Tile(gameBoard);
  setupInput();
})


/* Starts the game when pressing Space button */
window.addEventListener("keyup", e => {
  if (e.code == "Space" || e.code == "Enter"){
    openSettingsButton.classList.toggle(hiddenClass);
    tapToStart.classList.toggle(hiddenClass);
    main.classList.toggle(hiddenClass);
    score.classList.toggle(hiddenClass);
    grid = new Grid(gameBoard);
    grid.randomEmptyCell().tile = new Tile(gameBoard);
    grid.randomEmptyCell().tile = new Tile(gameBoard);
    setupInput();
  }
});


/* Update value and move slider thumb */
rangeInput.addEventListener("input", ()=>{
    bubble.innerHTML = rangeInput.value;
    const calcPositionX1 = rangeInput.offsetWidth / 10 * rangeInput.value - rangeInput.offsetWidth / 10 + 4;
    bubble.style.left = `${calcPositionX1}px`;
});


/* Handle grid size input */
for (let radio of radioGridButtons){
  radio.addEventListener("click", e => {
    gridSize = radio.value;
    if (radio.value == 3){
      gridSize = 3;
      cellSize = 18;
    } else if (radio.value == 4){
      gridSize = 4;
      cellSize = 15;
    } else if (radio.value == 5){
      gridSize = 5;
      cellSize = 11;
    }
  });
}


for (let number of baseNumberInput){
  number.addEventListener("input", e => {
    baseNumber = parseInt(number.value);
})}



/* Listen for keydown events and then invoke handlerInput function */
export const setupInput = () => {
  window.addEventListener("keydown", handlerInput, {once: true});
}

/* Define array that tracks XY coordinates of touchstart and touchend events */
export var touches = [[], []];

/* Push XY coordinates of touchstart event */
gameBoard.addEventListener("touchstart", function (ev) {
  touches[0].push(ev.changedTouches[0].screenX);
  touches[1].push(ev.changedTouches[0].screenY);
})

/* Push XY coordinates of touchend event, determine direction and invoke handlerInput function */
gameBoard.addEventListener("touchend", function (ev) {
  touches[0].push(ev.changedTouches[0].screenX);
  touches[1].push(ev.changedTouches[0].screenY);
  const direction = determineTouchDirection(touches);
  handlerInput(direction);
})
