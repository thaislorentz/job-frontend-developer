<template>
  <div :class="search ? 'cartcard search' : 'cartcard'" >
    <div class="cartcard-container" @click="() => $router.push(`/product/${cart.id}`).catch(()=>{})">
      <img class="cartcard-image" :src="cart.image" :alt="cart.title" />
      <div class="cartcard-information">
        <h3
          class="cartcard-information-title"
          :style="cart.title.length < 40 && 'height:56px'"
        >
          {{
            cart.title.length > 40
              ? `${cart.title.slice(0, 40)}...`
              : cart.title
          }}
        </h3>
        <p class="cartcard-information-description">
          {{ cart.description }}
        </p>
      </div>
    </div>
    <div class="cartcard-setQuantity" v-if="!search">
      <QuantityProducts
        @incrementEvent="incrementEvent"
        @decrementEvent="decrementEvent"
        :value="cart.quantity"
        :price="cart.price"
        :display="false"
      />
      <p class="cartcard-setQuantity-price">

        {{
          (cart.price * cart.quantity).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </p>
    </div>
    <div class="cartcard-price" v-else>
       <p class="cartcard-setQuantity-price">
        {{
          (cart.price).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </p>
    </div>
  </div>
</template>

<script>
import QuantityProducts from "../QuantityProducts.vue";

export default {
  name: "cartcard",
  props: {
    cart: Object,
    search: {
      default: false
    }
  },
  components: {
    QuantityProducts,
  },
  methods: {
    incrementEvent() {
      this.cart.quantity += 1;
      this.$emit('setQuantity', this.cart.quantity, this.cart.id)
    },
    decrementEvent() {
      this.cart.quantity -= 1;
      this.$emit('setQuantity', this.cart.quantity, this.cart.id)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
.search {
  background: $background !important;
  width: 100% !important;
  margin: 10px 0 !important;
}
.cartcard {
  background: $white;
  border: 1px solid $secondary;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px;

  &-container {
    cursor: pointer;
    display: flex;
    padding: 20px;
    border-bottom: 1px solid $secondary;
  }

  &-image {
    width: 70px;
    height: 70px;
    object-fit: contain;
  }
  &-price {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
  &-setQuantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;

    &-price {
      font-size: 25px;
      font-weight: bold;
    }
  }
  &-information {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 15px;
    &-title {
      color: $predominant;
      font-weight: bold;
    }
    &-description {
      font-size: 12px;
      color: $grey;
      font-weight: 200;
    }
  }
  &-button {
    width: 100%;
  }
}

.cartcard:hover {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

@media screen and (max-width: 1000px) {
  .cartcard {
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
    &-setQuantity {
      &-price {
        font-size: 22px;
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .cartcard {
   &-information {
    &-title {
      font-size: 16px;
    }
  }
  }
}
</style>
