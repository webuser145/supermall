import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
const Detail = () => import('../views/detail/Detail');

Vue.use(Router);

// // 重写路由push方法,阻止重复点击报错
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

// 重写路由replace方法,阻止重复点击报错
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/Detail/:iid',
    component:Detail
  }

]

const router = new Router({
  routes,
  mode:'history'
})


export default router;