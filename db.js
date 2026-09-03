const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbConnection;
const MongoURI = process.env.MONGO_URI;

module.exports = {
  connectToServer: async function (callback) {
    const client = new MongoClient(MongoURI);
    await client.connect();
    dbConnection = client.db('giftDB');
    console.log('Successfully connected to MongoDB');
    callback();
  },
  getDb: function () {
    return dbConnection;
  },
};
