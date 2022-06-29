<template>
  <div class="loading-container">
    <div class="loader">
      <img
        class="loading-flip"
        src="../assets/coracaozin.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
.loading-flip {
    width: 100px;
    margin: 0 auto;
    animation: flip 8s infinite;
}
      
    
@keyframes flip {
    0% {
      transform: rotateX(0) rotateY(0)
    } 
    20%{
      transform: rotateX(0) rotateY(720deg)
    }
    25% {
      transform: rotateX(0) rotateY(720deg)
    }
    45% {
      transform: rotateX(720deg) rotateY(720deg)
    } 
    50% {
      transform: rotateX(720deg) rotateY(720deg)
    }
    70% {
      transform: rotateX(720deg) rotateY(0)
    }
    75% {
      transform: rotateX(720deg) rotateY(0)
    }
    95% {
      transform: rotateX(0) rotateY(0)
    }
    100% {
      transform: rotateX(0) rotateY(0)
    }
}
</style>
