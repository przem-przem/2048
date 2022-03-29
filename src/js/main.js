const darktheme = document.querySelector("#darktheme");
const main = document.getElementById("main");
const title = document.getElementById("title"); const gameBoard = document.getElementById("game-board");
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
const maxtile = document.getElementById("maxtile");
const navData = document.getElementById("nav__data");
const tile = document.getElementById("tile");
const endGameBoard = document.getElementById("endgame__board");
const endGameTitle = document.getElementById("endgame__title");
const endgameScore = document.getElementById("endgame__score");
const hiddenClass = "hidden";

 let grid = '';

 let gridSize = 4;
 let cellSize;
 if (window.screen.width > 1024){
   cellSize = 15;
 } else {
   cellSize = 18;
 }
 let baseNumber = 2;
 let MAX_TILE = 0;
 let maxCellFactor = 1;





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


darkModeToggle.addEventListener("click", function (){
  if (darktheme.getAttribute("href") == "./css/darkmode.css"){
    darktheme.href = "";
  } else {
    darktheme.href = "./css/darkmode.css";
  }
});




/* Listen for keydown events and then invoke handlerInput function */
 const setupInput = () => {
  window.addEventListener("keydown", handlerInput, {once: true});
}

/* Define array that tracks XY coordinates of touchstart and touchend events */
 var touches = [[], []];


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










/*************************************************************************** CELL ***************************************************************************/







 let SCORE = 0;
const scoreElement = document.getElementById("score");

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
     MAX_TILE = Math.max(MAX_TILE, this.tile.value);
    maxtile.innerHTML = `Max tile: ${MAX_TILE}`;
    if (typeof this.tile.value == "number"){
      updateScore(this.tile.value);
      updateMaxtile();
    }

    if (this.tile.value == 1024 * baseNumber * maxCellFactor){
      endGame(true);
    }

    this.mergeTile.remove();
    this.mergeTile = null;

  }
}



const updateScore = value => {
  SCORE = SCORE + value;
  scoreElement.innerHTML = `Score:  ${SCORE}`;
}

const updateMaxtile = () => {

}










/*************************************************************************** ENDGAME HANDLER ***************************************************************************/








 const endGame = outcome => {

  if(outcome) {
    endGameTitle.innerHTML = "You win :)";
  } else {
    endGameTitle.innerHTML = "You lose :(";
  }

  endGameBoard.classList.remove(hiddenClass);
  endgameScore.innerHTML = `Your score:  ${SCORE}`;

}

 const endGameScoreUpdate = () => {
    endgameScore.innerHTML = `Your score:  ${SCORE}`;
}








/*************************************************************************** GRID ***************************************************************************/



const cellGap = 2;



  class Grid {
  #cells


  constructor(gridElement, gridSize) {

    gridElement.style.setProperty("--grid-size", gridSize);
    gridElement.style.setProperty("--cell-size", `${cellSize}vmin`);
    gridElement.style.setProperty("--cell-gap", `${cellGap}vmin`);


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
    cell.setAttribute("id", "cell");
    cells.push(cell);
    gridElement.append(cell);

  }
  return cells;
}












/*************************************************************************** INPUT HANDLER ***************************************************************************/








 const determineTouchDirection = () => {

  /* Distance in X direction */
  const distanceX = touches[0][1] - touches [0][0];
  console.log(`X1: ${touches[0][0]}, X2: ${touches[0][1]}`)
  console.log(distanceX);

  /* Distance in Y direction */
  const distanceY = touches[1][1] - touches [1][0];
  console.log(`Y1: ${touches[1][0]}, Y2: ${touches[1][1]}`)
  console.log(distanceY);


  /* if Y distance is bigger than X distance, then vertical direction */
  if (Math.abs(distanceX) > Math.abs(distanceY)){

    if (distanceX > 0) return "ArrowRight";
    else return "ArrowLeft";

  } else {

    if (distanceY > 0) return "ArrowDown";
    else return "ArrowUp";

  }

}


 const handlerInput = async e => {

  let direction;

  if (typeof e == "object"){
    direction = e.key;
  } else if (typeof e == "string"){
    direction = e;
  }

  switch (direction){
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

  if (!(endGameBoard.classList.contains(hiddenClass))){
    endGameScoreUpdate();
    return;
  }

  const newTile = new Tile(gameBoard);
  MAX_TILE = Math.max(MAX_TILE, newTile.value);
  maxtile.innerHTML = `Max tile: ${MAX_TILE}`;
  grid.randomEmptyCell().tile = newTile;

  touches[0].length = 0;
  touches[1].length = 1;


  if(!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()){
    newTile.waitForTransition(true).then(() => {
      endGame(false);
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







/*************************************************************************** SETTINGS ***************************************************************************/




 const setRangeBubble = () => {

  bubble.innerHTML = rangeInput.value;
  const calcPositionX = (rangeInput.offsetWidth / 10) * rangeInput.value - (rangeInput.offsetWidth / 10) + 4;
  bubble.style.left = `${calcPositionX}px`;
}






/*************************************************************************** TILE ***************************************************************************/

const tileColors = ['#a7d0cd', '#b8c0b8', '#bfb2a7', '#c1a49a', '#bf988f', '#b98c86', '#b18180', '#a7787c', '#9a6f7a', '#8c6779', '#7b6079']




  class Tile {
  #tileElement
  #x
  #y
  #value

  constructor (tileContainer, value = Math.random() > 0.5 ? baseNumber : baseNumber * 2){
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    this.#tileElement.setAttribute("id", "tile");
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
    const index = Math.floor(power);
    this.#tileElement.style.setProperty(
      "background-color",
      tileColors[index-1]
    );
    if (index >= 8){
      this.#tileElement.style.setProperty(
       "color",
        "#F5F5F5"
      );
    }
    if (gridSize == 3){
      this.#tileElement.style.setProperty("border-radius", "8vmin");
      this.#tileElement.style.setProperty("font-size", "6vmin");
    } else if (gridSize == 4){
      this.#tileElement.style.setProperty("border-radius", "6vmin");
      this.#tileElement.style.setProperty("font-size", "5vmin");
    } else if (gridSize == 5){
      this.#tileElement.style.setProperty("border-radius", "5vmin");
      this.#tileElement.style.setProperty("font-size", "4vmin");
    }

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
