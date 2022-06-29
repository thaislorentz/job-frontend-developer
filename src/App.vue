<template>
  <div id="app">
    <div v-if="isLoad" class="loading">
      <Loading />
    </div>
    <router-view v-else/>  </div>
</template>

<script>
import { mapActions } from "vuex";
import Loading from './components/Loading.vue'

export default {
  name: "App",
  data() {
    return {
      isLoad: true
    };
  },
  components: {
    Loading
  },
  methods: {
    ...mapActions({
      getAllProducts: "getAllProducts",
      getAllCategories: "getAllCategories",
      getCartProductsById: "getCartProductsById"
    })
  },
  async mounted() {
    await this.getAllCategories();
    await this.getAllProducts();
    await this.getCartProductsById(2)
    this.isLoad = false
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700&display=swap");
@import "@/assets/_colors.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  outline: none;
  -webkit-appearance: none;
}
body {
  background: $background;
}
input {
  cursor: pointer;
}
button {
  cursor: pointer;
}
.page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.loading {
  background: $secondary;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
