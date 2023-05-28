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
declare const suffixAmPm: (h: number) => string;
/**
 * 计算两个日期之间的月数
 * @param startDate
 * @param endDate
 * @returns
 * @example
 *   monthDiff(new Date('2020-01-01'), new Date('2021-01-01')); // 12
 */
declare const monthDiff: (startDate: Date, endDate: Date) => number;
/**
 * 判断日期A是否晚于日期B
 * @param a
 * @param b
 * @returns
 * @example
 *   compare(new Date('2020-03-30'), new Date('2020-01-01')); // true
 */
declare const compare: (a: Date, b: Date) => boolean;
/**
 * 将日期转换为 YYYY-MM-DD 格式
 * @param date
 * @returns
 * @example
 *   formatYmd(new Date()); // 2020-05-06
 */
declare const formatYmd: (date: Date) => string;
/**
 * 计算两个日期之间相差的天数
 * @param date
 * @param otherDate
 * @returns
 */
declare const diffDays: (date: Date, otherDate: Date) => number;
/**
 * 获取明年此时的 date
 */
declare const getPlusOneYear: () => Date;
/**
 * 获取明日此时的 date
 */
declare const getTomorrow: () => Date;
/**
 * 获取昨日此时的 date
 */
declare const getYesterday: () => Date;
/**
 * 从日期中提取年、月、日、时、分、秒和毫秒
 * @param date
 * @returns
 */
declare const extract: (date: Date) => string[];
/**
 * 将秒数转换为 hh:mm:ss 格式
 * @param s
 * @returns
 * @example
 *  formatSeconds(200); // 00:03:20
 *  formatSeconds(500); // 00:08:20
 */
declare const formatSeconds: (s: number) => string;
/**
 * 以秒为单位获取当前时间戳
 * @returns
 * @example
 *   ts() // 1685089676
 */
declare const ts: () => number;
/**
 * 从日期获取一年中的第几天
 * @param date
 * @returns
 * @example
 *   dayOfYear(new Date(2020, 04, 16)); // 137
 */
declare const dayOfYear: (date: Date) => number;
/**
 * 获取 d 所在月份的第一个 date
 * @param d
 * @returns
 * @example
 *   getFirstDate() // Date { Mon May 01 2023 00:00:00 GMT+0800 (中国标准时间) }
 */
declare const getFirstDate: (d?: Date) => Date;
/**
 * 格式化给定语言环境的日期
 * @param date
 * @param locale
 * @returns
 * @example
 *   format(new Date(), 'pt-BR'); // 06/05/2020
 */
declare const format: (date: Date, locale: string) => string;
/**
 * 获取日期的月份名称
 * @param date
 * @returns
 */
declare const getMonthName: (date: Date) => string;
/**
 * 获取日期的星期
 * @param date
 * @returns
 */
declare const getWeekday: (date: Date) => string;
/**
 * 获取日期所在的季度
 * @param d
 * @returns
 * @example
 *   getQuarter() // 2;
 */
declare const getQuarter: (d?: Date) => number;
/**
 * 获取 d 所在月份的最后一个 date
 * @param d
 * @returns
 * @example
 *   getLastDate // Date { Mon May 01 2023 00:00:00 GMT+0800 (中国标准时间) }
 */
declare const getLastDate: (d?: Date) => Date;
/**
 * 获取给定月份的天数
 * @param month
 * @param year
 * @returns
 * @example
 */
declare const daysInMonth: (month: number, year: number) => number;
/**
 * 获取时区字符串
 * @returns
 * @example
 *   getTimezone(); // 'Asia/Saigon'
 */
declare const getTimezone: () => string;
/**
 * 从十进制时间获取小时和分钟
 * @param value
 * @returns
 * @example
 *   getHoursAndMinutes(4.5); //[4, 30]
 *   getHoursAndMinutes(7.89); // [7, 53]
 */
declare const getHoursAndMinutes: (value: number) => [number, number];
/**
 * 获取一年中的总天数
 * @param year
 * @returns
 * @example
 *  numberOfDay(2008); // 366
 *  numberOfDay(2009); // 365
 */
declare const numberOfDays: (year: number) => number;
/**
 * 对日期数组进行降序
 * @param arr
 * @returns
 */
declare const sortDescending: (arr: Date[]) => Date[];
/**
 * 对日期数组进行升序
 * @param arr
 * @returns
 */
declare const sortAscending: (arr: Date[]) => Date[];
/**
 * 重置当前日期至午夜
 * @returns
 */
declare const midnightOfToday: () => Date;
export { compare, dayOfYear, daysInMonth, diffDays, extract, format, formatYmd, formatSeconds, getFirstDate, getHoursAndMinutes, getLastDate, getMonthName, getPlusOneYear, getQuarter, getTimezone, getTomorrow, getWeekday, getYesterday, midnightOfToday, monthDiff, numberOfDays, suffixAmPm, sortAscending, sortDescending, ts };
