import initialState from './products.state'
import actions from './products.actions'
import * as getters from './products.getters'
import mutations from './products.mutations'

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations
}
