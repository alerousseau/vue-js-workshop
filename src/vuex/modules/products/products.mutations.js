import {
  FETCH_PRODUCTS
} from './mutation-types'

const mutations = {
  [FETCH_PRODUCTS] (state, products) {
    // assign the products that we got from our FETCH_PRODUCTS event to state.all
    state.products = products
  }
}

export default mutations
