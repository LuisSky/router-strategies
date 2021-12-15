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

module.exports = ExpressAdapter