<template>
  <div>
    <div class="signature-pad-container border rounded">
      <VueSignaturePad width="500px"
                      height="200px"
                      ref="signaturePad"
                      :options="{ onBegin, onEnd }" />
    </div>
    <br/>
    <Button label="Clear"
            styling="bcgov-normal-white btn"
            v-on:button-click='clear' />
  </div>
</template>

<script>
import Vue from 'vue';
import VueSignaturePad from 'vue-signature-pad';
import Button from 'vue-shared-components/src/components/button/Button';

Vue.use(VueSignaturePad);

export default {
  name: 'SignaturePad',
  components: {
    Button,
  },
  data: () => {
    return {
      containsSignature: false
    };
  },
  
  methods: {
    clear() {
      this.$refs.signaturePad.clearSignature();
      this.containsSignature = false;
    },
    onBegin() {
      console.log("Begin---");
    },
    onEnd() {
      this.containsSignature = true;
      console.log("End---")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signature-pad-container {
  display: inline-block;
}
</style>
