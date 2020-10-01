import { CommonImage } from '@/modules/common/models/images';

class DataService {
  firstName: string = '';
  lastName: string = '';
  phn: string = '';
  hasAcceptedTerms: boolean = false;
  livesInBC: string = '';
  signature: string = '';
  files: Array<CommonImage> = new Array<CommonImage>()

  apiResponse: any;
  apiError: any;

  reset() {
    this.firstName = '';
    this.lastName = '';
    this.phn = '';
    this.hasAcceptedTerms = false;
    this.livesInBC = '';
    this.signature = '';
    this.files = new Array<CommonImage>();

    this.apiResponse = null;
    this.apiError = null;
  }
}

export default new DataService();
