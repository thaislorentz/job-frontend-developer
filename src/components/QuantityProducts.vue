<template>
  <div class="quantity">
    <div class="quantity-box" @click="$emit('decrementEvent')">
      -
    </div>
    <div class="quantity-number">{{ value }}</div>
    <div class="quantity-box" @click="$emit('incrementEvent')">
      +
    </div>
  </div>
</template>

<script>
export default {
  name: "Quantity",
  props: {
    value: Number
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
.quantity {
  display: flex;
  justify-items: center;
  align-items: center;
  &-box {
    padding: 10px 15px;
    border: 1px solid $predominant;
    border-radius: 5px;
    cursor: pointer;
  }
  &-box:hover {
    background: $secondary;
  }
  &-number {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    font-weight: bold;
    width: 80px;
  }
}
@media (max-width: 850px) {
  .quantity {
  &-box {
    padding: 8px 10px;
  }
  &-number {
    width: 70px;
  }
}
}
</style>
