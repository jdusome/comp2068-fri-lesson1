/**
 * Created by Jungle on 22/09/2016.
 */
// link to node's http library
var http = require('http');

// start a local web server on port 3000 and listen for events
http.createServer(function(request, response) {
    response.writeHead(200); //http status ok
    response.end('Our first node page'); //end is the command to print to screen

}).listen(3000); //listening on port 3000

//print that the server has started
console.log('Server is running on port 3000');