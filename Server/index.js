const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connection = require('./Config/mongo')
const router = require('./Router/testrouter')

const app = express() // Create Express application instance

connection()

app.use(express.json())
app.use(cors())
app.use('/', router)

dotenv.config()

const port =  5000 // 'PORT' should be uppercase
app.listen(port, () => console.log(`Server is running on port ${port}`))
