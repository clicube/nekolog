'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

const events = require('./events.js');

app.get('/events', (req, res, next) => {
  events.get().promise()
  .then( (result) => { res.send(result) } );
});

module.exports.handler = serverless(app);
