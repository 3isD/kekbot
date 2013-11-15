"use strict";
/*
      ___           ___           ___           ___           ___           ___     
     /\__\         /\  \         /\__\         /\  \         /\  \         /\  \    
    /:/  /        /::\  \       /:/  /        /::\  \       /::\  \        \:\  \   
   /:/__/        /:/\:\  \     /:/__/        /:/\:\  \     /:/\:\  \        \:\  \  
  /::\__\____   /::\~\:\  \   /::\__\____   /::\~\:\__\   /:/  \:\  \       /::\  \ 
 /:/\:::::\__\ /:/\:\ \:\__\ /:/\:::::\__\ /:/\:\ \:|__| /:/__/ \:\__\     /:/\:\__\
 \/_|:|~~|~    \:\~\:\ \/__/ \/_|:|~~|~    \:\~\:\/:/  / \:\  \ /:/  /    /:/  \/__/
    |:|  |      \:\ \:\__\      |:|  |      \:\ \::/  /   \:\  /:/  /    /:/  /     
    |:|  |       \:\ \/__/      |:|  |       \:\/:/  /     \:\/:/  /     \/__/      
    |:|  |        \:\__\        |:|  |        \::/__/       \::/  /                 
     \|__|         \/__/         \|__|         ~~            \/__/                  
*/

/***********************************************************************************
Created by Strategetical (Ivan K)
This software uses the MIT license.

Copyright (c) 2013 square10
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***********************************************************************************/

//Start by imploding kekbot, in case this is a code hotswap.
try{kekbot.implode();}catch(e){}

//Once Kekbot implodes, we can safely define this code.
var kekbot = {};

//Define the basic settings of Kekbot.
kekbot.alias = "[KB]";
kekbot.version = "2.0beta3";
kekbot.buildnum = 18;

//Kekbot user functions. NOT to be confused with kekbot.users, which stores the users.
kekbot.user = {};

//Kekbot users.
kekbot.users = {};

//Kekbot status. Not sure what I am going to do with this yet.
kekbot.status = {};
kekbot.status.enabled = false;

//Kekbot tests.
kekbot.test = {};
kekbot.test.enabled = kekbot.status.enabled;
kekbot.test.mod = function(userid, admin){
	if (!admin && kekbot.users[userid].role > 1){return true;}
	else if (admin && kekbot.users[userid].role > 2){return true;}
	else{return false;}
}

//Kekbot handlers.
kekbot.handle = {};
kekbot.handle.chat = function(data){
	//Track the user.
}

//Kekbot user handlers.
kekbot.handle.user = {};
kekbot.handle.user.Join = function(data){
	//Track that user.
}
kekbot.handle.user.Leave = function(data){
	//Track that user.
}
kekbot.handle.user.Fan = function(data){
	//Track that user.
}
kekbot.handle.user.Skip = function(data){
	//Track the user.
	//Does it trigger when Kekbot skips?
}

//Kekbot core functions.
kekbot.implode = function(){
	console.log("Kekbot: Imploding. Bye bye!");
	API.off(API.CHAT, kekbot.handle.chat);
	API.off(API.USER_JOIN, kekbot.handle.user.Join);
	API.off(API.USER_LEAVE, kekbot.handle.user.Leave);
	API.off(API.USER_FAN, kekbot.handle.user.Fan);
	API.off(API.USER_SKIP, kekbot.handle.user.Skip);
	clearInterval(kekbot.updateTimer);
	var tr = document.getElementById("KekBot").getElementsByClassName("KB_"+kekbot.buildnum)[0];
	tr.parentNode.removeChild(tr);
	kekbot = undefined;
}

kekbot.init = function(){
	console.log("Kekbot: Init.");
	API.on(API.CHAT, kekbot.handle.chat);
	API.on(API.USER_JOIN, kekbot.handle.user.Join);
	API.on(API.USER_LEAVE, kekbot.handle.user.Jeave);
	API.on(API.USER_FAN, kekbot.handle.user.Fan);
	API.on(API.USER_SKIP, kekbot.handle.user.Skip);
	kekbot.updateTimer = setInterval(kekbot.update, 1000*60*10);
}

kekbot.update = function(){
	console.log("Checking for updates.");
	var kbver = document.createElement("script");
	kbver.setAttribute("id","KB_Version");
	kbver.setAttribute("src","https://raw.github.com/Strategetical/kekbot/master/core/info.js");
	document.getElementById("KekBot").appendChild(kbver);
}

kekbot.forceUpdate = function(){
	var newkb = document.createElement("script");
	newkb.setAttribute("class", "KB_"+kbinf.buildnum);
	newkb.setAttribute("src", "https://raw.github.com/Strategetical/kekbot/master/core/kekbot.js");
	document.getElementById("KekBot").appendChild(newkb);
}

kekbot.say = function(msg){
	kekbot.say_raw("/me | "+msg);
}

kekbot.say_raw = function(msg){
	var lastmsg = $("#chat-input-field").val();
	$("#chat-input-field").val(msg).trigger($.Event("keydown",{keyCode: 13}));
	$("#chat-input-field").val(lastmsg);
}

kekbot.testURL = function(str){
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return (pattern.test(str))?true:false;
}

//Kekbot plugin functions.
kekbot.plugin = {};
kekbot.plugin.add = function(obj){
	if(typeof obj != "object"){
		console.log("KekBot_Plugins: [add] Passed variable is not an object. Quitting.");
		return false;
	}
	if(!obj.name || !obj.url){
		console.log("KekBot_Plugins: [add] Object doesn't have either a name or url attribute.");
		return false;
	}
	if(!((typeof obj.name == "string") && (typeof obj.url == "string"))){
		console.log("KekBot_Plugins: [add] Both the plugin name and URL MUST be string!");
		return false;
	}
	if (!(/^[a-z]+$/i.test(obj.name))){
		console.log("KekBot_Plugins: [add] Plugin name MUST be alphabetic characters only.");
		return false;
    	}
    	if (!kekbot.testURL(obj.url)){
    		console.log("KekBot_Plugins: [add] Plugin URL MUST be a valid URL!");
    		return false;
    	}
    	
}

kekbot.say("KekBot: Installed. v"+kekbot.version+" BuildNum #"+kekbot.buildnum);
kekbot.init();
