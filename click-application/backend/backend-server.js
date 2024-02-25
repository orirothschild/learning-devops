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

// POST endpoint to record a click
app.post('/click', async (req, res) => {
  try {
    const newClick = new Click();
    await newClick.save();

    // Check if the click was recorded
    const recordedClick = await Click.findOne({ _id: newClick._id });

    if (recordedClick) {
      res.status(200).json({
        message: 'Click recorded!',
        timestamp: recordedClick.timestamp,
      });
    } else {
      res.status(500).send('Click not recorded in the database');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// GET endpoint to retrieve all clicks
app.get('/clicks', async (req, res) => {
  try {
    const allClicks = await Click.find().sort({ timestamp: 'desc' });

    res.status(200).json(allClicks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://35.231.155.182:${port}`);
});
