import Toast from './Toast'

const obj = {}

obj.install = (Vue) => {
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2. new的方式，根据组件构造器，可以创建出来一个组件对象

  const toast = new toastContrustor()

  // 3. 将组件对象，手动挂载在某一个元素上
  // console.log(toast.$el)

  toast.$mount(document.createElement('div'));

  // 4. toast.$el对应的就是该div

  // console.log(toast.$el)

  document.body.appendChild(toast.$el);

  //  4. 将toast添加到Vue原型的$toast方法上

  Vue.prototype.$toast = toast;
}

export default obj;