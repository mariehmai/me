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
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Work from '@/components/Work'

export default {
  name: 'App',
  components: {
    Footer,
    Intro,
    Work
  }
}
</script>
