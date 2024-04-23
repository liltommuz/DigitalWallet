const express = require('express')
const userRoutes = express.Router()

const { getDatabaseConnection } = require('../../functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

userRoutes.post('/api/users/login', (request, response) => {

    let { email, password } = request.body

    databaseConnection.query(`SELECT * FROM users WHERE email = "${email}" AND password = "${password}";`, function (error, results) {
        if (error) throw error;
        results.length !== 0 ? response.send(results[0]) : response.send({ notValidLogin: true })

    })

})

userRoutes.post('/api/users/register', (request, response) => {

    const { firstName, lastName, email, password } = request.body

    let resultObject

    databaseConnection.query(`INSERT INTO users (firstName, lastName, email, password) VALUE ("${firstName}", "${lastName}", "${email}", "${password}");`, (error, result) => {

        error?.code == 'ER_DUP_ENTRY' ? resultObject = { emailAlreadyUsed: true } : resultObject = { firstName: firstName, email: email }
        response.json(resultObject)

    })
})

userRoutes.post('/api/users/delete', (request, response) => {

    const { user_id } = request.body

    databaseConnection.query(`DELETE FROM users WHERE id = "${user_id}";`, function (error, results) {
        if (error) throw error;
        results.affectedRows == 0 ? response.send(`Non è stato cancellato nessun utente.`) : response.send(`L'utente con ID ${user_id} è stato cancellato.`)

    })
})

module.exports = { userRoutes }
