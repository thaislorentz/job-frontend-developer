<template>
  <div class="input-search">
    <div class="input">
      <label class="input-label">
        <font-awesome-icon icon="search" class="icon alt" />
      </label>
      <input
        :value="value"
        class="input-input"
        type="text"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </div>
    <div id="input" class="input-container" v-if="filterProducts.length > 0 && search">
      <div v-for="item in filterProducts" :key="item.id" @click="clearFilter">
        <CardCart :cart="item" :search="true" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardCart from "../cards/CardCart.vue";

export default {
  name: "Footer",
  props: {
    placeholder: String,
    value: String,
    search: {
      default: true
    }
  },
  components: {
    CardCart
  },
  data() {
    return {
      filterProducts: []
    };
  },
  watch: {
    value: function() {
      if (this.value === "" || this.value === null) {
        this.filterProducts = []
      } else {
        this.filterProducts = this.products.filter(product => {
          return (
            (product.title &&
              product.title.toLowerCase().includes(this.value.toLowerCase())) ||
            product._id === this.value ||
            (product.description &&
              product.description.toLowerCase().includes(this.value.toLowerCase()))
          );
        });
      }
    }
  },
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  },
  methods: {
    clearFilter() {
      this.filterProducts = []
    }
  },
  created() {
    if(this.search) {
      window.addEventListener('click', (e) => {
        if(e.target.id !== 'input') {
          this.clearFilter()
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
.input-search {
  position: relative;
  width: 100%;
}
.input {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: $white;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  padding-right: 3px;
  &-label {
    height: 40px;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    background: $predominant;
    color: $white;
    box-sizing: border-box;
    padding: 15px;
  }
  &-input {
    font-weight: 300;
    padding-left: 10px;
    border: 0;
    margin-left: 2px;
    width: 100%;
  }
  &-container {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 70vh;
    overflow: auto;
    background: $secondary;
    border:1px solid $predominant;
    padding: 10px;
  }
}
</style>
