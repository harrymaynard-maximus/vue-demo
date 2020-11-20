<template>
  <div :class="className">
    <label :for="id">{{label}}:</label><br/>
    <input :id="id"
           class='form-control'
           :value="value"
           @input="emitInput($event)"
           maxlength="7" />
  </div>
</template>

<script>

export default {
  name: 'PostalCodeInput',
  components: {},
  props: {
    id: String,
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

<style scoped>

</style>
