<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { TestLibTsOneSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  TestLibTsOneSample,
  // }
});
</script>

<template>
  <div id="app">
    <test-lib-ts-one-sample />
  </div>
</template>
