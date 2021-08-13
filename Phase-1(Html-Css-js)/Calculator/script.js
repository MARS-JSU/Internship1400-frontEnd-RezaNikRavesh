let buttons = document.querySelectorAll(".buttons .button");
let screen = document.querySelector("h3");

function updateMemory() {
  sessionStorage.setItem("memory", screen.innerText);
}
// console.log( buttons);
for (const btn of buttons) {
  btn.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  switch (e.target.outerText) {
    case "0":
      if (screen.innerText === "") return false;
      else {
        screen.innerText += e.target.outerText;
        updateMemory();
      }

      break;

    case "1":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "2":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "3":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "4":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "5":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "6":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "7":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "8":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "9":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case ".":
      if (screen.innerText === "") return false;
      else {
        updateMemory();
      }

      // screen.innerText += e.target.outerText;

      break;

    case "=":
      // screen.innerText += e.target.outerText;
      break;

    case "+":
      screen.innerText += e.target.outerText;
      updateMemory();
      break;

    case "-":
      screen.innerText += e.target.outerText;
      break;

    case "x":
      screen.innerText += "*";
      break;

    case "÷":
      screen.innerText += e.target.outerText;
      break;

    case "^":
      screen.innerText += "**";
      break;

    case "➜":
      let temp = screen.innerText.substring(0, screen.innerText.length - 1);
      screen.innerText = temp;
      updateMemory();
      break;

    case "c":
      console.log(sessionStorage.getItem("memory"));
      // screen.innerText += e.target.outerText;
      break;

    default:
      break;
  }
}
