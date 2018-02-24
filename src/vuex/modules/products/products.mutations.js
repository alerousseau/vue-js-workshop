import {
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
  CREATE_PRODUCT
} from './mutation-types'

const mutations = {
  [FETCH_PRODUCTS] (state, products) {
    // assign the products that we got from our FETCH_PRODUCTS event to state.all
    state.products = products
  },

  [CREATE_PRODUCT] (state, product) {
    state.products.push(product)
  },

  [DELETE_PRODUCT] (state, productId) {
    state.products = state.products.filter(p => p.id !== productId)
  }
}

export default mutations
