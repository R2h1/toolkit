/*!
 * edmi-toolkit v1.0.14
 * (c) 2023-2023 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

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
var toObject = function (arr, key) { return arr.reduce(function (acc, item) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[item[key]] = item, _a)));
}); };
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
var isEqual = function (a, b, isConsiderOrder) {
    if (isConsiderOrder === void 0) { isConsiderOrder = false; }
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
var countBy = function (arr, iteratee) {
    var map = new Map();
    return arr.reduce(function (prev, curr) {
        var value = iteratee(curr);
        if (prev.has(value)) {
            prev.set(value, prev.get(value) + 1);
        }
        else {
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
var countVal = function (arr, val) { return arr.filter(function (item) { return item === val; }).length; };
/**
 * 按步长 step 创建指定范围的递增数字数组, 不包括max
 * @param min
 * @param max
 * @returns
 * @example
 *   range(5, 10); // [5, 6, 7, 8, 9]
 *   range(5, 10, 3); // [5, 9]
 */
var range = function (min, max, step) {
    if (step === void 0) { step = 1; }
    return Array.from({ length: Math.ceil((max - min) / step) }, function (_, i) { return min + i * step; });
};
/**
 * 对数组 arr 置空
 * @param arr
 * @example
 *   empty([1, 2]); // []
 */
var empty = function (arr) {
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
var accumulate = function (arr) { return arr.reduce(function (acc, cur, i) {
    if (i === 0) {
        return [cur];
    }
    return __spreadArray(__spreadArray([], acc, true), [acc[i - 1] + cur], false);
}, []); };
/**
 * 将字符串数组转为number数组
 * @param arr
 * @returns
 * @example
 *   toNumbers(['2', '3', '4']); // [2, 3, 4]
 */
var toNumbers = function (arr) { return arr.map(Number); };
/**
 * 计算笛卡尔积，即所有可能的组合
 * @param arrays
 * @returns
 * @example
 *   cartesian([1, 2], [3, 4]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
 */
var cartesian = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (acc, arr) { return acc.flatMap(function (x) { return arr.map(function (y) { return __spreadArray(__spreadArray([], x, true), [y], false); }); }); }, [[]]);
};
/**
 * 查找数组的最后一个匹配 predicate 的索引，找不到返回 -1
 * @param arr
 * @param predicate
 * @returns
 * @example
 *   lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4
 *   lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6); // 5
 */
var lastIndex = function (arr, predicate) {
    if (!Array.isArray(arr)) {
        return -1;
    }
    for (var i = arr.length - 1; i >= 0; i -= 1) {
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
var findLongest = function (words) {
    if (!Array.isArray(words) || words.length === 0) {
        return -1;
    }
    return words.reduce(function (prev, curr) {
        var len = curr.length;
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
var compareBy = function (arr, iteratee, compare) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return -1;
    }
    var res = arr.reduce(function (iterPrev, curr, i) {
        var iterCurr = iteratee(curr);
        var prev = iterPrev[0];
        if (compare(iterCurr, prev) > 0) {
            return [iterCurr, i];
        }
        return prev;
    }, [iteratee(arr[0]), 0]);
    return res[1];
};
/**
 * 获取数值数组中的最大值
 * @param arr
 * @returns
 * @example
 *   max([1, 3, 5, 7, 9, 2, 4, 6, 8]); // 9
 */
var max = function (arr) { return Math.max.apply(Math, arr); };
/**
 * 获取数值数组中的最小值
 * @param arr
 * @returns
 * @example
 *   min([2, 3, 5, 7, 9, 1, 4, 6, 8]); // 1
 */
var min = function (arr) { return Math.min.apply(Math, arr); };
/**
 * 展平嵌套数组
 * @param arr
 * @returns
 * @example
 *   flat(['cat', ['lion', 'tiger']]); // ['cat', 'lion', 'tiger']
 *   flat(['cat', ['lion', 'tiger', ['dog']]]); // ['cat', 'lion', 'tiger', ['dog']]
 *   flat(['cat', ['lion', 'tiger', ['dog']]], 2); // ['cat', 'lion', 'tiger', 'dog']
 */
var flat = function (arr, depth) {
    if (depth === void 0) { depth = 1; }
    if (!Array.isArray(arr)) {
        return [arr];
    }
    if (depth < 1) {
        return arr.slice();
    }
    return arr.reduce(function (prev, curr) { return __spreadArray(__spreadArray([], prev, true), flat(curr, depth - 1), true); }, []);
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
var getConsecutiveArrays = function (arr, size) { return (size > arr.length
    ? []
    : arr.slice(size - 1).map(function (_, i) { return arr.slice(i, size + i); })); };
/**
 * 找到数组中离 n 最近的数
 * @param arr
 * @param n
 * @returns
 * @example
 *   closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
 */
var closest = function (arr, n) {
    var index = compareBy(arr, function (value) { return Math.abs(n - value); }, function (iterCur, iterPrev) { return iterPrev - iterCur; });
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
var indices = function (arr, value) { return (arr.reduce(function (acc, curr, i) { return (curr === value ? __spreadArray(__spreadArray([], acc, true), [i], false) : acc); }, [])); };
/**
 * 获取数组的第 nth 元素;
 * @param arr
 * @param nth
 * @returns
 * @example
 *   getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]
 *   getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [3, 6, 9]
 */
var getNthItems = function (arr, nth) { return arr.filter(function (_, i) { return i % nth === nth - 1; }); };
/**
 * 字母表
 */
var alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
/**
 * 数组求和
 * @param arr
 * @returns
 * @example
 *   sum([1, 2, 3]); // 6
 *   sum([1, 2]); // 3
 */
var sum = function (arr) { return arr.reduce(function (a, b) { return a + b; }, 0); };
/**
 * 获取数组的平均值
 * @param arr
 * @returns
 * @example
 *   average([1, 2, 3]); // 2
 *   average([1, 2]); // 1.5
 */
var average = function (arr) { return sum(arr) / arr.length; };
/**
 * 获取所有数组的交集
 * @param a
 * @param arr
 * @returns
 * @example
 *   getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]
 *   getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]); // [3]

 */
var getIntersection = function (a) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    return Array.from(new Set(a)).filter(function (v) { return arr.every(function (b) { return b.includes(v); }); });
};
/**
 * 获取所有子集
 * @param arr
 * @returns
 * @example
 *   getSubsets([1, 2]); // [[], [1], [2], [1, 2]]
 *   getSubsets([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 */
var getSubsets = function (arr) { return (arr.reduce(function (prev, curr) { return prev.concat(prev.map(function (k) { return k.concat(curr); })); }, [[]])); };
/**
 * 检查 a 是不是 b 的子集
 * @param a
 * @param b
 * @returns
 */
var isSubset = function (a, b) { return new Set(b).size === new Set(b.concat(a)).size; };
/**
 * 获取数组中元素的排名
 * @param arr
 * @returns
 * @example
 *   ranking([80, 65, 90, 50]); // [2, 3, 1, 4]
 *   ranking([80, 80, 70, 50]); // [1, 1, 3, 4]
 */
var ranking = function (arr) { return arr.map(function (x) { return arr.filter(function (y) { return y > x; }).length + 1; }); };
/**
 * 获取数组的唯一值
 * @param arr
 * @returns
 * @example
 *   unique([80, 65, 90, 50]); // [80, 65, 90, 50]
 *   unique([80, 80, 70, 50]); // [80, 70, 50]
 */
var unique = function (arr) { return arr.filter(function (el, i, array) { return array.indexOf(el) === i; }); };
/**
 * 求数组的并集（集合的性质之一是互异性）
 * @param arr
 * @returns
 * @example
 *   // 或者 const union = <T,_>(...arr: T[][]): T[] => [...new Set(arr.flat())];
 *   union([1, 2], [2, 3], [3]); // [1, 2, 3]
 */
var union = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (acc, curr) { return acc.concat(curr.filter(function (val) { return !acc.includes(val); }), []); });
};
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
var groupBy = function (arr, key) { return (arr.reduce(function (acc, item) {
    var k = item[key];
    if (acc[k]) {
        acc[k].push(item);
    }
    else {
        acc[k] = [item];
    }
    return acc;
}, {})); };
/**
 * 在数组元素之间穿插新元素
 * @param arr
 * @param s
 * @returns
 * @example
 *   intersperse(['A', 'B', 'C'], '/'); // ['A', '/', 'B', '/', 'C']
 */
var intersperse = function (arr, val) { return arr.reduce(function (acc, curr, i) {
    if (i === arr.length - 1) {
        return acc.concat(curr);
    }
    return acc.concat(curr, JSON.parse(JSON.stringify(val)));
}, []); };
/**
 * 按条件划分数组
 * @param arr
 * @param criteria
 * @returns
 * @example
 *   partition([1, 2, 3, 4, 5], (n) => n % 2); // [[1, 3, 5], [2, 4]]
 */
var partition = function (arr, criteria) { return arr.reduce(function (acc, item) {
    acc[criteria(item) ? 0 : 1].push(item);
    return acc;
}, [[], []]); };
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
var merge = function (a, b, deDuplication) {
    if (deDuplication === void 0) { deDuplication = false; }
    return (deDuplication ? union(a, b) : a.concat(b));
};
/**
 * 移除数组中的所有重复值
 * @param arr
 * @returns
 * @example
 *   removeDuplicate(['h', 'e', 'l', 'l', 'o']); //  ['h', 'e', 'o']
 */
var removeDuplicate = function (arr) { return arr.filter(function (item) { return arr.indexOf(item) === arr.lastIndexOf(item); }); };
/**
 * 重复数组 n 次
 * @param arr
 * @param n
 * @returns
 * @example
 *   repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
 */
var repeat = function (arr, n) { return [].concat.apply([], new Array(n).fill(__spreadArray([], arr, true))); };
/**
 * 打乱数组
 * @param arr
 * @returns
 * @example
 *   shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
 */
var shuffle = function (arr) { return arr.sort(function () { return 0.5 - Math.random(); }); };
/**
 * 移除数组中的 falsy 值
 * @param arr
 * @returns
 * @example
 *   removeFalsy([0, 'a', '', NaN, true, 5, undefined, false]); // ['a', true, 5, ]
 */
var removeFalsy = function (arr) { return arr.filter(Boolean); };
/**
 * 数组拆分成块
 * @param arr
 * @param size
 * @returns
 * @example
 *   chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
 */
var chunk = function (arr, size) { return (arr.reduce(function (acc, curr, i) {
    if (i % size) {
        acc[acc.length - 1].push(curr);
    }
    else {
        acc.push([curr]);
    }
    return acc;
}, [])); };
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
var sortBy = function (arr, k) { return (__spreadArray([], arr, true).sort(function (a, b) {
    if (a[k] > b[k]) {
        return 1;
    }
    if (a[k] < b[k]) {
        return -1;
    }
    return 0;
})); };
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
var transpose = function (matrix) { return matrix[0].map(function (_, i) { return matrix.map(function (row) { return row[i]; }); }); };
/**
 * 压缩数组
 * @param arr
 * @returns
 * @example
 *   zip(['a', 'b', 'c'], [1, 2, 3]); // [['a', 1], ['b', 2], ['c', 3]]
 */
var zip = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var maxLen = max(arr.map(function (a) { return a.length; }));
    return Array.from({ length: maxLen }, function (_, i) { return arr.map(function (a) { return a[i]; }); });
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
var unzip = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (acc, curr) {
        curr.forEach(function (val, i) {
            acc[i].push(val);
        });
        return acc;
    }, Array.from({ length: max(arr.map(function (a) { return a.length; })) }, function () { return []; }));
};
/**
 * 随机获取数组中的一个元素
 * @param arr
 * @returns
 * @example
 *   random([1, 2, 3, 4, 5]); // 2
 */
