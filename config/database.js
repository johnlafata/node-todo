var cfenv = require("cfenv")
var appEnv = cfenv.getAppEnv()

var cf_service_url=appEnv.getServiceURL("mongodb2", {
      pathname: "database",
      auth:     ["username", "password"]
    })

// var service_url = appEnv.getService("mongodb2").credentials.uri;
if ( cf_service_url == null ){
    cf_service_url = 'mongodb://mongodb';
}

var node_service_host=process.env.MONGO_DATABASE_HOST;
var node_service_root_password=process.env.MONGODB_ROOT_PASSWORD

// get environment variables from k8s deployment
var mongo_db_url=null;
if (node_service_host !=null && node_service_root_password!=null){
    mongo_db_url="mongodb://root:"+node_service_root_password+"@"+node_service_host+":27017";
}
// if url still empty, get environment variables from k8s deployment
if (mongo_db_url ==null && cf_service_url!=null){
    mongo_db_url=cf_service_url;
}

console.log(">>> service_url: " + cf_service_url);
console.log(">>> node_service_host: " + node_service_host);
console.log(">>> node_service_root_password: " + node_service_root_password);
console.log(">>> mongo_db_url: " + mongo_db_url);

module.exports = {
    localUrl:
        mongo_db_url
    //    "mongodb://root:4vK50Fjsck@192.168.86.228:27017"
    //    service_url+"/meanstacktutorials"
    //localUrl: 'mongodb://mongodb/meanstacktutorials'
    //localUrl: 'mongodb://mongodb.node-todo.svc.cluster.local/meanstacktutorials'
};