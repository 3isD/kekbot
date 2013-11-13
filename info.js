(function(){
	window.kbinf = {};
	kbinf.buildnum = 20;
	try{
		kekbot.forceUpdate();
	}catch(e){
		alert("KekBot: Could not update. See error in console.");
		console.log("KekbotERROR:");
		console.log(e);
	}
})()