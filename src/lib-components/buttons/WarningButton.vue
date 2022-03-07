<template>
  <button
    :class="{ 'hover:bg-yellow-600': !disabled }"
    :disabled="disabled"
    class="btn btn-yellow"
    @click="onButtonClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'WarningButton',
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
.btn-yellow {
  @apply bg-yellow-500;
}
</style>
