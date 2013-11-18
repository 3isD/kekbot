/*
Kekbot core plugin.
*/

(function(){
  /////////////////////////////////////////////////
  //MODIFY VARIABLES IF WANTED
  var name = "core";
  var build = 1;
  var version = "0.1dev";
  /////////////////////////////////////////////////
  
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
      if (lvl > 5 || lvl < 0){
        kekbot.debug(1, "Cannot set debugging level to a number more than 5 or less than 0!");
      }
      if (lvl == 0){
        kekbot.say("Debug: disabled.");
      }
      else{
        kekbot.say("Debug: set to level "+lvl);
      }
      
    }
    //}
  }
  /////////////////////////////////////////////////
  
  /////////////////////////////////////////////////
  //IF ALL WENT WELL, WE WILL INSTALL THE FUNCTIONS
  kekbot.plugin.verifyInstall(name);
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
  /////////////////////////////////////////////////
  
})()
