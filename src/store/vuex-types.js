/**
 * Created by yghysdr on 2017/4/13.
 *  action、mutation、和 getter中方法名称
 *
 * 模块内部的 action、mutation、和 getter 现在仍然注册在全局命名空间——
 * 这样保证了多个模块能够响应同一 mutation 或 action。你可以通过添加前缀
 * 或后缀的方式隔离各模块，以避免名称冲突。
 */
/**
 * 文章信息
 */
export const ARTICLE_INFO = 'ARTICLE_INFO';
/**
 * 用户信息
 */
export const USER_INFO_UPDATE = 'USER_INFO_UPDATE';

/**
 * app通用
 */
export const USER_SHOW_LOGIN = 'USER_SHOW_LOGIN';
export const APP_SHOW_TOAST = 'APP_SHOW_TOAST';
