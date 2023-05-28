/**
 * 检查一个值是否是一个函数
 * @param val
 * @returns
 * @example
 *   isFunction(function () {}); // true
 *   isFunction(function* () {}); // true
 *   isFunction(async function () {}); // true
 */
declare const isFunction: (val: unknown) => val is Function;
/**
 * 检查一个值是否是一个 async 函数(即带 async 标记的函数)
 * @param val
 * @returns
 * @example
 *   isAsyncFunction(function () {}); // false
 *   isAsyncFunction(function* () {}); // false
 *   isAsyncFunction(async function () {}); // true
 */
declare const isAsyncFunction: (val: unknown) => boolean;
/**
 * 检查一个值是否是一个生成器函数
 * @param v
 * @returns
 * @example
 *   isGeneratorFunction(function () {}); // false
 *   isGeneratorFunction(function* () {}); // true
 */
declare const isGeneratorFunction: (val: unknown) => boolean;
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
declare const boxHandler: <T>(x: T) => {
    next: (f: (val: T) => any) => {
        next: (f: (val: any) => any) => any;
        done: (f: (val: any) => any) => any;
    };
    done: (f: (val: T) => any) => any;
};
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
declare const pipe: <T>(...fns: ((val: T) => T)[]) => (x: T) => T;
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
declare const compose: <T>(...fns: ((val: T) => T)[]) => (x: T) => T;
/**
 * 创建一个接受第一个参数的函数
 * @param fn
 * @returns
 * @example
 *   ['1', '2', '3', '4', '5'].map(unary(parseInt)); // [1, 2, 3, 4, 5]
 */
declare const unary: <T>(fn: (val: T, ...arg: any[]) => any) => (arg: T) => any;
/**
 * 空函数
 */
declare const noop: () => void;
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
declare const curry: (fn: Function, ...args: any[]) => any;
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
declare const thunkfy: (fn: (...args: any[]) => any) => (...args: any[]) => () => any;
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
declare const once: (fn: () => any) => () => null;
/**
 * 翻转函数参数
 * @param fn
 * @returns
 * @example
 *   const isParent = (parent, child) => parent.children.includes(child);
 *   const isChild = flip(isParent);
 */
declare const flip: (fn: (...args: any[]) => any) => (...args: any[]) => any;
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
declare const xor: (a: any, b: any) => any;
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
declare const memoize: (fn: Function) => (arg: any) => any;
/**
 * 恒等函数;
 * @param x
 * @returns
 */
declare const identity: <T>(x: T) => T;
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
declare const partial: (fn: (...args: any[]) => any, ...a: any[]) => (...b: any[]) => any;
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
declare const uncurry: (fn: Function, n?: number) => (...args: any[]) => any;
export { boxHandler, compose, curry, flip, identity, isAsyncFunction, isGeneratorFunction, isFunction, memoize, noop, once, partial, pipe, thunkfy, unary, uncurry, xor };
