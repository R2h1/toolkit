/**
 * 将字符串首字符大小写
 * @param str
 * @param type
 * @returns
 * @example
 *   capitalize('hello world'); // Hello world
 */
declare const capitalize: <T extends string>(str: T, type?: 'toLowerCase' | 'toUpperCase') => Capitalize<T> | Uncapitalize<T>;
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
declare const isRelative: (path: string) => boolean;
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
declare const isAbsoluteUrl: (url: string) => boolean;
/**
 * 反转字符串
 * @param str
 * @returns
 * @example
 *   reverse('hello world'); // 'dlrow olleh'
 */
declare const reverse: (str: string) => string;
/**
 * 检查一个字符串是否是回文
 * @param str
 * @returns
 * @example
 *   isPalindrome('abc'); // false
 *   isPalindrome('abcba'); // true
 */
declare const isPalindrome: (str: string) => boolean;
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
declare const areAnagram: (str1: string, str2: string) => boolean;
/**
 * 将 base64 编码的字符串转换为 uint8 数组
 * @param str
 * @returns
 */
declare const base64ToUint8: (str: string) => Uint8Array;
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
declare const toCamelCase: (str: string) => string;
/**
 * 检查字符串是否由重复的字符序列组成
 * @param str
 * @returns
 * @example
 *   consistsRepeatedSubstring('aa'); // true
 *   consistsRepeatedSubstring('ababab'); // true
 *   consistsRepeatedSubstring('abc'); // false
 */
declare const consistsRepeatedSubstring: (str: string) => boolean;
/**
 * 将字符串转换为 PascalCase
 * @param str
 * @returns
 * @example
 *   toPascalCase('hello world'); // 'HelloWorld'
 *   toPascalCase('hello.world'); // 'HelloWorld'
 *   toPascalCase('foo_bar-baz'); // FooBarBaz
 */
declare const toPascalCase: (str: string) => string;
/**
 * 将字符串转换为 URL slug
 * @param str
 * @returns
 * @example
 *   slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'
 */
declare const slugify: (str: string) => string;
/**
 * 将 windows 路径转换为 Unix 路径
 * @param path
 * @returns
 * @example
 *   toUnixPath('./foo/bar/baz'); // foo/bar/baz
 *   toUnixPath('C:\\foo\\bar\\baz'); // /foo/bar/baz
 */
declare const toUnixPath: (path: string) => string;
/**
 * 将 uint8 数组转换为 base64 编码的字符串
 * @param arr
 * @returns
 */
declare const uint8ToBase64: (arr: Uint8Array) => string;
/**
 * 将 snake_case 转换为 camelCase
 * @param str
 * @returns
 * @example
 *   snakeToCamel('HELLO_world'); // 'helloWorld'
 */
declare const snakeToCamel: (str: string) => string;
/**
 * 将 camelCase 转换为 kebab-case
 * @param str
 * @returns
 * @example
 *   kebabToCamel('background-color'); // 'backgroundColor'
 */
declare const kebabToCamel: (str: string) => string;
/**
 * 将 kebab-case 转换为 camelCase
 * @param str
 * @returns
 * @example
 *   camelToKebab('backgroundColor'); // 'background-color'
 */
declare const camelToKebab: (str: string) => string;
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
declare const getIndex: (col: string) => number;
/**
 * 计算字符串中某个字符的出现次数
 * @param str
 * @param char
 * @returns
 * @example
 *   countOccurrences('a.b.c.d.e', '.'); // 4
 */
declare const countOccurrences: (str: string, char: string) => number;
/**
 * 解码 HTML 实体
 * @param str
 * @returns
 */
declare const decodeHtmlEntities: (str: string) => string;
/**
 * 计算字符串中的单词数
 * @param str
 * @returns
 * @example
 *   countWords('Hello World'); // 2
 *   countWords('Hello    World'); // 2
 *   countWords('  Hello  World  '); // 2
 */
declare const countWords: (str: string) => number;
/**
 * 完全替换掉 html 特殊字符
 * @param str
 * @returns
 */
declare const escape: (str: string) => string;
/**
 * 取消转义 html
 * @param str
 * @returns
 */
declare const unescape: (str: string) => string;
/**
 * 获取不带任何参数的基本 URL
 * @param url
 * @returns
 * @example
 *   baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world'); // 'https://domain.com/path/sub/path'
 */
declare const getBaseUrl: (url: string) => string;
/**
 * 生成字符串的哈希
 * @param str
 * @returns
 * @example
 *   hash('hello'); // 99162322
 */
declare const hash: (str: string) => number;
/**
 * 从文件名中获取文件扩展名
 * @param fileName
 * @returns
 */
declare const ext: (fileName: string) => string | undefined;
/**
 * 从 URL 获取文件名
 * @param url
 * @returns
 * @example
 *   fileName('http://domain.com/path/to/document.pdf'); // 'document.pdf'
 */
declare const fileName: (url: string) => string;
/**
 * 获取字符串的字节长度
 * @param str
 * @returns
 * @example
 *   bytes('hello world'); // 11
 *   bytes('🎉'); // 4
 */
declare const bytes: (str: string) => number;
/**
 * 规范化文件路径斜杠
 * @param path
 * @returns
 * @example
 *   normalizePath('\\foo\\bar\\baz\\'); // /foo/bar/baz/
 *   normalizePath('.//foo//bar///////baz/'); // ./foo/bar/baz/
 */
