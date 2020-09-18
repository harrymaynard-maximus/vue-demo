<template>
  <main>
    <Header name="Enrolment" :history="history" />
    <ProgressBar :routes='routes' :currentPath='$route.path' />
    <div class="container py-5">
      <router-view></router-view>
    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from 'vue-shared-components/src/components/footer/Footer';
import Header from 'vue-shared-components/src/components/header/Header';
import ProgressBar from '../common/ProgressBar';
import routes from './step-routes';

export default {
  name: 'Enrolment',
  components: {
    Footer,
    Header,
    ProgressBar
  },
  data: () => {
    return {
      history: {},
      routes: routes
    };
  },
  methods: {
    continue: function () {
      //DataService.phn = this.phn;
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
