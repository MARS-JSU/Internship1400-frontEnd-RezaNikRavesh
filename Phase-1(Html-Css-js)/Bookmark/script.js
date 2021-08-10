document.body.onload = loadBookMarks;
let toggle = document.querySelector(".toggle");
let container = document.querySelector(".bookmark-container");
let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let modalBtn = document.querySelector(".modal .content .btn-close button");

form.addEventListener("submit", addBookMark);
modalBtn.addEventListener("click", closeModal);
toggle.addEventListener("click", closeToggle);

function closeModal() {
  modal.style.display = "none";
}
function closeToggle() {
  toggle.classList.toggle("hide");
  container.classList.toggle("close");
}
function openModal() {
  modal.style.display = "block";
}
function createElement(siteName, siteUrl) {
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
  visit.addEventListener("click", () => {
    window.open(siteUrl, "_blank");
    window.open(siteUrl);
  });

  //remove Button
  let remove_container = document.createElement("div");
  remove_container.className = "btn-remove";
  let remove = document.createElement("button");
  remove.className = "btn";
  remove.innerHTML = "Delete";
  remove.addEventListener("click", () => {
    deleteBookmark(siteUrl);
  });

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
}
function addBookMark(e) {
  let siteName = document.querySelector(".siteName").value;
  let siteUrl = document.querySelector(".siteUrl").value;

  if (
    !siteUrl.includes("https://") ||
    siteUrl[8] === "." ||
    !siteUrl.includes(".")
  ) {
    alert("url is not valid");
    e.preventDefault();

    return false;
  }
  let bookMark = {
    name: siteName,
    url: siteUrl,
  };

  if (localStorage.getItem("bookMarks") === null) {
    let bookMarks = [];
    bookMarks.push(bookMark);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
    createElement(bookMark.name, bookMark.url);
  } else {
    let bookMarks = JSON.parse(localStorage.getItem("bookMarks"));
    bookMarks.push(bookMark);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
    createElement(bookMark.name, bookMark.url);
  }
  document.querySelector("form").reset();
  e.preventDefault();
}
function loadBookMarks() {
  if (localStorage.getItem("bookMarks") === null) openModal();
  container.innerHTML = "";
  let bookMarks = JSON.parse(localStorage.getItem("bookMarks"));

  for (let index = 0; index < bookMarks.length; index++) {
    createElement(bookMarks[index].name, bookMarks[index].url);
  }
}
function deleteBookmark(url) {
  //get bookmarks
  let bookMarks = JSON.parse(localStorage.getItem("bookMarks"));

  for (let index = 0; index < bookMarks.length; index++) {
    if (bookMarks[index].url == url) bookMarks.splice(index, 1);
  }
  localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
  loadBookMarks();
}
