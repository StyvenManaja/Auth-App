require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// Initialisation de la connexion à la base de données MongoDB
require('./config/db');

// Routes
const userRoute = require('./routes/user.route')

// Middlewares
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL
}))
app.use(morgan('dev'))

app.use('/api/user', userRoute)

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

module.exports = app