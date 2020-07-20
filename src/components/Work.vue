<template>
  <v-container class="work">
    <h1 class="mb-10">My work</h1>
    <div class="card-container">
      <v-hover v-slot:default="{ hover }" v-for="(work, key) in works" :key="key">
        <v-card class="card" :elevation="hover ? 8 : 4">
          <v-img>
            <div class="card-header">
              <div :id="work.anim1" />
              <div :id="work.anim2" />
            </div>
          </v-img>

          <v-card-title>
            <span class="flex">
              <a class="title" :href="work.link" target="_blank">{{ work.name }}</a>
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
    name: "Lyrichords",
    link: "https://lyrichords.xyz/",
    description: "VueJS app to visualise and manage songs list",
    preview: require("@/assets/lyrichords.png"),
    github: "https://github.com/mariehmai/lyrichords",
    anim1: "square",
    anim2: "circle"
  },
  {
    name: "HelpMe",
    link: "https://helpmemh.netlify.app/",
    description: "VueJS app to get basic emergency numbers",
    preview: require("@/assets/helpme.png"),
    github: "https://github.com/mariehmai/helpme",
    anim1: "rectangle",
    anim2: "triangle"
  },
  {
    name: "Français Utile",
    link: "https://francais-utile.netlify.app/",
    description: "Documentation to get French basics built with Docusaurus",
    preview: require("@/assets/fr-utile.png"),
    github: "https://github.com/mariehmai/francais-utile",
    anim1: "circle2",
    anim2: "oval"
  }
];

export default {
  data() {
    return {
      works
    };
  }
};
</script>

<style scoped>
.card-header {
  height: 120px;
}

#square {
  position: absolute;
  opacity: 0.9;
  top: -20px;
  left: -20px;
  width: 140px;
  height: 140px;
  background: #ff5f6d;
  transform: rotate(80deg);
  transition: transform 1s, width 1s, height 1s;
}

.card:hover #square {
  transform: rotate(85deg);
  width: 140px;
  height: 140px;
}

#circle {
  position: absolute;
  opacity: 0.9;
  width: 200px;
  height: 200px;
  top: -100px;
  left: -50px;
  background: #ffc371;
  border-radius: 50%;
  transition: transform 1s, width 1s, height 1s, top 1s, left 1s;
}

.card:hover #circle {
  width: 220px;
  height: 220px;
  top: -120px;
  left: -10px;
}

#rectangle {
  position: absolute;
  opacity: 0.7;
  top: -20px;
  left: -20px;
  width: 190px;
  height: 150px;
  background: #ffdde1;
  transform: rotate(30deg);
  transition: transform 1s, width 1s, height 1s;
}

.card:hover #rectangle {
  transform: rotate(55deg);
  width: 140px;
  height: 140px;
}

#triangle {
  position: absolute;
  opacity: 0.8;
  top: -45px;
  left: -20px;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-top: 150px solid #ee9ca7;
  transform: rotate(90deg);
  transition: transform 1s, border 1s;
}

.card:hover #triangle {
  border-left: 120px solid transparent;
  border-right: 120px solid transparent;
  transform: rotate(70deg);
}

#oval {
  position: absolute;
  opacity: 0.7;
  width: 190px;
  height: 200px;
  top: -100px;
  left: -15px;
  background: #076585;
  border-radius: 50%;
  transition: transform 1s, width 1s, height 1s, top 1s, left 2s;
}

.card:hover #oval {
  width: 200px;
  height: 200px;
  top: -95px;
  left: 50px;
}

#circle2 {
  position: absolute;
  opacity: 0.9;
  width: 220px;
  height: 180px;
  top: -100px;
  left: -10px;
  background: #a0bac7;
  border-radius: 50%;
  transition: transform 1s, width 1s, height 1s, top 1s, left 1s;
}

.card:hover #circle2 {
  width: 200px;
  height: 200px;
  top: -120px;
  left: -30px;
}

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
  max-width: 250px;
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
  font-family: "Raleway", sans-serif !important;
}

.title:hover {
  text-decoration: underline;
}

.preview {
  object-fit: scale-down;
}
</style>
