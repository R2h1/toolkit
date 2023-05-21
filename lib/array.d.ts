/**
 * 将值转化为数组
 * @param value
 * @returns
 */
declare const castArray: <T>(value: T | T[]) => T[];
/**
 * 检查数组是否为空
 * @param arr
 * @returns
 */
declare const isEmpty: <T>(arr: T[]) => boolean;
/**
 * 浅拷贝数组
 * @param arr
 * @returns
 */
declare const clone: <T>(arr: T[]) => T[];
export { castArray, isEmpty, clone };
