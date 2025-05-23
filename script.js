const pageLinks = document.querySelectorAll(".links-footer a[href^='#']");

pageLinks.forEach((item) => {
  item.addEventListener("click", scrollOnClick);
});

function scrollOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const section = document.querySelector(id).offsetTop;

  window.scroll({
    top: section,
    behavior: "smooth",
  });
}

const button = document.querySelector(".mobile-btn");
const navMenu = document.querySelector(".mobile-menu-items");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  navMenu.classList.toggle("active");
});
