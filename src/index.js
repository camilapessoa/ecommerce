const require = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true
}, console.log("Conected to db"))

app.listen(3333, () => console.log('Server is running'))