var random = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
/**
 * 交换数组下标 i 和 下标 j 的元素， 并返回一个新数组
 * @param a
 * @param i
 * @param j
 * @returns
 * @example
 *   swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]
 */
var swapItems = function (a, i, j) {
    var len = a.length;
    if ((i < 0 || i > len - 1) || (j < 0 || j > len - 1)) {
        return a;
    }
    return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], a.slice(0, i), true), [a[j]], false), a.slice(i + 1, j), true), [a[i]], false), a.slice(j + 1), true);
};
/**
 * 将值转化为数组
 * @param value
 * @returns
 * @example
 *  castArray(1); // [1]
 *  castArray([1, 2, 3]); // [1, 2, 3]
 */
var castArray = function (value) {
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
var isEmpty = function (arr) {
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
var clone = function (arr) { return JSON.parse(JSON.stringify(arr)); };
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
var filterAdvanced = function (arr, condition, type) {
    var newCondition = type === 'include' ? condition : function (i) { return !condition(i); };
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
var complement = function (type, a) {
    var arr = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arr[_i - 2] = arguments[_i];
    }
    try {
        return Array.from(new Set(a)).filter(function (v) { return arr.every(function (b) {
            /** 绝对补集(如果集合 b 中存在不是集合 a 中的元素，则直接返回空集 */
            if (type === 'absolute' && b.some(function (x) { return !a.includes(x); })) {
                throw new TypeError("".concat(type, " complementSet: b is not subset of a"));
            }
            return !b.includes(v);
        }); });
    }
    catch (e) {
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
var hasDuplicateValues = function (arr) { return new Set(arr).size !== arr.length; };
/**
 * 检查数组中的所有项是否相等
 * @param arr
 * @returns
 * @example
 *   areEqual([1, 2, 3, 4]); // false
 *   areEqual(['hello', 'hello', 'hello']); // true
 */
var areEqual = function (arr) { return new Set(arr).size === 1; };
/**
 * 检查所有数组元素是否都等于给定值
 * @param arr
 * @param value
 * @returns
 * @example
 *   isEqual(['foo', 'foo'], 'foo'); // true
 *   isEqual(['foo', 'bar'], 'foo'); // false
 */
var isEqualSomeValue = function (arr, value) { return arr.every(function (item) { return item === value; }); };

/**
 * 1. history.back(); // 返回上一个页面; Or history.go(-1);
 */
/**
 * 检查一个元素是否是另一个元素的后代
 * @param child
 * @param parent
 * @returns
 */
var isDescendant = function (child, parent) { return parent.contains(child); };
/**
 * 检查是否支持触摸事件
 * @returns
 */
var touchSupported = function () {
    if ('ontouchstart' in window || ((window === null || window === void 0 ? void 0 : window.DocumentTouch) && document instanceof window.DocumentTouch)) {
        return true;
    }
    return false;
};
/**
 * 检查某元素是否获得焦点
 * @param ele
 * @returns
 */
var hasFocus = function (ele) { return ele === (document === null || document === void 0 ? void 0 : document.activeElement); };
/**
 * 检测是否 Internet Explorer 浏览器
 * @returns
 */
var isIE = !!(document === null || document === void 0 ? void 0 : document.documentMode);
/**
 * 检测是否 MacOS 浏览器
 * @returns
 */
var isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator === null || navigator === void 0 ? void 0 : navigator.platform);
/**
 * 检查用户是否滚动到页面底部
 * @returns
 */
var isAtBottom = function () {
    var docElement = document.documentElement;
    return docElement.clientHeight + window.scrollY >= docElement.scrollHeight;
};
/**
 * 获取一个元素的所有兄弟姐妹
 * @param ele
 * @returns
 */
var siblings = function (ele) { return (ele.parentNode
    ? Array.from(ele.parentNode.children).filter(function (child) { return child !== ele; })
    : []); };
/**
 * 获取元素相对于文档的位置
 * @param ele
 * @returns
 */
var getPosition = function (ele) {
    var rect = ele.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
};
/**
 * 获取选中的文本
 * @returns
 */
var getSelectedText = function () { return String(window.getSelection()); };
/**
 * 隐藏一个元素
 * @param ele
 * @returns
 */
var hide = function (ele, type) {
    var element = ele;
    if (type === 'display') {
        element.style.display = 'none';
        return;
    }
    if (type === 'visibility') {
        element.style.visibility = 'hidden';
        return;
    }
    element.hidden = true;
};
/**
 * 显示一个元素
 * @param ele
 * @returns
 */
var show = function (ele, type) {
    var element = ele;
    if (type === 'display') {
        element.style.display = '';
        return;
    }
    if (type === 'visibility') {
        element.style.visibility = 'visible';
        return;
    }
    element.hidden = false;
};
/**
 * toggle 一个元素
 * @param ele
 * @returns
 */
var toggle = function (ele, type) {
    var element = ele;
    if (type === 'display') {
        element.style.display = element.style.display === 'none' ? '' : 'none';
        return;
    }
    if (type === 'visibility') {
        element.style.visibility = element.style.visibility === 'visible' ? 'visible' : 'hidden';
        return;
    }
    element.hidden = !element.hidden;
};
/**
 * 在元素指定位置插入内容(元素或文本或 html)
 * @param ele
 * @param content
 * @param position
 * @returns
 */
var insert = function (ele, content, position, type) {
    if (position === void 0) { position = 'afterend'; }
    if (type === void 0) { type = 'Element'; }
    var insertAdjacentFn = "insertAdjacent".concat(type);
    ele[insertAdjacentFn](position, content);
};
/**
 * 跳转页面
 * @param url 如果 url 和当前页面相同,即相当于刷新
 * @returns
 */
var goTo = function (url) {
    window.location.href = url;
};
/**
 * 滚动到顶部
 * @returns
 */
var toTop = function () { return window.scrollTo(0, 0); };
/**
 * 序列化表单数据
 * @param formEle
 * @returns
 */
var serialize = function (formEle) {
    var data = Array.from(new FormData(formEle));
    return data.reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        if (acc[key]) {
            acc[key] = castArray(acc[key]).concat(value);
        }
        else {
            acc[key] = value;
        }
        return acc;
    }, {});
};
/**
 * 从给定文本 html 中去除 HTML
 * @param html
 * @returns
 */
var stripHtml = function (html) { return new DOMParser().parseFromString(html, 'text/html').body.textContent || ''; };
/**
 * 替换元素
 * @param html
 * @returns
 */
var replace = function (ele, newEle) { return (ele.parentNode
    ? ele.parentNode.replaceChild(newEle, ele)
    : null); };

/**
 * 将 AM PM 后缀添加到小时
 * @param h
 * @returns
 * @example
 *   suffixAmPm(0); // '12am'
 *   suffixAmPm(5); // '5am'
 *   suffixAmPm(12); // '12pm'
 *   suffixAmPm(15); // '3pm'
 *   suffixAmPm(23); // '11pm'
 */
var suffixAmPm = function (h) { return "".concat(h % 12 === 0 ? 12 : h % 12).concat(h < 12 ? 'am' : 'pm'); };
/**
 * 计算两个日期之间的月数
 * @param startDate
 * @param endDate
 * @returns
 * @example
 *   monthDiff(new Date('2020-01-01'), new Date('2021-01-01')); // 12
 */
var monthDiff = function (startDate, endDate) { return Math.max(0, (endDate.getFullYear()
    - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth()); };
/**
 * 判断日期A是否晚于日期B
 * @param a
 * @param b
 * @returns
 * @example
 *   compare(new Date('2020-03-30'), new Date('2020-01-01')); // true
 */
var compare = function (a, b) { return a.getTime() > b.getTime(); };
/**
 * 将日期转换为 YYYY-MM-DD 格式
 * @param date
 * @returns
 * @example
 *   formatYmd(new Date()); // 2020-05-06
 */
var formatYmd = function (date) { return date.toISOString().slice(0, 10); };
/**
 * 计算两个日期之间相差的天数
 * @param date
 * @param otherDate
 * @returns
 */
var diffDays = function (date, otherDate) { return Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / (1000 * 60 * 60 * 24)); };
/**
 * 获取明年此时的 date
 */
var getPlusOneYear = function () {
    var plusOneYear = (function (d) { return new Date(d.setFullYear(d.getFullYear() + 1)); })(new Date());
    return plusOneYear;
};
/**
 * 获取明日此时的 date
 */
var getTomorrow = function () { return new Date(new Date().valueOf() + 1000 * 60 * 60 * 24); };
/**
 * 获取昨日此时的 date
 */
var getYesterday = function () { return new Date(new Date().valueOf() - 1000 * 60 * 60 * 24); };
/**
 * 从日期中提取年、月、日、时、分、秒和毫秒
 * @param date
 * @returns
 */
var extract = function (date) { return date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1); };
/**
 * 将秒数转换为 hh:mm:ss 格式
 * @param s
 * @returns
 * @example
 *  formatSeconds(200); // 00:03:20
 *  formatSeconds(500); // 00:08:20
 */
var formatSeconds = function (s) { return new Date(s * 1000).toISOString().substring(11, 19); };
/**
 * 以秒为单位获取当前时间戳
 * @returns
 * @example
 *   ts() // 1685089676
 */
var ts = function () { return Math.floor(new Date().getTime() / 1000); };
/**
 * 从日期获取一年中的第几天
 * @param date
 * @returns
 * @example
 *   dayOfYear(new Date(2020, 04, 16)); // 137
 */
var dayOfYear = function (date) { return Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24)); };
/**
 * 获取 d 所在月份的第一个 date
 * @param d
 * @returns
 * @example
 *   getFirstDate() // Date { Mon May 01 2023 00:00:00 GMT+0800 (中国标准时间) }
 */
var getFirstDate = function (d) {
    if (d === void 0) { d = new Date(); }
    return new Date(d.getFullYear(), d.getMonth(), 1);
};
/**
 * 格式化给定语言环境的日期
 * @param date
 * @param locale
 * @returns
 * @example
 *   format(new Date(), 'pt-BR'); // 06/05/2020
 */
var format = function (date, locale) { return new Intl.DateTimeFormat(locale).format(date); };
/**
 * 获取日期的月份名称
 * @param date
 * @returns
 */
