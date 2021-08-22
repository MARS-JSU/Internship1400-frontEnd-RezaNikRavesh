let slideNumber = 1;
let btnBack = document.querySelector(".prev");
let btnForwadr = document.querySelector(".next");
let dots = document.querySelectorAll(".dot");
btnBack.addEventListener("click", previousSlide);
btnForwadr.addEventListener("click", nextSlide);

function nextSlide() {
  addAnimation();
  slideNumber++;
  showSlide(slideNumber);
}
function previousSlide() {
  addAnimation();
  slideNumber--;
  showSlide(slideNumber);
}
function activeDot(slideNumber) {
  for (const dot of dots) {
    dot.classList.remove("active");
  }
  dots[slideNumber - 1].classList.add("active");
}
function showSlide(slideIndex) {
  let slides = document.querySelectorAll(".slide");
  if (slideIndex > slides.length) {
    slideNumber = 1;
    slideIndex = slideNumber;
  }
  if (slideIndex < 1) {
    slideNumber = slides.length;
    slideIndex = slideNumber;
  }
  for (const slide of slides) slide.style.display = "none";

  slides[slideIndex - 1].style.display = "block";
  activeDot(slideIndex);
}
function dotClicked(className) {
  switch (className) {
    case "d-1":
      slideNumber = 1;
      showSlide(slideNumber);
      break;
    case "d-2":
      slideNumber = 2;
      showSlide(slideNumber);
      break;
    case "d-3":
      slideNumber = 3;
      showSlide(slideNumber);
      break;
    case "d-4":
      slideNumber = 4;
      showSlide(slideNumber);
      break;
    case "d-5":
      slideNumber = 5;
      showSlide(slideNumber);
      break;
    case "d-6":
      slideNumber = 6;
      showSlide(slideNumber);
      break;
  }
}
function addAnimation() {
  let slides = document.querySelectorAll(".slide");
  for (const slide of slides) {
    slide.classList.add("animate__fadeIn");
  }
}
for (const dot of dots) {
  dot.addEventListener("click", function () {
    dotClicked(dot.classList[1]);
  });
}
showSlide(slideNumber);
