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
export default Vue.extend({
  name: "Button",
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
        this.getTextSizeClass(),
        this.getColorClass(),
        this.getVariantClass(),
        this.getSizeClass(),
        this.getWidthClass(),
      ];
    },
  },
  methods: {
    onButtonClick(): void {
      this.$emit("click");
    },
    getColorClass(): string {
      // Add background color classes here based on your color scheme
      const bgColorClasses: Record<string, string> = {
        "primary-brand": "bg-sky-800",
        "secondary-brand": "bg-blue-50",
        text: "bg-neutral-800",
        "subtle-text": "bg-gray-500",
        accents: "bg-neutral-100",
        success: "bg-emerald-400",
        white: "bg-white",
        muted: "bg-gray-500",
        primary: "bg-blue-500",
        "success-old": "bg-green-500",
        info: "bg-indigo-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        // Add more background color mappings as needed
      };
      return bgColorClasses[this.color] || "";
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
    getSizeClass(): string {
      const sizeClasses: Record<string, string> = {
        extraSmall: `${
          this.textSize ? this.getTextSizeClass() : "text-xs"
        } px-3 py-2`,
        small: `${
          this.textSize ? this.getTextSizeClass() : "text-sm"
        } px-3 py-2`,
        medium: `${
          this.textSize ? this.getTextSizeClass() : "text-base"
        } px-4 py-2`,
        large: `${
          this.textSize ? this.getTextSizeClass() : "text-lg"
        } px-5 py-6`,
      };
      return sizeClasses[this.size] || "";
    },
    getWidthClass(): string {
      return this.width === "auto" ? "" : `w-${this.width}`;
    },
    getTextSizeClass(): string {
      const textSizeClasses: Record<string, string> = {
        extraSmall: "text-xs",
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      };
      return textSizeClasses[this.textSize] || "";
    },
    getBorderColorClass(): string {
      const borderColorClasses: Record<string, string> = {
        "primary-brand": "border-sky-800",
        "secondary-brand": "border-blue-50",
        text: "neutral-800",
        "subtle-text": "border-gray-500",
        accents: "border-neutral-100",
        success: "border-emerald-400",
        white: "border-white",
        muted: "border-gray-500",
        primary: "border-blue-500",
        "success-old": "border-green-500",
        info: "border-indigo-500",
        warning: "border-yellow-500",
        danger: "border-red-500",
        // Add more color mappings as needed
      };
      return borderColorClasses[this.color] || "";
    },
    getTextColorClass(): string {
      const textColorClasses: Record<string, string> = {
        "primary-brand": "text-sky-800",
        "secondary-brand": "text-blue-50",
        text: "text-neutral-800",
        "subtle-text": "text-gray-500",
        accents: "text-neutral-100",
        success: "text-emerald-400",
        white: "text-white",
        muted: "text-gray-500",
        primary: "text-blue-500",
        "success-old": "text-green-500",
        info: "text-indigo-500",
        warning: "text-yellow-500",
        danger: "text-red-500",
        // Add more color mappings as needed
      };
      return textColorClasses[this.color] || "";
    },
  },
});
</script>
