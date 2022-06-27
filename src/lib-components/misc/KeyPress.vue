<template></template>
<script lang="ts">
import Vue from 'vue'

const supportedModifiers = ['altKey', 'metaKey', 'ctrlKey', 'shiftKey']

export default Vue.extend({
  name: 'KeyPress',
  props: {
    keyEvent: {
      type: String,
      default: 'keyup',
    },

    // Only for single key code:
    keyCode: {
      type: Number,
      default: null,
    },
    modifiers: {
      type: Array, // ['shiftKey', 'ctrlKey', 'altKey', 'metaKey']
      default: () => [],
    },
    preventDefault: {
      type: Boolean,
    },

    // Only for multiple key codes:
    multipleKeys: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    keyListeners: [] as any[],
  }),
  mounted() {
    this.setupListeners()
  },
  destroyed() {
    for (const { keyEvent, listener } of this.keyListeners) {
      window.removeEventListener(keyEvent, listener)
    }
  },
  methods: {
    /** Initial Setup of the listeners */
    /** ****************************** */
    setupListeners(): void {
      const expectedEvent = {
        keyEvent: this.keyEvent,

        // If single:
        keyCode: this.keyCode,
        preventDefault: this.preventDefault,
        modifiers: this.modifiers,
        // If multiple:
        multipleKeys: this.multipleKeys,
      }
      this.addEventListener(expectedEvent)
    },
    addEventListener(expectedEvent: any): void {
      const listener = this.eventHandler(expectedEvent)
      window.addEventListener(expectedEvent.keyEvent, listener)
      this.keyListeners.push({ expectedEvent, listener })
    },

    /** Handling per keypress event */
    /** *************************** */
    eventHandler(expectedEvent: any): any {
      return (event: any) => {
        const emitResponse = (emitEvent: any, message: any) => {
          this.$emit(emitEvent, {
            event,
            expectedEvent,
            message,
          })
        }
        // Emit the emitEvent '@any' in any case:
        emitResponse('any', 'Any key was pressed.')

        const inMultipleKeysMode = expectedEvent.multipleKeys.length > 0

        // In "any key" mode, emit '@success' and return
        const inAnyKeyMode = !expectedEvent.keyCode && !inMultipleKeysMode
        if (inAnyKeyMode) {
          emitResponse('success', 'Any key was pressed.')
          return
        }

        // Set expected inputs array respective to props bein "single" or "multiple"
        let expectedInputs = [expectedEvent]
        if (inMultipleKeysMode) {
          expectedInputs = expectedEvent.multipleKeys
        }

        for (const expectedInput of expectedInputs) {
          // Check if the correct keys have been clicked:
          const correctKeyPressed = expectedInput.keyCode === event.keyCode
          if (!correctKeyPressed) continue

          // Get modifiers:
          const hasModifiers = expectedInput.modifiers.length > 0

          // Check if only the specified modifiers were pressed
          if (hasModifiers) {
            const modifiersPressed = supportedModifiers.every(
                (x) => event[x] == expectedInput.modifiers.includes(x)
            )
            if (!modifiersPressed) continue
          }

          // SUCCESS -> if it got to here, this was the correct key.

          // Set Prevent-Default
          if (expectedEvent.preventDefault) {
            event.preventDefault()
          }
          emitResponse('success', 'Correct key(s) pressed.')
          return
        }

        // FAILURE: If it got to here, the correct key wasn't pressed:
        emitResponse('wrong', 'Wrong key(s) pressed.')
      }
    },
  },
})
</script>
