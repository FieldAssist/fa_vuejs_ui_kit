import Vue from 'vue';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    keyListeners: any[];
}, {
    /** Initial Setup of the listeners */
    /** ****************************** */
    setupListeners(): void;
    addEventListener(expectedEvent: any): void;
    /** Handling per keypress event */
    /** *************************** */
    eventHandler(expectedEvent: any): any;
}, unknown, {
    keyEvent: string;
    keyCode: number;
    modifiers: unknown[];
    preventDefault: boolean;
    multipleKeys: unknown[];
}>;
export default _default;
