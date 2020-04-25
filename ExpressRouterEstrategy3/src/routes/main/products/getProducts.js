const getProducts = (req, res) => {
  return res.status(200).send({ name: 'Notebook', price: 1200, description: 'Notebook samsung 1tb'})
};

module.exports = getProducts;