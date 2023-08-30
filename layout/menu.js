const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0");
    menu.classList.add("max-h-[500px]");
  } else {
    menu.classList.remove("max-h-[500px]");
    menu.classList.add("max-h-0");
  }
});
