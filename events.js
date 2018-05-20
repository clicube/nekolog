'use strict'

const TableName = "Events"

function validate(event) {

}

module.exports.findByPetId = (ddc, petId) => {
    return ddc.query({
        TableName: TableName,
        KeyConditionExpression : "#k = :val",
        ExpressionAttributeNames  : {"#k" : "petId"},
        ExpressionAttributeValues : {":val" : petId}
       }).promise()
    .then((result) => { return result.Items })
}

module.exports.add = (ddc, petId, event) => {
    validate(event)
    var item = {
        petId: petId,
        createdAt: event.createdAt || Date.now(),
        data: {
            categoly: event.data.categoly,
            type: event.data.type,
            value: event.data.value
        }
    }
    return ddc.put({
        TableName: TableName,
        Item: item
    }).promise()
    .then(() => { return item })
}
