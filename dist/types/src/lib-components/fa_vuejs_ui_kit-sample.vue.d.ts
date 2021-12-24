import Vue from 'vue';
interface SampleData {
    counter: number;
    initCounter: number;
    message: {
        action: string | null;
        amount: number | null;
    };
}
declare const _default: import("vue/types/vue").ExtendedVue<Vue, SampleData, {
    increment(arg: Event | number): void;
    decrement(arg: Event | number): void;
    reset(): void;
}, {
    changedBy: string;
}, Record<never, any>>;
export default _default;
