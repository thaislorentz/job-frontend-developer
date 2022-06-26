<template>
  <button @click="evt => $emit('click', evt)">{{msg}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
button {
    width: 100%;
    background: $predominant;
    border-radius: 5px;
    padding: 8px;
    color: $white;
    border: none;
    font-size: 16px;
    font-weight: bold;
}

@media screen and (max-width: 700px) {
    button {
        font-size: 12px;
    }
}
</style>