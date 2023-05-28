/**
 * 为数字添加序数后缀
 * @param n
 * @returns
 * @example
 *   addOrdinal(1); // '1st'
 *   addOrdinal(2); // '2nd'
 *   addOrdinal(3); // '3rd'
 *   addOrdinal(11); // '11th'
 *   addOrdinal(12); // '13th'
 *   addOrdinal(13); // '13th'
 */
declare const addOrdinal: (n: number) => string;
/**
 * 计算初始参数的累计余数
 * @param args
 * @returns
 * @example
 *   remainder(3, 4, 4); // 3
 */
declare const remainder: (...args: number[]) => number;
/**
 * 计算初始参数的累计除数
 * @param args
 * @returns
 * @example
 *   division(1, 2, 3, 4); // 0.04166666666666666
 */
declare const division: (...args: number[]) => number;
/**
 * 计算一个数的阶乘
 * @param n
 * @returns
 * @example
 *   factorial(2); // 2
 *   factorial(3); // 6
 *   factorial(4); // 24
 *   factorial(5); // 120
 *   factorial(6); // 720
 */
declare const factorial: (n: number) => number;
/**
 * 计算两个数之间的最大公约数;
 * @param a
 * @param b
 * @returns
 * @example
 *   gcd(10, 15); // 5
 */
declare const gcd: (a: number, b: number) => number;
/**
 * 求模 (a - b * Math.floor(a / b))
 * @param a
 * @param b
 * @returns
 * @example
 *   mod(-1, 5); // 4
 *   mod(3, 5); // 3
 *   mod(6, 5); // 1
 */
declare const mod: (a: number, b: number) => number;
/**
 * 从数字中获取数字数组
 * @param n
 * @returns
 * @example
 *   digitize(123); // [1, 2, 3]
 */
declare const digitize: (n: number) => number[];
/**
 * 将值限制在[min, max]之间
 * @param val
 * @param min
 * @param max
 * @returns
 * @example
 *   clamp(199, 10, 25); // 25
 */
declare const clamp: (val: number, min?: number, max?: number) => number;
/**
 * 将数字转化为26字母进制串
 * @param n
 * @returns
 * @example
 *   toChars(0); // A
 *   toChars(1); // B
 *   toChars(25); // Z
 *   toChars(26); // AA
 *   toChars(27); // AB
 *   toChars(51); // AZ
 *   toChars(701); // ZZ
 *   toChars(702); // AAA
 *   toChars(703); // AAB
 */
declare const toChars: (n: number) => string;
/**
 * 将数字四舍五入到给定的位数
 * @param n
 * @param decimals
 * @returns
 * @example
 *   round(1.234567, 3); // 1.235
 *   round(1.234567, 4); // 1.2346
 */
declare const round: (n: number, decimals?: number) => number;
/**
 * 计算初始参数的累积
 * @param args
 * @returns
 * @example
 *   mul(1, 2, 3, 4); // 24
 */
declare const mul: (...args: number[]) => number;
/**
 * 计算初始参数的累减
 * @param args
 * @returns
 * @example
 *   subtract(1, 2, 3, 4); // -8
 */
declare const subtract: (...args: number[]) => number;
/**
 * 将数字截断到给定的小数位数而不四舍五入
 * @param n
 * @param fixed
 * @returns
 * @example
 *   toFixed(25.198726354, 1); // 25.1
 *   toFixed(25.198726354, 2); // 25.19
 *   toFixed(25.198726354, 3); // 25.198
 *   toFixed(25.198726354, 4); // 25.1987
 *   toFixed(25.198726354, 5); // 25.19872
 *   toFixed(25.198726354, 6); // 25.198726
 */
declare const toFixed: (n: number, fixed: number) => number;
/**
 * 用零作为整数前缀
 * @param n
 * @param length
 * @returns
 * @example
 *   prefixWithZeros(42, 5); // '00042'
 */
declare const prefixWithZeros: (n: number, length: number) => string;
/**
 * 去掉小数部分
 * @param n
 * @returns
 * @example
 *   truncate(25.198726354); // 25
 *   truncate(-25.198726354); // -25
 */
declare const truncate: (n: number) => number;
/**
 * 将值包裹在 min 和 max 之间
 * @param num
 * @param min
 * @param max
 * @returns
 * @example
 *   wrap(11, 10, 25); // 11
 *   wrap(10, 10, 25); // 10
 *   wrap(9, 10, 25); // 25
 *   wrap(24, 10, 25); // 24
 *   wrap(25, 10, 25); // 25
 *   wrap(26, 10, 25); // 10
 */
declare const wrap: (num: number, min: number, max: number) => number;
/**
 * 递归地将十进制转换为二进制
 * @param num
 * @returns
 */
declare const decToBi: (num: number) => number;
export { addOrdinal, clamp, decToBi, digitize, division, factorial, gcd, mod, mul, prefixWithZeros, remainder, round, subtract, toChars, toFixed, truncate, wrap };
