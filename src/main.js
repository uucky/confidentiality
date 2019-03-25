import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import '@/assets/tailwind.css';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
