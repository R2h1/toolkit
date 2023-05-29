/**
 * 生成一个随机布尔值
 * @returns
 */
const randomBoolean = (): boolean => Math.random() >= 0.5;

/**
 * 生成给定范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @param includeMax 如果true，范围是 [min, max], 如果为false, 范围是 [min, max)
 * @param isInt 是否取整
 * @returns
 */
const randomInRange = (
  min: number,
  max: number,
  options = {
    includeMax: false,
    isInt: true
  }
): number => {
  const { includeMax = true, isInt = false } = options;
  if (isInt) {
    return Math.floor(
      Math.random() * (max - min + (includeMax ? 1 : 0))
    ) + min;
  }
  return Math.random() * (max - min + (includeMax ? 1 : 0)) + min;
};

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
const randomArrayInRange = (
  min: number,
  max: number,
  n: number,
  options = {
    includeMax: false,
    isInt: true
  }
): number[] => Array.from(
  { length: n },
  () => randomInRange(min, max, options)
);

/**
 * 产生随机的十六进制颜色
 * @returns
 * @example
 *   randomIp(); // 175.89.174.131
 */
const randomColor = (): string => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

/**
 * 产生随机的ip地址
 * @returns
 */
const randomIp = (): string => new Array(4)
  .fill(0)
  .map((_, i) => randomInRange(0, 255) + (i === 0 ? 1 : 0))
  .join('.');

/**
 * 从给定字符生成随机字符串
 * @param length
 * @param chars
 * @returns
 * @example
 *   generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
 */
const generateStringByChars = (length: number, chars: string) => new Array(length)
  .fill('')
  .map(() => chars[randomInRange(0, chars.length)])
  .join('');

/**
 * 生成随机字符串
 * @param length
 * @returns
 */
const generateString = (length: number): string => new Array(length)
  .fill('')
  .map(() => Math.random().toString(36).charAt(2))
  .join('');

/**
 * 产生随机的符号
 * @returns
 */
const randomSign = (): number => (randomBoolean() ? 1 : -1);

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
const randomItem = <T>(arr: T[], needRemove = false): T => {
  const index = randomInRange(0, arr.length);
  if (needRemove) {
    return arr.splice(index, 1) as unknown as T;
  }
  return arr[index];
};

/**
 * 获取一个指定数量的随机项
 * @param arr
 * @param count
 * @returns
 * @example
 *   randomItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [4, 8, 5]
 *   randomItems(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 4); // ['e', 'c', 'h', 'j']
 */
const randomItems = <T>(arr: T[], count: number) => {
  const copyArr = arr.slice();
  let i = 0;
  return copyArr.reduce((
    acc
  ) => {
    if (i < count) {
      i += 1;
      acc.push(randomItem(copyArr, true));
    }
    return acc;
  }, [] as T[]);
};

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
const randomLines = (str: string, count: number): string[] => randomItems(str.split(/\r?\n/), count);

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
const randomProp = (obj: object): any => Object.keys(
  obj
)[randomInRange(0, Object.keys(obj).length)];

export {
  generateString,
  generateStringByChars,
  randomArrayInRange,
  randomBoolean,
  randomColor,
  randomInRange,
  randomIp,
  randomItem,
  randomItems,
  randomLines,
  randomProp,
  randomSign
};
