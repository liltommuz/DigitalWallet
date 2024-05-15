const express = require('express')
const accountRoutes = express.Router()

const { getDatabaseConnection } = require('../../functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

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

accountRoutes.post('/api/accounts/create', (request, response) => {

    const { add_accounts_typology, add_accounts_name, add_accounts_amount, emailAccount } = request.body
    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ error: "AccountNotFound" })
        const userId = results[0].id

        databaseConnection.query(`INSERT INTO accounts (typology, name, amount, user_id) VALUE ("${add_accounts_typology}", "${add_accounts_name}", ${parseFloat(add_accounts_amount)}, ${userId})`, function (error, result) {
            if(error) throw error 
            return response.send(true)

        })

    })
})

accountRoutes.post('/api/accounts/update', (request, response) => {
    const { edit_accounts_typology, edit_accounts_name, edit_accounts_amount, accountId, emailAccount } = request.body

    databaseConnection.query(`SELECT id FROM users WHERE email = "${emailAccount}";`, function (error, results) {
        if(results.length == 0) return response.send({ error: "AccountNotFound" })
        const userId = results[0].id

        databaseConnection.query(`UPDATE accounts SET typology = "${edit_accounts_typology}", name = "${edit_accounts_name}", amount = ${parseFloat(edit_accounts_amount)} WHERE account_id = ${parseInt(accountId)};`, function (error, result) {
            if(error?.code == 'ER_BAD_FIELD_ERROR') throw error
            return response.send(result)

        })

    })
})

module.exports = { accountRoutes }