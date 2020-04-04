<template>
  <div id="app" :class="{dark: isDarkMode, light: !isDarkMode}">
    <div>
      <input class="button" type="button" :value="modeText" @click="toggleTheme" />
    </div>
    <Breathe :duration="duration" />

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
</template>

<script>
import Breathe from "./components/Breathe.vue";

export default {
  name: "App",
  components: {
    Breathe
  },
  data() {
    return {
      duration: 4,
      isDarkMode: false
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
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
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
  height: 100%;
  transition: background-color 0.5s;
  display: flex;
  flex-direction: column;
  align-content: center;
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

#app.dark a,
#app.dark a:visited {
  color: white !important;
}

#app.light a,
#app.light a:visited {
  color: #2c3e50;
}

.button {
  max-width: 10rem;
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
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
