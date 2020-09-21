const dataService = {
  firstName: null,
  lastName: null,
  phn: '',
  hasAcceptedTerms: false,
  livesInBC: null,

  reset: function() {
    this.firstName = null;
    this.lastName = null;
    this.phn = null;
    this.hasAcceptedTerms = false;
    this.livesInBC = null;
  },
};

export default dataService;
