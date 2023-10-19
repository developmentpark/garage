const cardEl = document.querySelector(".card");
const counterEl = document.querySelector(".counter");

document.addEventListener("DOMContentLoaded", () => {
  clock(20, 100, (counter) => {
    counterEl.textContent = `${counter}%`;
  });
  cardEl.classList.add("blurry");
});
