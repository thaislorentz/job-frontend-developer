<template>
  <div class="page">
    <Header />
        <Title :title="category" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Title from "../components/Title.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";

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
        category: ''
    };
  },
  methods: {
    getConfigByURL() {
      var configId = this.$route.path.split("/");
      this.category = configId[1]
    },
  },
  created() {
    this.getConfigByURL();
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
</style>
