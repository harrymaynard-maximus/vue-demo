<template>
  <div>
    <h1>See if you qualify for public health care in B.C.</h1>
    <p>If you already have Medical Services Plan (MSP) coverage and received a letter notifying you to renew your BC Services Card, you do not have to submit a new Application for MSP Enrolment; you only need to renew your BC Services Card. Follow the instructions on the letter to renew your card.</p>
    <hr/>
    <p><label>Do you currently live in British Columbia (i.e. Do you have an address here)?</label></p>

    <div class="form-group">
      <input type="radio" id="no" value="N" v-model="livesInBC" />&nbsp;
      <label for="no">No</label>
      <br>
      <input type="radio" id="yes" value="Y" v-model="livesInBC" />&nbsp;
      <label for="yes">Yes</label>
      <div class="text-danger" v-if="$v.livesInBC.$dirty && !$v.livesInBC.required">Field is required</div>
    </div>

    <Button label="Continue"
            styling="bcgov-normal-blue btn"
            v-on:button-click='nextPage' />
            
    <ConsentModal v-if="!hasAcceptedTerms"
            v-on:accept="acceptConsentModal"
            :heading="'Information Collection Notice'"/>
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import ConsentModal from '../../common/components/ConsentModal';
import DataService from '../../../services/data-service';
import pageStateService from '../../common/services/page-state-service';
import routes from '../../../routes';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'EnrolmentHome',
  components: {
    Button,
    ConsentModal
  },
  data: () => {
    return {
      hasAcceptedTerms: DataService.hasAcceptedTerms,
      livesInBC: DataService.livesInBC,
    };
  },
  validations: {
    livesInBC: {
      required,
    }
  },
  created: function() {
    pageStateService.setPageComplete(routes.ENROLMENT_HOME.path);
  },
  methods: {
    nextPage: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return;
      }
      DataService.hasAcceptedTerms = true;
      DataService.livesInBC = this.livesInBC;

      const path = routes.ENROLMENT_PERSONAL_INFO.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    },
    handleSelect: function(event) {
      console.log('event: ', event);
    },
    acceptConsentModal: function() {
      DataService.hasAcceptedTerms = true;
      this.hasAcceptedTerms = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
