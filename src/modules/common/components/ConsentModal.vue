<template>
  <div class="">
    <div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="exampleModalLabel">{{heading}}</h2>
          </div>
          <div class="modal-body">
            <p><strong>Keep your personal information secure – especially when using a shared device like a computer at a library, school or café.</strong> To delete any information that was entered, either complete the request and submit it or, if you don't finish, close the web browser.</p>
            <p>Personal information is collected under the authority of the Medicare Protection Act and section 26 (a), (c) and (e) of the Freedom of Information and Protection of Privacy Act for the purposes of administration of the Medical Services Plan. If you have any questions about the collection and use of your personal information, please contact <a href="">Health Insurance BC<i aria-hidden="true" class="fa fa-external-link"></i></a>.</p>
            <!-- <Checkbox label="I have read and understand this information"
                      v-model="acceptConditions"
                      v-on:input="acceptConditionsInput"></Checkbox> -->
            <label>
              <input type="checkbox" v-model="acceptConditions" /> &nbsp;
              <strong>I have read and understand this information</strong>
            </label>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-primary" @click="accept">Continue</button> -->
            <Button label="Continue"
                    styling="bcgov-normal-blue btn"
                    :disabled="!acceptConditions"
                    v-on:button-click='accept' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';

export default {
  name: 'ConsentModal',
  components: {
    Button
  },
  props: {
    content: String,
    heading: String,
  },
  data: () => {
    return {
      acceptConditions: false
    }
  },
  methods: {
    accept: function() {
      this.$emit('accept', true);
    },
    acceptConditionsInput: function(value) {
      console.log("Input from checkbox component.", value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal.show {
  display: block;
  background-color: rgba(0,0,0,0.4);
}
</style>
