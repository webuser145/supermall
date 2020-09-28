// 1. 导入vuex
import Vue from 'vue';
import Vuex from 'vuex';

// 导入相应模块

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 2. 安装vuex

Vue.use(Vuex);

// 3. 使用store对象

const state = {
  cartList:[]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


// 4. 导出store对象

export default store;
