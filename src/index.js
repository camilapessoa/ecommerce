const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes')

const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true
}, console.log("Conected to db"))

app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(3030, () => console.log('Server is running'))