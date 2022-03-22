import Grid from "./Grid.js";
import Cell from "./Cell.js";
import Tile from "./Tile.js";
import {determineTouchDirection,
        handlerInput} from "./InputHandler.js";
import {setRangeBubble} from "./Settings.js";


const main = document.getElementById("main");
export const gameBoard = document.getElementById("game-board");
const rangeInput = document.getElementById('rangeInput');
const openSettingsButton = document.getElementById('openSettings');
const closeSettingsButton = document.getElementById('closeSettings');
const tapToStart = document.getElementById('tapToStart');
const settingsBoard = document.getElementById('settings-board');
const score = document.getElementById("score");
const hiddenClass = "hidden";

export const grid = new Grid(gameBoard);



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
  tapToStart.classList.toggle(hiddenClass);
  main.classList.toggle(hiddenClass);
  score.classList.toggle(hiddenClass);
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
    grid.randomEmptyCell().tile = new Tile(gameBoard);
    grid.randomEmptyCell().tile = new Tile(gameBoard);
    setupInput();
  }
});



export const setupInput = () => {
  window.addEventListener("keydown", handlerInput, {once: true});
}

export var touches = [[], []];

gameBoard.addEventListener("touchstart", function (ev) {
  touches[0].push(ev.changedTouches[0].screenX);
  touches[1].push(ev.changedTouches[0].screenY);
})

gameBoard.addEventListener("touchend", function (ev) {
  touches[0].push(ev.changedTouches[0].screenX);
  touches[1].push(ev.changedTouches[0].screenY);
  const direction = determineTouchDirection(touches);
  handlerInput(direction);
})
