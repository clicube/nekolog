const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/events', function (req, res) {
  res.send('Hello World!')
})

module.exports.handler = serverless(app);
