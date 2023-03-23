// box variables
const box = document.querySelector(".box");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box2b = document.querySelector(".box2b");
const box3b = document.querySelector(".box3b");
const box4b = document.querySelector(".box4b");
const box5b = document.querySelector(".box5b");
const box6b = document.querySelector(".box6b");
const box7b = document.querySelector(".box7b");
const continueOn = document.querySelector(".continueOn");
const chamber = document.querySelector(".chamber");
const fightVamp = document.querySelector(".fightVamp");
const slayVamp = document.querySelector("#slayVamp");
const run = document.querySelector(".run");
const lose = document.querySelector(".lose");
const loseAgain = document.querySelector(".loseAgain");
const lose3 = document.querySelector(".lose3");

// buttons
const reset = document.querySelectorAll(".reset");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn10 = document.querySelector("#btn10");
const btn11 = document.querySelector("#btn11");
const btn12 = document.querySelector("#btn12");
const btn2b = document.querySelector("#btn2b");
const btn3b = document.querySelector("#btn3b");
const btn4b = document.querySelector("#btn4b");
const btn5b = document.querySelector("#btn5b");
const btn4b2 = document.querySelector(".btn4b2");
const search = document.querySelector("#search");
const fleeUp = document.querySelector("#fleeUp");
const dawnBreaker = document.querySelector("#dawnBreaker");

const refreshPage = () => {
  location.reload();
};

reset.forEach((reset) => reset.addEventListener("click", refreshPage));

btn1.addEventListener("click", function enter() {
  box2.classList.toggle("boxSlide");
  box.classList.toggle("boxSlideAway");
});

btn3.addEventListener("click", function enter() {
  box3.classList.toggle("boxSlide");
  box2.classList.toggle("boxSlideAway");
});

btn5.addEventListener("click", function enter() {
  box4.classList.toggle("boxSlide");
  box3.classList.toggle("boxSlideAway");
});

btn6.addEventListener("click", function enter() {
  box5.classList.toggle("boxSlide");
  box4.classList.toggle("boxSlideAway");
});

btn8.addEventListener("click", function enter() {
  box6.classList.toggle("boxSlide");
  box5.classList.toggle("boxSlideAway");
});

btn11.addEventListener("click", function enter() {
  box7.classList.toggle("boxSlide");
  box6.classList.toggle("boxSlideAway");
});

btn12.addEventListener("click", function enter() {
  box8.classList.toggle("boxSlide");
  box7.classList.toggle("boxSlideAway");
});

btn2.addEventListener("click", function enter() {
  box2b.classList.toggle("boxSlide");
  box2.classList.toggle("boxSlideAway");
});

btn3b.addEventListener("click", function enter() {
  box3b.classList.toggle("boxSlide");
  box2b.classList.toggle("boxSlideAway");
});

btn4b.addEventListener("click", function enter() {
  box4b.classList.toggle("boxSlide");
  box3b.classList.toggle("boxSlideAway");
});

btn5b.addEventListener("click", function enter() {
  box5b.classList.toggle("boxSlide");
  box4b.classList.toggle("boxSlideAway");
});

btn4.addEventListener("click", function enter() {
  box6b.classList.toggle("boxSlide");
  box3.classList.toggle("boxSlideAway");
});

btn4b2.addEventListener("click", function enter() {
  box7b.classList.toggle("boxSlide");
  box4b.classList.toggle("boxSlideAway");
});

btn2b.addEventListener("click", function enter() {
  continueOn.classList.toggle("boxSlide");
  box2b.classList.toggle("boxSlideAway");
});

search.addEventListener("click", function enter() {
  fightVamp.classList.toggle("boxSlide");
  continueOn.classList.toggle("boxSlideAway");
});

slayVamp.addEventListener("click", function enter() {
  box8.classList.toggle("boxSlide");
  fightVamp.classList.toggle("boxSlideAway");
});

btn7.addEventListener("click", function enter() {
  run.classList.toggle("boxSlide");
  box4.classList.toggle("boxSlideAway");
});

btn9.addEventListener("click", function enter() {
  lose.classList.toggle("boxSlide");
  box5.classList.toggle("boxSlideAway");
});

btn10.addEventListener("click", function enter() {
  loseAgain.classList.toggle("boxSlide");
  box6.classList.toggle("boxSlideAway");
});

fleeUp.addEventListener("click", function enter() {
  lose3.classList.toggle("boxSlide");
  continueOn.classList.toggle("boxSlideAway");
});
