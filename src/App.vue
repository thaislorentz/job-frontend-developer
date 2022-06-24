<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  outline: none;
  -webkit-appearance: none;
}
body {
  background: #fcfcfc;
}
input {
  cursor: pointer;
}
button {
  cursor: pointer;
}
</style>
