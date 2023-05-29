import { isRunningInBrowser } from './misc';

/**
 * 将字符串首字符大小写
 * @param str
 * @param type
 * @returns
 * @example
 *   capitalize('hello world'); // Hello world
 */
const capitalize = <T extends string>(str: T, type: 'toLowerCase' | 'toUpperCase' = 'toUpperCase') => str.replace(/^([a-z])/, (first) => first[type]()) as Capitalize<T> | Uncapitalize<T>;

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
const isRelative = (path: string): boolean => !/^([a-z]+:)?[\\/]/i.test(path);

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
const isAbsoluteUrl = (url: string): boolean => /^[a-z][a-z0-9+.-]*:/.test(url);

/**
 * 反转字符串
 * @param str
 * @returns
 * @example
 *   reverse('hello world'); // 'dlrow olleh'
 */
const reverse = (str: string): string => str.split('').reverse().join('');

/**
 * 检查一个字符串是否是回文
 * @param str
 * @returns
 * @example
 *   isPalindrome('abc'); // false
 *   isPalindrome('abcba'); // true
 */
const isPalindrome = (str: string): boolean => str === reverse(str);

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
const areAnagram = (str1: string, str2: string): boolean => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

/**
 * 将 base64 编码的字符串转换为 uint8 数组
 * @param str
 * @returns
 */
const base64ToUint8 = (
  str: string
): Uint8Array => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));

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
const toCamelCase = (str: string): string => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

/**
 * 检查字符串是否由重复的字符序列组成
 * @param str
 * @returns
 * @example
 *   consistsRepeatedSubstring('aa'); // true
 *   consistsRepeatedSubstring('ababab'); // true
 *   consistsRepeatedSubstring('abc'); // false
 */
const consistsRepeatedSubstring = (str: string): boolean => `${str}${str}`.indexOf(str, 1) !== str.length;

/**
 * 将字符串转换为 PascalCase
 * @param str
 * @returns
 * @example
 *   toPascalCase('hello world'); // 'HelloWorld'
 *   toPascalCase('hello.world'); // 'HelloWorld'
 *   toPascalCase('foo_bar-baz'); // FooBarBaz
 */
const toPascalCase = (str: string): string => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');

/**
 * 将字符串转换为 URL slug
 * @param str
 * @returns
 * @example
 *   slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'
 */
const slugify = (str: string): string => str
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '');

/**
 * 将 windows 路径转换为 Unix 路径
 * @param path
 * @returns
 * @example
 *   toUnixPath('./foo/bar/baz'); // foo/bar/baz
 *   toUnixPath('C:\\foo\\bar\\baz'); // /foo/bar/baz
 */
const toUnixPath = (path: string): string => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');

/**
 * 将 uint8 数组转换为 base64 编码的字符串
 * @param arr
 * @returns
 */
const uint8ToBase64 = (arr: Uint8Array): string => {
  if (isRunningInBrowser) {
    return btoa(
      Array(arr.length)
        .fill('')
        .map((_, i) => String.fromCharCode(arr[i]))
        .join('')
    );
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
const snakeToCamel = (str: string): string => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substring(1));

/**
 * 将 camelCase 转换为 kebab-case
 * @param str
 * @returns
 * @example
 *   kebabToCamel('background-color'); // 'backgroundColor'
 */
const kebabToCamel = (str: string): string => str.replace(/-./g, (m) => m.toUpperCase()[1]);
/**
 * 将 kebab-case 转换为 camelCase
 * @param str
 * @returns
 * @example
 *   camelToKebab('backgroundColor'); // 'background-color'
 */
const camelToKebab = (str: string): string => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
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
const getIndex = (col: string): number => col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);

/**
 * 计算字符串中某个字符的出现次数
 * @param str
 * @param char
 * @returns
 * @example
 *   countOccurrences('a.b.c.d.e', '.'); // 4
 */
const countOccurrences = (
  str: string,
  char: string
): number => str.split(char).length - 1;

/**
 * 解码 HTML 实体
 * @param str
 * @returns
 */
