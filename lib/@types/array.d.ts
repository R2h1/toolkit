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
declare const toObject: <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K) => Record<string, T>;
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
declare const isEqual: <T>(a: T[], b: T[], isConsiderOrder?: boolean) => boolean;
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
declare const countBy: <T extends Record<string, any>>(arr: T[], iteratee: (item: T) => any) => Map<T[keyof T], number>;
/**
 * 计算数组 arr 中 val 出现的次数
 * @param arr
 * @param val
 * @returns
 * @example
 *   countVal([2, 1, 3, 3, 2, 3], 2); // 2
 *   countVal(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3
 */
declare const countVal: <T extends string | number>(arr: T[], val: T) => number;
/**
 * 按步长 step 创建指定范围的递增数字数组, 不包括max
 * @param min
 * @param max
 * @returns
 * @example
 *   range(5, 10); // [5, 6, 7, 8, 9]
 *   range(5, 10, 3); // [5, 9]
 */
declare const range: (min: number, max: number, step?: number) => number[];
/**
 * 对数组 arr 置空
 * @param arr
 * @example
 *   empty([1, 2]); // []
 */
declare const empty: <T>(arr: T[]) => T[];
/**
 * 创建一个累加和数组
 * @param arr
 * @returns
 * @example
 *   accumulate([1, 2, 3, 4]); // [1, 3, 6, 10]
 */
declare const accumulate: (arr: number[]) => number[];
/**
 * 将字符串数组转为number数组
 * @param arr
 * @returns
 * @example
 *   toNumbers(['2', '3', '4']); // [2, 3, 4]
 */
declare const toNumbers: (arr: string[]) => number[];
/**
 * 计算笛卡尔积，即所有可能的组合
 * @param arrays
 * @returns
 * @example
 *   cartesian([1, 2], [3, 4]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
 */
declare const cartesian: (...arrays: number[][]) => number[][];
/**
 * 查找数组的最后一个匹配 predicate 的索引，找不到返回 -1
 * @param arr
 * @param predicate
 * @returns
 * @example
 *   lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4
 *   lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6); // 5
 */
declare const lastIndex: <T>(arr: T[], predicate: (a: T) => boolean) => number;
/**
 * 查找字符串数组中最长字符串的长度, 数组不合法返回 -1
 * @param words
 * @returns
 * @example
 *   findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']); // 6
 */
declare const findLongest: (words: string[]) => number;
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
declare const compareBy: <T extends number | Record<string, any>>(arr: T[], iteratee: (item: T) => any, compare: (iterCur: any, iterAcc: any) => number) => number;
/**
 * 获取数值数组中的最大值
 * @param arr
 * @returns
 * @example
 *   max([1, 3, 5, 7, 9, 2, 4, 6, 8]); // 9
 */
declare const max: (arr: number[]) => number;
/**
 * 获取数值数组中的最小值
 * @param arr
 * @returns
 * @example
 *   min([2, 3, 5, 7, 9, 1, 4, 6, 8]); // 1
 */
declare const min: (arr: number[]) => number;
/**
 * 展平嵌套数组
 * @param arr
 * @returns
 * @example
 *   flat(['cat', ['lion', 'tiger']]); // ['cat', 'lion', 'tiger']
 *   flat(['cat', ['lion', 'tiger', ['dog']]]); // ['cat', 'lion', 'tiger', ['dog']]
 *   flat(['cat', ['lion', 'tiger', ['dog']]], 2); // ['cat', 'lion', 'tiger', 'dog']
 */
declare const flat: (arr: any[], depth?: number) => any[];
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
declare const getConsecutiveArrays: <T>(arr: T[], size: number) => T[][];
/**
 * 找到数组中离 n 最近的数
 * @param arr
 * @param n
 * @returns
 * @example
 *   closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
 */
