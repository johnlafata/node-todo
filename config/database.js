var cfenv = require("cfenv")
var appEnv = cfenv.getAppEnv()

var service_url=appEnv.getServiceURL("mongodb2", {
      pathname: "database",
      auth:     ["username", "password"]
    })

// var service_url = appEnv.getService("mongodb2").credentials.uri;
if ( service_url == null ){
    service_url = 'mongodb://mongodb';
}
console.log(">>> service_url: " + service_url);

module.exports = {
  localUrl:
      service_url+"/meanstacktutorials"
  //localUrl: 'mongodb://mongodb/meanstacktutorials'
  //localUrl: 'mongodb://mongodb.node-todo.svc.cluster.local/meanstacktutorials'
};
