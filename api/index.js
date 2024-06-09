const express = require('express');
const app = express();

// Import the JSON data
const data = require('../data.json');

// Define a route to serve the JSON data
app.get('/', (req, res) => {
    res.json(data);
});

app.get('/api/data', (req, res) => {
    res.json(data);
});

// Export the app to use as a serverless function
module.exports = app;
module.exports = (req, res) => {
    app(req, res);
};
