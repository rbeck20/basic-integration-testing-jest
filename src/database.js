const { MongoClient } = require('mongodb')

let connection
let db

async function closeConnection () {
    await connection.close()
}

async function connectToDB (uri, dbName) {
    connection = await MongoClient.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    db = await connection.db(dbName)
    console.log("db initialized")
}

function getDB () {
    return db
}

module.exports = { closeConnection, connectToDB, getDB }
