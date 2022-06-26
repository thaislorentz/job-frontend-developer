<template>
  <div class="page">
    <Header />
    <section class="page-categories">
      <Title title="Categorias" />
      <div class="category">
        <div
          class="category-items"
          v-for="item in categoriesTopics"
          :key="item"
        >
          <img
            class="category-image"
            :src="item.image"
            @click="() => $router.push(`/`)"
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
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";

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
      category: ["electronic", "jewelery", "mens clothing", "Womens Clothing"],
      products: [
        {
          id: 1,
          title: "Pulseira",
          price: 200,
          category: "jewelery",
          description: "asidiashduiashduiashd",
          image:
            "https://images.tcdn.com.br/img/img_prod/849569/pulseira_aco_inox_9531_2_20201214023102.jpg"
        },
        {
          id: 2,
          title: "Fone",
          price: 500,
          category: "electronic",
          description: "asidiashduiashduiashd",
          image:
            "https://i2go.fbitsstatic.net/img/p/fone-de-ouvido-bluetooth-sem-fio-tws-air-sound-go-2-i2go-com-estojo-de-carregamento-i2go-plus-90559/277049.jpg?w=378&h=378&v=no-change&qs=ignore"
        },
        {
          id: 3,
          title: "Jaqueta",
          price: 200,
          category: "mens clothing",
          description: "asidiashduiashduiashd",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3yTBUlznxL3Zn9mkQTIWG1AJjNM_DcgJ3oLhguSyrbCk6mKnhctEABs90MnwHS7kZzw&usqp=CAU"
        },
        {
          id: 4,
          title: "Pulseira",
          price: 200,
          category: "Womens Clothing",
          description: "asidiashduiashduiashd",
          image:
            "https://img.freepik.com/fotos-gratis/saia-feminina-em-um-fundo-branco_461160-4344.jpg"
        },
        {
          id: 5,
          title: "Pulseira",
          price: 200,
          category: "jewelery",
          description: "asidiashduiashduiashd",
          image:
            "https://images.tcdn.com.br/img/img_prod/849569/pulseira_aco_inox_9531_2_20201214023102.jpg"
        },
        {
          id: 6,
          title: "Fone",
          price: 500,
          category: "electronic",
          description: "asidiashduiashduiashd",
          image:
            "https://i2go.fbitsstatic.net/img/p/fone-de-ouvido-bluetooth-sem-fio-tws-air-sound-go-2-i2go-com-estojo-de-carregamento-i2go-plus-90559/277049.jpg?w=378&h=378&v=no-change&qs=ignore"
        },
        {
          id: 7,
          title: "Jaqueta",
          price: 200,
          category: "mens clothing",
          description: "asidiashduiashduiashd",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3yTBUlznxL3Zn9mkQTIWG1AJjNM_DcgJ3oLhguSyrbCk6mKnhctEABs90MnwHS7kZzw&usqp=CAU"
        },
        {
          id: 8,
          title: "Pulseira",
          price: 200,
          category: "Womens Clothing",
          description: "asidiashduiashduiashd",
          image:
            "https://img.freepik.com/fotos-gratis/saia-feminina-em-um-fundo-branco_461160-4344.jpg"
        }
      ],
      categoriesTopics: []
    };
  },
  methods: {
    getFirstProduct() {
      this.products.map(product => {
        if (this.categoriesTopics.every(p => p.category !== product.category)) {
          this.categoriesTopics.push(product);
        }
      });
    }
  },
  created() {
    this.getFirstProduct();
  }
};
</script>

<style lang="scss">
.page {
  width: 100%;
  min-height: 100vh;

  &-categories {
    margin: 20px;
  }
}

.category {
  display: flex;
  flex: wrap;
  justify-content: space-around;

  &-items {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    cursor:pointer;

  }

  &-image {
    width: 130px;
    height: 130px;
    object-fit: contain;
    border: 1px solid #dedaf1;
    border-radius: 100px;
    margin-bottom: 20px;
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
