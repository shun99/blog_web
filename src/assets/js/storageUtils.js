/**
 * Created by yghysdr on 2017/4/12.
 * 数据的存储与读取
 * ECMAScript6 方式导出
 * import的时候 按需引入 使用那一模块直接引入即可
 */

export function saveToLocal (id, key, value) {
  let info = window.localStorage._blog_info;
  if (!info) {
    info = {};
    info[id] = {};
  } else {
    info = JSON.parse(info);
    if (!info[id]) {
      info[id] = {};
    }
  }
  info[id][key] = value;
  window.localStorage._blog_info = JSON.stringify(info);
}

export function loadFromLocal (id, key, def) {
  let info = window.localStorage._blog_info;
  if (!info) {
    return def;
  }
  info = JSON.parse(info)[id];
  if (!info) {
    return def;
  }
  let ret = info[key];
  return ret || def;
}

export function saveToSession (id, key, value) {
  let info = window.sessionStorage._blog_info;
  if (!info) {
    info = {};
    info[id] = {};
  } else {
    info = JSON.parse(info);
    if (!info[id]) {
      info[id] = {};
    }
  }
  info[id][key] = value;
  window.sessionStorage._blog_info = JSON.stringify(info);
}
/**
 * 导出函数 直接使用
 * @param id
 * @param key
 * @param def
 * @returns {*}
 */
export function loadFromSession (id, key, def) {
  let info = window.sessionStorage._blog_info;
  if (!info) {
    return def;
  }
  info = JSON.parse(info)[id];
  if (!info) {
    return def;
  }
  let ret = info[key];
  return ret || def;
}
/**
 * 导出类，使用时需要创建类的实例
 * es6 类中不支持直接创建成员变量，成员变量都是在函数中直接使用（this.成员变量）
 */
export class Storage {
  constructor () {
    this.token = 'user_token';
    this.curentUser = 'user_current';
  }
}
/**
 * 导出对象
 */
export let StorageKey = {
  user: 'user',
  currentUser: 'user_current',
  token: 'user_token',
  phone: 'user_phone'
};
