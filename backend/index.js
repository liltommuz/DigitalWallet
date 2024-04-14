const express = require("express")
const server = express()
const cors = require("cors")
const serverPort = 3001

server.use(express.json())
server.use(cors())


server.listen(serverPort, () => {
    console.log("Server Status: UP")
})
