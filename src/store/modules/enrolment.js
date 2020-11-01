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
    setHasAcceptedTerms(state, payload) {
      state.hasAcceptedTerms = payload;
    },
    setLivesInBC(state, payload) {
      state.livesInBC = payload;
    },
    setFirstName(state, payload) {
      state.firstName = payload;
    },
    setLastName(state, payload) {
      state.lastName = payload;
    },
    setUploadedImages(state, payload) {
      state.uploadedImages = payload;
    }
  },
  actions: {
    setHasAcceptedTerms({ commit }, hasAcceptedTerms) {
      commit(actionTypes.SET_HAS_ACCEPTED_TERMS, hasAcceptedTerms);
    },
    setLivesInBC({ commit }, livesInBC) {
      commit(actionTypes.SET_LIVES_IN_BC, livesInBC);
    },
    setFirstName({ commit }, firstName) {
      commit(actionTypes.SET_FIRST_NAME, firstName);
    },
    setLastName({ commit }, lastName) {
      commit(actionTypes.SET_LAST_NAME, lastName);
    },
    setUploadedImages({ commit }, images) {
      commit(actionTypes.SET_UPLOADED_IMAGES, images);
    }
  },
  getters: {}
};
