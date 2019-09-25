var http = require('http'),
    port = 4000,
    fs = require('fs');


var server = http.createServer();

server.on('request', function (req, res) {
    fs.readFile(__dirname +  '/index.html', 'utf-8', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("not found!");
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

server.listen(port);
console.log("server listening ...");

