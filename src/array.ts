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

/**
 * 获取所有数组的交集
 * @param a
 * @param arr
 * @returns
 * @example
 *   getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]
 *   getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]); // [3]

 */
const getIntersection = <T>(a: T[],
  ...arr: T[][]): T[] => Array.from(new Set(a)).filter((v) => arr.every((b) => b.includes(v)));

/**
 * 获取所有子集
 * @param arr
 * @returns
 * @example
 *   getSubsets([1, 2]); // [[], [1], [2], [1, 2]]
 *   getSubsets([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 */
const getSubsets = <T>(arr: T[]): T[][] => (
  arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]] as T[][])
);

/**
 * 检查 a 是不是 b 的子集
 * @param a
 * @param b
 * @returns
 */
const isSubset = <T>(a: T[], b: T[]): boolean => new Set(b).size === new Set(b.concat(a)).size;

/**
 * 获取数组中元素的排名
 * @param arr
 * @returns
 * @example
 *   ranking([80, 65, 90, 50]); // [2, 3, 1, 4]
 *   ranking([80, 80, 70, 50]); // [1, 1, 3, 4]
 */
const ranking = (arr: number[]): number[] => arr.map(
  (x) => arr.filter((y) => y > x).length + 1
);

/**
 * 获取数组的唯一值
 * @param arr
 * @returns
 * @example
 *   unique([80, 65, 90, 50]); // [80, 65, 90, 50]
 *   unique([80, 80, 70, 50]); // [80, 70, 50]
 */
const unique = <T>(arr: T[]): T[] => arr.filter((el, i, array) => array.indexOf(el) === i);

/**
 * 求数组的并集（集合的性质之一是互异性）
 * @param arr
 * @returns
 * @example
 *   // 或者 const union = <T,_>(...arr: T[][]): T[] => [...new Set(arr.flat())];
 *   union([1, 2], [2, 3], [3]); // [1, 2, 3]
 */
const union = <T>(...arr: T[][]): T[] => arr.reduce((
  acc,
  curr
) => acc.concat(curr.filter((val) => !acc.includes(val)), [] as T[]));

/**
 * 按 key 的值将对象数组进行分组
 * @param arr
 * @param key
 * @returns
 * @example
 *   groupBy(
      [
          { branch: 'audi', model: 'q8', year: '2019' },
          { branch: 'audi', model: 'rs7', year: '2020' },
          { branch: 'ford', model: 'mustang', year: '2019' },
          { branch: 'ford', model: 'explorer', year: '2020' },
          { branch: 'bmw', model: 'x7', year: '2020' },
      ],
      'branch'
    );

    {
      audi: [
          { branch: 'audi', model: 'q8', year: '2019' },
          { branch: 'audi', model: 'rs7', year: '2020' }
      ],
      bmw: [
          { branch: 'bmw', model: 'x7', year: '2020' }
      ],
      ford: [
          { branch: 'ford', model: 'mustang', year: '2019' },
          { branch: 'ford', model: 'explorer', year: '2020' }
      ],
    }
 */
const groupBy = <T extends Record<string, any>, K extends keyof T>(
  arr: T[],
  key: K
): Record<string, T[]> => (
  arr.reduce((acc, item) => {
    const k = item[key];
    if (acc[k]) {
      acc[k].push(item);
    } else {
      acc[k] = [item];
    }
    return acc;
  }, {} as Record<string, T[]>)
);

/**
 * 在数组元素之间穿插新元素
 * @param arr
 * @param s
 * @returns
 * @example
 *   intersperse(['A', 'B', 'C'], '/'); // ['A', '/', 'B', '/', 'C']
 */
const intersperse = <T>(
  arr: T[],
  val: T
): T[] => arr.reduce((acc, curr, i) => {
  if (i === arr.length - 1) {
    return acc.concat(curr);
  }
  return acc.concat(curr, JSON.parse(JSON.stringify(val)));
}, [] as T[]);

/**
 * 按条件划分数组
 * @param arr
 * @param criteria
 * @returns
 * @example
 *   partition([1, 2, 3, 4, 5], (n) => n % 2); // [[1, 3, 5], [2, 4]]
 */
const partition = <T>(
  arr: T[],
  criteria: (value: T) => boolean
): T[][] => arr.reduce((acc, item) => {
  acc[criteria(item) ? 0 : 1].push(item);
  return acc;
}, [[] as T[], [] as T[]]);

