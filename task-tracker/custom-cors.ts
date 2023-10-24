module.exports = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Change the * to your Angular app's URL for production
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
};
