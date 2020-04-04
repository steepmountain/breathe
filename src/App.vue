<template>
  <div id="app" :class="{dark: isDarkMode, light: !isDarkMode}">
    <div class="burger">
      <Slide right>
        <div class="menu">
          <input class="button" type="button" :value="modeText" @click="toggleTheme" />
          <div>
            <p>Duration</p>
            <input
              class="button"
              type="button"
              value="3"
              @click="setDuration"
              :class="{active: duration == 3}"
            />
            <input
              class="button"
              type="button"
              value="4"
              @click="setDuration"
              :class="{active: duration == 4}"
            />
            <input
              class="button"
              type="button"
              value="5"
              @click="setDuration"
              :class="{active: duration == 5}"
            />
            <input
              class="button"
              type="button"
              value="6"
              @click="setDuration"
              :class="{active: duration == 6}"
            />
          </div>
          <p>
            <a
              href="https://www.healthline.com/health/box-breathing"
            >Read more about the box breathing technique here.</a>
          </p>
        </div>
      </Slide>
    </div>
    <Breathe :duration="duration" />
  </div>
</template>

<script>
import Breathe from "./components/Breathe.vue";
import { Slide } from "vue-burger-menu";
import Vue from "vue";
import VueCookie from "vue-cookie";
Vue.use(VueCookie);

export default {
  name: "App",
  components: {
    Breathe,
    Slide
  },
  data() {
    return {
      duration: VueCookie.get("duration") || 4,
      isDarkMode: VueCookie.get("isDarkMode") || false
    };
  },
  computed: {
    modeText() {
      return this.isDarkMode ? "Go light" : "Go dark";
    }
  },
  methods: {
    setDuration(event) {
      this.duration = Number.parseInt(event.target.value);
      this.$cookie.set("duration", this.duration);
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.$cookie.set("isDarkMode", this.isDarkMode);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  transition: background-color 0.5s;
    display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

h1 {
  margin: 0;
  padding: 0;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#app.dark {
  color: white !important;
  background-color: black;
}

#app.light {
  color: #2c3e50;
  background-color: white;
}

a, a:visited {
  color: white;
}


.button {
  /* default for <button>, but useful for <a> */
  display: inline-block;
  text-align: center;
  text-decoration: none;

  /* create a small space when buttons wrap on 2 lines */
  margin: 2px 0;

  /* invisible border (will be colored on hover/focus) */
  border: solid 1px transparent;
  border-radius: 4px;

  /* size comes from text & padding (no width/height) */
  padding: 0.8rem 1rem;

  margin: 0.5rem;

  /* make sure colors have enough contrast! */
  color: #ffffff;
  background-color: #8cc5c3;
}

.button.active {
  background-color: #3b7371;
}

body {
  padding: 0;
  margin: 0;
}
</style>
