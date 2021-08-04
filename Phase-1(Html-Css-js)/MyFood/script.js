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
        document.querySelector(".post").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        document.querySelector(".sidebar").classList.toggle("active");
        break;
      case "About":
        document.querySelector(".aboutMe").scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        document.querySelector(".sidebar").classList.toggle("active");

        break;
    }
  });
}
