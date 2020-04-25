
module.exports = class UserRoute {
  async getUsers(req, res) {
    res.status(200).json({ ok: true });
  }
}