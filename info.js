kbinf = {};
kbinf.buildnum = 16;
try{
	if (kbinf.buildnum > kekbot.buildnum){
		kekbot.say("Updating KekBot from build number "+kekbot.buildnum+" to "+kbinf.buildnum);
		kekbot.forceUpdate();
	}
}catch(e){
	try{
		kekbot.say("KekBot: Could not update. Please check the console.");
		console.log("KekBot: "+e);
	}
	catch(e){
		try{
			installKekbot();
		}
		catch(e){
			alert("Could not install KekBot! Check the console for more info.");
			console.log("KekBot: "+e);
		}
	}
}
var kbv = document.getElementById("KB_Version");
kbv.parentNode.removeChild(kbv);