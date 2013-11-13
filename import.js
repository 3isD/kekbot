"use strict";
//Imports KekBot into the page.
var kbdiv = document.createElement("div");
kbdiv.setAttribute("id","KekBot");
kbdiv.setAttribute("style","display:none;");
var kbver = document.createElement("script");
kbver.setAttribute("class","kbversion");
kbver.setAttribute("src","https://raw.github.com/Strategetical/kekbot/master/info.js");
kbdiv.appendChild(kbver);
var bodelm = document.getElementsByTagName("body")[0];
bodelm.insertBefore(kbdiv,bodelm.firstChild);

