<template>
  <div class="intro-wrapper">
    <v-container class="intro">
      <v-container class="contact-wrapper">
        <h1>Hi, I'm Marie-Hélène,</h1>
        <h1 class="mb-10">Full Stack Developer ✌️</h1>
        <v-btn outlined color="inverted" @click="scrollToBottom">Contact me</v-btn>
      </v-container>

      <v-container class="animation-wrapper">
        <img key="c1" class="rotate" :src="colombiaInverted" width="50" />
        <img :src="code" width="30" />
        <img key="w1" class="rotate" :src="waffleInverted" width="40" />
        <img class="rotate" :src="racket" width="50" />
        <img key="v1" class="rotate" :src="vietnamInverted" width="45" />
  </v-container>
    </v-container>
  </div>
</template>

<script>
const racket = require("@/assets/racket.svg");
const colombia = require("@/assets/colombia.svg");
const colombiaInverted = require("@/assets/colombia_inverted.svg");
const vietnam = require("@/assets/vietnam.svg");
const vietnamInverted = require("@/assets/vietnam_inverted.svg");
const waffle = require("@/assets/waffle.svg");
const waffleInverted = require("@/assets/waffle_inverted.svg");
const code = require("@/assets/code.svg");
const pingpong = require("@/assets/pingpong.svg");

export default {
  data() {
    return {
      racket,
      colombia,
      colombiaInverted,
      vietnam,
      vietnamInverted,
      waffle,
      waffleInverted,
      code,
      pingpong,
      show: false
    };
  },
  computed: {
    pageHeight() {
      return document.body.scrollHeight;
    }
  },
  methods: {
    scrollToBottom() {
      this.$vuetify.goTo(this.pageHeight);
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.5em;
}

.intro-wrapper {
  background: #232526;
  color: whitesmoke;
}

.intro {
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.contact-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.animation-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.rotate {
  transform: rotate(30deg);
}

@media screen and (min-width: 754px) {
  h1 {
    font-size: 2em;
  }
  .intro {
    flex-direction: row;
  }

  .contact-wrapper {
    align-items: flex-start;
  }

  .animation-wrapper {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
}
</style>
