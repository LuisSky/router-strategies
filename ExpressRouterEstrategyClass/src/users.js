const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Users List'));
  
router.get('/:name', (req, res) => res.status(200).send(`Hello ${req.params.name}`));

module.exports = router;
