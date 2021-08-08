let toggle = document.querySelector(".toggle");
let container = document.querySelector(".bookmark-container");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("hide");
  container.classList.toggle("close");
});
