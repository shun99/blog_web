/**
 * Created by yghysdr on 2017/4/13.
 */
import * as types from '../vuex-types';

const state = {
  count: 11
};

const mutations = {
  [types.USER_INFO] (state) {
    // state 模块的局部状态
    state.count++;
  }
};

export default {
  state,
  mutations
};
