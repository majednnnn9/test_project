const carModel = require('../model/car_model')
class CarController {

    static async createCar(req, res) {
        var results = await carModel.createCar();
        if (results)
            res.status(201).json({
                "message": "succesful",
            })
        else
            res.status(404).json({
                "message": "failure",
            })
    }

    static async getAllCars(req, res) {
        var result = await carModel.getCars();
        if (result)
            res.status(201).json({
                "message": "succesful",
                "data": result,
            })
        else
            res.status(404).json({
                "message": "failure",
            })
    }
}

module.exports = CarController;