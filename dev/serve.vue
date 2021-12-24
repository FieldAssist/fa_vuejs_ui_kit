<script lang="ts">
import Vue from 'vue';
import PrimaryButton from "@/lib-components/buttons/PrimaryButton.vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { Fa_vuejs_ui_kitSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {PrimaryButton},
  // components: {
  //  Fa_vuejs_ui_kitSample,
  // }
});
</script>

<template>
  <div id="app">
    <fa_vuejs_ui_kit-sample />
    <PrimaryButton>Sample</PrimaryButton>
  </div>
</template>
