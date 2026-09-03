const express = require('express');
const app = express();
const searchRoutes = require('./routes/searchRoutes');

app.use('/api/search', searchRoutes);
// ya direct route bhi likh sakte hain

module.exports = app;
