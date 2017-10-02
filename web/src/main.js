// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import VueGitHubButtons from 'vue-github-buttons'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-default/index.css'
import 'vue-github-buttons/dist/vue-github-buttons.css'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueGitHubButtons)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
