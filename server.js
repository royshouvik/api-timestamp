// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('views'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:date", function (request, response) {
  const unixTime = parseInt(request.params.date);
  let date;
  if(unixTime) {
    // try to convert to date
    date = new Date(unixTime > 9999999999 ? unixTime : unixTime * 1000);
  }
  else {
    date = new Date(request.params.date);
  }
  
  
  //If its a valid date
  if(date.valueOf()) {
    response.json({
      unix : date.getTime()/1000,
      natural: `${date.toLocaleDateString("en-us", {month:"long"})} ${date.getDate()}, ${date.getFullYear()}`
    });
  }
  else
    response.json({
      unix: null,
      natural: null
    });
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
