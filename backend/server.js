require('dotenv').config()
const express = require('express');
const app = express();
const connect = require('./db/db')

const PORT = process.env.PORT || 4400;

connect()

app.get("/", (req, res) => {
    res.status(200).json({msg:"response from the server"})
});

app.listen(PORT, () => console.log('server is running'))