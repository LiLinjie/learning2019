import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/less/base.less';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
