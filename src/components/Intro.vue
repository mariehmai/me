<template>
  <div class="intro">
    <v-container>
      <h1>Hi, I'm Marie-Hélène,</h1>
      <h1 class="mb-10">Full Stack Developer ✌️</h1>
      <v-btn outlined color="inverted" @click="scrollToBottom">Contact me</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
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
.intro {
  height: 75vh;
  background: linear-gradient(90deg, #8e9eab 0%, #eef2f3 100%);
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
