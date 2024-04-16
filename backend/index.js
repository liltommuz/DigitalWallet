const express = require("express")
const server = express()
const cors = require("cors")
const serverPort = 3001

server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }));

const { getDatabaseConnection } = require('./functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

if(!databaseConnection) return console.log('Il db ha detto no :p')

server.listen(serverPort, () => {
    console.log("Server Status: UP")
})

// Routes
const { userRoutes } = require('./routes/users/user')
server.use(userRoutes)