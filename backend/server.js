require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser')

const authRoutes = require('../backend/routes/auth.routes');
const messageRoutes = require('../backend/routes/message.routes');
const userRoutes = require('../backend/routes/user.routes');

const connectToMongoDB = require('./db/connectToMongoDB');


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) // parse the incoming requests with JSON payloads
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)
// app.get('/', (req, res) => {
//     res.send('Server ready')
// })

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
})