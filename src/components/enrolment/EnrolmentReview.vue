<template>
  <div>
    <h1>Review Application</h1>
    
    <Table :elements='tableData' />

    <Button label="Submit"
            styling="bcgov-normal-blue btn"
            v-on:button-click='nextPage' />
  </div>
</template>

<script>
import Button from 'vue-shared-components/src/components/button/Button';
import Table from '../common/Table';
import DataService from '../../services/data-service';

export default {
  name: 'EnrolmentReview',
  components: {
    Button,
    Table
  },
  data: () => {

    return {
      firstName: DataService.firstName,
      lastName: DataService.lastName,
      tableData: [
        { name: 'First Name', value: DataService.firstName },
        { name: 'Last Name', value: DataService.lastName }
      ]
    };
  },
  methods: {
    nextPage: function () {
      //this.$router.push('/msp/enrolment/review');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
