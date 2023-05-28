/**
 * 1. history.back(); // 返回上一个页面; Or history.go(-1);
 */
/**
 * 检查一个元素是否是另一个元素的后代
 * @param child
 * @param parent
 * @returns
 */
declare const isDescendant: (child: Node, parent: Node) => boolean;
/**
 * 检查是否支持触摸事件
 * @returns
 */
declare const touchSupported: () => boolean;
/**
 * 检查某元素是否获得焦点
 * @param ele
 * @returns
 */
declare const hasFocus: (ele: Node) => boolean;
/**
 * 检测是否 Internet Explorer 浏览器
 * @returns
 */
declare const isIE: boolean;
/**
 * 检测是否 MacOS 浏览器
 * @returns
 */
declare const isMacBrowser: boolean;
/**
 * 检查用户是否滚动到页面底部
 * @returns
 */
declare const isAtBottom: () => boolean;
/**
 * 获取一个元素的所有兄弟姐妹
 * @param ele
 * @returns
 */
declare const siblings: (ele: Node) => Node[];
/**
 * 获取元素相对于文档的位置
 * @param ele
 * @returns
 */
declare const getPosition: (ele: Element) => {
    left: number;
    top: number;
};
/**
 * 获取选中的文本
 * @returns
 */
declare const getSelectedText: () => string;
/**
 * 隐藏一个元素
 * @param ele
 * @returns
 */
declare const hide: (ele: HTMLElement, type: 'display' | 'visibility') => void;
/**
 * 显示一个元素
 * @param ele
 * @returns
 */
declare const show: (ele: HTMLElement, type: 'display' | 'visibility') => void;
/**
 * toggle 一个元素
 * @param ele
 * @returns
 */
declare const toggle: (ele: HTMLElement, type: 'display' | 'visibility') => void;
/**
 * 在元素指定位置插入内容(元素或文本或 html)
 * @param ele
 * @param content
 * @param position
 * @returns
 */
declare const insert: (ele: Element, content: any, position?: 'afterbegin' | 'beforeend' | 'afterend' | 'beforebegin', type?: 'Element' | 'text' | 'HTML') => void;
/**
 * 跳转页面
 * @param url 如果 url 和当前页面相同,即相当于刷新
 * @returns
 */
declare const goTo: (url: string) => void;
/**
 * 滚动到顶部
 * @returns
 */
declare const toTop: () => void;
/**
 * 序列化表单数据
 * @param formEle
 * @returns
 */
declare const serialize: (formEle: HTMLFormElement) => Record<string, any>;
/**
 * 从给定文本 html 中去除 HTML
 * @param html
 * @returns
 */
declare const stripHtml: (html: string) => string;
/**
 * 替换元素
 * @param html
 * @returns
 */
declare const replace: (ele: Element, newEle: Element) => Element | null;
export { getPosition, getSelectedText, goTo, hasFocus, hide, insert, isAtBottom, isDescendant, isIE, isMacBrowser, replace, show, serialize, siblings, stripHtml, toggle, toTop, touchSupported };
