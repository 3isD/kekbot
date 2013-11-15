"use strict";
function prepareKekbot(){
	var kbdiv = document.createElement("div");
	kbdiv.setAttribute("id","KekBot");
	kbdiv.setAttribute("style","display:none;");
	var kbplugins = document.createElement("div");
	kbplugins.setAttribute("id","KB_Plugins");
	var kbpluginsinfo = document.createElement("div");
	kbpluginsinfo.setAttribute("id","KB_PluginsInfo");
	kbplugins.appendChild(kbpluginsinfo);
	var kbver = document.createElement("script");
	kbver.setAttribute("id","KB_Version");
	kbver.setAttribute("src","https://raw.github.com/Strategetical/kekbot/master/core/info.js");
	kbdiv.appendChild(kbver);
	kbdiv.appendChild(kbplugins);
	var bodelm = document.getElementsByTagName("body")[0];
	bodelm.insertBefore(kbdiv,bodelm.firstChild);
	window.installKekbot = function(){
		window.kb_plugins = {};
		var newkb = document.createElement("script");
		newkb.setAttribute("class", "KB_"+kbinf.buildnum);
		newkb.setAttribute("src", "https://raw.github.com/Strategetical/kekbot/master/core/kekbot.js");
		document.getElementById("KekBot").appendChild(newkb);
		installKekbot = undefined;
	}
	prepareKekbot = undefined;
}
try{
	kekbot.update();
}
catch(e){
	prepareKekbot();
}
try{
	var kbid = document.getElementById("KB_Import");
	kbid.parentNode.removeChild(kbid);
}catch(e){}
