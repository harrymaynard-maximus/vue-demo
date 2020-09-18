<template>
  <div>
    <Header name="Enrolment" :history="history" />
    <div class="container py-5">
      <h1 class="text-center">Sending Application</h1>
      <div class="text-center">
        <div class="bcgov-page-loader"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from 'vue-shared-components/src/components/footer/Footer';
import Header from 'vue-shared-components/src/components/header/Header';
import routes from '../../../routes';
import pageStateService from '../../../services/page-state-service';

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
    setTimeout(() => {
      this.nextPage();
    }, 5000);
  },
  methods: {
    nextPage: function() {
      pageStateService.setPageIncomplete(routes.ENROLMENT_SENDING.path);
      const path = routes.ENROLMENT_SUBMISSION.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
