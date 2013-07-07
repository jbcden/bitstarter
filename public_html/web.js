var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = fs.readFileSync("/var/www/sadpanda.pw/public_html/index.html");

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, 'localhost', function() {
  console.log("Listening on " + port);
});
