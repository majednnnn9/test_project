const userModel = require('../model/user_model')
class UserController {
    static async getAllUsers(req, res) {
        var result = await userModel.getUsers()
        if (result);
        res.json({
            "message": "succesful",
            "data": result,
        })
    }
}

module.exports = UserController 