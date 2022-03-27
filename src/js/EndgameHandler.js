import {endGameBoard, endgameScore} from "./main2.js";
import {SCORE} from "./Cell.js";

export const lostGame = () => {

  endGameBoard.classList.remove(hiddenClass);
  endgameScore.innerHTML = `Your score:  ${SCORE}`;

}