var getMonthName = function (date) { return [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', ' November', 'December'
][date.getMonth()]; };
/**
 * 获取日期的星期
 * @param date
 * @returns
 */
var getWeekday = function (date) { return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]; };
/**
 * 检查日期是否为工作日
 * @param date
 * @returns
 */
var isWeekday = function (date) {
    if (date === void 0) { date = new Date(); }
    return date.getDay() % 6 !== 0;
};
/**
 * 检查日期是否为周末
 * @param date
 * @returns
 */
var isWeekend = function (date) {
    if (date === void 0) { date = new Date(); }
    return !isWeekday(date);
};
/**
 * 获取日期所在的季度
 * @param d
 * @returns
 * @example
 *   getQuarter() // 2;
 */
var getQuarter = function (d) {
    if (d === void 0) { d = new Date(); }
    return Math.ceil((d.getMonth() + 1) / 3);
};
/**
 * 获取 d 所在月份的最后一个 date
 * @param d
 * @returns
 * @example
 *   getLastDate // Date { Mon May 01 2023 00:00:00 GMT+0800 (中国标准时间) }
 */
var getLastDate = function (d) {
    if (d === void 0) { d = new Date(); }
    return new Date(d.getFullYear(), d.getMonth() + 1, 0);
};
/**
 * 获取给定月份的天数
 * @param month
 * @param year
 * @returns
 * @example
 */
var daysInMonth = function (month, year) { return new Date(year, month, 0).getDate(); };
/**
 * 获取时区字符串
 * @returns
 * @example
 *   getTimezone(); // 'Asia/Saigon'
 */
var getTimezone = function () { return Intl.DateTimeFormat().resolvedOptions().timeZone; };
/**
 * 从十进制时间获取小时和分钟
 * @param value
 * @returns
 * @example
 *   getHoursAndMinutes(4.5); //[4, 30]
 *   getHoursAndMinutes(7.89); // [7, 53]
 */
var getHoursAndMinutes = function (value) { return [Math.floor(value),
    Math.floor((value * 60) % 60)]; };
/**
 * 检查是否为闰年
 * @param year
 * @returns
 */
var isLeapYear = function (year) { return new Date(year, 1, 29).getDate() === 29; };
/**
 * 获取一年中的总天数
 * @param year
 * @returns
 * @example
 *  numberOfDay(2008); // 366
 *  numberOfDay(2009); // 365
 */
var numberOfDays = function (year) { return (isLeapYear(year) ? 366 : 365); };
/**
 * 对日期数组进行降序
 * @param arr
 * @returns
 */
var sortDescending = function (arr) { return arr.sort(function (a, b) { return a.getTime() - b.getTime(); }); };
/**
 * 对日期数组进行升序
 * @param arr
 * @returns
 */
var sortAscending = function (arr) { return arr.sort(function (a, b) { return b.getTime() - a.getTime(); }); };
/**
 * 重置当前日期至午夜
 * @returns
 */
var midnightOfToday = function () { return new Date(new Date().setHours(0, 0, 0, 0)); };
/**
 * 检查日期是否在两个日期之间
 * @param date
 * @param min
 * @param max
 * @returns
 */
var isBetween = function (date, min, max) { return date.getTime() >= min.getTime() && date.getTime() <= max.getTime(); };
/**
 * 检查日期是否为今天
 * @param date
 * @returns
 */
var isToday = function (date) { return date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10); };
/**
 * 检查日期是否在当年
 * @param date
 * @returns
 */
var isCurrentYear = function (date) { return date.getUTCFullYear() === new Date().getUTCFullYear(); };
/**
 * 验证公历日期
 * @param m
 * @param d
 * @param y
 * @returns
 */
var isValidDate = function (m, d, y) { return m >= 0 && m <= 11
    && y > 0 && y < 32768 && d > 0 && d <= new Date(y, m, 0).getDate(); };

/**
 * 检查一个值是否是一个函数
 * @param val
 * @returns
 * @example
 *   isFunction(function () {}); // true
 *   isFunction(function* () {}); // true
 *   isFunction(async function () {}); // true
 */
var isFunction = function (val) { return typeof val === 'function'; };
/**
 * 检查一个值是否是一个 async 函数(即带 async 标记的函数)
 * @param val
 * @returns
 * @example
 *   isAsyncFunction(function () {}); // false
 *   isAsyncFunction(function* () {}); // false
 *   isAsyncFunction(async function () {}); // true
 */
// val[Symbol.toStringTag] === 'AsyncFunction';
var isAsyncFunction = function (val) { return Object.prototype.toString.call(val) === '[object AsyncFunction]'; };
/**
 * 检查一个值是否是一个生成器函数
 * @param v
 * @returns
 * @example
 *   isGeneratorFunction(function () {}); // false
 *   isGeneratorFunction(function* () {}); // true
 */
// val[Symbol.toStringTag] === 'GeneratorFunction';
var isGeneratorFunction = function (val) { return Object.prototype.toString.call(val) === '[object GeneratorFunction]'; };
/**
 * 迭代 handler 的函数
 * @param x 待处理的值
 * @returns
 * @example
 *   // First example
    const getPercentNumber = (str) =>
        boxHandler(str)
            .next((str) => str.replace(/\%/, ''))
            .next((str) => parseFloat(str))
            .done((res) => res * 0.01);

    getPercentNumber('50%'); // 0.5

    // Second example
    const getMoney = (price) => Number.parseFloat(price.replace(/\$/, ''));
    const getPercent = (percent) => Number.parseFloat(percent.replace(/\%/)) * 0.01;

    const getDiscountPrice = (price, discount) =>
        boxHandler(getMoney(price))
            .done((cents) => boxHandler(getPercent(discount)).next((save) => cents - cents * save))
            .done((res) => res);

    getDiscountPrice('$6.00', '20%'); // 4.8
 */
var boxHandler = function (x) { return ({
    next: function (f) { return boxHandler(f(x)); },
    done: function (f) { return f(x); }
}); };
/**
 * 函数管道(从左到右顺序执行函数)
 * @param fns
 * @returns
 * @example
 *   const lowercase = (str) => str.toLowerCase();
 *   const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
 *   const reverse = (str) => str.split('').reverse().join('');
 *   const fn = pipe(lowercase, capitalize, reverse);
 *   // We will execute `lowercase`, `capitalize` and `reverse` in order
 *   fn('Hello World') === 'dlrow olleH';
 */
var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (x) { return fns.reduce(function (y, f) { return f(y); }, x); };
};
/**
 * 函数组合(从右到左顺序执行函数)
 * @param fns
 * @returns
 * @example
 *   const lowercase = (str) => str.toLowerCase();
 *   const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
 *   const reverse = (str) => str.split('').reverse().join('');
 *   const fn = compose(reverse, capitalize, lowercase);
 *   // We will execute `lowercase`, `capitalize` and `reverse` in order
 *   fn('Hello World') === 'dlrow olleH';
 */
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (x) { return fns.reduceRight(function (y, f) { return f(y); }, x); };
};
/**
 * 创建一个接受第一个参数的函数
 * @param fn
 * @returns
 * @example
 *   ['1', '2', '3', '4', '5'].map(unary(parseInt)); // [1, 2, 3, 4, 5]
 */
var unary = function (fn) { return function (arg) { return fn(arg); }; };
/**
 * 空函数
 */
var noop = function () { };
/**
 * 高级柯里化一个函数
 * @param fn
 * @param args
 * @returns
 * @example
 *   const sum = (a, b, c) => a + b + c;
 *   curry(sum)(1)(2)(3); // 6
 *   curry(sum)(1, 2, 3); // 6
 *   curry(sum, 1)(2, 3); // 6
 *   curry(sum, 1)(2)(3); // 6
 *   curry(sum, 1, 2)(3); // 6
 *   curry(sum, 1, 2, 3); // 6
 */
var curry = function (fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (fn.length <= args.length) {
        return fn.apply(void 0, args);
    }
    return curry.bind.apply(curry, __spreadArray([null, fn], args, false));
};
/**
 * 推迟一个函数的评估
 * @param fn
 * @returns
 * @example
 *   const heavyComputation = (x) => doStuff(x);
 *   const unnecessarySlow = manyThings.map(heavyComputation).find((result) => result.criteria);
 *   const probablyFaster = manyThings.map(thunkfy(heavyComputation)).find(
 *     (thunk) => thunk().criteria);
 */
var thunkfy = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function () { return fn.apply(void 0, args); };
}; };
/**
 * 执行一个函数仅一次
 * @param fn
 * @returns
 * @example
 *   let n = 0;
 *   const incOnce = once(() => ++n);
 *   incOnce(); // n = 1
 *   incOnce(); // n = 1
 *   incOnce(); // n = 1
 */
var once = function (fn) {
    var ran = false;
    var res = null;
    var executeOnce = function () {
        if (ran) {
            return res;
        }
        ran = true;
        res = fn();
        return res;
    };
    return executeOnce;
};
/**
 * 翻转函数参数
 * @param fn
 * @returns
 * @example
 *   const isParent = (parent, child) => parent.children.includes(child);
 *   const isChild = flip(isParent);
 */
var flip = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return fn.apply(void 0, args.reverse());
}; };
/**
 * 逻辑异或
 * @param a
 * @param b
 * @returns
 * @example
 *   xor(true, true); // false
 *   xor(false, false); // false
 *   xor(true, false); // true
 *   xor(false, true); // true
 */
var xor = function (a, b) { return (a && !b) || (!a && b); };
/**
 * 记忆一个函数
 * @param fn
 * @returns
 * @example
 *   // Calculate Fibonacci numbers
 *   const fibo = memoize((n) => (n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2)));
 *   fibo(1); // 1
 *   fibo(2); // 1
 *   fibo(3); // 2
 *   fibo(4); // 3
 *   fibo(5); // 5
 *   fibo(6); // 8
 */
var memoize = function (fn) {
    var cache = Object.create(null);
    var memoizedFn = function (arg) {
        var result = cache[arg];
        if (result) {
            return result;
        }
        cache[arg] = fn(arg);
        return cache[arg];
    };
    return memoizedFn;
};
/**
 * 恒等函数;
 * @param x
 * @returns
 */
var identity = function (x) { return x; };
/**
 * 偏函数
 * @param fn
 * @param a
 * @returns
 * @example
 *   const sum = (x, y) => x + y;
 *   const inc = partial(sum, 1);
 *   inc(9); // 10
 */
var partial = function (fn) {
    var a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        a[_i - 1] = arguments[_i];
    }
    return function () {
        var b = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            b[_i] = arguments[_i];
        }
        return fn.apply(void 0, __spreadArray(__spreadArray([], a, false), b, false));
    };
};
/**
 * 反柯里化函数
 * @param fn
 * @param n
 * @returns
 * @example
 *   const sum = (a) => (b) => (c) => a + b + c;
 *   uncurry(sum, 1)(1)(2)(3); // 6
 *   uncurry(sum, 2)(1, 2)(3); // 6
 *   uncurry(sum, 3)(1, 2, 3); // 6
 */
