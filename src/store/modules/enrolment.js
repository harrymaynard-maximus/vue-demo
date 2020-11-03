import actionTypes from '../action-types';

export default {
  namespaced: true,
  state: () => {
    return {
      hasAcceptedTerms: false,
      livesInBC: null,
      firstName: null,
      lastName: null,
      uploadedImages: [],
      signature: null,
      apiResponse: null,
      apiError: null
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
    },
    setSignature(state, payload) {
      state.signature = payload;
    },
    setApiResponse(state, payload) {
      state.apiResponse = payload;
    },
    setApiError(state, payload) {
      state.apiError = payload;
    }
  },
  actions: {
    resetForm({ commit }) {
      commit(actionTypes.SET_FIRST_NAME, null);
      commit(actionTypes.SET_HAS_ACCEPTED_TERMS, false);
      commit(actionTypes.SET_LAST_NAME, null);
      commit(actionTypes.SET_LIVES_IN_BC, null);
      commit(actionTypes.SET_UPLOADED_IMAGES, []);
      commit(actionTypes.SET_SIGNATURE, null);
      commit(actionTypes.SET_API_RESPONSE, null);
      commit(actionTypes.SET_API_ERROR, null);
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
    },
    setSignature({ commit }, signature) {
      commit(actionTypes.SET_SIGNATURE, signature);
    },
    setApiResponse({ commit }, response) {
      commit(actionTypes.SET_API_RESPONSE, response);
    },
    setApiError({ commit }, error) {
      commit(actionTypes.SET_API_ERROR, error);
    }
  },
  getters: {}
};
