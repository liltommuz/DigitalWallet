const express = require('express')
const accountRoutes = express.Router()

const { getDatabaseConnection } = require('../../functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

accountRoutes.post('/api/accounts/create', (request, response) => {

    const { typology, name, amount, emailAccount } = request.body
    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ error: "AccountNotFound" })
        const userId = results[0].id

        databaseConnection.query(`INSERT INTO accounts (typology, name, amount, user_id) VALUE ("${typology}", "${name}", ${parseFloat(amount)}, ${userId})`, function (error, result) {
            if(error?.message.startsWith('CONSTRAINT')) return response.send({ accountTypeError: true }) 
            return response.send(true)

        })

    })
})

accountRoutes.post('/api/accounts/', (request, response) => {

    const { emailAccount } = request.body
    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ error: "UserAccountNotFound" })
        const userId = results[0].id
        databaseConnection.query(`SELECT * FROM accounts WHERE user_id = ${userId};`, function (error, results) {
            console.log(results)
            if(results.length == 0) return response.send({ information: "NoAccountCreated" })
            return response.send(results)

        })
    })
})

module.exports = { accountRoutes }