var uncurry = function (fn, n) {
    if (n === void 0) { n = 1; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var outArgs = args.slice(0, n);
        return (function (acc) { return function (innerArgs) { return innerArgs.reduce(function (x, y) { return x(y); }, acc); }; })(fn)(outArgs);
    };
};

/**
 * 将弧度转换为度数
 * @param rad
 * @returns
 */
var radsToDegs = function (rad) { return (rad * 180.0) / Math.PI; };
/**
 * 将度数转换为弧度
 * @param rad
 * @returns
 */
var degsToRads = function (deg) { return (deg * Math.PI) / 180.0; };
/**
 * 计算由两点定义的直线的角度;
 * @param p1
 * @param p2
 * @returns
 */
var getAngleOfLine = function (p1, p2, type) {
    if (type === void 0) { type = 'radian'; }
    var radian = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    if (type === 'degrees') {
        return radsToDegs(radian);
    }
    return radian;
};
/**
 * 计算两个数之间的线性插值
 * @param a
 * @param b
 * @param amount
 * @returns
 */
var lerp = function (a, b, amount) { return (1 - amount) * a + amount * b; };
/**
 * 计算两点之间的中点
 * @param p1
 * @param p2
 * @returns
 */
var midpoint = function (p1, p2) { return [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2]; };
/**
 * 检查一个点是否在矩形内
 * @param point
 * @param rect
 * @returns
 */
var isInside = function (point, rect) { return point.x > rect.x1
    && point.x < rect.x2
    && point.y > rect.y1
    && point.y < rect.y2; };
/**
 * 检查一个矩形 a 是否包含另一个矩形 b
 * @param a
 * @param b
 * @returns
 */
var contains = function (a, b) { return a.x1 <= b.x1
    && a.y1 <= b.y1
    && a.x2 >= b.x2
    && a.y2 >= b.y2; };
/**
 * 计算两点之间的距离
 * @param p1
 * @param p2
 * @returns
 */
var distance = function (p1, p2) { return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)); };
/**
 * 检查一个矩形是否与另一个矩形存在重叠部分;
 * @param a
 * @param b
 * @returns
 */
var overlaps = function (a, b) { return (a.x1 < b.x2 && b.x1 < a.x2)
    || (a.y1 < b.y2 && b.y1 < a.y2); };
/**
 * 在范围内标准化一个数字
 * @param value
 * @param min
 * @param max
 * @returns
 */
var normalizeRatio = function (value, min, max) { return (value - min) / (max - min); };
/**
 * 将数字舍入到给定值的最接近倍数
 * @param value
 * @param nearest 倍数
 * @returns
 *   roundNearest(100, 30); // 90
 *   roundNearest(200, 30); // 210
 *   roundNearest(200, 40); // 200
 */
var roundNearest = function (value, nearest) { return Math.round(value / nearest) * nearest; };

/**
 * 检查多个对象是否相等;
 * @param objects
 * @returns
 * @example
 *   isEqual({ foo: 'bar' }, { foo: 'bar' }); // true
 *   isEqual({ foo: 'bar' }, { bar: 'foo' }); // false
 */
var isObjsEqual = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return objects.every(function (obj) { return JSON.stringify(obj) === JSON.stringify(objects[0]); });
};
/**
 * 通过键返回具有唯一值的对象，键值相同的后面会覆盖前面的
 * @param arrObj
 * @param keyUnique
 * @returns
 * @example
 *   getUniqueArrObj([
 *    { k: 1, e: 1 }, { k: 1, e: 1 }, { k: 3, e: 1 }], 'k'); // [{ k: 1, e: 1 }, { k: 3, e: 1 }]
 */
var getUniqueArrObj = function (arrObj, keyUnique) { return Array.from(new Map(arrObj.map(function (item) { return [item[keyUnique], item]; })).values()); };
/**
 * 从对象数组中提取某属性值数组
 * @param objs
 * @param property
 * @returns
 * @example
 *   pluck(
       [
          { name: 'John', age: 20 },
          { name: 'Smith', age: 25 },
          { name: 'Peter', age: 30 },
       ],
       'name'
     ); // ['John', 'Smith', 'Peter']
 */
var pluck = function (objs, property) { return objs.map(function (obj) { return obj[property]; }); };
/**
 * 不可变地重命名对象键
 * @param keysMap
 * @param obj
 * @returns
 * @example
 *   const obj = { a: 1, b: 2, c: 3 };
 *   const keysMap = { a: 'd', b: 'e', c: 'f' };
 *   renameKeys(keysMap, obj); // { d: 1, e: 2, f: 3 }
 */
var renameKeys = function (keysMap, obj) { return Object.keys(obj)
    .reduce(function (acc, key) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[keysMap[key] || key] = obj[key], _a)));
}, {}); };
/**
 * 删除对象的一部分属性
 * @param obj
 * @param keys
 * @returns
 * @example
 *   omit({ a: '1', b: '2', c: '3' }, ['a', 'b']); // { c: '3' }
 */
var omit = function (obj, keys) { return Object.keys(obj)
    .filter(function (k) { return !keys.includes(k); })
    .reduce(function (res, k) {
    var _a;
    return Object.assign(res, (_a = {}, _a[k] = obj[k], _a));
}, {}); };
/**
 * 反转对象的键和值
 * @param obj
 * @returns
 * @example
 *   invert({ a: '1', b: '2', c: '3' }); // { 1: 'a', 2: 'b', 3: 'c' }
 */
var invert = function (obj) { return Object.fromEntries(Object.entries(obj).map(function (_a) {
    var k = _a[0], v = _a[1];
    return [v, k];
})); };
/**
 * 选择对象属性的子集
 * @param obj
 * @param keys
 * @returns
 * @example
 *   pick({ a: '1', b: '2', c: '3' }, ['a', 'b']); // { a: '1', b: '2' }
 */
var pick = function (obj, keys) { return Object.keys(obj)
    .filter(function (k) { return keys.includes(k); })
    .reduce(function (res, k) {
    var _a;
    return Object.assign(res, (_a = {}, _a[k] = obj[k], _a));
}, {}); };
/**
 * 从对象中删除所有值为 null 和 undefined 的属性
 * @param obj
 * @returns
 * @example
 *   removeNullUndefined({
       foo: null,
       bar: undefined,
       fuzz: 42,
     }); // { fuzz: 42 }
 */
var removeNullUndefined = function (obj) { return Object.entries(obj)
    .filter(function (_a) {
    var v = _a[1];
    return v != null;
})
    .reduce(function (acc, _a) {
    var _b;
    var k = _a[0], v = _a[1];
    return (__assign(__assign({}, acc), (_b = {}, _b[k] = v, _b)));
}, {}); };
/**
 * 获取对象给定路径的值
 * @param path
 * @param obj
 * @returns
 * @example
 *   getValue('a.b', { a: { b: 'Hello World' } }); // 'Hello World';
 */
var getValue = function (path, obj) { return path.split('.').reduce(function (acc, c) { return acc && acc[c]; }, obj); };
/**
 * 按键进行排序
 * @param obj
 * @returns
 * @example
 *   const colors = {
      white: '#ffffff',
      black: '#000000',
      red: '#ff0000',
      green: '#008000',
      blue: '#0000ff',
    };
    sort(colors);

    // {
    //     black: '#000000',
    //     blue: '#0000ff',
    //     green: '#008000',
    //     red: '#ff0000',
    //     white: '#ffffff',
    // }

 */
var sort = function (obj) { return Object.keys(obj)
    .sort()
    .reduce(function (p, c) {
    // eslint-disable-next-line no-param-reassign
    p[c] = obj[c];
    return p;
}, {}); };
/**
 * 检查一个值是否为普通对象
 * @param v
 * @returns
 * @example
 *   isPlainObject(null); // false
 *   isPlainObject('hello world'); // false
 *   isPlainObject([]); // false
 *   isPlainObject(Object.create(null)); // false
 *   isPlainObject(function () {}); // false
 *   isPlainObject({}); // true
 *   isPlainObject({ a: '1', b: '2' }); // true
 */
var isPlainObject = function (v) { return !!v && typeof v === 'object' && (Object.getPrototypeOf(v) === null || Object.getPrototypeOf(v) === Object.prototype); };
/**
 * 检查一个值是否是一个对象
 * @param v
 * @returns
 * @example
 *   isObject(null); // false
 *   isObject('hello world'); // false
 *   isObject({}); // true
 *   isObject([]); // true
 */
var isObject = function (val) { return val !== null && typeof val === 'object'; };
/**
 * 检查一个对象是否为空
 * @param obj
 * @returns
 */
var isEmptyObj = function (obj) { return JSON.stringify(obj) === '{}'; };

/**
 * 检查代码是否在浏览器中运行
 */
var isRunningInBrowser = typeof window === 'object' && typeof document === 'object';
/**
 * 检查代码是否在 Nodejs 中运行
 */
var isRunningInNodeJS = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
/**
 * 检查代码是否在 Jest 中运行
 */
var isRunningInJest = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;
/**
 * 检测夜间模式
 */
var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
/**
 * 将摄氏度转换为华氏度
 * @param celsius
 * @returns
 * @example
 *   celsiusToFahrenheit(15); // 59
 *   celsiusToFahrenheit(0); // 32
 *   celsiusToFahrenheit(-20); // -4
 */
var celsiusToFahrenheit = function (celsius) { return (celsius * 9) / 5 + 32; };
/**
 * 将华氏度转换为摄氏度
 * @param fahrenheit
 * @returns
 * @example
 *   fahrenheitToCelsius(59); // 15
 *   fahrenheitToCelsius(32); // 0
 */
var fahrenheitToCelsius = function (fahrenheit) { return ((fahrenheit - 32) * 5) / 9; };
/**
 * 清除所有 cookie
 * @returns
 */
var clearCookies = function () { return document.cookie.split(';').forEach(function (c) {
    document.cookie = c.replace(/^ +/, '').replace(/=.*/, "=;expires=".concat(new Date().toUTCString(), ";path=/"));
}); };
/**
 * 将 3 位颜色转换为 6 位颜色
 * @param color
 * @returns
 * @example
 *   toFullHexColor('123'); // '#112233'
 *   toFullHexColor('#123'); // '#112233'
 *   toFullHexColor('#abc'); // '#aabbcc'
 */
var toFullHexColor = function (color) { return "#".concat((color.startsWith('#') ? color.slice(1) : color)
    .split('')
    .map(function (c) { return "".concat(c).concat(c); })
    .join('')); };
/**
 *
 * @param hex
 * @returns
 * @example
 *   hexToRgb('#00ffff'); // "0, 255, 255"
 *   hexToRgb('#0ff'); // "0, 255, 255"
 */
