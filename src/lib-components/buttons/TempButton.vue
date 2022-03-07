<template>
  <button
    :disabled="disabled"
    class="btn bg-green-500"
    @click="onButtonClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TempButton',
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
