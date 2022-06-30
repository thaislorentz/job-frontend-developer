<template>
  <footer class="footer">
      <img
        class="footer-image"
        alt="Hamburger logo"
        src="../assets/brand-yampi.svg"
      />
      <div class="footer-informations">
        <div class="footer-informations-institutional">
          <span class="footer-informations-title">Institucional</span>
          <span class="footer-informations-topics">Quem somos</span>
          <span class="footer-informations-topics"
            >Política de privacidade</span
          >
          <span class="footer-informations-topics">Política de compra</span>
          <span class="footer-informations-topics"
            >Política de troca e devolução</span
          >
        </div>
        <div class="footer-informations-help">
          <span class="footer-informations-title">Ajuda</span>
          <span class="footer-informations-topics">Fale conosco</span>
          <span class="footer-informations-topics">Perguntas frequentes</span>
        </div>
      </div>
      <div class="footer-social">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <font-awesome-icon
            class="footer-social-icon"
            :icon="['fab', 'instagram']"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/thaislorentz/"
          target="_blank"
          rel="noreferrer"
        >
          <font-awesome-icon
            class="footer-social-icon"
            :icon="['fab', 'linkedin']"
          />
        </a>
      </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";

.footer {
  background: $secondary;
  border-top: solid $predominant 2px;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  &-image {
    width: 200px;
  }

  &-informations {
    display: flex;

    &-title {
      font-weight: bold;
      color: $predominant;
    }

    &-topics {
      color: $grey;
      cursor: pointer;
      font-weight: 300;
    }
    &-topics:hover {
      color: $predominant;
    }
    &-institutional {
      display: flex;
      flex-direction: column;
    }
    &-help {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
    }
  }

  &-social {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    color: $predominant;
    &-icon {
      margin-left: 10px;
      font-size: 30px;
    }
  }
}
@media (max-width: 850px) {
  .footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-informations {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    &-help {
      margin-left: 0;
      margin-top: 20px;
    }
  }
  }
}
</style>
