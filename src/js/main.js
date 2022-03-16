import Grid from "./Grid.js";
import Cell from "./Cell.js";
import Tile from "./Tile.js";
import {determineTouchDirection,
        handlerInput} from "./InputHandler.js";



export const gameBoard = document.getElementById("game-board");



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




export const grid = new Grid(gameBoard);



grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);


setupInput();
