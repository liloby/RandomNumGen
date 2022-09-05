const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
// const add = document.querySelector('.add')
// const resetCount = document.querySelector('.reset')
// const sub = document.querySelector('.subtract')

buttons.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("add")) {
    count.innerHTML++;
  }

  if (evt.target.classList.contains("subtract")) {
    count.innerHTML--;
  }

  if (evt.target.classList.contains("reset")) {
    count.innerHTML = 0;
  }
  count.innerHTML < 0
    ? (count.style.color = "orangered")
    : count.innerHTML > 0
    ? (count.style.color = "yellow")
    : (count.style.color = "white");
});

// add.addEventListener('click', () => {
//     count.innerHTML++
// })
// sub.addEventListener('click', () => {
//     count.innerHTML--
// })
// resetCount.addEventListener('click', () => {
//     count.innerHTML = 0
// })
