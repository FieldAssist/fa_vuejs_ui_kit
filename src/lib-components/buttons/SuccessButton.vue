<template>
  <button :disabled="disabled" class="btn btn-green" @click="onButtonClick">
    <span v-if="icon" class="material-icons text-base font-bold">{{
      icon
    }}</span>
    <span class="hidden sm:inline">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'SuccessButton',
  props: {
    disabled: { type: Boolean, default: false, required: false },
    icon: { type: String, required: false, default: '' },
  },
  methods: {
    onButtonClick() {
      this.$emit('click')
    },
  },
}
</script>
