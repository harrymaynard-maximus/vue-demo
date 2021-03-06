<template>
  <div>
    <h1>Review Application</h1>
    <hr/>

    <div class="row mt-5">
      <div class="col-10">
        <h2>Eligibility</h2>
      </div>
      <div class="col-2 text-right">
        <a href="javascript:void(0)" @click="navigateToHomePage()">Edit</a>
      </div>
    </div>
    <Table :elements='otherReviewData' />

    <div class="row mt-5">
      <div class="col-10">
        <h2>Personal Information</h2>
      </div>
      <div class="col-2 text-right">
        <a href="javascript:void(0)" @click="navigateToPersonalInfoPage()">Edit</a>
      </div>
    </div>
    <Table :elements='personalReviewData' />

    <h2 class="mt-5">Signature</h2>
    <div class="form-group">
      <SignaturePad v-model="signature.fileContent" />
    </div>
    <div class="text-danger" v-if="$v.signature.$dirty && !$v.signature.requiredCommonImageContent">Signature is required</div>

    <Button label="Submit"
            styling="bcgov-normal-blue btn"
            v-on:button-click='nextPage' />
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import SignaturePad from '../../common/components/SignaturePad';
import Table from '../../common/components/Table';
import routes from '../../../routes';
import pageStateService from '../../common/services/page-state-service';
import { required } from 'vuelidate/lib/validators';
import { CommonImage } from '../../common/models/images';
import moduleNames from '../../../module-names';
import { SET_SIGNATURE } from '../../../store/modules/enrolment';
import strings from '../../../locale/strings.en';
import { scrollTo } from '../../common/helpers/scroll';

const requiredCommonImageContent = (data) => {
  return data && data.fileContent && data.fileContent !== '';
} 

export default {
  name: 'EnrolmentReview',
  components: {
    Button,
    SignaturePad,
    Table
  },
  data: () => {
    return {
      hasConfirmedPageLeave: false,
      personalReviewData: [],
      otherReviewData: [],
      signature: new CommonImage()
    };
  },
  created() {
    this.personalReviewData = [
      { name: 'First Name', value: this.$store.state.enrolment.firstName },
      { name: 'Last Name', value: this.$store.state.enrolment.lastName }
    ];
    this.otherReviewData = [
      { name: 'Lives in BC', value: this.$store.state.enrolment.livesInBC }
    ];
  },
  validations: {
    signature: {
      required,
      requiredCommonImageContent
    },
  },
  methods: {
    nextPage: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return;
      }
      this.$store.dispatch(moduleNames.ENROLMENT + '/' + SET_SIGNATURE, this.signature);

      pageStateService.setPageIncomplete(routes.ENROLMENT_REVIEW.path);
      const path = routes.ENROLMENT_SENDING.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    },
    navigateToHomePage() {
      pageStateService.setPageIncomplete(routes.ENROLMENT_REVIEW.path);
      const path = routes.ENROLMENT_HOME.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
      scrollTo(0);
    },
    navigateToPersonalInfoPage() {
      pageStateService.setPageIncomplete(routes.ENROLMENT_REVIEW.path);
      const path = routes.ENROLMENT_PERSONAL_INFO.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
      scrollTo(0);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.path === routes.ENROLMENT_SENDING.path
    || (to.path === routes.ENROLMENT_HOME.path && pageStateService.isPageComplete(to.path))
    || (to.path === routes.ENROLMENT_PERSONAL_INFO.path && pageStateService.isPageComplete(to.path))) {
      next();
    } else {
      // Check for `hasConfirmedPageLeave` because of double navigation to home page.
      if (this.hasConfirmedPageLeave || window.confirm(strings.NAVIGATION_CONFIRMATION_PROMPT)) {
        this.hasConfirmedPageLeave = true;
        next();
      } else {
        next(false);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
