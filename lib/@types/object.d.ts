/**
 * 检查多个对象是否相等;
 * @param objects
 * @returns
 * @example
 *   isEqual({ foo: 'bar' }, { foo: 'bar' }); // true
 *   isEqual({ foo: 'bar' }, { bar: 'foo' }); // false
 */
declare const isObjsEqual: (...objects: object[]) => boolean;
/**
 * 通过键返回具有唯一值的对象，键值相同的后面会覆盖前面的
 * @param arrObj
 * @param keyUnique
 * @returns
 * @example
 *   getUniqueArrObj([
 *    { k: 1, e: 1 }, { k: 1, e: 1 }, { k: 3, e: 1 }], 'k'); // [{ k: 1, e: 1 }, { k: 3, e: 1 }]
 */
declare const getUniqueArrObj: <T extends Record<string, any>>(arrObj: T[], keyUnique: keyof T) => T[];
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
declare const pluck: <T extends Record<string, any>>(objs: T[], property: keyof T) => T[keyof T][];
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
declare const renameKeys: <T extends Record<string, any>>(keysMap: T, obj: T) => {};
/**
 * 删除对象的一部分属性
 * @param obj
 * @param keys
 * @returns
 * @example
 *   omit({ a: '1', b: '2', c: '3' }, ['a', 'b']); // { c: '3' }
 */
declare const omit: <T extends Record<string, any>>(obj: T, keys: (keyof T)[]) => {};
/**
 * 反转对象的键和值
 * @param obj
 * @returns
 * @example
 *   invert({ a: '1', b: '2', c: '3' }); // { 1: 'a', 2: 'b', 3: 'c' }
 */
declare const invert: <T extends Record<string, any>>(obj: T) => any;
/**
 * 选择对象属性的子集
 * @param obj
 * @param keys
 * @returns
 * @example
 *   pick({ a: '1', b: '2', c: '3' }, ['a', 'b']); // { a: '1', b: '2' }
 */
declare const pick: <T extends Record<string, any>>(obj: T, keys: (keyof T)[]) => {};
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
declare const removeNullUndefined: <T extends Record<string, any>>(obj: T) => { [K in keyof T as T[K] extends null | undefined ? never : K]: T[K]; };
/**
 * 获取对象给定路径的值
 * @param path
 * @param obj
 * @returns
 * @example
 *   getValue('a.b', { a: { b: 'Hello World' } }); // 'Hello World';
 */
declare const getValue: <T extends Record<string, any>>(path: string, obj: T) => T;
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
declare const sort: <T extends Record<string, any>>(obj: T) => Record<string, any>;
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
declare const isPlainObject: (v: any) => boolean;
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
declare const isObject: (val: unknown) => val is Record<any, any>;
/**
 * 检查一个对象是否为空
 * @param obj
 * @returns
 */
declare const isEmptyObj: (obj: object) => boolean;
export { getUniqueArrObj, getValue, isEmptyObj, isObject, isObjsEqual, isPlainObject, omit, pick, pluck, removeNullUndefined, renameKeys, sort, invert };
