let bookMarks = [];
let toggle = document.querySelector(".toggle");
let container = document.querySelector(".bookmark-container");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("hide");
  container.classList.toggle("close");
});

function createBookMark(siteName, siteUrl) {
  //bookMark
  let bookMark = document.createElement("div");
  bookMark.className = "bookMark";

  //title
  let title_container = document.createElement("div");
  title_container.className = "title";
  let title = document.createElement("h3");
  title.className = "btn";
  title.innerHTML = siteName;

  //visit Button
  let visit_container = document.createElement("div");
  visit_container.className = "btn-visit";
  let visit = document.createElement("button");
  visit.className = "btn";
  visit.innerHTML = "Visit";

  //remove Button
  let remove_container = document.createElement("div");
  remove_container.className = "btn-remove";
  let remove = document.createElement("button");
  remove.className = "btn";
  remove.innerHTML = "Delete";

  //apend to elements
  title_container.appendChild(title);
  visit_container.appendChild(visit);
  remove_container.appendChild(remove);

  //apend to bookMark
  bookMark.appendChild(title_container);
  bookMark.appendChild(visit_container);
  bookMark.appendChild(remove_container);

  //apend bookMark to container
  container.appendChild(bookMark);

  bookMarks.push({
    name: siteName,
    url: siteUrl,
  });
}
function isValid(siteName, siteUrl) {
  if (siteName.trim() == "" || siteUrl.trim() == "")
    return alert("Please fill out the fields");

  if (
    !siteUrl.includes("https://") ||
    !siteUrl.includes(".") ||
    siteUrl[8] == "."
  )
    return alert("Please enter a valid url ( https:// )");

  for (const bookMark of bookMarks) {
    if (siteName == bookMark.name || siteUrl == bookMark.url)
      return alert("this name or url is already exist");
  }

  return true;
}
function submitHandler(e) {
  e.preventDefault();
  let inputName = document.querySelector(".form .myForm input.siteName");
  let inputUrl = document.querySelector(".form .myForm input.siteUrl");

  if (isValid(inputName.value, inputUrl.value)) {
    createBookMark(inputName.value, inputUrl.value);
    inputName.value = "";
    inputUrl.value = "";
  }
}

let buttons = document.querySelectorAll(".btn");

for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "Visit":
        console.log(bookMarks);
        break;
      case "Delete":
        break;
      case "":
        submitHandler(e);
        break;

      default:
        break;
    }
  });
}
