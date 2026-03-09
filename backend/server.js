// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Port
// const PORT = 3000;

// // Sample Route
// app.get('/api/hello', (req, res) => {
//     res.json({
//         message: "Hello from Node.js server"
//     });
// });

// // POST Route Example
// app.post('/api/data', (req, res) => {
//     const bodyData = req.body;

//     res.json({
//         message: "Data received successfully",
//         data: bodyData
//     });
// });

// // Keep Alive dont remove helps to wake the Render all the time for every 14minutes by using the "http://console.cron-job.org" 
// app.get('/api/ping', (req, res) => {
//   res.status(200).send('Keep-Alive');
// });

// // Server Listener
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/db");

const adminRoutes = require("./routes/admin/adminRoutes");
const authRouters = require("./routes/authRouters");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRouters);



// Keep Alive dont remove helps to wake the Render all the time for every 14minutes by using the "http://console.cron-job.org" 
app.get('/api/ping', (req, res) => {
  res.status(200).send('Keep-Alive');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});