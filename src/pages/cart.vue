<template>
  <div class="page">
    <Header />
    <div class="cart" v-if="cartproducts.length > 0">
      <div class="cart-list">
        <h2 class="cart-title">Meu carrinho</h2>
        <div>
          <div v-for="item in cartproducts" :key="item.id">
            <CardCart :cart="item" @setQuantity="setQuantity" />
          </div>
        </div>
      </div>
      <div class="cart-resume">
        <h2 class="cart-title">Resumo da compra</h2>
        <div class="cart-resume-content">
          <div class="cart-resume-informations">
            <span class="cart-resume-informations-label">Total:</span>
            <span class="cart-resume-informations-price">{{
              total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}</span>
          </div>
          <div class="cart-button">
          <Button msg="Finalizar compra" :finish="true" />
          </div>
        </div>
      </div>
    </div>
    <div class="cart-empty" v-else>
      <div class="cart-empty-container">
        <font-awesome-icon icon="shopping-cart" class="cart-empty-icone" />
        <span class="cart-empty-title">Carrinho vazio</span>
      </div>
      <HowBuy />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/Button.vue";
import HowBuy from "../components/HowBuy.vue";
import CardCart from "../components/cards/CardCart.vue";
import service from "../service/cart";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Button,
    HowBuy,
    CardCart,
  },
  data() {
    return {
      isLoad: true,
      cartproducts: [],
      total: 0,
    };
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
      cart: "getCart",
    }),
  },
  watch: {
    cart: function () {
      this.total = 0;
      this.cartproducts = [];
      this.getProducts();
    },
  },
  methods: {
    getProducts() {
      this.products.map((e) => {
        const product = this.cart.products.find((p) => p.productId === e.id);
        if (product) {
          this.cartproducts.push({ ...e, quantity: product.quantity });
          this.total += e.price * product.quantity;
        }
      });
    },
    async setQuantity(value, id) {
      let d = new Date();
      let product = {};
      if (value > 0) {
        product = this.cart.products.find((prod) => prod.productId === id);
        if (product && value > 0) product.quantity = value;
      } else {
        product = this.cart.products.findIndex((p) => p.productId === id);
        console.log(product);
        if (product !== -1) {
          this.cart.products.splice(product, 1);
          this.$toast.success("Produto retirado do carrinho!");
        }
      }

      const payload = {
        userId: this.cart.userId,
        date: d.toISOString(),
        products: this.cart.products,
      };
      console.log(payload);
      await service.changeCartById(2, payload);
      this.$store.commit("set_cart", payload);
    },
  },
  async mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
.cart {
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: 30px;

  &-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-title {
      font-size: 30px;
      font-weight: bold;

    }
    &-icone {
      font-size: 100px;
      }
    &-container {
      color: $secondary;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  &-title {
    color: $predominant;
  }
  &-list {
    width: 100%;
  }
  &-resume {
    width: 100%;

    &-content {
      background: $secondary;
      padding: 30px 20px;
      border-radius: 5px;
    }

    &-informations {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      &-label {
        color: $grey;
      }

      &-price {
        font-weight: bold;
        font-size: 28px;
      }
    }
  }
  &-button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1100px) {
  .cart {
    flex-direction: column;
    margin: 30px;

    &-empty{
      margin-top: 50px;
    }

    &-resume {
      &-informations {
        margin-bottom: 20px;

        &-price {
          font-weight: bold;
          font-size: 25px;
        }
      }
    }
  }
}
</style>
