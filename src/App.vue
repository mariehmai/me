<template>
  <v-app>
    <v-main app>
      <Intro />
      <Work />
    </v-main>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Work from "@/components/Work";

export default {
  name: "App",
  components: {
    Footer,
    Intro,
    Work
  }
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
button,
.v-card__subtitle {
  font-family: "Raleway", sans-serif !important;
}
</style>