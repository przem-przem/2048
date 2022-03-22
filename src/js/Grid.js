import Cell from "./Cell.js";


const CELL_SIZE = 15;
const CELL_GAP = 2;



export default class Grid {
  #cells


  constructor(gridElement, gridSize) {

    gridElement.style.setProperty("--grid-size", gridSize);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);


    /* Creates the array of cell divs and maps into array of Cell objects */
    this.#cells = createCellElement(gridElement, gridSize)
      .map((el, index) => {
        return new Cell(
          el,
          index % gridSize,
          Math.floor(index / gridSize));
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


const createCellElement = (gridElement, gridSize) => {
  const cells = [];

  for (let i = 0; i < gridSize * gridSize; i++) {

    const cell = document.createElement("div");
    cell.classList.add("cell");
    cells.push(cell);
    gridElement.append(cell);

  }
  return cells;
}
