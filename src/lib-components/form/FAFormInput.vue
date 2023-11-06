<template>
  <div>
    <div v-if="label" class="m-0 mb-1 text-start text-sm font-semibold">
      <Typography v-if="label" variant="label" color="subtle-text"
        >{{ label }}
        <span style="color: red">{{ required ? "*" : "" }}</span></Typography
      >
    </div>
    <input
      v-if="!multiline"
      :id="label"
      v-model="enteredText"
      :disabled="disabled || greyedOut"
      :max="maxValue"
      :min="minValue"
      :required="required"
      :style="inputStyle"
      :type="input"
      class="w-full rounded border py-2 px-3 font-['Poppins'] text-base font-normal leading-normal tracking-wide text-gray-500"
      step="any"
      :placeholder="placeholder"
    />
    <textarea
      v-if="multiline"
      v-model="enteredText"
      class="w-full rounded border py-2 px-3 text-sm"
      :maxlength="characterLimit"
    ></textarea>
    <div v-if="multiline && showCharacter" class="mt-1 text-sm">
      <span>{{ enteredText.length }} / {{ characterLimit }} characters</span>
      <span v-if="exceedsCharLimit" class="text-red-500">
        (Exceeds character limit)
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAFormInput",
  props: {
    label: { type: String, default: null, required: false },
    required: { type: Boolean, default: false, required: false },
    disabled: { type: Boolean, default: false, required: false },
    greyedOut: { type: Boolean, default: false, required: false },
    value: { default: null, required: true, type: null },
    // eslint-disable-next-line vue/require-prop-type-constructor
    input: { type: "text" | "number", default: "text", required: false },
    inputStyle: { type: String, default: "", required: false },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    multiline: { type: Boolean, default: false },
    placeholder: { type: String, default: "", required: false },
    characterLimit: { type: Number, default: Infinity, required: false },
    showCharacter: { type: Boolean, default: false },
  },
  computed: {
    enteredText: {
      get() {
        return this.value;
      },
      set(val) {
        if (val.length <= this.characterLimit) {
          this.$emit("input", val);
        }
      },
    },
    exceedsCharLimit() {
      return this.enteredText.length > this.characterLimit;
    },
  },
};
</script>
