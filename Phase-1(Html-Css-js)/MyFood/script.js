// toggle menu
let menuButtun = document.querySelector(".header .header-container .img");
menuButtun.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

// sidemenu item handle
let liTags = document.querySelectorAll(".sidebar li");
for (const li of liTags) {
  li.addEventListener("click", (e) => {
    switch (e.target.outerText) {
      case "Close Menu":
        document.querySelector(".sidebar").classList.toggle("active");
        break;
      case "Food":
        alert(e.target.outerText);
        break;
      case "About":
        alert(e.target.outerText);
        break;
    }
  });
}
