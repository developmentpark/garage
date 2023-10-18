const nodes = document.querySelectorAll(".node");
const arcos = document.querySelectorAll(".arco");
let currentNode = 0;

function next() {
  if (!isNext()) {
    return;
  }
  currentNode++;
  nodes[currentNode].classList.add("current");
  arcos[currentNode - 1].classList.add("current");
}

function prev() {
  if (!isPrev()) {
    return;
  }
  nodes[currentNode].classList.remove("current");
  arcos[currentNode - 1].classList.remove("current");
  currentNode--;
}

function isNext() {
  return currentNode < nodes.length - 1;
}

function isPrev() {
  return currentNode > 0;
}

const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");

document.addEventListener("click", (ev) => {
  if (ev.target.matches(".button")) {
    if (ev.target.id === "prev-btn") {
      prev();
    } else if (ev.target.id === "next-btn") {
      next();
    }
    prevBtn.disabled = !isPrev() ? true : false;
    nextBtn.disabled = !isNext() ? true : false;
  }
});
