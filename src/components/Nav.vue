<template>
  <nav class="nav">
    <div class="nav-bars" @click="showCategories = !showCategories">
      <font-awesome-icon icon="bars" />
      <span class="nav-bars-title">Categorias</span>
    </div>
    <ul class="nav-elements" v-if="showCategories">
      <li
        class="nav-elements-item"
        v-for="item in category"
        :key="item"
        @click="click(item)"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script>
import InputText from "../components/inputs/InputText.vue";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    InputText
  },
  data() {
    return {
      showCategories: true,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    ...mapGetters({ category: "getCategories" })
  },
  watch: {
    windowWidth() {
      this.resizeNav()
    }
  },
  methods: {
    click(item) {
      if (this.windowWidth <= 850) {
        this.showCategories = false
      }
      this.$router.push(`/category/${item}`).catch(() => {})
    },
    resizeNav() {
      if (this.windowWidth >= 850) {
        this.showCategories = true;
      } else {
        this.showCategories = false;
      }
    }
  },
  async created() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
     this.resizeNav()
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";

.nav {
  width: 100%;
  background: $predominant;

  &-bars {
    display: none;
  }

  &-elements {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    color: white;
    text-transform: capitalize;
    animation: slidedown 0.3s ease-in-out;

    &-item {
      padding: 10px 50px;
      cursor: pointer;
      transition: 0.3s;
      font-weight: bold;
    }

    &-item:hover {
      background: #aa93ff;
    }
  }
}

@media (max-width: 850px) {
  .nav {
    &-elements {
      flex-direction: column;
      animation: heig 0.3s ease-in-out;
    }
    &-bars {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 100%;
      color: white;
      padding: 15px;
      border-bottom: 1px solid #aa93ff;
      &-title {
        margin-left: 10px;
      }
    }
  }
}

@keyframes slidedown {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes heig {
  0% {
    height: 136px;
  }
  100% {
    height: 176px;
  }
}
</style>
