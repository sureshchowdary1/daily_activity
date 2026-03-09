const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Port
const PORT = 3000;

// Sample Route
app.get('/api/hello', (req, res) => {
    res.json({
        message: "Hello from Node.js server"
    });
});

// POST Route Example
app.post('/api/data', (req, res) => {
    const bodyData = req.body;

    res.json({
        message: "Data received successfully",
        data: bodyData
    });
});

// Keep Alive dont remove helps to wake the Render all the time for every 14minutes by using the "http://console.cron-job.org" 
app.get('/api/ping', (req, res) => {
  res.status(200).send('Keep-Alive');
});

// Server Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});