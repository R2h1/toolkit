/**
 * 将值转化为数组
 * @param value
 * @returns
 */
const castArray = <T>(value: T | T[]): T[] => {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

/**
 * 检查数组是否为空
 * @param arr
 * @returns
 */
const isEmpty = <T>(arr: T[]): boolean => {
  if (Array.isArray(arr)) {
    return arr.length === 0;
  }
  return false;
};

/**
 * 浅拷贝数组
 * @param arr
 * @returns
 */
const clone = <T>(arr: T[]): T[] => [...arr];

/**
 * 以指定key将对象数组转化为单个对象，相同 key 的对象会被后面的替换
 * @param {object[]} arr 对象数组
 * @param {string} key 指定的key，该 key 对应的值作为新对象的 key
 * @returns
 * @example
 *  toObject(
 *    [
 *      { id: '1', name: 'Alpha', gender: 'Male' },
 *      { id: '2', name: 'Bravo', gender: 'Male' },
 *      { id: '2', name: 'Dav' },
 *      { id: '3', name: 'Charlie', gender: 'Female' },
 *    ],
 *    'id'
 *  );
 *   // {
 *   //   '1': { id: '1', name: 'Alpha', gender: 'Male' },
 *   //   '2': { id: '2', name: 'Dav' },
 *   //   '3': { id: '3', name: 'Charlie', gender: 'Female' },
 *   //}
 */
const toObject = <T extends Record<string, any>, K extends keyof T>(
  arr: T[],
  key: K
): Record<string, T> =>
  arr.reduce((acc, item) => ({
    ...acc,
    [item[key]]: item
  }));

/**
 * 比较两个数组是否相等
 * @param a
 * @param b
 * @param order 是否考虑顺序
 * @returns
 * @example
 *   isEqual([1, 2, 3], [1, 3, 2]); // true
 *   isEqual([1, 2, 3], [1, 3, 2], true); // false
 *   isEqual([1, 2, 3], [1, '2', 3]); // false
 */
const isEqual = <T>(a: T[], b: T[], isConsiderOrder = false): boolean => {
  if (!isConsiderOrder) {
    // eslint-disable-next-line no-param-reassign
    a = Array.from(new Set(a));
    // eslint-disable-next-line no-param-reassign
    b = Array.from(new Set(b));
  }
  return JSON.stringify(a) === JSON.stringify(b);
};

/**
 * 运行 iteratee 函数后的结果作为键，进行计数
 * @param arr
 * @param iteratee
 * @returns
 * @example
 *   countBy(
 *     [
 *       { branch: 'audi', model: 'q8', year: '2019' },
 *       { branch: 'audi', model: 'rs7', year: '2020' },
 *       { branch: 'ford', model: 'mustang', year: '2019' },
 *       { branch: 'ford', model: 'explorer', year: '2020' },
 *       { branch: 'bmw', model: 'x7', year: '2020' },
 *     ],
 *     (value) => value['branch']
 *   );
 *  // Map(3) { 'audi': 2, 'ford': 2, 'bmw': 1 }
 *  countBy([2, 1, 3, 3, 2, 3], (value) => value); // Map(3) {2 => 2, 1 => 1, 3 => 3}
 */
const countBy = <T extends Record<string, any>>(
  arr: T[],
  iteratee: (item: T) => any
): Map<T[keyof T], number> => {
  const map = new Map<any, number>();
  return arr.reduce((prev, curr) => {
    const value = iteratee(curr);
    if (prev.has(value)) {
      prev.set(value, prev.get(value)! + 1);
    } else {
      prev.set(value, 1);
    }
    return prev;
  }, map);
};

/**
 * 计算数组 arr 中 val 出现的次数，如果 val 为
 * @param arr
 * @param val
 * @returns
 * @example
 *   countVal([2, 1, 3, 3, 2, 3], 2); // 2
 *   countVal(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3
 */
const countVal = <T extends string | number>(
  arr: T[],
  val: T
): number | Map<T, number> => arr.filter((item) => item === val).length;

/**
 * 按步长 step 创建指定范围的递增数字数组, 不包括max
 * @param min
 * @param max
 * @returns
 * @example
 *   range(5, 10); // [5, 6, 7, 8, 9]
 *   range(5, 10, 3); // [5, 9]
 */
const range = (min: number, max: number, step = 1): number[] =>
  Array.from(
    { length: Math.ceil((max - min) / step) },
    (_, i) => min + i * step
  );

/**
 * 对数组 arr 置空
 * @param arr
 * @example
 *   empty([1, 2]); // []
 */
const empty = <T>(arr: T[]): T[] => {
  // eslint-disable-next-line no-param-reassign
  arr.length = 0;
  return arr;
};

/**
 * 创建一个累加和数组
 * @param arr
 * @returns
 * @example
 *   accumulate([1, 2, 3, 4]); // [1, 3, 6, 10]
 */
const accumulate = (arr: number[]): number[] =>
  arr.reduce((acc, cur, i) => {
    if (i === 0) {
      return [cur];
    }
    return [...acc, acc[i - 1] + cur];
  }, [] as number[]);

/**
 * 将字符串数组转为number数组
 * @param arr
 * @returns
 * @example
 *   toNumbers(['2', '3', '4']); // [2, 3, 4]
 */
const toNumbers = (arr: string[]): number[] => arr.map(Number);

/**
 * 计算笛卡尔积，即所有可能的组合
 * @param arrays
 * @returns
 * @example
 *   cartesian([1, 2], [3, 4]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
 */
const cartesian = (...arrays: number[][]) =>
  arrays.reduce((acc, arr) => acc.flatMap((x) => arr.map((y) => [...x, y])), [
    []
  ] as number[][]);

export {
  accumulate,
  cartesian,
  countBy,
  countVal,
  empty,
  isEqual,
  range,
  toNumbers,
  toObject,
  castArray,
  isEmpty,
  clone
};
