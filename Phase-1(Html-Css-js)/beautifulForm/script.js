const container = document.querySelector(".container");
const title = document.querySelector(".overlay-container h2");
const text = document.querySelector(".overlay-container p");

const btn = document.querySelector(".overlay-container button");
btn.addEventListener("click", change);

function change() {
  container.classList.toggle("right-active-container");
  if (container.classList.contains("right-active-container")) {
    title.innerHTML = "Hello, Friend!";
    text.innerHTML = "Enter your personal details and start journy with us";
    btn.innerHTML = "SIGN UP";
  }else{
    title.innerHTML = "Welcome Back!";
    text.innerHTML = "to keep connected with us please login with your personal info";
    btn.innerHTML = "SIGN IN";
  }
}
