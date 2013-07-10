var express = require('express');

var app = express.createServer(express.logger());
var pgBuf = fs.readFileSync("index.html");
var pgBody = pgBuf.toString();

app.get('/', function(request, response) {
  response.send(pgBody);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
