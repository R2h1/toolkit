/**
 * 检查代码是否在浏览器中运行
 */
declare const isRunningInBrowser: boolean;
/**
 * 检查代码是否在 Nodejs 中运行
 */
declare const isRunningInNodeJS: boolean;
/**
 * 检查代码是否在 Jest 中运行
 */
declare const isRunningInJest: boolean;
/**
 * 检测夜间模式
 */
declare const isDarkMode: boolean;
/**
 * 将摄氏度转换为华氏度
 * @param celsius
 * @returns
 * @example
 *   celsiusToFahrenheit(15); // 59
 *   celsiusToFahrenheit(0); // 32
 *   celsiusToFahrenheit(-20); // -4
 */
declare const celsiusToFahrenheit: (celsius: number) => number;
/**
 * 将华氏度转换为摄氏度
 * @param fahrenheit
 * @returns
 * @example
 *   fahrenheitToCelsius(59); // 15
 *   fahrenheitToCelsius(32); // 0
 */
declare const fahrenheitToCelsius: (fahrenheit: number) => number;
/**
 * 清除所有 cookie
 * @returns
 */
declare const clearCookies: () => void;
/**
 * 将 3 位颜色转换为 6 位颜色
 * @param color
 * @returns
 * @example
 *   toFullHexColor('123'); // '#112233'
 *   toFullHexColor('#123'); // '#112233'
 *   toFullHexColor('#abc'); // '#aabbcc'
 */
declare const toFullHexColor: (color: string) => string;
/**
 *
 * @param hex
 * @returns
 * @example
 *   hexToRgb('#00ffff'); // "0, 255, 255"
 *   hexToRgb('#0ff'); // "0, 255, 255"
 */
declare const hexToRgb: (hex: string) => string;
/**
 * 将 RGB 颜色转换为十六进制
 * @param red
 * @param green
 * @param blue
 * @returns
 * @example
 *   rgbToHex(0, 255, 255); // '#00ffff'
 */
declare const rgbToHex: (red: number, green: number, blue: number) => string;
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
declare const decode: (token: string) => string;
/**
 * 将 cookie 转换为对象
 */
declare const cookies: Record<string, string>;
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
declare const getUrlParams: (query: string) => Record<string, string>;
/**
 * 编码url
 * @param url
 * @returns
 */
declare const encode: (url: string) => string;
/**
 * 生成唯一且递增的 id
 */
declare const uid: () => number;
/**
 * 获取第一个定义的非空参数
 * @param args
 * @returns
 * @example
 *   coalesce(undefined, null, 'helloworld', NaN); // 'helloworld'
 */
declare const coalesce: (...args: any[]) => any[];
/**
 * 缓动函数
 */
declare const linear: (t: number) => number;
declare const easeInQuad: (t: number) => number;
declare const easeOutQuad: (t: number) => number;
declare const easeInOutQuad: (t: number) => number;
declare const easeInCubic: (t: number) => number;
declare const easeOutCubic: (t: number) => number;
declare const easeInOutCubic: (t: number) => number;
declare const easeInQuart: (t: number) => number;
declare const easeOutQuart: (t: number) => number;
declare const easeInOutQuart: (t: number) => number;
declare const easeInQuint: (t: number) => number;
declare const easeOutQuint: (t: number) => number;
declare const easeInOutQuint: (t: number) => number;
declare const easeInSine: (t: number) => number;
declare const easeOutSine: (t: number) => number;
declare const easeInOutSine: (t: number) => number;
declare const easeInElastic: (t: number) => number;
declare const easeOutElastic: (t: number) => number;
declare const easeInOutElastic: (t: number) => number;
/**
 * 从 URL 获取参数的值
 * @param url
 * @param param
 * @returns
 * @example
 *   getParam('http://domain.com?message=hello', 'message'); // 'hello'
 */
declare const getParam: (url: string, param: string) => string | null;
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
declare const getTypeOf: (val: any) => string;
/**
 * 按顺序运行 Promise
 * @param promises
 * @returns
 */
declare const run: (promises: Promise<any>[]) => Promise<any>;
/**
 * 检查一个值是否是 promise like
 * @param val
 * @returns
 */
declare const isPromiseLike: (val: any) => boolean;
/**
 * 获取cookie的值
 * @param name
 * @returns
 * @example
 *   cookie('_ga'); // GA1.2.825309271.1581874719
 */
declare const cookie: (name: string) => string | null;
/**
 * 页面重定向到 HTTPS
 * @returns
 */
declare const redirectHttps: () => void;
/**
 * 模拟掷骰子
 * @returns
 * @example
 *   throwdice(); // 4
 *   throwdice(); // 1
 *   throwdice(); // 6
 */
declare const throwdice: () => number;
/**
 * 等待一段时间
 * @param milliseconds
 * @returns
 */
declare const wait: (milliseconds: number) => Promise<unknown>;
/**
 * 交换两个变量的值
 * @param a
 * @param b
 */
declare const swap: <T, K>(a: T | K, b: T | K) => [T | K, T | K];
/**
 * 检查一个值是否是正则表达式
 * @param value
 * @returns
 */
declare const isRegExp: (value: any) => boolean;
/**
 * 检查一个值是否是 base32 编码的
 * @param value
 * @returns
 */
declare const isBase32: (value: string) => boolean;
/**
 * 检查一个值是否是 base58 编码的
 * @param value
 * @returns
 */
declare const isBase58: (value: string) => boolean;
/**
 * 检查一个值是否是 base64 编码的
 * @param value
 * @returns
 */
declare const isBase64: (value: string) => boolean;
/**
 * 检查一个值是否为 nil (即 null 或 undefined)
 * @param value
 * @returns
 */
declare const isNil: (value: any) => boolean;
export { celsiusToFahrenheit, clearCookies, coalesce, cookie, cookies, decode, encode, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInElastic, easeOutElastic, easeInOutElastic, fahrenheitToCelsius, getTypeOf, getUrlParams, getParam, hexToRgb, isBase32, isBase58, isBase64, isDarkMode, isNil, isPromiseLike, isRegExp, isRunningInBrowser, isRunningInNodeJS, isRunningInJest, linear, redirectHttps, rgbToHex, run, swap, throwdice, toFullHexColor, uid, wait };
