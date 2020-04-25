
// file:  Models/ user-model.js
class UserModel {
  async find(userData) {
    return { id: `${userData.id}`, name: 'Any User', mail: 'any@mail.com', password: 'anypass' }
  }
}

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

// File: Helpers/express-adapter.js
class ExpressAdapter {
  static adapt(route) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body
      }
      const httpResponse = await route.getUser(httpRequest)

      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}

//  file: config/routes.js
const express = require('express');
const router = express.Router();

const User = new UserController()
router.post('/users', ExpressAdapter.adapt(User))

module.exports = router

