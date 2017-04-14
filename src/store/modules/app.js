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

let timerId;
/**
 * payload 是一个对象
 * payload.interval 是 显示时间
 * payload.msg 是消息
 */
const mutations = {
  [types.APP_SHOW_TOAST] (state, payload) {
    let interval = payload.interval || 2000;
    state.toast.msg = payload.msg || '提示';
    state.toast.show = true;
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      state.toast.show = false;
    }, interval);
  }
};

export default {
  state,
  mutations
};
