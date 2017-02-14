// server.js
// where your node app starts

// init project
var express = require('express');

const convertDate = require('./convertDate'); 
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('views'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:date", convertDate);


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
