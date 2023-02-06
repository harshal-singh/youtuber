/*
|-------------------     HEADER    --------------------|
*/

  const isSnapchat = typeof window !== 'undefined' ? navigator.userAgent.includes("Snapchat") : false;

  if (isSnapchat) {
    window.location.href = "https://harshal-singh.github.io/youtuber"
  }

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 5) {
    header.style.background = "white";
    header.style.padding = "20px 40px";
    header.style.boxShadow = "0 0 24px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "transparent";
    header.style.padding = "40px";
    header.style.boxShadow = "none";
  }
});

/*
|-------------------     MENU    --------------------|
*/
const menu = document.getElementById("menu");
const openIcon = document.querySelector(".open");
const closeIcon = document.querySelector(".close");

function openMenu() {
  menu.style.left = "0px";
}
openIcon.addEventListener("click", openMenu);
function closeMenu() {
  menu.style.left = "-780px";
}
closeIcon.addEventListener("click", closeMenu);
