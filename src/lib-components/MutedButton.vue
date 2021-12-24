<template>
  <button
    :class="{ 'hover:bg-gray-600': !disabled }"
    :disabled="disabled"
    class="btn btn-gray"
    @click="onButtonClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MutedButton',
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
.btn-gray {
  @apply text-white bg-gray-500;
}
</style>
