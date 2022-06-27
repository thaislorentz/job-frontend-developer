import service from '../service/cart'

export default {
    state: {
      cart: [],
    },
    getters: {
      getCart(state) {
        return state.cart;
      }
    },
    mutations: {
      set_cart(state, cart) {
        state.cart = cart;
      }
    },
    actions: {
      async getCartProductsById(context, id) {
        const cart = await service.getCartById(id);
        context.commit("set_cart", cart);
      }
    }
  }
  