<template>
  <button :disabled="disabled" :class="buttonClasses" @click="onButtonClick">
    <div class="flex items-center">
      <!-- Added a container with flex layout -->
      <slot name="startIcon">
        <span
          v-if="startIcon"
          class="material-icons mr-1 text-base font-bold"
          >{{ startIcon }}</span
        >
      </slot>
      <span v-if="startIcon || endIcon" class="hidden sm:inline">
        <slot />
      </span>
      <slot v-else />
      <!-- Using the default slot for the button text -->
      <slot name="endIcon">
        <span v-if="endIcon" class="material-icons ml-1 text-base font-bold">{{
          endIcon
        }}</span>
      </slot>
    </div>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import {
  backgroundColorClassesMapping,
  borderColorClassesMapping,
  textColorClassesMapping,
} from "../../utils/colors";
import { textSizeClassesMapping } from "../../utils/text";

export default Vue.extend({
  name: "FAButton",
  props: {
    color: {
      type: String,
      default: "primary-brand",
    },
    variant: {
      type: String,
      default: "contained",
    },
    size: {
      type: String,
      default: "medium",
    },
    width: {
      type: String,
      default: "auto",
    },
    textSize: {
      type: String,
      default: "medium",
    },
    textColor: {
      type: String,
      default: "", // Default to an empty string (no custom color)
    },
    startIcon: {
      type: String,
      default: "",
    },
    endIcon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses(): string[] {
      return [
        this.getColorClass(),
        this.getVariantClass(),
        this.getTextSizeClass(),
        this.getWidthClass(),
      ];
    },
  },
  methods: {
    onButtonClick(): void {
      this.$emit("click");
    },
    getColorClass(): string {
      return backgroundColorClassesMapping[this.color] || "";
    },
    getVariantClass(): string {
      if (this.variant === "contained") {
        return `text-white ${this.getColorClass()} btn rounded-md disabled:cursor-not-allowed`;
      } else if (this.variant === "outlined") {
        return `${this.getTextColorClass()} border ${this.getBorderColorClass()} bg-transparent btn rounded-md disabled:cursor-not-allowed`;
      } else if (this.variant === "text") {
        return `bg-transparent border-none ${this.getTextColorClass()} btn disabled:cursor-not-allowed`;
      }
      return "";
    },

    getTextSizeClass(): string {
      return textSizeClassesMapping[this.size] || "";
    },

    getWidthClass(): string {
      return this.width === "auto" ? "" : `w-${this.width}`;
    },

    getBorderColorClass(): string {
      return borderColorClassesMapping[this.color] || "";
    },

    getTextColorClass(): string {
      return textColorClassesMapping[this.color] || "";
    },
  },
});
</script>
