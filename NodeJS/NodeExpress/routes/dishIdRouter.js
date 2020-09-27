const express = require('express');
const bodyParser = require('body-parser');
const dishIdRouter = express.Router();

dishIdRouter.use(bodyParser.json());

dishIdRouter.route('/')
.get((req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishID +' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishID);
})
.put((req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishID + '\n');
    res.end('Will update the dish: ' + req.body.name + 
          ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishID);
});   

module.exports = dishIdRouter;