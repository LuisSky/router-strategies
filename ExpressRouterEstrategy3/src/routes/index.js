module.exports = (app) => {
  app.use('/users', require('./main/users/index'))
  app.use('/products', require('./main/products/index'))
};