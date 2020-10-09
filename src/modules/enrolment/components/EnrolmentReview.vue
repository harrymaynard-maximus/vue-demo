<template>
  <div>
    <h1>Review Application</h1>
    <hr/>

    <h2>Personal Information</h2>
    <Table :elements='personalData' />

    <h2 class="mt-5">Other Information</h2>
    <Table :elements='otherData' />

    <h2 class="mt-5">Signature</h2>
    <div class="form-group">
      <SignaturePad v-model="signature" />
    </div>
    <img :src="signature" alt="Signature" />
    <br/>
    <div class="text-danger" v-if="$v.signature.$dirty && !$v.signature.required">Signature is required</div>

    <Button label="Submit"
            styling="bcgov-normal-blue btn"
            v-on:button-click='nextPage' />
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import SignaturePad from '../../common/components/SignaturePad';
import Table from '../../common/components/Table';
import DataService from '../../../services/data-service';
import routes from '../../../routes';
import pageStateService from '../../common/services/page-state-service';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'EnrolmentReview',
  components: {
    Button,
    SignaturePad,
    Table
  },
  data: () => {
    return {
      personalData: [
        { name: 'First Name', value: DataService.firstName },
        { name: 'Last Name', value: DataService.lastName }
      ],
      otherData: [
        { name: 'Lives in BC', value: DataService.livesInBC }
      ],
      signature: null
    };
  },
  validations: {
    signature: {
      required
    },
  },
  methods: {
    nextPage: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return;
      }
      DataService.signature = this.signature;

      pageStateService.setPageIncomplete(routes.ENROLMENT_REVIEW.path);
      const path = routes.ENROLMENT_SENDING.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
