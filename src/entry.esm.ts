import _Vue, { PluginFunction } from 'vue';

// Import vue components
import * as components from '@/lib-components/index';

// install function executed by Vue.use()
const install: PluginFunction<any> = function installFa_vuejs_ui_kit(Vue: typeof _Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';

export interface KeyPress {
  keyCode: number;
  keyEvent: string;
  modifiers: string[];
  preventDefault: boolean;
  multipleKeys: string[];
  setupListeners(): void;
  addEventListener(expectedEvent: Event): void;
  eventHandler(expectedEvent: Event): void;
}
