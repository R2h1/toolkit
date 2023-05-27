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
const suffixAmPm = (h: number): string => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;

/**
 * 计算两个日期之间的月数
 * @param startDate
 * @param endDate
 * @returns
 * @example
 *   monthDiff(new Date('2020-01-01'), new Date('2021-01-01')); // 12
 */
const monthDiff = (startDate: Date, endDate: Date): number => Math.max(0, (endDate.getFullYear()
  - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

/**
 * 判断日期A是否晚于日期B
 * @param a
 * @param b
 * @returns
 * @example
 *   compare(new Date('2020-03-30'), new Date('2020-01-01')); // true
 */
const compare = (a: Date, b: Date): boolean => a.getTime() > b.getTime();

/**
 * 将日期转换为 YYYY-MM-DD 格式
 * @param date
 * @returns
 * @example
 *   formatYmd(new Date()); // 2020-05-06
 */
const formatYmd = (date: Date): string => date.toISOString().slice(0, 10);

/**
 * 计算两个日期之间相差的天数
 * @param date
 * @param otherDate
 * @returns
 */
const diffDays = (date: Date, otherDate: Date): number => Math.ceil(
  Math.abs(date.valueOf() - otherDate.valueOf()) / (1000 * 60 * 60 * 24)
);

/**
 * 获取明年此时的 date
 */
const getPlusOneYear = () => {
  const plusOneYear = ((d) => new Date(d.setFullYear(d.getFullYear() + 1)))(new Date());
  return plusOneYear;
};

/**
 * 获取明日此时的 date
 */
const getTomorrow = () => new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);

/**
 * 获取昨日此时的 date
 */
const getYesterday = () => new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);

/**
 * 从日期中提取年、月、日、时、分、秒和毫秒
 * @param date
 * @returns
 */
const extract = (date: Date): string[] => date
  .toISOString()
  .split(/[^0-9]/)
  .slice(0, -1);

/**
 * 将秒数转换为 hh:mm:ss 格式
 * @param s
 * @returns
 * @example
 *  formatSeconds(200); // 00:03:20
 *  formatSeconds(500); // 00:08:20
 */
const formatSeconds = (s: number): string => new Date(s * 1000).toISOString().substring(11, 19);

/**
 * 以秒为单位获取当前时间戳
 * @returns
 * @example
 *   ts() // 1685089676
 */
const ts = (): number => Math.floor(new Date().getTime() / 1000);

/**
 * 从日期获取一年中的第几天
 * @param date
 * @returns
 * @example
 *   dayOfYear(new Date(2020, 04, 16)); // 137
 */
const dayOfYear = (date: Date): number => Math.floor(
  (date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24)
);

/**
 * 获取 d 所在月份的第一个 date
 * @param d
 * @returns
 * @example
 *   getFirstDate() // Date { Mon May 01 2023 00:00:00 GMT+0800 (中国标准时间) }
 */
const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1);

/**
 * 格式化给定语言环境的日期
 * @param date
 * @param locale
 * @returns
 * @example
 *   format(new Date(), 'pt-BR'); // 06/05/2020
 */
const format = (date: Date, locale: string): string => new Intl.DateTimeFormat(locale).format(date);

/**
 * 获取日期的月份名称
 * @param date
 * @returns
 */
const getMonthName = (date: Date): string => [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', ' November', 'December'][date.getMonth()];

/**
 * 获取日期的星期
 * @param date
 * @returns
 */
const getWeekday = (date: Date): string => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];

/**
 * 获取日期所在的季度
 * @param d
 * @returns
 * @example
 *   getQuarter() // 2;
 */
const getQuarter = (d = new Date()): number => Math.ceil((d.getMonth() + 1) / 3);

/**
 * 获取 d 所在月份的最后一个 date
 * @param d
 * @returns
 * @example
 *   getLastDate // Date { Mon May 01 2023 00:00:00 GMT+0800 (中国标准时间) }
 */
const getLastDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth() + 1, 0);

/**
 * 获取给定月份的天数
 * @param month
 * @param year
 * @returns
 * @example
 */
const daysInMonth = (month: number, year: number): number => new Date(year, month, 0).getDate();

/**
 * 获取时区字符串
 * @returns
 * @example
 *   getTimezone(); // 'Asia/Saigon'
 */
const getTimezone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone;

/**
 * 从十进制时间获取小时和分钟
 * @param value
 * @returns
 * @example
 *   getHoursAndMinutes(4.5); //[4, 30]
 *   getHoursAndMinutes(7.89); // [7, 53]
 */
const getHoursAndMinutes = (value: number): [number, number] => [Math.floor(value),
  Math.floor((value * 60) % 60)];

/**
 * 获取一年中的总天数
 * @param year
 * @returns
 * @example
 *  numberOfDay(2008); // 366
 *  numberOfDay(2009); // 365
 */
const numberOfDays = (year: number): number => (new Date(year, 1, 29).getDate() === 29 ? 366 : 365);

/**
 * 对日期数组进行降序
 * @param arr
 * @returns
 */
const sortDescending = (arr: Date[]): Date[] => arr.sort((a, b) => a.getTime() - b.getTime());

/**
 * 对日期数组进行升序
 * @param arr
 * @returns
 */
const sortAscending = (arr: Date[]): Date[] => arr.sort((a, b) => b.getTime() - a.getTime());

/**
 * 重置当前日期至午夜
 * @returns
 */
const midnightOfToday = (): Date => new Date(new Date().setHours(0, 0, 0, 0));

export {
  compare,
  dayOfYear,
  daysInMonth,
  diffDays,
  extract,
  format,
  formatYmd,
  formatSeconds,
  getFirstDate,
  getHoursAndMinutes,
  getLastDate,
  getMonthName,
  getPlusOneYear,
  getQuarter,
  getTimezone,
  getTomorrow,
  getWeekday,
  getYesterday,
  midnightOfToday,
  monthDiff,
  numberOfDays,
  suffixAmPm,
  sortAscending,
  sortDescending,
  ts
};
