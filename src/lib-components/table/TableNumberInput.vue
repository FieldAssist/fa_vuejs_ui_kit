<!--
  - Copyright 2022 FieldAssist
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -     http://www.apache.org/licenses/LICENSE-2.0
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<template>
  <input
    :value="modelValue"
    :disabled="disabled"
    :max="isPercentage ? 100 : null"
    :min="0"
    class="w-[4.5rem] rounded border border-gray-300 py-1 px-1 text-center"
    type="number"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    @change="$emit('on-change')"
  />
</template>

<script setup lang="ts">
defineProps({
  modelValue: { default: 0 },
  disabled: { default: false, type: Boolean },
  isPercentage: { default: false, type: Boolean },
});

defineEmits(["update:modelValue", "on-change"]);
</script>
