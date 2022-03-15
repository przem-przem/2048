const tileColors = ['#a7d0cd', '#b8c0b8', '#bfb2a7', '#c1a49a', '#bf988f', '#b98c86', '#b18180', '#a7787c', '#9a6f7a', '#8c6779', '#7b6079']


export default class Tile {
  #tileElement
  #x
  #y
  #value

  constructor (tileContainer, value = Math.random() > 0.5 ? 3 : 6){
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
