<template>
  <div>
    <Header name="My Header" :history="history" />
    <div class="container">
      <h1>Request Medical Services Plan Account Confirmation Letter</h1>
      <p>Use this online form to request a Medical Services Plan Account Confirmation letter that will verify enrolment status for one or more individuals on an account.</p>
      <p>Please allow two to three weeks for delivery.</p>
      <hr/>
      <h2>Your Information</h2>
      <hr/>
      <div class='form-group'>
        <PHNInput v-model='phn' />
      </div>
      <Button label="Submit"
              styling="bcgov-normal-blue btn"
              v-on:button-click='save' />
    </div>
    <Footer />
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import Footer from 'vue-shared-components/src/components/footer/Footer';
import Header from 'vue-shared-components/src/components/header/Header';
import PHNInput from './PHNInput';
import DataService from '../services/data-service';

export default {
  name: 'HelloWorld',
  components: {
    Button,
    Footer,
    Header,
    PHNInput
  },
  data: () => {
    return {
      history: {},
      phn: '123',
    };
  },
  methods: {
    save: function () {
      DataService.phn = this.phn;
      console.log(DataService.phn);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