/**
 * 合并两个数组
 * @param a
 * @param b
 * @param deDuplication 是否去重
 * @returns
 * @example
 *   merge([1, 2], [2, 3], true); // [1, 2, 3]
 *   merge([1, 2], [2, 3]); // [1, 2, 2, 3]
 */
const merge = <T>(
  a: T[],
  b: T[],
  deDuplication = false
): T[] => (deDuplication ? union(a, b) : a.concat(b));

/**
 * 移除数组中的所有重复值
 * @param arr
 * @returns
 * @example
 *   removeDuplicate(['h', 'e', 'l', 'l', 'o']); //  ['h', 'e', 'o']
 */
const removeDuplicate = <T>(
  arr: T[]
): T[] => arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));

/**
 * 重复数组 n 次
 * @param arr
 * @param n
 * @returns
 * @example
 *   repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
 */
const repeat = <T>(
  arr: T[],
  n: number
): T[] => [].concat(...new Array(n).fill([...arr]));

/**
 * 打乱数组
 * @param arr
 * @returns
 * @example
 *   shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
 */
const shuffle = <T>(arr: T[]): T[] => arr.sort(() => 0.5 - Math.random());

/**
 * 移除数组中的 falsy 值
 * @param arr
 * @returns
 * @example
 *   removeFalsy([0, 'a', '', NaN, true, 5, undefined, false]); // ['a', true, 5, ]
 */
const removeFalsy = <T>(arr: T[]): T[] => arr.filter(Boolean);

/**
 * 数组拆分成块
 * @param arr
 * @param size
 * @returns
 * @example
 *   chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
 */
const chunk = <T>(arr: T[], size: number): T[][] => (
  arr.reduce((acc, curr, i) => {
    if (i % size) {
      acc[acc.length - 1].push(curr);
    } else {
      acc.push([curr]);
    }
    return acc;
  }, [] as T[][])
);

/**
 * 按给定 key 对数组进行排序
 * @param arr
 * @param k
 * @returns
 * @example
 *   const people = [
      { name: 'Foo', age: 42 },
      { name: 'Bar', age: 24 },
      { name: 'Fuzz', age: 36 },
      { name: 'Baz', age: 32 },
    ];
    sortBy(people, 'age');

    //  [
    //      { name: 'Bar', age: 24 },
    //      { name: 'Baz', age: 32 },
    //      { name: 'Fuzz', age: 36 },
    //      { name: 'Foo', age: 42 },
    //  ]
 */
const sortBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], k: K): T[] => (
  [...arr].sort((a, b) => {
    if (a[k] > b[k]) {
      return 1;
    }
    if (a[k] < b[k]) {
      return -1;
    }
    return 0;
  })
);

/**
 * 交换二维数组的行和列（即矩阵转置）
 * @param matrix
 * @returns
 * @example
 *   transpose([
       [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9],
     ]);
     // [
     //   [1, 4, 7],
     //   [2, 5, 8],
     //   [3, 6, 9],
     // ]
 */
const transpose = <T>(matrix: T[][]): T[][] => matrix[0].map(
  (_, i) => matrix.map((row) => row[i])
);

/**
 * 压缩数组
 * @param arr
 * @returns
 * @example
 *   zip(['a', 'b', 'c'], [1, 2, 3]); // [['a', 1], ['b', 2], ['c', 3]]
 */
const zip = <T>(...arr: T[][]) => {
  const maxLen = max(arr.map((a) => a.length));
  return Array.from({ length: maxLen }, (_, i) => arr.map((a) => a[i]));
};

/**
 * 解压数组
 * @param arr
 * @returns
 * @example
 *   unzip([
      ['a', 1],
      ['b', 2],
      ['c', 3],
      ['d', 4],
      ['e', 5],
     ]); // [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]]
 */
const unzip = <T>(...arr: T[][]) => arr.reduce((acc, curr) => {
  curr.forEach((val, i) => {
    acc[i].push(val);
  });
  return acc;
}, Array.from({ length: max(arr.map((a) => a.length)) }, () => [] as T[]));

/**
 * 随机获取数组中的一个元素
 * @param arr
 * @returns
 * @example
 *   random([1, 2, 3, 4, 5]); // 2
 */
const random = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

/**
 * 交换数组下标 i 和 下标 j 的元素， 并返回一个新数组
 * @param a
 * @param i
 * @param j
 * @returns
 * @example
 *   swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]
 */
