import Vue from 'vue'
import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT
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
  },

  createProduct ({commit}, {product}) {
    return Vue.http
      .post('Product', {
        name: product.name,
        description: product.description
      })
      .then((response) => {
        console.log('coucou CREATE_PRODUCT', response)
        commit(CREATE_PRODUCT, response.body)
        return response.body
      })
      .catch((err) => console.log('mais pk ca march po', err))
  },

  deleteProduct ({ commit }, id) {
    return Vue.http.delete('Product', {
      params: {
        id
      }
    })
      .then((response) => {
        console.log('coucou DELETE_PRODUCT', response)
        commit(DELETE_PRODUCT, id)
      })
  },

  saveProduct ({ commit, state }, { product }) {
    const index = state.products.findIndex((p) => p.id === product.id)

    console.log('easy easy')
    // update product if it exists or create it if it doesn't
    if (index !== -1) {
      return null
    } else {
      console.log('easy Alley powseeeey', product)
      return actions.createProduct({ commit }, { product })
    }
  }

}

export default actions
