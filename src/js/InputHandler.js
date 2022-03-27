import {grid, gameBoard, setupInput, touches} from "./main2.js";
import Grid from "./Grid.js";
import Tile from "./Tile.js";




export const determineTouchDirection = () => {

  /* Distance in X direction */
  const distanceX = touches[0][1] - touches [0][0];

  /* Distance in Y direction */
  const distanceY = touches[1][1] - touches [1][0];


  /* if Y distance is bigger than X distance, then vertical direction */
  if (Math.abs(distanceX) > Math.abs(distanceY)){

    if (distanceX > 0) return "ArrowRight";
    else return "ArrowLeft";

  } else {

    if (distanceY > 0) return "ArrowDown";
    else return "ArrowUp";

  }

}


export const handlerInput = async e => {

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
  const newTile = new Tile(gameBoard);
  grid.randomEmptyCell().tile = newTile;

  touches[0].length = 0;
  touches[1].length = 1;


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
    console.log(grid);
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
