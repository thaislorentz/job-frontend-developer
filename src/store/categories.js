import service from '../service/products'

export default {
    state: {
      categories: []
    },
    getters: {
      getCategories(state) {
        return state.categories;
      },
    },
    mutations: {
      set_categories(state, categories) {
        state.categories = categories;
      }
    },
    actions: {
      async getAllCategories(context) {
        const categories = await service.getCategories();
        context.commit("set_categories", categories);
      }
    }
  }
  