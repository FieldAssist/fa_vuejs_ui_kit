import Vue from 'vue';

var script$7 = Vue.extend({
  name: "PrimaryButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    onButtonClick() {
      this.$emit("click");
    }

  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('button', {
    staticClass: "btn btn-blue",
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.onButtonClick
    }
  }, [_vm.icon ? _c('span', {
    staticClass: "material-icons text-base font-bold"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), _vm.icon ? _c('span', {
    staticClass: "hidden sm:inline"
  }, [_vm._t("default")], 2) : _vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

const __vue_inject_styles__$7 = undefined;
/* scoped */

const __vue_scope_id__$7 = undefined;
/* module identifier */

const __vue_module_identifier__$7 = undefined;
/* functional template */

const __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

var __vue_component__$f = __vue_component__$e;

var script$6 = Vue.extend({
  name: "DangerButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    onButtonClick() {
      this.$emit("click");
    }

  }
});

/* script */
const __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('button', {
    staticClass: "btn btn-red",
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.onButtonClick
    }
  }, [_vm.icon ? _c('span', {
    staticClass: "material-icons text-base font-bold"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), _vm.icon ? _c('span', {
    staticClass: "hidden sm:inline"
  }, [_vm._t("default")], 2) : _vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = undefined;
/* scoped */

const __vue_scope_id__$6 = undefined;
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var __vue_component__$d = __vue_component__$c;

var script$5 = Vue.extend({
  name: "MutedButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    onButtonClick() {
      this.$emit("click");
    }

  }
});

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('button', {
    staticClass: "btn btn-muted",
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.onButtonClick
    }
  }, [_vm.icon ? _c('span', {
    staticClass: "material-icons text-base font-bold"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), _vm.icon ? _c('span', {
    staticClass: "hidden sm:inline"
  }, [_vm._t("default")], 2) : _vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = undefined;
/* scoped */

const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var __vue_component__$b = __vue_component__$a;

var script$4 = Vue.extend({
  name: "SuccessButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    onButtonClick() {
      this.$emit("click");
    }

  }
});

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('button', {
    staticClass: "btn btn-green",
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.onButtonClick
    }
  }, [_vm.icon ? _c('span', {
    staticClass: "material-icons text-base font-bold"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), _vm.icon ? _c('span', {
    staticClass: "hidden sm:inline"
  }, [_vm._t("default")], 2) : _vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var __vue_component__$9 = __vue_component__$8;

var script$3 = Vue.extend({
  name: "WarningButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    onButtonClick() {
      this.$emit("click");
    }

  }
});

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.onButtonClick
    }
  }, [_vm.icon ? _c('span', {
    staticClass: "material-icons text-base font-bold"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), _vm.icon ? _c('span', {
    staticClass: "hidden sm:inline"
  }, [_vm._t("default")], 2) : _vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var __vue_component__$7 = __vue_component__$6;

var script$2 = Vue.extend({
  name: 'TableNumberInput',
  props: {
    value: {
      default: 0,
      required: false
    },
    disabled: {
      default: false,
      required: false,
      type: Boolean
    },
    isPercentage: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  computed: {
    enteredText: {
      get() {
        return this.value;
      },

      set(val) {
        this.$emit('input', val);
      }

    }
  }
});

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.enteredText,
      expression: "enteredText"
    }],
    staticClass: "w-[4.5rem] rounded border border-gray-300 py-1 px-1 text-center",
    attrs: {
      "disabled": _vm.disabled,
      "max": _vm.isPercentage ? 100 : null,
      "min": 0,
      "type": "number"
    },
    domProps: {
      "value": _vm.enteredText
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.enteredText = $event.target.value;
      }, function ($event) {
        return _vm.$emit('on-change');
      }]
    }
  });
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var __vue_component__$5 = __vue_component__$4;

var script$1 = Vue.extend({
  name: "KpiCard",
  props: {
    title: {
      type: String,
      default: "--",
      required: true
    },
    data: {
      default: 0,
      required: true
    },
    bgColor: {
      type: String,
      default: "bg-gradient-to-r from-gray-200 to-gray-400",
      required: false
    },
    money: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    titleStyle() {
      return {
        "font-size": "1.0rem",
        "font-weight": "500"
      };
    }

  },
  methods: {
    formatValue(data) {
      return this.changeNumberFormat(data);
    },

    changeNumberFormat(number) {
      if (isNaN(number)) return 0;
      let displayStr;

      if (number >= 100000 && number < 10000000) {
        displayStr = (number / 100000).toPrecision(3) + " L";
        return displayStr;
      } else if (number >= 10000000) {
        displayStr = (number / 10000000).toPrecision(3) + " Cr";
        return displayStr;
      }

      return number || 0;
    }

  }
});

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "relative transform overflow-hidden rounded bg-cover bg-center shadow-md hover:scale-105",
    staticStyle: {
      "background-image": "url('https://4kwallpapers.com/images/walls/thumbs_3t/4030.jpg')"
    }
  }, [_c('div', {
    staticClass: "border-0 bg-opacity-10 p-2 pl-4 text-center shadow",
    class: _vm.bgColor,
    staticStyle: {
      "opacity": "0.85"
    }
  }, [_c('div', {
    staticClass: "text-left text-base text-black antialiased"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "rounded-bottom mt-1 text-left text-2xl font-medium text-black"
  }, [_vm.money ? _c('span', {
    staticClass: "text-black"
  }, [_vm._v("₹")]) : _vm._e(), _vm._v("\n      " + _vm._s(_vm.formatValue(_vm.data) || 0) + "\n    ")])])]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var __vue_component__$3 = __vue_component__$2;

