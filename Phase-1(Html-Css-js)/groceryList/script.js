let ul = document.querySelector("ul");
let logo = document.querySelector(".container .img");
let err = document.querySelector(".container .error span");
let ic_move = document.querySelector(".lis li .bx-move");
let dragArea = document.querySelector(".list ul");
let clear = document.querySelector(".container .clear");
let clearBtn = document.querySelector(".container .clear h2");
let inputText = document.querySelector("form .inp");
let modal = document.querySelector(".modal");
new Sortable(dragArea, {
  animation: 350,
  handle: ".bx-move",
});

// add listener
clearBtn.addEventListener("click", clearItems);
inputText.addEventListener("input", () => {
  err.style.display = "none";
});
inputText.addEventListener("change", () => {
  err.style.display = "none";
});

// functions
function loadItems() {
  ul.innerHTML = "";

  if (
    localStorage.getItem("listItem") === null ||
    JSON.parse(localStorage.getItem("listItem")).length === 0
  )
    logo.style.display = "block";
  clear.style.display = "none";
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
  if (localStorage.getItem("listItems") !== null) {
    for (const item of JSON.parse(localStorage.getItem("listItems"))) {
      if (item.name == input.value.trim()) {
        err.style.display = "block";
        // form.reset();
        e.preventDefault();
        return false;
      }
    }
  }

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
function addItem(name) {
  err.style.display = "none";
  logo.style.display = "none";
  clear.style.display = "block";

  //crate elements
  let li = document.createElement("li");
  let h3 = document.createElement("h3");
  let div = document.createElement("div");
  let ic_remove = document.createElement("i");
  let ic_edit = document.createElement("i");
  let ic_move = document.createElement("i");

  //add atributes
  h3.innerHTML = name;
  div.className = "buttons";
  ic_edit.className = "bx bxs-edit";
  ic_remove.className = "bx bxs-trash-alt";
  ic_move.className = "bx bx-move";
  //apend
  div.appendChild(ic_remove);
  div.appendChild(ic_edit);
  div.appendChild(ic_move);
  li.appendChild(h3);
  li.appendChild(div);
  ul.appendChild(li);

  // add listener
  ic_edit.addEventListener("click", () => {
    editItem(name);
  });
  ic_remove.addEventListener("click", () => {
    // removeItem(name);
    showModal(name);
  });
}
function editItem(name) {}
function showModal(name) {
  modal.style.display = "block";
  let close = document.querySelector(".modal .content .header .close");
  let yes = document.querySelector(".modal .content .footer .yes button");
  let cancel = document.querySelector(".modal .content .footer .cancel button");
  let message = document.querySelector(".modal .content .message p");

  message.innerHTML = "Are you sure you want to delete " + name + " ?";
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  cancel.addEventListener("click", () => {
    modal.style.display = "none";
  });
  yes.addEventListener("click", () => {
    removeItem(name);
    modal.style.display = "none";
  });
}
function removeItem(name) {
  let listItems = JSON.parse(localStorage.getItem("listItems"));

  for (let index = 0; index < listItems.length; index++) {
    if (name == listItems[index].name) listItems.splice(index, 1);
  }
  localStorage.setItem("listItems", JSON.stringify(listItems));
  loadItems();
}
function clearItems() {
  let listItems = JSON.parse(localStorage.getItem("listItems"));
  listItems = [];
  localStorage.setItem("listItems", JSON.stringify(listItems));
  loadItems();
}
