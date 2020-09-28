import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 1. 导入插件
import toast from 'components/common/toast'

Vue.config.productionTip = false;
// 解决移动端300ms延迟的插件

import FastClick from 'fastclick';

FastClick.attach(document.body);

// 图片懒加载

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  loading:require('./assets/img/img-loading.jpg')
})

// 2. 安装插件

Vue.use(toast);

Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Router from 'vue-router';
// 重写路由push方法,阻止重复点击报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
