'use strict';
module.exports = (err, req, res, next) => {
  res.status(500).json({
    error:err,
    status: 500,
    message: err.message,
    route: req.path,
  });
};
// this is an error the last thing we want to move on and we already sending the response 3-8
// and there is nothing more steps to do 
// we don't have to invoke method because its already implemented inside jason and also because when the error take place there is nothing should we base after it