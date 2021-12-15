
// file:  Models/ user-model.js
class UserModel {
  async find(userData) {
    return { id: `${userData.id}`, name: 'Any User', mail: 'any@mail.com', password: 'anypass' }
  }
}

module.exports = UserModel