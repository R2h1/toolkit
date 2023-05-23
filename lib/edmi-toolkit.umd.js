/*!
 * edmi-toolkit v1.0.10
 * (c) 2023-2023 
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["edmi-toolkit"] = {}));
})(this, (function (exports) { 'use strict';

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
    /**
     * 浅拷贝数组
     * @param arr
     * @returns
     */
    var clone = function (arr) { return __spreadArray([], arr, true); };
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

    exports.accumulate = accumulate;
    exports.castArray = castArray;
    exports.clone = clone;
    exports.countOccurrences = countOccurrences;
    exports.countVal = countVal;
    exports.empty = empty;
    exports.isEmpty = isEmpty;
    exports.isEqual = isEqual;
    exports.range = range;
    exports.toNumbers = toNumbers;
    exports.toObject = toObject;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
