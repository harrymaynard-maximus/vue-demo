<template>
  <div>
    <h1>Add personal information and upload documents</h1>
    <h2>Main Applicant</h2>
    <p>After enrolment, the main applicant will be the Medical Services Plan Account Holder, and will be responsible for maintaining the Medical Services Plan account and requesting any changes.</p>
    <hr/>
    <Input
      v-bind:label="'First Name'"
      v-model="firstName"
    />

    <Input
      v-bind:label="'Last Name'"
      v-model="lastName"
    />

    <Button label="Continue"
            styling="bcgov-normal-blue btn"
            v-on:button-click='nextPage' />
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import Input from '../common/Input';
import DataService from '../../services/data-service';

export default {
  name: 'EnrolmentPersonalInfo',
  components: {
    Button,
    Input
  },
  data: () => {
    return {
      firstName: DataService.firstName,
      lastName: DataService.lastName
    };
  },
  methods: {
    nextPage: function () {
      DataService.firstName = this.firstName;
      DataService.lastName = this.lastName;
      this.$router.push('/msp/enrolment/review');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
