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
kekbot.version = "2.1(dev)";
kekbot.buildnum = 19;

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

//Kekbot listeners (added by plugins)
kekbot.listeners = {};
kekbot.listeners["command"] = {};
kekbot.listeners["message"] = [];

//Kekbot handlers.
kekbot.handle = {};
kekbot.handle.chat = function(data){
	//Track the user.
	switch(data.type){
		case "message":
			var str = data.message;
			var command = str.substr(0, str.indexOf(' '));
			if(kekbot.listeners["command"][command]){
				for (func in kekbot.listeners["command"][command]){
					try{
						kekbot.listeners["command"][str1][func](data);
					}catch(e){}
				}
			}
			for (func in kekbot.listeners["message"]){
				try{
					kekbot.listeners["message"][func](data);
				}catch(e){}
			}
			break;
		default:
			break;
	}
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
	API.chatLog("Kekbot: Imploding. Bye bye!", true);
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
	API.chatLog("Kekbot: Init.", true);
	API.on(API.CHAT, kekbot.handle.chat);
	API.on(API.USER_JOIN, kekbot.handle.user.Join);
	API.on(API.USER_LEAVE, kekbot.handle.user.Jeave);
	API.on(API.USER_FAN, kekbot.handle.user.Fan);
	API.on(API.USER_SKIP, kekbot.handle.user.Skip);
	kekbot.updateTimer = setInterval(kekbot.update, 1000*60*10);
	//update all plugins.
}

kekbot.update = function(){
	API.chatLog("Checking for updates.", true);
	var kbver = document.createElement("script");
	kbver.setAttribute("id","KB_Version");
	kbver.setAttribute("src","https://raw.github.com/Strategetical/kekbot/master/dev/info.js");
	document.getElementById("KekBot").appendChild(kbver);
}

kekbot.forceUpdate = function(){
	var newkb = document.createElement("script");
	newkb.setAttribute("class", "KB_"+kbinf.buildnum);
	newkb.setAttribute("src", "https://raw.github.com/Strategetical/kekbot/master/dev/kekbot.js");
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
		API.chatLog("KekBot_Plugins: [add] Passed variable is not an object. Quitting.", true);
		return false;
	}
	if(!obj.name || !obj.url){
		API.chatLog("KekBot_Plugins: [add] Object doesn't have either a name or url attribute.", true);
		return false;
	}
	if(!((typeof obj.name == "string") && (typeof obj.url == "string"))){
		API.chatLog("KekBot_Plugins: [add] Both the plugin name and URL MUST be string!", true);
		return false;
	}
	if (!(/^[a-z]+$/i.test(obj.name))){
		API.chatLog("KekBot_Plugins: [add] Plugin name MUST be alphabetic characters only.", true);
		return false;
    	}
    	if (!kekbot.testURL(obj.url)){
    		API.chatLog("KekBot_Plugins: [add] Plugin URL MUST be a valid URL!", true);
    		return false;
    	}
    	for (item in kb_plugins.installedPlugins){
    		if (obj.name == item){
    			API.chatLog("KekBot_Plugins: [add] A plugin with the name "+obj.name+" is already installed!", true);
    			return false;
    		}
    		if (obj.url == kb_plugins[item]){
			API.chatLog("KekBot_Plugins: [add] A plugin's update URL is the same with another plugin's.", true);
			return false;
    		}
    	}
    	kb_plugins.installedPlugins[obj.name] = {
    		url: obj.url
    	};
    	kekbot.plugin.update(obj.name);
}
kekbot.plugin.update = function(p){
	try{
		kb_plugins.installedPlugins[p].installed = false;
	}catch(e){
		API.chatLog("KekBot_Plugins: [update] Cannot update a plugin that isn't installed!");
		return false;
	}
	var plugininfo = document.createElement("script");
	plugininfo.setAttribute("id", "KB_PluginInfo_"+p);
	plugininfo.setAttribute("src", kb_plugins.installedPlugins[p].url);
	document.getElementById("KB_PluginsInfo").appendChild(plugininfo);
}
kekbot.plugin.install = function(name, url){
	try{
		var x = document.getElementById("id", "KB_PluginInfo_"+name);
		x.parentNode.removeChild(x);
	}
	catch(e){
		API.chatLog("KekBot: could not remove plugin version info during installation (not supposed to happen)!", true);
	}
	var plugin = document.createElement("script");
	plugin.setAttribute("id", "KB_Plugin_"+name);
	plugin.setAttribute("src", url);
	document.getElementById("KB_Plugins").appendChild(plugin);
}
kekbot.plugin.verifyInstall = function(name){
	try{
		kb_plugins.activePlugins[name] = kb_plugins.pendingPlugins[name];
		kb_plugins.installedPlugins[name].installed = true;
		delete kb_plugins.pendingPlugins[name];
	}
	catch(e){
		API.chatLog("Could not install the plugin "+name+"!", true);
		API.chatLog("Error: "+e, true);
		try{
			delete kb_plugins.pendingPlugins[name];
			delete kb_plugins.activePlugins[name];
		}catch(e){}
	}
}
kekbot.plugin.addListener = function(obj){
	try{
		switch(obj.type){
			case "command":
				if(!kekbot.listeners[obj.type][obj.command]){
					kekbot.listeners[obj.type][obj.command] = [];
				}
				kekbot.listeners[obj.type][obj.command].push(kb_plugins.activePlugins[obj.plugin][obj.name]);
				return {type: obj.type, command: obj.command, index: kekbot.listeners[obj.type].length-1};
			case "message":
				kekbot.listeners[obj.type].push(kb_plugins.activePlugins[obj.plugin][obj.name]);
				return {type: obj.type, index: kekbot.listeners[obj.type].length-1};
			default:
				kekbot.chatLog("Could not add plugin listener: unsupported type.");
				return false;
		}
	}
	catch(e){
		API.chatLog("Could not add plugin listener.", true);
		API.chatLog("Type: "+type+" Plugin: "+plugin+" Name: "+name+" Error: "+e, true);
		return false;
	}
}
kekbot.plugin.removeListener = function(obj){
	try{
		switch(obj.type){
			case "command":
				kekbot.listeners[obj.type][obj.command][obj.index] = function(a){};
			case "message":
				kekbot.listeners[obj.type][obj.index] = function(a){};
			default:
				kekbot.chatLog("Could not remove plugin listener: unsupported type.");
				return false;
		}
		
	}
	catch(e){
		API.chatLog("Could not remove plugin listener.", true);
		API.chatLog("Error: "+e, true);
	}
}
kekbot.say("KekBot: Installed. v"+kekbot.version+" BuildNum #"+kekbot.buildnum);
kekbot.init();
kekbot.plugin.add({
	name: "core",
	url: "https://raw.github.com/Strategetical/kekbot/master/plugins/core/info.js"
});
