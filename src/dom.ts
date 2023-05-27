/**
 * 1. history.back(); // 返回上一个页面; Or history.go(-1);
 */

import { castArray } from './array';

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
  if ('ontouchstart' in window || ((window as any)?.DocumentTouch && document instanceof (window as any).DocumentTouch)) {
    return true;
  }
  return false;
};

/**
 * 检查某元素是否获得焦点
 * @param ele
 * @returns
 */
const hasFocus = (ele: Node): boolean => ele === document?.activeElement;

/**
 * 检测是否 Internet Explorer 浏览器
 * @returns
 */
const isIE = !!(document as any)?.documentMode;

/**
 * 检测是否 MacOS 浏览器
 * @returns
 */
const isMacBrowser: boolean = /Mac|iPod|iPhone|iPad/.test(navigator?.platform);

/**
 * 检查用户是否滚动到页面底部
 * @returns
 */
const isAtBottom = (): boolean => {
  const docElement = document.documentElement;
  return docElement.clientHeight + window.scrollY >= docElement.scrollHeight;
};

/**
 * 获取一个元素的所有兄弟姐妹
 * @param ele
 * @returns
 */
const siblings = (ele: Node): Node[] => (ele.parentNode
  ? Array.from(ele.parentNode.children).filter((child) => child !== ele)
  : []);

/**
 * 获取元素相对于文档的位置
 * @param ele
 * @returns
 */
const getPosition = (ele: Element) => {
  const rect = ele.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
};

/**
 * 获取选中的文本
 * @returns
 */
const getSelectedText = () => String(window.getSelection());

/**
 * 隐藏一个元素
 * @param ele
 * @returns
 */
const hide = (ele: HTMLElement, type: 'display' | 'visibility'): void => {
  const element = ele;
  if (type === 'display') {
    element.style.display = 'none';
    return;
  }
  if (type === 'visibility') {
    element.style.visibility = 'hidden';
    return;
  }
  element.hidden = true;
};

/**
 * 显示一个元素
 * @param ele
 * @returns
 */
const show = (ele: HTMLElement, type: 'display' | 'visibility'): void => {
  const element = ele;
  if (type === 'display') {
    element.style.display = '';
    return;
  }
  if (type === 'visibility') {
    element.style.visibility = 'visible';
    return;
  }
  element.hidden = false;
};

/**
 * toggle 一个元素
 * @param ele
 * @returns
 */
const toggle = (ele: HTMLElement, type: 'display' | 'visibility'): void => {
  const element = ele;
  if (type === 'display') {
    element.style.display = element.style.display === 'none' ? '' : 'none';
    return;
  }
  if (type === 'visibility') {
    element.style.visibility = element.style.visibility === 'visible' ? 'visible' : 'hidden';
    return;
  }
  element.hidden = !element.hidden;
};

/**
 * 在元素指定位置插入内容(元素或文本或 html)
 * @param ele
 * @param content
 * @param position
 * @returns
 */
const insert = (
  ele: Element,
  content: any,
  position: 'afterbegin' | 'beforeend' | 'afterend' | 'beforebegin' = 'afterend',
  type: 'Element' | 'text' | 'HTML' = 'Element'
): void => {
  const insertAdjacentFn = `insertAdjacent${type}` as 'insertAdjacentHTML' | 'insertAdjacentElement' | 'insertAdjacentText';
  ele[insertAdjacentFn](position, content);
};

/**
 * 跳转页面
 * @param url 如果 url 和当前页面相同,即相当于刷新
 * @returns
 */
const goTo = (url: string): void => {
  window.location.href = url;
};

/**
 * 滚动到顶部
 * @returns
 */
const toTop = (): void => window.scrollTo(0, 0);

/**
 * 序列化表单数据
 * @param formEle
 * @returns
 */
const serialize = (formEle: HTMLFormElement) => {
  const data = Array.from(new FormData(formEle) as any) as [string, any][];
  return data.reduce((acc, [key, value]) => {
    if (acc[key]) {
      acc[key] = castArray(acc[key]).concat(value);
    } else {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, any>);
};

/**
 * 从给定文本 html 中去除 HTML
 * @param html
 * @returns
 */
const stripHtml = (html: string): string => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';

/**
 * 替换元素
 * @param html
 * @returns
 */
const replace = (ele: Element, newEle: Element): Element | null => (ele.parentNode
  ? ele.parentNode.replaceChild(newEle, ele)
  : null);

export {
  getPosition,
  getSelectedText,
  goTo,
  hasFocus,
  hide,
  insert,
  isAtBottom,
  isDescendant,
  isIE,
  isMacBrowser,
  replace,
  show,
  serialize,
  siblings,
  stripHtml,
  toggle,
  toTop,
  touchSupported
};
