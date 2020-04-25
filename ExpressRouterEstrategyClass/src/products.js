const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Products List'));
  
router.get('/:name', (req, res) => res.status(200).send(`Product info: ${req.params.name}`));

module.exports = router;
