/**
 * Created by yghysdr on 2017/4/13.
 */
import * as types from '../vuex-types';

const state = {
  entity: {
    type: Object
  }
};

const getters = {
  getEditArticle (state) {
    return state.entity;
  }
};

const mutations = {
  [types.ARTICLE_EDIT_INFO] (state, payload) {
    // state 模块的局部状态
    state.entity = payload;
  }
};

export default {
  state,
  mutations,
  getters
};
