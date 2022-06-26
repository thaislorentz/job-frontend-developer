<template>
  <div id="app">
    <div v-if="isLoad">
      loading
    </div>
    <router-view v-else/>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      isLoad: true
    };
  },
  methods: {
    ...mapActions({
      getAllProducts: "getAllProducts",
      getAllCategories: "getAllCategories",
    })
  },
  async mounted() {
    await this.getAllCategories();
    await this.getAllProducts();
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
</style>
