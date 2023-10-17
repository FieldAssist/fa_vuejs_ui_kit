<template>
  <div :class="getTypographyClass(variant)">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Typography",
  props: {
    variant: {
      type: String,
      default: "body", // Set the default variant to 'body'
    },
    color: {
      type: String,
      default: "text-black", // Set the default color to 'text-black'
    },
  },
  computed: {
    getColorClass(): string {
      const colorClasses: Record<string, string> = {
        "primary-brand": "text-sky-800",
        "secondary-brand": "text-blue-50",
        text: "text-neutral-800",
        "subtle-text": "text-gray-500",
        accents: "text-neutral-100",
        success: "text-emerald-400",
        white: "text-white",
        "label-text": "text-zinc-700",
        // Add more color mappings as needed
      };
      return colorClasses[this.color] || "text-black";
    },
  },
  methods: {
    getTypographyClass(variant: string): string {
      const typographyClasses: Record<string, string> = {
        title: `text-2xl font-medium font-poppins leading-snug ${this.getColorClass}`,
        header: `text-base font-semibold font-poppins leading-snug ${this.getColorClass}`,
        body: `text-base font-normal font-poppins ${this.getColorClass}`,
        label: `text-base font-normal font-poppins tracking-0.4 ${this.getColorClass}`,
        "supporting-text": `text-sm font-normal font-poppins ${this.getColorClass}`,
        "button-text": `text-xl font-semibold font-poppins ${this.getColorClass}`,
      };
      // Apply default styles if the variant is not found
      return typographyClasses[variant] || "";
    },
  },
});
</script>
