var express=require('express');
var app=express();
app.use(express.logger());
var fs = require('fs');

app.get('/',function(request,response){
fs.readFile('./index.html','utf8',function(err,data){
if(err) {
return console.log(err);
}
var buf= new Buffer(data,"utf-8");
var string = buf.toString("utf-8",0,buf.length);
response.send(string);
});
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
