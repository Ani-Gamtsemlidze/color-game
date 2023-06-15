let square = document.getElementsByClassName("square");

const reset = document.querySelector("#reset");

const easyButton = document.querySelector(".easy-mode");
const hardButton = document.querySelector(".hard-mode");
const container = document.querySelector("#container");

function randomColorGenerate(numberOfBoxes) {
  for (let i = 0; i < numberOfBoxes; i++) {
    let randomColor1 = Math.trunc(Math.random() * 255);
    let randomColor2 = Math.trunc(Math.random() * 255);
    let randomColor3 = Math.trunc(Math.random() * 255);
    let rgbColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    console.log(rgbColor);
    square[i].style.backgroundColor = rgbColor;
  }
}
randomColorGenerate(9);

// reset game
reset.addEventListener("click", function () {
  randomColorGenerate(9);
});

// change easy game
easyButton.addEventListener("click", function () {
  hardButton.classList.remove("selected");
  this.classList.add("selected");
  container.classList.add("easy");
  randomColorGenerate(6);
});

// change hard game
hardButton.addEventListener("click", function () {
  easyButton.classList.remove("selected");
  this.classList.add("selected");
  container.classList.remove("easy");
  randomColorGenerate(9);
});
