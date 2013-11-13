(function(){
	window.kbinf = {};
	kbinf.buildnum = 10;
	try{
		if (kbinf.buildnum > kekbot.buildnum){
			alert("Gotta update!");
		}
	}catch(e){
		alert("KekBot: Could not update. See error in console.");
		console.log("KekbotERROR:");
		console.log(e);b n
	}
	alert("Done.");
	var kbv = document.getElementById("KekBot").getElementsByClassName("kbversion")[0];
	kbv.parentNode.removeChild(kbv);
	var kbver = document.createElement("script");
	kbver.setAttribute("class","kbversion");
	kbver.setAttribute("src","https://raw.github.com/Strategetical/kekbot/master/info.js");
	document.getElementById("KekBot").appendChild(kbver);
})()