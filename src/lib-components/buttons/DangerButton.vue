<template>
  <button
    :class="{ 'hover:bg-red-600': !disabled }"
    :disabled="disabled"
    class="btn btn-red"
    @click="onButtonClick"
  >
    <slot></slot>
  </button>
</template>

<script>
/**
 * <DangerButton>Danger Button</DangerButton>
 */
export default {
  name: 'DangerButton',
  props: {
    disabled: { type: Boolean, default: false, required: false },
  },
  methods: {
    onButtonClick() {
      this.$emit('click')
    },
  },
}
</script>

<style>
.btn-red {
  @apply text-white bg-red-500;
}
</style>
