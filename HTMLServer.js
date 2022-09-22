const http = require('http')
const url = require('url')
const fs = require('fs');

http.createServer(function(req, res){
    const reqUrl = url.parse(req.url).pathname
    fs.readFile('TomHardy.html',function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
   })

server.listen(8080)