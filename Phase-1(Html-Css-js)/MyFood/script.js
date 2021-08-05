// toggle menu
function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("sidebar-active");
}

let menuButtun = document.querySelector(".header .header-container .img");
menuButtun.addEventListener("click", () => {
  toggleMenu();
});

// sidemenu item handle
let liTags = document.querySelectorAll(".sidebar li");
for (const li of liTags) {
  li.addEventListener("click", (e) => {
    switch (e.target.outerText) {
      case "Close Menu":
        toggleMenu();
        break;
      case "Food":
        document.querySelector(".post").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        toggleMenu();
        break;
      case "About":
        document.querySelector(".aboutMe").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        toggleMenu();
        break;

      case "Dark Mode":
        document.querySelector("body").classList.toggle("dark");
        if (document.querySelector("body").classList.value == "dark")
          document.querySelector(".sidebar li span i").classList.value =
            "bx bxs-moon bx-flip-horizontal";
        else
          document.querySelector(".sidebar li span i").classList.value =
            "bx bxs-sun bx-flip-horizontal";
        toggleMenu();
        break;
    }
  });
}
