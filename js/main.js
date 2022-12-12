// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;

function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 5
    ? header.classList.add("sticky-action")
    : header.classList.remove("sticky-action");
}
window.addEventListener("scroll", stickyHeader);

// ===== DARK MODE =====
// change the icons inside the button based on previous setting
if (localStorage.getItem("theme", "dark")) {
  setDarkMode();
}

// theme toggle button
function setDarkMode() {
  var setDark = document.documentElement.classList.toggle("dark");
  var emoticon = "";

  // if setting via local storage previously
  if (setDark) {
    localStorage.setItem("theme", "dark");
    emoticon = "☀️";
  } else {
    localStorage.removeItem("theme", "dark");
    emoticon = "🌙";
  }

  // put the icons inside the button
  document.getElementById("theme-toggle").innerHTML = emoticon;
}
