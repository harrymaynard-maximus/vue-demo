<template>
  <div class="form-group">
    <label v-bind:for="'input' + label">{{label}}:</label><br/>
    <input v-bind:id="'input' + label"
           class='form-control'
           v-bind:value="value"
           v-on:input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>

export default {
  name: 'Input',
  components: {},
  props: {
    value: String,
    label: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
