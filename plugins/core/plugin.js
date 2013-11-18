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
    //if(kekbot.test.mod(data.fromID, true))//You can test for certain things before running the command.
    //{
    kekbot.debug(1, "Enabling.");
    kekbot.status.enabled = true;
    kekbot.debug(1, "k.s.e.: "+kekbot.status.enabled);
    kekbot.debug(1, "k.t.e.: "+kekbot.test.enabled);
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
  /////////////////////////////////////////////////
  
})()
