'use strict'

const TableName = "Events"

function validate(event) {

}

module.exports.findByPetId = (ddc, petId) => {
    return ddc.scan({
        TableName: TableName
    }).promise()
    .then( (result) => { return result.Items } )
}

module.exports.addt = (ddc, event) => {
    validate(event)
    return ddc.put({
        TableName: TableName,
        Item: {
            petId: event.petId,
            createdAt: Date.now(),
            data: JSON.stringify({
                categoly: event.categoly,
                type: event.type,
                value: event.value
            })
        }
    })
}
