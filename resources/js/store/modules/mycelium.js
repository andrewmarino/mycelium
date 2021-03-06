import axios from 'axios';

const state = {
  activeFilters: [],
  hasError: false,
  isLoading: false,
  page: 1,
  results: [],
  resultsTotal: null,
};

const getters = {
  getResults: state => state.results,
};

const mutations = {
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
   */
  async fetchFungi({ commit }, searchKeyword) {
    const endpointUrl = searchKeyword ? '/api/fungi/search' : '/api/fungi';
    const params = {
      q: searchKeyword || null,
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
      commit('setLoadingStatus', false);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
