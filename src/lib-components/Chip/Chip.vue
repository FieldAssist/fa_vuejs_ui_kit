<template>
  <div
    :class="buttonClasses"
    class="inline-flex h-11 w-[143px] items-center justify-center gap-2.5 rounded-[28px] bg-white px-6 py-2.5 shadow"
  >
    <slot class="font-normal"></slot>

    <font-awesome-icon
      v-if="deletable"
      class="h-6"
      :icon="['fas', 'window-close']"
      :class="getHoverColorClass"
      style="margin-left: 40px"
      @click="onDelete"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    deletable: {
      type: Boolean,
      required: false,
      default: true,
    },
    onDelete: {
      type: Function,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "",
    },
    variant: {
      type: String,
      default: "contained",
    },
    size: {
      type: String,
      default: "medium",
    },
  },
  computed: {
    buttonClasses(): string[] {
      return [this.getColorClass(), this.getVariantClass()];
    },
  },
  mounted() {
    console.log("this.deletable", this.deletable);
  },
  methods: {
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
    getHoverColorClass(): string {
      // Add background color classes here based on your color scheme
      const bgColorClasses: Record<string, string> = {
        "primary-brand": "hover:bg-sky-900",
        "secondary-brand": "hover:bg-blue-60",
        text: "hover:bg-neutral-900",
        "subtle-text": "hover:bg-gray-600",
        accents: "hover:bg-neutral-200",
        success: "hover:bg-emerald-500",
        white: "hover:bg-white",
        muted: "hover:bg-gray-600",
        primary: "hover:bg-blue-600",
        "success-old": "hover:bg-green-600",
        info: "hover:bg-indigo-600",
        warning: "hover:bg-yellow-600",
        danger: "hover:bg-red-600",
        // Add more background color mappings as needed
      };
      return bgColorClasses[this.color] || "";
    },
    getVariantClass(): string {
      if (this.variant === "contained") {
        return `text-white ${this.getColorClass()} btn  disabled:cursor-not-allowed`;
      } else if (this.variant === "outlined") {
        return `${this.getTextColorClass()} border ${this.getBorderColorClass()} text-gray-400	 bg-transparent btn  disabled:cursor-not-allowed`;
      }
      return "";
    },
    // getSizeClass(): string {
    //   const sizeClasses: Record<string, string> = {
    //     extraSmall: `${
    //       this.textSize ? this.getTextSizeClass() : 'text-xs'
    //     } px-3 py-2`,
    //     small: `${
    //       this.textSize ? this.getTextSizeClass() : 'text-sm'
    //     } px-3 py-2`,
    //     medium: `${
    //       this.textSize ? this.getTextSizeClass() : 'text-base'
    //     } px-4 py-2`,
    //     large: `${
    //       this.textSize ? this.getTextSizeClass() : 'text-lg'
    //     } px-5 py-6`,
    //   }
    //   return sizeClasses[this.size] || ''
    // },
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
    deleteChip() {
      this.$emit("delete");
    },
  },
});
</script>
