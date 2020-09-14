<template>
  <div class="form-group bcgov-table-body">
    <div v-for="element in elements" :key="element.name" class="bcgov-row">
      <div class="bcgov-fill-width">{{element.name}}</div>
      <div class="bcgov-table-value">{{element.value}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Table',
  components: {},
  props: {
    elements: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bcgov-table-body {
  display: flex;
  flex-direction: column;
}

.bcgov-row {
  display: flex;
  flex-direction: row;
  vertical-align: top;
  padding-bottom: 3px;
  padding-top: 3px;
  padding-right: 3px;
  white-space: pre-wrap;
}

.bcgov-table-value {
  width: 100%;
}



.display-file .bcgov-fill-width {
  width: 35%;
}

@media (max-width: 576px) {
  .display-file .bcgov-fill-width {
    width: 100%;
  }
}

.bcgov-empty-row div {
  border-bottom: 1px solid black;
}

.bcgov-right-align {
  text-align: right;
}

@media (max-width: 576px) {
  .bcgov-row {
    flex-direction: column;
  }

  .bcgov-side-by-side,
  .bcgov-vertical-middle,
  .bcgov-reduce-width {
    width: 100% !important;
  }
}

</style>
