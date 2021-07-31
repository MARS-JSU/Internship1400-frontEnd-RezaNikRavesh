//elements
let inputText = document.querySelector("textarea");
let submit = document.querySelector("button");
let parent = document.querySelector(".chat-logs");

function sendMessage(text) {
  //define chat self elements
  let div_parent = document.createElement("div");
  let div_photo = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");

  //set attributes
  div_parent.className = "chat self";
  div_photo.className = "user-photo";
  p.className = "chat-message";
  img.src = "/img/two.jpg";
  p.innerHTML = text;

  //append elements
  div_photo.appendChild(img);
  div_parent.appendChild(div_photo);
  div_parent.appendChild(p);
  parent.appendChild(div_parent);
}

submit.addEventListener("click", () => {
  let message = inputText.value;
  if (message != "") sendMessage(message);
  inputText.value = "";
  inputText.focus();
});