declare const closest: (arr: number[], n: number) => number;
/**
 * 获取数组中 value 出现的所有索引
 * @param arr
 * @param value
 * @returns
 * @example
 *   indices(['h', 'e', 'l', 'l', 'o'], 'l'); // [2, 3]
 *   indices(['h', 'e', 'l', 'l', 'o'], 'w'); // []
 */
declare const indices: <T>(arr: T[], value: T) => number[];
/**
 * 获取数组的第 nth 元素;
 * @param arr
 * @param nth
 * @returns
 * @example
 *   getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]
 *   getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [3, 6, 9]
 */
declare const getNthItems: <T>(arr: T[], nth: number) => T[];
/**
 * 字母表
 */
declare const alphabet: string[];
/**
 * 获取数组的平均值
 * @param arr
 * @returns
 * @example
 *   average([1, 2, 3]); // 2
 *   average([1, 2]); // 1.5
 */
declare const average: (arr: number[]) => number;
/**
 * 获取所有数组的交集
 * @param a
 * @param arr
 * @returns
 * @example
 *   getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]
 *   getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]); // [3]

 */
declare const getIntersection: <T>(a: T[], ...arr: T[][]) => T[];
/**
 * 获取所有子集
 * @param arr
 * @returns
 * @example
 *   getSubsets([1, 2]); // [[], [1], [2], [1, 2]]
 *   getSubsets([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 */
declare const getSubsets: <T>(arr: T[]) => T[][];
/**
 * 检查 a 是不是 b 的子集
 * @param a
 * @param b
 * @returns
 */
declare const isSubset: <T>(a: T[], b: T[]) => boolean;
/**
 * 获取数组中元素的排名
 * @param arr
 * @returns
 * @example
 *   ranking([80, 65, 90, 50]); // [2, 3, 1, 4]
 *   ranking([80, 80, 70, 50]); // [1, 1, 3, 4]
 */
declare const ranking: (arr: number[]) => number[];
/**
 * 获取数组的唯一值
 * @param arr
 * @returns
 * @example
 *   unique([80, 65, 90, 50]); // [80, 65, 90, 50]
 *   unique([80, 80, 70, 50]); // [80, 70, 50]
 */
declare const unique: <T>(arr: T[]) => T[];
/**
 * 求数组的并集（集合的性质之一是互异性）
 * @param arr
 * @returns
 * @example
 *   // 或者 const union = <T,_>(...arr: T[][]): T[] => [...new Set(arr.flat())];
 *   union([1, 2], [2, 3], [3]); // [1, 2, 3]
 */
declare const union: <T>(...arr: T[][]) => T[];
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
declare const groupBy: <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K) => Record<string, T[]>;
/**
 * 在数组元素之间穿插新元素
 * @param arr
 * @param s
 * @returns
 * @example
 *   intersperse(['A', 'B', 'C'], '/'); // ['A', '/', 'B', '/', 'C']
 */
declare const intersperse: <T>(arr: T[], val: T) => T[];
/**
 * 按条件划分数组
 * @param arr
 * @param criteria
 * @returns
 * @example
 *   partition([1, 2, 3, 4, 5], (n) => n % 2); // [[1, 3, 5], [2, 4]]
 */
declare const partition: <T>(arr: T[], criteria: (value: T) => boolean) => T[][];
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
declare const merge: <T>(a: T[], b: T[], deDuplication?: boolean) => T[];
/**
 * 移除数组中的所有重复值
 * @param arr
 * @returns
 * @example
 *   removeDuplicate(['h', 'e', 'l', 'l', 'o']); //  ['h', 'e', 'o']
 */
declare const removeDuplicate: <T>(arr: T[]) => T[];
/**
 * 重复数组 n 次
 * @param arr
 * @param n
 * @returns
 * @example
 *   repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
 */
declare const repeat: <T>(arr: T[], n: number) => T[];
/**
 * 打乱数组
 * @param arr
 * @returns
 * @example
 *   shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
 */
