
const getUsers = (req, res) => res.status(200).send('Hello world');
const getUserForName = (req, res) => res.status(201).send(`Hello ${req.params.name}`);

module.exports = { getUsers, getUserForName };

