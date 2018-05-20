'use strict'

const TableName = "EventsV2"

function validate(event) {

}

module.exports.findByPetId = (ddc, petId) => {
    return ddc.scan({
        TableName: TableName
    }).promise()
    .then((result) => { return result.Items })
}

module.exports.add = (ddc, event) => {
    validate(event)
    var item = {
        petId: event.petId,
        createdAt: Date.now(),
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
