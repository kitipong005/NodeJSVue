// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import { sync } from 'vuex-router-sync'
import BackHeader from '@/components/Header.vue'

Vue.config.devtools = true;
Vue.config.productionTip = false
Vue.use(VueResource)

sync(store, router)

Vue.component('back-header', BackHeader)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
