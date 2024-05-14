const express = require('express')
const accountRoutes = express.Router()

const { getDatabaseConnection } = require('../../functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

accountRoutes.post('/api/accounts/create', (request, response) => {

    const { accounts_typology, accounts_name, accounts_amount, emailAccount } = request.body
    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ error: "AccountNotFound" })
        const userId = results[0].id

        databaseConnection.query(`INSERT INTO accounts (typology, name, amount, user_id) VALUE ("${accounts_typology}", "${accounts_name}", ${parseFloat(accounts_amount)}, ${userId})`, function (error, result) {
            if(error) throw error 
            console.log('daje')
            return response.send(true)

        })

    })
})

accountRoutes.post('/api/accounts/', (request, response) => {

    const { emailAccount } = request.body
    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ UserAccountNotFound: true })
        const userId = results[0].id
        databaseConnection.query(`SELECT * FROM accounts WHERE user_id = ${userId};`, function (error, results) {
            if(results.length == 0) return response.send({ information: "NoAccountCreated" })
            return response.send(results)

        })
    })
})

accountRoutes.post('/api/accounts/update', (request, response) => {
    const { accounts_typology, accounts_name, accounts_amount, emailAccount } = request.body
    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ error: "AccountNotFound" })
        const userId = results[0].id

        databaseConnection.query(`UPDATE accounts SET 
        `, function (error, result) {
            if(error) throw error 
            console.log('daje')
            return response.send(true)

        })

    })
})

module.exports = { accountRoutes }