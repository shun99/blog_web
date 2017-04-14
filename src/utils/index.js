/**
 * Created by yghysdr on 2017/4/14.
 * 在组件中直接使用弹窗如下比较复杂。
 * this.$store.commit(vuexTypes.APP_SHOW_TOAST, '未输入密码');
 * 于是做了如下的抽取
 */
import * as vuexTypes from '../store/vuex-types';
import store from '../store/index';

export function toast(msg, interval) {
  interval = interval || 2000;
  store.commit(vuexTypes.APP_SHOW_TOAST, {msg: msg, interval: interval});
}

export function loginStatus(status) {
  store.commit(vuexTypes.USER_SHOW_LOGIN, status);
}

function saveUser(user) {
  store.commit(vuexTypes.USER_INFO_UPDATE, user);
}

function curUser() {
  return store.state.user.entity;
}

export let user = {
  save: saveUser,
  curUser: curUser
};

function waitEdit(article) {
  store.commit(vuexTypes.ARTICLE_INFO, article);
}

function userType(userId) {
  if (!curUser().uid || !userId) {
    return 0;
  } else if (curUser().uid === userId) {
    return 1;
  } else {
    return 0;
  }
}

export let article = {
  waitEdit: waitEdit,
  userType: userType
};
