import actionTypes from '../action-types';

export default {
  namespaced: true,
  state: () => {
    return {
      hasAcceptedTerms: false,
      livesInBC: null,
      firstName: null,
      lastName: null,
      uploadedImages: []
    };
  },
  mutations: {
    setFirstName(state, payload) {
      state.firstName = payload;
    },
    setHasAcceptedTerms(state, payload) {
      state.hasAcceptedTerms = payload;
    },
    setLastName(state, payload) {
      state.lastName = payload;
    },
    setLivesInBC(state, payload) {
      state.livesInBC = payload;
    },
    setUploadedImages(state, payload) {
      state.uploadedImages = payload;
    }
  },
  actions: {
    resetForm({ commit }) {
      commit(actionTypes.SET_FIRST_NAME, null);
      commit(actionTypes.SET_HAS_ACCEPTED_TERMS, false);
      commit(actionTypes.SET_LAST_NAME, null);
      commit(actionTypes.SET_LIVES_IN_BC, null);
      commit(actionTypes.SET_UPLOADED_IMAGES, []);
    },
    setFirstName({ commit }, firstName) {
      commit(actionTypes.SET_FIRST_NAME, firstName);
    },
    setHasAcceptedTerms({ commit }, hasAcceptedTerms) {
      commit(actionTypes.SET_HAS_ACCEPTED_TERMS, hasAcceptedTerms);
    },
    setLastName({ commit }, lastName) {
      commit(actionTypes.SET_LAST_NAME, lastName);
    },
    setLivesInBC({ commit }, livesInBC) {
      commit(actionTypes.SET_LIVES_IN_BC, livesInBC);
    },
    setUploadedImages({ commit }, images) {
      commit(actionTypes.SET_UPLOADED_IMAGES, images);
    }
  },
  getters: {}
};
