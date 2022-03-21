<script lang="ts">
import Vue from "vue";
import PrimaryButton from "@/lib-components/buttons/PrimaryButton.vue";
import SuccessButton from "@/lib-components/buttons/SuccessButton.vue";
import MutedButton from "@/lib-components/buttons/MutedButton.vue";
import WarningButton from "@/lib-components/buttons/WarningButton.vue";
import DangerButton from "@/lib-components/buttons/DangerButton.vue";
import TableNumberInput from "@/lib-components/table/TableNumberInput.vue";
import KpiCard from "@/lib-components/cards/KpiCard.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    TableNumberInput,
    DangerButton,
    WarningButton,
    MutedButton,
    SuccessButton,
    PrimaryButton,
    KpiCard,
  },
  data() {
    return {
      myNumber: null as unknown as any,
      myNumber2: 10,
      myNumber3: 10,
    };
  },
});
</script>

<template>
  <div id="app" class="px-4 py-2 bg-white h-screen w-screen">
    <div class="py-2 text-2xl">Welcome to Official FA UI Kit</div>
    <div class="font-bold py-2">Buttons</div>
    <div class="flex gap-x-2">
      <PrimaryButton>Sample1</PrimaryButton>
      <SuccessButton>Sample2</SuccessButton>
      <MutedButton>Sample3</MutedButton>
      <WarningButton>Sample4</WarningButton>
      <DangerButton>Sample5</DangerButton>
    </div>
    <div class="font-bold py-2 mt-8">Cards</div>
    <div class="flex gap-4 flex-wrap">
      <KpiCard :data="21515121" title="Sample1" />
      <KpiCard :data="2121" title="Sample2" />
      <KpiCard :data="21121" title="Sample3" />
      <KpiCard :data="515121" title="Sample4" />
    </div>

    <div class="font-bold py-2 mt-8">Table Inputs</div>
    <TableNumberInput v-model="myNumber" />
    <div class="py-2">Value: {{ myNumber }}</div>
    <div class="py-2 font-bold">Disabled State</div>
    <TableNumberInput v-model="myNumber2" :disabled="true" />
    <div class="py-2 font-bold">Percentage Type</div>
    <TableNumberInput v-model="myNumber3" :is-percentage="true" />
    <div class="py-2">Value: {{ myNumber3 }}</div>
  </div>
</template>
