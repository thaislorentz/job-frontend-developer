import service from '../service/products'

export default {
    state: {
      products: [],
      productsCategory: []
    },
    getters: {
      getProducts(state) {
        return state.products;
      },
      getProductsCategory(state) {
        return state.productsCategory;
      }
    },
    mutations: {
        set_products(state, products) {
            state.products = products;
        },
        set_productsCategory(state, productsCategory) {
          state.productsCategory = productsCategory;
        },
    },
    actions: {
      async getAllProducts(context) {
        const products = await service.getProducts()
        context.commit("set_products", products);
      },
      async getProductsByCategory(context, {category, callback}) {
        const products = await service.getProductsCategory(category)
        context.commit("set_productsCategory", products);
        callback()
      }
    }
  }
  