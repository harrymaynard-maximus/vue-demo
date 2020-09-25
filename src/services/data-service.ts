class DataService {
  firstName: string = '';
  lastName: string = '';
  phn: string = '';
  hasAcceptedTerms: boolean = false;
  livesInBC: string = '';
  signature: string = '';

  apiResponse: any;
  apiError: any;

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.phn = '';
    this.hasAcceptedTerms = false;
    this.livesInBC = '';
    this.signature = '';

    this.apiResponse = null;
    this.apiError = null;
  }
}

export default new DataService();
