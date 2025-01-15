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

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  disabled: { type: Boolean, default: false, required: false },
  icon: { type: String, required: false, default: "" },
});

const emit = defineEmits(["click"]);

const onButtonClick = () => {
  emit("click");
};
</script>
