import App from './App.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import router from './router';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


