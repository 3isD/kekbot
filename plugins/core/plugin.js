/*
Kekbot core plugin.
*/

(function(){
  /////////////////////////////////////////////////
  //MODIFY VARIABLES IF WANTED
  var name = "core";
  var build = 1;
  var version = "0.1dev";
  var pluginType = "v1";
  /////////////////////////////////////////////////
  if(!kekbot.plugin.testType(pluginType)){
    //This means that the plugin isn't supported by Kekbot (needs to be updated)
    kekbot.debug(1, "Plugin "+name+" could not be installed: outdated plugin!");
    return false;
  }
  kb_plugins.installedPlugins[name].build = build;
  kb_plugins.installedPlugins[name].version = version;
  kb_plugins.pendingPlugins[name] = {};
  var z = kb_plugins.pendingPlugins[name];
  /////////////////////////////////////////////////
  //THIS IS WHERE YOU ADD FUNCTIONS
  z.enable = function(data){
    //if(kekbot.test.mod(data.fromID, true)){
    kekbot.status.enabled = true;
    kekbot.test.enabled = true;
    kekbot.say("Enabled.");
    //}
  }
  z.disable = function(data){
    //if(kekbot.test.mod(data.fromID, true)){
    kekbot.status.enabled = false;
    kekbot.test.enabled = false;
    kekbot.say("Disabled.");
    //}
  }
  z.debug = function(data){
    //if(kekbot.test.mod(data.fromID, true){
    data.message = data.message.split(" ");
    try{
      var lvl = parseInt(data.message[1]);
      kekbot.debugLevel = lvl;
      if (lvl > 5 || lvl < 0){
        kekbot.debug(1, "Cannot set debugging level to a number more than 5 or less than 0!");
      }
      if (lvl == 0){
        kekbot.say("Debug: disabled.");
      }
      else{
        kekbot.say("Debug: set to level "+lvl);
      }
      
    }catch(e){kekbot.debug(5, e);}
    //}
  }
  z.addMod = function(data){
    //if(kekbot.test.mod(data.fromID, true){
    
    //}
  }
  z.removeMod = function(data){
    //if(kekbot.test.mod(data.fromID, true){
    
    //}
  }
  z.addAdmin = function(data){
    //if(kekbot.test.kekbot(data.fromID){
    
    //}
  }
  z.removeAdmin = function(data){
    //if(kekbot.test.kekbot(data.fromID){
    
    //}
  }
  /////////////////////////////////////////////////
  
  /////////////////////////////////////////////////
  //IF ALL WENT WELL, WE WILL INSTALL THE FUNCTIONS
  if(!kekbot.plugin.verifyInstall(name)){
    //if it returned false, then installation wasn't successful.
    kekbot.debug(1, "Plugin "+name+" could not be installed: could not verify install!");
    return false;
  }
  /////////////////////////////////////////////////
  
  /////////////////////////////////////////////////
  //THIS IS WHERE YOU ADD LISTENERS FOR EACH OF YOUR COMMAND AFTER INSTALLATION
  kekbot.plugin.addListener({
    type: "command",
    command: "$enable",
    plugin: name,
    name: "enable"
  });
  kekbot.plugin.addListener({
    type: "command",
    command: "$disable",
    plugin: name,
    name: "disable"
  });
  kekbot.plugin.addListener({
    type: "command",
    command: "$debug",
    plugin: name,
    name: "debug"
  });
  kekbot.plugin.addListener({
    type: "command",
    command: "$addmod",
    plugin: name,
    name: "addMod"
  });
  kekbot.plugin.addListener({
    type: "command",
    command: "$removemod",
    plugin: name,
    name: "removeMod"
  });
  kekbot.plugin.addListener({
    type: "command",
    command: "$addadmin",
    plugin: name,
    name: "addAdmin"
  });
  kekbot.plugin.addListener({
    type: "command",
    command: "$removeadmin",
    plugin: name,
    name: "removeAdmin"
  });
  /////////////////////////////////////////////////
  
})()
