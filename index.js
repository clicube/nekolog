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

const ngResponce = { result: "NG" }

app.get('/pets/:petId/events', (req, res, next) => {
  events.findByPetId(ddc, req.params.petId)
  .then( (result) => { res.send(result) } )
  .catch( () => { return ngResponce })
})

app.put('/pets/:petId/events', (req, res, next) => {
  events.add(ddc, req.params.petId, req.body)
  .then( (result) => { res.send(result) } )
  .catch( () => { return ngResponce })
})

module.exports.handler = serverless(app)
