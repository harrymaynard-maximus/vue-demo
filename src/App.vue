<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import pageStateService from './services/page-state-service';

export default {
  name: 'App',
  components: {
  },
  created: function() {
    pageStateService.importRoutes();
  }
}
</script>

<style>

</style>
