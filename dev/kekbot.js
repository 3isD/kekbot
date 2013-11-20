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

var kekbot_info = {};
kekbot_info.build = 21;
kekbot_info.canInstall = false;
(function(){
	var ki = kekbot_info;
	try{
		if (ki.build > kekbot.build){
			kekbot.say("KekBot.Update: Updating KekBot from build number "+kekbot.buildnum+" to "+kbinf.buildnum);
			ki.canInstall = true;
		}
	}
	catch(e){
		try{
			kekbot.debug(1, "KekBot.Update: Could not update. Error: "+e);
		}
		catch(e){
			try{
				ki.canInstall = true;
			}
			catch(e){
				alert("Kekbot.Install: Could not install KekBot! Check the console for more info.");
				console.log("KekBot.Install: "+e);
			}
		}
	}
})();

kekbot_info.canInstall&& //if kekbot_info.canInstall = true, then install/update kekbot.
(function(){
	//Start by imploding kekbot, in case this is a code hotswap.
	try{kekbot.implode();}catch(e){}
	
	//Once Kekbot implodes, we can safely define this code.
	var kekbot = {};
	
	//Define the basic settings of Kekbot.
	kekbot.alias = "[KB]";
	kekbot.version = "2.1(dev)";
	kekbot.buildnum = kb_bn;
	kekbot.pluginType = "v1";
	
	//Kekbot user functions. NOT to be confused with kekbot.users, which stores the users.
	kekbot.user = {};
	
	//Kekbot users.
	kekbot.users = {};
	
	//Kekbot status. Not sure what I am going to do with this yet.
	kekbot.status = {};
	kekbot.status.enabled = false;
	
	//Kekbot debug. There's a need for debugging.
	kekbot.debugLevel = 1; //levels go from 0 to 5, depending on the level of verbosity we want.
	kekbot.debug = function(verbosity, msg){
		(kekbot.debugLevel >= verbosity)?API.chatLog("KekBot_Debug | "+msg, (verbosity == 1)?true:false):null;
	}
	
	//Kekbot tests.
	kekbot.test = {};
	kekbot.test.enabled = kekbot.status.enabled;
	kekbot.test.mod = function(userid, admin){
		kekbot.debug(4, "kekbot.test.mod called.");
		if (!admin && kekbot.users[userid].role > 1){
			kekbot.debug(4, "k.t.m: User is mod. Returning true.");
			return true;
		}
		else if (admin && kekbot.users[userid].role > 2){
			kekbot.debug(4, "k.t.m: User is admin. Returning true.");
			return true;
		}
		else{
			kekbot.debug(4, "k.t.m: User isn't a mod nor an admin. Returning false.");
			return false;
		}
	}
	kekbot.test.kekbot = function(userid){
		kekbot.debug(4, "kekbot.test.kekbot called.");
		return (API.getUser().id == userid)?true:false;
	}
	
	//Kekbot listeners (added by plugins)
	kekbot.listeners = {};
	kekbot.listeners["command"] = {};
	kekbot.listeners["message"] = [];
	
	//Kekbot handlers.
	kekbot.handle = {};
	kekbot.handle.chat = function(data){
		//Track the user.
		kekbot.debug(2, "kekbot.handle.chat called.");
		kekbot.debug(3, "k.b.c: data.type is "+data.type);
		switch(data.type){
			case "message":
				kekbot.debug(4, "k.b.c: triggered case 'message'.");
				var str = data.message;
				kekbot.debug(4, "k.b.c: data.message (str) is "+str);
				var command = (str.indexOf(' ') > -1)?str.substr(0, str.indexOf(' ')):str;
				kekbot.debug(4, "k.b.c: command gotten from message is "+command);
				if(kekbot.listeners["command"][command]){
					kekbot.debug(5, "k.b.c: there is an associative array for that command.");
					for (var func = 0;func < kekbot.listeners["command"][command].length; func++){
						try{
							kekbot.debug(5, "k.b.c: attempting to run command kekbot.listeners['command']['"+command+"']["+func+"]");
							kekbot.listeners["command"][command][func](data);
						}catch(e){
							kekbot.debug(3, "Could not run command. e:"+e);
						}
					}
				}
				for (func in kekbot.listeners["message"]){
					try{
						//kekbot.listeners["message"][func](data);
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
		kekbot.debug(1, "Kekbot: Imploding. Bye bye!");
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
		kekbot.debug(1, "Kekbot: Init.");
		API.on(API.CHAT, kekbot.handle.chat);
		API.on(API.USER_JOIN, kekbot.handle.user.Join);
		API.on(API.USER_LEAVE, kekbot.handle.user.Jeave);
		API.on(API.USER_FAN, kekbot.handle.user.Fan);
		API.on(API.USER_SKIP, kekbot.handle.user.Skip);
		kekbot.updateTimer = setInterval(kekbot.update, 1000*60*10);
		//update all plugins.
	}
	
	kekbot.update = function(){
		kekbot.debug(1, "Checking for updates.");
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
			kekbot.debug(1, "KekBot_Plugins: [add] Passed variable is not an object. Quitting.");
			return false;
		}
		if(!obj.name || !obj.url){
			kekbot.debug(1, "KekBot_Plugins: [add] Object doesn't have either a name or url attribute.");
			return false;
		}
		if(!((typeof obj.name == "string") && (typeof obj.url == "string"))){
			kekbot.debug(1, "KekBot_Plugins: [add] Both the plugin name and URL MUST be string!");
			return false;
		}
		if (!(/^[a-z]+$/i.test(obj.name))){
			kekbot.debug(1, "KekBot_Plugins: [add] Plugin name MUST be alphabetic characters only.");
			return false;
	    	}
	    	if (!kekbot.testURL(obj.url)){
	    		kekbot.debug(1, "KekBot_Plugins: [add] Plugin URL MUST be a valid URL!");
	    		return false;
	    	}
	    	for (item in kb_plugins.installedPlugins){
	    		if (obj.name == item){
	    			kekbot.debug(1, "KekBot_Plugins: [add] A plugin with the name "+obj.name+" is already installed!");
	    			return false;
	    		}
	    		if (obj.url == kb_plugins[item]){
				kekbot.debug(1, "KekBot_Plugins: [add] A plugin's update URL is the same with another plugin's.");
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
			kekbot.debug(1, "KekBot_Plugins: [update] Cannot update a plugin that isn't installed!");
			return false;
		}
		var plugininfo = document.createElement("script");
		plugininfo.setAttribute("id", "KB_PluginInfo_"+p);
		plugininfo.setAttribute("src", kb_plugins.installedPlugins[p].url);
		document.getElementById("KB_PluginsInfo").appendChild(plugininfo);
	}
	kekbot.plugin.install = function(name, url){
		try{
			var x = document.getElementById("KB_PluginInfo_"+name);
			x.parentNode.removeChild(x);
		}
		catch(e){
			kekbot.debug(1, "KekBot: could not remove plugin version info during installation (not supposed to happen)!");
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
			return true;
		}
		catch(e){
			kekbot.debug(1, "Could not install the plugin "+name+"!");
			kekbot.debug(1, "Error: "+e);
			try{
				delete kb_plugins.pendingPlugins[name];
				delete kb_plugins.activePlugins[name];
			}catch(e){}
		}
		return false;
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
					kekbot.debug(1, "Could not add plugin listener: unsupported type.");
					return false;
			}
		}
		catch(e){
			kekbot.debug(1, "Could not add plugin listener.");
			kekbot.debug(1, "Type: "+obj.type+" Plugin: "+obj.plugin+" Name: "+obj.name+" Error: "+e);
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
					kekbot.debug(1, "Could not remove plugin listener: unsupported type.");
					return false;
			}
			
		}
		catch(e){
			kekbot.debug(1, "Could not remove plugin listener.");
			kekbot.debug(1, "Error: "+e);
		}
	}
	kekbot.plugin.testType = function(type){
		return (type == kekbot.pluginType)?true:false;
	}
	
	//Start kekbot.
	kekbot.say("KekBot: Installed. v"+kekbot.version+" BuildNum #"+kekbot.buildnum);
	kekbot.init();
	kekbot.plugin.add({
		name: "core",
		url: "https://raw.github.com/Strategetical/kekbot/master/plugins/core/info.js"
});
})();
