const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db');

router.get('/api/gifts', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('gifts');
    const gifts = await collection.find({}).toArray();
    res.json(gifts);
  } catch (e) {
    res.status(500).send('Error fetching gifts');
  }
});

router.get('/api/gifts/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('gifts');
    const gift = await collection.findOne({ id: req.params.id });
    res.json(gift);
  } catch (e) {
    res.status(500).send('Error fetching gift');
  }
});

module.exports = router;
