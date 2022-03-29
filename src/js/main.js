import Grid from "./Grid";
import Cell from "./Cell";
import Tile from "./Tile";
import {determineTouchDirection,
        handlerInput,
        gamestart} from "./InputHandler";
import {setRangeBubble, toggleSettingBoard} from "./Settings";
import {toggleDarkMode} from "./Darkmode";


export const body = document.getElementById("body");
export const nav = document.getElementById("nav");
const darktheme = document.querySelector("#darktheme");
export const main = document.getElementById("main");
export const title = document.getElementById("title");
export const gameBoard = document.getElementById("game-board");
const radioGridButtons = Array.from(document.querySelectorAll('input[name="gridSize"]'));
const baseNumberInput = Array.from(document.querySelectorAll('input[name="baseNumber"]'));
const darkModeToggle = document.getElementById("darkmode");
export const rangeInput = document.getElementById('rangeInput');
export const bubble = document.getElementById('rangeBubble');
export const openSettingsButton = document.getElementById('openSettings');
const closeSettingsButton = document.getElementById('closeSettings');
export const tapToStart = document.getElementById('tapToStart');
export const settingsBoard = document.getElementById('settings-board');
export const starterBoard = document.getElementById('starter-board');
const score = document.getElementById("score");
export const maxtile = document.getElementById("maxtile");
export const navData = document.getElementById("nav__data");
export const tile = document.getElementById("tile");
export const endGameBoard = document.getElementById("endgame__board");
export const endGameTitle = document.getElementById("endgame__title");
export const endgameScore = document.getElementById("endgame__score");
export const endgameButton = document.getElementById("endgame__button");

export const hiddenClass = "hidden";
export const backgroundDM = "background--dark-mode";
export const textDM = "text--dark-mode";
export const elevation1DM = "elevation1--dark-mode";
export const elevation2DM = "elevation2--dark-mode";

export let grid = '';

export let gridSize = 4;
export let cellSize = 15;
export let baseNumber = 2
export let maxCellFactor = 1;



/* Open settings board */
openSettingsButton.addEventListener("click", function () {
  toggleSettingBoard();
  setRangeBubble();
});


/* Close settings board */
closeSettingsButton.addEventListener("click", toggleSettingBoard);






/* Start the game when clicking */
tapToStart.addEventListener("click", function () {
  grid = gamestart();
  setupInput();
  mobileSetupInput();
})


/* Starts the game when pressing Space button */
window.addEventListener("keyup", e => {
  if (e.code == "Space" || e.code == "Enter"){
    gamestart();
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
      if (window.screen.width > 1024){
        cellSize = 18;
      } else {
        cellSize = 24;
      }
      maxCellFactor = 0.125;
      title.innerHTML = 1024 * baseNumber * maxCellFactor;
    } else if (radio.value == 4){
      gridSize = 4;
      if (window.screen.width > 1024){
        cellSize = 15;
      } else {
        cellSize = 18;
      }
      maxCellFactor = 1;
      title.innerHTML = 1024 * baseNumber * maxCellFactor;
    } else if (radio.value == 5){
      gridSize = 5;
      if (window.screen.width > 1024){
        cellSize = 11;
      } else {
        cellSize = 14;
      }
      maxCellFactor = 1;
      title.innerHTML = 1024 * baseNumber * maxCellFactor;
    }
  });
}


darkModeToggle.addEventListener("click", toggleDarkMode);



/* Listen for keydown events and then invoke handlerInput function */
export const setupInput = () => {
  window.addEventListener("keydown", handlerInput, {once: true});
}

/* Define array that tracks XY coordinates of touchstart and touchend events */
export var touches = [[], []];


const mobileSetupInput = () => {
  /* Push XY coordinates of touchstart event */
  window.addEventListener("touchstart", function (ev) {
    touches[0][0] = ev.changedTouches[0].screenX;
    touches[1][0] = ev.changedTouches[0].screenY;
  })

  /* Push XY coordinates of touchend event, determine direction and invoke handlerInput function */
  window.addEventListener("touchend", function (ev) {
    touches[0][1] = ev.changedTouches[0].screenX;
    touches[1][1] = ev.changedTouches[0].screenY;
    const direction = determineTouchDirection(touches);
    handlerInput(direction);
  })
}
