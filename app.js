var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Durg,IN&appid=9224e5764a7cce1700d89dc63170b60a&units=metric'
var server= http.createServer(function(request,response){
  // All logic will go there
  var request = require('request');
  request(url, function(err,res,body){
        var data = JSON.parse(body);
            response.write("<html><body><div id='container'>");
            response.write("<h1>" + 'City Name - : ' + data['name'] + '<br>'+ "</h1>");
            response.write("<h2>" + 'Temprature - :' + data.main['temp'] + '<br>' + "</h2>" );
            response.write("<h2>" + 'Sunset Time - :' + new Date(data.sys['sunset'] + 1000) + "</h2>" );
            response.write("<div><body></html>");

    //   console.log(body);
    // response.write('Hey! This is my Node Js Demo Project');
            response.end();

  });
    
}).listen(3001);

