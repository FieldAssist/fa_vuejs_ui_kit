import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    getColorClass(): string;
    getHoverColorClass(): string;
    getVariantClass(): string;
    getBorderColorClass(): string;
    getTextColorClass(): string;
    deleteChip(): void;
}, {
    buttonClasses: string[];
}, {
    deletable: boolean;
    onDelete: Function;
    color: string;
    variant: string;
    size: string;
}>;
export default _default;
