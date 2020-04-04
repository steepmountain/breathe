<template>
  <div class="breathe">
    <h1>Sync your breathing with this</h1>

    <transition name="fade" mode="out-in">
      <p key="in" v-if="state == states.in">Breathe in</p>
      <p key="out" v-if="state == states.out">Breathe out</p>
      <p key="hold" v-if="state == states.holding">Hold</p>
    </transition>

    <svg viewBox="-1 -1 2 2" xmlns="http://www.w3.org/2000/svg">
      <circle class="lung" cx="0" cy="0" :r="animatedScale" fill="#8cc5c3" />
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";
let states = {
  none: 0,
  in: 1,
  out: 2,
  holding: 3
};
export default {
  name: "breathe",
  computed: {
    animatedScale: function() {
      return this.scale.toFixed(3);
    }
  },
  props: {
    duration: Number
  },
  data() {
    return {
      state: states.out,
      previousState: states.out,
      scale: 0.1,
      states: states
    };
  },
  created() {
    this.breathe(states.in);
  },
  methods: {
    breathe(newState) {
      let newScale = 1;
      if (this.previousState == states.in) {
        this.previousState = states.out;
        this.state = states.out;
        newScale = 0.1;
      } else if (this.previousState == states.out) {
        this.previousState = states.in;
        this.state = states.in;
        newScale = 1;
      }
      gsap
        .to(this.$data, { duration: this.duration, scale: newScale, ease: "slow" })
        .delay(0.3);

      setTimeout(() => {
        this.hold(newState);
      }, this.duration * 1000);
    },
    hold(newState) {
      this.state = states.holding;
      setTimeout(() => {
        this.breathe(newState);
      }, this.duration * 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
svg {
  max-height: 50vh;
  max-width: 50vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.breathe {
	padding: 6rem 2rem;
}
</style>
