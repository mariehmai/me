<template>
  <v-container class="work">
    <h1 class="mb-10">My work</h1>
    <div class="card-container">
      <v-hover
        v-slot:default="{ hover }"
        v-for="(work, key) in works"
        :key="key"
      >
        <v-card class="card" :elevation="hover ? 8 : 4">
          <v-img class="preview" :src="work.preview" />
          <v-card-title>
            <span class="flex">
              <a class="title" :href="work.link" target="_blank">
                {{ work.name }}
              </a>
              <a :href="work.github" target="_blank">
                <v-btn icon>
                  <font-awesome-icon :icon="['fab', 'github']" />
                </v-btn>
              </a>
            </span>
          </v-card-title>
          <v-card-subtitle>{{ work.description }}</v-card-subtitle>
        </v-card>
      </v-hover>
    </div>
  </v-container>
</template>

<script>
const works = [
  {
    name: 'Lyrichords',
    link: 'https://lyrichords.xyz/',
    description: 'VueJS app to visualise and manage songs list',
    preview: require('@/assets/lyrichords.png'),
    github: 'https://github.com/mariehmai/lyrichords'
  },
  {
    name: 'HelpMe',
    link: 'https://helpmemh.netlify.app/',
    description: 'VueJS app to get basic emergency numbers',
    preview: require('@/assets/helpme.png'),
    github: 'https://github.com/mariehmai/helpme'
  },
  {
    name: 'Français Utile',
    link: 'https://francais-utile.netlify.app/',
    description: 'Documentation to get French basics built with Docusaurus',
    preview: require('@/assets/fr-utile.png'),
    github: 'https://github.com/mariehmai/francais-utile'
  }
]

export default {
  data() {
    return {
      works
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.work {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  max-width: 90vw;
}

.v-card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.v-sheet {
  margin: 1rem 1rem;
}

.title {
  text-decoration: none;
}

.title:hover {
  text-decoration: underline;
}

.preview {
  object-fit: scale-down;
}
</style>
