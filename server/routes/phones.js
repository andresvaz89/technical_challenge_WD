'use strict';

const express = require('express');
const router = express.Router();
const phonesJSON = require('../data/phones.json');

router.get('/', (req, res, next) => {
  // Add image path;

  const phones = phonesJSON.map((phone) => {
    return { ...phone, imageFileName: `/images/${phone.imageFileName}` };
  });

  res.json({ phones });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  // Filter phone by ID.
  const phone = phonesJSON.filter((phone) => phone.id === Number(id))[0];

  res.json({
    phone: { ...phone, imageFileName: `/images/${phone.imageFileName}` }
  });
});

module.exports = router;
