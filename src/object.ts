/**
 * 检查多个对象是否相等;
 * @param objects
 * @returns
 * @example
 *   isEqual({ foo: 'bar' }, { foo: 'bar' }); // true
 *   isEqual({ foo: 'bar' }, { bar: 'foo' }); // false
 */
const isObjsEqual = (...objects: object[]): boolean => objects.every(
  (obj) => JSON.stringify(obj) === JSON.stringify(objects[0])
);

/**
 * 通过键返回具有唯一值的对象，键值相同的后面会覆盖前面的
 * @param arrObj
 * @param keyUnique
 * @returns
 * @example
 *   getUniqueArrObj([
 *    { k: 1, e: 1 }, { k: 1, e: 1 }, { k: 3, e: 1 }], 'k'); // [{ k: 1, e: 1 }, { k: 3, e: 1 }]
 */
const getUniqueArrObj = <T extends Record<string, any>>(
  arrObj: T[],
  keyUnique: keyof T
) => Array.from(
  new Map(arrObj.map((item) => [item[keyUnique], item])).values()
);

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
const pluck = <T extends Record<string, any>>(
  objs: T[],
  property: keyof T
) => objs.map((obj) => obj[property]);

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
const renameKeys = <T extends Record<string, any>>(keysMap: T, obj: T) => Object.keys(obj)
  .reduce((acc, key) => ({ ...acc, ...{ [keysMap[key] || key]: obj[key] } }), {});

/**
 * 删除对象的一部分属性
 * @param obj
 * @param keys
 * @returns
 * @example
 *   omit({ a: '1', b: '2', c: '3' }, ['a', 'b']); // { c: '3' }
 */
const omit = <T extends Record<string, any>>(obj: T, keys: (keyof T)[]) => Object.keys(obj)
  .filter((k) => !keys.includes(k))
  .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {});

/**
 * 反转对象的键和值
 * @param obj
 * @returns
 * @example
 *   invert({ a: '1', b: '2', c: '3' }); // { 1: 'a', 2: 'b', 3: 'c' }
 */
const invert = <T extends Record<string, any>>(obj: T) => Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [v, k])
);

/**
 * 选择对象属性的子集
 * @param obj
 * @param keys
 * @returns
 * @example
 *   pick({ a: '1', b: '2', c: '3' }, ['a', 'b']); // { a: '1', b: '2' }
 */
const pick = <T extends Record<string, any>>(obj: T, keys: (keyof T)[]) => Object.keys(obj)
  .filter((k) => keys.includes(k))
  .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {});

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
const removeNullUndefined = <T extends Record<string, any>>(obj: T) => Object.entries(obj)
  .filter(([, v]) => v != null)
  .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}) as {
  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K]
};

/**
 * 获取对象给定路径的值
 * @param path
 * @param obj
 * @returns
 * @example
 *   getValue('a.b', { a: { b: 'Hello World' } }); // 'Hello World';
 */
const getValue = <T extends Record<string, any>>(path: string, obj: T) => path.split('.').reduce((acc, c) => acc && acc[c], obj);

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
const sort = <T extends Record<string, any>>(obj: T) => Object.keys(obj)
  .sort()
  .reduce((p, c) => {
    // eslint-disable-next-line no-param-reassign
    p[c] = obj[c];
    return p;
  }, {} as Record<string, any>);

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
const isPlainObject = (v: any): boolean => !!v && typeof v === 'object' && (Object.getPrototypeOf(v) === null || Object.getPrototypeOf(v) === Object.prototype);

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
const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object';

/**
 * 检查一个对象是否为空
 * @param obj
 * @returns
 */
const isEmptyObj = (obj: object): boolean => JSON.stringify(obj) === '{}';

export {
  getUniqueArrObj,
  getValue,
  isEmptyObj,
  isObject,
  isObjsEqual,
  isPlainObject,
  omit,
  pick,
  pluck,
  removeNullUndefined,
  renameKeys,
  sort,
  invert
};
