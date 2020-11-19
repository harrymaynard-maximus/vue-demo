<template>
  <div :class="className">
    <label v-bind:for="'input' + label">{{label}}:</label><br/>
    <input v-bind:id="'input' + label"
           class='form-control'
           v-bind:value="value"
           v-on:input="emitInput($event)" />
  </div>
</template>

<script>

export default {
  name: 'Input',
  components: {},
  props: {
    value: String,
    label: String,
    className: String,
  },
  methods: {
    emitInput(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
