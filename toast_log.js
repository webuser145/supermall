// 1. 组件化toast的封装

// (1) 创建Toast组件

{/* <template>
  <div class="toast" v-show="show">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name:'Toast',
  props:{
    message:{
      type:String,
      default:''
    },
    show:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .toast{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:rgba(0,0,0,.75);
    color:#fff;
    padding:8px 10px;
  }
</style>> */}

// (2) 在Detail中导入并设置

import Toast from "components/common/toast/Toast";

components:{
  Toast
}

{/* <toast :message="message" :show="show"/> */}


// data(){
//   return {
//     message:'',
//     show:false
//   }
// }


this.addShopCart(shop_cart_info).then(res => {
  this.show = true;
  this.message = res;
  setTimeout(() => {
    this.show = false;
    this.message = '';
  },2000)
})


//  2.插件化Toast的封装

// (1) 创建组件

{/* <template>
  <div class="toast" v-show="isShow">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name:'Toast',
  // props:{
  //   message:{
  //     type:String,
  //     default:''
  //   },
  //   show:{
  //     type:Boolean,
  //     default:false
  //   }
  // },
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,delay = 2000){
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      },delay)
    }
  }
}
</script>

<style scoped>
  .toast{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:rgba(0,0,0,.75);
    color:#fff;
    padding:8px 10px;
    z-index:999;
  }
</style>> */}


// (2) 创建index.js

import Toast from './Toast'

const obj = {}

obj.install = (Vue) => {
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2. new的方式，根据组件构造器，可以创建出来一个组件对象

  const toast = new toastContrustor()

  // 3. 将组件对象，手动挂载在某一个元素上

  toast.$mount(document.createElement('div'));

  // 4. toast.$el对应的就是该div

  document.body.appendChild(toast.$el);

  //  4. 将toast添加到Vue原型的$toast方法上

  Vue.prototype.$toast = toast;
}

export default obj;

// (3) 在main.js中导入插件并安装

// 1. 导入插件
import toast from 'components/common/toast'

// 2. 安装插件

Vue.use(toast);

// (4) 使用插件

this.$toast.show(res,2000);