var hexToRgb = function (hex) {
    var _a;
    return String((_a = hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (_, r, g, b) { return "#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b); })
        .substring(1)
        .match(/.{2}/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return parseInt(x, 16); }));
};
/**
 * 将 RGB 颜色转换为十六进制
 * @param red
 * @param green
 * @param blue
 * @returns
 * @example
 *   rgbToHex(0, 255, 255); // '#00ffff'
 */
var rgbToHex = function (red, green, blue) { return "#".concat([red, green, blue].map(function (v) { return v.toString(16).padStart(2, '0'); }).join('')); };
/**
 * 解码 JWT
 * @param token
 * @returns
 * @example
 *   decode(`
       eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
       eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
       joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     `);
    // { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
 */
var decode = function (token) { return decodeURIComponent(atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
    .split('')
    .map(function (c) { return "%".concat(("00".concat(c.charCodeAt(0).toString(16))).slice(-2)); })
    .join('')); };
/**
 * 将 cookie 转换为对象
 */
var cookies = document.cookie
    .split(';')
    .map(function (item) { return item.split('='); })
    .reduce(function (acc, _a) {
    var k = _a[0], v = _a[1];
    acc[k.trim().replace('"', '')] = v;
    return acc;
}, {});
/**
 * 将 URL 参数转换为对象
 * @param query
 * @returns
 * @example
 *   getUrlParams(location.search); // Get the parameters of the current URL
 *   getUrlParams('foo=Foo&bar=Bar'); // { foo: "Foo", bar: "Bar" }
 *   // Duplicate key
 *   getUrlParams('foo=Foo&foo=Fuzz&bar=Bar'); // { foo: ["Foo", "Fuzz"], bar: "Bar" }
 */
var getUrlParams = function (query) {
    var data = Array.from(new URLSearchParams(query));
    return data.reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        if (acc[key]) {
            acc[key] = castArray(acc[key]).concat(value);
        }
        else {
            acc[key] = value;
        }
        return acc;
    }, {});
};
/**
 * 编码url
 * @param url
 * @returns
 */
var encode = function (url) { return encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/%20/g, '+'); };
/**
 * 生成唯一且递增的 id
 */
var uid = (function () {
    var id = 0;
    return function () {
        var res = id;
        id += 1;
        return res;
    };
})();
/**
 * 获取第一个定义的非空参数
 * @param args
 * @returns
 * @example
 *   coalesce(undefined, null, 'helloworld', NaN); // 'helloworld'
 */
var coalesce = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.find(function (item) { return ![undefined, null].includes(item); });
};
/**
 * 缓动函数
 */
var linear = function (t) { return t; };
var easeInQuad = function (t) { return t * t; };
var easeOutQuad = function (t) { return t * (2 - t); };
var easeInOutQuad = function (t) { return (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); };
var easeInCubic = function (t) { return t * t * t; };
var easeOutCubic = function (t) {
    // eslint-disable-next-line no-param-reassign
    t -= 1;
    return t * t * t + 1;
};
var easeInOutCubic = function (t) { return (t < 0.5
    ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1); };
var easeInQuart = function (t) { return t * t * t * t; };
var easeOutQuart = function (t) {
    // eslint-disable-next-line no-param-reassign
    t -= 1;
    return 1 - easeInQuart(t);
};
var easeInOutQuart = function (t) {
    if (t < 0.5) {
        return 8 * easeInQuart(t);
    }
    // eslint-disable-next-line no-param-reassign
    t -= 1;
    return 1 - 8 * easeInQuart(t);
};
var easeInQuint = function (t) { return t * t * t * t * t; };
var easeOutQuint = function (t) {
    // eslint-disable-next-line no-param-reassign
    t -= 1;
    return 1 + easeInQuint(t);
};
var easeInOutQuint = function (t) {
    if (t < 0.5) {
        return 16 * easeInQuint(t);
    }
    // eslint-disable-next-line no-param-reassign
    t -= 1;
    return 1 + 16 * easeInQuint(t);
};
var easeInSine = function (t) { return 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2); };
var easeOutSine = function (t) { return Math.sin((Math.PI / 2) * t); };
var easeInOutSine = function (t) { return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2; };
var easeInElastic = function (t) { return (0.04 - 0.04 / t) * Math.sin(25 * t) + 1; };
var easeOutElastic = function (t) { return ((0.04 * t) / (t - 1)) * Math.sin(25 * (t - 1)); };
var easeInOutElastic = function (t) {
    // eslint-disable-next-line no-param-reassign
    t -= 0.5;
    if (t < 0) {
        return (0.02 + 0.01 / t) * Math.sin(50 * t);
    }
    return (0.02 - 0.01 / t) * Math.sin(50 * t) + 1;
};
/**
 * 从 URL 获取参数的值
 * @param url
 * @param param
 * @returns
 * @example
 *   getParam('http://domain.com?message=hello', 'message'); // 'hello'
 */
var getParam = function (url, param) { return new URLSearchParams(new URL(url).search).get(param); };
/**
 * 获取 val 的类型
 * @param obj
 * @returns
 * @example
 *   getTypeOf('hello world'); // String
 *   getTypeOf(1000); // Number
 *   getTypeOf(Infinity); // Number
 *   getTypeOf(true); // Boolean
 *   getTypeOf(Symbol()); // Symbol
 *   getTypeOf(null); // Null
 *   getTypeOf(undefined); // Undefined
 *   getTypeOf({}); // Object
 *   getTypeOf([]); // Array
 *   getTypeOf(/[a-z]/g); // RegExp
 *   getTypeOf(new Date(2021)); // Date
 *   getTypeOf(new Error()); // Error
 *   getTypeOf(function () {}); // Function
 *   getTypeOf((a, b) => a + b); // Function
 *   getTypeOf(async () => {}); // AsyncFunction
 *   getTypeOf(document); // HTMLDocument
 */
var getTypeOf = function (val) { return Object.prototype.toString.call(val).match(/\[object (.*)\]/)[1]; };
/**
 * 按顺序运行 Promise
 * @param promises
 * @returns
 */
var run = function (promises) { return promises.reduce(function (p, c) { return p.then(function (rp) { return c.then(function (rc) { return __spreadArray(__spreadArray([], rp, true), [rc], false); }); }); }, Promise.resolve([])); };
/**
 * 检查一个值是否是 promise like
 * @param val
 * @returns
 */
var isPromiseLike = function (val) { return (isObject(val)
    || isFunction(val))
    && isFunction(val.then); };
/**
 * 获取cookie的值
 * @param name
 * @returns
 * @example
 *   cookie('_ga'); // GA1.2.825309271.1581874719
 */
var cookie = function (name) { var _a; return ((_a = "; ".concat(document.cookie).split("; ".concat(name, "=")).pop()) === null || _a === void 0 ? void 0 : _a.split(';').shift()) || null; };
/**
 * 页面重定向到 HTTPS
 * @returns
 */
var redirectHttps = function () {
    if (window.location.protocol !== 'https') {
        window.location.protocol = 'https:';
    }
};
/**
 * 模拟掷骰子
 * @returns
 * @example
 *   throwdice(); // 4
 *   throwdice(); // 1
 *   throwdice(); // 6
 */
var throwdice = function () { return Math.floor(Math.random() * 6) + 1; };
/**
 * 等待一段时间
 * @param milliseconds
 * @returns
 */
var wait = function (milliseconds) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                setTimeout(resolve, milliseconds);
            })];
    });
}); };
/**
 * 交换两个变量的值
 * @param a
 * @param b
 */
var swap = function (a, b) {
    var _a;
    // eslint-disable-next-line no-param-reassign
    _a = [b, a], a = _a[0], b = _a[1];
    return [a, b];
};
/**
 * 检查一个值是否是正则表达式
 * @param value
 * @returns
 */
var isRegExp = function (value) { return Object.prototype.toString.call(value) === '[object RegExp]'; };
/**
 * 检查一个值是否是 base32 编码的
 * @param value
 * @returns
 */
var isBase32 = function (value) { return value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value); };
/**
 * 检查一个值是否是 base58 编码的
 * @param value
 * @returns
 */
var isBase58 = function (value) { return /^[A-HJ-NP-Za-km-z1-9]*$/.test(value); };
/**
 * 检查一个值是否是 base64 编码的
 * @param value
 * @returns
 */
var isBase64 = function (value) { return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value); };
/**
 * 检查一个值是否为 nil (即 null 或 undefined)
 * @param value
 * @returns
 */
var isNil = function (value) { return value == null; };
/**
 * 判断值是否可迭代
 * @param val 一个 JavaScript 值
 * @returns
 */
var isIterable = function (val) { return (typeof Symbol !== 'undefined' && Symbol && 'iterator' in Symbol
    && val != null && typeof val[Symbol.iterator] === 'function'); };

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
var addOrdinal = function (n) { return "".concat(n).concat(['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'); };
/**
 * 计算初始参数的累计余数
 * @param args
 * @returns
 * @example
 *   remainder(3, 4, 4); // 3
 */
var remainder = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a % b; });
};
/**
 * 计算初始参数的累计除数
 * @param args
 * @returns
 * @example
 *   division(1, 2, 3, 4); // 0.04166666666666666
 */
var division = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a / b; });
};
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
var factorial = function (n) { return (n <= 1 ? 1 : n * factorial(n - 1)); };
/**
 * 计算两个数之间的最大公约数;
 * @param a
 * @param b
 * @returns
 * @example
 *   gcd(10, 15); // 5
 */
var gcd = function (a, b) { return (b === 0 ? a : gcd(b, a % b)); };
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
var mod = function (a, b) { return ((a % b) + b) % b; };
/**
 * 从数字中获取数字数组
 * @param n
 * @returns
 * @example
 *   digitize(123); // [1, 2, 3]
 */
var digitize = function (n) { return Array.from("".concat(n)).map(function (v) { return parseInt(v, 10); }); };
/**
 * 将值限制在[min, max]之间
 * @param val
 * @param min
 * @param max
 * @returns
 * @example
 *   clamp(199, 10, 25); // 25
 */
var clamp = function (val, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.max(min, Math.min(max, val));
};
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
var toChars = function (n) { return "".concat(n >= 26 ? toChars(Math.floor(n / 26) - 1) : '').concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]); };
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
var round = function (n, decimals) {
    if (decimals === void 0) { decimals = 0; }
    return Number("".concat(Math.round("".concat(n, "e").concat(decimals)), "e-").concat(decimals));
};
/**
 * 计算初始参数的累积
 * @param args
 * @returns
 * @example
 *   mul(1, 2, 3, 4); // 24
 */
var mul = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a * b; });
};
/**
 * 计算初始参数的累减
 * @param args
 * @returns
 * @example
 *   subtract(1, 2, 3, 4); // -8
 */
var subtract = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a - b; });
};
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
var toFixed = function (n, fixed) { return ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed); };
/**
 * 用零作为整数前缀
 * @param n
 * @param length
 * @returns
 * @example
 *   prefixWithZeros(42, 5); // '00042'
 */
var prefixWithZeros = function (n, length) { return String(n).padStart(length, '0'); };
/**
 * 去掉小数部分
 * @param n
 * @returns
 * @example
 *   truncate(25.198726354); // 25
 *   truncate(-25.198726354); // -25
 */
// eslint-disable-next-line no-bitwise
var truncate = function (n) { return ~~n; };
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
var wrap = function (num, min, max) { return ((((num - min) % (max - min))
    + (max - min)) % (max - min)) + min; };
