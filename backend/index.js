const express = require("express")
const server = express()

const bodyParser = require('body-parser')
const cors = require("cors")
const serverPort = 3001

server.use(cors())
server.use(bodyParser.json())

const { getDatabaseConnection } = require('./functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

if(!databaseConnection) return console.log('Il db ha detto no :p')
server.listen(serverPort, () => { console.log("Server Status: UP") })

// Routes
const { userRoutes } = require('./routes/users/user')
const { accountRoutes } = require('./routes/accounts/account')
const { transactionRoutes } = require('./routes/transactions/transaction')

server.use(userRoutes)
server.use(accountRoutes)
server.use(transactionRoutes)