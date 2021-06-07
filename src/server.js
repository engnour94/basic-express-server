'use strict';
const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
app.use(express.json());
app.use(logger);

app.get('/', home);
app.get('/bad', badReq);
function home(req,res){
  res.send('welcome to server.js');
}
function badReq(req, res) {
  throw new Error('Something went wrong !!!!!');
}
//
app.get('/person', validator, (req, res) => { // validator is a custom middleware 
  res.status(200).json({
    name: req.query.name,
  });
});

function start(PORT){
  app.listen(PORT,()=>{
    console.log(`app is listening on PORT ${PORT}`);
  });
}

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};