const serverless = require('serverless-http');
const express = require('express')
const app = express()

const AWS = require('aws-sdk');
const ddc = new AWS.DynamoDB.DocumentClient();

app.get('/events', (req, res, next) => {
  ddc.scan({
    TableName: "eventsTable"
  }).promise()
  .then((result) => res.send(result.items))
  .catch(next)
});

module.exports.handler = serverless(app);
