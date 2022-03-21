<template>
  <div
    class="relative transform overflow-hidden rounded bg-cover bg-center shadow-md hover:scale-105"
    style="
      background-image: url('https://4kwallpapers.com/images/walls/thumbs_3t/4030.jpg');
    "
  >
    <div
      :class="bgColor"
      class="border-0 bg-opacity-10 p-2 pl-4 text-center shadow"
      style="opacity: 0.85"
    >
      <div class="text-left text-base text-black antialiased">
        {{ title }}
      </div>

      <div
        class="rounded-bottom mt-1 text-left text-2xl font-medium text-black"
      >
        <span v-if="money" class="text-black">₹</span>
        {{ formatValue(data) || 0 }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "KpiCard",
  props: {
    title: { type: String, default: "--", required: true },
    data: { default: 0, required: true },
    bgColor: {
      type: String,
      default: "bg-gradient-to-r from-gray-200 to-gray-400",
      required: false,
    },
    money: { type: Boolean, default: false },
  },
  computed: {
    titleStyle() {
      return {
        "font-size": "1.0rem",
        "font-weight": "500",
      };
    },
  },
  methods: {
    formatValue(data: any) {
      return this.changeNumberFormat(data);
    },
    changeNumberFormat(number: number): any {
      if (isNaN(number)) return 0;
      let displayStr;
      if (number >= 100000 && number < 10000000) {
        displayStr = (number / 100000).toPrecision(3) + " L";
        return displayStr;
      } else if (number >= 10000000) {
        displayStr = (number / 10000000).toPrecision(3) + " Cr";
        return displayStr;
      }
      return number || 0;
    },
  },
});
</script>
