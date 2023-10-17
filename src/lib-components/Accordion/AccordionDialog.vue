<template>
  <div>
    <div class="w-[264.76px]">
      <button
        :class="inner ? 'bg-neutral-100' : ''"
        class="flex justify-between"
        @click="toggleAccordion"
      >
        <Typography variant="title">
          {{ title }}
        </Typography>

        <i
          :class="{ 'rotate-180 transform': isOpen, 'bg-sky-800': !inner }"
          class="material-icons r-4 ml-[111px] h-[23.36px] w-6 rounded-sm bg-sky-800"
        >
          keyboard_arrow_down
        </i>
      </button>
      <div v-show="isOpen">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Typography from "../Typography/Typography.vue";
export default {
  components: {
    Typography,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    inner: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.material-icons {
  transition: transform 0.3s ease-in-out;
}
</style>
