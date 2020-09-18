const dataService = {
  firstName: null,
  lastName: null,
  phn: '',
  hasAcceptedTerms: false,

  reset: function() {
    this.firstName = null;
    this.lastName = null;
    this.phn = null;
    this.hasAcceptedTerms = false;
  },
};

export default dataService;
