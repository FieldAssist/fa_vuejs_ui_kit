import type { App, Component } from "vue";

// Import vue components
import * as components from "@/lib-components/index";

// Type guard to check if value is a Vue component
const isVueComponent = (value: any): value is Component => {
  return value && typeof value === "object" && "setup" in value;
};

// install function executed by app.use()
const install = (app: App) => {
  Object.entries(components).forEach(([componentName, component]) => {
    if (isVueComponent(component)) {
      app.component(componentName, component);
    }
  });
};

export default install;

// To allow individual component use, export components
export * from "@/lib-components/index";

// Type definitions
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
