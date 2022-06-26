<template>
  <section class="howbuy" id="cardapio">
    <span class="howbuy-title">COMO COMPRAR</span>
    <div class="howbuy-sequence">
      <div class="howbuy-sequence-phases bottom">
        <span class="howbuy-sequence-phases-number">1.</span>
        <div class="howbuy-sequence-phases-text">
          <span class="howbuy-sequence-phases-text-title"
            >Navegue pelo site</span
          >
          <span class="howbuy-sequence-phases-text-information"
            >Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
      </div>
      <div class="howbuy-sequence-phases top">
        <span class="howbuy-sequence-phases-number">2.</span>
        <div class="howbuy-sequence-phases-text">
          <span class="howbuy-sequence-phases-text-title"
            >Faça suas compras</span
          >
          <span class="howbuy-sequence-phases-text-information"
            >Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
      </div>
      <div class="howbuy-sequence-phases bottom">
        <span class="howbuy-sequence-phases-number">3.</span>
        <div class="howbuy-sequence-phases-text">
          <span class="howbuy-sequence-phases-text-title"
            >Finalize a compra</span
          >
          <span class="howbuy-sequence-phases-text-information"
            >Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
      </div>
      <div class="howbuy-sequence-phases">
        <span class="howbuy-sequence-phases-number">4.</span>
        <span class="howbuy-sequence-phases-final"
          >SEU PEDIDO SERÁ ENTREGUE DENTRO DO PRAZO!</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowBuy"
};
</script>

<style lang="scss" scoped>
.howbuy {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #dedaf1;
  padding: 30px;
  margin: 60px 0;

  &-title {
    color: #725bc2;
    font-size: 40px;
    font-weight: bold;
  }

  &-sequence {
    width: 100%;
    background-color: #f8f8f8;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    &-phases {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;

      &.bottom::after {
        content: "";
        min-width: 120px;
        height: 25px;
        margin-top: auto;
        z-index: 1;
        background: url("../assets/seta2.svg") no-repeat;
        transform: rotatey(180deg);
      }

      &.top::after {
        content: "";
        min-width: 120px;
        height: 25px;
        margin-bottom: auto;
        z-index: 1;
        background: url("../assets/seta2.svg") no-repeat;
        background-repeat: no-repeat;
        transform: rotate(180deg);
      }

      &-number {
        color: #725bc2;
        font-size: 30px;
        font-weight: bold;
      }
      &-text {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        &-title {
          color: #725bc2;
          font-size: 16px;
          font-weight: bold;
        }
        &-information {
          color: #766c6c;
          font-size: 12px;
        }
      }
      &-final {
        margin-left: 5px;
        color: #725bc2;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 1050px) {
  .howbuy {
    background-color: transparent;
    padding: 0;
    &-title {
      background-color: #dedaf1;
      width: 100%;
      font-size: 28px;
      text-align: center;
      padding: 10px;
    }

    &-sequence {
      flex-direction: column;
      height: auto;

      &-phases {
        margin-bottom: 30px;

        &.bottom::after {
          content: "";
          min-width: 60px;
          height: 25px;
          margin: auto 0 0 auto;
          z-index: 1;
          transform: rotate(270deg);
        }

        &.top::after {
          content: "";
          min-width: 60px;
          height: 25px;
          margin: auto 0 0 auto;
          z-index: 1;
          transform: rotate(270deg);
        }
        &-text {
          &-title {
            font-size: 20px;
          }
          &-information {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
