'use strict';

process.on('unhandledRejection', console.dir)

const serverless = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const AWS = require('aws-sdk')
const ddc = new AWS.DynamoDB.DocumentClient()

const events = require('./events.js')

app.get('/events', (req, res, next) => {
  events.findByPetId(ddc, 1)
  .then( (result) => { res.send(result) } )
})

app.put('/events', (req, res, next) => {
  console.dir(req)
  events.add(ddc, req.body)
  .then( (result) => { res.send(result) } )
})

module.exports.handler = serverless(app)
