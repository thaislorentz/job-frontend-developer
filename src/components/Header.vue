<template>
  <div class="header">
    <div class="header-search">
      <img
        class="header-search-image"
        src="../assets/brand-yampi.svg"
        @click="() => $router.push(`/`).catch(()=>{})"
      />
      <div class="header-search-input">
        <InputText
          type="search"
          v-model="search"
          placeholder="O que você está procurando?"
        />
      </div>
      <font-awesome-icon
        icon="shopping-cart"
        class="header-icon "
        @click="() => $router.push(`/cart`)"
      />
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

export default {
  name: "Header",
  components: {
    InputText,
    Nav
  },
  data() {
    return {
      search: ""
    };
  }
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
