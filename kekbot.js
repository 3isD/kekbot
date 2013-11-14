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
kekbot.version = "2.0beta1";
kekbot.buildnum = 10;

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

	//Parse whatever the chat says, and run a command if a regex triggers.

	//TODO: Shall I just have just some functions be attached to the handler, and send the data to them on chat?
	//It seems easier and more flexible that way.
}
//Kekbot user handlers.
kekbot.handle.user = {};

//TODO: Can I have a function that runs a set of functions on a call of any of these functions? A prototype, maybe?

kekbot.handle.user.join = function(data){
	//Track that user.
}
kekbot.handle.user.leave = function(data){
	//Track that user.
}
kekbot.handle.user.fan = function(data){
	//Track that user.
	//Also, become a fan of that user.
}
kekbot.handle.user.skip = function(data){
	//Track the user.
	//Does it trigger when Kekbot skips?
}

//Kekbot core functions.
kekbot.implode = function(){
	console.log("Kekbot: Imploding. Bye bye!");
	API.off(API.CHAT, kekbot.handle.chat);
	API.off(API.USER_JOIN, kekbot.handle.user.join);
	API.off(API.USER_LEAVE, kekbot.handle.user.leave);
	API.off(API.USER_FAN, kekbot.handle.user.fan);
	API.off(API.USER_SKIP, kekbot.handle.user.skip);
	var tr = document.getElementById("KekBot").getElementsByClassName("KB_"+kekbot.buildnum)[0];
	tr.parentNode.removeChild(tr);
	kekbot = undefined;
}

kekbot.init = function(){
	console.log("Kekbot: Init.");
	API.on(API.CHAT, kekbot.handle.chat);
	API.on(API.USER_JOIN, kekbot.handle.user.join);
	API.on(API.USER_LEAVE, kekbot.handle.user.leave);
	API.on(API.USER_FAN, kekbot.handle.user.fan);
	API.on(API.USER_SKIP, kekbot.handle.user.skip);
}

kekbot.update = function(){
	var kbver = document.createElement("script");
	kbver.setAttribute("class","kbversion");
	kbver.setAttribute("src","https://raw.github.com/Strategetical/kekbot/master/info.js");
	document.getElementById("KekBot").appendChild(kbver);
}

kekbot.forceUpdate = function(){
	var newkb = document.createElement("script");
	newkb.setAttribute("class", "KB_"+kbinf.buildnum);
	newkb.setAttribute("src", "https://raw.github.com/Strategetical/kekbot/master/kekbot.js");
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

//Kekbot handlers.
kekbot.handle = {};
kekbot.handle.chat = function(data){
	//Track the user.

	//Parse whatever the chat says, and run a command if a regex triggers.

	//TODO: Shall I just have just some functions be attached to the handler, and send the data to them on chat?
	//It seems easier and more flexible that way.
}
//Kekbot user handlers.
kekbot.handle.user = {};

//TODO: Can I have a function that runs a set of functions on a call of any of these functions? A prototype, maybe?

kekbot.handle.user.join = function(data){
	//Track that user.
}
kekbot.handle.user.leave = function(data){
	//Track that user.
}
kekbot.handle.user.fan = function(data){
	//Track that user.
	//Also, become a fan of that user.
}
kekbot.handle.user.skip = function(data){
	//Track the user.
	//Does it trigger when Kekbot skips?
}

kekbot.say("KekBot: Installed. v"+kekbot.version+" BuildNum #"+kekbot.buildnum);
kekbot.init();