/**
 * Created by yghysdr on 2017/4/13.
 * 用户信息
 */
import * as types from '../vuex-types';

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
    console.log('update_info' + payload);
    state.entity.phone = payload.phone;
    state.entity.token = payload.token;
  },
  [types.USER_SHOW_LOGIN] (state, payload) {
    state.showLogin = payload;
  }
};

const getters = {
  /**
   * 用户是否登入
   */
  userIsLogin (state) {
    if (!state.entity.phone || !state.entity.token) {
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
