var http = require('http');
var fs = require('fs');
var app = require('./app');


function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}
    
function change_page(){
   
    x.addEventlistener("click",loginpage(),false); 
   
}function loginpage(){
var x = window.getElementById("loginButton");
x.location.href = './login.html';
}
http.createServer(onRequest).listen(3000);