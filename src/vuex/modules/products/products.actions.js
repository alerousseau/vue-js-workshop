import Vue from 'vue'
import {
  FETCH_PRODUCTS
} from './mutation-types'

const actions = {
  /**
   * @param context
   * @param page
   */
  fetchProducts ({ commit }) {
    return Vue.http
        .get('Product/')
        .then((response) => {
          console.log('coucou yolo', response)
          commit(FETCH_PRODUCTS, response.body)
        })
        .catch((err) => console.log('mais pk ca march po', err))
  }
}

export default actions
