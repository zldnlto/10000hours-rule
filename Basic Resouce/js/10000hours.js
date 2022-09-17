// js file

const goBtn = document.querySelector(".go");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector("#modal");

const HIDDEN_NAME = "hidden";

goBtn.addEventListener("click", onGoBtnClick);
closeBtn.addEventListener("click", onCloseBtnClick);

function onGoBtnClick(event) {
  modal.classList.remove(HIDDEN_NAME);
}

function onCloseBtnClick(event) {
  modal.classList.add(HIDDEN_NAME);
}
