export const RESET_FORM = 'resetForm';

// Home page:
export const SET_HAS_ACCEPTED_TERMS = 'setHasAcceptedTerms';
export const SET_LIVES_IN_BC = 'setLivesInBC';

// Personal Info page:
export const SET_FIRST_NAME = 'setFirstName';
export const SET_LAST_NAME = 'setLastName';
export const SET_START_DATE = 'setStartDate';
export const SET_UPLOADED_IMAGES = 'setUploadedImages';

// Review page:
export const SET_SIGNATURE = 'setSignature';

// Sending page:
export const SET_API_RESPONSE = 'setApiResponse';
export const SET_API_ERROR = 'setApiError';

export default {
  namespaced: true,
  state: () => {
    return {
      hasAcceptedTerms: false,
      livesInBC: null,
      firstName: null,
      lastName: null,
      startDate: null,
      uploadedImages: [],
      signature: null,
      apiResponse: null,
      apiError: null
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
    setStartDate(state, payload) {
      state.startDate = payload;
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
      commit(SET_FIRST_NAME, null);
      commit(SET_HAS_ACCEPTED_TERMS, false);
      commit(SET_LAST_NAME, null);
      commit(SET_LIVES_IN_BC, null);
      commit(SET_UPLOADED_IMAGES, []);
      commit(SET_SIGNATURE, null);
      commit(SET_API_RESPONSE, null);
      commit(SET_API_ERROR, null);
    },
    setHasAcceptedTerms({ commit }, hasAcceptedTerms) {
      commit(SET_HAS_ACCEPTED_TERMS, hasAcceptedTerms);
    },
    setLivesInBC({ commit }, livesInBC) {
      commit(SET_LIVES_IN_BC, livesInBC);
    },
    setFirstName({ commit }, firstName) {
      commit(SET_FIRST_NAME, firstName);
    },
    setLastName({ commit }, lastName) {
      commit(SET_LAST_NAME, lastName);
    },
    setStartDate({ commit }, startDate) {
      commit(SET_START_DATE, startDate);
    },
    setUploadedImages({ commit }, images) {
      commit(SET_UPLOADED_IMAGES, images);
    },
    setSignature({ commit }, signature) {
      commit(SET_SIGNATURE, signature);
    },
    setApiResponse({ commit }, response) {
      commit(SET_API_RESPONSE, response);
    },
    setApiError({ commit }, error) {
      commit(SET_API_ERROR, error);
    }
  },
  getters: {}
};
