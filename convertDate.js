const MILLISECONDS = 1000;

module.exports = function(request, response) {
  const dateAsInteger = parseInt(request.params.date);
  const date = dateAsInteger? new Date(dateAsInteger * MILLISECONDS): new Date(request.params.date);
 
  //If its a valid date
  if(date.valueOf()) {
    response.json({
      unix : date.getTime()/MILLISECONDS,
      natural: `${date.toLocaleDateString("en-us", {month:"long"})} ${date.getDate()}, ${date.getFullYear()}`
    });
  }
  else
    response.json({
      unix: null,
      natural: null
    });
}