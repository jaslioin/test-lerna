<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { TestLibTsSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  TestLibTsSample,
  // }
});
</script>

<template>
  <div id="app">
    <test-lib-ts-sample />
  </div>
</template>
