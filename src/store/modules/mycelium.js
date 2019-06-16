import axios from 'axios';
import { auth } from '../../data/auth';

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
    let endpointUrl = '/api/pages/fungi/children';
    let params = {
      select: 'title, slug, content, url, panelImage',
      limit: 3,
      page: 1,
      q: searchKeyword || null,
    };

    commit('setLoadingStatus', true);

    await axios
      .get(searchKeyword ? `${endpointUrl}/search` : endpointUrl, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
        params,
      })
      .then(response => {
        let { data } = response;
        commit('setResults', data.data);
        commit('setResultsTotal', data.pagination.total);
      })
      .catch(error => {
        console.log(error);
        commit('setErrorStatus', true);
      })
      .finally(() => {
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
