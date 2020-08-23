var http = require('http');
var hostname = 'localhost';
var port = 3000;

var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
var hostname = appEnv.host;
var port = appEnv.port;

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



var AppClient = require("ibmiotf");
var appClientConfig = {
    "org" : "x9zu8t",
    "id" : "frailtyApp",
    "domain": "internetofthings.ibmcloud.com",
    "auth-key" : "a-x9zu8t-fnsclfaryf",
    "auth-token" : "WRCfOvOKydW3Oz6q?i"
}
 
var appClient = new AppClient.IotfApplication(appClientConfig);


  // code block to be executed
  appClient.connect();
  //setting the log level to 'trace'
  appClient.log.setLevel('trace');
  appClient.on("connect", function () {
    //appClient.subscribeToDeviceStatus("speaker");
    var dataToPublish={'name' : 'foo', 'cpu' : 60, 'mem' : 50};
    dataToPublish = JSON.stringify(dataToPublish);

    var myInt = setInterval(function () {
      console.log("time out ");
      appClient.publishDeviceEvent("speaker","speaker001", "myEvent", "json", dataToPublish); 
    }, 10000);
  });





