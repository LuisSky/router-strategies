const getUserForName = (req, res) => {
  return res.status(200).send(`Hello ${req.params.name}`);
};

module.exports = getUserForName;