require('dotenv').config()
const express = require('express');
const app = express();
const connect = require('./db/db');
const router = require('./routes/route');

// deciding the port with env
const PORT = process.env.PORT || 4400;

// db connection
connect()

app.get("/", router);

app.listen(PORT, () => console.log('server is running'))