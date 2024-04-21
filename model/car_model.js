const mysql = require('../config/db');
class CarModel {

    static async getCars() {
        return new Promise(resolve => {
            mysql.query("SELECT * FROM `car`  ", [], (error, results) => {
                if (!error);
                resolve(results);
            })
        })
    }
    static async createCar() {
        return new Promise(resolve => {
            mysql.query("", [], (error, results) => {
                if (!error);
                resolve(results);
            })
        })
    }
}


module.exports = CarModel;