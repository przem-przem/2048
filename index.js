const GRID_SIZE = 4;
const CELL_SIZE = 20;
const CELL_GAP = 2;

const gameBoard = document.getElementById("game-board");

console.log(gameBoard);





class Grid {
  #cells

  constructor(gridElement) {

    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);

    /* Creates the array of cell divs and maps into array of Cell objects */
    this.#cells = createCellElement(gridElement)
      .map((el, index) => {
        return new Cell(
          el,
          index % GRID_SIZE,
          Math.floor(index / GRID_SIZE));
      })

  }

  get cellsByColumn() {
    return this.#cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || []
      cellGrid[cell.x][cell.y] = cell;
      return cellGrid;
    }, [])
  }

  get cellsByRow() {
    return this.#cells.reduce((cellGrid, cell) => {
      cellGrid[cell.y] = cellGrid[cell.y] || []
      cellGrid[cell.y][cell.x] = cell;
      return cellGrid;
    }, [])
  }

  get cells() {
    return this.#cells;
  }

  get #emptyCells() {
    return this.#cells.filter(cell => cell.tile == null);
  }

  randomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * this.#emptyCells.length);
    return this.#emptyCells[randomIndex];
  }
}







class Cell {
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

  mergeTiles() {
    if(this.mergeTile == null || this.tile == null) return;
    this.tile.value = this.tile.value + this.mergeTile.value;
    this.mergeTile.remove();
    this.mergeTile = null;
  }
}





class Tile {
  #tileElement
  #x
  #y
  #value

  constructor (tileContainer, value = Math.random() > 0.5 ? 2 : 4){
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    tileContainer.append(this.#tileElement);
    this.value = value;
  }


  set x (position){
    this.#x = position
    this.#tileElement.style.setProperty("--x", position);
  }


  set y (position){
    this.#y = position
    this.#tileElement.style.setProperty("--y", position);
  }

  get value (){
    return this.#value;
  }


  set value (v) {
    this.#value = v;
    this.#tileElement.textContent = v;
    const power = Math.log2(v);
    const backgroundLightness = 100 - power * 9;
    this.#tileElement.style.setProperty(
      "--background-lightness",
      `${backgroundLightness}%`
    );
    this.#tileElement.style.setProperty(
      "--text-lightness",
      `${backgroundLightness <= 50 ? 90 : 10}%`
    );
  }

  remove() {
    this.#tileElement.remove();
  }

  waitForTransition(animation = false) {
    return new Promise(resolve => {
      this.#tileElement.addEventListener(
        animation ? "animationend" : "transitionend",
        resolve, {
        once: true,
      })
    })
  }

}





const createCellElement = gridElement => {
  const cells = [];

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {

    const cell = document.createElement("div");
    cell.classList.add("cell");
    cells.push(cell);
    gridElement.append(cell);

  }
  return cells;
}



const setupInput = () => {
  window.addEventListener("keydown", handlerInput, {once: true});
}

const handlerInput = async e => {
  switch (e.key){
    case "ArrowUp":
    if (!canMoveUp()){
      setupInput();
      return;
    }
      await moveUp();
      break;

    case "ArrowDown":
    if (!canMoveDown()){
      setupInput();
      return;
    }
      await moveDown();
      break;

    case "ArrowLeft":
    if (!canMoveLeft()){
      setupInput();
      return;
    }
      await moveLeft();
      break;

    case "ArrowRight":
    if (!canMoveRight()){
      setupInput();
      return;
    }
      await moveRight();
      break;

    default:
      setupInput();
      return;
  }

  grid.cells.forEach(cell => cell.mergeTiles());
  const newTile = new Tile(gameBoard);
  grid.randomEmptyCell().tile = newTile;

  if(!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()){
    newTile.waitForTransition(true).then(() => {
      alert("You lose");
    })
  } else {
    setupInput();
  }

}



const moveUp = () => {
  slideTiles(grid.cellsByColumn);
}

const moveLeft = () => {
  slideTiles(grid.cellsByRow);
}

const moveDown = () => {
  slideTiles(grid.cellsByColumn.map(column => [...column].reverse()));
}

const moveRight = () => {
  slideTiles(grid.cellsByRow.map(row => [...row].reverse()));
}





const slideTiles = (cells) => {
  return Promise.all(
  cells.flatMap(group => {
    const promises = [];
    for (let i = 1; i < group.length; i++) {
      const cell = group[i];
      if (cell.tile == null) continue;
      let lastValidCell;
      for (let j = i - 1; j >= 0; j--){
        const moveToCell = group[j];
        if (!moveToCell.canAccept(cell.tile)) break;
        lastValidCell = moveToCell;
      }

      if (lastValidCell != null){
        promises.push(cell.tile.waitForTransition());
        if (lastValidCell.tile != null){
          lastValidCell.mergeTile = cell.tile;
        } else {
          lastValidCell.tile = cell.tile;
        }
        cell.tile = null;
      }
    }
    return promises;
  }))
}


const canMoveUp = () => {
  return canMove(grid.cellsByColumn);
}

const canMoveDown = () => {
  return canMove(grid.cellsByColumn.map(column => [...column].reverse()));
}

const canMoveLeft = () => {
  return canMove(grid.cellsByRow);
}

const canMoveRight = () => {
  return canMove(grid.cellsByRow.map(row => [...row].reverse()));
}

const canMove = cells => {
  return cells.some(group => {
    return group.some((cell, index) => {
      if(index == 0) return false;
      if (cell.tile == null) return false;
      const moveToCell = group[index - 1];
      return moveToCell.canAccept(cell.tile);
    })
  })
}



const grid = new Grid(gameBoard);

console.log(grid.randomEmptyCell());

grid.randomEmptyCell().tile = new Tile (gameBoard);
grid.randomEmptyCell().tile = new Tile (gameBoard);
console.log(grid.cellsByColumn);

setupInput();
