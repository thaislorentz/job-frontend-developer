<template>
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
</template>

<script>
export default {
  name: "Footer",
  props: {
    type: String,
    placeholder: String,
    value: String
  }
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  padding-right: 3px;
  &-label {
    height: 40px;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    background: #725bc2;
    color: #ffffff;
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
}
</style>
