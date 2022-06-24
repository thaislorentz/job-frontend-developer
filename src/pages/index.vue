<template>
  <div class="page">
    <Header />
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
.page {
  width: 100%;
  min-height: 100vh;
}
</style>
