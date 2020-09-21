<template>
  <div>
    <h1>See if you qualify for public health care in B.C.</h1>
    <p>If you already have Medical Services Plan (MSP) coverage and received a letter notifying you to renew your BC Services Card, you do not have to submit a new Application for MSP Enrolment; you only need to renew your BC Services Card. Follow the instructions on the letter to renew your card.</p>
    <hr/>
    <p><label>Do you currently live in British Columbia (i.e. Do you have an address here)?</label></p>

    <Radio id="radio1" name="radio" label="No" v-on:radio-select="handleSelect($event)" />
    <Radio id="radio2" name="radio" label="Yes" v-on:radio-select="handleSelect($event)" />

    <Button label="Continue"
            styling="bcgov-normal-blue btn"
            v-on:button-click='nextPage' />
            
    <ConsentModal v-if="isConcentModalOpen"
            v-on:accept="acceptConsentModal"
            :heading="'Information Collection Notice'"/>
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import Radio from 'vue-shared-components/src/components/radio/Radio';
import ConsentModal from '../../common/components/ConsentModal';
import DataService from '../../../services/data-service';
import pageStateService from '../../common/services/page-state-service';
import routes from '../../../routes';

export default {
  name: 'EnrolmentHome',
  components: {
    Button,
    ConsentModal,
    Radio
  },
  data: () => {
    return {
      isConcentModalOpen: true
    };
  },
  created: function() {
    pageStateService.setPageComplete(routes.ENROLMENT_HOME.path);
  },
  methods: {
    nextPage: function () {
      const path = routes.ENROLMENT_PERSONAL_INFO.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    },
    handleSelect: function(event) {
      console.log('event: ', event);
    },
    acceptConsentModal: function() {
      DataService.hasAcceptedTerms = true;
      this.isConcentModalOpen = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
