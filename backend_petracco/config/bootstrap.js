/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const products = [
  {
    name: 'yolo',
    description: 'zoheugayagqleg',
    price: '999999'
  },
  {
    name: 'yolo_swag',
    description: 'zoheugayagqleg',
    price: '999999'
  },
  {
    name: 'yolo_swaggy_yo',
    description: 'zoheugayagqleg',
    price: '999999'
  },
  {
    name: 'yolo_swoing',
    description: 'AHAJAHJSHDJAKA',
    price: '987'
  },
  {
    name: 'yolo_easy',
    description: 'OHOHOHOH',
    price: '756'
  },
  {
    name: 'yolo_fouiny',
    description: 'ahahahaha',
    price: '8987967'
  }
]

module.exports.bootstrap = async function(done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  products.forEach(product => {
    Product
    .findOrCreate({
      name: product.name,
      description: product.description,
      price: product.price
    }, {
      name: product.name,
      description: product.description,
      price: product.price
    })
    .exec((error, product) => {
      if (error) sails.log.error(error)

      sails.log.info('Created fixture product', product)
    })
  })


  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
