const UserModel = require('../models/user-model')

// file:  Controllers/user-controller.js
class UserController {
  async getUser(httpRequest) {

    const { user_id } = httpRequest.body

    const user = await new UserModel().find({ id: user_id })

    return {
      statusCode: 200,
      body: user
    }
  }
}

module.exports = UserController