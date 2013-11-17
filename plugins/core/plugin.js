/*
Kekbot core plugin.
*/

(function(){
  var name = "core";
  var build = 1;
  var version = "0.1dev";
  
  kb_plugins.installedPlugins[name].build = build;
  kb_plugins.installedPlugins[name].version = version;
  
  kb_plugins.pendingPlugins[name] = {
    roll: function(data){
      kekbot.say("@"+data.username+" just did a barrel roll");
    }
  };
  kekbot.plugin.addListener({
    type: "command",
    command: "^roll",
    plugin: name,
    name: "say"
  });
  
  kekbot.plugin.verifyInstall(name);
})()
