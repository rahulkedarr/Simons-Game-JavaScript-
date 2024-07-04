let gameseq = [];
let userseq = [];
let btns = ["skyblue", "orange", "lightgreen", "lightcoral"];

let h2 = document.querySelector("h2");
let started = false;
let level = 0;
document.querySelector("body").classList = "image";
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randInx = Math.floor(Math.random() * 3);
  let randomColor = btns[randInx];
  let randBtn = document.querySelector(`.${randomColor}`);
  gameFlash(randBtn);
  gameseq.push(randomColor);
}

function checkPress(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerText = `Game Over. press any key to start`;
    document.querySelector("body").classList = "red";
    setTimeout(() => {
      document.querySelector("body").classList = "image";
    }, 100);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkPress(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
