<template>
  <div>
    <h1>Add personal information and upload documents</h1>
    <h2>Main Applicant</h2>
    <p>After enrolment, the main applicant will be the Medical Services Plan Account Holder, and will be responsible for maintaining the Medical Services Plan account and requesting any changes.</p>
    <hr/>
    <Input
      v-bind:label="'First Name'"
      v-bind:id="'textInputId'"
      v-bind:placeholder="'Enter value'"
      v-bind:styling="'bcgov-editable-white'"
      v-bind:isRequired="true"
      v-bind:value='firstName'
      v-on:input-change='inputChange'
    />
    {{firstName}}
  </div>
</template>

<script>
import Input from 'vue-shared-components/src/components/input/Input';

export default {
  name: 'EnrolmentPersonalInfo',
  components: {
    Input
  },
  data: () => {
    return {
      firstName: null
    };
  },
  methods: {
    nextPage: function () {},
    inputChange: function() {
      console.log("Input Changed: ", this.firstName);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
