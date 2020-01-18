"use strict";
var prevScrollpos = window.pageYOffset;

var topnav = document.getElementById("wtTopnav");
var navpos = topnav.offsetTop;


window.onscroll = function() {
var  currentScrollPos = window.pageYOffset;
if (currentScrollPos > navpos) {
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("wtTopnav").setAttribute("style","position:fixed;top: 0;");
     } else {
       var adj = navpos - currentScrollPos;
       // document.getElementById("navpostest").innerHTML = "adj " + adj;
    document.getElementById("wtTopnav").setAttribute("style","position:fixed;top:" + adj +"px");
    }
  } else if(currentScrollPos <= currentScrollPos){
      document.getElementById('wtTopnav').setAttribute("style","position:static;");

}
  prevScrollpos = currentScrollPos;
}