/**
 * 递归地将十进制转换为二进制
 * @param num
 * @returns
 */
// eslint-disable-next-line no-bitwise
var decToBi = function (num) { return (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2))); };
/**
 * 检查是否为个位数字
 * @param char
 * @returns
 * @example
 *   isDigit('a'); // false
 *   isDigit('abc'); // false
 *   isDigit(10); // false
 *   isDigit('10'); // false
 *   isDigit('2'); // true
 *   isDigit(2); // true
 */
var isDigit = function (value) { return value < 10; };
/**
 * 检查一个数字是否是 2 的幂
 * @param n
 * @returns
 * @example
 *   isPowerOfTwo(256); // true
 *   isPowerOfTwo(129); // false
 */
// eslint-disable-next-line no-bitwise
var isPowerOfTwo = function (n) { return (n & (n - 1)) === 0; };
/**
 * 检查数字是否为偶数
 * @param n
 * @returns
 * @example
 *   isEven(1); // false
 *   isEven(2); // true
 */
var isEven = function (n) { return Number.isInteger(n / 2); };
/**
 * 检查数字是否为偶数
 * @param n
 * @returns
 * @example
 *   isOdd(1); // true
 *   isOdd(2); // false
 */
var isOdd = function (n) { return !isEven(n); };
/**
 * 检查给定整数是否为质数
 * @param n
 * @returns
 */
var isPrime = function (n) { return n > 1
    && new Array(Math.floor(Math.sqrt(n)) - 1)
        .fill(0)
        .map(function (_, i) { return i + 2; })
        .every(function (i) { return n % i !== 0; }); };
/**
 * 检查数字是否在给定范围内
 * @param num
 * @param a
 * @param b
 * @param threshold
 * @returns
 * @example
 *   inRange(10, 5, 15); // true
 *   inRange(10, 5, 6); // false
 *   inRange(10, 15, 5); // true
 *   inRange(-10, -5, -15); // true
 */
var inRange = function (num, a, b, threshold) {
    if (threshold === void 0) { threshold = 0; }
    return Math.min(a, b) - threshold <= num && num <= Math.max(a, b) + threshold;
};
/**
 * 检查数字是否为负数
 * @param n
 * @returns
 */
var isNegative = function (n) { return n < 0; };
/**
 * 检查数字是否为正数
 * @param n
 * @returns
 */
var isPositive = function (n) { return n > 0; };
/**
 * 检查一个值是否为数字
 * @param value
 * @returns
 */
var isNumber = function (value) { return !Number.isNaN(parseFloat(value)) && Number.isFinite(value); };

/**
 * 生成一个随机布尔值
 * @returns
 */
var randomBoolean = function () { return Math.random() >= 0.5; };
/**
 * 生成给定范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @param includeMax 如果true，范围是 [min, max], 如果为false, 范围是 [min, max)
 * @param isInt 是否取整
 * @returns
 */
