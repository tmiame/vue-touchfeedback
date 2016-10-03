import Vue from 'vue'
import VueTouchFeedback from '../../dist/vue-touchfeedback'
import App from './App'

Vue.use(VueTouchFeedback)

new Vue({
  render(h) {
    return h(App)
  }
}).$mount('#app')
