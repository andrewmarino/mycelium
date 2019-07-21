import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import './styles/main.css';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
