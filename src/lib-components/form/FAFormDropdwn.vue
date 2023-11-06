<template>
  <div class="">
    <div v-if="label" class="m-0 mb-1 ml-2 text-start text-sm font-semibold">
      <Typography color="label-text" variant="supporting-text"
        >{{ label
        }}<span style="color: red">{{ required ? "*" : "" }}</span></Typography
      >
      <slot></slot>
    </div>
    <v-select
      v-model="selectedValue"
      :calculate-position="withPopper"
      :clearable="false"
      :disabled="disabled"
      :options="options"
      :reduce="(value) => value.value"
      :searchable="true"
      append-to-body
      class="!text-grey-500 absolute top-0 right-0 bottom-0 left-0 w-full cursor-pointer rounded bg-transparent bg-red-500 text-red-500 outline-none"
      label="title"
      :placeholder="placeholder"
    >
      <template #selected-option="{ title }">
        <div class="flex gap-2">
          <strong v-if="prefix">{{ prefix }}</strong>
          <div
            class="!font-poppins' !text-base !font-normal !leading-normal !tracking-wide !text-zinc-700"
          >
            {{ title }}
          </div>
        </div>
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createPopper, Instance } from "@popperjs/core";
import Typography from "../Typography/Typography.vue";
interface Option {
  value: string | number;
  title: string;
}
export default Vue.extend({
  name: "FAFormDropDown",
  components: { Typography },
  props: {
    prefix: {
      type: String as () => string | null,
      required: false,
      default: null,
    },
    label: {
      type: String as () => string | null,
      required: false,
      default: null,
    },
    required: { type: Boolean, default: false, required: false },
    options: {
      type: Array as () => Option[],
      default: () => [],
      required: false,
    },
    disabled: { type: Boolean, default: false, required: false },
    value: { type: String, required: true },
    placeholder: { type: String, required: false, default: "" },
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  computed: {
    getTitle(): string {
      const selectedOption = this.options.find(
        (opt) => opt.value == this.selectedValue
      );
      return (
        selectedOption?.title || (this.options.length === 0 ? "No items" : "--")
      );
    },
  },
  mounted() {
    this.selectedValue = this.value;
  },
  methods: {
    onItemClick(value: string | number): void {
      this.$emit("input", value);
    },
    onDropdownClick(): void {
      // Implement dropdown click logic
    },
    withPopper(
      dropdownList: HTMLElement,
      component: any,
      { width }: { width: string }
    ): Instance {
      dropdownList.style.width = width;
      const popper = createPopper(component.$refs.toggle, dropdownList, {
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -1],
            },
          },
          {
            name: "toggleClass",
            enabled: true,
            phase: "write",
            fn({ state }): void {
              // You may need to replace the following line with appropriate logic
              if (component && component.$el) {
                component.$el.classList.toggle(
                  "drop-up",
                  state.placement == "top"
                );
              }
            },
          },
        ],
      });
      return popper;
    },
  },
});
</script>