const decodeHtmlEntities = (str: string): string => str.replace(/&#(\w+)(^\w|;)?/g, (_, dec) => String.fromCharCode(dec));

/**
 * 计算字符串中的单词数
 * @param str
 * @returns
 * @example
 *   countWords('Hello World'); // 2
 *   countWords('Hello    World'); // 2
 *   countWords('  Hello  World  '); // 2
 */
const countWords = (str: string): number => str.trim().split(/\s+/).length;

/**
 * 完全替换掉 html 特殊字符
 * @param str
 * @returns
 */
const escape = (str: string): string => str
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/'/g, '&#39;')
  .replace(/"/g, '&quot;');

/**
 * 取消转义 html
 * @param str
 * @returns
 */
const unescape = (str: string): string => str
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#0*39;/g, "'")
  .replace(/&quot;/g, '"');

/**
 * 获取不带任何参数的基本 URL
 * @param url
 * @returns
 * @example
 *   baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world'); // 'https://domain.com/path/sub/path'
 */
const getBaseUrl = (url: string) => url.split('?')[0];

/**
 * 生成字符串的哈希
 * @param str
 * @returns
 * @example
 *   hash('hello'); // 99162322
 */
const hash = (str: string): number => str.split('').reduce((prev, curr) => Math.floor(Math.imul(31, prev) + curr.charCodeAt(0)), 0);

/**
 * 从文件名中获取文件扩展名
 * @param fileName
 * @returns
 */
const ext = (fileName: string): string | undefined => fileName.split('.').pop();

/**
 * 从 URL 获取文件名
 * @param url
 * @returns
 * @example
 *   fileName('http://domain.com/path/to/document.pdf'); // 'document.pdf'
 */
const fileName = (url: string): string => url.substring(url.lastIndexOf('/') + 1);

/**
 * 获取字符串的字节长度
 * @param str
 * @returns
 * @example
 *   bytes('hello world'); // 11
 *   bytes('🎉'); // 4
 */
const bytes = (str: string): number => new Blob([str]).size;

/**
 * 规范化文件路径斜杠
 * @param path
 * @returns
 * @example
 *   normalizePath('\\foo\\bar\\baz\\'); // /foo/bar/baz/
 *   normalizePath('.//foo//bar///////baz/'); // ./foo/bar/baz/
 */
const normalizePath = (path: string): string => path.replace(/[\\/]+/g, '/');
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
const prependNumbers = (str: string): string => str
  .split(/\r?\n/)
  .map((line, i) => `${(i + 1).toString().padStart(2, ' ')} ${line}`)
  .join('\n');

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
const removeDuplicateLines = (str: string): string => Array.from(new Set(str.split(/\r?\n/))).join('\n');

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
const removeEmptyLines = (str: string): string => str
  .split(/\r?\n/)
  .filter((line) => line.trim() !== '')
  .join('\n');

/**
 * 去除字符串中的空格
 * @param str
 * @returns
 * @example
 *   removeSpaces('hel lo wor ld'); // 'helloworld'
 */
const removeSpaces = (str: string): string => str.replace(/\s/g, '');

/**
 * 用 br 元素替换所有换行符
 * @param str
 * @returns
 * @example
 */
const nl2br = (str: string): string => str.replace(/\r?\n/g, '<br>');

/**
 * 用指定数量的空格替换所有制表符
 * @param str
 * @param numSpaces
 * @returns
 */
const replaceTab = (str: string, numSpaces = 4): string => str.replaceAll('\t', ' '.repeat(numSpaces));

/**
 * 用一个空格替换多个空格
 * @param str
 * @returns
 * @example
 *   replaceSpaces('this\n   is     \ta    \rmessage'); // 'this is a message'
 */
const replaceOnlySpaces = (str: string): string => str.replace(/  +/g, ' ');

/**
 * 用一个字符 char 替换字符串 str 的前 num 个字符;
 * @param str
 * @param num
 * @param char
 * @example
 *   mask(1234567890, 3, '*'); // ***4567890
 */
const mask = (str: string, num: number, char: string): string => {
  const copyStr = String(str);
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
const reverseLines = (str: string): string => str.split(/\r?\n/).reverse().join('\n');

/**
 * 按字母顺序对文本文档的行进行排序
 * @param str
 * @returns
 */
const sortedLines = (str: string, ascending = false): string => {
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
const sortString = (str: string): string => str
  .split('')
  .sort((a, b) => a.localeCompare(b))
  .join('');

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
const stripAnsiCodes = (str: string): string => str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');

/**
 * 交换字符串中字符的大小写
 * @param str
 * @returns
 * @example
 *   swapCase('Hello World'); // 'hELLO wORLD'
 */
const swapCase = (str: string): string => str
  .split('')
  .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
  .join('');

/**
 * 去除首尾的 char 字符
 * @param str
 * @param char
 * @returns
 */
const trim = (str: string, char: string): string => str.split(char).filter(Boolean).join();

/**
 * 在完整单词处截断字符串
 * @param str
 * @param max
 * @param suffix
 * @returns
 * @example
 *   truncate('This is a long message', 20, '...'); // 'This is a long...'
 */
const truncateAtWords = (str: string, max: number, suffix: string = '...'): string => (str.length < max ? str : `${str.substring(0, str.substring(0, max - suffix.length).lastIndexOf(' '))}${suffix}`);

/**
 * 大小写字符串中每个单词的第一个字符
 * @param str
 * @param type
 * @returns
 * @example
 *   caseWords('hello world'); // 'Hello World'
 */
const caseWords = (str: string, type: 'toLowerCase' | 'toUpperCase' = 'toUpperCase'): string => str.replace(/^(.)|\s+(.)/g, (c) => c[type]());

/**
 * 检查一个字符串是否包含大写字符
 * @param str
 * @returns
 * @example
 *   containsCase('Hello World'); // true
 *   containsCase('HELLO WORLD'); // false
 */
const containsUpperCase = (str: string): boolean => str !== str.toLowerCase();

/**
 * 检查一个字符串是否全小写字符
 * @param str
 * @returns
 */
const isLowerCase = (str: string): boolean => !containsUpperCase(str);

/**
 * 检查一个字符串是否包含小写字符
 * @param str
 * @returns
 * @example
 *   containsCase('Hello World'); // true
 *   containsCase('HELLO WORLD'); // false
 */
const containsLowerCase = (str: string): boolean => str !== str.toUpperCase();

/**
 * 检查一个字符串是否全大写字符
 * @param str
 * @returns
 */
const isUpperCase = (str: string): boolean => !containsLowerCase(str);

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
const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);

/**
 * 检查字符串是否只包含 ASCII 字符
 * @param str
 * @returns
 */
// eslint-disable-next-line no-control-regex
const isAscii = (str: string): boolean => /^[\x00-\x7F]+$/.test(str);

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
const isAlphanumeric = (str: string): boolean => /^[0-9A-Z]+$/i.test(str);

/**
 * 检查字符串是否包空格
 * @param str
 * @returns
 * @example
 *   containsWhitespace('hello world'); // true
 */
const containsWhitespace = (str: string): boolean => /\s/.test(str);

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
const isHexColor = (color: string): boolean => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

/**
 * 检查字符串是否为十六进制数;
 * @param str
 * @returns
 * @example
 *   isHexadecimal('123'); // true
 *   isHexadecimal('A1B2C3'); // true
 *   isHexadecimal('#123'); // false
 */
const isHexadecimal = (str: string): boolean => /^[A-F0-9]+$/i.test(str);

/**
 * 检查字符串是否为 MongoDB ObjectId
 * @param str
 * @returns
 */
const isMongoDBId = (str: string): boolean => str.length === 24 && /^[A-F0-9]+$/i.test(str);

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
const isAlpha = (str: string): boolean => /^[A-Z]+$/i.test(str);

/**
 * 检查字符串是否为八进制数
 * @param str
 * @returns
 */
const isOctal = (str: string): boolean => /^(0o)?[0-7]+$/i.test(str);

/**
 * 检查值是否为业务标识符码
 * @param value
 * @returns
 */
const isBIC = (value: string): boolean => /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);

export {
  areAnagram,
  base64ToUint8,
  bytes,
  camelToKebab,
  capitalize,
  containsLowerCase,
  containsUpperCase,
  containsWhitespace,
  countOccurrences,
  consistsRepeatedSubstring,
  countWords,
  decodeHtmlEntities,
  escape,
  ext,
  fileName,
  getBaseUrl,
  getIndex,
  hash,
  isAbsoluteUrl,
  isAlpha,
  isAlphanumeric,
  isAscii,
  isBIC,
  isHexadecimal,
  isHexColor,
  isLowerCase,
  isMongoDBId,
  isNumeric,
  isOctal,
  isPalindrome,
  isRelative,
  isUpperCase,
  kebabToCamel,
  mask,
  nl2br,
  normalizePath,
  prependNumbers,
  removeDuplicateLines,
  removeEmptyLines,
  removeSpaces,
  replaceOnlySpaces,
  replaceTab,
  reverse,
  reverseLines,
  slugify,
  snakeToCamel,
  sortString,
  sortedLines,
  stripAnsiCodes,
  swapCase,
  toCamelCase,
  toPascalCase,
  toUnixPath,
  trim,
  truncateAtWords,
  uint8ToBase64,
  unescape,
  caseWords
};
