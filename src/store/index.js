/**
 * Created by yghysdr on 2017/4/13.
 * vuex 管理中心
 * 采用模块化管理每个单独的模块，为防止子模块中的变量重名，
 * 子模块中的变量统一在vuex-types.js中管理
 */
import Vue from 'vue';
import Vuex from 'vuex';
import article from './modules/article';
import user from './modules/user';
import app from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    article,
    user,
    app
  }
});
