const express = require('express');
const router = express.Router();
// Controller 
const UserController = require('../controller/user_controller');
const CarController = require('../controller/car_controller');

// Route
router.get('/', UserController.getAllUsers)
/////// Car Route ///////[]
router.get('/car', CarController.getAllCars)
router.post('/car/create', CarController.createCar)

// تصدير الراوتر
module.exports = router;