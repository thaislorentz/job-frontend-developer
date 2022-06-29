<template>
  <div class="quantity">
    <div class="quantity-box" @click="decrementEvent">-</div>
    <div class="quantity-number">{{ value }}</div>
    <div class="quantity-box" @click="incrementEvent">+</div>
    <div
      v-if="showPrice"
      :class="display ? 'price move' : 'price move price-show'"
      :style="priceType === '+' ? 'color: green' : 'color: red'"
    >
      {{ priceType }} {{ price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Quantity",
  props: {
    value: Number,
    price: Number,
    display: {
      default: true
    }
  },
  data() {
    return {
      showPrice: false,
      priceType: "+",
    };
  },
  methods: {
    incrementEvent() {
      this.priceType = "+";
      this.showPrice = true;
      setTimeout(() => {
        this.showPrice = false;
      }, 500);
      this.$emit("incrementEvent");
    },
    decrementEvent() {
      this.priceType = "-";
      if (this.value === 1) {
        this.showPrice = false;
      } else {
        this.showPrice = true;
        setTimeout(() => {
          this.showPrice = false;
        }, 500);
      }
      this.$emit("decrementEvent");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
.quantity {
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;
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
.price {
  position: relative;
}
.move{
   -webkit-animation: moveltr 5s;
  animation: moveltr 5s;
  transition: 0.3s;
}
@keyframes moveltr {
  0%   { left: 0px; top: 0px;}
  50%  {left: 30px; top: 0px;}
  100% {left: 0px; top: 0px;}
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
@media (max-width: 450px) {
  .price-show {
    display: none;
  }
}
</style>
