
window.onscroll = function() {navbarSticky()};

var navbar = document.getElementById("wtTopnav");
var sticky = navbar.offsetTop;

function navbarSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.
  }
}
