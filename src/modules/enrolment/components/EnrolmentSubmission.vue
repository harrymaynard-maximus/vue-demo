<template>
  <main>
    <Header name="Enrolment" :history="history" />
    <div class="container py-5">
      <h1>Submission successful.</h1>
      <p>Reference number: 12345</p>
    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from 'vue-shared-components/src/components/footer/Footer';
import Header from 'vue-shared-components/src/components/header/Header';

export default {
  name: 'EnrolmentSubmission',
  components: {
    Footer,
    Header,
  },
  data: () => {
    return {
      history: {}
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  padding: 0;
}
</style>
