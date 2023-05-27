/**
 * 将弧度转换为度数
 * @param rad
 * @returns
 */
const radsToDegs = (rad: number): number => (rad * 180.0) / Math.PI;

/**
 * 将度数转换为弧度
 * @param rad
 * @returns
 */
const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0;

/**
 * 计算由两点定义的直线的角度;
 * @param p1
 * @param p2
 * @returns
 */
const getAngleOfLine = (p1: Point, p2: Point, type: 'radian' | 'degrees' = 'radian'): number => {
  const radian = Math.atan2(p2.y - p1.y, p2.x - p1.x);
  if (type === 'degrees') {
    return radsToDegs(radian);
  }
  return radian;
};

/**
 * 计算两个数之间的线性插值
 * @param a
 * @param b
 * @param amount
 * @returns
 */
const lerp = (a: number, b: number, amount: number): number => (1 - amount) * a + amount * b;

/**
 * 计算两点之间的中点
 * @param p1
 * @param p2
 * @returns
 */
const midpoint = (p1: Point, p2: Point): number[] => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];

/**
 * 检查一个点是否在矩形内
 * @param point
 * @param rect
 * @returns
 */
const isInside = (point: Point, rect: Rect): boolean => point.x > rect.x1
  && point.x < rect.x2
  && point.y > rect.y1
  && point.y < rect.y2;

/**
 * 检查一个矩形 a 是否包含另一个矩形 b
 * @param a
 * @param b
 * @returns
 */
const contains = (a: Rect, b: Rect): boolean => a.x1 <= b.x1
  && a.y1 <= b.y1
  && a.x2 >= b.x2
  && a.y2 >= b.y2;
/**
 * 计算两点之间的距离
 * @param p1
 * @param p2
 * @returns
 */
const distance = (p1: Point, p2: Point): number => Math.sqrt(
  (p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2
);

/**
 * 检查一个矩形是否与另一个矩形存在重叠部分;
 * @param a
 * @param b
 * @returns
 */
const overlaps = (a: Rect, b: Rect): boolean => (a.x1 < b.x2 && b.x1 < a.x2)
  || (a.y1 < b.y2 && b.y1 < a.y2);

/**
 * 在范围内标准化一个数字
 * @param value
 * @param min
 * @param max
 * @returns
 */
const normalizeRatio = (
  value: number,
  min: number,
  max: number
): number => (value - min) / (max - min);

/**
 * 将数字舍入到给定值的最接近倍数
 * @param value
 * @param nearest 倍数
 * @returns
 *   roundNearest(100, 30); // 90
 *   roundNearest(200, 30); // 210
 *   roundNearest(200, 40); // 200
 */
const roundNearest = (
  value: number,
  nearest: number
): number => Math.round(value / nearest) * nearest;

export {
  contains,
  degsToRads,
  distance,
  getAngleOfLine,
  isInside,
  lerp,
  midpoint,
  normalizeRatio,
  overlaps,
  radsToDegs,
  roundNearest
};
