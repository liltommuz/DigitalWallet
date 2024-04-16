const express = require('express')
const userRoutes = express.Router()

const { getDatabaseConnection } = require('../../functions/databaseConnection')
const databaseConnection = getDatabaseConnection()

userRoutes.get('/api/users', (request, response) => {

    let user_id = request.body.user_id

    if(user_id === undefined) {
        databaseConnection.query('SELECT * FROM users;', function (error, results) {
            if (error) throw error;
            response.send(JSON.stringify(results))

        })
    
    } else {

        databaseConnection.query(`SELECT * FROM users WHERE id = "${user_id}";`, function (error, results) {
            if (error) throw error;
            response.send(JSON.stringify(results))

        })

    }

})

userRoutes.post('/api/users', (request, response) => {

    const { firstName, lastName, email, password } = request.body

    console.log(request.body)

    databaseConnection.query(`INSERT INTO users (firstName, lastName, email, password) VALUE ("${firstName}", "${lastName}", "${email}", "${password}");`, (error, result) => {

        if(error?.code == 'ER_DUP_ENTRY') return response.send('Indirizzo email già utilizzato.')
        response.send(JSON.stringify(result))

    })
})

userRoutes.delete('/api/users', (request, response) => {

    let user_id = request.body.user_id

    databaseConnection.query(`DELETE FROM users WHERE id = "${user_id}";`, function (error, results) {
        if (error) throw error;
        if(results.affectedRows == 0) {
            response.send(`Non è stato cancellato nessun utente.`)

        } else {
            response.send(`L'utente con ID ${user_id} è stato cancellato.`)

        }

    })
})

module.exports = { userRoutes }
