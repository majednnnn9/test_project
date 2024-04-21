const mysql = require('../config/db');
class UserModel {
    static async getUsers() {
        return new Promise(resolve => {
            mysql.query('SELECT * FROM user limit 0 , 3', [], (error, results) => {
                if (!error);
                resolve(results);
            })
        })
    }
}
module.exports = UserModel; 