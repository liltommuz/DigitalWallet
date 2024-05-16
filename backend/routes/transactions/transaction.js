const express = require('express')
const transactionRoutes = express.Router()

const { getDatabaseConnection } = require('../../functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

transactionRoutes.post('/api/transactions', (request, response) => {

})

transactionRoutes.post('/api/transactions/create', (request, response) => {

})

transactionRoutes.post('/api/transactions/delete', (request, response) => {

})