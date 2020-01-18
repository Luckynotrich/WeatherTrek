function navBarResponse() {
  var x = document.getElementById("wtTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}
