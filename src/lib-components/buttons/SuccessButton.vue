<template>
  <button
    :class="{ 'hover:bg-green-600': !disabled }"
    :disabled="disabled"
    class="btn btn-green"
    @click="onButtonClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
/**
 * <SuccessButton>Success Button</SuccessButton>
 */
export default Vue.extend({
  name: 'SuccessButton',
  props: {
    disabled: { type: Boolean, default: false, required: false },
  },
  methods: {
    onButtonClick() {
      this.$emit('click')
    },
  },
})
</script>

<style>
.btn-green {
  @apply text-white bg-green-500;
}
</style>
