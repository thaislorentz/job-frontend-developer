<template>
  <div class="page">
    <Header />
    <section class="page-image">
      <Title title="Categorias" />
      <div class="category">
        <div class="category-items" v-for="item in categoriesTopics" :key="item">
            <img
              class="category-image"
              :src="item.image"
              @click="() => $router.push(`/`)"
            />
          <span class="category-title">{{ item.category }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Title from "../components/Title.vue";

export default {
  name: "App",
  components: {
    Header,
    Title
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
}

.category {
  display: flex;
  flex:wrap;
  justify-content: space-around;

  &-items{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

    &-image {
    width: 130px;
    height: 130px;
    object-fit: contain;
    border: 1px solid #DEDAF1;
    border-radius: 100px;
    margin-bottom: 20px;
  }

  &-title{
    text-transform: capitalize;
    color:#725BC2;
    font-weight: bold;
  }
}

@media (max-width: 650px) {
  .category {
  display: flex;
  flex-direction: column;
  &-items{
    margin-top: 20px;
  }
}
}
</style>
