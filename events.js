'use strict';

const TableName = "Events";

const AWS = require('aws-sdk');
const ddc = new AWS.DynamoDB.DocumentClient();

function validate(event) {
    
}

module.exports.get = () => {
    return ddc.get({
        TableName: TableName
    }).promise()
    .then( (result) => { return result.Items } )
};