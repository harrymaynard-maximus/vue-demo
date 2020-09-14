<template>
  <div class="">
    <div class="modal fade show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{heading}}</h5>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="accept">Accept</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  components: {},
  props: {
    content: String,
    heading: String,
    isOpen: {
      default: true
    }
  },
  
  methods: {
    getStyles: function() {
      // display: block;
      // background: rgba(0,0,0,0.4);
      return {
        backgroundColor: 'rgba(0,0,0,0.4)'
      };
    },
    accept: function() {
      this.$emit('accept', true);
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
