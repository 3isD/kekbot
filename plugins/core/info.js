/*
Kekbot core plugin info.

Right now it's for testing the v2 plugin system.
*/

(function(){
  var build = 1;
  var name = "core";
  var url = "https://raw.github.com/Strategetical/kekbot/master/plugins/core/plugin.js";
  
  try{
    if(kb_plugins.installedPlugins[name].build >= build){
      return false;
    }
  }
  catch(e){}
  kekbot.plugin.install(name, url);
})();
