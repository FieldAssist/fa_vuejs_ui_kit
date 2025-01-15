<template></template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const supportedModifiers = ["altKey", "metaKey", "ctrlKey", "shiftKey"];

const props = defineProps({
  keyEvent: {
    type: String,
    default: "keyup",
  },
  keyCode: {
    type: Number,
    default: null,
  },
  modifiers: {
    type: Array as () => string[],
    default: () => [],
  },
  preventDefault: {
    type: Boolean,
  },
  multipleKeys: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["any", "success", "wrong"]);
const keyListeners = ref<{ expectedEvent: any; listener: any }[]>([]);

const eventHandler = (expectedEvent: any) => {
  return (event: any) => {
    const emitResponse = (emitEvent: string, message: string) => {
      emit(emitEvent, {
        event,
        expectedEvent,
        message,
      });
    };

    emitResponse("any", "Any key was pressed.");

    const inMultipleKeysMode = expectedEvent.multipleKeys.length > 0;
    const inAnyKeyMode = !expectedEvent.keyCode && !inMultipleKeysMode;

    if (inAnyKeyMode) {
      emitResponse("success", "Any key was pressed.");
      return;
    }

    let expectedInputs = inMultipleKeysMode
      ? expectedEvent.multipleKeys
      : [expectedEvent];

    for (const expectedInput of expectedInputs) {
      if (expectedInput.keyCode !== event.keyCode) continue;

      if (expectedInput.modifiers.length > 0) {
        const modifiersPressed = supportedModifiers.every(
          (x) => event[x] == expectedInput.modifiers.includes(x)
        );
        if (!modifiersPressed) continue;
      }

      if (expectedEvent.preventDefault) {
        event.preventDefault();
      }
      emitResponse("success", "Correct key(s) pressed.");
      return;
    }

    emitResponse("wrong", "Wrong key(s) pressed.");
  };
};

const setupListeners = () => {
  const expectedEvent = {
    keyEvent: props.keyEvent,
    keyCode: props.keyCode,
    preventDefault: props.preventDefault,
    modifiers: props.modifiers,
    multipleKeys: props.multipleKeys,
  };
  const listener = eventHandler(expectedEvent);
  window.addEventListener(expectedEvent.keyEvent, listener);
  keyListeners.value.push({ expectedEvent, listener });
};

onMounted(() => {
  setupListeners();
});

onUnmounted(() => {
  for (const { keyEvent, listener } of keyListeners.value) {
    window.removeEventListener(keyEvent, listener);
  }
});
</script>
