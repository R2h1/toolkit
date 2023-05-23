"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = exports.isEmpty = exports.castArray = exports.toObject = exports.toNumbers = exports.range = exports.isEqual = exports.empty = exports.countVal = exports.countOccurrences = exports.accumulate = void 0;
var tslib_1 = require("tslib");
/**
 * 将值转化为数组
 * @param value
 * @returns
 */
var castArray = function (value) {
    if (Array.isArray(value)) {
        return value;
    }
    return [value];
};
exports.castArray = castArray;
/**
 * 检查数组是否为空
 * @param arr
 * @returns
 */
var isEmpty = function (arr) {
    if (Array.isArray(arr)) {
        return arr.length === 0;
    }
    return false;
};
exports.isEmpty = isEmpty;
/**
 * 浅拷贝数组
 * @param arr
 * @returns
 */
var clone = function (arr) { return tslib_1.__spreadArray([], arr, true); };
exports.clone = clone;
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
    return (tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[item[key]] = item, _a)));
}); };
exports.toObject = toObject;
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
exports.isEqual = isEqual;
/**
 * 计算数组 arr 中 val 出现的次数，如果 val 为
 * @param arr
 * @param val
 * @returns
 * @example
 *   countVal([2, 1, 3, 3, 2, 3], 2); // 2
 *   countVal(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3
 *   countOccurrences([2, 1, 3, 3, 2, 3]); // Map(3) {2 => 2, 1 => 1, 3 => 3}
 *   countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']); // Map(3) {'a' => 3, 'b' => 2, 'c' => 1}
 */
var countVal = function (arr, val) { return arr.filter(function (item) { return item === val; }).length; };
exports.countVal = countVal;
/**
 * 计算数组所有元素出现的次数
 * @param arr
 * @returns
 * @example
 *   countOccurrences([2, 1, 3, 3, 2, 3]); // Map(3) {2 => 2, 1 => 1, 3 => 3}
 *   countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']); // Map(3) {'a' => 3, 'b' => 2, 'c' => 1}
 */
var countOccurrences = function (arr) {
    var map = new Map();
    return arr.reduce(function (prev, curr) {
        if (prev.has(curr)) {
            prev.set(curr, prev.get(curr) + 1);
        }
        else {
            prev.set(curr, 1);
        }
        return prev;
    }, map);
};
exports.countOccurrences = countOccurrences;
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
exports.range = range;
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
exports.empty = empty;
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
    return tslib_1.__spreadArray(tslib_1.__spreadArray([], acc, true), [acc[i - 1] + cur], false);
}, []); };
exports.accumulate = accumulate;
/**
 * 将字符串数组转为number数组
 * @param arr
 * @returns
 * @example
 *   toNumbers(['2', '3', '4']); // [2, 3, 4]
 */
var toNumbers = function (arr) { return arr.map(Number); };
exports.toNumbers = toNumbers;
