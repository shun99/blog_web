/**
 * Created by yghysdr on 2017/4/13.
 * app 通用的状态
 */
import * as types from '../vuex-types';

const state = {
  toast: {
    show: false,
    msg: ''
  }
};

const mutations = {
  [types.APP_SHOW_TOAST] (state, payload) {
    state.toast.show = true;
    state.toast.msg = payload;
  }
};

export default {
  state,
  mutations
};
