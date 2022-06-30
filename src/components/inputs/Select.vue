<template>
  <div class="input">
    <select @input="$emit('input', $event.target.value)" class="input-input" name="opcoes" id="select">
      <option value="" disabled selected>Ordenar por:</option>
      <option v-for="item in options" v-bind:key="item.value" v-bind:value="item.value"> {{item.display}}</option>

    </select>
    <label for="select" class="input-label">
      <font-awesome-icon icon="chevron-down" class="icon alt" />
    </label>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    placeholder: String,
    options: Array
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";

.input {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: $white;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid $secondary;
  position: relative;
  cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  &-label {
      cursor: pointer;
    pointer-events: none;
    position: absolute;
    right: 0;
    height: 40px;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    background: $predominant;
    color: $white;
    box-sizing: border-box;
    padding: 15px;
  }
  &-input {
      cursor: pointer;
    font-weight: 300;
    padding-left: 10px;
    border: 0;
    width: 100%;
    background: $white;
  }
}
</style>
