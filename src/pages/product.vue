<template>
  <div class="page">
    <Header />
    <div v-if="isLoad" class="product-loading">
      <Loading />
    </div>
    <div class="product-container" v-else>
      <div class="product-detail">
        <img class="product-image" :src="product.image" :alt="product.title" />
        <div class="product-detail-information">
          <h1 class="product-detail-information-title">{{ product.title }}</h1>
          <p class="product-detail-information-description">
            {{ product.description }}
          </p>
          <span class="product-detail-information-price">{{
            (product.price * quantity).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          }}</span>
          <QuantityProducts
            @incrementEvent="incrementEvent"
            @decrementEvent="decrementEvent"
            :value="quantity"
            :price="product.price"
          />
          <div class="product-detail-information-button">
            <Button msg="Adicionar no carrinho" @click="addCart()" />
          </div>
        </div>
      </div>
      <div class="product-relacionados">
        <Title
          :title="
            products.length > 0 ? 'Produtos Relacionados' : 'Produtos Yampi'
          "
        />
        <div class="product-relacionados-cards" v-if="products.length > 0">
          <div v-for="(product, index) in products.slice(0, 5)" :key="index">
            <Card :product="product" />
          </div>
        </div>
        <div class="product-relacionados-cards" v-else>
          <div v-for="(product, index) in getProducts.slice(0, 5)" :key="index">
            <Card :product="product" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/Button.vue";
import Title from "../components/Title.vue";
import QuantityProducts from "../components/QuantityProducts.vue";
import Card from "../components/cards/Card.vue";
import serviceP from "../service/products";
import serviceC from "../service/cart";
import Loading from "../components/Loading.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Button,
    Title,
    Card,
    Loading,
    QuantityProducts,
  },
  data() {
    return {
      isLoad: true,
      product: {},
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters({
      products: "getProductsCategory",
      getProducts: "getProducts",
      cart: "getCart",
    }),
  },
  watch: {
    "$route.path"() {
      this.isLoad = true;
      this.quantity = 1;
      this.getProductByURL();
    },
  },
  methods: {
    ...mapActions({
      getCartProductsById: "getCartProductsById",
    }),
    incrementEvent() {
      this.quantity += 1;
    },
    decrementEvent() {
      this.quantity === 1 ? this.quantity : (this.quantity -= 1);
    },
    async getById(id) {
      this.product = await serviceP.getProductById(id);
      this.isLoad = false;
    },
    getProductByURL() {
      var product = this.$route.path.split("/");
      this.getById(product[product.length - 1]);
    },
    async addCart() {
      let d = new Date();
      const product = this.cart.products.find(
        (prod) => prod.productId === this.product.id
      );
      if (product) product.quantity += this.quantity;
      else
        this.cart.products.push({
          productId: this.product.id,
          quantity: this.quantity,
        });

      const payload = {
        userId: this.cart.userId,
        date: d.toISOString(),
        products: this.cart.products,
      };
      await serviceC.changeCartById(2, payload);
      this.$store.commit("set_cart", payload);
      //await this.getCartProductsById(2)
    },
  },
  mounted() {
    this.getProductByURL();
    console.log(this.getProducts, "produ");
  },
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";

.product {
  &-container {
    flex: 1;
  }

  &-loading {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-image {
    width: 500px;
    height: 500px;
    object-fit: contain;
  }

  &-detail {
    display: flex;
    justify-items: center;
    margin: 20px 50px;

    &-information {
      gap: 20px;
      margin-left: 50px;
      display: flex;
      flex-direction: column;
      &-description {
        color: $grey;
        font-weight: 300;
      }
      &-price {
        font-weight: bold;
        font-size: 30px;
      }
      &-title {
        color: $predominant;
      }
      &-button {
        width: 300px;
      }
    }
  }

  &-relacionados {
    &-cards {
      margin: 0 5%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
@media (max-width: 850px) {
  .product {
    &-image {
      width: 300px;
      height: 300px;
      object-fit: contain;
    }
    &-detail {
      margin: 20px 50px;
      &-information {
        margin: 20px;
        &-description {
          font-size: 14px;
        }
        &-price {
          font-size: 25px;
        }
        &-title {
          font-size: 25px;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .product {
    &-image {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
    &-detail {
      flex-direction: column;
      align-items: center;
      margin: 20px;
      &-information {
        &-description {
          font-size: 14px;
        }
        &-price {
          font-size: 25px;
        }
        &-title {
          font-size: 20px;
        }
        &-button {
          width: 100%;
        }
      }
    }
  }
}
</style>
