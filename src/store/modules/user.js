/**
 * Created by yghysdr on 2017/4/13.
 * 用户信息
 */
import * as types from '../vuex-types';
import {saveToSession, loadFromSession} from '../../utils/storageUtils';

/**
 * 对entity的改变尽可能是  entity中已经存在的字段，不然无法getters里的方法不能触发
 * @type {{entity: {uid: string, phone: string, token: string}, showLogin: boolean}}
 */
const state = {
  entity: {
    uid: '',
    phone: '',
    token: '',
    avatar: ''
  },
  showLogin: false
};

const mutations = {
  [types.USER_INFO_UPDATE] (state, payload) {
    console.log('update_info' + payload);
    state.entity.phone = payload.phone;
    state.entity.token = payload.token;
    state.entity.uid = payload.uid;
    state.entity.avatar = payload.avatar;
    saveToSession('userInfo', 'current_user', payload);
  },
  [types.USER_SHOW_LOGIN] (state, payload) {
    state.showLogin = payload;
  }
};

const getters = {
  /**
   * 用户是否登入
   * 当entity是{}，entity改变，不能触发
   */
  isLogin (state) {
    if (!state.entity.token || !state.entity.uid || !state.entity.phone) {
      let userInfo = loadFromSession('userInfo', 'current_user', '');
      state.entity.phone = userInfo.phone;
      state.entity.token = userInfo.token;
      state.entity.uid = userInfo.uid;
      state.entity.avatar = userInfo.avatar;
      if (!state.entity.token || !state.entity.uid || !state.entity.phone) {
        return null;
      } else {
        return state.entity;
      }
    } else {
      return state.entity;
    }
  },
  curUser (state) {
    if (!state.entity.token || !state.entity.uid || !state.entity.phone) {
      let userInfo = loadFromSession('userInfo', 'current_user', '');
      state.entity.phone = userInfo.phone;
      state.entity.token = userInfo.token;
      state.entity.uid = userInfo.uid;
      state.entity.avatar = userInfo.avatar;
    }
    return state.entity;
  }
};

export default {
  state,
  mutations,
  getters
};