declare const shuffle: <T>(arr: T[]) => T[];
/**
 * 移除数组中的 falsy 值
 * @param arr
 * @returns
 * @example
 *   removeFalsy([0, 'a', '', NaN, true, 5, undefined, false]); // ['a', true, 5, ]
 */
declare const removeFalsy: <T>(arr: T[]) => T[];
/**
 * 数组拆分成块
 * @param arr
 * @param size
 * @returns
 * @example
 *   chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
 */
declare const chunk: <T>(arr: T[], size: number) => T[][];
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
declare const sortBy: <T extends Record<string, any>, K extends keyof T>(arr: T[], k: K) => T[];
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
declare const transpose: <T>(matrix: T[][]) => T[][];
/**
 * 压缩数组
 * @param arr
 * @returns
 * @example
 *   zip(['a', 'b', 'c'], [1, 2, 3]); // [['a', 1], ['b', 2], ['c', 3]]
 */
declare const zip: <T>(...arr: T[][]) => T[][];
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
declare const unzip: <T>(...arr: T[][]) => T[][];
/**
 * 随机获取数组中的一个元素
 * @param arr
 * @returns
 * @example
 *   random([1, 2, 3, 4, 5]); // 2
 */
declare const random: <T>(arr: T[]) => T;
/**
 * 交换数组下标 i 和 下标 j 的元素， 并返回一个新数组
 * @param a
 * @param i
 * @param j
 * @returns
 * @example
 *   swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]
 */
declare const swapItems: <T>(a: T[], i: number, j: number) => T[];
/**
 * 将值转化为数组
 * @param value
 * @returns
 * @example
 *  castArray(1); // [1]
 *  castArray([1, 2, 3]); // [1, 2, 3]
 */
declare const castArray: <T>(value: T | T[]) => T[];
/**
 * 检查数组是否为空
 * @param arr
 * @returns
 * @example
 *   isEmpty([]); // true
 *   isEmpty([1, 2, 3]); // false
 */
declare const isEmpty: <T>(arr: T[]) => boolean;
/**
 * 浅拷贝数组
 * @param arr
 * @returns
 * @example
 *   clone([1, 2, 3]) // [1, 2, 3]
 */
declare const clone: <T>(arr: T[]) => T[];
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
declare const filterAdvanced: <T>(arr: T[], condition: (i: T) => Boolean, type: 'include' | 'exclude') => T[];
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
declare const complement: <T>(type: 'absolute' | 'relative', a: T[], ...arr: T[][]) => T[];
/**
 * 检查数组是否具有重复值;
 * @param arr
 * @returns
 * @example
 *   hasDuplicateValues(['h', 'e', 'l', 'l', 'o']); // true
 *   hasDuplicateValues(['w', 'o', 'r', 'd']); // false
 */
declare const hasDuplicateValues: <T>(arr: T[]) => boolean;
/**
 * 检查数组中的所有项是否相等
 * @param arr
 * @returns
 * @example
 *   areEqual([1, 2, 3, 4]); // false
 *   areEqual(['hello', 'hello', 'hello']); // true
 */
declare const areEqual: <T>(arr: T[]) => boolean;
/**
 * 检查所有数组元素是否都等于给定值
 * @param arr
 * @param value
 * @returns
 * @example
 *   isEqual(['foo', 'foo'], 'foo'); // true
 *   isEqual(['foo', 'bar'], 'foo'); // false
 */
declare const isEqualSomeValue: <T>(arr: T[], value: T) => boolean;
export { accumulate, alphabet, areEqual, average, cartesian, castArray, clone, closest, compareBy, complement, countBy, countVal, chunk, empty, filterAdvanced, findLongest, flat, getConsecutiveArrays, getIntersection, getNthItems, getSubsets, groupBy, hasDuplicateValues, indices, intersperse, isEmpty, isEqual, isEqualSomeValue, isSubset, lastIndex, max, merge, min, partition, range, ranking, removeDuplicate, removeFalsy, repeat, random, shuffle, swapItems, sortBy, toNumbers, toObject, transpose, union, unique, unzip, zip };
