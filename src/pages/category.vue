<template>
  <div class="page">
    <Header />
    <Title :title="category" />
    <div class="category-grid" v-if="isLoad">Loading</div>
    <div class="category-grid" v-else>
        <div v-for="(product, index) in products" :key="index">
          <Card :product="product" />
        </div>
      </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Title from "../components/Title.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Title,
    Card,
    Footer
  },
  data() {
    return {
      isLoad: true,
      category: ""
    };
  },
  watch: {
    "$route.query.name"() {
      this.isLoad = true
      this.getConfigByURL();
      this.getProductsByCategory({category: this.category, callback: ()=> this.isLoad = false})
    }
  },
  computed: {
    ...mapGetters({
      products: 'getProductsCategory'
    }),
  },
  methods: {
    ...mapActions({
      getProductsByCategory: 'getProductsByCategory'
    }),
    getConfigByURL() {
      var configId = this.$route.query.name;
      this.category = configId;
    }
  },
  mounted() {
    this.getConfigByURL();
    this.getProductsByCategory({category: this.category, callback: ()=> this.isLoad = false})
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
.category {
  &-grid {
    flex:1;
    margin: 0 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
