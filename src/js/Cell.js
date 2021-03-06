import {endGame} from "./EndgameHandler";
import {title, baseNumber, maxtile, maxCellFactor} from "./main";
import {MAX_TILE} from "./InputHandler";

export let SCORE = 0;
const scoreElement = document.getElementById("score");

export default class Cell {
  #cellElement
  #x
  #y
  #tile
  #mergeTile

  constructor(cellElement, x, y) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  get tile(){
    return this.#tile;
  }

  get mergeTile() {
    return this.#mergeTile;
  }

  set mergeTile(value) {
    this.#mergeTile = value;
    if (value == null) return;
    this.#mergeTile.x = this.#x;
    this.#mergeTile.y = this.#y;
  }

  set tile (value){
    this.#tile = value;
    if (value == null) return;
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
  }

  canAccept(tile) {
    return (this.tile == null ||
      (this.mergeTile == null && this.tile.value === tile.value));
  }

  mergeTiles(maxTileValue) {
    if(this.mergeTile == null || this.tile == null) return;
    this.tile.value = this.tile.value + this.mergeTile.value;
    let newMaxTileValue = Math.max(maxTileValue, this.tile.value);
    maxtile.innerHTML = `Max tile: ${newMaxTileValue}`;
    if (typeof this.tile.value == "number"){
      updateScore(this.tile.value);
    }

    if (this.tile.value == 1024 * baseNumber * maxCellFactor){
      endGame(true);
    }

    this.mergeTile.remove();
    this.mergeTile = null;

    return newMaxTileValue;

  }
}



const updateScore = value => {
  SCORE = SCORE + value;
  scoreElement.innerHTML = `Score:  ${SCORE}`;
}

const updateMaxtile = () => {

}