const swapItems = <T>(
  a: T[],
  i: number,
  j: number
): T[] => {
  const len = a.length;
  if ((i < 0 || i > len - 1) || (j < 0 || j > len - 1)) {
    return a;
  }
  return [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)];
};

/**
 * 将值转化为数组
 * @param value
 * @returns
 * @example
 *  castArray(1); // [1]
 *  castArray([1, 2, 3]); // [1, 2, 3]
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
 * @example
 *   isEmpty([]); // true
 *   isEmpty([1, 2, 3]); // false
 */
const isEmpty = <T>(arr: T[]): boolean => {
  if (Array.isArray(arr) && arr.length === 0) {
    return true;
  }
  return false;
};

/**
 * 浅拷贝数组
 * @param arr
 * @returns
 * @example
 *   clone([1, 2, 3]) // [1, 2, 3]
 */
const clone = <T>(arr: T[]): T[] => JSON.parse(JSON.stringify(arr));

/**
 * 将数组中满足条件的值排除('exclude')或者留下('include')
 * @param arr
 * @param condition
 * @param type
 * @returns
 * @example
 *   filterAdvanced([1, 2, 3], (value) => value % 2, 'include') // [1, 3]
 *   filterAdvanced([1, 2, 3], (value) => value % 2, 'exclude') // [2]
 */
const filterAdvanced = <T>(arr: T[], condition: (i: T) => Boolean, type: 'include' | 'exclude'): T[] => {
  const newCondition = type === 'include' ? condition : (i: T) => !condition(i);
  return arr.filter(newCondition);
};

/**
 * 求数组的补集
 * @param type 绝对补集 'absolute', 相对补集 'relative'
 * @param a
 * @param arr
 * @returns
 * @example
 *  complement('absolute', [1, 2, 3], [2, 4]) // []
 *  complement('relative', [1, 2, 3], [2]) // [1, 3]
 *  complement('relative', [1, 2, 3], [2, 4]) // [1, 3]
 */
const complement = <T>(type: 'absolute' | 'relative', a: T[], ...arr: T[][]): T[] => {
  try {
    return Array.from(new Set(a)).filter((v) => arr.every((b) => {
      /** 绝对补集(如果集合 b 中存在不是集合 a 中的元素，则直接返回空集 */
      if (type === 'absolute' && b.some((x) => !a.includes(x))) {
        throw new TypeError(`${type} complementSet: b is not subset of a`);
      }
      return !b.includes(v);
    }));
  } catch (e) {
    return [];
  }
};

/**
 * 检查数组是否具有重复值;
 * @param arr
 * @returns
 * @example
 *   hasDuplicateValues(['h', 'e', 'l', 'l', 'o']); // true
 *   hasDuplicateValues(['w', 'o', 'r', 'd']); // false
 */
const hasDuplicateValues = <T>(arr: T[]): boolean => new Set(arr).size !== arr.length;

/**
 * 检查数组中的所有项是否相等
 * @param arr
 * @returns
 * @example
 *   areEqual([1, 2, 3, 4]); // false
 *   areEqual(['hello', 'hello', 'hello']); // true
 */
const areEqual = <T>(arr: T[]): boolean => new Set(arr).size === 1;

/**
 * 检查所有数组元素是否都等于给定值
 * @param arr
 * @param value
 * @returns
 * @example
 *   isEqual(['foo', 'foo'], 'foo'); // true
 *   isEqual(['foo', 'bar'], 'foo'); // false
 */
const isEqualSomeValue = <T>(arr: T[], value: T): boolean => arr.every((item) => item === value);

export {
  accumulate,
  alphabet,
  areEqual,
  average,
  cartesian,
  castArray,
  clone,
  closest,
  compareBy,
  complement,
  countBy,
  countVal,
  chunk,
  empty,
  filterAdvanced,
  findLongest,
  flat,
  getConsecutiveArrays,
  getIntersection,
  getNthItems,
  getSubsets,
  groupBy,
  hasDuplicateValues,
  indices,
  intersperse,
  isEmpty,
  isEqual,
  isEqualSomeValue,
  isSubset,
  lastIndex,
  max,
  merge,
  min,
  partition,
  range,
  ranking,
  removeDuplicate,
  removeFalsy,
  repeat,
  random,
  shuffle,
  swapItems,
  sortBy,
  toNumbers,
  toObject,
  transpose,
  union,
  unique,
  unzip,
  zip
};
