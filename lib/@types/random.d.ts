/**
 * 生成一个随机布尔值
 * @returns
 */
declare const randomBoolean: () => boolean;
/**
 * 生成给定范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @param includeMax 如果true，范围是 [min, max], 如果为false, 范围是 [min, max)
 * @param isInt 是否取整
 * @returns
 */
declare const randomInRange: (min: number, max: number, options?: {
    includeMax: boolean;
    isInt: boolean;
}) => number;
/**
 * 生成给定范围内的随机数数组
 * @param min
 * @param max
 * @param n
 * @param includeMax 如果true，范围是 [min, max], 如果为false, 范围是 [min, max)
 * @param isInt 是否取整
 * @returns
 * @example
 *   randomArrayInRange(1, 100, 10); // [11, 82, 41, 35, 76, 83, 43, 15, 60, 54]
 */
declare const randomArrayInRange: (min: number, max: number, n: number, options?: {
    includeMax: boolean;
    isInt: boolean;
}) => number[];
/**
 * 产生随机的十六进制颜色
 * @returns
 * @example
 *   randomIp(); // 175.89.174.131
 */
declare const randomColor: () => string;
/**
 * 产生随机的ip地址
 * @returns
 */
declare const randomIp: () => string;
/**
 * 从给定字符生成随机字符串
 * @param length
 * @param chars
 * @returns
 * @example
 *   generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
 */
declare const generateStringByChars: (length: number, chars: string) => string;
/**
 * 生成随机字符串
 * @param length
 * @returns
 */
declare const generateString: (length: number) => string;
/**
 * 产生随机的符号
 * @returns
 */
declare const randomSign: () => number;
/**
 * 获取一个随机项
 * @param arr
 * @param needRemove 是否将随机项删除
 * @returns
 * @example
 *   const arr = [1, 3, 5, 7, 9];
 *   randomItem(arr, true); // 7
 *   // arr = [1, 3, 5, 9]
 *   randomItem(arr); // 5
 *   // arr = [1, 3, 5, 9]
 */
declare const randomItem: <T>(arr: T[], needRemove?: boolean) => T;
/**
 * 获取一个指定数量的随机项
 * @param arr
 * @param count
 * @returns
 * @example
 *   randomItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [4, 8, 5]
 *   randomItems(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 4); // ['e', 'c', 'h', 'j']
 */
declare const randomItems: <T>(arr: T[], count: number) => T[];
/**
 * 随机从文本中选择指定数量的行
 * @param str
 * @param count
 * @returns
 * @example
 *   randomLines(
      `one
      two
      three
      four
      five`,
      2
    );
    // ['one', 'four']
 */
declare const randomLines: (str: string, count: number) => string[];
/**
 *
 * @param obj
 * @returns
 * @example
 *   const colors = {
       aqua: '#00ffff',
       azure: '#f0ffff',
       beige: '#f5f5dc',
       khaki: '#f0e68c',
       red: '#ff0000',
     };
     randomProp(colors); // 'red'
 */
declare const randomProp: (obj: object) => any;
export { generateString, generateStringByChars, randomArrayInRange, randomBoolean, randomColor, randomInRange, randomIp, randomItem, randomItems, randomLines, randomProp, randomSign };
