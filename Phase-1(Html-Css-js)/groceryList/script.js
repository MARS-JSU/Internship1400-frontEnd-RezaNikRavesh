///////
let ul = document.querySelector("ul");
let logo = document.querySelector(".container .img");
function addItem(name) {
  logo.style.display = "none";
  let item =
    "<li><h3>" +
    name +
    '</h3><div class="buttons"><i class="bx bxs-edit" style="color: #72ef07"></i><i class="bx bxs-trash-alt" style="color: #ff0000"></i></div></li>';
  ul.innerHTML += item;
}
function loadItems() {
  if (
    localStorage.getItem("listItem") === null ||
    JSON.parse(localStorage.getItem("listItem")).length === 0
  )
    logo.style.display = "block";

  for (
    let item = 0;
    item < JSON.parse(localStorage.getItem("listItems")).length;
    item++
  ) {
    addItem(JSON.parse(localStorage.getItem("listItems"))[item].name);
  }
}

function submitHandler(e) {
  let input = document.querySelector(".form input");
  let form = document.querySelector(".form form");

  if (localStorage.getItem("listItems") === null) {
    let listItems = [
      {
        name: input.value,
      },
    ];
    localStorage.setItem("listItems", JSON.stringify(listItems));
    addItem(listItems[0].name);
  } else {
    let temp = JSON.parse(localStorage.getItem("listItems"));
    let listItems = [
      {
        name: input.value,
      },
    ];
    temp.push(listItems[0]);
    localStorage.setItem("listItems", JSON.stringify(temp));
    addItem(listItems[0].name);
  }

  form.reset();
  e.preventDefault();
}
