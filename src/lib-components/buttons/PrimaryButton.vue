<template>
  <button
    :class="{ 'hover:bg-blue-600': !disabled }"
    :disabled="disabled"
    class="btn btn-blue"
    @click="onButtonClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

/**
 * <PrimaryButton>Primary Button</PrimaryButton>
 */

export default Vue.extend({
  name: 'PrimaryButton',
  props: {
    disabled: { type: Boolean, default: false, required: false },
  },
  methods: {
    onButtonClick():void {
      this.$emit('click')
    },
  },
})
</script>

<style>
.btn-blue {
  @apply text-white bg-blue-500;
}
</style>
