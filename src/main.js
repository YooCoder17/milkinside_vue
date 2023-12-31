/* eslint-disable */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueClipboard from 'vue-clipboard2'
Vue.config.productionTip = false;
Vue.use(VueClipboard);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
