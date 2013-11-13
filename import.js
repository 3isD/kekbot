"use strict";
var kbdiv = document.createElement("div");
kbdiv.setAttribute("id","KekBot");
kbdiv.setAttribute("style","display:none;");
var kbver = document.createElement("script");
kbver.setAttribute("class","kbversion");
kbver.setAttribute("src","https://raw.github.com/Strategetical/kekbot/master/info.js");
kbdiv.appendChild(kbver);
//prepend the kbdiv to body
var bodelm = document.getElementsByTagName("body")[0];
bodelm.insertBefore(kbdiv,bodelm.firstChild);
//install the code
function installKekbot(){
	var newkb = document.createElement("script");
	newkb.setAttribute("class", "KB_"+kbinf.buildnum);
	newkb.setAttribute("src", "https://raw.github.com/Strategetical/kekbot/master/kekbot.js");
	document.getElementById("KekBot").appendChild(newkb);
}
