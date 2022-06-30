<template>
  <footer>
    <div class="footer">
      <img
        class="footer-image"
        alt="Hamburger logo"
        src="../assets/brand-yampi.svg"
      />
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
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    text: String
  }
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
  
  &-social {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    color: $predominant;
    &-icon {
      margin-left: 10px;
    }
  }
}
</style>
