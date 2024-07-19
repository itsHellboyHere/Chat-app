require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require("path")
const authRoutes = require('../backend/routes/auth.routes');
const messageRoutes = require('../backend/routes/message.routes');
const userRoutes = require('../backend/routes/user.routes');
// Ensure the correct path to static files
const staticPath = path.join(__dirname, "../frontend/dist");
console.log("Serving static files from:", staticPath);

console.log(__dirname);
const connectToMongoDB = require('./db/connectToMongoDB');
const { app, server } = require("../backend/socket/socket")
const PORT = process.env.PORT || 5000
// console.log("Dirname", __dirname);
// const __dirname = path.resolve();


app.use(express.json()) // parse the incoming requests with JSON payloads
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)
// app.get('/', (req, res) => {
//     res.send('Server ready')
// })

app.use(express.static(staticPath));


app.get("*", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
})