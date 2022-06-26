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
    background: $predominant;
    border-radius: 5px;
    padding: 5px 8px;
    color: $white;
    border: none;
    font-size: 16px;
}

@media screen and (max-width: 700px) {
    button {
        padding: 5px 10px;
        font-size: 12px;
    }
}
</style>