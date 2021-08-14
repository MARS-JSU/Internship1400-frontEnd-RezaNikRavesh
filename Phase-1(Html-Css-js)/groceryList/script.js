let ul = document.querySelector("ul");
let logo = document.querySelector(".container .img");

function removeItem(name) {
  let listItems = JSON.parse(localStorage.getItem("listItems"));

  for (let index = 0; index < listItems.length; index++) {
    if (name == listItems[index].name) listItems.splice(index, 1);
  }
  localStorage.setItem("listItems", JSON.stringify(listItems));
  loadItems();
}
function editItem(name) {}
function addItem(name) {
  logo.style.display = "none";

  //crate elements
  let li = document.createElement("li");
  let h3 = document.createElement("h3");
  let div = document.createElement("div");
  let ic_remove = document.createElement("i");
  let ic_edit = document.createElement("i");

  //add atributes
  h3.innerHTML = name;
  div.className = "buttons";
  ic_edit.className = "bx bxs-edit";
  ic_edit.style.color = "#72ef07";
  ic_remove.className = "bx bxs-trash-alt";
  ic_remove.style.color = "#ff0000";

  //apend
  div.appendChild(ic_remove);
  div.appendChild(ic_edit);
  li.appendChild(h3);
  li.appendChild(div);
  ul.appendChild(li);

  // add listener
  ic_edit.addEventListener("click", () => {
    editItem(name);
  });
  ic_remove.addEventListener("click", () => {
    removeItem(name);
  });
}
function loadItems() {
  ul.innerHTML = "";

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
