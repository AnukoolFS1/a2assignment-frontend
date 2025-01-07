require('dotenv').config()
const express = require('express');
const app = express();
const connect = require('./db/db');
const router = require('./routes/route');
const cors = require('cors');

// deciding the port with env
const PORT = process.env.PORT || 4400;
// db connection
connect()

// implement the cors option
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeader: "Content-Type"
}

// middlewares for handling req
// cors
app.use(cors(corsOptions))
// json data
app.use(express.json())

// routings
app.use("/", router);

app.listen(PORT, () => console.log('server is running'))