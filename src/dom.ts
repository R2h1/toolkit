/**
 * 检查一个元素是否是另一个元素的后代
 * @param child
 * @param parent
 * @returns
 */
const isDescendant = (child: Node, parent: Node): boolean => parent.contains(child);

/**
 * 检查是否支持触摸事件
 * @returns
 */
const touchSupported = (): boolean => {
  if ('ontouchstart' in window || ((window as any).DocumentTouch && document instanceof (window as any).DocumentTouch)) {
    return true;
  }
  return false;
};

export {
  isDescendant,
  touchSupported
};
