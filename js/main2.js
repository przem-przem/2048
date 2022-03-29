import Grid from "./Grid.js";
import Cell from "./Cell.js";
import Tile from "./Tile.js";
import {determineTouchDirection,
        handlerInput} from "./InputHandler.js";
import {setRangeBubble} from "./Settings.js";



const darktheme = document.querySelector("#darktheme");
const main = document.getElementById("main");
export const title = document.getElementById("title");
export const gameBoard = document.getElementById("game-board");
const radioGridButtons = Array.from(document.querySelectorAll('input[name="gridSize"]'));
const baseNumberInput = Array.from(document.querySelectorAll('input[name="baseNumber"]'));
const darkModeToggle = document.getElementById("darkmode");
const rangeInput = document.getElementById('rangeInput');
const bubble = document.getElementById('rangeBubble');
const openSettingsButton = document.getElementById('openSettings');
const closeSettingsButton = document.getElementById('closeSettings');
const tapToStart = document.getElementById('tapToStart');
const settingsBoard = document.getElementById('settings-board');
const starterBoard = document.getElementById('starter-board');
const score = document.getElementById("score");
export const maxtile = document.getElementById("maxtile");
const navData = document.getElementById("nav__data");
export const tile = document.getElementById("tile");
export const endGameBoard = document.getElementById("endgame__board");
export const endGameTitle = document.getElementById("endgame__title");
export const endgameScore = document.getElementById("endgame__score");
export const hiddenClass = "hidden";

export let grid = '';

export let gridSize = 4;
export let cellSize = 15;
export let baseNumber = 2;
export let MAX_TILE = 0;
export let maxCellFactor = 1;



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
  navData.classList.toggle(hiddenClass);

  grid = new Grid(gameBoard, gridSize);
  let newTile = new Tile(gameBoard);
  MAX_TILE = newTile.value;
  grid.randomEmptyCell().tile = newTile;

  newTile = new Tile(gameBoard);
  MAX_TILE = Math.max(MAX_TILE, newTile.value);
  grid.randomEmptyCell().tile = newTile;
  maxtile.innerHTML = `Max tile: ${MAX_TILE}`;

  setupInput();
  mobileSetupInput();
})


/* Starts the game when pressing Space button */
window.addEventListener("keyup", e => {
  if (e.code == "Space" || e.code == "Enter"){
    openSettingsButton.classList.toggle(hiddenClass);
    tapToStart.classList.toggle(hiddenClass);
    main.classList.toggle(hiddenClass);
    navData.classList.toggle(hiddenClass);
    grid = new Grid(gameBoard, gridSize);
    grid.randomEmptyCell().tile = new Tile(gameBoard);
    grid.randomEmptyCell().tile = new Tile(gameBoard);
    setupInput();
    mobileSetupInput();
  }
});


/* Update value and move slider thumb */
rangeInput.addEventListener("input", ()=>{
    bubble.innerHTML = rangeInput.value;
    const calcPositionX1 = rangeInput.offsetWidth / 10 * rangeInput.value - rangeInput.offsetWidth / 10 + 4;
    bubble.style.left = `${calcPositionX1}px`;
    baseNumber = parseInt(rangeInput.value);
    title.innerHTML = 1024 * baseNumber * maxCellFactor;
});


/* Handle grid size input */
for (let radio of radioGridButtons){
  radio.addEventListener("click", e => {
    gridSize = radio.value;
    if (radio.value == 3){
      gridSize = 3;
      cellSize = 18;
      title.innerHTML = 1024 * baseNumber * maxCellFactor;
    } else if (radio.value == 4){
      gridSize = 4;
      cellSize = 15;
      title.innerHTML = 1024 * baseNumber * maxCellFactor;
    } else if (radio.value == 5){
      gridSize = 5;
      cellSize = 11;
      title.innerHTML = 1024 * baseNumber * maxCellFactor;
    }
  });
}


darkModeToggle.addEventListener("click", function (){
  if (darktheme.getAttribute("href") == "./css/darkmode.css"){
    darktheme.href = "";
  } else {
    darktheme.href = "./css/darkmode.css";
  }
});



/* Listen for keydown events and then invoke handlerInput function */
export const setupInput = () => {
  window.addEventListener("keydown", handlerInput, {once: true});
}

/* Define array that tracks XY coordinates of touchstart and touchend events */
export var touches = [[], []];


const mobileSetupInput = () => {
  /* Push XY coordinates of touchstart event */
  window.addEventListener("touchstart", function (ev) {
    touches[0].push(ev.changedTouches[0].screenX);
    touches[1].push(ev.changedTouches[0].screenY);
  }, {once: true})

  /* Push XY coordinates of touchend event, determine direction and invoke handlerInput function */
  window.addEventListener("touchend", function (ev) {
    touches[0].push(ev.changedTouches[0].screenX);
    touches[1].push(ev.changedTouches[0].screenY);
    const direction = determineTouchDirection(touches);
    handlerInput(direction);
  }, {once: true})
}
