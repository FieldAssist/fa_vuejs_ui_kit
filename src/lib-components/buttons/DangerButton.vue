<template>
  <div>
    <button :disabled="disabled" class="btn btn-red" @click="onButtonClick">
      <span v-if="icon" class="material-icons text-base font-bold">{{
        icon
      }}</span>
      <span v-if="icon" class="hidden sm:inline">
        <slot />
      </span>
      <slot v-else />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DangerButton",
  props: {
    disabled: { type: Boolean, default: false, required: false },
    icon: { type: String, required: false, default: "" },
  },
  methods: {
    onButtonClick() {
      this.$emit("click");
    },
  },
})
</script>
