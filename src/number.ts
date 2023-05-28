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
const addOrdinal = (n: number): string => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;

/**
 * 计算初始参数的累计余数
 * @param args
 * @returns
 * @example
 *   remainder(3, 4, 4); // 3
 */
const remainder = (...args: number[]): number => args.reduce((a, b) => a % b);

/**
 * 计算初始参数的累计除数
 * @param args
 * @returns
 * @example
 *   division(1, 2, 3, 4); // 0.04166666666666666
 */
const division = (...args: number[]): number => args.reduce((a, b) => a / b);

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
const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

/**
 * 计算两个数之间的最大公约数;
 * @param a
 * @param b
 * @returns
 * @example
 *   gcd(10, 15); // 5
 */
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

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
const mod = (a: number, b: number): number => ((a % b) + b) % b;

/**
 * 从数字中获取数字数组
 * @param n
 * @returns
 * @example
 *   digitize(123); // [1, 2, 3]
 */
const digitize = (n: number): number[] => Array.from(`${n}`).map((v) => parseInt(v, 10));

/**
 * 将值限制在[min, max]之间
 * @param val
 * @param min
 * @param max
 * @returns
 * @example
 *   clamp(199, 10, 25); // 25
 */
const clamp = (val: number, min: number = 0, max: number = 1): number => Math.max(
  min,
  Math.min(max, val)
);

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
const toChars = (n: number): string => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;

/**
 * 将数字四舍五入到给定的位数
 * @param n
 * @param decimals
 * @returns
 * @example
 *   round(1.234567, 3); // 1.235
 *   round(1.234567, 4); // 1.2346
 */
// @ts-ignore
const round = (n: number, decimals: number = 0): number => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

/**
 * 计算初始参数的累积
 * @param args
 * @returns
 * @example
 *   mul(1, 2, 3, 4); // 24
 */
const mul = (...args: number[]): number => args.reduce((a, b) => a * b);

/**
 * 计算初始参数的累减
 * @param args
 * @returns
 * @example
 *   subtract(1, 2, 3, 4); // -8
 */
const subtract = (...args: number[]): number => args.reduce((a, b) => a - b);

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
// eslint-disable-next-line no-bitwise
const toFixed = (n: number, fixed: number): number => ~~(10 ** fixed * n) / 10 ** fixed;

/**
 * 用零作为整数前缀
 * @param n
 * @param length
 * @returns
 * @example
 *   prefixWithZeros(42, 5); // '00042'
 */
const prefixWithZeros = (n: number, length: number): string => String(n).padStart(length, '0');

/**
 * 去掉小数部分
 * @param n
 * @returns
 * @example
 *   truncate(25.198726354); // 25
 *   truncate(-25.198726354); // -25
 */
// eslint-disable-next-line no-bitwise
const truncate = (n: number): number => ~~n;

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
const wrap = (num: number, min: number, max: number): number => ((((num - min) % (max - min))
  + (max - min)) % (max - min)) + min;

/**
 * 递归地将十进制转换为二进制
 * @param num
 * @returns
 */
// eslint-disable-next-line no-bitwise
const decToBi = (num: number): number => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));

export {
  addOrdinal,
  clamp,
  decToBi,
  digitize,
  division,
  factorial,
  gcd,
  mod,
  mul,
  prefixWithZeros,
  remainder,
  round,
  subtract,
  toChars,
  toFixed,
  truncate,
  wrap
};
