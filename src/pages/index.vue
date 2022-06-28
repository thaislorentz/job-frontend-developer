<template>
  <div class="page">
    <Header />
    <section class="category-image">
      <img class="category-image" src="../assets/image 7.png" />
    </section>
    <section class="page-categories">
      <Title title="Categorias" />
      <div class="category">
        <div
          class="category-items"
          v-for="item in categoriesTopics"
          :key="item.category"
          @click="() => $router.push(`/category/${item.category}`).catch(()=>{})"
        >
          <img
            class="category-items-image"
            :src="item.image"
            @click="() => $router.push(`/`).catch(()=>{})"
          />
          <span class="category-title">{{ item.category }}</span>
        </div>
      </div>
    </section>
    <HowBuy />
    <section class="vitrine" id="Promoções">
      <h2 class="vitrine-title">
        RECOMENDADOS PARA VOCÊ
      </h2>
      <div class="vitrine-grid">
        <div v-for="(product, index) in products" :key="index">
          <Card :product="product" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Title from "../components/Title.vue";
import HowBuy from "../components/HowBuy.vue";
import Card from "../components/cards/Card.vue";
import Footer from "../components/Footer.vue";
import { mapGetters } from 'vuex'

export default {
  name: "App",
  components: {
    Header,
    Title,
    HowBuy,
    Card,
    Footer
  },
  data() {
    return {
      isLoad: true,
      categoriesTopics: []
    };
  },
  computed: {
    ...mapGetters({category: 'getCategories',
      products: 'getProducts'
    }),
  },
  methods: {
    getFirstProduct() {
      this.products.map(product => {
        if (this.categoriesTopics.every(p => p.category !== product.category)) {
          this.categoriesTopics.push(product);
        }
      });
    },
  },
  async created() {
    this.getFirstProduct();
    this.isLoad = false
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
.category {
  display: flex;
  flex: wrap;
  justify-content: space-around;

  &-items {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    padding: 10px;

    &-image {
    width: 130px;
    height: 130px;
    background: $white;
    object-fit: contain;
    border: 1px solid $secondary;
    border-radius: 100px;
    margin-bottom: 20px;
  }
  }

  &-items:hover {
    background: $secondary;
    border-radius: 5px;
    transition: 0.2s;
  }

  &-image {
    width: 100%;
  }

  &-title {
    text-transform: capitalize;
    color: #725bc2;
    font-weight: bold;
  }
}

.vitrine {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 120px;
  background: url("../assets/background.png") no-repeat;
  background-position: bottom left;
  &-title {
    z-index: 1;
    font-size: 28px;
    color: #725bc2;
    margin-bottom: 20px;
  }
  &-grid {
    margin: 0 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &-button {
    margin-right: 10%;
    display: flex;
    justify-content: flex-end;
  }
}

@media (max-width: 650px) {
  .category {
    display: flex;
    flex-direction: column;
    &-items {
      margin-top: 20px;
    }
  }
  .vitrine {
    margin: 30px;
    &-title {
      font-size: 21px;
    }
  }
}
</style>
