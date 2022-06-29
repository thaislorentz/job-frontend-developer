<template>
  <div class="header">
    <div class="header-search">
      <img
        class="header-search-image"
        src="../assets/brand-yampi.svg"
        @click="() => $router.push(`/`).catch(() => {})"
      />
      <div class="header-search-input">
        <InputText v-model="search" placeholder="O que você está procurando?" />
      </div>
      <button class="header-cart" @click="() => $router.push(`/cart`)">
        <font-awesome-icon
          icon="shopping-cart"
          
          class="header-cart-icone"
        />
        <div class="header-cart-quantity" v-if="cart.products.length > 0">
          {{ cart.products.length }}
        </div>
      </button>
    </div>
    <div class="header-input">
      <InputText
        type="search"
        v-model="search"
        placeholder="O que você está procurando?"
      />
    </div>
    <Nav />
  </div>
</template>

<script>
import InputText from "../components/inputs/InputText.vue";
import Nav from "../components/Nav.vue";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    InputText,
    Nav,
  },
  computed: {
    ...mapGetters({
      cart: "getCart",
    }),
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";

.header {
  width: 100%;
  background: $secondary;
  display: flex;
  flex-direction: column;
  &-input {
    display: none;
  }

  &-cart{
    width: 100px;
    border-radius: 5px;
    background: none;
    border: none;
    position: relative;
    padding: 18px 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    &-icone {
      color: $predominant;
      font-size: 40px;
    }
    &-icone:hover  {
      color: $white;
      transition: 0.5s;
    }
    &-quantity {
      position: absolute;
      top:-10px;
      right: 0;
      width: 25px;
      height: 25px;
      background: $white;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $predominant;
      font-weight: bold;
      border: 1px solid $predominant;
    }
  }

  &-cart:hover {
    background: #a495d8;
    transition: 0.5s;
    color: $white;
    &-icone {
      color: $white;
    }
  }

  &-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    &-image {
      cursor: pointer;
    }

    &-input {
      width: 40%;
    }
  }

  &-icon {
    color: #725bc2;
    font-size: 25px;
    cursor: pointer;
  }
}

@media (max-width: 850px) {
  .header {
    &-search {
      &-input {
        width: 100%;
        margin: 0 50px;
      }
    }
  }
}

@media (max-width: 550px) {
  .header {
    &-input {
      display: flex;
      margin: 0 30px 30px 30px;
    }
    &-search {
      &-input {
        display: none;
      }
    }
  }
}
</style>
