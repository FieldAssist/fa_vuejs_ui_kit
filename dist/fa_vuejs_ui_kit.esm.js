//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
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
};

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
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function () {
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
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
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
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
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
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
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
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
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'TableNumberInput',
  props: {
    value: {
      default: 0,
      required: false,
      type: null
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
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
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
  PrimaryButton: __vue_component__$b,
  DangerButton: __vue_component__$9,
  MutedButton: __vue_component__$7,
  SuccessButton: __vue_component__$5,
  WarningButton: __vue_component__$3,
  TableNumberInput: __vue_component__$1
});

// Import vue components

const install = function installFa_vuejs_ui_kit(Vue) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { __vue_component__$9 as DangerButton, __vue_component__$7 as MutedButton, __vue_component__$b as PrimaryButton, __vue_component__$5 as SuccessButton, __vue_component__$1 as TableNumberInput, __vue_component__$3 as WarningButton, install as default };
