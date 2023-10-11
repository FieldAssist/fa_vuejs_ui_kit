import { PluginFunction } from 'vue';
declare const install: PluginFunction<any>;
export default install;
export * from "./lib-components/index";
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
