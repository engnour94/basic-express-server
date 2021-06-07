module.exports = (req, res, next) => {
  console.log('## request info ## ===>', req.method, req.path);
  //instead of put console.log in each rout here we can do it for each rout
  next(); // go to the next request 
};