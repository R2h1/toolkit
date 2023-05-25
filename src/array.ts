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
): Record<string, T> => arr.reduce((acc, item) => ({
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
 * 计算数组 arr 中 val 出现的次数
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
): number => arr.filter((item) => item === val).length;

/**
 * 按步长 step 创建指定范围的递增数字数组, 不包括max
 * @param min
 * @param max
 * @returns
 * @example
 *   range(5, 10); // [5, 6, 7, 8, 9]
 *   range(5, 10, 3); // [5, 9]
 */
const range = (min: number, max: number, step = 1): number[] => Array.from(
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
const accumulate = (arr: number[]): number[] => arr.reduce((acc, cur, i) => {
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
const cartesian = (...arrays: number[][]) => arrays.reduce((acc, arr) => acc.flatMap(
  (x) => arr.map((y) => [...x, y])
), [[]] as number[][]);

/**
 * 查找数组的最后一个匹配 predicate 的索引，找不到返回 -1
 * @param arr
 * @param predicate
 * @returns
 * @example
 *   lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4
 *   lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6); // 5
 */
const lastIndex = <T>(arr: T[], predicate: (a: T) => boolean): number => {
  if (!Array.isArray(arr)) {
    return -1;
  }
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return -1;
};

/**
 * 查找字符串数组中最长字符串的长度, 数组不合法返回 -1
 * @param words
 * @returns
 * @example
 *   findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']); // 6
 */
const findLongest = (words: string[]): number => {
  if (!Array.isArray(words) || words.length === 0) {
    return -1;
  }
  return words.reduce((prev, curr) => {
    const len = curr.length;
    return len > prev ? len : prev;
  }, 0);
};

/**
 * 数组中的项运行 iteratee 函数后的结果经过compare函数累计后的 index
 * @param arr
 * @param iteratee
 * @param compare 返回一个数字，大于 0, 则取 iterCur（数值当前元素运行iteratee函数的结果）的 index 作为累计值，
 *                否则取 iterPrev（累计值对应的元素运行iteratee函数的结果）的 index 作为累计值（初始累计值是下标0）
 * @returns
 * @example
 *   const people = [
 *     { name: 'Bar', age: 24 },
 *     { name: 'Baz', age: 32 },
 *     { name: 'Foo', age: 42 },
 *     { name: 'Fuzz', age: 36 },
 *   ];
 *   // 找数组项中 age 最小的index
 *   compareBy(people, (value) => value['age'],
 *     (iterCur, iterPrev) => iterPrev - iterCur); // 0
 *   // 找数组项中 age 最大的index
 *   compareBy(people, (value) => value['age'],
 *    (iterCur, iterPrev) => iterCur - iterPrev); // 2
 *   compareBy[29, 87, 8, 78, 97, 20, 75, 33, 24, 17], (value) => 50 - value,
 *     (iterCur, iterPrev) => iterPrev - iterCur);
 */
const compareBy = <T extends (Record<string, any> | number)>(
  arr: T[],
  iteratee: (item: T) => any,
  compare: (iterCur: any, iterAcc: any) => number
): number => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return -1;
  }
  const res = arr.reduce((iterPrev, curr, i) => {
    const iterCurr = iteratee(curr);
    const prev = iterPrev[0];
    if (compare(iterCurr, prev) > 0) {
      return [iterCurr, i];
    }
    return prev;
  }, [iteratee(arr[0]), 0] as [any, number]);
  return res[1];
};

/**
 * 获取数值数组中的最大值
 * @param arr
 * @returns
 * @example
 *   max([1, 3, 5, 7, 9, 2, 4, 6, 8]); // 9
 */
const max = (arr: number[]): number => Math.max(...arr);

/**
 * 获取数值数组中的最小值
 * @param arr
 * @returns
 * @example
 *   min([2, 3, 5, 7, 9, 1, 4, 6, 8]); // 1
 */
const min = (arr: number[]): number => Math.min(...arr);

/**
 * 展平嵌套数组
 * @param arr
 * @returns
 * @example
 *   flat(['cat', ['lion', 'tiger']]); // ['cat', 'lion', 'tiger']
 *   flat(['cat', ['lion', 'tiger', ['dog']]]); // ['cat', 'lion', 'tiger', ['dog']]
 *   flat(['cat', ['lion', 'tiger', ['dog']]], 2); // ['cat', 'lion', 'tiger', 'dog']
 */
const flat = (arr: any[], depth = 1): any[] => {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  if (depth < 1) {
    return arr.slice();
  }
  return arr.reduce((prev, curr) => [...prev, ...flat(curr, depth - 1)], []);
};

/**
 * 获取指定size的所有连续子数组
 * @param arr
 * @param size
 * @returns
 * @example
 *   getConsecutiveArrays([1, 2, 3, 4, 5], 2); // [[1, 2], [2, 3], [3, 4], [4, 5]]
 *   getConsecutiveArrays([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *   getConsecutiveArrays([1, 2, 3, 4, 5], 6); // []
 */
const getConsecutiveArrays = <T>(arr: T[],
  size: number): T[][] => (size > arr.length
    ? []
    : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i)));

/**
 * 找到数组中离 n 最近的数
 * @param arr
 * @param n
 * @returns
 * @example
 *   closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
 */
const closest = (
  arr: number[],
  n: number
): number => {
  const index = compareBy(
    arr,
    (value: number) => Math.abs(n - value),
    (iterCur, iterPrev) => iterPrev - iterCur
  );
  return arr[index];
};

/**
 * 获取数组中 value 出现的所有索引
 * @param arr
 * @param value
 * @returns
 * @example
 *   indices(['h', 'e', 'l', 'l', 'o'], 'l'); // [2, 3]
 *   indices(['h', 'e', 'l', 'l', 'o'], 'w'); // []
 */
const indices = <T>(arr: T[], value: T): number[] => (
  arr.reduce((acc, curr, i) => (curr === value ? [...acc, i] : acc), [] as number[])
);

/**
 * 获取数组的第 nth 元素;
 * @param arr
 * @param nth
 * @returns
 * @example
 *   getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]
 *   getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [3, 6, 9]
 */
const getNthItems = <T>(arr: T[], nth: number): T[] => arr.filter((_, i) => i % nth === nth - 1);

/**
 * 字母表
 */
const alphabet: string[] = Array.from('abcdefghijklmnopqrstuvwxyz');

/**
 * 数组求和
 * @param arr
 * @returns
 * @example
 *   sum([1, 2, 3]); // 6
 *   sum([1, 2]); // 3
 */
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);

/**
 * 获取数组的平均值
 * @param arr
 * @returns
 * @example
 *   average([1, 2, 3]); // 2
 *   average([1, 2]); // 1.5
 */
const average = (arr: number[]): number => sum(arr) / arr.length;

export {
  accumulate,
  alphabet,
  average,
  cartesian,
  closest,
  compareBy,
  countBy,
  countVal,
  empty,
  findLongest,
  flat,
  getConsecutiveArrays,
  getNthItems,
  indices,
  isEqual,
  lastIndex,
  max,
  min,
  range,
  toNumbers,
  toObject,
  castArray,
  isEmpty,
  clone
};