var randomInRange = function (min, max, options) {
    if (options === void 0) { options = {
        includeMax: false,
        isInt: true
    }; }
    var _a = options.includeMax, includeMax = _a === void 0 ? true : _a, _b = options.isInt, isInt = _b === void 0 ? false : _b;
    if (isInt) {
        return Math.floor(Math.random() * (max - min + (includeMax ? 1 : 0))) + min;
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
var randomArrayInRange = function (min, max, n, options) {
    if (options === void 0) { options = {
        includeMax: false,
        isInt: true
    }; }
    return Array.from({ length: n }, function () { return randomInRange(min, max, options); });
};
/**
 * 产生随机的十六进制颜色
 * @returns
 * @example
 *   randomIp(); // 175.89.174.131
 */
var randomColor = function () { return "#".concat(Math.random().toString(16).slice(2, 8).padEnd(6, '0')); };
/**
 * 产生随机的ip地址
 * @returns
 */
var randomIp = function () { return new Array(4)
    .fill(0)
    .map(function (_, i) { return randomInRange(0, 255) + (i === 0 ? 1 : 0); })
    .join('.'); };
/**
 * 从给定字符生成随机字符串
 * @param length
 * @param chars
 * @returns
 * @example
 *   generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
 */
var generateStringByChars = function (length, chars) { return new Array(length)
    .fill('')
    .map(function () { return chars[randomInRange(0, chars.length)]; })
    .join(''); };
/**
 * 生成随机字符串
 * @param length
 * @returns
 */
var generateString = function (length) { return new Array(length)
    .fill('')
    .map(function () { return Math.random().toString(36).charAt(2); })
    .join(''); };
/**
 * 产生随机的符号
 * @returns
 */
var randomSign = function () { return (randomBoolean() ? 1 : -1); };
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
var randomItem = function (arr, needRemove) {
    if (needRemove === void 0) { needRemove = false; }
    var index = randomInRange(0, arr.length);
    if (needRemove) {
        return arr.splice(index, 1);
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
var randomItems = function (arr, count) {
    var copyArr = arr.slice();
    var i = 0;
    return copyArr.reduce(function (acc) {
        if (i < count) {
            i += 1;
            acc.push(randomItem(copyArr, true));
        }
        return acc;
    }, []);
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
var randomLines = function (str, count) { return randomItems(str.split(/\r?\n/), count); };
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
var randomProp = function (obj) { return Object.keys(obj)[randomInRange(0, Object.keys(obj).length)]; };

/**
 * 将字符串首字符大小写
 * @param str
 * @param type
 * @returns
 * @example
 *   capitalize('hello world'); // Hello world
 */
var capitalize = function (str, type) {
    if (type === void 0) { type = 'toUpperCase'; }
    return str.replace(/^([a-z])/, function (first) { return first[type](); });
};
/**
 * 检查是否为相对路径
 * @param path
 * @returns
 * @example
 *   isRelative('/foo/bar/baz'); // false
 *   isRelative('C:\\foo\\bar\\baz'); // false
 *   isRelative('foo/bar/baz.txt'); // true
 *   isRelative('foo.md'); // true
 */
var isRelative = function (path) { return !/^([a-z]+:)?[\\/]/i.test(path); };
/**
 *
 * @param url
 * @returns
 * @example
 *   isAbsoluteUrl('https://1loc.dev'); // true
 *   isAbsoluteUrl('https://1loc.dev/foo/bar'); // true
 *   isAbsoluteUrl('1loc.dev'); // false
 *   isAbsoluteUrl('//1loc.dev'); // false
 */
var isAbsoluteUrl = function (url) { return /^[a-z][a-z0-9+.-]*:/.test(url); };
/**
 * 反转字符串
 * @param str
 * @returns
 * @example
 *   reverse('hello world'); // 'dlrow olleh'
 */
var reverse = function (str) { return str.split('').reverse().join(''); };
/**
 * 检查一个字符串是否是回文
 * @param str
 * @returns
 * @example
 *   isPalindrome('abc'); // false
 *   isPalindrome('abcba'); // true
 */
var isPalindrome = function (str) { return str === reverse(str); };
/**
 * 检查两个字符串是否是变位词
 * @param str1
 * @param str2
 * @returns
 * @example
 *   areAnagram('listen', 'silent'); // true
 *   areAnagram('they see', 'the eyes'); // true
 *   areAnagram('node', 'deno'); // true
 */
var areAnagram = function (str1, str2) { return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''); };
/**
 * 将 base64 编码的字符串转换为 uint8 数组
 * @param str
 * @returns
 */
var base64ToUint8 = function (str) { return Uint8Array.from(atob(str), function (c) { return c.charCodeAt(0); }); };
/**
 * 将字符串转换为驼峰式
 * @param str
 * @returns
 * @example
 *   toCamelCase('background-color'); // backgroundColor
 *   toCamelCase('-webkit-scrollbar-thumb'); // WebkitScrollbarThumb
 *   toCamelCase('_hello_world'); // HelloWorld
 *   toCamelCase('hello_world'); // helloWorld
 */
var toCamelCase = function (str) { return str.trim().replace(/[-_\s]+(.)?/g, function (_, c) { return (c ? c.toUpperCase() : ''); }); };
/**
 * 检查字符串是否由重复的字符序列组成
 * @param str
 * @returns
 * @example
 *   consistsRepeatedSubstring('aa'); // true
 *   consistsRepeatedSubstring('ababab'); // true
 *   consistsRepeatedSubstring('abc'); // false
 */
var consistsRepeatedSubstring = function (str) { return "".concat(str).concat(str).indexOf(str, 1) !== str.length; };
/**
 * 将字符串转换为 PascalCase
 * @param str
 * @returns
 * @example
 *   toPascalCase('hello world'); // 'HelloWorld'
 *   toPascalCase('hello.world'); // 'HelloWorld'
 *   toPascalCase('foo_bar-baz'); // FooBarBaz
 */
var toPascalCase = function (str) { return (str.match(/[a-zA-Z0-9]+/g) || []).map(function (w) { return "".concat(w.charAt(0).toUpperCase()).concat(w.slice(1)); }).join(''); };
/**
 * 将字符串转换为 URL slug
 * @param str
 * @returns
 * @example
 *   slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'
 */
var slugify = function (str) { return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, ''); };
/**
 * 将 windows 路径转换为 Unix 路径
 * @param path
 * @returns
 * @example
 *   toUnixPath('./foo/bar/baz'); // foo/bar/baz
 *   toUnixPath('C:\\foo\\bar\\baz'); // /foo/bar/baz
 */
var toUnixPath = function (path) { return path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, ''); };
/**
 * 将 uint8 数组转换为 base64 编码的字符串
 * @param arr
 * @returns
 */
var uint8ToBase64 = function (arr) {
    if (isRunningInBrowser) {
        return btoa(Array(arr.length)
            .fill('')
            .map(function (_, i) { return String.fromCharCode(arr[i]); })
            .join(''));
    }
    return Buffer.from(arr).toString('base64');
};
/**
 * 将 snake_case 转换为 camelCase
 * @param str
 * @returns
 * @example
 *   snakeToCamel('HELLO_world'); // 'helloWorld'
 */
var snakeToCamel = function (str) { return str.toLowerCase().replace(/(_\w)/g, function (m) { return m.toUpperCase().substring(1); }); };
/**
 * 将 camelCase 转换为 kebab-case
 * @param str
 * @returns
 * @example
 *   kebabToCamel('background-color'); // 'backgroundColor'
 */
var kebabToCamel = function (str) { return str.replace(/-./g, function (m) { return m.toUpperCase()[1]; }); };
/**
 * 将 kebab-case 转换为 camelCase
 * @param str
 * @returns
 * @example
 *   camelToKebab('backgroundColor'); // 'background-color'
 */
var camelToKebab = function (str) { return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(); };
/**
 * 将 Excel 列的名称转换为数字
 * @param col
 * @returns
 * @example
 *   getIndex('A'); // 1
 *   getIndex('Z'); // 26
 *   getIndex('AA'); // 27
 *   getIndex('AAA'); // 703
 */
var getIndex = function (col) { return col.split('').reduce(function (prev, next) { return prev * 26 + parseInt(next, 36) - 9; }, 0); };
/**
 * 计算字符串中某个字符的出现次数
 * @param str
 * @param char
 * @returns
 * @example
 *   countOccurrences('a.b.c.d.e', '.'); // 4
 */
var countOccurrences = function (str, char) { return str.split(char).length - 1; };
/**
 * 解码 HTML 实体
 * @param str
 * @returns
 */
var decodeHtmlEntities = function (str) { return str.replace(/&#(\w+)(^\w|;)?/g, function (_, dec) { return String.fromCharCode(dec); }); };
/**
 * 计算字符串中的单词数
 * @param str
 * @returns
 * @example
 *   countWords('Hello World'); // 2
 *   countWords('Hello    World'); // 2
 *   countWords('  Hello  World  '); // 2
 */
var countWords = function (str) { return str.trim().split(/\s+/).length; };
/**
 * 完全替换掉 html 特殊字符
 * @param str
 * @returns
 */
var escape = function (str) { return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;'); };
/**
 * 取消转义 html
 * @param str
 * @returns
 */
var unescape = function (str) { return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#0*39;/g, "'")
    .replace(/&quot;/g, '"'); };
/**
 * 获取不带任何参数的基本 URL
 * @param url
 * @returns
 * @example
 *   baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world'); // 'https://domain.com/path/sub/path'
 */
var getBaseUrl = function (url) { return url.split('?')[0]; };
/**
 * 生成字符串的哈希
 * @param str
 * @returns
 * @example
 *   hash('hello'); // 99162322
 */
var hash = function (str) { return str.split('').reduce(function (prev, curr) { return Math.floor(Math.imul(31, prev) + curr.charCodeAt(0)); }, 0); };
/**
 * 从文件名中获取文件扩展名
 * @param fileName
 * @returns
 */
var ext = function (fileName) { return fileName.split('.').pop(); };
/**
 * 从 URL 获取文件名
 * @param url
 * @returns
 * @example
 *   fileName('http://domain.com/path/to/document.pdf'); // 'document.pdf'
 */
var fileName = function (url) { return url.substring(url.lastIndexOf('/') + 1); };
/**
 * 获取字符串的字节长度
 * @param str
 * @returns
 * @example
 *   bytes('hello world'); // 11
 *   bytes('🎉'); // 4
 */
var bytes = function (str) { return new Blob([str]).size; };
/**
 * 规范化文件路径斜杠
 * @param path
 * @returns
 * @example
 *   normalizePath('\\foo\\bar\\baz\\'); // /foo/bar/baz/
 *   normalizePath('.//foo//bar///////baz/'); // ./foo/bar/baz/
 */
var normalizePath = function (path) { return path.replace(/[\\/]+/g, '/'); };
/**
 * 为文本的每一行添加一个行号
 * @param str
 * @returns
 * @example
 *   prependNumbers(`one
      two
      three
      four`);
     // `1 one
     //  2 two
     //  3 three
     //  4 four`
 */
var prependNumbers = function (str) { return str
    .split(/\r?\n/)
    .map(function (line, i) { return "".concat((i + 1).toString().padStart(2, ' '), " ").concat(line); })
    .join('\n'); };
/**
 * 删除文本的重复行
 * @param str
 * @returns
 * @example
 *   removeDuplicateLines(`one
       three
       two
       three
       one
       four`
     );
    // `one
    //  three
    //  two
    //  four`
 */
var removeDuplicateLines = function (str) { return Array.from(new Set(str.split(/\r?\n/))).join('\n'); };
/**
 * 删除文本的空行
 * @param str
 * @returns
 * @example
 *   removeEmptyLines(`red

      green
      blue

      yellow`
     );
    // `red
    //  green
    //  blue
    //  yellow`
 */
var removeEmptyLines = function (str) { return str
    .split(/\r?\n/)
    .filter(function (line) { return line.trim() !== ''; })
    .join('\n'); };
/**
 * 去除字符串中的空格
 * @param str
 * @returns
 * @example
 *   removeSpaces('hel lo wor ld'); // 'helloworld'
 */
var removeSpaces = function (str) { return str.replace(/\s/g, ''); };
/**
 * 用 br 元素替换所有换行符
 * @param str
 * @returns
 * @example
 */
var nl2br = function (str) { return str.replace(/\r?\n/g, '<br>'); };
/**
 * 用指定数量的空格替换所有制表符
 * @param str
 * @param numSpaces
 * @returns
 */
var replaceTab = function (str, numSpaces) {
    if (numSpaces === void 0) { numSpaces = 4; }
    return str.replaceAll('\t', ' '.repeat(numSpaces));
};
/**
 * 用一个空格替换多个空格
 * @param str
 * @returns
 * @example
 *   replaceSpaces('this\n   is     \ta    \rmessage'); // 'this is a message'
 */
var replaceOnlySpaces = function (str) { return str.replace(/  +/g, ' '); };
/**
 * 用一个字符 char 替换字符串 str 的前 num 个字符;
 * @param str
 * @param num
 * @param char
 * @example
 *   mask(1234567890, 3, '*'); // ***4567890
 */
var mask = function (str, num, char) {
    var copyStr = String(str);
    return copyStr.slice(num).padStart(copyStr.length, char);
};
/**
 * 颠倒文本行的顺序
 * @param str
 * @returns
 * @example
 *   reverseLines(`one
       two
       three`
     );
     // `one
     //  two
     //  three`
 */
var reverseLines = function (str) { return str.split(/\r?\n/).reverse().join('\n'); };
/**
 * 按字母顺序对文本文档的行进行排序
 * @param str
 * @returns
 */
var sortedLines = function (str, ascending) {
    if (ascending === void 0) { ascending = false; }
    if (ascending) {
        return str.split(/\r?\n/).sort().reverse().join('\n');
    }
    return str.split(/\r?\n/).sort().join('\n');
};
/**
 * 按字母顺序对字符串的字符进行排序
 * @param str
 * @returns
 * @example
 *   sort('hello world'); // dehllloorw
 */
var sortString = function (str) { return str
    .split('')
    .sort(function (a, b) { return a.localeCompare(b); })
    .join(''); };
/**
 * 从字符串中去除 ANSI 代码
 * @param str
 * @returns
 * @example
 *   stripAnsiCodes('\u001B[4mcake\u001B[0m'); // 'cake'
 *   stripAnsiCodes(
 *     '\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m'
 *   ); // 'foofoo'
 */
// eslint-disable-next-line no-control-regex
var stripAnsiCodes = function (str) { return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''); };
/**
 * 交换字符串中字符的大小写
 * @param str
 * @returns
 * @example
 *   swapCase('Hello World'); // 'hELLO wORLD'
 */
var swapCase = function (str) { return str
    .split('')
    .map(function (c) { return (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()); })
    .join(''); };
/**
 * 去除首尾的 char 字符
 * @param str
 * @param char
 * @returns
 */
var trim = function (str, char) { return str.split(char).filter(Boolean).join(); };
/**
 * 在完整单词处截断字符串
 * @param str
 * @param max
 * @param suffix
 * @returns
 * @example
 *   truncate('This is a long message', 20, '...'); // 'This is a long...'
 */
var truncateAtWords = function (str, max, suffix) {
    if (suffix === void 0) { suffix = '...'; }
    return (str.length < max ? str : "".concat(str.substring(0, str.substring(0, max - suffix.length).lastIndexOf(' '))).concat(suffix));
};
/**
 * 大小写字符串中每个单词的第一个字符
 * @param str
 * @param type
 * @returns
 * @example
 *   caseWords('hello world'); // 'Hello World'
 */
var caseWords = function (str, type) {
    if (type === void 0) { type = 'toUpperCase'; }
    return str.replace(/^(.)|\s+(.)/g, function (c) { return c[type](); });
};
/**
 * 检查一个字符串是否包含大写字符
 * @param str
 * @returns
 * @example
 *   containsCase('Hello World'); // true
 *   containsCase('HELLO WORLD'); // false
 */
var containsUpperCase = function (str) { return str !== str.toLowerCase(); };
/**
 * 检查一个字符串是否全小写字符
 * @param str
 * @returns
 */
var isLowerCase = function (str) { return !containsUpperCase(str); };
/**
 * 检查一个字符串是否包含小写字符
 * @param str
 * @returns
 * @example
 *   containsCase('Hello World'); // true
 *   containsCase('HELLO WORLD'); // false
 */
var containsLowerCase = function (str) { return str !== str.toUpperCase(); };
/**
 * 检查一个字符串是否全大写字符
 * @param str
 * @returns
 */
var isUpperCase = function (str) { return !containsLowerCase(str); };
/**
 * 检查字符串是否只包含数字
 * @param str
 * @returns
 * @example
 *   isNumeric(2); // true
 *   isNumeric('23'); // true
 *   isNumeric('00123'); // true
 *   isNumeric('1.23'); // false
 *   isNumeric('-Infinity'); // false
 *   isNumeric('Infinity'); // false
 *   isNumeric('NaN'); // false
 */
var isNumeric = function (str) { return !/[^0-9]/.test(str); };
/**
 * 检查字符串是否只包含 ASCII 字符
 * @param str
 * @returns
 */
// eslint-disable-next-line no-control-regex
var isAscii = function (str) { return /^[\x00-\x7F]+$/.test(str); };
/**
 * 检查字符串是否只包含字母和数字
 * @param str
 * @returns
 * @example
 *   isAlphanumeric('helloworld'); // true
 *   isAlphanumeric('HelloWorld'); // true
 *   isAlphanumeric('hello world'); // false
 *   isAlphanumeric('hello123'); // true
 *   isAlphanumeric('hello 123'); // false
 */
var isAlphanumeric = function (str) { return /^[0-9A-Z]+$/i.test(str); };
/**
 * 检查字符串是否包空格
 * @param str
 * @returns
 * @example
 *   containsWhitespace('hello world'); // true
 */
var containsWhitespace = function (str) { return /\s/.test(str); };
/**
 * 检查字符串是否为十六进制颜色
 * @param color
 * @returns
 * @example
 *   isHexColor('#012'); // true
 *   isHexColor('#A1B2C3'); // true
 *   isHexColor('012'); // false
 *   isHexColor('#GHIJKL'); // false
 */
var isHexColor = function (color) { return /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color); };
/**
 * 检查字符串是否为十六进制数;
 * @param str
 * @returns
 * @example
 *   isHexadecimal('123'); // true
 *   isHexadecimal('A1B2C3'); // true
 *   isHexadecimal('#123'); // false
 */
var isHexadecimal = function (str) { return /^[A-F0-9]+$/i.test(str); };
/**
 * 检查字符串是否为 MongoDB ObjectId
 * @param str
 * @returns
 */
var isMongoDBId = function (str) { return str.length === 24 && /^[A-F0-9]+$/i.test(str); };
/**
 * 检查字符串是否只包含字母
 * @param str
 * @returns
 * @example
 *   isAlpha('helloworld'); // true
 *   isAlpha('HelloWorld'); // true
 *   isAlpha('hello world'); // false
 *   isAlpha('0123456789'); // false
 */
var isAlpha = function (str) { return /^[A-Z]+$/i.test(str); };
/**
 * 检查字符串是否为八进制数
 * @param str
 * @returns
 */
var isOctal = function (str) { return /^(0o)?[0-7]+$/i.test(str); };
/**
 * 检查值是否为业务标识符码
 * @param value
 * @returns
 */
var isBIC = function (value) { return /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value); };

exports.accumulate = accumulate;
exports.addOrdinal = addOrdinal;
exports.alphabet = alphabet;
exports.areAnagram = areAnagram;
exports.areEqual = areEqual;
exports.average = average;
exports.base64ToUint8 = base64ToUint8;
exports.boxHandler = boxHandler;
exports.bytes = bytes;
exports.camelToKebab = camelToKebab;
exports.capitalize = capitalize;
exports.cartesian = cartesian;
exports.caseWords = caseWords;
exports.castArray = castArray;
exports.celsiusToFahrenheit = celsiusToFahrenheit;
exports.chunk = chunk;
exports.clamp = clamp;
exports.clearCookies = clearCookies;
exports.clone = clone;
exports.closest = closest;
exports.coalesce = coalesce;
exports.compare = compare;
exports.compareBy = compareBy;
exports.complement = complement;
exports.compose = compose;
exports.consistsRepeatedSubstring = consistsRepeatedSubstring;
exports.contains = contains;
exports.containsLowerCase = containsLowerCase;
exports.containsUpperCase = containsUpperCase;
exports.containsWhitespace = containsWhitespace;
exports.cookie = cookie;
exports.cookies = cookies;
exports.countBy = countBy;
exports.countOccurrences = countOccurrences;
exports.countVal = countVal;
exports.countWords = countWords;
exports.curry = curry;
exports.dayOfYear = dayOfYear;
exports.daysInMonth = daysInMonth;
exports.decToBi = decToBi;
exports.decode = decode;
exports.decodeHtmlEntities = decodeHtmlEntities;
exports.degsToRads = degsToRads;
exports.diffDays = diffDays;
exports.digitize = digitize;
exports.distance = distance;
exports.division = division;
exports.easeInCubic = easeInCubic;
exports.easeInElastic = easeInElastic;
exports.easeInOutCubic = easeInOutCubic;
exports.easeInOutElastic = easeInOutElastic;
exports.easeInOutQuad = easeInOutQuad;
exports.easeInOutQuart = easeInOutQuart;
exports.easeInOutQuint = easeInOutQuint;
exports.easeInOutSine = easeInOutSine;
exports.easeInQuad = easeInQuad;
exports.easeInQuart = easeInQuart;
exports.easeInQuint = easeInQuint;
exports.easeInSine = easeInSine;
exports.easeOutCubic = easeOutCubic;
exports.easeOutElastic = easeOutElastic;
exports.easeOutQuad = easeOutQuad;
exports.easeOutQuart = easeOutQuart;
exports.easeOutQuint = easeOutQuint;
exports.easeOutSine = easeOutSine;
exports.empty = empty;
exports.encode = encode;
exports.escape = escape;
exports.ext = ext;
exports.extract = extract;
exports.factorial = factorial;
exports.fahrenheitToCelsius = fahrenheitToCelsius;
exports.fileName = fileName;
exports.filterAdvanced = filterAdvanced;
exports.findLongest = findLongest;
exports.flat = flat;
exports.flip = flip;
exports.format = format;
exports.formatSeconds = formatSeconds;
exports.formatYmd = formatYmd;
exports.gcd = gcd;
exports.generateString = generateString;
exports.generateStringByChars = generateStringByChars;
exports.getAngleOfLine = getAngleOfLine;
exports.getBaseUrl = getBaseUrl;
exports.getConsecutiveArrays = getConsecutiveArrays;
exports.getFirstDate = getFirstDate;
exports.getHoursAndMinutes = getHoursAndMinutes;
exports.getIndex = getIndex;
exports.getIntersection = getIntersection;
exports.getLastDate = getLastDate;
exports.getMonthName = getMonthName;
exports.getNthItems = getNthItems;
exports.getParam = getParam;
exports.getPlusOneYear = getPlusOneYear;
exports.getPosition = getPosition;
exports.getQuarter = getQuarter;
exports.getSelectedText = getSelectedText;
exports.getSubsets = getSubsets;
exports.getTimezone = getTimezone;
exports.getTomorrow = getTomorrow;
exports.getTypeOf = getTypeOf;
exports.getUniqueArrObj = getUniqueArrObj;
exports.getUrlParams = getUrlParams;
exports.getValue = getValue;
exports.getWeekday = getWeekday;
exports.getYesterday = getYesterday;
exports.goTo = goTo;
exports.groupBy = groupBy;
exports.hasDuplicateValues = hasDuplicateValues;
exports.hasFocus = hasFocus;
exports.hash = hash;
exports.hexToRgb = hexToRgb;
exports.hide = hide;
exports.identity = identity;
exports.inRange = inRange;
exports.indices = indices;
exports.insert = insert;
exports.intersperse = intersperse;
exports.invert = invert;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.isAlpha = isAlpha;
exports.isAlphanumeric = isAlphanumeric;
exports.isAscii = isAscii;
exports.isAsyncFunction = isAsyncFunction;
exports.isAtBottom = isAtBottom;
exports.isBIC = isBIC;
exports.isBase32 = isBase32;
exports.isBase58 = isBase58;
exports.isBase64 = isBase64;
exports.isBetween = isBetween;
exports.isCurrentYear = isCurrentYear;
exports.isDarkMode = isDarkMode;
exports.isDescendant = isDescendant;
exports.isDigit = isDigit;
exports.isEmpty = isEmpty;
exports.isEmptyObj = isEmptyObj;
exports.isEqual = isEqual;
exports.isEqualSomeValue = isEqualSomeValue;
exports.isEven = isEven;
exports.isFunction = isFunction;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isHexColor = isHexColor;
exports.isHexadecimal = isHexadecimal;
exports.isIE = isIE;
exports.isInside = isInside;
exports.isIterable = isIterable;
exports.isLowerCase = isLowerCase;
exports.isMacBrowser = isMacBrowser;
exports.isMongoDBId = isMongoDBId;
exports.isNegative = isNegative;
exports.isNil = isNil;
exports.isNumber = isNumber;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isObjsEqual = isObjsEqual;
exports.isOctal = isOctal;
exports.isOdd = isOdd;
exports.isPalindrome = isPalindrome;
exports.isPlainObject = isPlainObject;
exports.isPositive = isPositive;
exports.isPowerOfTwo = isPowerOfTwo;
exports.isPrime = isPrime;
exports.isPromiseLike = isPromiseLike;
exports.isRegExp = isRegExp;
exports.isRelative = isRelative;
exports.isRunningInBrowser = isRunningInBrowser;
exports.isRunningInJest = isRunningInJest;
exports.isRunningInNodeJS = isRunningInNodeJS;
exports.isSubset = isSubset;
exports.isToday = isToday;
exports.isUpperCase = isUpperCase;
exports.isValidDate = isValidDate;
exports.isWeekday = isWeekday;
exports.isWeekend = isWeekend;
exports.kebabToCamel = kebabToCamel;
exports.lastIndex = lastIndex;
exports.lerp = lerp;
exports.linear = linear;
exports.mask = mask;
exports.max = max;
exports.memoize = memoize;
exports.merge = merge;
exports.midnightOfToday = midnightOfToday;
exports.midpoint = midpoint;
exports.min = min;
exports.mod = mod;
exports.monthDiff = monthDiff;
exports.mul = mul;
exports.nl2br = nl2br;
exports.noop = noop;
exports.normalizePath = normalizePath;
exports.normalizeRatio = normalizeRatio;
exports.numberOfDays = numberOfDays;
exports.omit = omit;
exports.once = once;
exports.overlaps = overlaps;
exports.partial = partial;
exports.partition = partition;
exports.pick = pick;
exports.pipe = pipe;
exports.pluck = pluck;
exports.prefixWithZeros = prefixWithZeros;
exports.prependNumbers = prependNumbers;
exports.radsToDegs = radsToDegs;
exports.random = random;
exports.randomArrayInRange = randomArrayInRange;
exports.randomBoolean = randomBoolean;
exports.randomColor = randomColor;
exports.randomInRange = randomInRange;
exports.randomIp = randomIp;
exports.randomItem = randomItem;
exports.randomItems = randomItems;
exports.randomLines = randomLines;
exports.randomProp = randomProp;
exports.randomSign = randomSign;
exports.range = range;
exports.ranking = ranking;
exports.redirectHttps = redirectHttps;
exports.remainder = remainder;
exports.removeDuplicate = removeDuplicate;
exports.removeDuplicateLines = removeDuplicateLines;
exports.removeEmptyLines = removeEmptyLines;
exports.removeFalsy = removeFalsy;
exports.removeNullUndefined = removeNullUndefined;
exports.removeSpaces = removeSpaces;
exports.renameKeys = renameKeys;
exports.repeat = repeat;
exports.replace = replace;
exports.replaceOnlySpaces = replaceOnlySpaces;
exports.replaceTab = replaceTab;
exports.reverse = reverse;
exports.reverseLines = reverseLines;
exports.rgbToHex = rgbToHex;
exports.round = round;
exports.roundNearest = roundNearest;
exports.run = run;
exports.serialize = serialize;
exports.show = show;
exports.shuffle = shuffle;
exports.siblings = siblings;
exports.slugify = slugify;
exports.snakeToCamel = snakeToCamel;
exports.sort = sort;
exports.sortAscending = sortAscending;
exports.sortBy = sortBy;
exports.sortDescending = sortDescending;
exports.sortString = sortString;
exports.sortedLines = sortedLines;
exports.stripAnsiCodes = stripAnsiCodes;
exports.stripHtml = stripHtml;
exports.subtract = subtract;
exports.suffixAmPm = suffixAmPm;
exports.swap = swap;
exports.swapCase = swapCase;
exports.swapItems = swapItems;
exports.throwdice = throwdice;
exports.thunkfy = thunkfy;
exports.toCamelCase = toCamelCase;
exports.toChars = toChars;
exports.toFixed = toFixed;
exports.toFullHexColor = toFullHexColor;
exports.toNumbers = toNumbers;
exports.toObject = toObject;
exports.toPascalCase = toPascalCase;
exports.toTop = toTop;
exports.toUnixPath = toUnixPath;
exports.toggle = toggle;
exports.touchSupported = touchSupported;
exports.transpose = transpose;
exports.trim = trim;
exports.truncate = truncate;
exports.truncateAtWords = truncateAtWords;
exports.ts = ts;
exports.uid = uid;
exports.uint8ToBase64 = uint8ToBase64;
exports.unary = unary;
exports.uncurry = uncurry;
exports.unescape = unescape;
exports.union = union;
exports.unique = unique;
exports.unzip = unzip;
exports.wait = wait;
exports.wrap = wrap;
exports.xor = xor;
exports.zip = zip;
