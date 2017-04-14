/**
 * Created by yghysdr on 2017/4/13.
 * 用户信息
 */
import * as types from '../vuex-types';

/**
 * 对entity的改变尽可能是  entity中已经存在的字段，不然无法getters里的方法不能触发
 * @type {{entity: {uid: string, phone: string, token: string}, showLogin: boolean}}
 */
const state = {
  entity: {
    uid: '',
    phone: '',
    token: ''
  },
  showLogin: false
};

const mutations = {
  [types.USER_INFO_UPDATE] (state, payload) {
    console.log('update_info' + payload.uid);
    state.entity.phone = payload.phone;
    state.entity.token = payload.token;
    state.entity.uid = payload.uid;
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
  userIsLogin (state) {
    console.log('...');
    if (!state.entity.token || !state.entity.uid) {
      return false;
    } else {
      return true;
    }
  }
};

export default {
  state,
  mutations,
  getters
};
