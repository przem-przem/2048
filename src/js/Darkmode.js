import {
  body,
  nav,
  gameBoard,
  starterBoard,
  settingsBoard,
  openSettingsButton,
  endGameBoard,
  endgameButton
} from "./main";
import {
  backgroundDM,
  textDM,
  elevation1DM,
  elevation2DM
} from "./main";


export const toggleDarkMode = () => {
  body.classList.toggle(backgroundDM);
  nav.classList.toggle(textDM);
  gameBoard.classList.toggle(elevation1DM);
  starterBoard.classList.toggle(textDM);
  settingsBoard.classList.toggle(elevation1DM);
  settingsBoard.classList.toggle(textDM);
  openSettingsButton.classList.toggle(textDM);
  endGameBoard.classList.toggle(elevation2DM);
  endGameBoard.classList.toggle(textDM);
  endgameButton.classList.toggle(elevation2DM);
  endgameButton.classList.toggle(textDM);
}
