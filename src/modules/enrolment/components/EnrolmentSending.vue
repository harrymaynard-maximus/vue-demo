<template>
  <main>
    <Header name="Enrolment" :history="history" />
    <div class="container py-5">
      <h1 class="text-center">Sending Application</h1>
      <div class="text-center">
        <div class="bcgov-page-loader"></div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from 'vue-shared-components/src/components/footer/Footer';
import Header from 'vue-shared-components/src/components/header/Header';
import routes from '../../../routes';
import pageStateService from '../../common/services/page-state-service';
import moduleNames from '../../../module-names';
import actionTypes from '../../../store/action-types';
import axios from 'axios';

export default {
  name: 'EnrolmentSending',
  components: {
    Footer,
    Header,
  },
  data: () => {
    return {
      history: {}
    };
  },
  created: function() {
    // Error URL: https://run.mocky.io/v3/379961d9-61a0-4b9e-a3d7-a32b00937f8f
    axios.get('https://api.ipify.org?format=json').then((response) => {
      this.$store.dispatch(moduleNames.ENROLMENT + '/' + actionTypes.SET_API_RESPONSE, response);
      this.nextPage();
    }).catch((error) => {
      this.$store.dispatch(moduleNames.ENROLMENT + '/' + actionTypes.SET_API_ERROR, error);
      this.navigateToErrorPage();
    });
  },
  methods: {
    nextPage: function() {
      pageStateService.setPageIncomplete(routes.ENROLMENT_SENDING.path);
      const path = routes.ENROLMENT_SUBMISSION.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    },
    navigateToErrorPage: function() {
      pageStateService.setPageIncomplete(routes.ENROLMENT_SENDING.path);
      const path = routes.ENROLMENT_SUBMISSION_ERROR.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  padding: 0;
}
</style>
