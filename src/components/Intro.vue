<template>
  <div class="intro-wrapper">
    <v-container class="intro">
      <v-container class="contact-wrapper">
        <h1>Hi, I'm Marie-Hélène,</h1>
        <h1 class="mb-10">Full Stack Developer ✌️</h1>
        <v-btn outlined color="inverted" @click="scrollToBottom">Contact me</v-btn>
      </v-container>

      <v-container class="animation-wrapper">
        <v-hover v-slot:default="{ hover }">
            <img v-if="hover" key="c1" class="rotate" :src="colombia" width="50" />
            <img v-else key="c2" class="rotate" :src="colombiaInverted" width="50" />
        </v-hover>
        <img :src="code" width="30" />
        <v-hover v-slot:default="{ hover }">
            <img v-if="hover" key="w1" class="rotate" :src="waffle" width="40" />
            <img v-else key="w2" class="rotate" :src="waffleInverted" width="40" />
        </v-hover>
        <img class="rotate" :src="racket" width="50" />
        <v-hover v-slot:default="{ hover }">
            <img v-if="hover" key="v1" class="rotate" :src="vietnam" width="45" />
            <img v-else key="v2" class="rotate" :src="vietnamInverted" width="45" />
        </v-hover>
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
  background: linear-gradient(90deg, #8e9eab 0%, #eef2f3 100%);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.5;
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
