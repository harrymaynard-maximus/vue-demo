class DataService {
  firstName: string = '';
  lastName: string = '';
  phn: string = '';
  hasAcceptedTerms: boolean = false;
  livesInBC: string = '';
  signature: string = '';

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.phn = '';
    this.hasAcceptedTerms = false;
    this.livesInBC = '';
    this.signature = '';
  }
}

export default new DataService();
