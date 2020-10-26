class DataService {
  signature = '';
  apiResponse;
  apiError;

  reset() {
    this.signature = '';
    this.apiResponse = null;
    this.apiError = null;
  }
}

export default new DataService();
