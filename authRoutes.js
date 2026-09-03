const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { connectToDatabase } = require('../db');

router.post('/register', async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('users');
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await collection.insertOne({ email: req.body.email, password: hashedPassword });
  res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('users');
  const user = await collection.findOne({ email: req.body.email });
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

router.put('/update', async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection('users');
  await collection.updateOne({ email: req.body.email }, { $set: req.body });
  res.status(200).send('User updated');
});

module.exports = router;
