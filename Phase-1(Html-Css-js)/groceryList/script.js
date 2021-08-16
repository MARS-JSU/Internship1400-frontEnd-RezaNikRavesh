// init elements
let ul = document.querySelector("ul");
let logo = document.querySelector(".container .img");
let err = document.querySelector(".container .error span");
let ic_move = document.querySelector(".lis li .bx-move");
let dragArea = document.querySelector(".list ul");
let clear = document.querySelector(".container .clear");
let clearBtn = document.querySelector(".container .clear h2");
let inputText = document.querySelector("form .inp");
let confirmm = document.querySelector(
  ".modal .content .footer .confirmm button"
);
new Sortable(dragArea, {
  animation: 350,
  handle: ".bx-move",
});
// add listener
clearBtn.addEventListener("click", () => {
  showModal("remove", "all");
});
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
    // editItem(name);
    showModal("edit", name);
  });
  ic_remove.addEventListener("click", () => {
    showModal("remove", name);
  });
}
function editItem(name, newName) {
  let listItems = JSON.parse(localStorage.getItem("listItems"));
  for (const item of listItems) {
    if (item.name === name) {
      item.name = newName;
    }
  }
  localStorage.setItem("listItems", JSON.stringify(listItems));
  loadItems();
}
function showModal(action, name) {
  let modal = document.querySelector(".modal");
  let input = document.querySelector(".modal .content .input");
  let inputText = document.querySelector(".modal .content .input input");
  let close = document.querySelector(".modal .content .header .close");
  let cancel = document.querySelector(".modal .content .footer .cancel button");
  let message = document.querySelector(".modal .content .message p");
  let title = document.querySelector(".modal .content .header .title h3");
  let err = document.querySelector(".modal .content .input .error");
  modal.style.display = "block";
  err.style.display = "none";

  close.addEventListener("click", () => {
    modal.style.display = "none";
    err.style.display = "none";
  });
  cancel.addEventListener("click", () => {
    modal.style.display = "none";
    err.style.display = "none";
  });

  
  if (action === "remove") {
    title.innerHTML = "Delete Item";
    input.style.display = "none";
    message.innerHTML = "Are you sure you want to delete " + name + " ?";

    if (name == "all") {
      confirmm.addEventListener("click", () => {
        clearItems();
        modal.style.display = "none";
        err.style.display = "none";
      });
    } else {
      confirmm.addEventListener("click", () => {
        removeItem(name);
        modal.style.display = "none";
        err.style.display = "none";
      });
    }
  } else if (action === "edit") {
    input.style.display = "block";
    title.innerHTML = "Edit Item";
    message.innerHTML = "Enter the new value : ";
    inputText.value = name;
    inputText.select();
    inputText.addEventListener("input", () => {
      err.style.display = "none";
    });
    confirmm.addEventListener("click", () => {
      if (localStorage.getItem("listItems") !== null) {
        for (const item of JSON.parse(localStorage.getItem("listItems"))) {
          if (item.name === inputText.value.trim()) {
            alert("same found");
            err.style.display = "block";
            return false;
          }
        }
      }
      modal.style.display = "none";
      err.style.display = "none";
      editItem(name, inputText.value.trim());
    });
  }

  // confirmm.removeEventListener('click')
  confirmm.removeEventListener("click", () => {
    clearItems();
    modal.style.display = "none";
    err.style.display = "none";
  });
  confirmm.removeEventListener("click", () => {
    removeItem(name);
    modal.style.display = "none";
    err.style.display = "none";
  });
  confirmm.removeEventListener("click", () => {
    if (localStorage.getItem("listItems") !== null) {
      for (const item of JSON.parse(localStorage.getItem("listItems"))) {
        if (item.name === inputText.value.trim()) {
          err.style.display = "block";
          return false;
        }
      }
    }
    modal.style.display = "none";
    err.style.display = "none";
    editItem(name, inputText.value.trim());
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
  err.style.display = "none";
  let listItems = JSON.parse(localStorage.getItem("listItems"));
  listItems = [];
  localStorage.setItem("listItems", JSON.stringify(listItems));
  loadItems();
}
