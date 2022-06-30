<template>
  <div class="page">
    <Header />
    <Title :title="category" />
    <div class="categorypage-loading" v-if="isLoad">
      <Loading/>
    </div>
    <div class="categorypage-container" v-else>
      <div class="categorypage-container-select">
        <Select
          :options="orderBy"
          v-model="search"
          placeholder="Ordenar por:"
        />
      </div>
      <div class="categorypage-grid">
        <div v-for="(product, index) in products" :key="index">
          <Card :product="product" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Title from "../components/Title.vue";
import Card from "../components/cards/Card.vue";
import Footer from "../components/Footer.vue";
import Loading from "../components/Loading.vue";
import Select from "../components/inputs/Select.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Title,
    Card,
    Footer,
    Loading,
    Select
  },
  data() {
    return {
      isLoad: true,
      category: "",
      search: "",
      orderBy: [
        { display: "Nome", value: "title" },
        { display: "Preço", value: "price" },
        { display: "Avaliação", value: "rating" }
      ]
    };
  },
  watch: {
    "$route.path"() {
      this.isLoad = true;
      this.getCategoryByURL();
      this.getProductsByCategory({
        category: this.category,
        callback: () => (this.isLoad = false)
      });
    },
    search: function() {
      this.order(this.search);
    }
  },
  computed: {
    ...mapGetters({
      products: "getProductsCategory"
    })
  },
  methods: {
    ...mapActions({
      getProductsByCategory: "getProductsByCategory"
    }),
    order(type) {
      if (type === "title") {
        this.products.sort(function(a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
      }
      else if (type === "price") {
        this.products.sort((a, b) => a.price - b.price)
      }
      else if (type === "rating") {
        this.products.sort(function(a, b) {
          if (a.rating.rate > b.rating.rate) {
            return 1;
          }
          if (a.rating.rate < b.rating.rate) {
            return -1;
          }
          return 0;
        });
      }
    },
    getCategoryByURL() {
      var categoryname = this.$route.path.split("/");
      this.category = decodeURI(categoryname[categoryname.length - 1])
    }
  },
  mounted() {
    this.getCategoryByURL();
    this.getProductsByCategory({
      category: this.category,
      callback: () => (this.isLoad = false)
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
.categorypage {
  &-loading {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-container {
    flex: 1;
    &-select {
      margin: 0 10% 30px;
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
      width: 300px;
    }
  }
  &-grid {
    margin: 0 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
