import Vue from "vue";
import { Instance } from "@popperjs/core";
interface Option {
    value: string | number;
    title: string;
}
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    selectedValue: string;
}, {
    onItemClick(value: string | number): void;
    onDropdownClick(): void;
    withPopper(dropdownList: HTMLElement, component: any, { width }: {
        width: string;
    }): Instance;
}, {
    getTitle: string;
}, {
    prefix: string | null;
    label: string | null;
    required: boolean;
    options: Option[];
    disabled: boolean;
    value: string;
    placeholder: string;
}>;
export default _default;
