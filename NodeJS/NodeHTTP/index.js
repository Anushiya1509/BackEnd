const http = require('http');
const fs = require('fs');
const path = require('path');
const { exist } = require('joi');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);
    if(req.method=='GET'){
        var fileURL;
        if(req.url=='/')
            fileURL = '/index.html'
        else
            fileURL = req.url;
        var filePath = path.resolve('./public' + fileURL);
        var fileExtension = path.extname(filePath);
        if(fileExtension=='.html'){
            fs.exists(filePath, (exists) => {
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-type', 'text/html');
                    res.end('<html><body><h1>Error: ' + fileURL + ' not found</h1></body></html>');
                }
                else{
                    res.statusCode = 200;
                    res.setHeader('Content-type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html');
            res.end('<html><body><h1>Error: ' + fileURL + ' is not a HTML file</h1></body></html>');
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/html');
        res.end('<html><body><h1>Coming soon...</h1></body></html>');
    }
});
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})