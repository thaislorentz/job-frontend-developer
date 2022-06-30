<template>
    <button
      v-bind:class="finish ? `btn ${classButton}` : 'button'"
      @click="e => click(e)"
    >
      <span v-if="classButton !== 'btn-complete'">{{ msg }}</span>
      <font-awesome-icon
        v-if="classButton === 'btn-complete'"  icon="check-circle" />
    </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String,
    finish: {
      default: false
    }
  },
  data() {
    return {
      classButton: ""
    };
  },
  methods: {
    click(evt) {
      if (this.finish) {
        this.classButton = 'btn-progress'
        setTimeout(() => {
          this.classButton = "btn-fill";
        }, 500);

        setTimeout(() => {
          this.classButton = "";
        }, 4100);

        setTimeout(() => {
          this.classButton = "btn-complete";
        }, 4100);
      }
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
.button {
  width: 100%;
  background: $predominant;
  border-radius: 5px;
  padding: 8px;
  color: $white;
  border: none;
  font-size: 16px;
  font-weight: bold;
}

.button:hover {
  background: $secondary;
  color: $predominant;
  transition: 0.2s;
}
.btn {
  background: transparent;
  width: 100%;
  position: relative;
  padding: 15px;
  color: $predominant;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 500ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  border-radius: 4px;
  font-weight: 600;
  overflow: hidden;
  border: 2px solid $predominant;
  text-decoration: none;
}

.btn-progress {
  width: 100%;
  color: transparent;
}

.btn-fill:after {
  content: "";
  background: $predominant;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: scaleX(0);
  transform-origin: 0;
  display: block;
  animation: fill 3.2s linear forwards;
}

/* Button Complete */
.btn-complete {
  padding: 10px;
  width: 50px;
  background: $predominant;
  color: $white;
  pointer-events: none;
}

.btn-complete:after {
  color: $predominant;
  height: 100%;
  padding-left: 3px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $predominant;
}

/* Animation */
@keyframes fill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media screen and (max-width: 700px) {
  .button {
    font-size: 12px;
  }
}
</style>
