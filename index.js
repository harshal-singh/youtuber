/*
|-------------------     HEADER    --------------------|
*/
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

/*
|-------------------     YOUTUBE BUTTON    --------------------|
*/
const link = document.querySelector(".yt_btn");

// Add an event listener to the link element
link.addEventListener("click", function(event) {

  // Prevent the default behavior of the link
  event.preventDefault();

  // Get the URL of the link
  const url = link.href;

  // Open the URL in the default browser
  window.open(url, '_system');
});