<template>
  <div :class="getTypographyClass(variant)">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { textColorClassesMapping } from "../../utils/colors";
import { typographyTextClassesMapping } from "../../utils/typography";

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
      return textColorClassesMapping[this.color] || "text-black";
    },
  },
  methods: {
    getTypographyClass(variant: string): string {
      const textClasses = typographyTextClassesMapping[variant] || "";
      const colorClasses = this.getColorClass;

      return `${textClasses} ${colorClasses}`;
    },
  },
});
</script>
