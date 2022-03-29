import {endGameBoard, endGameTitle, endgameScore, hiddenClass} from "./main";
import {SCORE} from "./Cell";

export const endGame = outcome => {

  if(outcome) {
    endGameTitle.innerHTML = "You win :)";
  } else {
    endGameTitle.innerHTML = "You lose :(";
  }

  endGameBoard.classList.remove(hiddenClass);
  endgameScore.innerHTML = `Your score:  ${SCORE}`;

}

export const endGameScoreUpdate = () => {
    endgameScore.innerHTML = `Your score:  ${SCORE}`;
}
