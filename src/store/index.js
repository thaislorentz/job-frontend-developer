import Vue from 'vue'
import Vuex from 'vuex'

import categories from './categories'
import cart from './cart'
import product from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category: categories,
    product: product,
    cart: cart
  }
})