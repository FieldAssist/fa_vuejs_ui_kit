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
import {
  backgroundColorClassesMapping,
  borderColorClassesMapping,
  hoverColorClassesMapping,
  textColorClassesMapping,
} from "@/utils/colors";

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
  methods: {
    getColorClass(): string {
      return backgroundColorClassesMapping[this.color] || "";
    },
    getHoverColorClass(): string {
      return hoverColorClassesMapping[this.color] || "";
    },
    getVariantClass(): string {
      if (this.variant === "contained") {
        return `text-white ${this.getColorClass()} btn  disabled:cursor-not-allowed`;
      } else if (this.variant === "outlined") {
        return `${this.getTextColorClass()} border ${this.getBorderColorClass()} text-gray-400	 bg-transparent btn  disabled:cursor-not-allowed`;
      }
      return "";
    },
    getBorderColorClass(): string {
      return borderColorClassesMapping[this.color] || "";
    },
    getTextColorClass(): string {
      return textColorClassesMapping[this.color] || "";
    },
    deleteChip() {
      this.$emit("delete");
    },
  },
});
</script>
