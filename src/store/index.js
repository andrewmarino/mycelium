import Vue from 'vue';
import Vuex from 'vuex';
import mycelium from './modules/mycelium';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mycelium,
  },
});
