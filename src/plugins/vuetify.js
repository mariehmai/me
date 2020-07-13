import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(fas, fab)

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'faSvg'
  },
  theme: {
    themes: {
      light: {
        primary: '#ff5f6d',
        secondary: '#ffc371',
        inverted: '#ffffff'
      }
    }
  }
})
