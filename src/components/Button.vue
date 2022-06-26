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
button {
    background: #725bc2;
    border-radius: 5px;
    padding: 5px 8px;
    color: #ffffff;
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