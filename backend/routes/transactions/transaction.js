const express = require('express')
const transactionRoutes = express.Router()

const { getDatabaseConnection } = require('../../functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

const now = new Date()

transactionRoutes.post('/api/transactions', (request, response) => {
    const { emailAccount } = request.body
    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ UserAccountNotFound: true })
        const userId = results[0].id 
        databaseConnection.query(`SELECT * FROM transactions WHERE user_id = ${userId};`, function (error, results) {
            return response.send(results)
        })
    })
})

transactionRoutes.post('/api/transactions/create', (request, response) => {
    const { amount, isIncome, account_id, emailAccount } = request.body
    const date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDay()}`
    console.log(date)

    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ UserAccountNotFound: true })
        const userId = results[0].id 
        
        databaseConnection.query(`INSERT INTO transactions (amount, isIncome, date, account_id, user_id) VALUE (${parseFloat(amount)}, ${parseInt(isIncome)}, "${date}", ${parseInt(account_id)}, ${parseInt(userId)});`, (error, results) => {
            if(error) throw error
            return response.send(true)
        })
    })
})

transactionRoutes.post('/api/transactions/delete', (request, response) => {
    const { transaction_id, emailAccount } = request.body
    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ UserAccountNotFound: true })
        const userId = results[0].id 

        databaseConnection.query(`DELETE FROM transactions WHERE transaction_id = ${transaction_id} AND user_id = ${userId};`, (error, result) => {
            if(error) throw error
            return response.send(true)

        })
    })
})

module.exports = { transactionRoutes }