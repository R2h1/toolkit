import { castArray } from './array';

/**
 * 检查代码是否在浏览器中运行
 */
const isRunningInBrowser: boolean = typeof window === 'object' && typeof document === 'object';

/**
 * 检查代码是否在 Nodejs 中运行
 */
const isRunningInNodeJS: boolean = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

/**
 * 检查代码是否在 Jest 中运行
 */
const isRunningInJest: boolean = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;

/**
 * 检测夜间模式
 */
const isDarkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * 将摄氏度转换为华氏度
 * @param celsius
 * @returns
 * @example
 *   celsiusToFahrenheit(15); // 59
 *   celsiusToFahrenheit(0); // 32
 *   celsiusToFahrenheit(-20); // -4
 */
const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;

/**
 * 将华氏度转换为摄氏度
 * @param fahrenheit
 * @returns
 * @example
 *   fahrenheitToCelsius(59); // 15
 *   fahrenheitToCelsius(32); // 0
 */
const fahrenheitToCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;

/**
 * 清除所有 cookie
 * @returns
 */
const clearCookies = (): void => document.cookie.split(';').forEach(
  (c) => {
    document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
  }
);

/**
 * 将 3 位颜色转换为 6 位颜色
 * @param color
 * @returns
 * @example
 *   toFullHexColor('123'); // '#112233'
 *   toFullHexColor('#123'); // '#112233'
 *   toFullHexColor('#abc'); // '#aabbcc'
 */
const toFullHexColor = (color: string): string => `#${(color.startsWith('#') ? color.slice(1) : color)
  .split('')
  .map((c) => `${c}${c}`)
  .join('')}`;

/**
 *
 * @param hex
 * @returns
 * @example
 *   hexToRgb('#00ffff'); // "0, 255, 255"
 *   hexToRgb('#0ff'); // "0, 255, 255"
 */
const hexToRgb = (hex: string): string => String(hex
  .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
  .substring(1)
  .match(/.{2}/g)
  ?.map((x) => parseInt(x, 16)));

/**
 * 将 RGB 颜色转换为十六进制
 * @param red
 * @param green
 * @param blue
 * @returns
 * @example
 *   rgbToHex(0, 255, 255); // '#00ffff'
 */
const rgbToHex = (red: number, green: number, blue: number): string => `#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;

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
const decode = (token: string): string => decodeURIComponent(
  atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
    .split('')
    .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
    .join('')
);

/**
 * 将 cookie 转换为对象
 */
const cookies = document.cookie
  .split(';')
  .map((item) => item.split('='))
  .reduce((acc, [k, v]) => {
    acc[k.trim().replace('"', '')] = v;
    return acc;
  }, {} as Record<string, string>);

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
const getUrlParams = (query: string): Record<string, string> => {
  const data = Array.from(new URLSearchParams(query));
  return data.reduce((acc, [key, value]) => {
    if (acc[key]) {
      acc[key] = castArray(acc[key]).concat(value);
    } else {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, any>);
};

/**
 * 编码url
 * @param url
 * @returns
 */
const encode = (url: string): string => encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A')
  .replace(/'/g, '%27')
  .replace(/\(/g, '%28')
  .replace(/\)/g, '%29')
  .replace(/%20/g, '+');

/**
 * 生成唯一且递增的 id
 */
const uid = (() => {
  let id = 0;
  return () => {
    const res = id;
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
const coalesce = (...args: any[]): any[] => args.find((item) => ![undefined, null].includes(item));

/**
 * 缓动函数
 */
const linear = (t: number): number => t;
const easeInQuad = (t: number): number => t * t;
const easeOutQuad = (t: number): number => t * (2 - t);
const easeInOutQuad = (t: number): number => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
const easeInCubic = (t: number): number => t * t * t;
const easeOutCubic = (t: number): number => {
  // eslint-disable-next-line no-param-reassign
  t -= 1;
  return t * t * t + 1;
};
const easeInOutCubic = (t: number): number => (t < 0.5
  ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
const easeInQuart = (t: number): number => t * t * t * t;
const easeOutQuart = (t: number): number => {
  // eslint-disable-next-line no-param-reassign
  t -= 1;
  return 1 - easeInQuart(t);
};
const easeInOutQuart = (t: number): number => {
  if (t < 0.5) {
    return 8 * easeInQuart(t);
  }
  // eslint-disable-next-line no-param-reassign
  t -= 1;
  return 1 - 8 * easeInQuart(t);
};
const easeInQuint = (t: number): number => t * t * t * t * t;
const easeOutQuint = (t: number): number => {
  // eslint-disable-next-line no-param-reassign
  t -= 1;
  return 1 + easeInQuint(t);
};
const easeInOutQuint = (t: number): number => {
  if (t < 0.5) {
    return 16 * easeInQuint(t);
  }
  // eslint-disable-next-line no-param-reassign
  t -= 1;
  return 1 + 16 * easeInQuint(t);
};
const easeInSine = (t: number): number => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
const easeOutSine = (t: number): number => Math.sin((Math.PI / 2) * t);
const easeInOutSine = (t: number): number => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
const easeInElastic = (t: number): number => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = (t: number): number => ((0.04 * t) / (t - 1)) * Math.sin(25 * (t - 1));
const easeInOutElastic = (t: number): number => {
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
const getParam = (
  url: string,
  param: string
): string | null => new URLSearchParams(new URL(url).search).get(param);

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
const getTypeOf = (val: any): string => (Object.prototype.toString.call(val).match(/\[object (.*)\]/) as string[])[1];

/**
 * 按顺序运行 Promise
 * @param promises
 * @returns
 */
const run = (
  promises: Promise<any>[]
): Promise<any> => promises.reduce((p, c) => p.then((rp) => c.then(
  (rc) => [...rp, rc]
)), Promise.resolve([]));

/**
 * 获取cookie的值
 * @param name
 * @returns
 * @example
 *   cookie('_ga'); // GA1.2.825309271.1581874719
 */
const cookie = (name: string): string | null => `; ${document.cookie}`.split(`; ${name}=`).pop()?.split(';').shift() || null;

/**
 * 页面重定向到 HTTPS
 * @returns
 */
const redirectHttps = (): void => {
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
const throwdice = (): number => Math.floor(Math.random() * 6) + 1;

/**
 * 等待一段时间
 * @param milliseconds
 * @returns
 */
const wait = async (milliseconds: number) => new Promise(
  (resolve) => {
    setTimeout(resolve, milliseconds);
  }
);

/**
 * 交换两个变量的值
 * @param a
 * @param b
 */
const swap = <T, K>(a: T | K, b: T | K): [T | K, T | K] => {
  // eslint-disable-next-line no-param-reassign
  [a, b] = [b, a];
  return [a, b];
};

export {
  celsiusToFahrenheit,
  clearCookies,
  coalesce,
  cookie,
  cookies,
  decode,
  encode,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  fahrenheitToCelsius,
  getTypeOf,
  getUrlParams,
  getParam,
  hexToRgb,
  isDarkMode,
  isRunningInBrowser,
  isRunningInNodeJS,
  isRunningInJest,
  linear,
  redirectHttps,
  rgbToHex,
  run,
  swap,
  throwdice,
  toFullHexColor,
  uid,
  wait
};
