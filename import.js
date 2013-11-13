"use strict";
//Imports KekBot into the page.
var kbdiv = document.createElement("div");
kbdiv.setAttribute("id","KekBot");
kbdiv.setAttribute("style","display:none;");
var kbver = document.createElement("script");
kbver.setAttribute("class","kbversion");
kbver.setAttribute("src","http://files.sq10.net/UPLOADED_FILES/1384362018034.js");
kbdiv.appendChild(kbver);
var bodelm = document.getElementsByTagName("body")[0];
bodelm.insertBefore(kbdiv,bodelm.firstChild);

