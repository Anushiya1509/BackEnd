const { text } = require('express');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes/:dishID', dishRouter);
app.use('/dishes', dishRouter);
app.use(express.static(__dirname + "/public"));

app.use((req,res)=>{
    req.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>Express</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});