declare const normalizePath: (path: string) => string;
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
declare const prependNumbers: (str: string) => string;
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
declare const removeDuplicateLines: (str: string) => string;
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
declare const removeEmptyLines: (str: string) => string;
/**
 * 去除字符串中的空格
 * @param str
 * @returns
 * @example
 *   removeSpaces('hel lo wor ld'); // 'helloworld'
 */
declare const removeSpaces: (str: string) => string;
/**
 * 用 br 元素替换所有换行符
 * @param str
 * @returns
 * @example
 */
declare const nl2br: (str: string) => string;
/**
 * 用指定数量的空格替换所有制表符
 * @param str
 * @param numSpaces
 * @returns
 */
declare const replaceTab: (str: string, numSpaces?: number) => string;
/**
 * 用一个空格替换多个空格
 * @param str
 * @returns
 * @example
 *   replaceSpaces('this\n   is     \ta    \rmessage'); // 'this is a message'
 */
declare const replaceOnlySpaces: (str: string) => string;
/**
 * 用一个字符 char 替换字符串 str 的前 num 个字符;
 * @param str
 * @param num
 * @param char
 * @example
 *   mask(1234567890, 3, '*'); // ***4567890
 */
declare const mask: (str: string, num: number, char: string) => string;
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
declare const reverseLines: (str: string) => string;
/**
 * 按字母顺序对文本文档的行进行排序
 * @param str
 * @returns
 */
declare const sortedLines: (str: string, ascending?: boolean) => string;
/**
 * 按字母顺序对字符串的字符进行排序
 * @param str
 * @returns
 * @example
 *   sort('hello world'); // dehllloorw
 */
declare const sortString: (str: string) => string;
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
declare const stripAnsiCodes: (str: string) => string;
/**
 * 交换字符串中字符的大小写
 * @param str
 * @returns
 * @example
 *   swapCase('Hello World'); // 'hELLO wORLD'
 */
declare const swapCase: (str: string) => string;
/**
 * 去除首尾的 char 字符
 * @param str
 * @param char
 * @returns
 */
declare const trim: (str: string, char: string) => string;
/**
 * 在完整单词处截断字符串
 * @param str
 * @param max
 * @param suffix
 * @returns
 * @example
 *   truncate('This is a long message', 20, '...'); // 'This is a long...'
 */
declare const truncateAtWords: (str: string, max: number, suffix?: string) => string;
/**
 * 大小写字符串中每个单词的第一个字符
 * @param str
 * @param type
 * @returns
 * @example
 *   caseWords('hello world'); // 'Hello World'
 */
declare const caseWords: (str: string, type?: 'toLowerCase' | 'toUpperCase') => string;
/**
 * 检查一个字符串是否包含大写字符
 * @param str
 * @returns
 * @example
 *   containsCase('Hello World'); // true
 *   containsCase('HELLO WORLD'); // false
 */
declare const containsUpperCase: (str: string) => boolean;
/**
 * 检查一个字符串是否全小写字符
 * @param str
 * @returns
 */
declare const isLowerCase: (str: string) => boolean;
/**
 * 检查一个字符串是否包含小写字符
 * @param str
 * @returns
 * @example
 *   containsCase('Hello World'); // true
 *   containsCase('HELLO WORLD'); // false
 */
declare const containsLowerCase: (str: string) => boolean;
/**
 * 检查一个字符串是否全大写字符
 * @param str
 * @returns
 */
declare const isUpperCase: (str: string) => boolean;
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
declare const isNumeric: (str: string) => boolean;
/**
 * 检查字符串是否只包含 ASCII 字符
 * @param str
 * @returns
 */
declare const isAscii: (str: string) => boolean;
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
declare const isAlphanumeric: (str: string) => boolean;
/**
 * 检查字符串是否包空格
 * @param str
 * @returns
 * @example
 *   containsWhitespace('hello world'); // true
 */
declare const containsWhitespace: (str: string) => boolean;
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
declare const isHexColor: (color: string) => boolean;
/**
 * 检查字符串是否为十六进制数;
 * @param str
 * @returns
 * @example
 *   isHexadecimal('123'); // true
 *   isHexadecimal('A1B2C3'); // true
 *   isHexadecimal('#123'); // false
 */
declare const isHexadecimal: (str: string) => boolean;
/**
 * 检查字符串是否为 MongoDB ObjectId
 * @param str
 * @returns
 */
declare const isMongoDBId: (str: string) => boolean;
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
declare const isAlpha: (str: string) => boolean;
/**
 * 检查字符串是否为八进制数
 * @param str
 * @returns
 */
declare const isOctal: (str: string) => boolean;
/**
 * 检查值是否为业务标识符码
 * @param value
 * @returns
 */
declare const isBIC: (value: string) => boolean;
export { areAnagram, base64ToUint8, bytes, camelToKebab, capitalize, containsLowerCase, containsUpperCase, containsWhitespace, countOccurrences, consistsRepeatedSubstring, countWords, decodeHtmlEntities, escape, ext, fileName, getBaseUrl, getIndex, hash, isAbsoluteUrl, isAlpha, isAlphanumeric, isAscii, isBIC, isHexadecimal, isHexColor, isLowerCase, isMongoDBId, isNumeric, isOctal, isPalindrome, isRelative, isUpperCase, kebabToCamel, mask, nl2br, normalizePath, prependNumbers, removeDuplicateLines, removeEmptyLines, removeSpaces, replaceOnlySpaces, replaceTab, reverse, reverseLines, slugify, snakeToCamel, sortString, sortedLines, stripAnsiCodes, swapCase, toCamelCase, toPascalCase, toUnixPath, trim, truncateAtWords, uint8ToBase64, unescape, caseWords };
