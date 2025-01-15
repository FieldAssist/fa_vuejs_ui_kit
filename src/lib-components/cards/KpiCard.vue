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

      <div class="rounded-bottom mt-1 text-left text-2xl font-medium text-black">
        <span v-if="money" class="text-black">₹</span>
        {{ formattedValue }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: "--", required: true },
  data: { default: 0, required: true },
  bgColor: {
    type: String,
    default: "bg-gradient-to-r from-gray-200 to-gray-400",
  },
  money: { type: Boolean, default: false },
});

const changeNumberFormat = (number: number): string | number => {
  if (isNaN(number)) return 0;
  if (number >= 100000 && number < 10000000) {
    return `${(number / 100000).toPrecision(3)} L`;
  } else if (number >= 10000000) {
    return `${(number / 10000000).toPrecision(3)} Cr`;
  }
  return number || 0;
};

const formattedValue = computed(() => changeNumberFormat(props.data));
</script>
