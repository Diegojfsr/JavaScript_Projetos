const display = document.getElementById("display");
let number = document.getElementById("display").innerText;
number = parseInt(number);

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.addEventListener("click", () => {
  number += 1;
  display.textContent = `${number}`;
});

decrease.addEventListener("click", () => {
  number -= 1;
  display.textContent = `${number}`;
});

reset.addEventListener("click", () => {
  number = 0;
  display.textContent = `${number}`;
});
