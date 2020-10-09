class DataService {
  firstName = '';
  lastName = '';
  phn = '';
  hasAcceptedTerms = false;
  livesInBC = '';
  signature = '';
  files = new Array()

  apiResponse;
  apiError;

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.phn = '';
    this.hasAcceptedTerms = false;
    this.livesInBC = '';
    this.signature = '';
    this.files = new Array();

    this.apiResponse = null;
    this.apiError = null;
  }
}

export default new DataService();
