/**
 * 将弧度转换为度数
 * @param rad
 * @returns
 */
declare const radsToDegs: (rad: number) => number;
/**
 * 将度数转换为弧度
 * @param rad
 * @returns
 */
declare const degsToRads: (deg: number) => number;
/**
 * 计算由两点定义的直线的角度;
 * @param p1
 * @param p2
 * @returns
 */
declare const getAngleOfLine: (p1: Point, p2: Point, type?: 'radian' | 'degrees') => number;
/**
 * 计算两个数之间的线性插值
 * @param a
 * @param b
 * @param amount
 * @returns
 */
declare const lerp: (a: number, b: number, amount: number) => number;
/**
 * 计算两点之间的中点
 * @param p1
 * @param p2
 * @returns
 */
declare const midpoint: (p1: Point, p2: Point) => number[];
/**
 * 检查一个点是否在矩形内
 * @param point
 * @param rect
 * @returns
 */
declare const isInside: (point: Point, rect: Rect) => boolean;
/**
 * 检查一个矩形 a 是否包含另一个矩形 b
 * @param a
 * @param b
 * @returns
 */
declare const contains: (a: Rect, b: Rect) => boolean;
/**
 * 计算两点之间的距离
 * @param p1
 * @param p2
 * @returns
 */
declare const distance: (p1: Point, p2: Point) => number;
/**
 * 检查一个矩形是否与另一个矩形存在重叠部分;
 * @param a
 * @param b
 * @returns
 */
declare const overlaps: (a: Rect, b: Rect) => boolean;
/**
 * 在范围内标准化一个数字
 * @param value
 * @param min
 * @param max
 * @returns
 */
declare const normalizeRatio: (value: number, min: number, max: number) => number;
/**
 * 将数字舍入到给定值的最接近倍数
 * @param value
 * @param nearest 倍数
 * @returns
 *   roundNearest(100, 30); // 90
 *   roundNearest(200, 30); // 210
 *   roundNearest(200, 40); // 200
 */
declare const roundNearest: (value: number, nearest: number) => number;
export { contains, degsToRads, distance, getAngleOfLine, isInside, lerp, midpoint, normalizeRatio, overlaps, radsToDegs, roundNearest };
