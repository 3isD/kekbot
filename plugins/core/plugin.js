/*
Kekbot core plugin.
*/

(function(){
  var name = "core";
  var build = 1;
  var version = "0.1dev";
  
  kb_installedPlugins[name].build = build;
  kb_installedPlugins[name].version = version;
  
  kb_pendingPlugins[name] = {
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
