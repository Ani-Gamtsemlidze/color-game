let square = document.getElementsByClassName("square");

const reset = document.querySelector("#reset");

const easyButton = document.querySelector(".easy-mode");
const hardButton = document.querySelector(".hard-mode");
const container = document.querySelector("#container");

let winningColor = null;

// generate random colors
function randomColorGenerate(numberOfBoxes) {
  let randomNumber = Math.trunc(Math.random() * numberOfBoxes);
  for (let i = 0; i < numberOfBoxes; i++) {
    let randomColor1 = Math.trunc(Math.random() * 255);
    let randomColor2 = Math.trunc(Math.random() * 255);
    let randomColor3 = Math.trunc(Math.random() * 255);
    let rgbColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    square[i].style.backgroundColor = rgbColor;
    square[i].setAttribute("color-id", rgbColor);

    if (randomNumber == i) {
      winningColor = rgbColor;
      document.querySelector("#color-display").innerHTML = winningColor;
    }
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

let gameStart = true;

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function () {
    if (gameStart) {
      let colorId = this.getAttribute("color-id");
      if (winningColor == colorId) {
        gameStart = false;
        hardButton.disabled = true;
        easyButton.disabled = true;

        reset.innerHTML = "Play AGAIN";
        reset.addEventListener("click", function () {
          gameStart = true;
          hardButton.disabled = false;
          easyButton.disabled = false;
          reset.innerHTML = "New Colors";
          document.querySelector("h1").style.backgroundColor = "#2c8e99";
        });

        sameColor(winningColor);
        // easyButton.addEventListener("click", function () {
        //   gameStart = false;
        // });
        // hardButton.addEventListener("click", function () {
        //   gameStart = false;
        // });
      } else {
        square[i].style.backgroundColor = "#232323";
      }
    }
  });
}

function sameColor(winnerColor) {
  document.querySelector("h1").style.backgroundColor = winnerColor;

  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = winnerColor;
  }
}
