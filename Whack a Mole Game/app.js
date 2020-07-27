const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
const grid = document.querySelector(".grid");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  console.log(randomPosition);
  randomPosition.classList.add("mole");

  //   assign the id of the randomPosition to hitPosition
  hitPositiion = randomPosition.id;
}

square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPositiion) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

moveMole();

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`GAME OVER! Your final scroe is ${result}`);
  }
}

let timerId = setInterval(countDown, 1000);
