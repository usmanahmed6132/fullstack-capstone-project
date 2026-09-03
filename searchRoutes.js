const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db');

router.get('/api/search', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('gifts');
    const { category } = req.query;
    const filteredGifts = await collection.find({ category: category }).toArray();
    res.json(filteredGifts);
  } catch (e) {
    res.status(500).send('Error searching gifts');
  }
});

module.exports = router;
