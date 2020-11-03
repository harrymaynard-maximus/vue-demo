class DataService {
  apiResponse;
  apiError;

  reset() {
    this.apiResponse = null;
    this.apiError = null;
  }
}

export default new DataService();
