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
@import "@/assets/_colors.scss";

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  &-line {
    height: 1px;
    width: 35%;
    background: $secondary;
  }
  &-title {
    color: #725bc2;
    padding: 30px;
    font-weight: 500;
    text-transform: capitalize;
  }
}
@media (max-width: 850px) {
  .title {
    &-title {
      font-size: 20px
    }
    &-line {
      width: 30%;
    }
  }
}
@media (max-width: 650px) {
  .title {
    &-title {
      font-size: 16px
    }
    &-line {
      width: 25%;
    }
  }
}
@media (max-width: 450px) {
  .title {
    &-line {
      width: 20%;
    }
  }
}
</style>
