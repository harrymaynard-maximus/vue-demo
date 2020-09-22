class DataService {
  firstName: string = '';
  lastName: string = '';
  phn: string = '';
  hasAcceptedTerms: boolean = false;
  livesInBC: string = '';

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.phn = '';
    this.hasAcceptedTerms = false;
    this.livesInBC = '';
  }
}

export default new DataService();
