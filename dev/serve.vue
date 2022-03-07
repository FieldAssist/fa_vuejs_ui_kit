<script lang="ts">
import Vue from 'vue';
import PrimaryButton from "@/lib-components/buttons/PrimaryButton.vue";
import SuccessButton from "@/lib-components/buttons/SuccessButton.vue";
import MutedButton from "@/lib-components/buttons/MutedButton.vue";
import WarningButton from "@/lib-components/buttons/WarningButton.vue";
import DangerButton from "@/lib-components/buttons/DangerButton.vue";

export default Vue.extend({
  name: 'ServeDev',
  components: {DangerButton, WarningButton, MutedButton, SuccessButton, PrimaryButton},
});
</script>

<template>
  <div class="px-4 py-2 bg-white h-screen w-screen" id="app">
    <div class=" py-2 text-2xl">Welcome to Official FA UI Kit</div>
    <div class="font-bold py-2">Buttons</div>
    <div class="flex gap-x-2">
      <PrimaryButton>Sample</PrimaryButton>
      <SuccessButton>Sample</SuccessButton>
      <MutedButton>Sample</MutedButton>
      <WarningButton>Sample</WarningButton>
      <DangerButton>Sample</DangerButton>
    </div>

  </div>
</template>
