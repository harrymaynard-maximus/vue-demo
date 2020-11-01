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
    <div class="text-danger" v-if="$v.firstName.$dirty && !$v.firstName.required" aria-live="assertive">Field is required</div>
    <div class="text-danger" v-if="$v.firstName.$dirty && !$v.firstName.minLength" aria-live="assertive">Name must have at least {{$v.firstName.$params.minLength.min}} letters.</div>

    <Input
      v-bind:label="'Last Name'"
      v-bind:styling="'mt-3'"
      v-model="$v.lastName.$model"
    />
    <div class="text-danger" v-if="$v.lastName.$dirty && !$v.lastName.required" aria-live="assertive">Field is required</div>
    <div class="text-danger" v-if="$v.lastName.$dirty && !$v.lastName.minLength" aria-live="assertive">Name must have at least {{$v.lastName.$params.minLength.min}} letters.</div>

    <div class="mt-3">
      <FileUploader v-model="files" />
      <div class="text-danger" v-if="$v.files.$dirty && !$v.files.required" aria-live="assertive">Upload is required</div>
    </div>

    <Button label="Continue"
            styling="bcgov-normal-blue btn mt-3"
            v-on:button-click='nextPage' />
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import Input from '../../common/components/Input';
import FileUploader from '../../common/components/file-uploader/FileUploader.vue';
import DataService from '../../../services/data-service';
import { required, minLength } from 'vuelidate/lib/validators';
import pageStateService from '../../common/services/page-state-service';
import routes from '../../../routes';
import actionTypes from '../../../store/action-types';
import moduleNames from '../../../module-names';


export default {
  name: 'EnrolmentPersonalInfo',
  components: {
    Button,
    FileUploader,
    Input
  },
  data: () => {
    return {
      firstName: DataService.firstName,
      lastName: DataService.lastName,
      files: DataService.files
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
    },
    files: {
      required
    }
  },
  methods: {
    nextPage: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return;
      }
      this.$store.dispatch(moduleNames.ENROLMENT + '/' + actionTypes.SET_FIRST_NAME, this.firstName);
      this.$store.dispatch(moduleNames.ENROLMENT + '/' + actionTypes.SET_LAST_NAME, this.lastName);
      this.$store.dispatch(moduleNames.ENROLMENT + '/' + actionTypes.SET_UPLOADED_IMAGES, this.files);

      pageStateService.setPageIncomplete(routes.ENROLMENT_PERSONAL_INFO.path);
      const path = routes.ENROLMENT_REVIEW.path;
      pageStateService.setPageComplete(path);
      this.$router.push(path);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.text-danger {
  color: #b33238 !important;
}
</style>
