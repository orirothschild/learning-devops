const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://mongodb-service:27017/clicksDB', { useNewUrlParser: true, useUnifiedTopology: true });

const clickSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Click = mongoose.model('Click', clickSchema);

app.post('/click', async (req, res) => {
  try {
    const newClick = new Click();
    await newClick.save();
    res.status(200).send('Click recorded!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
