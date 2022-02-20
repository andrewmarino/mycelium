import axios from 'axios';

const state = {
  appInitStatus: null,
  groups: [],
  hasError: false,
  isLoading: false,
  page: 1,
  results: [],
  resultsTotal: null,
};

const getters = {
  getAppInitStatus: state => state.appInitStatus,
  getGroups: state => state.groups,
  getResults: state => state.results,
};

const mutations = {
  setAppInitStatus: (state, status) => (state.appInitStatus = status),
  setGroups: (state, groups) => (state.groups = groups),
  setLoadingStatus: (state, loading) => (state.loadingStatus = loading),
  setErrorStatus: (state, error) => (state.error = error),
  setPage: (state, page) => (state.page = page),
  setResults: (state, results) => (state.results = results),
  setResultsTotal: (state, total) => (state.resultsTotal = total),
};

const actions = {
  /**
   * Retrieve fungal results from our API.
   *
   * @param string searchKeyword
   * @param string searchGroup
   */
  async fetchFungi({ commit }, searchKeyword, searchGroup) {
    const endpointUrl = searchKeyword ? '/api/fungi/search' : '/api/fungi';
    const params = {
      search: searchKeyword || null,
      group: searchGroup || null,
    };

    commit('setLoadingStatus', true);

    await axios.get(endpointUrl, {
      params,
    }).then(response => {
      commit('setResults', response.data);
    }).catch(error => {
      console.log(error);
      commit('setErrorStatus', true);
    }).finally(() => {
      commit('setAppInitStatus', true);
      commit('setLoadingStatus', false);
    });
  },

  /**
   * Retrieve fungal groups from our API.
   */
  async fetchGroups({ commit }) {
    const params = {};

    await axios.get('/api/groups', {
      params
    }).then(response => {
      commit('setGroups', response.data);
    }).catch(error => {
      console.log(error);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
