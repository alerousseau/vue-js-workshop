import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/user.module'
import product from './modules/product/product.module'
import products from './modules/products/products.module'

Vue.use(Vuex)

/**
 * @see {@link https://stackoverflow.com/questions/10730362/get-cookie-by-name#answer-40786371}
 * @param name
 * @returns {string}
 */
const getCookie = name => {
  let a = `; ${document.cookie}`.match(`;\\s*${name}=([^;]+)`)
  return a ? a[1] : ''
}

export default new Vuex.Store({
  modules: {
    User: user,
    Product: product,
    Products: products
  },
  state: {
    isUserAuthenticated: !!(getCookie('user'))
  },

  mutations: {

    /**
     * @param state
     * @param isUserAuthenticated
     */
    SET_IS_USER_AUTHENTICATED (state, isUserAuthenticated) {
      state.isUserAuthenticated = isUserAuthenticated
    }
  }
})
