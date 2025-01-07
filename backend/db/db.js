const mongoose = require('mongoose');

const URI = process.env.DB_URI

async function connect () {
    await mongoose.connect(URI)
    console.log("db connected");
}

module.exports = connect