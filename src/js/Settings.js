const rangeInput = document.getElementById('rangeInput');
const bubble = document.getElementById('rangeBubble');




export const setRangeBubble = () => {

  bubble.innerHTML = rangeInput.value;
  const calcPositionX = (rangeInput.offsetWidth / 10) * rangeInput.value - (rangeInput.offsetWidth / 10) + 4;
  bubble.style.left = `${calcPositionX}px`;

}
