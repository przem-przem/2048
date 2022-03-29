import {rangeInput, bubble, settingsBoard, tapToStart, openSettingsButton, hiddenClass} from "./main";


export const setRangeBubble = () => {

  bubble.innerHTML = rangeInput.value;
  const calcPositionX = (rangeInput.offsetWidth / 10) * rangeInput.value - (rangeInput.offsetWidth / 10) + 4;
  bubble.style.left = `${calcPositionX}px`;
}


export const toggleSettingBoard = () => {

  settingsBoard.classList.toggle(hiddenClass);
  tapToStart.classList.toggle(hiddenClass);
  openSettingsButton.classList.toggle(hiddenClass);

}
