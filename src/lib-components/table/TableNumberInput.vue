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
      v-model="enteredText"
      :disabled="disabled"
      :max="isPercentage ? 100 : null"
      :min="0"
      class="w-[4.5rem] rounded border border-gray-300 py-1 px-1 text-center"
      type="number"
      @input="$emit('on-change')"
  />
</template>

<script lang="ts">
import Vue, {PropType} from "vue";

export default Vue.extend({
  name: 'TableNumberInput',
  props: {
    value: {default: 0, required: false},
    disabled: {default: false, required: false, type: Boolean},
    isPercentage: {default: false, required: false, type: Boolean as PropType<boolean>},
  },
  computed: {
    enteredText: {
      get() {
        return (this as any).value
      },
      set(val) {
        (this as Vue).$emit('input', val)
      },
    },
  },
})
</script>
