/**
 * 生成一个随机布尔值
 * @returns
 */
const randomBoolean = (): boolean => Math.random() >= 0.5;

/**
 * 生成给定范围内的随机整数
 * @param min
 * @param max
 * @returns
 */
const randomInteger = (min: number, max: number): number => Math.floor(
  Math.random() * (max - min + 1)
) + min;

/**
 * 生成给定范围内的随机浮点数
 * @param min
 * @param max
 * @returns
 */
const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min;

export {
  randomBoolean,
  randomFloat,
  randomInteger
};
