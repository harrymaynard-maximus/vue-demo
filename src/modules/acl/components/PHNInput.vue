<template>
  <div>
    <label for='phn'>Personal Health Number (PHN):</label><br/>
    <input id='phn'
           class='form-control'
           v-bind:value="value"
           v-on:input="$emit('input', $event.target.value)" />
    <div>{{value}}</div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  components: {},
  props: {
    value: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
