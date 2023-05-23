declare const _default: {
    accumulate: (arr: number[]) => number[];
    countOccurrences: <T extends string | number>(arr: T[]) => number | Map<T, number>;
    countVal: <T_1 extends string | number>(arr: T_1[], val: T_1) => number | Map<T_1, number>;
    empty: <T_2>(arr: T_2[]) => T_2[];
    isEqual: <T_3>(a: T_3[], b: T_3[], isConsiderOrder?: boolean) => boolean;
    range: (min: number, max: number, step?: number) => number[];
    toNumbers: (arr: string[]) => number[];
    toObject: <T_4 extends Record<string, any>, K extends keyof T_4>(arr: T_4[], key: K) => Record<string, T_4>;
    castArray: <T_5>(value: T_5 | T_5[]) => T_5[];
    isEmpty: <T_6>(arr: T_6[]) => boolean;
    clone: <T_7>(arr: T_7[]) => T_7[];
};
export default _default;
