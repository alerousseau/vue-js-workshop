module.exports = {

  /**
   * @param req
   * @param res
   */
  getProducts: (req, res) => {
    let page = req.param('page')
    let user = CryptographyService.decrypt(req.cookies.user)

    Product
      .count()
      .where({
        user: {'!': user}
      })
      .exec((error, amountOfProducts) => {
        if (error) return res.serverError(error)

        Product
          .find()
          .where({
            user: {'!': user}
          })
          .populate('user')
          .paginate({page, limit: 6})
          .exec((error, products) => {
            if (error) return res.serverError(error)

            if (products) return res.json({
              products,
              amountOfProducts
            })
          })
      })
  },

  /**
   * @param req
   * @param res
   */
  getProductsByUser: (req, res) => {
    let user = CryptographyService.decrypt(req.cookies.user)

    Product
      .find({
        user
      })
      .exec((error, products) => {
        if (error) return res.serverError(error)

        if (products) return res.json(products)
      })
  }
}
