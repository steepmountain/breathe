<template>
  <div id="app" :class="{dark: isDarkMode, light: !isDarkMode}">
    <div class="burger">
      <Slide right>
        <div class="menu">
            <p>Brightness</p>
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
          <div>
            <p>Music</p>
            <span class="credit">By <a href="bensound.com" target="_blank">bensound.com</a></span>
            <input class="button" type="button" :value="modeMusic" @click="toggleMusic" />
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
import { Howl } from "howler";
Vue.use(VueCookie);

export default {
  name: "App",
  components: {
    Breathe,
    Slide
  },
  data() {
    return {
      duration: Number.parseInt(VueCookie.get("duration")) || 4,
      isDarkMode: VueCookie.get("isDarkMode") == "true" || false,
      isPlayingMusic: VueCookie.get("isPlayingMusic") == "true" || false,
      music: null
    };
  },
  mounted() {
    this.music = new Howl({
      src: require("./assets/music/bensound-relaxing.mp3"),
      loop: true,
      volume: 0
    });

    this.music.play();
    if (this.isPlayingMusic) {
        this.music.fade(0, 0.5, 500);
    }
  },
  computed: {
    modeText() {
      return this.isDarkMode ? "Go light" : "Go dark";
    },
    modeMusic() {
      return this.isPlayingMusic ? "Turn off" : "Turn on";
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
    },
    toggleMusic() {
      this.isPlayingMusic = !this.isPlayingMusic;
      this.$cookie.set("isPlayingMusic", this.isPlayingMusic);

      if (this.isPlayingMusic) {
        this.music.fade(0, 0.5, 800);
      } else {
        this.music.fade(0.5, 0, 800);
      }
    }
  }
};
</script>

<style>
.bm-burger-bars {
  background-color: #999dad;
}
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

.menu p {
    margin-bottom: 0;
}

#app.dark {
  color: white !important;
  background-color: black;
}

#app.light {
  color: #2c3e50;
  background-color: white;
}

a,
a:visited {
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

.credit {
    display: block;
    font-size: 0.8rem;
}
</style>
