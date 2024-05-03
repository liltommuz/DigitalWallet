const mysql = require('mysql2')

function getDatabaseConnection() {

    const databaseConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'money_wise',
        port: 3306
    })
    
    try {
        databaseConnection.connect()
        return databaseConnection
        
    } catch (error) {
        if(error) return false
        
    }
}

module.exports = { getDatabaseConnection }