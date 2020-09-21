<template>
  <div>
    <h1>Add personal information and upload documents</h1>
    <h2>Main Applicant</h2>
    <p>After enrolment, the main applicant will be the Medical Services Plan Account Holder, and will be responsible for maintaining the Medical Services Plan account and requesting any changes.</p>
    <hr/>
    <Input
      v-bind:label="'First Name'"
      v-model.trim.lazy="$v.firstName.$model"
    />
    <div class="text-danger" v-if="$v.firstName.$dirty && !$v.firstName.required">Field is required</div>
    <div class="text-danger" v-if="$v.firstName.$dirty && !$v.firstName.minLength">Name must have at least {{$v.firstName.$params.minLength.min}} letters.</div>

    <Input
      v-bind:label="'Last Name'"
      v-bind:styling="'mt-3'"
      v-model="$v.lastName.$model"
    />
    <div class="text-danger" v-if="$v.lastName.$dirty && !$v.lastName.required">Field is required</div>
    <div class="text-danger" v-if="$v.lastName.$dirty && !$v.lastName.minLength">Name must have at least {{$v.lastName.$params.minLength.min}} letters.</div>

    <Button label="Continue"
            styling="bcgov-normal-blue btn mt-3"
            v-on:button-click='nextPage' />
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import Input from '../../common/components/Input';
import DataService from '../../../services/data-service';
import { required, minLength } from 'vuelidate/lib/validators';
import pageStateService from '../../common/services/page-state-service';
import routes from '../../../routes';

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
  validations: {
    firstName: {
      required,
      minLength: minLength(4)
    },
    lastName: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    nextPage: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return;
      }
      DataService.firstName = this.firstName;
      DataService.lastName = this.lastName;

      pageStateService.setPageIncomplete(routes.ENROLMENT_PERSONAL_INFO.path);
      const path = routes.ENROLMENT_REVIEW.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
