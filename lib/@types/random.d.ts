/**
 * 生成一个随机布尔值
 * @returns
 */
declare const randomBoolean: () => boolean;
/**
 * 生成给定范围内的随机整数
 * @param min
 * @param max
 * @returns
 */
declare const randomInteger: (min: number, max: number) => number;
/**
 * 生成给定范围内的随机浮点数
 * @param min
 * @param max
 * @returns
 */
declare const randomFloat: (min: number, max: number) => number;
export { randomBoolean, randomFloat, randomInteger };
