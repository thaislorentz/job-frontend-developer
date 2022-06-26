<template>
  <div class="title">
    <div class="title-line" />
    <h3 class="title-title">{{ title }}</h3>
    <div class="title-line" />
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  &-line {
    height: 1px;
    width: 35%;
    background: #dedaf1;
  }
  &-title {
    color: #725bc2;
    padding: 30px;
    font-weight: 500;
  }
}
@media (max-width: 650px) {
  .title {
    &-line {
      width: 25%;
    }
  }
}
</style>
