<template>
  <div>
    <Header name="Enrolment" :history="history" />
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from 'vue-shared-components/src/components/footer/Footer';
import Header from 'vue-shared-components/src/components/header/Header';

export default {
  name: 'HelloWorld',
  components: {
    Footer,
    Header,
  },
  data: () => {
    return {
      history: {},
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
</style>
