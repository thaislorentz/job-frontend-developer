<template>
  <div class="card" @click="() => $router.push(`/product/${product.id}`).catch(()=>{})">
    <div class="card-category">{{ product.category }}</div>
    <div class="card-container">
      <img class="card-image" :src="product.image" :alt="product.title" />
      <div class="card-details">
        <div class="card-information">
          <h3
            class="card-information-title"
            :style="product.title.length < 25 && 'height:56px'"
          >
            {{
              product.title.length > 25
                ? `${product.title.slice(0, 25)}...`
                : product.title
            }}
          </h3>
          <p class="card-information-price">
            {{
              product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL"
              })
            }}
          </p>
        </div>
        <Button msg="Quero"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";


export default {
  name: "Card",
  props: {
    product: Object
  },
  components: {
    Button
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";

.card {
  background: $white;
  border: 1px solid $secondary;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 230px;
  margin: 10px;
  cursor: pointer;

  &-category {
    margin: 10px 0;
    background: $secondary;
    padding: 5px 10px;
    border-radius: 0 60px 60px 0;
    font-size: 10px;
    font-weight: bold;
    min-width: 70px;
    color: #725bc2;
    text-transform: capitalize;
  }

  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &-image {
    width: 130px;
    height: 130px;
    object-fit: contain;
  }
  &-details {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 20px;
  }
  &-information {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 15px;
    &-title {
      color: #777e8b;
      font-weight: 200;
    }
    &-price {
      font-size: 20px;
      color: #777e8b;
      font-weight: bold;
    }
  }
  &-button {
    width: 100%;
  }
}

.card:hover {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

@media screen and (max-width: 800px) {
  .card {
    min-width: 350px;
    flex-direction: row;
    margin: 10px;

    &-image {
      width: 130px;
      height: 130px;
      object-fit: contain;
    }

    &-container {
      flex-direction: row;
    }

    &-details {
      width: 140px;
    }

    &-information {
      &-title {
        width: 100%;
        font-size: 12px;
      }
      &-description {
        font-size: 12px;
      }
    }
  }
}
</style>