const supportedModifiers = ['altKey', 'metaKey', 'ctrlKey', 'shiftKey'];
var script = Vue.extend({
  name: 'KeyPress',
  props: {
    keyEvent: {
      type: String,
      default: 'keyup'
    },
    // Only for single key code:
    keyCode: {
      type: Number,
      default: null
    },
    modifiers: {
      type: Array,
      default: () => []
    },
    preventDefault: {
      type: Boolean
    },
    // Only for multiple key codes:
    multipleKeys: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    keyListeners: []
  }),

  mounted() {
    this.setupListeners();
  },

  destroyed() {
    for (const {
      keyEvent,
      listener
    } of this.keyListeners) {
      window.removeEventListener(keyEvent, listener);
    }
  },

  methods: {
    /** Initial Setup of the listeners */

    /** ****************************** */
    setupListeners() {
      const expectedEvent = {
        keyEvent: this.keyEvent,
        // If single:
        keyCode: this.keyCode,
        preventDefault: this.preventDefault,
        modifiers: this.modifiers,
        // If multiple:
        multipleKeys: this.multipleKeys
      };
      this.addEventListener(expectedEvent);
    },

    addEventListener(expectedEvent) {
      const listener = this.eventHandler(expectedEvent);
      window.addEventListener(expectedEvent.keyEvent, listener);
      this.keyListeners.push({
        expectedEvent,
        listener
      });
    },

    /** Handling per keypress event */

    /** *************************** */
    eventHandler(expectedEvent) {
      return event => {
        const emitResponse = (emitEvent, message) => {
          this.$emit(emitEvent, {
            event,
            expectedEvent,
            message
          });
        }; // Emit the emitEvent '@any' in any case:


        emitResponse('any', 'Any key was pressed.');
        const inMultipleKeysMode = expectedEvent.multipleKeys.length > 0; // In "any key" mode, emit '@success' and return

        const inAnyKeyMode = !expectedEvent.keyCode && !inMultipleKeysMode;

        if (inAnyKeyMode) {
          emitResponse('success', 'Any key was pressed.');
          return;
        } // Set expected inputs array respective to props bein "single" or "multiple"


        let expectedInputs = [expectedEvent];

        if (inMultipleKeysMode) {
          expectedInputs = expectedEvent.multipleKeys;
        }

        for (const expectedInput of expectedInputs) {
          // Check if the correct keys have been clicked:
          const correctKeyPressed = expectedInput.keyCode === event.keyCode;
          if (!correctKeyPressed) continue; // Get modifiers:

          const hasModifiers = expectedInput.modifiers.length > 0; // Check if only the specified modifiers were pressed

          if (hasModifiers) {
            const modifiersPressed = supportedModifiers.every(x => event[x] == expectedInput.modifiers.includes(x));
            if (!modifiersPressed) continue;
          } // SUCCESS -> if it got to here, this was the correct key.
          // Set Prevent-Default


          if (expectedEvent.preventDefault) {
            event.preventDefault();
          }

          emitResponse('success', 'Correct key(s) pressed.');
          return;
        } // FAILURE: If it got to here, the correct key wasn't pressed:


        emitResponse('wrong', 'Wrong key(s) pressed.');
      };
    }

  }
});

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div");
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var __vue_component__$1 = __vue_component__;

// buttons

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  PrimaryButton: __vue_component__$f,
  DangerButton: __vue_component__$d,
  MutedButton: __vue_component__$b,
  SuccessButton: __vue_component__$9,
  WarningButton: __vue_component__$7,
  TableNumberInput: __vue_component__$5,
  KpiCard: __vue_component__$3,
  KeyPress: __vue_component__$1
});

// Import vue components

const install = function installFa_vuejs_ui_kit(Vue) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { __vue_component__$d as DangerButton, __vue_component__$1 as KeyPress, __vue_component__$3 as KpiCard, __vue_component__$b as MutedButton, __vue_component__$f as PrimaryButton, __vue_component__$9 as SuccessButton, __vue_component__$5 as TableNumberInput, __vue_component__$7 as WarningButton, install as default };
