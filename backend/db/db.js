const mongoose = require('mongoose');

const URI = process.env.DB_URI // URI for the DB from the env

async function connect () {
    await mongoose.connect(URI) // connection
    console.log("db connected"); // awaring the connection
}

module.exports = connect